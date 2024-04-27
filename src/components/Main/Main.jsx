import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  console.log("main component rendered");
  return (
    <div className="main">
      <div className="nav">
        <p>Lucy</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Rohit.</span>
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
        <div className="main-bottom">
          <div className="search-box">
            <input className="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
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
