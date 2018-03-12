
//grabing signs for plus and minus
var target1 = document.getElementById("target1");
var target2 = document.getElementById("target2");
var i=0;
var j=25;

document.getElementById("plus").addEventListener("click" , function() {
    target1.innerHTML = "";
    i++;
    target1.innerHTML += i;
});


  document.getElementById("minus").addEventListener("click" , function() {
    if(i>0) {
    target1.innerHTML = "";
    i--;
    target1.innerHTML -= -i;
    }
  });

  document.getElementById("plus1").addEventListener("click" , function() {
    target2.innerHTML = "";
    j++;
    target2.innerHTML += j;
});


  document.getElementById("minus1").addEventListener("click" , function() {
    if(j>1) {
    target2.innerHTML = "";
    j--;
    target2.innerHTML -= -j;
    }
  });

   


  // work function
function setWork() {
    var k=0;
    var timer = setInterval( function() {
          k++;
          document.getElementById("result").innerHTML = "";
         var min=0;
         var sec;
         min= Math.floor(k/60);
         sec= k%60;
         document.getElementById("result").innerHTML = "Work Time  " + min+":"+sec;
         if(k == 60*j) {
           setBreak();
           clearInterval(timer);
         }
       },1000 );
  
}

   //reload function

   function reload() {
     location.reload();
   }

   //break function

   function setBreak() {
    var l=0;
     var timer1 = setInterval( function() {
         l++;
         document.getElementById("result").innerHTML = "";
        var min1=0;
        var sec1;
        min1= Math.floor(l/60);
        sec1= l%60;
        document.getElementById("result").innerHTML = "Break Time  " + min1+":"+sec1;
        if(l == 60*i) {
          clearInterval(timer1);
          setWork();
        }
      },1000 );
      
 
   }

  
