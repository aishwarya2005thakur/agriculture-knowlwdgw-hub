
// Function to generate a random captcha

function generateCaptcha() {
    const captchaContainer = document.getElementById("captcha-container");
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaContainer.textContent = captcha;
}

// svalidating the form

function validateForm(event) {
    event.preventDefault();
    const userCaptcha = document.getElementById("captcha-input").value;
    const generatedCaptcha = document.getElementById("captcha-container").textContent;

    if (userCaptcha === generatedCaptcha) {
        alert("Registration successful!");
        // Submit the form or redirect to another page here
    } else {
        alert("Captcha did not match. Please try again.");
        generateCaptcha(); 
        // regenerate the captcha for the next attempt
    }
}

// Event listener for form submission

document.getElementById("registrationForm").addEventListener("submit", validateForm);

// Generate a captcha when the page loads

window.onload = generateCaptcha;

//dynamically adding districts when selected any specific state


    const districtsData = {
        "andhra_pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool"],
        "arunachal_pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Lower Subansiri", "Kurung Kumey"],
        "assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo"],
        "bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur"],
        "chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur"],
        "goa": ["North Goa", "South Goa"],
        "gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch"],
        "haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram"],
        "himachal_pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu"],
        "jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum"],
        "karnataka": ["Bagalkot", "Bangalore Urban", "Bangalore Rural", "Belgaum", "Bellary", "Bidar"],
        "kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam"],
        "madhya_pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani"],
        "maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara"],
        "manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam"],
        "meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi"],
        "mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit"],
        "nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon"],
        "odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh"],
        "punjab": ["Amritsar", "Barnala", "Bathinda", "Fazilka", "Ferozepur", "Gurdaspur"],
        "rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur"],
        "sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
        "tamil_nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri"],
        "telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar"],
        "tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura"],
        "uttar_pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha"],
        "uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar"],
        "west_bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling"],
        "andaman_nicobar": ["Nicobar", "North and Middle Andaman", "South Andaman"],
        "chandigarh": ["Chandigarh"],
        "dadra_nagar_haveli_daman_diu": ["Dadra & Nagar Haveli", "Daman", "Diu"],
        "delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"],
        "jammu_kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal"],
            "ladakh": ["Kargil", "Leh"] };
          

    function populateDistricts() {
        const stateSelect = document.getElementById("state");
        const districtSelect = document.getElementById("district");
        const selectedState = stateSelect.value;

        // Clear current districts
        districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';

        // Populate districts based on the selected state
        if (selectedState && districtsData[selectedState]) {
            districtsData[selectedState].forEach(function(district) {
                const option = document.createElement("option");
                option.value = district.toLowerCase().replace(/\s+/g, '_');
                option.text = district;
                districtSelect.add(option);
            });
        }
    }


        /* Select the logo element
const logo = document.getElementById('logo');
const letters = logo.querySelectorAll('span');

// Function to calculate distance and move letters
function repelLetters(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  letters.forEach(letter =>{
    const rect = letter.getBoundingClientRect();
    const letterX = rect.left + rect.width / 2;
    const letterY = rect.top + rect.height / 2;

    const distanceX = letterX - mouseX;
    const distanceY = letterY - mouseY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);}

    // Repelling force (adjust multiplier for more or less movement)
    const force = Math.min(100 / distance, 10);

    const moveX = force * distanceX * 0.1; // Adjust the multiplier to control effect strength
    const moveY = force * distanceY * 0.1;

    letter.style.transform = translate(${moveX}px, ${moveY}px); } 

// Reset the position when the mouse leaves the element
function resetLetters() {
  letters.forEach(letter => {
    letter.style.transform = 'translate(0, 0)';
  });
}

// Add event listeners for mouse move and mouse leave
logo.addEventListener('mousemove', repelLetters);
logo.addEventListener('mouseleave', resetLetters);
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
              element.style.transform = translateX(${startSlider}%)
          })
    })

    slideBtnright.addEventListener("click",()=>{
         if(startSlider >= -endSlider + 100){
          startSlider = startSlider - 100;
         }
        imgItem.forEach(element =>{
            element.style.transform = translateX(${startSlider}%)
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
        imageList.style.transform = translateX(-${index * 100}%);
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
});*/
