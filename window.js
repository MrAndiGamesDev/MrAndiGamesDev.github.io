// Add responsive styles
const bodystyle = `
    @media (max-width: 600px) {
        body {
            font-size: 14px;
        }
        h1 {
            font-size: 24px;
        }
        h2 {
            font-size: 20px;
        }
        .project, .mylinks a {
            width: 100%;
            margin-bottom: 15px;
        }
    }
`;

const style = document.createElement('style');

function checkOnlineStatus() {
    const isOffline = !navigator.onLine;
    const offlineAlert = document.getElementById('offlineAlert');
    const onlineContent = document.getElementById('onlineContent');

    if (isOffline) {
        offlineAlert.classList.remove('hidden');
        onlineContent.classList.add('hidden');
        offlineAlert();
    } else {
        offlineAlert.classList.add('hidden');
        onlineContent.classList.remove('hidden');
    }
}

function init() {
    const projects = [
        {
            title: "Roblox Group",
            description: "A collaborative space for game development and community engagement.",
            link: "https://www.roblox.com/groups/17082880/MrAndi-Games",
            linkText: "Visit Group"
        },
        {
            title: "Upcoming Projects",
            description: "Stay tuned for exciting new Roblox games and experiences!",
            link: "https://www.roblox.com/games/12430041994/Gravity-But-With-Sword-Fight-In-Dev",
            linkText: "Gravity But With Sword Fight In Dev"
        }
    ];

    const links = [
        {
            text: "Discord Server",
            url: "https://discord.gg/VV6njGz7Br"
        },
        {
            text: "Roblox Profile",
            url: "https://www.roblox.com/users/3362493084/profile"
        },
        {
            text: "Roblox Group",
            url: "https://www.roblox.com/groups/17082880/MrAndi-Games"
        }
    ];

    function createProjectElement(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">${project.linkText}</a>
        `;
        return projectDiv;
    }

    function createLinkElement(link) {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        return linkElement;
    }

    const projectsContainer = document.getElementById('projectsContainer');
    projects.forEach(project => {
        projectsContainer.appendChild(createProjectElement(project));
    });

    const linksContainer = document.getElementById('linksContainer');
    links.forEach(link => {
        linksContainer.appendChild(createLinkElement(link));
    });

    checkOnlineStatus();
}
// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

// Smooth fade-in effect for page elements
function fadeInElements() {
    const elements = document.querySelectorAll('.container > *');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = '1';
        }, index * 150);
    });
}

// Function to adjust layout based on screen size
function adjustLayout() {
    const container = document.querySelector('.container');
    const projectsContainer = document.getElementById('projectsContainer');
    const linksContainer = document.getElementById('linksContainer');

    if (window.innerWidth <= 600) {
        container.style.padding = '10px';
        projectsContainer.style.flexDirection = 'column';
        linksContainer.style.flexDirection = 'column';
    } else {
        container.style.padding = '20px';
        projectsContainer.style.flexDirection = 'row';
        linksContainer.style.flexDirection = 'row';
    }
}

// Function to add smooth scrolling
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Function to add fade-in effect
function addFadeInEffect() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.container > *').forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
}

// Function to add smooth transitions
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: all 0.4s ease-in-out;
        }
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        .hidden {
            opacity: 0;
            transform: translateY(20px);
        }
    `;
    document.head.appendChild(style);
}

// Initialize smooth effects
function initSmoothEffects() {
    addSmoothScroll();
    addFadeInEffect();
    addSmoothTransitions();
}

// Call adjustLayout on page load and window resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Apply smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), 1000);
    });
});

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSmoothEffects);
style.textContent = bodystyle;
document.head.appendChild(style);

// Call fade-in function when the page loads
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', fadeInElements);
window.addEventListener("online", checkOnlineStatus);
window.addEventListener("offline", checkOnlineStatus);