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
    const logi_titre = document.querySelector("#titre_logi");
    const main = document.querySelector(".main_projet");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel",
            start: "top 70%",
            toggleActions: "play none none none",
            markers: true
        }
    });
    tl.fromTo(logi_titre,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
  
    tl.fromTo(logo,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
    tl.fromTo(int_titre,
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
            start: "top 80%",
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
            { color: "#ffffff" },
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
                { color: "#ffffff" },
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
                    { color: "#ffffff" },
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
                        { color: "#ffffff" },
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
                            { color: "#ffffff" },
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
                                { color: "#ffffff" },
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
                                    { color: "#ffffff" },
                                    {
                                        color: "#ed6a5a",
                                        duration: 2,
                                        ease: "power2.out",
                                        stagger: 0.4,
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
        );


        gsap.timeline({
            scrollTrigger: {
                trigger: "#logiciel",
                start: "top 50%",
                toggleActions: "play none none reverse",
                markers:true
    
            }
        })
            .fromTo(main,
                {  background : "linear-gradient(to right, #0f172a, #334155);"  },
                { background: "#E2E0DA", duration:0.5, ease: "power2.all" }
            )
            
});



