document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.item_title');

    buttons.forEach(button => {
        const content = button.nextElementSibling;
        button.addEventListener('click', function() {
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.classList.remove('active');
            } else {
                content.style.display = 'block';
                button.classList.add('active');
            }
        });
    });
});