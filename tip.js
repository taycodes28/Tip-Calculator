function calculateTip() {
    const bill = parseFloat(document.getElementById("billAmount").value);
const tip = parseFloat(document.getElementById("tipPercent").value);



if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
    document.getElementById("result").textContent =
    "Please enter valid numbers for both fields.";
    return;
}

const tipAmount = bill * (tip/100);
const total = bill + tipAmount;

const tipRounded   = tipAmount.toFixed(2);
  const totalRounded = total.toFixed(2);

  document.getElementById("result").textContent =
    `Tip: $${tipRounded}    Total: $${totalRounded}`;

}

function setTip(amount) {
    document.getElementById("tipPercent").value = amount;

}