
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Animaciones de entrada para las secciones
const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('habilidad')) {
                entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animación suave del menú
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Observar secciones para animaciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observar habilidades para animación escalonada
    const habilidades = document.querySelectorAll('.habilidad');
    habilidades.forEach(habilidad => {
        habilidad.classList.add('skill-fade');
        observer.observe(habilidad);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
});

const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.innerHTML = '';
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
};

// Iniciar animación de typing cuando la sección es visible
const initTypeWriter = () => {
    const presentation = document.querySelector('#sobre-mi p');
    if (presentation) {
        const text = presentation.innerHTML;
        presentation.innerHTML = '';
        typeWriter(presentation, text);
    }
};
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

