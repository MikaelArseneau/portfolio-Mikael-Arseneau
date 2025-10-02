gsap.registerPlugin(ScrollTrigger);


const listItems = [
    {
        title: "Artificial Intelligence and Machine Learning",
        description:
            "AI and ML enhance efficiency and personalization, transforming industries with better automation, data analysis, and predictive capabilities.",
        imageUrl: "images/ai.jpg",
    },
    {
        title: "Quantum Computing",
        description:
            "Quantum Computing solves complex problems quickly, impacting cryptography, materials science, and drug discovery with unprecedented computational power.",
        imageUrl: "images/quantum-computing.jpg",
    },
    {
        title: "5G and Beyond",
        description:
            "5G networks revolutionize connectivity, offering faster speeds, lower latency, and enabling IoT, smart cities, and advanced virtual experiences.",
        imageUrl: "images/5g.jpg",
    },
];

const customList = document.querySelector(".custom-list");

listItems.forEach((item, index) => {
    const number = (index + 1).toString().padStart(2, "0");
    customList.innerHTML += `<div class="list-item">
        <div class="number" style="background-image: url(${item.imageUrl})">${number}</div>
        <div class="info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>`;
});