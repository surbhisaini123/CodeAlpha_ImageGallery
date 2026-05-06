let image=document.querySelectorAll(".inside img")
let lightbox=document.querySelector(".lightbox")
let lightboxImg=document.querySelector(".lightbox-img")
let closebtn=document.querySelector(".close")
let prevbtn=document.querySelector(".previous")
let nextbtn=document.querySelector(".next")

let currentIndex=0
for(let i=0;i<image.length;i++){
    image[i].onclick=function () {
        console.log("hiii");
          lightbox.style.display="flex"
        lightboxImg.src=this.src
        currentIndex=i
    }
        
    
    // addEventListener("click",()=>{
    //     console.log("hiii");
        
    //     lightbox.style.display="flex"
    //     lightboxImg.src=this.src
    //     currentIndex=i


    // })

}
closebtn.addEventListener("click",()=>{
    console.log("hiii");
    lightbox.style.display="none"

})

nextbtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%image.length
    lightbox.src=image[currentIndex].src
})
    

