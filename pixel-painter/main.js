const pallete = document.querySelectorAll(".color")
console.log(pallete)
const colorBox = document.querySelector("#current-color")
console.log(colorBox)


for (let color of pallete) {
    color.addEventListener("click",() => {
        colorBox.style.background = color.style.background

    });
}
