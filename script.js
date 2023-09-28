window.onload = () => {
    let david = document.getElementsByTagName("img")[0]
    let top = Math.round(Math.random() * (window.innerHeight - david.height))
    let left = Math.round(Math.random() * (window.innerWidth - david.width))
    console.log(top, left)
    david.setAttribute("style", `top: ${top}px; left: ${left}px; display: block;`)
    david.addEventListener("click", () => alert("you found david!"))
}