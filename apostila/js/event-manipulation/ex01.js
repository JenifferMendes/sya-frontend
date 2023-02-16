const funcOnClick = () => {
    console.log("Clicked")
}

const h1 = document.querySelector("#my-h1")

h1.addEventListener("click", () => {
    console.log("Clicked")
})

const h2 = document.querySelector("#my-h2")

h2.addEventListener("click", funcOnClick)
