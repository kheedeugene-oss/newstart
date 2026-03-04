const body = document.body;
const root = document.documentElement;
const loginForm = document.getElementById("loginForm");
const clickSound = document.getElementById("clickSound");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

function toggleLamp() {
  isOn = !isOn;
  clickSound.play();

  body.setAttribute("data-on", isOn);
  root.style.setProperty("--on", isOn ? 1 : 0);

  if (isOn) {
    loginForm.classList.add("activate");
    gsap.to(body, {
      backgroundColor: "#1c1f24",
      duration: 0.6
    });
  } else {
    loginForm.classList.remove("activate");
    gsap.to(body, {
      backgroundColor: "#121417",
      duration: 0.6
    });
  }
}

toggleBtn.addEventListener("click", toggleLamp);
