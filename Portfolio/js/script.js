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



