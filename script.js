let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Remove "active" class from all accordion buttons
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
