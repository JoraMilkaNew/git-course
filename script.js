let h2 = document.createElement("h2")
h2.textContent = "Подзаголовок"
let h1 = document.querySelector("h1")
h1.after(h2)
console.log(h2)