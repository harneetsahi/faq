const questionBtn = document.querySelectorAll(".question-btn");

const questions = document.querySelectorAll(".question");

////COMMENT// one way:
// questionBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });
/* accessing parent's parent because we need to modify question-title and question-text both */

////COMMENT// another way: it also minimizes other questions
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
        // if 'item' (other articles) does not match the question where the btn was clicked, we remove the show-text class
      }

      question.classList.toggle("show-text");
    });
  });
});
