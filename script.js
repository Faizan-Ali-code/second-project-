const selectmovie=document.querySelector("#selectSection");
const selectseat=document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById('counte');
let setprice = document.getElementById("price");
const contain = document.querySelector(".container");

let getprice = +selectmovie.value;



//function that update the price 
function updateprice(){
    //get all seats that are selected.
    const selectedseats = document.querySelectorAll(".row .seat.selected");
    //get the length of the selected seats
    const lengthe = selectedseats.length;
    //update the count 
    count.innerText=lengthe;
    //update the price
    setprice.innerText= lengthe * getprice;
    
    
}













//event listener
contain.addEventListener('click',e=> {
    
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
        updateprice();
    }
    
     
});


//event listener for changing of movie
selectmovie.addEventListener("change",e => {
//update the price 
 getprice= +e.target.value;
 //update the count and price by function made already
 updateprice();
})