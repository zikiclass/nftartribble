import styles from "./css/card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ img, title, content, link }) => {
  return (
    <div className={styles.container}>
      <Image src={img} alt="Wallet" className={styles.img} />
      <h5>{title}</h5>
      <span>{content}</span>
      <Link href={link} className={styles.button}>
        View
      </Link>
    </div>
  );
};
export default Card;
