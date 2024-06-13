document.getElementById('theme-switcher').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    let sections = ['hero', 'about-us', 'strength', 'footer'];
    sections.forEach(section => {
        document.getElementById(section).classList.toggle('dark-theme-section');
    });
});
