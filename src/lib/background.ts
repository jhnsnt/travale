export function rotateBackground(images: string[], duration = 10000) {
    let index = 0;

    const changeBg = () => {
        document.body.style.transition = "background-image 1s ease";
        document.body.style.backgroundImage = `
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url(${images[index]})
        `;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        index = (index + 1) % images.length;
    };

    changeBg(); // initial call

    const interval = setInterval(changeBg, duration);

    // return cleanup function
    return () => {
        clearInterval(interval);
        document.body.style.backgroundColor = "";
    };
}