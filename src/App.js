import React from "react";
import Jokes from "./components/Jokes";

const jokes = {
  joke1: {
    setup: "What did the cheese say when it looked in the mirror?",
    punchline: "Hello-me (Halloumi)",
  },
  joke2: {
    setup: "What kind of cheese do you use to disguise a small horse?",
    punchline: "Mask-a-pony (Mascarpone)",
  },
  joke3: {
    setup: "A kid threw a lump of cheddar at me",
    punchline: "I thought ‘That’s not very mature’",
  },
  joke4: {
    setup: "What do you call a cow with no legs?",
    punchline: "Ground beef",
  },
  joke5: {
    setup: "Github copilot doesnt have more jokes",
    punchline: "Fuck",
  },
  joke6: {
    setup: "Im running out of jokes",
    punchline: "I indeed ran out of jokes",
  },
  joke7: {
    punchline: "I'm out of jokes",
  }
};

export default function App() {
  var rows = [];
  for (var key in jokes) {
    rows.push(
      <Jokes
        key={key}
        setup={jokes[key].setup}
        punchline={jokes[key].punchline}
      />
    );
  }
  return (
    <div className="content">
      <h1>Iterating and rendering components with a loop</h1>
      <div className="jokeContainer">{rows}</div>
    </div>
  );
}

// const cars = [
//   "Lambourghini",
//   "Bugatti",
//   "Porsche",
//   "Ferrari",
//   "McLaren"
// ]
// const Car = ({ name }) => {
//   return <div>{name}</div>;
// }

// const App = () => {
// <div>
//       {cars.map((car, key) => {
//         return (
//           <div key={key}>
//             <Car name={car}/>
//           </div>
//         );
//       })}
// </div>
// }
