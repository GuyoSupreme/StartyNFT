import "./SocialMedia.css";
import ConnectWalletButton from "./ConnectWalletButton";

function SocialMedia() {
  return (
    <div className="socialmedia-box">
      <h1 className="socialMediaHeader">Social Media</h1>
      <div className="socialMediaButton">
        <a href="https://twitter.com/starty59392597" className="socialLink">Twitter</a>
        <a href="https://discord.gg/gn9VvkYEw7" className="socialLink">Discord</a>
      </div>
    </div>
  );
}
export default SocialMedia;
