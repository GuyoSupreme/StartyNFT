import Landing from "../components/Landing";
import Roadmap from "../components/Roadmap";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Landing></Landing>
      <Roadmap></Roadmap>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>
  );
}
export default Home;
