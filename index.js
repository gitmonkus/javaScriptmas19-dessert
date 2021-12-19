const btn = document.getElementById("btn")
const foodHolder = document.getElementById("foodHolder")
// const image = document.getElementById('image')

btn.addEventListener("click", findYum)

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
const url = 'https://foodish-api.herokuapp.com/api/images/dessert'

function timeAnimation() {
    setTimeout(removeAnimation, 2000)
}

function removeAnimation() {
    foodHolder.style.animation = ''
}


async function findYum() {
    let response = await fetch(url)
    let data = await response.json()
    foodHolder.innerHTML = `<img id="image" src="${data.image}" alt="Delicous desserts">`
    foodHolder.style.animation = 'image 2s'
    timeAnimation()
 
}



