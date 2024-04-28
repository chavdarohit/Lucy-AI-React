import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Lucy</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? ( // when there is not any result show
          <>
            <div className="greet">
              <p>
                <span>Hello, Folks.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest me some beautiful Good morning quotes</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain something about : AI</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Can you tell how its weather today?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
              {/* showing the response on the screen BY AI */}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              className="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? (
                <img src={assets.send_icon} alt="send" onClick={onSent} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Lucy may display inaccurate info , including about people , so
            double-check its responses , Your privacy and Lucy Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
