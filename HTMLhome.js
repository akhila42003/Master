import React, { useState } from "react";
import "./HTMLhome.css";

function HTMLhome() {
  // State to hold the output
  const [output, setOutput] = useState("");

  const runCode = () => {
    // Update the output state with the result
    setOutput("This is the output of the program.");
  };

  return (
    <div className="HTMLhome">
      <p>HTML is the standard markup language for Web pages.</p>
      <p>With HTML you can create your own Website.</p>
      <p>HTML is easy to learn - You will enjoy it!</p>
      <h1> Easy Learning with HTML "Try it Yourself"</h1>{" "}
      <h5>
        With our "Try it Yourself" editor, you can edit the HTML code and view
        the result:
      </h5>
      <div>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>

        <h2>HTML Examples</h2>
        <p>
          In this HTML tutorial, you will find more than 200 examples. With our
          online
          <br /> "Try it Yourself" editor, you can edit and test each example
          yourself!
        </p>

        <h2>HTML Exercises</h2>
        <p>This HTML tutorial also contains nearly 100 HTML exercises.</p>
        <p>
          <strong>Test Yourself With Exercises</strong>
        </p>
        <p>
          Exercise:
          <br />
          Add a "tooltip" to the paragraph below with the text "About
          W3Schools".
        </p>
        <p title="About W3Schools">W3Schools is a web developer's site.</p>
        <p>
          <a href="#">Start the Exercise</a>
        </p>

        <h2>HTML Quiz Test</h2>
        <p>Test your HTML skills with our HTML Quiz!</p>

        <h2>My Learning</h2>
        <p>
          Track your progress with the free "My Learning" program here at
          W3Schools.
        </p>
        <p>Log in to your account, and start earning points!</p>
        <p>
          This is an optional feature. You can study at W3Schools without using
          My Learning.
        </p>

        <h2>HTML References</h2>
        <p>
          At W3Schools you will find complete references about HTML elements,
          attributes, events, color names, entities, character-sets, URL
          encoding, language codes, HTTP messages, browser support, and more:
        </p>
        <ul>
          <div className="box">HTMLElements</div>
        </ul>
      </div>
      <p>Kickstart your career with the correct code</p>
    </div>
  );
}

export default HTMLhome;
