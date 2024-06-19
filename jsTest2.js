
var str = "a"
var n = 5;

function padIt(str,n){
  do {
    
    str = '*' + str
    n--;  
    
      if(n > 0 )
      {
        str += '*';
       n--;          
      }
    
  } while (n > 0)
    
  return str;
}

console.log(padIt(str,n));45