

lottie.loadAnimation({
container: document.querySelector('#aquaMotion'),
renderer: 'svg',
loop: true,
autoplay: true,
path: '../assets/3 - Video Production/Motion Graphics/Aqua/aqua.json'
});
lottie.loadAnimation({
container: document.querySelector('#majorMotion'),
renderer: 'svg',
loop: true,
autoplay: true,
path: '../assets/3 - Video Production/Motion Graphics/MAJOR/major.json'
});
lottie.loadAnimation({
container: document.querySelector('#panttriMotion'),
renderer: 'svg',
loop: true,
autoplay: true,
path: '../assets/3 - Video Production/Motion Graphics/Panttri/Panttri.json'
});


const facebookAnim = lottie.loadAnimation({
container: document.querySelector('.facebookAnim'),
renderer: 'svg',
loop: false,
autoplay: false,
path: '../assets/4 - Media Management/facebook-2.json'
// direction:-1
});
document.querySelector('.facebookAnim').addEventListener('mouseenter',() => {
facebookAnim.setDirection(1)
 facebookAnim.play();
})
document.querySelector('.facebookAnim').addEventListener('mouseleave',() => {
facebookAnim.setDirection(-1)
 facebookAnim.play();
})


const instagramAnim = lottie.loadAnimation({
container: document.querySelector('.instagramAnim'),
renderer: 'svg',
loop: false,
autoplay: false,
path: '../assets/4 - Media Management/instagram.json'
});
document.querySelector('.instagramAnim').addEventListener('mouseenter',() => {
instagramAnim.setDirection(1)
instagramAnim.play();
})
document.querySelector('.instagramAnim').addEventListener('mouseleave',() => {
instagramAnim.setDirection(-1)
instagramAnim.play();
})

const youtubeAnim = lottie.loadAnimation({
container: document.querySelector('.youtubeAnim'),
renderer: 'svg',
loop: false,
autoplay: false,
path: '../assets/4 - Media Management/youtube.json'
});

document.querySelector('.youtubeAnim').addEventListener('mouseenter',() => {
youtubeAnim.setDirection(1)
youtubeAnim.play();
})
document.querySelector('.youtubeAnim').addEventListener('mouseleave',() => {
youtubeAnim.setDirection(-1)
youtubeAnim.play();
})


const websiteAnim = lottie.loadAnimation({
container: document.querySelector('.websiteAnim'),
renderer: 'svg',
loop: false,
autoplay: false,
path: '../assets/4 - Media Management/website.json'
});
document.querySelector('.websiteAnim').addEventListener('mouseenter',() => {
websiteAnim.setDirection(1)
websiteAnim.play();
})
document.querySelector('.websiteAnim').addEventListener('mouseleave',() => {
websiteAnim.setDirection(-1)
websiteAnim.play();
})
