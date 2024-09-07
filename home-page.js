const imageList = document.querySelector('.image-list');
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
        

 } ) 
