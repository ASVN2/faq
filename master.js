const qustions = document.querySelectorAll(".qustion");
// const faq = document.querySelectorAll(".faq");
// console.log(faq);
qustions.forEach((qustion) => {
  qustion.addEventListener("click", () => {
    qustion.parentElement.classList.toggle("show");
    if (qustion.parentElement.classList.contains("show")) {
      qustion.parentElement.style.height = `${
        qustion.nextElementSibling.scrollHeight + 45
      }px`;
    } else {
      qustion.parentElement.style.height = `${40}px`;
    }
  });
});
