let scrollContainer=document.querySelector(".carousel-cards");
let nextBtn=document.getElementById("nextBtn");
 
nextBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".card").offsetWidth;
    const totalWidth = scrollContainer.scrollWidth;
 
    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= totalWidth) {
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += totalWidth;
        nextBtn.style.marginLeft="-40px";
    }
});