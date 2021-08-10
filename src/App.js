import React from "react";
import "./App.css";

let loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
function App() {
  function makeLowercase(body) {
    return body.toLowerCase();
  }

  function makeOddUpperEvenLower(body) {
    let arrayWords = body.split(" ");

    let resultArray = [];
    arrayWords.forEach((element, index) => {
      if (index % 2 === 0) {
        //odd case
        resultArray.push(element.toUpperCase());
      } else {
        //even case
        resultArray.push(element.toLowerCase());
      }
    });

    return resultArray.join(" ");
  }

  function alternateCases(body) {
    let resultArray = [];
    let oddState = true;
    for (let index = 0; index < body.length; index++) {
      let element = body[index];
      if (element === " ") {
        resultArray.push(<span> </span>);
      } else if (oddState) {
        //First case and 0 case.
        //resultArray.push(body[index].toUpperCase());
        resultArray.push(
          <span className="altText1">{body[index].toUpperCase()}</span>
        );
        oddState = false;
      } else {
        //2nd case (even) to lower
        //resultArray.push(body[index].toLowerCase());
        resultArray.push(
          <span className="altText2">{body[index].toLowerCase()}</span>
        );
        oddState = true;
      }
    }
    return resultArray;

    // colorMessage[i] = ("<span style={{ color: '"
    //   + colorScheme[colorKeys[currentColor]]
    //   + "' }}>" + message[i]
    //   + "</span>");
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{makeLowercase("Hello World")}</p>
      <p>Original: {loremIpsum}</p>
      <p>
        Transformed to make Odd words Uppercase and even words lowercase:{" "}
        {makeOddUpperEvenLower(loremIpsum)}
      </p>
      <p>
        Transformed to make Odd characters Uppercase and even words lowercase:{" "}
        {alternateCases(loremIpsum)}
      </p>
      <p>Hello Megaman!</p>
      {/* <img src="https://static.wikia.nocookie.net/ssb/images/3/3f/Mega_Man_-_Super_Smash_Bros._Ultimate.png"></img> */}
      <img
        src={
          process.env.PUBLIC_URL + "/Mega_Man_-_Super_Smash_Bros._Ultimate.png"
        }
        alt=""
        title="Megaman"
      ></img>
    </div>
  );
}

export default App;
