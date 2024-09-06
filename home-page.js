

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

    
