import CountUp from "react-countup";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <div>
        <div className="main-heading">
          <p className="main-heading-ball"></p>
          <h1 style={{ position: "relative" }}>Discover</h1>
          <br />
          <h1 style={{ textWrap: "nowrap" }}>Most Suitable</h1>
          <br />
          <h1>Property</h1>
        </div>
        <p>
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </p>

        <form action="">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by title/city/country"
          />
          <button>Search</button>
        </form>

        <div className="main-countup">
          <div>
            <h1>
              <CountUp start={5000} end={9000} duration={7} />
              <span className="gold">+</span>
            </h1>
            Premium Product
          </div>

          <div>
            <h1>
              <CountUp start={1000} end={2000} duration={7} />
              <span className="gold">+</span>
            </h1>
            Happy Customer
          </div>

          <div>
            <h1>
              <CountUp start={0} end={28} duration={7} />
              <span className="gold">+</span>
            </h1>
            Award Winning
          </div>
        </div>
      </div>

      <div>
        <img src="./images/hero-image.png" alt="" />
      </div>
      <div className="filter" />
    </main>
  );
};

export default Main;
