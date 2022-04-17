const r = document.querySelector(":root");

var mouse_counter = 0;
var background_colors = ["#29D63A", "#80C43B", "#B5D32C", "#96EA15", "#8AC20D"];
var text_colors = ["#D629C5", "#803BC4", "#4A2CD3", "#6915EA", "#450DC2"];
var color_pick = 0;

document.addEventListener("mousemove", (e) => {
  mouse_counter += 1;
});

// function animate() {
//   if (mouse_counter >= 10) {
//     mouse_counter = 0;

//     color_pick = Math.floor(Math.random() * text_colors.length);

//     r.style.setProperty("--background-color", background_colors[color_pick]);
//     r.style.setProperty("--text-color", text_colors[color_pick]);
//   }
//   setTimeout(animate, 250);
// }

// animate();
