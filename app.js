
const filters = [...document.querySelectorAll('.filter')]
let activeFilter = document.querySelector('.filter.active')
let filtersWhiteBg = document.querySelector('.activeFilter')
console.log(activeFilter);
filtersWhiteBg.style.width = activeFilter.offsetWidth + 'px'
console.log(filters[1].offsetWidth);
filters.forEach(filter=>{
   filter.addEventListener('click',() => {
      filters.forEach(fil=>{fil.classList.remove('active')})
      // console.log(filters.indexOf(filter));
      filtersWhiteBg.style.width = filter.offsetWidth + 'px'
      // console.log(calcLeft(filters.indexOf(filter),filters));
      filtersWhiteBg.style.left = calcLeft(filters.indexOf(filter),filters) + 'px'
      filter.classList.add('active')
      
   })
})

function calcLeft(index,arr){
   let left = 0
   for (let i = 0; i < index; i++) {
      left += arr[i].offsetWidth;
   }
   return left
}


