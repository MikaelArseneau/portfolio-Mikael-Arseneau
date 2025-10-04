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
                    { id: 1, categories: 'web', title: 'Métrage', img: './media/metrage.png' },
                    { id: 2, categories: 'web', title: 'DIX 10', img: './media/dix10.png' },
                    { id: 3, categories: 'montage', title: 'Coeur de la montage', img: './media/coeur_de_la_montagne.jpg' },
                    { id: 4, categories: 'montage', title: 'Terminus', img: './media/terminus.jpg' },
                    { id: 5, categories: 'troisDimension', title: 'Chasseur de crane', img: './media/chasseur.png' },
                    { id: 6, categories: 'montage', title: 'La Montée', img: './media/montee.png' }
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
            markers: true,

        }
    });

    tl.fromTo(logiciels,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
    );
});
tl.add(() => {
    gsap.to("#logo-figma", {
        scale: 1.1,
        rotation: 360,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to(".titre-logiciel", {
        color: "#F24E1E",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});


