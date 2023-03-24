
const get_courses = async () => {
    const response = await fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/courses")
    const courses = await response.json()
    return courses
}



//const click_ingredient = (event) => {
//    location.href = "ingredient.html"
//}

const doc = document.getElementsByClassName('test')
const courses = await get_courses() // repetir despues
//const courses = fetch("https://tarea-1.2023-1.tallerdeintegracion.cl/courses").then(response => response.json()).then(courses)
const div_courses = document.getElementsByClassName('Courses')[0]
for (let course of courses.items){
    var button = document.createElement("button")
    button.innerHTML = course.name
    button.addEventListener("click", function(){
        location.href =`course.html?id=${course.id}`
    })
    div_courses.appendChild(button)
}