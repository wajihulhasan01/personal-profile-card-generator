const pic = document.querySelector("#pic")
const name = document.querySelector("#name")
const bio = document.querySelector("#bio")
const link = document.querySelector("#link")
const cardContainer = document.querySelector(".card-container")
const card = document.querySelector("#card")


cardContainer.style.display === 'none'

function generate(){
    if (cardContainer.style.display === 'none' || cardContainer.style.display === '') {
      cardContainer.style.display = 'block';
    }

    const file = pic.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            card.innerHTML = `
                <div id="showpic">
                    <img src="${e.target.result}" alt="profilepic" id="imageshow">
                </div>
                <div id="detail">
                    <h1>${name.value.slice(0, 17).toUpperCase()}</h1>
                    <p id='showbio'>${bio.value.slice(0, 120)}</p>
                    <p id="showlink">${link.value.slice(0, 60)}</p>
                </div>
            `;
        };

        reader.readAsDataURL(file);
    } else {
        card.innerHTML = `
            <div id="detail">
                <h1>${name.value.slice(0, 20).toUpperCase()}</h1>
                <p id='showbio'>${bio.value.slice(0, 120)}</p>
                <p id="showlink">${link.value.slice(0,60)}</p>
            </div>
        `;
    }
}

function download(){
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "profile-card.png";
    link.click();
});
}


