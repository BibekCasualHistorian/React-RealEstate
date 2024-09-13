import Navbar from "../components/Navbar";
import Main from "../components/Main";
import CompanyLogo from "../components/CompanyLogo";
import OurValue from "../components/OurValue";
import ContactUs from "../components/ContactUs";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import BestChoices from "../components/BestChoices";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>
      <CompanyLogo />
      <BestChoices />
      <OurValue />
      <ContactUs />
      <GetStarted />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
