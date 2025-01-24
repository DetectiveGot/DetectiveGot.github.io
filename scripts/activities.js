document.addEventListener("DOMContentLoaded", () => {
    // Activity data
    const activities = [
        {
            title: "One day with Sunday",
            description: "An unforgettable day captured beautifully.",
            imgSrc: "https://img.youtube.com/vi/q_Su4cx5VCE/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=q_Su4cx5VCE"
        },
        {
            title: "ส่งZooกลับscius เลขที่ 1 5 7 ม.5/2",
            description: "Another exciting adventure with friends.",
            imgSrc: "https://img.youtube.com/vi/xrAOyvsD8Os/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=xrAOyvsD8Os"
        },
    ];

    const activitiesContainer = document.querySelector(".activities-container");

    activities.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.classList.add("activities-list");

        listItem.innerHTML = `
            <a href="${activity.link}" class="activities-link">
                <div class="activities-box">
                    <img class="activities-image" src="${activity.imgSrc}" alt="${activity.title}" />
                    <div class="activities-box-text">
                        <h3 class="activities-box-title">${activity.title}</h3>
                        <p class="activities-box-description">${activity.description}</p>
                    </div>
                </div>
            </a>
        `;

        activitiesContainer.appendChild(listItem);
    });
});
