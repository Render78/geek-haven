let toggle = document.getElementById('toggle');
let lblToggle = document.getElementById('lblToggle');
let modeIcon = document.getElementById('modeIcon');

if (localStorage.getItem('darkMode') === 'activated') {
    document.body.classList.add('dark');
    lblToggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    toggle.checked = true;
}

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    if (checked === true) {
        lblToggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        localStorage.setItem('darkMode', 'activated');
    } else {
        lblToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        localStorage.removeItem('darkMode');
    }
});

modeIcon.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        lblToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        localStorage.removeItem('darkMode');
    }
});