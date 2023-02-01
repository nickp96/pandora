import { fcl } from "fcl-js";

async function connectWallet() {
    const driver = await fcl.connect();
    const wallet = await driver.login();
    const walletAddress = await wallet.getAddress();
    document.querySelector("#wallet-address").innerText = `Wallet address: ${walletAddress}`;
}

document.querySelector("#connect-wallet-button").addEventListener("click", connectWallet);