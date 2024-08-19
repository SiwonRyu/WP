document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-text');

    buttons.forEach(button => {
        const content = button.nextElementSibling;
        button.addEventListener('click', function() {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
