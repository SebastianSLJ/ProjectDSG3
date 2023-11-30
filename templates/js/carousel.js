// Carousel
let i = 0;
let images = [];
let time = 1000;

images[0] = "./static/images/1.jpg";
images[1] = "./static/images/2.png";
images[2] = "./static/images/3.png";
images[3] = "./static/images/4.png";
images[4] = "./static/images/5.png";
images[5] = "./static/images/6.png";
images[6] = "./static/images/7.png";
images[7] = "./static/images/8.png";
images[8] = "./static/images/9.png";
images[9] = "./static/images/10.png";
images[10] = "./static/images/11.png";

function change() {
    document.carousel.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("change()", time);
}

window.onload = change;
