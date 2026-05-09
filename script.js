let image=document.querySelectorAll(".inside img")
let lightbox=document.querySelector(".lightbox")
let lightboxImg=document.querySelector(".lightbox-img")
let closebtn=document.querySelector(".close")
let prevbtn=document.querySelector(".Previous")
let btn=document.querySelectorAll(".buttons button")
let nextbtn=document.querySelector(".next")

let currentIndex=0

// <<<<<<<<-------LIGHT BOX IMAGE-------->>>>>>>>
for(let i=0;i<image.length;i++){
    image[i].onclick=function () { 
          lightbox.style.display="flex"
        lightboxImg.src=this.src
        currentIndex=i
    }
        
  

}
closebtn.addEventListener("click",()=>{
    lightbox.style.display="none"

})

nextbtn.addEventListener("click",()=>{
    
    currentIndex=(currentIndex+1)%image.length
    lightboxImg.src=image[currentIndex].src
})

prevbtn.addEventListener("click",()=>{
 
    currentIndex=(currentIndex-1+image.length)%image.length
     lightboxImg.src=image[currentIndex].src
})


// <<<<<<<<<<--------APPLY FILTER---------->>>>>>>

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener("click",()=>{
    
    let filterName=btn[i].dataset.name
    for(let j=0;j<image.length;j++){

        if( filterName=="All"){
            image[j].style.display=""
        }else if( filterName==image[j].dataset.category){
             image[j].style.display=""
        }else{
             image[j].style.display="none"
        }

    }
   

   })
}