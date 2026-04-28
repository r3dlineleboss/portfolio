const scrollLinks = document.querySelectorAll('a[href^="#"]');
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
const slides = document.querySelector('.slides');
const slideButtons = document.querySelectorAll('.slide-btn');
const slideItems = document.querySelectorAll('.slide');

let currentSlide = 0;

const goToSlide = index => {
    currentSlide = Math.max(0, Math.min(index, slideItems.length - 1));
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
};

scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        const targetSlide = [...slideItems].findIndex(slide => `#${slide.id}` === href);
        if (targetSlide !== -1) {
            goToSlide(targetSlide);
        }
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});

slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.classList.contains('next') ? 1 : -1;
        goToSlide(currentSlide + direction);
    });
});

if (navToggle) {
    navToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

window.addEventListener('resize', () => {
    goToSlide(currentSlide);
});

// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

const projectDetails = {
    crousty: {
        title: 'Site Crousty Movies',
        description: 'Projet de développement web en groupe pour créer une plateforme de films. Nous avons développé un site web complet avec une base de données de films, des fonctionnalités de recherche et une interface utilisateur moderne. Ce projet nous a permis de travailler en équipe sur toutes les étapes du développement, de la conception à la mise en ligne.',
        skills: 'PHP, HTML, CSS, JavaScript, MySQL',
        images: ['images/sitecrousty.png'] // Add more images if available
    },
    pxl: {
        title: 'Affiche pour la PXL LAN',
        description: 'Création d\'une affiche événementielle pour promouvoir la PXL LAN, un événement gaming. L\'affiche utilise une esthétique rétro inspirée des années 80 avec des couleurs vives et des éléments graphiques accrocheurs. Le design met en avant les dates, le lieu et les activités de l\'événement.',
        skills: 'Photoshop, Illustrator, Design graphique, Typographie',
        images: ['images/retro.png']
    },
    box: {
        title: 'Projet de box fictif',
        description: 'Conception complète d\'une identité visuelle et de packaging pour une box marketing fictive. Le projet incluait la création du logo, des couleurs de marque, et la conception des éléments de packaging. L\'objectif était de créer une identité cohérente et attrayante pour un produit innovant.',
        skills: 'Branding, Packaging design, Illustrator, Design produit',
        images: ['images/box.png']
    },
    bande: {
        title: 'Montage bande annonce',
        description: 'Réalisation d\'une bande annonce dynamique pour un projet audiovisuel. Le montage utilise des effets visuels, des transitions rapides et une musique rythmée pour créer un contenu engageant. Le projet a nécessité une coordination précise entre les éléments visuels et sonores.',
        skills: 'Adobe Premiere, After Effects, Montage vidéo, Effets visuels',
        images: [] // No additional images
    },
    cv: {
        title: 'CV vidéo',
        description: 'Création d\'un CV vidéo innovant pour présenter mes compétences et expériences de manière dynamique. Le format vidéo permet de montrer ma personnalité et mes réalisations de façon plus engageante qu\'un CV traditionnel. Le montage inclut des animations et des transitions fluides.',
        skills: 'Montage vidéo, Storytelling, Adobe Premiere, Communication',
        images: []
    },
    jeu: {
        title: 'Montage jeu vidéo',
        description: 'Édition de séquences de gameplay pour créer un montage captivant. Le projet met en valeur les mécaniques de jeu, les graphismes et l\'ambiance. Utilisation d\'effets spéciaux et de musique pour renforcer l\'impact visuel.',
        skills: 'Montage vidéo, Effets visuels, Adobe Premiere, Gaming',
        images: []
    },
    dark: {
        title: 'Info sur Dark Patterns',
        description: 'Vidéo informative réalisée en collaboration sur les dark patterns en UX/UI. Le projet explique les pratiques manipulatrices utilisées dans le design d\'interface et leurs impacts sur les utilisateurs. Réalisé en équipe avec recherche documentaire et montage pédagogique.',
        skills: 'Recherche, Montage vidéo, Communication visuelle, UX/UI',
        images: []
    },
    box2: {
        title: 'Projet de box fictif',
        description: 'Conception complète d\'une identité visuelle et de packaging pour une box marketing fictive. Le projet incluait la création du logo, des couleurs de marque, et la conception des éléments de packaging. L\'objectif était de créer une identité cohérente et attrayante pour un produit innovant.',
        skills: 'Branding, Packaging design, Illustrator, Design produit',
        images: ['images/box.png']
    },
    frontend: {
        title: 'Développement Web Frontend',
        description: 'Création d\'interfaces web modernes et responsives avec une attention particulière à l\'expérience utilisateur. Développement de composants réutilisables et d\'animations fluides pour créer des sites web interactifs et engageants. Maîtrise des frameworks modernes et des meilleures pratiques de développement frontend.',
        skills: 'HTML, CSS, JavaScript, React, Vue.js, Responsive Design',
        images: []
    },
    backend: {
        title: 'Développement Backend',
        description: 'Création d\'APIs robustes et de systèmes backend performants. Gestion de bases de données relationnelles et non-relationnelles, implémentation de logique métier complexe, et mise en place de systèmes d\'authentification et d\'autorisation sécurisés. Optimisation des performances et scalabilité des applications.',
        skills: 'PHP, Node.js, Express, MySQL, MongoDB, REST API',
        images: []
    }
};

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const project = e.target.getAttribute('data-project');
        const details = projectDetails[project];
        if (details) {
            modalBody.innerHTML = `
                <h2>${details.title}</h2>
                <p>${details.description}</p>
                <p><strong>Compétences :</strong> ${details.skills}</p>
                ${details.images.map(img => `<img src="${img}" alt="${details.title}">`).join('')}
            `;
            modal.style.display = 'block';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
