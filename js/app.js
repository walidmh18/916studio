
const filters = [...document.querySelectorAll('.filter')]
const categories = [...document.querySelectorAll('.category')]
let activeFilter = document.querySelector('.filter.active')
let filtersWhiteBg = document.querySelector('.activeFilter')

const filtersContainer = document.querySelector('.filters')
const loader = document.querySelector('.loader')


let load = setInterval(() => {
   if(document.readyState == "complete"){
      setTimeout(() => {
         loader.style.display = 'none'
         clearLoad()
      }, 2000)
      window.scroll({
         top:0,
         left:0
      })
   }
}, 100);

function clearLoad(){
   clearInterval(load)
}

filtersWhiteBg.style.width = activeFilter.offsetWidth + 'px'
console.log(filters[1].offsetWidth);


filters.forEach(filter=>{
   filter.addEventListener('click',() => {
      categories.forEach(category=>{
         category.classList.remove('active');
      })
      filters.forEach(fil=>{fil.classList.remove('active')})
      // console.log(filters.indexOf(filter));
      filtersWhiteBg.style.width = filter.offsetWidth + 'px'
      // console.log(calcLeft(filters.indexOf(filter),filters));
      filtersWhiteBg.style.left = calcLeft(filters.indexOf(filter),filters) + 'px'
      filtersContainer.scroll({
         left: calcLeft(filters.indexOf(filter),filters)- 40,
         behavior: "smooth"
         })
      console.log(filtersContainer.scrollX);
      filter.classList.add('active')
      let fil = filter.getAttribute('data-filter')
      console.log();
      document.querySelector(`.category.${fil}`).classList.add('active')
      
   })
})

function calcLeft(index,arr){
   let left = 0
   for (let i = 0; i < index; i++) {
      left += arr[i].offsetWidth;
   }
   return left
}





// const dateInp = document.querySelector('input[name="time"]')
// let date = new Date().toLocaleString()
// console.log(date);


let form = document.querySelector('form');
let submitBtn = document.querySelector('button[type="submit"]')
const dateInp = document.querySelector('input#time')
form.addEventListener("submit", e => {
   submitBtn.classList.add('clicked');
   submitBtn.setAttribute('disabled', true)
   
   e.preventDefault();
   let date = new Date().toLocaleString()
   dateInp.value = date

   fetch(form.action, {
      method: "POST",
      body: new FormData(form),
   }).then(
      response => response.json()
   ).then((html) => {
      


   
      window.open('./request-sent', '_self');

   }).catch(err => {
      window.open('../error.html', '_blank')
   })
});




const serviceSelect = document.querySelector('select#serviceInp');
const musicNote = document.querySelector('form p.error')

serviceSelect.addEventListener('change',() => {
   let value = serviceSelect.value;
   if (value == 'video Production') {
      musicNote.style.display = 'block'
   } else {
      musicNote.style.display = 'none'

   }
})