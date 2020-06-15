
var digit = document.querySelector("#select"); 
var start = document.getElementById("start");
var end = document.getElementById("stop");


start.addEventListener("click", function(){
    digits = setInterval(function(){
      digit.textContent = Math.floor(Math.random() * 5000);
     }, 100); 
}); 

// end counting
end.addEventListener("click", function(){
  clearInterval(digits); 
})




// var pri1 = document.querySelector("#pri1"); 
// var pri2 = document.querySelector("#pri2"); 
// var pri3 = document.querySelector("#pri3"); 
// var pri4 = document.querySelector("#pri4"); 
// var pri5= document.querySelector("#pri5"); 





// Primary one to five

// pri1.addEventListener("click", function(){
//      pri1.style.backgroundColor = "blue"
//      pri2.style.backgroundColor = "black"
//      pri3.style.backgroundColor = "black"
//      pri4.style.backgroundColor = "black"
//      pri5.style.backgroundColor = "black"
    
//  })
 
//  pri2.addEventListener("click", function(){
//      pri2.style.backgroundColor = "blue"
//      pri1.style.backgroundColor = "black"
//      pri3.style.backgroundColor = "black"
//      pri4.style.backgroundColor = "black"
//      pri5.style.backgroundColor = "black"
//  })
 
//  pri3.addEventListener("click", function(){
//      pri3.style.backgroundColor = "blue"
//      pri1.style.backgroundColor = "black"
//      pri2.style.backgroundColor = "black"
//      pri4.style.backgroundColor = "black"
//      pri5.style.backgroundColor = "black"
//  })
//  pri4.addEventListener("click", function(){
//      pri4.style.backgroundColor = "blue"
//      pri1.style.backgroundColor = "black"
//      pri2.style.backgroundColor = "black"
//      pri3.style.backgroundColor = "black"
//      pri5.style.backgroundColor = "black"
//  })
//  pri5.addEventListener("click", function(){
//      pri5.style.backgroundColor = "blue"
//      pri1.style.backgroundColor = "black"
//      pri2.style.backgroundColor = "black"
//      pri3.style.backgroundColor = "black"
//      pri4.style.backgroundColor = "black"
//  })

// condtional primary 1 to 5

//   } else if(pri2.style.backgroundColor = "blue") {
//     digits = setInterval(function(){
//         digit.textContent = (Math.floor(Math.random() * 100000));
//        }, 100); 
//   }
//   else if(pri3.style.backgroundColor = "blue") {
//     digits = setInterval(function(){
//         digit.textContent = (Math.floor(Math.random() * 1000000));
//        }, 100); 
//   }
//   else if(pri4.style.backgroundColor = "blue") {
//     digits = setInterval(function(){
//         digit.textContent = (Math.floor(Math.random() * 1000000));
//        }, 100); 
//   }
//   else if (pri5.style.backgroundColor = "blue") {
//     digits = setInterval(function(){
//         digit.textContent = (Math.floor(Math.random() * 100000));
//        }, 100); 
//   } else{
//     digits = setInterval(function(){
//         digit.textContent = (Math.floor(Math.random() * 100000000));
//        }, 100);
//   }
    