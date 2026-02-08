const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';

// Apply the theme immediately
if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

toggleBtn.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply theme
    htmlElement.setAttribute('data-theme', newTheme);

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Update Icon
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'light') {
        toggleBtn.textContent = '☀️'; // Sun icon
    } else {
        toggleBtn.textContent = '🌙'; // Moon icon
    }
}

// --- RTL LOGIC ---
const rtlToggleBtn = document.getElementById('rtl-toggle');
const currentDir = localStorage.getItem('dir') || 'ltr';

// Apply initial state
htmlElement.setAttribute('dir', currentDir);
updateRtlButton(currentDir);

rtlToggleBtn.addEventListener('click', function () {
    const dir = htmlElement.getAttribute('dir');
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';

    htmlElement.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);
    updateRtlButton(newDir);
});

function updateRtlButton(dir) {
    if (dir === 'rtl') {
        rtlToggleBtn.textContent = 'RTL';
        rtlToggleBtn.classList.add('active');
    } else {
        rtlToggleBtn.textContent = 'LTR';
        rtlToggleBtn.classList.remove('active');
    }
}