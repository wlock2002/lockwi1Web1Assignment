
//functions that are used to call the subpages.
function vehicles()
{
    
    shrink();
    // alert('you clicked vehicles');
    // var temp = document.getElementsByClassName("container2");
    // temp.forEach(div =>{div.style.display = "flex"});
    // document.getElementById('container2').classList.toggle('fade');
    document.getElementById('container2').setAttribute("style","display:block");
}
function news()
{
    shrink();
    // alert('you clicked news');
    document.getElementById('container3').setAttribute("style","display:block");
}
function about()
{
    shrink();
    // alert("you clicked about");
    document.getElementById('container4').setAttribute("style","display:block");
}

function altezza()
{
    document.getElementById('altezzaInfo').setAttribute("style","display:block");
    document.getElementById('hiluxInfo').setAttribute("style","display:none");
    document.getElementById('chaserInfo').setAttribute("style","display:none");
}
function hilux()
{
    document.getElementById('hiluxInfo').setAttribute("style","display:block");
    document.getElementById('altezzaInfo').setAttribute("style","display:none");
    document.getElementById('chaserInfo').setAttribute("style","display:none");
}
function chaser()
{
    document.getElementById('chaserInfo').setAttribute("style","display:block");
    document.getElementById('hiluxInfo').setAttribute("style","display:none");
    document.getElementById('altezzaInfo').setAttribute("style","display:none");
}

function shrink()
{   
    disappear();
    // alert("bada bing bada bpomm shrink");
    document.getElementById('container1').setAttribute("style","transform:scale(0.5)");
    // document.getElementsByClassName("container1").setAttribute("style","width:10%")
}

// function shrinkX2()
// {
//     document.getElementById('container2').setAttribute("style","transform:scale(0.5)");
//     document.getElementById('container1').setAttribute("style","transform:scale(0.5)");
// }
function disappear()
{
    document.getElementById('container2').setAttribute("style","display:none");
    document.getElementById('container3').setAttribute("style","display:none");
    document.getElementById('container4').setAttribute("style","display:none");
    document.getElementById('altezzaInfo').setAttribute("style","display:none");
    document.getElementById('hiluxInfo').setAttribute("style","display:none");
    document.getElementById('chaserInfo').setAttribute("style","display:none");
}
// function disappearCarInfo()
// {
//     document.getElementById('altezzaInfo').setAttribute("style","display:none");
    
//     document.getElementById('hiluxInfo').setAttribute("style","display:none");
//     document.getElementById('chaserInfo').setAttribute("style","display:none");
// }