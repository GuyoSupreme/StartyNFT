import "./ContentBox.css";
import ConnectWalletButton from './ConnectWalletButton';
import StartyImage from '../utils/sample.gif';

function ContentBox() {
  return (
      <div className="content-box">
        <div className="content-box-image">
          <img src={StartyImage} alt="Starty" className="starty-image" />
        </div>
        <div className="content-box-text">
          Startys are 1,111 NFTs drawn in pixel style, launching on Stargaze Network. They all contain different rarities, according to their features. Each Starty is unique, and will only be minted once. We want to be an accessible NFT project, so each Starty costs 50 $Stars (minimum amount permitted by Stargaze).
        </div>
        <div className="content-box-button">
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      </div>
  );
}

export default ContentBox;
