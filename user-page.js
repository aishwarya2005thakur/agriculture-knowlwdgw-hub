function toggleVisibility(sectionId) {
    var content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.classList.contains('hidden')) {
        content.style.display = "block";
        content.classList.remove('hidden');
    } else {
        content.style.display === "none";
        content.classList.add('hidden');
    } }