let image=document.querySelectorAll(".inside img")
let lightbox=document.querySelector(".lightbox")
let lightboxImg=document.querySelector(".lightbox-img")
let closebtn=document.querySelector(".close")
let prevbtn=document.querySelector(".Previous")

let nextbtn=document.querySelector(".next")

let currentIndex=0
for(let i=0;i<image.length;i++){
    image[i].onclick=function () {
        console.log("hiii big img is open");
          lightbox.style.display="flex"
        lightboxImg.src=this.src
        currentIndex=i
    }
        
  

}
closebtn.addEventListener("click",()=>{
    console.log("hiii btn is close");
    lightbox.style.display="none"

})

nextbtn.addEventListener("click",()=>{
    console.log("hiii click next btn");
    currentIndex=(currentIndex+1)%image.length
    lightboxImg.src=image[currentIndex].src
})

prevbtn.addEventListener("click",()=>{
    console.log("hiii close btn is click");
    currentIndex=(currentIndex-1+image.length)%image.length
     lightboxImg.src=image[currentIndex].src
})

