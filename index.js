document.addEventListener("DOMContentLoaded", function() {
    // Logo
    var logoContainer = document.getElementById("logoContainer");
    var logoImg = document.createElement("img");
    logoImg.src = "https://cdn.discordapp.com/attachments/1309891025371664426/1310054016277024799/DZ.png?ex=6743d261&is=674280e1&hm=4b256520bb3e1bf7140797b826882191dc08ce9832dfdb5e22d1fe911032c844&";
    logoImg.alt = "Logo";
    logoContainer.appendChild(logoImg);

    // Discord Link
    var discordLinkContainer = document.getElementById("discordLinkContainer");
    var discordLink = document.createElement("p");
    discordLink.innerHTML = 'Join our Discord server: <a href="https://discord.gg/hkKchTzngc">https://discord.gg/hkKchTzngc</a>';
    discordLinkContainer.appendChild(discordLink);
});
