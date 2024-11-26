document.addEventListener("DOMContentLoaded", () => {
  const rateButtons = document.querySelectorAll(".rate-button");
  const submitButton = document.querySelector(".submit-button");
  let selectedRate = null;

  rateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      rateButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedRate = button.getAttribute("data-value");
    });
  });
  submitButton.addEventListener("click", () => {
    if (selectedRate) {
      window.location.href = `thankyou.html?rate=${selectedRate}`;
    } else {
      alert("Please select a rate before submitting.");
    }
  });
});
