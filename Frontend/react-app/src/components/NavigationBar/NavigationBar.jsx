import "../../styles/NavigationBar.css";
import wallet from "../../assets/wallet-vector.png";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="NavigationBar">
      <NavLink to={"/docs"}>Docs</NavLink>
      <div className="NavigationBar-Logo">Defi</div>
      <div className="NavigationBar-Build">build</div>
      <div className="NavigationBar-ExplorePools">explore pools</div>
      <button className="NavigationBar-WalletConnect">
        <img className="NavigationBar-WalletConnect-Image" src={wallet} />
        wallet
      </button>
    </div>
  );
}

export default NavigationBar;
