const luckyBtn = document.querySelector(".luckyBtn");
const logo = document.querySelector(".logo img");

const googleLogo =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
let isOddity = false;

luckyBtn.addEventListener("click", () => {
  if (!isOddity) {
    logo.src = "";
    logo.alt = "Oddity";
    logo.style.display = "none";

    const newLogo = document.createElement("div");
    newLogo.textContent = "Oddity";
    newLogo.id = "oddityLogo";
    newLogo.style.fontSize = "90px";
    newLogo.style.fontWeight = "bold";
    newLogo.style.color = "#000";
    newLogo.style.textAlign = "center";

    document.querySelector(".logo").appendChild(newLogo);

    isOddity = true;
  } else {
    const oddityLogo = document.getElementById("oddityLogo");
    if (oddityLogo) oddityLogo.remove();

    logo.src = googleLogo;
    logo.alt = "Google";
    logo.style.display = "block";

    isOddity = false;
  }
});
