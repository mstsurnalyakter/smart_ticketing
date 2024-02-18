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

const addClass = (id, className) => {
  findElementById(id).classList.add(className);
};

const removeClass = (id, className) => {
  findElementById(id).classList.remove(className);
};

// create new element
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
    kbd.addEventListener("click",()=>{
          kbd.disabled = true;
        const text = kbd.innerText;
        kbd.style.backgroundColor = "#1DD100";
        kbd.style.color = "#fff";
        createNewElement(text)

        let totalSeat = getInnerText("total-seat");
            totalSeat--;
            updatedInnerText("total-seat",totalSeat)
        let seatNumber = getInnerText("seat-number");
            seatNumber++;
            updatedInnerText("seat-number",seatNumber);




    })
}



findElementById("buy-tickets").addEventListener("click", () => {
  findElementById("e-paribahan").scrollIntoView({ behavior: "smooth" });
});

// const btnClick = (btnId) => {
//   const btn = findElementById(btnId);
//   const text = getInnerText(btnId);

//    btn.disabled = true;
//   btn.style.backgroundColor = "#1DD100";
//   btn.style.color = "#fff";
// //   btn.disabled = true;
// //   btn.setAttribute("disabled",true);

//   createNewElement(text);
// };
