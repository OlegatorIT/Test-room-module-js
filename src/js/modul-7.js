// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   console.log(event.target.nodeName);
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// !=========================================================
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", (event) => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log((output.textContent = scrollEventCounter));
//       scrollEventCounter += 1;
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );
// !=======================================================================
const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryEl = document.querySelector(".gallery");

function addImages() {
  const addImg = galleryItems
    .map(
      (el) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
              <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
            </a>
          </li>`
    )
    .join("");
  galleryEl.innerHTML = addImg;
}

addImages();
const bodyEl = document.body;
const modalEl = document.querySelector(".modal");
const modalImgEl = document.querySelector(".modal-div");
const btn1El = document.querySelector(".btn-1");
const btn2El = document.querySelector(".btn-2");
const btnCloseEl = document.querySelector(".btn-close");
const modalImg = document.querySelector(".modal-img");

galleryEl.addEventListener("click", openModal);
btn2El.addEventListener("click", nextImg);
btn1El.addEventListener("click", previousImg);
btnCloseEl.addEventListener("click", closebtn);

function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const add = `<img class="modal-style" src="${e.target.dataset.source}" alt="${e.target.alt}">
  <p class="modal-text">${e.target.alt}</p>`;

  document.body.style.margin = 0;
  modalEl.classList.toggle("ishidden");
  document.addEventListener("keydown", closeEsc);
  bodyEl.style.overflow = "hidden";
  modalImg.innerHTML = add;
}

function nextImg() {
  const modaStylelEl = document.querySelector(".modal-style");
  const modalText = document.querySelector(".modal-text");
  let imgIndex = galleryItems.findIndex((el) => {
    return el.original === modaStylelEl.src;
  });
  let nextImgIndex = (imgIndex + 1) % galleryItems.length;
  modaStylelEl.src = galleryItems[nextImgIndex].original;
  modalText.textContent = galleryItems[nextImgIndex].description;
}

function previousImg() {
  const modaStylelEl = document.querySelector(".modal-style");
  const modalText = document.querySelector(".modal-text");
  let imgIndex = galleryItems.findIndex((el) => {
    return el.original === modaStylelEl.src;
  });
  let nextImgIndex = imgIndex === 0 ? galleryItems.length - 1 : imgIndex - 1;
  modaStylelEl.src = galleryItems[nextImgIndex].original;
  modalText.textContent = galleryItems[nextImgIndex].description;
}

function closeEsc(e) {
  if (e.key === "Escape") {
    modalEl.classList.toggle("ishidden");
    document.removeEventListener("keydown", closeEsc);
    document.body.style.margin = "16px";
    bodyEl.style.overflow = "auto";
  }
}

function closebtn() {
  modalEl.classList.toggle("ishidden");
  document.body.style.margin = "16px";
  bodyEl.style.overflow = "auto";
}

const test = console.log("Hello from is node");
