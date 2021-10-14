// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    //console.log(links.classList); should return something
    // console.log(links.classList.contains("random"));  should return 'false'
     // console.log(links.classList.contains("links"));  should return 'true'
    //  if(links.classList.contains("show-links")){
    //      links.classList.remove("show-links");
    //  }
    //  else {
    //      links.classList.add("show-links");
    //  }
     links.classList.toggle("show-links");
});
