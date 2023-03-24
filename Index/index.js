
const get_trays = async () => {
    const response = await fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/trays")
    const trays = await response.json()
    return trays
}



//const click_ingredient = (event) => {
//    location.href = "ingredient.html"
//}

const doc = document.getElementsByClassName('test')
const trays = await get_trays() // repetir despues
//const trays = fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/trays").then(response => response.json()).then(trays)
const div_trays = document.getElementsByClassName('Trays')[0]
for (let tray of trays.items){
    var button = document.createElement("button")
    button.innerHTML = tray.name
    button.addEventListener("click", function(){
        location.href =`tray.html?id=${tray.id}`
    })
    div_trays.appendChild(button)
}