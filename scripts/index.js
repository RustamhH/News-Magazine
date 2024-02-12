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



function carousel(container,previewId,nextId){
    let c=document.querySelector(container);
    let p=document.getElementById(previewId);
    let n=document.getElementById(nextId);
   
    n.addEventListener("click",()=>{
      c.style.scrollBehavior="smooth";
      c.scrollLeft+=384;
    });
   
    p.addEventListener("click",()=>{
        c.scrollLeft-=384;
    });
   
}

carousel(".outerdiv","back","next")
carousel(".new-posts-outerdiv","new-posts-back","new-posts-next")
carousel(".trendy-posts-outerdiv","trendy-posts-back","trendy-posts-next")
carousel(".top-posts-outerdiv","top-posts-back","top-posts-next")




let sliderId1 = document.getElementById("sliderId1");
let sliderId2= document.getElementById("sliderId2");
let latestpostspreview = document.getElementById("latest-posts-back");
let latestpostsnext = document.getElementById("latest-posts-next");

latestpostsnext.addEventListener("click", () => {
    sliderId1.style.scrollBehavior = "smooth";
    sliderId2.style.scrollBehavior = "smooth";
    sliderId1.scrollLeft += 360;
    sliderId2.scrollLeft += 360;
});

latestpostspreview.addEventListener("click", () => {
    sliderId1.style.scrollBehavior = "smooth";
    sliderId2.style.scrollBehavior = "smooth";
    sliderId1.scrollLeft -= 360;
    sliderId2.scrollLeft -= 360;
});