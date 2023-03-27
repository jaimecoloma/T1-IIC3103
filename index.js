var page = 1
var sort = "name"
var order = "asc"
const get_trays = async () => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/trays?page=${page}&size=15&sort=${sort}&order=${order}`)
    const api_trays = await response.json()
    return api_trays
}



//const click_ingredient = (event) => {
//    location.href = "ingredient.html"
//}
const render_ingredients = async (button2, button3) =>{
const doc = document.getElementsByClassName('test')
const trays = await get_trays() // repetir despues
//const trays = fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/trays").then(response => response.json()).then(trays)
const div_trays = document.getElementsByClassName('Trays')[0]
div_trays.innerHTML = ""
if (page == 1){
    button2.disabled = true
}
if (trays.pages == page){
    button3.disabled = true
}
for (let tray of trays.items){
    let div = document.createElement("br")
    var button = document.createElement("button")
    button.innerHTML = tray.name
    button.className = "button is-warning is-light"
    button.addEventListener("click", function(){
        location.href =`tray.html?id=${tray.id}`
    })
    div_trays.appendChild(div)
    div_trays.appendChild(button)
}
}
const div_boton = document.getElementById('Boton')
var button2 = document.createElement("button")
var button3 = document.createElement("button")
var button_asc_name = document.createElement("button")
var button_des_name = document.createElement("button")
var button_asc_price = document.createElement("button")
var button_des_price = document.createElement("button")
button2.innerHTML = "Página Anterior"
button2.className = "button is-primary is-rounded" 
button2.addEventListener("click", function(){
    page--
    button3.disabled = false
    render_ingredients(button2, button3)
})
button3.innerHTML = "Página Siguiente"
button3.className = "button is-primary is-rounded" 
button3.addEventListener("click", function(){
    page++
    button2.disabled = false
    render_ingredients(button2, button3)
})
button_des_price.className = "button is-primary is-rounded" 
button_des_price.innerHTML = "Mayor a menor precio"
button_des_price.addEventListener("click", function(){
    page = 1
    order ="desc"
    sort = "price"
    button3.disabled = false
    render_ingredients(button2, button3)
})
button_asc_price.className = "button is-primary is-rounded" 
button_asc_price.innerHTML = "Menor a mayor precio"
button_asc_price.addEventListener("click", function(){
    page = 1
    order ="asc"
    sort = "price"
    button3.disabled = false
    render_ingredients(button2, button3)
})
button_des_name.className = "button is-primary is-rounded" 
button_des_name.innerHTML = "Z-A"
button_des_name.addEventListener("click", function(){
    page = 1
    order ="desc"
    sort = "name"
    button3.disabled = false
    render_ingredients(button2, button3)
})
button_asc_name.className = "button is-primary is-rounded" 
button_asc_name.innerHTML = "A-Z"
button_asc_name.addEventListener("click", function(){
    page = 1
    order ="asc"
    sort = "name"
    button3.disabled = false
    render_ingredients(button2, button3)
})

div_boton.appendChild(button2)
div_boton.appendChild(button3)
div_boton.appendChild(button_des_price)
div_boton.appendChild(button_asc_price)
div_boton.appendChild(button_des_name)
div_boton.appendChild(button_asc_name)
render_ingredients(button2, button3)
