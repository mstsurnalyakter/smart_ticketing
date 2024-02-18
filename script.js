const allKbd = document.getElementsByClassName("kbd");
// common function here
const findElementById = (id) => {
  return document.getElementById(id);
};

const getInnerText = (id) => {
  return findElementById(id).innerText;
};

const updatedInnerText = (id, value) => {
  findElementById(id).innerText = value;
};

const createNewElement = (value) => {
  const parentElement = findElementById("tbody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  tr.setAttribute("class", "flex justify-between");
  td1.innerText = value;
  td2.innerText = "Economoy";
  td3.innerText = "550";
  tr.append(td1, td2, td3);
  parentElement.appendChild(tr);
};


for (const kbd of allKbd) {
  kbd.addEventListener("click", () => {
    let totalSeat = getInnerText("total-seat");
        totalSeat--;
    let seatNumber = getInnerText("seat-number");
        seatNumber++;

    if (seatNumber >= 5) {
      alert("Sorry. A person can buy maximum  4 tickets.");
      return;
    }

    kbd.disabled = true;
    const text = kbd.innerText;
    kbd.style.backgroundColor = "#1DD100";
    kbd.style.color = "#fff";
    createNewElement(text);
    updatedInnerText("total-seat", totalSeat);
    updatedInnerText("seat-number", seatNumber);

    totalPriceCalculate("total-price");
    grandTotalPriceCalculate("grand-total");
  });

}

findElementById("buy-tickets").addEventListener("click", () => {
  findElementById("e-paribahan").scrollIntoView({ behavior: "smooth" });
});


const totalPriceCalculate = (id) => {
  const price = 550;
  let totalPrice = parseFloat(getInnerText(id));
  totalPrice += price;
  updatedInnerText(id, totalPrice);
};

const grandTotalPriceCalculate = (id) => {
  let totalPrice = parseFloat(getInnerText("total-price"));
  const couponValue = findElementById("input-field").value;
   let seatNumber = getInnerText("seat-number");

   if (seatNumber >= 4) {
    findElementById("apply-btn").removeAttribute("disabled");
   }

  if (couponValue) {
    if (couponValue === "NEW15") {
        findElementById("next-btn").setAttribute("disabled", true);
      const discount = totalPrice * 0.15;
      updatedInnerText("discount-price",discount);
      updatedInnerText(id, totalPrice - discount);
      findElementById("coupon-field").style.display = "none";
    } else if (couponValue === "Couple 20") {
        findElementById("next-btn").setAttribute("disabled", true);
      const discount = totalPrice * 0.2;
       updatedInnerText("discount-price", discount);
      updatedInnerText(id, totalPrice - discount);
      findElementById("coupon-field").style.display = "none";
    } else {
      alert("Invalid coupon code.");
      findElementById("input-field").value = "";
    }
  } else {
    updatedInnerText(id, totalPrice);
  }
};


findElementById("number-input").addEventListener("keyup", (e) => {
  const number = e.target.value;
  if (number) {
    findElementById("next-btn").removeAttribute("disabled");
  } else{
     findElementById("next-btn").setAttribute("disabled", true);
  }
});

findElementById("continue").addEventListener("click",()=>{
     setTimeout(() => {
       location.reload();
     }, 1000);
});
