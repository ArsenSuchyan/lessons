

"use strict"



// Задача №1


const body = document.body

console.log(body)




// Задача №2



function addList(itemNomber = 0) {
   // const body = document.body
   const list = document.createElement(`ul`)
   const listItem = document.createElement(`li`)
   for (let i=0; i<itemNomber; i++) {
      let clone = listItem.cloneNode(true)
      list.prepend(clone)
   }
   body.prepend(list)
}

addList(5)



// Задача №3

// const body = document.body

body.classList.add(`loaded`)

if (body.classList.contains(`loaded`)) {
   body.style.color = `green`
}



// Задача №4

const items = document.querySelectorAll(`.item`)

console.log(items)

items.forEach ((item, index) => {
   item.classList.add(`active`)
   item.insertAdjacentText(`afterbegin`, `Елемент №${index + 1}`)
})


// Задача №5

const button = document.querySelector(`.button`)

if (button) {button.scrollIntoView ({
   block: `start`,
   behavior: `smooth`
})}




// Задача №6

const link = document.querySelector(`.link`)


if (link && parseFloat(link.getAttribute(`data-color`)) < 200) {
   link.style.color = `red`
}

