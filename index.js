console.log("index.js'den selamlar");

import ugurla, {
  topla,
  calismaSaati,
  increase,
  decrease,
  myName,
} from "./myModules.js";

// import ugurla from "./myModules.js";

console.log(topla(3, 5));
console.log(calismaSaati);

console.log(increase(2));
console.log(decrease(2));
console.log(myName);
ugurla();
