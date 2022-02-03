let yourName = "Jose Otero";

// Cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add cookies
const gbPlusBtn = document.querySelector("#add-gb");
const ccPlusBtn = document.querySelector("#add-cc");
const sugarPlusBtn = document.querySelector("#add-sugar");
// selecting the element with an id of sub cookies
const gbMinusBtn = document.querySelector("#minus-gb");
const ccMinusBtn = document.querySelector("#minus-cc");
const sugarMinusBtn = document.querySelector("#minus-sugar");

//total cookies
const total = document.querySelector("#qty-total");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Clickable cookie code that adds one

let gbqty = document.querySelector("#qty-gb");
gbPlusBtn.addEventListener("click", function () {
  gb++;
  gbqty.textContent = gb;

  console.log("Gingerbread + button was clicked!");
});

let ccqty = document.querySelector("#qty-cc");
ccPlusBtn.addEventListener("click", function () {
  cc++;
  ccqty.textContent = cc;
  console.log("Chocolate + button was clicked!");
});

let sugarqty = document.querySelector("#qty-sugar");
sugarPlusBtn.addEventListener("click", function () {
  sugar++;
  sugarqty.textContent = sugar;
  console.log("Sugar + button was clicked!");
});

// clickable cookie code that subtracts one

gbMinusBtn.addEventListener("click", function () {
  gb--;
  gbqty.textContent = gb;
  console.log("Gingerbread + button was clicked!");
});

ccMinusBtn.addEventListener("click", function () {
  cc--;
  ccqty.textContent = cc;
  console.log("Chocolate + button was clicked!");
});

sugarMinusBtn.addEventListener("click", function () {
  sugar--;
  sugarqty.textContent = sugar;
  console.log("Sugar + button was clicked!");
});







