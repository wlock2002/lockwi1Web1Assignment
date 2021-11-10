
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


function shrink()
{   
    disappear();
    // alert("bada bing bada bpomm shrink");
    document.getElementById('container1').setAttribute("style","transform:scale(0.5)");
    // document.getElementsByClassName("container1").setAttribute("style","width:10%")

}

function disappear()
{
    document.getElementById('container2').setAttribute("style","display:none");
    document.getElementById('container3').setAttribute("style","display:none");
    document.getElementById('container4').setAttribute("style","display:none");

}