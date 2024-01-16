

"use strict"

// Завдання №1

document.addEventListener('click', documentAction)

function documentAction(e) {
   const target = e.target
   if (target.closest('.item')) {
      target.classList.toggle('active')
   }
}

// Завдання №2

window.addEventListener('load', downloaded)


function downloaded(e) {
   const body = document.body
   body.classList.add('downloaded')
}

// Завдання №3

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
header.addEventListener('mouseenter', enterHeader)
header.addEventListener('mouseleave', leaveHeader)

function enterHeader() {
   if(footer) {
      footer.classList.add('green')
   }
}

function leaveHeader() {
   if(footer) {
      footer.classList.remove('green')
   }
}



// Завдання №4

const item = document.querySelector('.item2')



let options = {
   root: null,
   rootMargin: '0px 0px 0px 0px',
   threshold: 1
}

let start = (entries, observer) => {
   entries.forEach((entry) => {
      const target = entry.target
      if(entry.isIntersecting && !item.classList.contains('used')) {
         interval()
         item.classList.add('used')
      } 
   })
}

let observer = new IntersectionObserver(start, options)

if (item) {
   observer.observe(item)
}

function interval() {
   let i = 1;
   let timer = setInterval(() => {
      item.textContent = `${i}`
      if (i === parseFloat(item.dataset.max)) {
         clearInterval(timer)
      }
      i++
   }, parseFloat(item.dataset.cooldown))
}

