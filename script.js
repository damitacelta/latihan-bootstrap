window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const promoButtons = document.querySelectorAll(".buy-btn");
function showPromo(type){
   const diskon = document.getElementById("diskonPromo");
   const bonus = document.getElementById("bonusPromo");

   const buttons = document.querySelectorAll(".filter-btn");

  
   buttons.forEach(btn => {
      btn.classList.remove("active");
   });


   if(type === "diskon"){
      diskon.style.display = "block";
      bonus.style.display = "none";

      buttons[0].classList.add("active");
   }

   else{
      diskon.style.display = "none";
      bonus.style.display = "block";

      buttons[1].classList.add("active");
   }
}

function checkoutProduk(){

  document.getElementById("detailBeli").style.display = "block";

  alert("Checkout berhasil!");

}


