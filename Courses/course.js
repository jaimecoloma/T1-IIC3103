const get_courses_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/courses/${id}`)
    const course = await response.json()
    return course
}

//const ingredient_id = await get_ingredients_id(ingredient.id)
window.onload = async function(){
    const div_course =  document.getElementById('Course')
    //console.log(ingredient_id)
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    const course = await get_courses_id(id)  // OJO, CAMBIAMOS HTMLSTRING DE CONST A VAR
    var htmlstring = `<b>${course.name}</b> 
    <p><b>Descripción</b>: ${course.description}</p>
    <p><b>Precio</b>: $${course.price}</p>
    <p><b>Expiración</b>: ${course.expiration}h</p>
    <p><b>Tamaño</b>: ${course.size}</p>
    <img src = ${course.img_url} width="300" 
        height="250"/><br>
    `
    const div_ingredients = document.getElementById('Bottons')
    //var html2 = ''
    htmlstring += "<b>Ingredientes:</b>"
    for (let ingredient of course.ingredients){
        htmlstring += "<p>"
        //htmlstring += ingredient.name
        htmlstring += "<button class='button is-warning is-light'"
        const root = `"/Ingredients/ingredient.html?id=${ingredient.id}"`
        htmlstring += `onclick='window.location.href=${root};'>`
        htmlstring += ingredient.name
        htmlstring += "</button>"
        htmlstring += "</p><br>"

        //html2 += `
        //<button class="button" href=>"ingredient.html?id=${ingredient.id}>"
        //${ingredient.name}
        //</button>
        //`
    //div_ingredients.innerHTML = html2
    //console.log(html2)
        //var button = document.createElement("button")
        //button.innerHTML = ingredient.name
        //button.addEventListener("click", function(){
        //    location.href =`ingredient.html?id=${ingredient.id}`
        //})
        //console.log(ingredient.name)
    }
    //div_ingredients.appendChild(button)
    
    
    //<img src = ${ingredient.img_url} width="600" 
    //height="500"/>
    //`
    
    div_course.innerHTML = htmlstring
    
}

