gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
document.addEventListener('DOMContentLoaded', () => {
    const app = Vue.createApp({
        data() {
            return {
                activeCat: 'tous',
                categories: [
                    { id: 'tous', name: 'Tous' },
                    { id: 'web', name: 'Production web' },
                    { id: 'montage', name: 'Montage visuelle' },
                    { id: 'troisDimension', name: '3D' }
                ],
                projects: []
            };
        },
        mounted() {
            fetch('../project.json')
                .then(response => response.json())
                .then(data => {
                    this.projects = data;
                    console.log(this.projects)
                })
                .catch(error => console.error('Erreur de chargement des projets:', error));
        },
        methods: {
            setActive(categories) {
                this.activeCat = categories;
            }
        }
    });

    app.mount('#app');
    const logiciels = document.querySelectorAll(".logiciel");
    const logo = document.querySelectorAll(".logo_logiciel");
    const int_titre = document.querySelector("#interet_titre");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel",
            start: "top 10%",
            toggleActions: "play none none none",
            markers: true
        }
    });
    tl.fromTo(int_titre,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
    tl.fromTo(logo,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );

    tl.fromTo(logiciels,
        { opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px",
            cursor.style.top = e.clientY + "px";
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // Section À propos
    const profilTitre = document.querySelector("#profil");
    const profilText = document.querySelector(".container-propos");
    const texteApro = document.querySelectorAll(".texte_apro");

    gsap.timeline({
        scrollTrigger: {
            trigger: "#propos1",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })
        .fromTo(profilTitre,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.3, ease: "power2.out" }
        )
        .fromTo(profilText,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(texteApro,
            { color: "#ffffff" },
            {
                color: "#ed6a5a",
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.4,
                onStart: () => {
                    texteApro.forEach(el => el.style.mixBlendMode = "difference");
                }
            }
        );
    const projet = document.querySelector("#projects");
    const cat = document.querySelector(".display_categories");
    const cards = document.querySelectorAll(".card");

    gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top 60%",
            toggleActions: "play none none reverse",

        }
    })
        .fromTo(projet,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(cat,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, // commence légèrement avant la fin de l'animation du titre
        )


});



