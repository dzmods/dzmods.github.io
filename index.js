document.addEventListener("DOMContentLoaded", function() {
    // Logo
    var logoContainer = document.getElementById("logoContainer");
    var logoImg = document.createElement("img");
    logoImg.src = "https://cdn.discordapp.com/attachments/1180529719607828523/1200567635889377410/BANNER.png?ex=662c2a3d&is=6619b53d&hm=32b7ecfd3c7eb256c295daba11f8e6b5807753fc9a5654371eddd0caa88e17c1";
    logoImg.alt = "Logo";
    logoContainer.appendChild(logoImg);

    // Discord Link
    var discordLinkContainer = document.getElementById("discordLinkContainer");
    var discordLink = document.createElement("p");
    discordLink.innerHTML = 'Join our Discord server: <a href="https://discord.gg/hkKchTzngc">https://discord.gg/hkKchTzngc</a>';
    discordLinkContainer.appendChild(discordLink);
});
