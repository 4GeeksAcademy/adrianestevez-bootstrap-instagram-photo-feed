let igFeed = document.querySelector(".instagram-photo-feed__main");
let manejoGrid = document.querySelector("#verGrid");
let manejoPosts = document.querySelector("#verPosts");
let misImgs = [
  "https://www.nbc.com/sites/nbcblog/files/2023/09/the-continental-the-hotel-bar-experience-2.jpg",
  "https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
  "https://cdn.forbes.com.mx/2023/04/Foto-manufactura-aditiva-shut-scaled.jpg",
  "https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg",
  "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
  "https://i.natgeofe.com/n/eb9f0faa-75bc-47e2-8b14-253031b74125/bigtripjapantokyocrossing.jpg",
  "https://p325k7wa.twic.pics/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg?twic=v1/resize=760/step=10/quality=80",
  "https://wallpapers.com/images/hd/dark-souls-solaire-28vi93drdwbur9c8.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7d/The_Westin_Palace_Madrid.jpg"
];

function numRandom() {
  return Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
}

let arrHtmlGrid = misImgs.map((e) => {
  return ` 
        <div class="col-4 instagram-photo-feed__caja-imagen p-0">
          <img src="${e}" class="object-fit-cover" alt="">
        </div>`;
});
let htmlGrid = arrHtmlGrid.join(" ");

let contador = 0;
let arrHtmlPosts = misImgs.map((img) => {
  contador++;
  return `
        <div class="col-12 d-flex justify-content-center mb-3"> <!--permite que cada post se quede en una columna de 12 espacios-->

          <div class="container-fluid ig-post">
            <div class="ig-post__header d-flex justify-content-between">
              <h4>Foto ${contador}</h4>
              <p>${contador}/${misImgs.length}</p >
            </div >
            <div class="ig-post__img w-100">
              <img src="${img}" class="w-100 h-100 object-fit-cover" alt="">
            </div>
            <div class="ig-post__icons d-flex justify-content-between mt-1">
              <div class="ig-post__icons-left">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
              </div>
              <div class="ig-post__icons-right">
                <i class="fa-regular fa-bookmark" id="save"></i>
              </div>
            </div>
            <div class="ig-post__body">
              <p class="mb-0 fw-bold fs-6">${numRandom()} Likes</p>
              <p class="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div >

        </div >`;
});
let htmlPosts = arrHtmlPosts.join(" ");


const verGrid = () => {
  return igFeed.innerHTML = htmlGrid;
}

window.onload = () => {
  verGrid();
  console.log("💪 => Página cargada!");
}

manejoGrid.addEventListener("click", () => {
  if (manejoGrid.className != "fa-solid fa-table-cells link-dark text-primary") {
    manejoGrid.className = "fa-solid fa-table-cells link-dark text-primary";
  }
  if (manejoPosts != "fa-solid fa-square link-dark") {
    manejoPosts.className = "fa-solid fa-square link-dark";
  };

  console.log("🏙️ => Grid cargados!");

  return igFeed.innerHTML = htmlGrid;
});

manejoPosts.addEventListener("click", () => {
  if (manejoGrid.className != "fa-solid fa-table-cells link-dark") {
    manejoGrid.className = "fa-solid fa-table-cells link-dark";
  }
  if (manejoPosts != "fa-solid fa-square link-dark text-primary") {
    manejoPosts.className = "fa-solid fa-square link-dark text-primary";
  };

  console.log("🏙️ => Posts cargados!");

  return igFeed.innerHTML = htmlPosts;
});