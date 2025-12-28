const collapsibles = document.querySelectorAll('.collapsible');


collapsibles.forEach(collapsible => {
    const header = collapsible.querySelector('.collapsible-header')
    if (!header) return;
    const iconHeader = header.querySelector('.collapsible-icon')
    iconHeader.addEventListener('click', function() {
        const content = header.nextElementSibling;
        if (!content) return;

        content.classList.toggle('open')
        collapsible.classList.toggle('open')
        iconHeader.textContent = content.classList.contains('open') ? "-" : "+"
    })
})