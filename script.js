let myButton = document.getElementById("scrollBtn");

window.onscroll = function (){showBtn()};


function showBtn(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}

function topScroll(){
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}

//new function for responsive header

let open = false;
let moreBtn = document.getElementById("moreBtn")
let resHead = document.getElementById("resHead")

function showMoreLinks(){
    if(!open){
        resHead.style.marginLeft = "5%";
        moreBtn.innerHTML = '<i class="fas fa-times"></i>'
        open = true;
    }else{
        resHead.style.marginLeft = "-120%";
        moreBtn.innerHTML = '<i class="fas fa-bars"></i>'
        open = false;
    }

}