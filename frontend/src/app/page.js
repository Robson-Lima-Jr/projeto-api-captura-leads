import Image from "next/image";
import styles from "./page.module.css";
import Formulario from "./components/Formulario";

export default function Home() {
  return (
    <div className={styles.page_config}>
      <Formulario />
    </div>
  );
}
