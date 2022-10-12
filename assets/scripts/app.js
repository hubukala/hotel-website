const form = document.getElementById("form");
const place = document.getElementById("input-place");
const checkInDate = document.getElementById("input-checkin");
const checkOutDate = document.getElementById("input-checkout");
const guestAmount = document.getElementById("select-guest");

const guestNotValid = document.getElementById("guest-not-valid");
const locationNotValid = document.getElementById("location-not-valid");
const dateNotValid = document.getElementById("date-not-valid");

const recommendedButton = document.getElementById("recommended-btn");
const benefitsButton = document.getElementById("benefits-btn");
const feedbackButton = document.getElementById("feedback-btn");
const hotelsButton = document.getElementById("hotels-btn");

const sectionRecommended = document.getElementById("section-recommended");
const sectionBenefits = document.getElementById("section-benefits");
const sectionFeedback = document.getElementById("section-feedback");
const formFindHotels = document.getElementById("form");

let isFormValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (isFormValid === true) {
    alert("validation successful");
  }
});

hotelsButton.addEventListener("click", (e) => {
  formFindHotels.scrollIntoView(true);
});

recommendedButton.addEventListener("click", (e) => {
  sectionRecommended.scrollIntoView(true);
});

benefitsButton.addEventListener("click", (e) => {
  sectionBenefits.scrollIntoView(true);
});

feedbackButton.addEventListener("click", (e) => {
  sectionFeedback.scrollIntoView(true);
});

place.addEventListener("input", (e) => {
  locationNotValid.style.display = "none";
});

checkInDate.addEventListener("input", (e) => {
  dateNotValid.style.display = "none";
});

checkOutDate.addEventListener("input", (e) => {
  dateNotValid.style.display = "none";
});

guestAmount.addEventListener("input", (e) => {
  guestNotValid.style.display = "none";
});

function checkInputs() {
  if (place.value === "") {
    locationNotValid.style.display = "block";
  }

  if (guestAmount.value === "") {
    guestNotValid.style.display = "block";
  }

  if (checkInDate.value >= checkOutDate.value) {
    dateNotValid.style.display = "block";
  }

  if (
    locationNotValid.style.display === "none" &&
    guestNotValid.style.display === "none" &&
    dateNotValid.style.display === "none"
  ) {
    isFormValid = true;
  } else {
    isFormValid = false;
  }
}
