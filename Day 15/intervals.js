let a;
// function fn() {
//   a = setTimeout(() => console.log("hello"), 2000);
// }
function fn() {
  a = setInterval(() => console.log("stop me"), 2000);
}

// function fn1() {
//   clearTimeout(a);
// }
function fn1() {
  clearInterval(a);
}

fn();
fn1();
