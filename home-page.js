

function toggleVisibility(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.classList.contains('hidden')) {
        content.style.display = "block";
        content.classList.remove('hidden');
    } else {
        content.style.display = "none";
        content.classList.add('hidden');
    }

    let slideBtnleft= document.getElementById("slide-btn-left")
    let slideBtnright= document.getElementById("slide-btn-right")
    let imgItem = document.querySelectorAll(".image-item")

    console.log( imgItem. length-1)

    let startSlider = 0
    let endSlider =  imgItem. length-1


    slideBtnleft.addEventListener("click",()=>{
        alert("left btn")
    })

    slideBtnright.addEventListener("click",()=>{
        alert("right btn")
    })

    imgItem.style.transform = ` translateX(${startSlider})`}

    
