// Top-selling
var slide_index = 1;
show(slide_index);

function plus(n) {
    show(slide_index += n);
}


function show(n) {
    var i;
    var slides = document.getElementsByClassName("box-list");

    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}