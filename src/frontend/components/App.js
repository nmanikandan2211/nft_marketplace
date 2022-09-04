import react, { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState(null);
  //Metamask login connect
  useEffect(() => {
    const web3Handler = async () => {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      console.log("accounts", accounts);

      //Get provider from metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const singer = provider.getSigner();
      console.log("singer", singer);
    };

    web3Handler();
  }, []);

  return <div className="App">Maniknadan..</div>;
}

export default App;
