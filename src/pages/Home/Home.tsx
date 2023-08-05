import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import "./Home.css";
import Search from "../../component/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar alt="zarel" src="../../../assets/profile.jpg" />
        </div>
      </div>
      <div className="home__body">
        <img src="../../../assets/google-logo-03.png" alt="Google" />
        <Search />
        <div className="languages">
          <span>Google offered in: </span>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiM2oTs_sKAAxVbglYBHSrbCr4Q2ZgBCBU">
            हिन्दी
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiM2oTs_sKAAxVbglYBHSrbCr4Q2ZgBCBY">
            বাংলা
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBc">
            తెలుగు
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBg">
            मराठी
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBk">
            தமிழ்
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBo">
            ગુજરાતી
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBs">
            ಕನ್ನಡ
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCBw">
            മലയാളം
          </a>
          <a href="https://www.google.com/setprefs?sig=0_liouyA-wi1wCKp3YBr3nlKekPyQ%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiyy7u5_8KAAxV8i1YBHVN-C1sQ2ZgBCB0">
            ਪੰਜਾਬੀ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
