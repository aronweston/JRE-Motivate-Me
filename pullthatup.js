const logo = document.querySelector('#logo');


logo.addEventListener("click", (e) => {
    spin();
})


const spin = () => {
    const audio = document.querySelector("#audio");
    audio.play();
    logo.classList.add('spin');
    setTimeout(() => {
        logo.classList.add("fadeOut");
        outputVideo();
    }, 2500);
}


const outputVideo = () => {
    const output = document.querySelector("#output");
    output.innerHTML = `
    <iframe src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"frameborder="0"' type="text/html" width="640" height="360"></iframe>'`
}


