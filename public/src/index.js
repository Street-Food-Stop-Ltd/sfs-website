import TypeIt from "typeit";

// Type animation.
let options = {
  speed: 100,
  loop: true,
  cursor: false,
};

let type = new TypeIt("#output", options)
  .go()
  .type("HUNGRY?")
  .pause(2000)
  .delete()
  .type("BRAVE?")
  .pause(2000)
  .delete()
  .type("CURIOUS?")
  .pause(2000)
  .delete();
