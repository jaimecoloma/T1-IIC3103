const get_trays_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/trays/${id}`)
    const tray = await response.json()
    return tray
}

//const ingredient_id = await get_ingredients_id(ingredient.id)
window.onload = async function(){
    const div_tray =  document.getElementById('Tray')
    //console.log(ingredient_id)
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    const tray = await get_trays_id(id)  // OJO, CAMBIAMOS HTMLSTRING DE CONST A VAR
    var htmlstring = `<b>${tray.name}</b>
    <p>Descripción: ${tray.description}</p>
    <p><b>Precio</b>: ${tray.price}</p>
    <p><b>Expiración</b>: ${tray.expiration}</p>
    <p><b>Tamaño</b>: ${tray.size}</p>
    `

    htmlstring += `<table class="center" style="border:1px solid black;margin-left:auto;margin-right:auto;">
    <tr>
    <th>Platos</th>
    <th>Categoría</th>
    <th></th>
    </tr>`
    for (let course of tray.courses){
        //var button = document.createElement("button")
        //button.innerHTML = course.name
        //button.addEventListener("click", function(){
        //    location.href =`course.html?id=${course.id}`
        htmlstring += "<tr>"
        htmlstring += "<td text-align: center;>"
        //htmlstring += course.name
        htmlstring += "<button class='button is-primary is-rounded'"
        const root = `"/Courses/course.html?id=${course.id}"`
        htmlstring += `onclick='window.location.href=${root};'>`
        htmlstring += course.name
        htmlstring += "</button>"
        htmlstring += "</td>"
        htmlstring += "<td>"
        htmlstring += course.category
        htmlstring += "</td>"
        htmlstring += "<td>"
        htmlstring += `<img src = ${course.img_url} width="300" 
        height="250"/>`
        htmlstring += "</td>"
        htmlstring += "</tr>"

        //htmlstring += "<p>"
        ////htmlstring += ingredient.name
        //htmlstring += "<button class='button is-primary is-rounded'"
        //const root = `"/Courses/course.html?id=${course.id}"`
        //htmlstring += `onclick='window.location.href=${root};'>`
        //htmlstring += course.name
        //htmlstring += "</button>"
        //htmlstring += "</p><br>"
    }
    
    //<img src = ${ingredient.img_url} width="600" 
    //height="500"/>
    //`
    
    div_tray.innerHTML = htmlstring
    
}

