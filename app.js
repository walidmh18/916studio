
const filters = [...document.querySelectorAll('.filter')]
const categories = [...document.querySelectorAll('.category')]
let activeFilter = document.querySelector('.filter.active')
let filtersWhiteBg = document.querySelector('.activeFilter')



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

let form = document.querySelector('form');
let submitBtn = document.querySelector('button[type="submit"]')
form.addEventListener("submit", e => {
   submitBtn.classList.add('clicked');
   submitBtn.setAttribute('disabled', true)
   e.preventDefault();
   // dateInp.value = new Date()

   fetch(form.action, {
      method: "POST",
      body: new FormData(form),
   }).then(
      response => response.json()
   ).then((html) => {
      


   
      window.open('/page.html', '_self');

   }).catch(err => {
      window.open('../error.html', '_blank')
   })
});


