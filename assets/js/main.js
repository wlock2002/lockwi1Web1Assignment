//Function to go home when home is clicked.
// function home()
// {   
//     document.getElementById('container1').setAttribute("style","transform:scale(1)");

//     disappear();
// }


//Main links using Ajax and Jquery to make the text function as buttons. 
$(document).ready(function(e) {   
    //Home
    $("#container").click(function(){
        disappear();
        // fadeOut();
        //document.getElementById('container1').setAttribute("style","transform:scale(1)");
        scaleUp();
    });
    //Main tabs to reach side "pages"
    $("#vehicles").click(function(){ //showing container2 while making others invisble
        // shrink();
        fadeIn();
        disappear();
        scaleDown();
        document.getElementById('container2').setAttribute("style","display:block");
        document.getElementById('container3').setAttribute("style","display:none");
        document.getElementById('container4').setAttribute("style","display:none");
        
    });
    $("#news").click(function(){//showing container3 while making others invisble
        //shrink();
        // fadeOut();
        disappear();
        scaleDown();    
        document.getElementById('container3').setAttribute("style","display:block");
        document.getElementById('container2').setAttribute("style","display:none");
        document.getElementById('container4').setAttribute("style","display:none");
        
    });
    $("#about").click(function(){//showing container4 while making others invisble
        //shrink();
        fadeIn();
        // fadeOut();
        //disappear();
        scaleDown();
        document.getElementById('container4').setAttribute("style","display:block");
        document.getElementById('container3').setAttribute("style","display:none");
        document.getElementById('container2').setAttribute("style","display:none");
    });



    //calling Individual vehicles pages
   $("#altezza").click(function(){ //showing altezzaInfo while making others invisble
        
        //fadeIn();
        document.getElementById('container5').setAttribute("style","display:block");
        document.getElementById('altezzaInfo').setAttribute("style","display:block");
        document.getElementById('hiluxInfo').setAttribute("style","display:none");
        document.getElementById('chaserInfo').setAttribute("style","display:none");
        
    });
    $("#hilux").click(function(){ //showing hiluxInfo while making others invisble
        
        //fadeIn();
        document.getElementById('container5').setAttribute("style","display:block");
        document.getElementById('hiluxInfo').setAttribute("style","display:block");
        document.getElementById('altezzaInfo').setAttribute("style","display:none");
        document.getElementById('chaserInfo').setAttribute("style","display:none");
    });
    $("#chaser").click(function(){ //showing chaserInfo while making others invisble
        
        //fadeIn();
        document.getElementById('container5').setAttribute("style","display:block");
        document.getElementById('chaserInfo').setAttribute("style","display:block");
        document.getElementById('hiluxInfo').setAttribute("style","display:none");
        document.getElementById('altezzaInfo').setAttribute("style","display:none");
    });

    $("#container2").click(function(){ //showing chaserInfo while making others invisble
        //fadeOut();
        fadeIn()
    });


});

function scaleDown()
{
    $("#container1").animate({
        width: "50%",
        opacity: 0.8,
        
        marginLeft: "0",
        fontSize: "175%",
    }, 750, function() {
        // Animation complete.
    });
    
}
function scaleUp()
{
    $("#container1").animate({
        width: "100%",
        opacity: 1,
        marginLeft: "0",
        fontSize: "350%",
    }, 750, function() {
        // Animation complete.
    });
}
//function for fading out the content
function fadeOut()
{
    $("#altezzaInfo,#hiluxInfo,#chaserInfo").animate({
       
        opacity: 0,
    }, 300, function() {
        // Animation complete.
    });
}
function fadeIn()
{
    $("#container2,#altezzaInfo,#hiluxInfo,#chaserInfo").animate({
       
        opacity: 1,
    }, 400, function() {
        // Animation complete.
    });
}

//functions that are used to call the subpages.
// function vehicles()
// {
    
//     shrink();
//     // alert('you clicked vehicles');
//     // var temp = document.getElementsByClassName("container2");
//     // temp.forEach(div =>{div.style.display = "flex"});
//     // document.getElementById('container2').classList.toggle('fade');
//     document.getElementById('container2').setAttribute("style","display:block");
// }
// function news()
// {
//     shrink();
//     // alert('you clicked news');
//     document.getElementById('container3').setAttribute("style","display:block");
// }
// function about()
// {
//     shrink();
//     // alert("you clicked about");
//     document.getElementById('container4').setAttribute("style","display:block");
// }

// function altezza()
// {
//     document.getElementById('altezzaInfo').setAttribute("style","display:block");
//     document.getElementById('hiluxInfo').setAttribute("style","display:none");
//     document.getElementById('chaserInfo').setAttribute("style","display:none");
// }
// function hilux()
// {
//     document.getElementById('hiluxInfo').setAttribute("style","display:block");
//     document.getElementById('altezzaInfo').setAttribute("style","display:none");
//     document.getElementById('chaserInfo').setAttribute("style","display:none");
// }
// function chaser()
// {
//     document.getElementById('chaserInfo').setAttribute("style","display:block");
//     document.getElementById('hiluxInfo').setAttribute("style","display:none");
//     document.getElementById('altezzaInfo').setAttribute("style","display:none");
// }

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
    document.getElementById('container5').setAttribute("style","display:none");

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