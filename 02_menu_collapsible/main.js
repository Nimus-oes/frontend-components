const sectionTitle = document.getElementsByClassName("section-title");

for (let i = 0; i < sectionTitle.length; i++) {
  sectionTitle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const sectionContent = this.nextElementSibling;
    if (sectionContent.style.maxHeight) {
      sectionContent.style.maxHeight = null;
    } else {
      sectionContent.style.maxHeight = sectionContent.scrollHeight + "px";
    }
  });
}
