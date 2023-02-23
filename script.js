
// smooth scrolling on anchors within the page

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// const links = document.querySelectorAll('a[href^="#"]');

// links.forEach(link => {
//   link.addEventListener('click', (e) => {
//     const href = link.getAttribute('href');
//     if (href.startsWith('#')) {
//       e.preventDefault();
//       const target = document.querySelector(href);
//       if (target) {
//         const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
//         console.log(topOffset);
//         window.scrollIntoView({
//           top: topOffset,
//           behavior: 'smooth',
//           duration: 2000 // customize the duration here (in milliseconds)
//         });
//       }
//     }
//   });
// });



// modal popUp  OnClick
const video = document.getElementById("video");

for(const child of video.children){
    child.addEventListener("click", ()=>{
        document.querySelector('#popup-video').style.display = 'grid';
        const playVideo = document.querySelector('#popup-video video');
        playVideo.src = child.src;
        playVideo.setAttribute("controlslist", "nodownload")
        playVideo.play();


    let closeBtn = document.querySelector(".close-btn");
    closeBtn.onclick = () => {
        playVideo.currentTime = 0;
        playVideo.pause();
        document.querySelector('#popup-video').style.display = 'none';        
    }

});

};



// animations on pass 

const pass = document.querySelectorAll(".pass span");

setInterval(()=>{
pass.forEach((span, index) =>{

    if(index === 0 ){return;}
    setTimeout( () => {
        span.style.display = '';
        span.style.transition = '.7s ease-out';        
        span.style.height = '';
        span.style.opacity = "1";

    }, index*500); 

    setTimeout( () => {
        span.style.height = "0";
        span.style.opacity = "0";
        span.style.transition = '1s ';        
    }, -1000*index);
});

}, 3000)


var timeId = setInterval( ()=>{
    pass[0].style.opacity = '1';
    pass[0].style.transition = '1s ease-out';        

    timeId = setTimeout(()=>{
        pass[0].style.opacity = '0'
        pass[0].style.transition = '1s ease-out';        
    } , 2700);

}, 3000);


//animation on welcome 
var helloImg = document.querySelector('.intro img'); 
var helloTxt = document.querySelector('.intro p:nth-child(2)'); 
var welcome = document.querySelector('.intro p:nth-child(3) span:first-child');
var voyagers = document.querySelector('.intro p:nth-child(3) span:last-child');

window.onload = () => {

 helloImg.style.opacity = '1';  
 helloTxt.style.opacity = '1';  

 welcome.style.color= 'white';  
 welcome.style.background = 'black';  
 welcome.style.opacity = '1';

voyagers.style.opacity = '1';
voyagers.style.transform = 'translateY(0)';
}

//animation on scroll for the back quote area 

const faders = document.querySelectorAll('.fade-in');
const sliderTop = document.querySelectorAll('.from-top');
const sliderLeft = document.querySelectorAll('.from-left');
const sliderRight = document.querySelectorAll('.from-right');

const appearOptions = {
    rootMargin: "0px",
    threshold: 0.8
};

const appearOnscroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnscroll.unobserve(entry.target);
        }
    })
}, appearOptions); 

faders.forEach(fader =>{
    appearOnscroll.observe(fader);
});

sliderTop.forEach(slider => {
    appearOnscroll.observe(slider);
});

sliderLeft.forEach(slider => {
    appearOnscroll.observe(slider);
});

sliderRight.forEach(slider => {
    appearOnscroll.observe(slider);
});

