// Member Data
const members = [
    {
        name: "m_mahunnop",
        imgSrc: "images/Mixer.JPG",
        contactLink: "https://www.instagram.com/m_mahunnop/",
    },
    {
        name: "tohoku_man",
        imgSrc: "images/Icon.JPG",
        contactLink: "https://www.instagram.com/tohoku_man/",
    },
    {
        name: "phumi_kijja",
        imgSrc: "images/Phume.JPG",
        contactLink: "https://www.instagram.com/phumi_kijja/",
    },
    {
        name: "9_41_132",
        imgSrc: "images/Pawaris.JPG",
        contactLink: "https://www.instagram.com/phumi_kijja/",
    },
    {
        name: "ice_kanx",
        imgSrc: "images/Icekanx.JPG",
        contactLink: "https://www.instagram.com/ice_kanx/",
    },
];

function renderMembers() {
    const membersContainer = document.querySelector(".members-container");

    members.forEach((member) => {
        const listItem = document.createElement("li");
        listItem.classList.add("activities-list");

        const memberHTML = `
            <li class="members-list">
                <div class="member">
                    <img class="member-image" src="${member.imgSrc}" alt="${member.name}" />
                    <p class="member-name">${member.name}</p>
                    <ul class="contact-list">
                        <li>
                            <a class="member-image-contact" href="${member.contactLink}" target="_blank" rel="noopener noreferrer">
                                <img class="image-contact" src="images/ig-logo.svg" alt="Instagram Logo" />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        `;

        membersContainer.insertAdjacentHTML("beforeend", memberHTML);
    });
}

document.addEventListener("DOMContentLoaded", renderMembers);
