const darkThemeBtn = document.getElementById("darkTheme");
const lightThemeBtn = document.getElementById("lightTheme");
const body = document.body;

darkThemeBtn.addEventListener("click" , () => {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    darkThemeBtn.style.display = "none"
    lightThemeBtn.style.display = "block"
});

lightThemeBtn.addEventListener("click", () => {
  body.style.color = "black";
  body.style.backgroundColor = "white";
  lightThemeBtn.style.display = "none";
  darkThemeBtn.style.display = "block";
});