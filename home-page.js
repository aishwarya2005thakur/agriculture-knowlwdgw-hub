/*const imageList = document.querySelector('.image-list');
const slides = document.querySelectorAll('.image-item');
const totalSlides = slides.length;
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    const offset = -currentIndex * 100;
    imageList.style.transform = `translateX(${offset}%)`;
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);

// Optional: Add event listeners for buttons
document.querySelector('#slide-btn-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

document.querySelector('#slide-btn-right').addEventListener('click', () => {
    showNextSlide();
});





function toggleVisibility(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.classList.contains('hidden')) {
        content.style.display = "block";
        content.classList.remove('hidden');
    } else {
        content.style.display = "none";
        content.classList.add('hidden');
    } }

    let slideBtnleft = document.getElementById("slide-btn-left")
    let slideBtnright = document.getElementById("slide-btn-right")
    let imgItem = document.querySelectorAll(".image-item")

    console.log( imgItem. length-1)

    let startSlider = 0
    let endSlider =  (imgItem.length-1) * 100


    slideBtnleft.addEventListener("click",()=>{
        if(startSlider < 0){
            startSlider = startSlider + 100;
           }
          imgItem.forEach(element =>{
              element.style.transform = `translateX(${startSlider}%)`
          })
    })

    slideBtnright.addEventListener("click",()=>{
         if(startSlider >= -endSlider + 100){
          startSlider = startSlider - 100;
         }
        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`
        })
        

 } ) */


      
function toggleVisibility(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.classList.contains('hidden')) {
        content.style.display = "block";
        content.classList.remove('hidden');
    } else {
        content.style.display = "none";
        content.classList.add('hidden');
    } }

     // image slider //

    let slideBtnleft = document.getElementById("slide-btn-left")
    let slideBtnright = document.getElementById("slide-btn-right")
    let imgItem = document.querySelectorAll(".image-item")

    console.log( imgItem. length-1)

    let startSlider = 0
    let endSlider =  (imgItem.length-1) * 100


    slideBtnleft.addEventListener("click",()=>{
        if(startSlider < 0){
            startSlider = startSlider + 100;
           }
          imgItem.forEach(element =>{
              element.style.transform = `translateX(${startSlider}%)`
          })
    })

    slideBtnright.addEventListener("click",()=>{
         if(startSlider >= -endSlider + 100){
          startSlider = startSlider - 100;
         }
        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`
        })
        

 } ) 

document.addEventListener('DOMContentLoaded', function() {
    const imageList = document.querySelector('.image-list');
    const images = document.querySelectorAll('.image-item');
    const leftBtn = document.getElementById('slide-btn-left');
    const rightBtn = document.getElementById('slide-btn-right');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function showImage(index) {
        imageList.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }
    
    leftBtn.addEventListener('click', prevImage);
    rightBtn.addEventListener('click', nextImage);
    
    // Auto-scroll functionality
    let intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    
    // Pause auto-scroll on hover
    imageList.addEventListener('mouseenter', () => clearInterval(intervalId));
    imageList.addEventListener('mouseleave', () => intervalId = setInterval(nextImage, 5000));
});

// Select the logo element
const logo = document.getElementById('logo');
const letters = logo.querySelectorAll('span');

// Function to calculate distance and move letters
function repelLetters(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  letters.forEach(letter => {
    const rect = letter.getBoundingClientRect();
    const letterX = rect.left + rect.width / 2;
    const letterY = rect.top + rect.height / 2;

    const distanceX = letterX - mouseX;
    const distanceY = letterY - mouseY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Repelling force (adjust multiplier for more or less movement)
    const force = Math.min(100 / distance, 10);

    const moveX = force * distanceX * 0.1; // Adjust the multiplier to control effect strength
    const moveY = force * distanceY * 0.1;

    letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// Reset the position when the mouse leaves the element

function resetLetters() {
  letters.forEach(letter => {
    letter.style.transform = 'translate(0, 0)';
  });
}

// Add event listeners for mouse move and mouse leave

logo.addEventListener('mousemove', repelLetters);
logo.addEventListener('mouseleave', resetLetters);

const imageList = document.querySelector('.image-list');
const slides = document.querySelectorAll('.image-item');
const totalSlides = slides.length;
let currentIndex = 0;
