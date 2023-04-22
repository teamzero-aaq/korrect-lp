let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Remove "active" class from all accordion buttons
    console.log(this);
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] != this) {
        acc[j].classList.remove("active");
        acc[j].style.maxHeight = null;
      }
    }
    // Toggle "active" class on the clicked accordion button
    this.classList.toggle("active");
    if (this.style.maxHeight) {
      this.style.maxHeight = null;
    } else {
      this.style.maxHeight = this.scrollHeight + "px";
    }
  });
}

//navbar

const humburger = document.querySelector(".humburger");
const mobile_menu = document.querySelector(".menu ul");
const menu_item = document.querySelector(".menu ul li a");
const open_humburger = document.querySelector(".openhumburger");
const close_humburger = document.querySelector(".closehumburger");

humburger.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  close_humburger.classList.toggle("active");
  if (open_humburger.className.split(" ")[1] == "active") {
    open_humburger.classList.remove("active");
  } else {
    open_humburger.classList.add("active");
  }
});
