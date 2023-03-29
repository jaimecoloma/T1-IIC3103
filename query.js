const get_trays_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/trays/${id}`)
    const tray = await response.json()
    return tray
}

const get_courses_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/courses/${id}`)
    const course = await response.json()
    return course
}

const get_ingredients_id = async (id) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients/${id}`)
    const ingredient = await response.json()
    return ingredient
}

// Defining our first promise
let firstPromise = (value) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/search/trays?name=${value}`)
      const api_trays = await response.json()
      resolve(api_trays)
    });
  };
   
// Defining our second promise
let secondPromise = (value) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/search/courses?name=${value}`)
    const api_courses = await response.json()
    resolve(api_courses)
  });
};
// Defining our third promise
let thirdPromise = (value) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`https://tarea-1.2023-1.tallerdeintegracion.cl/search/ingredients?name=${value}`)
    const api_ingredients = await response.json()
    resolve(api_ingredients)
  });
};
 
// Async function to perform execution of all promise
let promiseExecution = async (value) => {
  let promise = await Promise.all([
    firstPromise(value),
    secondPromise(value),
    thirdPromise(value),
  ]);
  return promise
  //console.log(promise);
};

window.onload = async function(){
    const params = new URLSearchParams(window.location.search)
    const value = params.get("data")

    const args = await promiseExecution(value)

    console.log(args)
    const div_trays = document.getElementsByClassName('Trays')[0]
    const div_courses = document.getElementsByClassName('Courses')[0]
    const div_ingredients = document.getElementsByClassName('Ingredients')[0]
    for (let tray of args[0]){
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
    for (let course of args[1]){
        let div = document.createElement("br")
        var img = document.createElement("img")
        img.src = course.img_url
        img.setAttribute('width', '20%')
        img.setAttribute('height', '30%')
        var button = document.createElement("button")
        button.innerHTML = course.name
        button.className = "button is-warning is-light"
        button.addEventListener("click", function(){
            location.href =`/Courses/course.html?id=${course.id}`
        })
        div_courses.appendChild(div)
        div_courses.appendChild(button)
        div_courses.appendChild(img)
    }
    for (let ingredient of args[2]){
        let div = document.createElement("br")
        var img = document.createElement("img")
        img.src = ingredient.img_url
        img.setAttribute('width', '20%')
        img.setAttribute('height', '30%')
        var button = document.createElement("button")
        button.innerHTML = ingredient.name
        button.className = "button is-warning is-light"
        button.addEventListener("click", function(){
            location.href =`/Ingredients/ingredient.html?id=${ingredient.id}`
        })
        div_ingredients.appendChild(div)
        div_ingredients.appendChild(button)
        div_ingredients.appendChild(img)
    }
    
}