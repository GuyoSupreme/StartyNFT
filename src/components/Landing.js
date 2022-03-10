import "./Landing.css";
import bannersite from "../utils/bannersite.png";
import Logo from "./Logo";
import ContentBox from "./ContentBox";

function Landing() {
  return (
    <div className="bg-custom">
      <Logo></Logo>
      <ContentBox></ContentBox>
    </div>
  );
}
export default Landing;
