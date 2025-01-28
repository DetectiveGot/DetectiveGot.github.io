// Member Data
const members = [
    {
        name: "m_mahunnop",
        role: "member",
        rank: 1,
        imgSrc: "images/Mixer.JPG",
        contactLink: "https://www.instagram.com/m_mahunnop/",
    },
    {
        name: "tohoku_man",
        role: "member",
        rank: 1, 
        imgSrc: "images/Icon.JPG",
        contactLink: "https://www.instagram.com/tohoku_man/",
    },
    {
        name: "phumi_kijja",
        role: "member",
        rank: 1,
        imgSrc: "images/Phume.JPG",
        contactLink: "https://www.instagram.com/phumi_kijja/",
    },
    {
        name: "9_41_132",
        role: "member",
        rank: 1,
        imgSrc: "images/Pawaris.JPG",
        contactLink: "https://www.instagram.com/9_41_132/",
    },
    {
        name: "ice_kanx",
        role: "member",
        rank: 1,
        imgSrc: "images/Icekanx.JPG",
        contactLink: "https://www.instagram.com/ice_kanx/",
    },
    {
        name: "gu_tawan__",
        role: "member",
        rank: 1,
        imgSrc: "images/Tawan.JPG",
        contactLink: "https://www.instagram.com/gu_tawan__/",
    },
    {
        name: "sunkung138",
        role: "member",
        rank: 1,
        imgSrc: "images/Sunday.JPG",
        contactLink: "https://www.instagram.com/sunkung138/",
    },
    {
        name: "pruek1929",
        role: "👑admin",
        rank: 0,
        imgSrc: "images/Pruek.JPG",
        contactLink: "https://www.instagram.com/pruek1929/",
    },
    {
        name: "p_natinz",
        role: "member",
        rank: 1,
        imgSrc: "images/Pope.JPG",
        contactLink: "https://www.instagram.com/p_natinz/",
    },
    {
        name: "x._gunne",
        role: "member",
        rank: 1,
        imgSrc: "images/Gunne.JPG",
        contactLink: "https://www.instagram.com/x._gunne/",
    },
    {
        name: "detective_got",
        role: "member",
        rank: 1,
        imgSrc: "images/DetectiveGot.JPG",
        contactLink: "https://www.instagram.com/detective_got/",
    },
    {
        name: "kana_11433",
        role: "member",
        rank: 1,
        imgSrc: "images/Tonmai.JPG",
        contactLink: "https://www.instagram.com/kana_11433/",
    },
    {
        name: "buke",
        role: "member",
        rank: 1,
        imgSrc: "images/Buke.JPG",
        contactLink: "",
    },
];

function renderMembers() {
    const membersContainer = document.querySelector(".members-container");

    members.forEach((member) => {
        const listItem = document.createElement("li");
        listItem.classList.add("activities-list");

        const memberHTML = `
            <li class="members-list" style="order:${member.rank};">
                <div class="member">
                    <img class="member-image" src="${member.imgSrc}" alt="${member.name}" />
                    <p class="member-rank">${member.role}</p>
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
