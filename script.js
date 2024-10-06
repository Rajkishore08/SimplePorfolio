// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add event listeners to sections for animation
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('scroll', function () {
        if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('animate');
        }
    });
});

// Add event listener to toggle sections on click
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', function () {
        const section = header.parentNode;
        section.classList.toggle('expanded');
    });
});

// Add event listener to show/hide additional information
document.querySelectorAll('.additional').forEach(additional => {
    additional.addEventListener('click', function () {
        const content = additional.nextElementSibling;
        content.classList.toggle('visible');
    });
});

// Add event listener to show/hide certifications
document.querySelectorAll('.certification').forEach(certification => {
    certification.addEventListener('click', function () {
        const details = certification.nextElementSibling;
        details.classList.toggle('visible');
    });
});

// Add event listener to show/hide projects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const details = project.nextElementSibling;
        details.classList.toggle('visible');
    });
});

// Add event listener to show/hide honors and awards
document.querySelectorAll('.honor').forEach(honor => {
    honor.addEventListener('click', function () {
        const details = honor.nextElementSibling;
        details.classList.toggle('visible');
    });
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Debounce function for performance optimization
function debounce(func, wait = 15, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Function to handle animations on scroll
function handleScrollAnimations() {
    document.querySelectorAll('section').forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

// Add optimized scroll event listener using debounce
window.addEventListener('scroll', debounce(handleScrollAnimations));

// Add event listener to toggle sections on click
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', function () {
        const section = header.parentNode;
        section.classList.toggle('expanded');
    });
});

// Add event listener to show/hide additional information
document.querySelectorAll('.additional').forEach(additional => {
    additional.addEventListener('click', function () {
        const content = additional.nextElementSibling;
        content.classList.toggle('visible');
    });
});

// Add event listener to show/hide certifications
document.querySelectorAll('.certification').forEach(certification => {
    certification.addEventListener('click', function () {
        const details = certification.nextElementSibling;
        details.classList.toggle('visible');
    });
});

// Add event listener to show/hide projects
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const details = project.nextElementSibling;
        details.classList.toggle('visible');
    });
});

// Add event listener to show/hide honors and awards
document.querySelectorAll('.honor').forEach(honor => {
    honor.addEventListener('click', function () {
        const details = honor.nextElementSibling;
        details.classList.toggle('visible');
    });
});
