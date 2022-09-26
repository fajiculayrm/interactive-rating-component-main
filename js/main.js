const submitBtn = document.querySelector(".btnSubmit");
const resultContainer = document.querySelector(".result");
const ratingContainer = document.querySelector(".rating");
const choices = document.querySelectorAll(".choices");
const rateResult = document.querySelector("#rateResult");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice.innerHTML);
        rateResult.innerText = choice.innerHTML;

        submitBtn.addEventListener("click", () => {
            ratingContainer.classList.add("hidden");
            resultContainer.classList.remove("hidden");
        });
    });
});
