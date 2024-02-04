import { useState } from "react";
import "./App.css";

document.body.style.backgroundColor = "rgba(84,163,196,255)";

const phrases = [
  "no",
  "are you sure?",
  "really?",
  "really really?",
  "moooolllllyyyyyyyyy pleaasseeeeee",
  "click the other onnnneeneneneneneeee",
  "Im gonna cry",
  "tears are flowing",
  "youve asked for this....",
  "GRRRRRRR",
  "did you get scared?",
  "now you HAVE to click it",
  "please?",
  "please? please?",
  "please? please? please?",
  "please? please? please? please?",
  "I just wont talk then",
  "(wind noises)",
  "(wind noises)",
  "(wind noises)",
  "(wind noises)",
  "(wind noises)",
  "(wind noises)",
  "(wind noises)",
  "really?",
  "I wont stop",
  "ok fine",
  "PART 2",
  "(LOUD WIND NOISES)",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="valentine squid"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzc0c2g5aG40Y3piOWk1cnI4aXN0ZGYxdG93dmNrOTFidjVpaDFpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lqPZLGWcXJHS21kubp/giphy.gif"
            onLoad={() =>
              (document.body.style.backgroundColor = "rgba(255,201,235,255)")
            }
          />
          <div className="text"> YAYAYYAAYAYYAYAYY!!!! </div>
        </>
      ) : (
        <>
          <img
            alt="ghost with heart"
            src="https://media.giphy.com/media/SDXUaQuG6cJf6JtJjs/giphy.gif"
          />

          <div>Molly, will you pretty please be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
