import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showSecondPage, setShowSecondPage] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "WTF ANGIE, are you sure?",
      "No forehead kisses for you.",
      "Wow so you'd rather be with tobby huh :(",
      "Last chance or you're donezo!",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <img src="https://i.pinimg.com/originals/49/a2/8c/49a28ce5785f68e04c0e6d360d119133.gif" alt="Pooh" className="pooh-corner" />

      <div className="valentine-container">

        {/* SECOND PAGE */}
        {showSecondPage ? (
          <>
            <img
              src="https://v1.pinimg.com/videos/mc/expMp4/f3/f0/d8/f3f0d8b131b2576956d1654644410216_t3.mp4"
              alt="Second Surprise"
              style={{ width: "400px", height: "240px" }}
            />
            <div className="text-container">
              You chasing me
            </div>
          </>
        ) : yesPressed ? (
          <>
            {/* FIRST YES SCREEN */}
            <img
              src="https://v1.pinimg.com/videos/mc/expMp4/14/31/f9/1431f937cd4dbf68d6de7c7c851562a7_t3.mp4"
              alt="Kiss Bear"
              style={{ width: "400px", height: "240px" }}
            />
            <div className="text-container">HELL YAAAAA!!!</div>

            {/* NEW BUTTON */}
            <button
              className="yes-button"
              style={{ marginTop: "20px" }}
              onClick={() => setShowSecondPage(true)}
            >
              Click for more 💕
            </button>
          </>
        ) : (
          <>
            {/* ORIGINAL PAGE */}
            <img
              src="https://i.pinimg.com/originals/da/5f/23/da5f232ce43fa1c04b56249e51e391c5.gif"
              alt="Cute Bear"
              style={{ width: "400px", height: "240px" }}
            />

            <h1 className="text-container">
                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hi Angie<br />
              Will you be my Valentine?
            </h1>

            <div>
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                onClick={handleNoClick}
                className="no-button"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}