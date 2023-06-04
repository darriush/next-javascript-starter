import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Wallet from "./api/wallet"; // Import the Wallet component

export default function Home() {
 return (
 <div className={styles.container}>
 <main className={styles.main}>
 <h1 className={styles.title}>
 Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
 </h1>

 <p className={styles.description}>
 Get started by configuring your desired network in{" "}
 <code className={styles.code}>pages/_app.js</code>, then modify the{" "}
 <code className={styles.code}>pages/index.js</code> file!
 </p>

 <div className={styles.connect}>
 <ConnectWallet />
 </div>

 <Wallet /> // Render the Wallet component

 <div className={styles.grid}>
 <a href="https://portal.thirdweb.com/" className={styles.card}>
 <h2>Portal →</h2>
 <p>
 Guides, references and resources that will help you build with
 thirdweb.
 </p>
 </a>

 <a href="https://thirdweb.com/dashboard" className={styles.card}>
 <h2>Dashboard →</h2>
 <p>
 Deploy, configure and manage your smart contracts from the
 dashboard.
 </p>
 </a>

 <a
 href="https://portal.thirdweb.com/templates"
 className={styles.card}
 >
 <h2>Templates →</h2>
 <p>
 Discover and clone template projects showcasing thirdweb features.
 </p>
 </a>
 </div>
 </main>
 </div>
 );
}
