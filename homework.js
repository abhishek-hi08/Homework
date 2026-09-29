
function change1(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    

    document.body.style.backgroundColor = randomColor;
    const rgbText = document.getElementById("me");
    rgbText.textContent = ` rgb = (${r} , ${g} , ${b})`
    
    colorDisplay.textContent = randomColor;
}