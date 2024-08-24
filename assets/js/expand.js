document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.item_title');

    buttons.forEach(button => {
        const content = button.nextElementSibling;
        
        button.addEventListener('click', function() {
            if (content.classList.contains('expanded')) {
                // Smoothly collapse
                content.style.maxHeight = content.scrollHeight + 'px'; // Set the current height to trigger transition
                requestAnimationFrame(() => {
                    content.style.maxHeight = '0px';
                });
                content.classList.remove('expanded');
                button.classList.remove('active');
            } else {
                // Smoothly expand
                content.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + 'px'; // Temporarily set to content's scroll height
                button.classList.add('active');
                
                // Scroll to the content if it's out of view
                // content.scrollIntoView({ behavior: 'smooth', block: 'start' });

                 // Custom scrolling
                setTimeout(() => {
                    const contentRect = content.getBoundingClientRect();
                    const absoluteElementTop = contentRect.top + window.pageYOffset;
                    const middle = absoluteElementTop - (window.innerHeight / 2);

                    window.scrollTo({ top: middle, behavior: 'smooth' });
                }, 100); // Delay to ensure maxHeight transition completes
                
                // Reset maxHeight after transition ends to allow dynamic content size changes
                content.addEventListener('transitionend', function() {
                    if (content.classList.contains('expanded')) {
                        content.style.maxHeight = 'none';
                    }
                }, { once: true });
            }
        });
    });
});
