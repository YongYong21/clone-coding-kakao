function closeAllSubmenus() {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.querySelector(".submenu");
      if (submenu.style.display !== "block") {
        closeAllSubmenus();
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    });
  });
});

const header = document.querySelector("header")
const calenderHeader = document.querySelector('.calender-header')
let preScrollY = window.scrollY;

window.addEventListener('scroll', function(){
  if(window.scrollY > 1){
    header.classList.add('brd-bt')
  }
  else {
    header.classList.remove('brd-bt')
    header.style.display = 'block'
  }
  
  if(window.scrollY > 100) {
    header.style.top = '-70px'
    calenderHeader.style.display = 'block'
    calenderHeader.style.top = '0'
    if(preScrollY > window.scrollY){
      header.style.top = '0'
      calenderHeader.style.top = '73px'
    }
  }
  else {
    calenderHeader.style.display = 'none'
  }

  
  preScrollY = window.scrollY
})