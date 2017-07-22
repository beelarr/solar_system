/**
 * Created by beelarr on 7/22/17.
 */
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

let el = document.getElementById("planets");
planets.forEach((e)=>{
   el.innerHTML = planets
});


let capital_planets = planets.map((e)=>{
    return e.charAt([0]).toUpperCase() + e.substr(1, 7)
});
console.log(capital_planets);


let e_planets = [];
capital_planets.filter((a)=>{
    if (a.toString().includes('e')){
        e_planets.push(a)
    }
});
console.log(e_planets);


let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce((a, b)=>{
  return `${a} ${b}`
});
console.log(sentence);
