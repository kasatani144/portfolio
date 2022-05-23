

/*------------ About tab--------*/
const tabContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) => {
   if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
       tabContainer.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");
       const target = e.target.getAttribute("data-target");
       aboutSection.querySelector(".tab-content.active").classList.remove("active");
       aboutSection.querySelector(target).classList.add("active");
   };
});




/*---------------Resposive------------*/

(()=>{
const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav-inner");

navToggler.addEventListener("click" , toggle);

function toggle(){
    nav.classList.toggle("open");
}  
})();