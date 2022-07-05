import React from "react";

export default function Jokes(prop) {
  return (
    <div className="shownJoke">
      <h1>Joke :</h1>
      <h2>{prop.setup}</h2>
      <h4>{prop.punchline}</h4>
    </div>
  );
}
