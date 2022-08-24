const parallaxes = document.getElementsByClassName("parallax")


var image1 = new Image();
image1.onload = function() {
  parallaxes[0].style.backgroundImage="url("+image1.src+")"
  console.log("aaa")
}
image1.src = '../img/image1.jpeg';



var image2 = new Image();
image2.src = '../img/image2.jpeg';
image2.onload = function() {
  parallaxes[1].style.backgroundImage="url("+image2.src+")"
  console.log("bb")

}



var image3 = new Image();
image3.onload = function() {
  parallaxes[2].style.backgroundImage="url("+image3.src+")"
  console.log("ccc")

}
image3.src = '../img/image3.jpeg';






let aboutUsShortcut= document.getElementById("shortcut1") ;
let titleAbout="titleAbout",
    titleWhy="titleWhy",
    titleContact="titleContact",
    titleMore="titleMore"
    home="header"


function scrolling(id){
    let elem=document.getElementById(id).getBoundingClientRect();
    window.scrollTo({
        top: elem.top + window.pageYOffset,
        left: 0,
        behavior: 'smooth'
      });
     }


     
const html = document.documentElement;
const header = document.getElementById("header");
const menu = document.getElementById("menu") ;
const content = document.getElementById("contentContainer");
const aboutUs = document.getElementById("AboutUs");
const ourService = document.getElementById("ourServices"); 
const Contact = document.getElementById("Contact");
const more = document.getElementById("more");

const header_band = document.getElementById("header_band")
const header_title = document.getElementById("header_title")
const header_body = document.getElementById("header_body") 
const aboutUsTitle = document.getElementById("titleAbout") 
const AboutUsBarre = document.getElementById("AboutUsBarre")
const textAbout = document.getElementById("textAbout")





const scroll_animation = document.getElementsByClassName("scroll_animation");
const anim1 = scroll_animation[0]
const anim2 = scroll_animation[1]
const anim3 = scroll_animation[2]
const anim4 = scroll_animation[3]
const mainBarre = document.getElementById("mainBarre")

//console.log(header_band)

header_band.style.marginRight = "0";
header_band.style.marginLeft = "0";
header_body.style.width="0"
header_title.style.width="0"
aboutUsTitle.style.width="0";
AboutUsBarre.style.height = "0";
// header_band.style.marginRight = "3vw";
// header_band.style.marginLeft = "3vw";
// header_body.style.width="50%"
// header_title.style.width="50%"


window.addEventListener('scroll', () => {  
  
  const scrollTop = html.scrollTop;
  
  console.log(header.scrollHeight)
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  //console.log(scrollTop);
  switch (true) {
      case scrollTop< header.scrollHeight : 
      mainBarre.style.width= 0;
      let width = document.body.offsetWidth
      if (width>980){
        mainBarre.style.left= "17%";
      }else if (width>820){
        mainBarre.style.left= "19%";
      }else {
        mainBarre.style.left= "22%";
      }
     
      mainBarre.style.borderColor="#f1f1f1"
        break;
      case scrollTop < header.scrollHeight+aboutUs.scrollHeight : 
      mainBarre.style.borderColor="rgb(13,160,150)"
      mainBarre.style.width= anim1.scrollWidth +"px";
      mainBarre.style.left= anim1.getBoundingClientRect().left +"px";
    
      break;
      case scrollTop < header.scrollHeight+aboutUs.scrollHeight+ourService.scrollHeight : 
     
      mainBarre.style.width= anim2.scrollWidth+"px";
      mainBarre.style.left= anim2.getBoundingClientRect().left +"px";

      
        
      break;
      case scrollTop < header.scrollHeight+aboutUs.scrollHeight+ourService.scrollHeight+Contact.scrollHeight : 
      mainBarre.style.width= anim3.scrollWidth+"px";
      mainBarre.style.left= anim3.getBoundingClientRect().left +"px";

     
      break;
      default :  
      mainBarre.style.width= anim4.scrollWidth+"px";
      mainBarre.style.left= anim4.getBoundingClientRect().left +"px";

      ; 

  }

  switch (true){
    case html.scrollTop < header.scrollHeight/5 : 
    header_band.style.marginRight = "3vw";
    header_band.style.marginLeft = "3vw";
    header_body.style.width="50%"
    header_title.style.width="50%"

    header_band.style.height = "80%";
    aboutUsTitle.style.width="0";
    AboutUsBarre.style.height = "0";
    AboutUsBarre.style.borderColor="#f1f1f1";



    
    break;
    case html.scrollTop < header.scrollHeight/4:
  
    
      aboutUsTitle.style.width="0";
      AboutUsBarre.style.height = "0";
      AboutUsBarre.style.borderColor="#f1f1f1";
    

      textAbout.style.color="#f1f1f1"
    
      header_band.style.height = "80%";

    header_band.style.marginRight = "0";
    header_band.style.marginLeft = "0";
    header_body.style.width="0";
    header_title.style.width="0";
    

    

  
    break;
    case html.scrollTop > header.scrollHeight/2:
  
    header_band.style.height = "0";
    console.log(aboutUs.scrollHeight)
    AboutUsBarre.style.height = aboutUs.scrollHeight+"px";
    AboutUsBarre.style.borderColor="rgb(13,160,150)";


    aboutUsTitle.style.width="300px";

    textAbout.style.color="rgb(80, 80, 80)"
    
    header_band.style.marginRight = "0";
    header_band.style.marginLeft = "0";
    header_body.style.width="0";
    header_title.style.width="0";

    

  
    break;
    default:

  }
  //console.log(header.scrollHeight)

  const scrollFraction = scrollTop / maxScrollTop;

}
);


function splitBody() {
  let txt = header_body.getAttribute("value")
  let width = document.body.offsetWidth

  header_body.innerHTML=""

  switch(true){
    case width > 1000 :
      header_body.innerHTML=splitIn(txt,3)
      header_body.style.top="35%";
      break;
    case width > 750 :
      header_body.innerHTML=splitIn(txt,4)
      header_body.style.top="31%";
      header_title.style.fontSize="50px"
      header_body.style.fontSize="32px"
      break;  
      case width > 490 :
        header_body.style.top="25.5%";
        header_title.style.fontSize="40px"
        header_body.style.fontSize="25px"
        header_body.innerHTML=splitIn(txt,5)  
        break;
        default :
        header_body.style.top="25.5%";
        header_title.style.top="30%"
        header_title.style.fontSize="30px"
        header_body.style.fontSize="20px"
        header_body.innerHTML=splitIn(txt,6)  

  }
}

//document.addEventListener("change",splitBody())
window.addEventListener("resize",splitBody)
splitBody()

function splitIn(txt,i){
  
  let j=1,result="" ,tmp=txt ,alreadyUsed=0 ;
  //console.log(txt)
  let x=parseInt(txt.length/i)
  //console.log(x)

  while (j<=i) {
    //console.log(j*x)
    //console.log(txt.substring(Math.max(j*x,alreadyUsed)))
    
    let b=txt.substring(Math.max(j*x,alreadyUsed)).indexOf(" ");
    let idx=b-alreadyUsed+Math.max(j*x,alreadyUsed)
    console.log(idx)
    switch (b) {
      case -1 :
        result +="<div class=\"body_e\">"+txt.substring(alreadyUsed)+"</div>"
        //console.log(txt.substring(alreadyUsed))
        return result
      
      default:
        //console.log(txt.substring(alreadyUsed,alreadyUsed+b+x))
        result +="<div class=\"body_e\">"+txt.substring(alreadyUsed,alreadyUsed+idx)+"</div>"      
        j++
        alreadyUsed += idx
        console.log(txt.substring(0,alreadyUsed))
        //tmp = tmp.substring(b)
        
        
    }

  }
  return result


}
setTimeout(() => { header_band.style.marginRight = "3vw";
header_band.style.marginLeft = "3vw";
header_body.style.width="50%"
header_title.style.width="50%"  }, 700);




     
     
