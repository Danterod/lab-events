// // add grid
// const canvas = document.getElementById("canvas");
// const cells =  document.querySelectorAll('.cell');
// // find color pallete
// const pallete = document.querySelectorAll(".color")
// const colorBox = document.querySelector("#current-color")
// for (let color of pallete) {
//     color.addEventListener("click",() => {
//         colorBox.style.background = color.style.background

//     });
// }
// for (let cell of cells) {
//     cell.addEventListener('click', function() {
//       cell.style.background = currentColorBox.style.background;
//     });
//   }

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("canvas");
    const cells = document.querySelectorAll('.cell');
    const palette = document.querySelectorAll(".color");
    const colorBox = document.querySelector("#current-color");

    for (let color of palette) {
        color.addEventListener("click",() => {
            colorBox.style.background = color.style.background;
        });
    }

    for (let cell of cells) {
        cell.addEventListener('click', function() {
            cell.style.background = colorBox.style.background;
        });
    }
});
