//impoort gsap et plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.addEventListener('DOMContentLoaded', () => {
    //creation de lapp vue
    const app = Vue.createApp({
        data() {
            return {
                //mettre la categorie active par defaut a tous
                activeCat: 'tous',
                //les categories de projet
                categories: [
                    { id: 'tous', name: 'Tous' },
                    { id: 'web', name: 'Web' },
                    { id: 'montage', name: 'Montage visuelle' },
                    { id: 'troisDimension', name: '3D' }
                ],
                //les projets
                projects: [],
                selectedProjet: []
            };
        },
        //charger les projets depuis le fichier JSON
        mounted() {
            const urlParams = new URLSearchParams(window.location.search);
            const projId = parseInt(urlParams.get('proj-id'));

            fetch('../project.json')
                .then(response => response.json())
                .then(data => {
                    this.projects = data;
                    console.log(this.projects);
                    // Chercher le projet correspondant
                    this.selectedProjet = this.projects.find(p => p.id === projId);
                    console.log(this.selectedProjet);
                })
                .catch(error => console.error('Erreur de chargement des projets:', error));
            },
        methods: {
            consoleProjet(){
                console.log(this.selectedProjet)
            },
            
            //changer la categorie active lorsqu'on clique sur un bouton
            setActive(categories) {
                this.activeCat = categories;
            }

        }
    });
    //monter l app vue
    app.mount('#app');
    // Animation GSAP pour la section Logiciels
    const logiciels = document.querySelectorAll(".logiciel");
    const logo = document.querySelectorAll(".logo_logiciel");
    const int_titre = document.querySelector("#interet_titre");
    const logi_titre = document.querySelector("#titre_logi");


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel",
            start: "top 70%",
            toggleActions: "play none none none",

        }
    });
    tl.fromTo(logi_titre,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );

    tl.fromTo(logo,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, stagger: 0.1, ease: "power2.out" }
    );
    tl.fromTo(int_titre,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, stagger: 0.2, ease: "power2.out" }
    );
    tl.fromTo(logiciels,
        { opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, stagger: 0.1, ease: "power2.out" }
    );
    // Curseur personnalisé
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px",
            cursor.style.top = e.clientY + "px";
    });

    // Mettre à jour l'année dans le pied de page
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // Section À propos
    const profilTitre = document.querySelector("#profil");
    const profilText = document.querySelector(".container-propos");
    const texteApro = document.querySelectorAll("#propos1 .texte_apro");
    const texteAproObj = document.querySelectorAll("#objectif .texte_apro");
    const texteAproRole = document.querySelectorAll("#role .texte_apro");
    const texteAproPro = document.querySelectorAll("#processus_texte .texte_apro");
    const texteAproDesign = document.querySelectorAll("#design_texte .texte_apro");
    const texteAproDev = document.querySelectorAll("#dev_texte .texte_apro");
    const texteAproOpti = document.querySelectorAll("#optimisation_texte .texte_apro");
    gsap.timeline({
        scrollTrigger: {
            trigger: "#propos1",
            start: "top 60%",
            toggleActions: "play none none reverse",

        }
    })
        .fromTo(profilTitre,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(profilText,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(texteApro,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.4,
            }
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: "#objectif",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproObj,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 3,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: "#role",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproRole,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.4,
            }
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: "#processus_texte",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproPro,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: "#design_texte",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproDesign,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: "#dev_texte",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproDev,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: "#optimisation_texte",
            start: "top 80%",
            toggleActions: "play none none reverse",

        }
    })

        .fromTo(texteAproOpti,
            { color: "#E5E5E5" },
            {
                color: "#ed6a5a",
                duration: 2,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    // Section Projets
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
        );
    const main_index = document.querySelector(".main_index");
    const main_projet = document.querySelector(".main_projet");

    gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel",
            start: "top 50%",
            toggleActions: "play none none reverse",


        }
    })
        .fromTo(main_index,
            { background: "linear-gradient(to right, #0f172a, #334155)", ease: "power2.inOut" },
            { background: "#E5E5E5", duration: 0.8, ease: "power2.inOut" }
        )
        .fromTo(main_index,
            { filter: "brightness(1)", ease: "power2.inOut" },
            { filter: "brightness(0.95)", duration: 0.4, yoyo: true, repeat: 1, ease: "power1.inOut" },
            "-=0.3"
        );


    let tlnom = gsap.timeline({
        scrollTrigger: {
            trigger: "#title",
            start: "top 25%",
            toggleActions: "play none none reverse",
            scrub: 2
        }
    });


    tlnom.fromTo(".prenom",
        { y: 0, rotate: 0, scale: 1 }, // au début droit et normal
        { y: 60, duration: 0.6, ease: "power2.inOut" }, 0
    )
        .fromTo(".nom",
            { y: 0, rotate: 0, scale: 1 }, // idem
            { y: 90, duration: 0.5, ease: "power2.inOut" }, 0
        );


    const logiciel_projet = document.querySelectorAll(".logiciel_projet");
    gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel_prof",
            start: "top 60%",
            toggleActions: "play none none reverse",


        }
    })
        .fromTo(logiciel_projet,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.5, ease: "power2.out" }
        )
    const collab = document.querySelectorAll(".collab");
    gsap.timeline({
        scrollTrigger: {
            trigger: "#colaboration",
            start: "top 60%",
            toggleActions: "play none none reverse",

        }
    })
        .fromTo(collab,
            { z: 20, opacity: 0, color: "#ed6a5a" },
            { z: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out", color: "#E5E5E5" }
        )
    const propos = document.querySelectorAll(".propos");
    gsap.timeline({
        scrollTrigger: {
            trigger: "#propos1",
            start: "top 60%",
            toggleActions: "play none none reverse",
            scrub: 2,

        }
    })
        .fromTo(propos,
            { x: 0, scale: 1 },
            { x: 100, duration: 0.5, stagger: 0.2, ease: "power2.out" }
        )
});





