gsap.registerPlugin(ScrollTrigger);

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
                projects: [
                    { id: 1, categories: 'web', title: 'Métrage', img: './media/metrage.png', dossier: 'metrage.html' },
                    { id: 2, categories: 'web', title: 'DIX 10', dossier: "dix10.html", img: './media/dix10.png' },
                    { id: 3, categories: 'montage', title: 'Coeur de la montage', dossier: "coeur.html", img: './media/coeur_de_la_montagne.jpg' },
                    { id: 4, categories: 'montage', title: 'Terminus', img: './media/terminus.jpg', dossier: "terminus.html" },
                    { id: 5, categories: 'troisDimension', title: 'Chasseur de crane', img: './media/chasseur.png', dossier: "chasseur.html" },
                    { id: 6, categories: 'montage', title: 'La Montée', img: './media/montee.png', dossier: "montee.html" },
                ]
            };
        },
        methods: {
            setActive(categories) {
                this.activeCat = categories;
            }
        }
    });

    app.mount('#app');
    const logiciels = document.querySelectorAll(".logiciel");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#logiciel",
            start: "top 80%",
            toggleActions: "play none none none",


        }
    });

    tl.fromTo(logiciels,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
});



