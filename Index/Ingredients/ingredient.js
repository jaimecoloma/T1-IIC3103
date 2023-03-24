const get_ingredients_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients/${id}`)
    const ingredient = await response.json()
    return ingredient
}

//const ingredient_id = await get_ingredients_id(ingredient.id)
window.onload = async function(){
    const div_ingredient =  document.getElementById('Ingredient')
    //console.log(ingredient_id)
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    const ingredient = await get_ingredients_id(id)
    const htmlstring = `<b>${ingredient.name}</b>
    <p>Precio: ${ingredient.price}</p>
    <p>Descripción: ${ingredient.description}</p>
    <p>Expiración: ${ingredient.expiration}</p>
    <p>Tamaño: ${ingredient.size}</p>
    <img src = ${ingredient.img_url} width="600" 
    height="500"/>
    `
    div_ingredient.innerHTML = htmlstring
}

