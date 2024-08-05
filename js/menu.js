document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const linksMenu = document.querySelector('.links_menu');

    menuBtn.addEventListener('click', () => {
        if (linksMenu.classList.contains('show')) {
            linksMenu.classList.remove('show');
            linksMenu.classList.add('hide');
        } else {
            linksMenu.classList.remove('hide');
            linksMenu.classList.add('show');
        }
    });
});
