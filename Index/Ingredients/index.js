
const get_ingredients = async () => {
    const response = await fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients")
    const ingredients = await response.json()
    return ingredients
}



//const click_ingredient = (event) => {
//    location.href = "ingredient.html"
//}

const doc = document.getElementsByClassName('test')
const ingredients = await get_ingredients() // repetir despues
//const ingredients = fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients").then(response => response.json()).then(ingredients)
const div_ingredients = document.getElementsByClassName('Ingredients')[0]
for (let ingredient of ingredients.items){
    var button = document.createElement("button")
    button.innerHTML = ingredient.name
    button.addEventListener("click", function(){
        location.href =`ingredient.html?id=${ingredient.id}`
    })
    div_ingredients.appendChild(button)
}