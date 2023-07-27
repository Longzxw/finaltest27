const buyBtns = document.querySelectorAll(".js-buy-ticket");
const input1 = document.querySelector("#id-input-money");
const input2 = document.querySelector("#id-input-money2");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const removeMarker = document.querySelector(".carousel-indicators");
const carouselcontrolprev = document.querySelector(".carousel-control-prev");
const carouselcontrolnext = document.querySelector(".carousel-control-next");
const carouselcontrolnexticon = document.querySelector(
  ".carousel-control-next-icon"
);
const carouselcontrolprevicon = document.querySelector(
  ".carousel-control-prev-icon"
);
carouselcontrolprev.style = "top: 46px";
carouselcontrolnext.style = "top: 46px;";
carouselcontrolnexticon.style =
  "background-color: black; border-radius:30px; width:3rem;height:3rem";
carouselcontrolprevicon.style =
  "background-color: black; border-radius:30px; width:3rem;height:3rem";
removeMarker.style.display = "none";
// list
let dataListEvent = JSON.parse(localStorage.getItem("dataBase"));
let dataItem = dataListEvent;
let listHTML = "";
for (let i = 0; i < dataItem.length; i++) {
  const list = dataItem[i];
  const { nameList, img, date, id } = list;

  listHTML += `
  <div class="place-item">
  <img src="${img}" alt="dia diem" class="place-img" onclick="pagesImg(${id})">
  <div class="place-body">
      <h3 class="place-heading">${nameList}</h3>
      <p class="place-time">${date}</p>
      <button class="place-buy-btn" onclick="showBuyTickets(${id})">Buy Tickets</button>
  </div>
</div>
  `;
}
document.querySelector(".place-list").innerHTML = listHTML;
// navigation
function pagesImg(id) {
  let item = dataItem.find((item) => item.id === id);
  if (item) {
    window.open(`./pages/page-${id}.html`, "_blank");
  }
}
// search list
let searchInput = document.querySelector("#inputs");
searchInput.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listItemHTML = document.querySelectorAll(".place-item");
  listItemHTML.forEach((item) => {
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});

// Chuyển Trang

// Buy_Input
const price = () => {
  let i = 250;
  if (input1.value >= 1) {
    input2.value = ` ${input1.value.trim() * i}VNĐ`;
  } else {
    input2.value = 0;
  }
};
input1.addEventListener("input", price);

// Hàm hiển thị mua vé(them class open vào modal)
const nameTicket = document.querySelector(".nameTickets");
const headings = document.querySelectorAll(".place-heading");
// show ve
function showBuyTickets(id) {
  let item = dataItem.find((item) => item.id === id);

  if (item) {
    nameTicket.innerHTML = `<span>Có phải bạn múa mua vé này không? <strong>${item.nameList}</strong></span>`;
  }
  modal.classList.add("open");
}
// Hàm ẩn thị mua vé(bỏ class open vào modal)

function hideBuyTickets() {
  modal.classList.remove("open");
}
// lặp qua từng thẻ lắng nghe click để thêm class
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
// nghe click để huỷ classs
modalClose.addEventListener("click", hideBuyTickets);
modal.addEventListener("click", hideBuyTickets);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
//
