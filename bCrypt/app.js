const bcrypt = require("bcrypt");

// IIFE => (Immediately Invoked Function Expression)
// eg. (function (a,b) {
//     statements
//   })(a,b);
// (function add(a, b) {
//   console.log(a + b);
// })(1, 2);
// async
(async function main() {
  const saltRounds = 10; //to increase time to calculate the hash
  const originalPass = "complex@123";
  const Pass = "complex@123";
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPass = await bcrypt.hash(originalPass, salt);

  // save to db
  console.log(hashedPass);

  // retrieve it from the db
  const isMatch = await bcrypt.compare(Pass, hashedPass);
  console.log(isMatch);
})();
