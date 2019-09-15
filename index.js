let active = false;
let color = "tomato";

const draw = e => {
  if (active == false) return;
  const x = e.clientX;
  const y = e.clientY;
  const div = document.createElement("div");
  div.style.top = y + "px";
  div.style.left = x + "px";
  div.style.backgroundColor = color;
  document.body.appendChild(div);
}

const drawActive = () => {
  active = !active;
}
    
const colorToTomato = () => {     
  color = "tomato";
}

const colorToDodgerblue = () => {     
  color = "dodgerblue";
}

const colorToMediumslateblue = () => {     
  color = "mediumslateblue";
}

document.body.addEventListener("mousemove", draw);
document.body.addEventListener("mousedown", drawActive);
document.body.addEventListener("mouseup", drawActive);
document.getElementById("tomato").addEventListener("click", colorToTomato);
document.getElementById("dodgerblue").addEventListener("click", colorToDodgerblue);
document.getElementById("mediumslateblue").addEventListener("click", colorToMediumslateblue);