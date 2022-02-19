

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;



const recognition = new window.SpeechRecognition();

recognition.interinResults = true;
let p =document.querySelector(".text-p");
let imageContainer=document.querySelector(".image");
let image=document.querySelector(".image img");


  
function say(){
    recognition.addEventListener("result",(e)=>{
        const text =Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("");
      
        p.value=text;
        if (p.value==="chicken"){
            image.setAttribute("src","3.png");
            
            image.classList.add("stop");

         
        }else if(p.value==="dance"){
            image.setAttribute("src","2.png");  
            image.classList.add("stop");

             
        }else{
            image.setAttribute("src","1.png");
         
        }
           
    })
}
say();
recognition.addEventListener("end",()=>{
    recognition.start();
})
recognition.start();


let audio= document.querySelector(".song");
let play =document.querySelector(".play");

play.addEventListener("click",()=>{
    audio.play();
    say();
    if (p.value==="chicken"){
        image.classList.add("active");
        image.classList.remove("stop");

        image.setAttribute("src","3.png");
        audio.setAttribute("src","chicken.mp3");
        audio.play();
        
    }else if(p.value==="dance"){
        image.classList.add("special");
        image.setAttribute("src","2.png");      
          audio.setAttribute("src","coco.mp3");
        audio.play();
    }else{
        image.setAttribute("src","1.png");
        audio.setAttribute("src","ring.mp3");
        audio.play();
    }
})


      
