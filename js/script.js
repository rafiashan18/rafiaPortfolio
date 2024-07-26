let gif=document.getElementById('.gifs');
let gifImg=document.querySelector("#giff");

const changeGif=()=>{
    
    const randomIndex=Math.floor(Math.random()*4);
    gifImg.setAttribute('src',`gif/gif${randomIndex}.gif`)
    console.log(randomIndex);
}

setInterval(() => {
    changeGif();
}, 3000);


var animationData = {
    container: document.getElementById('animationContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animation - 1717550390671.json' 
}
lottie.loadAnimation(animationData);