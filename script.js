const container = document.getElementById('container');
const div = document.createElement('div');
container.classList = 'contstyle';

// automatically fill the grid with divs

for (let i = 0; i < 256; i++) {
    div.classList = 'pix';
    container.innerHTML += '<div class="pix">' + '</div>';
};

document.addEventListener('mouseover', changeColor);

function changeColor(e) {

    if (e.target.classList.contains("pix")) {
        e.target.style.backgroundColor = "black"
    };
    return;




}


