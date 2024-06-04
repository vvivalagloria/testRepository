let myGlobal = 10; //defined and global

function fun1() {

oopsGlobal = 5;  //should be global and defined

}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
  fun1();
  fun2();