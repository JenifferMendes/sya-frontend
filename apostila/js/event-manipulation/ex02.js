const funcOnchange = () => {
    console.log("changed")
}

const select = document.querySelector("#my-select")

select.addEventListener("change", () => {
    console.log("changed")
})
