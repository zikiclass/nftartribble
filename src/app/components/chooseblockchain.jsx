import styles from "./css/chooseblockchain.module.css";
import eth from "../../../public/ethereum.svg";
import celo from "../../../public/celo.svg";
import moonbeam from "../../../public/moonbeam.svg";
import etherlink from "../../../public/etherlink.svg";
import lisk from "../../../public/lisk.svg";
import polygon from "../../../public/polygon.svg";
import base from "../../../public/base.svg";
import rari from "../../../public/rari.svg";
import astar from "../../../public/astar.svg";
import kroma from "../../../public/kroma.svg";
import zkSync from "../../../public/zkSync.svg";
import immutableX from "../../../public/immutableX.svg";
import Link from "next/link";
import Image from "next/image";
const ChooseBlockchain = () => {
  const chooseOptions = [
    { crypto: "Ethereum", icon: eth },
    { crypto: "Celo", icon: celo },
    { crypto: "Moonbeam", icon: moonbeam },
    { crypto: "Etherlink", icon: etherlink },
    { crypto: "Lisk", icon: lisk },
    { crypto: "Polygon", icon: polygon },
    { crypto: "Base", icon: base },
    { crypto: "RARI Chain", icon: rari },
    { crypto: "Astar zkEvm", icon: astar },
    { crypto: "Kroma", icon: kroma },
    { crypto: "zkSync", icon: zkSync },
    { crypto: "Immutable X", icon: immutableX },
  ];
  return (
    <div className={styles.container}>
      <h2>Choose Blockchain</h2>
      <p>
        Choose the most suitable blockchain for your needs. You need to connect
        wallet for creation.
      </p>

      <div className={styles.lists}>
        {chooseOptions.map((option, index) => (
          <Link href="connectwallet" className={styles.list} key={index}>
            <Image
              src={option.icon}
              alt={option.crypto}
              className={styles.img}
            />
            <span>{option.crypto}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ChooseBlockchain;
