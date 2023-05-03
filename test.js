const tyrkish = document.querySelector( "#tyrkish__click" );

const tyrkish__imgs = document.querySelector( ".tyrkish" );
const swiper1 = document.querySelector(".swiper");

tyrkish.addEventListener( "click", () => {
    if ( tyrkish__imgs.style.display === "" )
    {
        tyrkish__imgs.style.display =  "block"
    }
    else
    {
        tyrkish__imgs.style.display = ""
    }

} );
const egypet = document.querySelector( "#egypit__click" );

const egypet__imgs = document.querySelector(".egypit");
egypet.addEventListener("click",(event)=>{
    console.log(event)
    if (egypet__imgs.style.display === ""  ){
        swiper1.style.display = "none"
     egypet__imgs.style.display = "block" 
    }
    else{
        egypet__imgs.style.display = "" 
        swiper1.style.display = ""

    }
});

const kh = document.querySelector( "#kharkiv__click" );
const kharkiv__imgs = document.querySelector(".kharkiv");


    kh.addEventListener("click",()=>{
        if (kharkiv__imgs.style.display === ""  ){
            swiper1.style.display = "none"
            kharkiv__imgs.style.display = "block" 
            }
        else{
            kharkiv__imgs.style.display = "" 

    }
});


const textLove = document.querySelector(".text__love");
const klick__love =document.querySelector(".klick__I__love");

textLove.addEventListener("click", ()=>{
    if(textLove.style.display ===""){
        klick__love.style.display = "block"
    }
  
});

const back = document.querySelector(".back");
const b = document.querySelector(".main__bgSwper")
console.log(b)

b.addEventListener("click", ()=>{
    if(b.style.display===""){
    
        klick__love.style.display ="none"
      

    }
})
// console.log(back)
// back.addEventListener("klick",(event)=>{
//     console.log (event)
//     if(back.style.display=== ""){
        
//        klick__love.style.display = "none"  
//     }
// });

// console.log('test')

