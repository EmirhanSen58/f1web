// Hamburger menu ve sidebar elemanlarını seçiyoruz
const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sidebar");

// Hamburger menüsüne tıklama olayını dinle
hamburgerMenu.addEventListener("click", function () {
    // Sidebar'ı aç/kapat
    sidebar.classList.toggle("active");
});



const container = document.querySelector('.pilots-container');

pilots.forEach(pilot => {
    const pilotDiv = document.createElement('div');
    pilotDiv.classList.add('pilot');

    pilotDiv.innerHTML = `
        <div class="pilot-info">
            <p>Country: ${pilot.country}</p>
            <p>Wins: ${pilot.wins}</p>
        </div>
        <img src="${pilot.image}" alt="${pilot.name}">
        <p class="pilot-name">${pilot.name}</p>
    `;

    container.appendChild(pilotDiv);
});