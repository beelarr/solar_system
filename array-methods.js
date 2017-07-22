/**
 * Created by beelarr on 7/22/17.
 */
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
 */
let el = document.getElementById("planets");
planets.forEach((e)=>{
   el.innerHTML = planets


    let capital_planets = planets.map((a)=>{
        console.log(a)
        a.charAt([0]).toUpperCase()
        console.log(a)

    })
    console.log(capital_planets);
});

// Use the map method to create a new array where the first letter of each planet is capitalized





// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];