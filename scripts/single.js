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


carousel(".related-posts-outerdiv","related-posts-back","related-posts-next")
