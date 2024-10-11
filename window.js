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

    Anchor.addEventListener('click', function (bozo) {
        bozo.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
    checkOnlineStatus();
}

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

function AutoSmoothScroll(Anchor){
    Anchor.addEventListener('click', function(bozo) {
        bozo.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(Anchor => {
    AutoSmoothScroll(Anchor)
});

document.addEventListener('DOMContentLoaded', init);
window.addEventListener("online", checkOnlineStatus);
window.addEventListener("offline", checkOnlineStatus);