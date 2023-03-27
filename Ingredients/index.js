var page = 1
var sort = "name"
var order = "asc"
const get_ingredients = async () => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients?page=${page}&size=15&sort=${sort}&order=${order}`)
    const api_ingredients = await response.json()
    return api_ingredients
}



//const click_ingredient = (event) => {
//    location.href = "ingredient.html"
//}
const render_ingredients = async (button2, button3) =>{
    const doc = document.getElementsByClassName('test')
    const ingredients = await get_ingredients() // repetir despues
    //const ingredients = fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients").then(response => response.json()).then(ingredients)
    const div_ingredients = document.getElementsByClassName('Ingredients')[0]
    div_ingredients.innerHTML = ""
    if (page == 1){
        button2.disabled = true
    }
    if (ingredients.pages == page){
        button3.disabled = true
    }
    for (let ingredient of ingredients.items){
        let div = document.createElement("br")
        var img = document.createElement("img")
        img.src = ingredient.img_url
        img.setAttribute('width', '20%')
        img.setAttribute('height', '30%')
        var button = document.createElement("button")
        button.innerHTML = ingredient.name
        button.className = "button is-warning is-light"
        button.addEventListener("click", function(){
            location.href =`ingredient.html?id=${ingredient.id}`
        })
        div_ingredients.appendChild(div)
        div_ingredients.appendChild(button)
        div_ingredients.appendChild(img)
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
