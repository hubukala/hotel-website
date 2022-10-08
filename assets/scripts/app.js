const form = document.getElementById("form");
const place = document.getElementById("input-place");
const checkInDate = document.getElementById("input-checkin");
const checkOutDate = document.getElementById("input-checkout");
const guestAmount = document.getElementById("select-guest");

const guestNotValid = document.getElementById("guest-not-valid");
const locationNotValid = document.getElementById("location-not-valid");
const dateNotValid = document.getElementById("date-not-valid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

place.addEventListener("input", (e) => {
  e.preventDefault();
  locationNotValid.style.display = "none";
});

guestAmount.addEventListener("input", (e) => {
  e.preventDefault();
  guestNotValid.style.display = "none";
});

checkInDate.addEventListener("input", (e) => {
  e.preventDefault();
  dateNotValid.style.display = "none";
});

checkOutDate.addEventListener("input", (e) => {
  e.preventDefault();
  dateNotValid.style.display = "none";
});

function checkInputs() {
  const locationValue = place.value;
  const checkInDateValue = checkInDate.value;
  const checkOutDateValue = checkOutDate.value;
  const guestAmountValue = guestAmount.value;

  if (locationValue === "") {
    locationNotValid.style.display = "block";
  }

  if (guestAmountValue === "") {
    guestNotValid.style.display = "block";
  }

  if (checkInDateValue >= checkOutDateValue) {
    dateNotValid.style.display = "block";
  }
}
