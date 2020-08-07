import Typed from "typed.js";

// Type animation.
let options = {
  strings: ["HUNGRY?", "CURIOUS?", "BRAVE?"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
};

let type = new Typed("#output", options);
