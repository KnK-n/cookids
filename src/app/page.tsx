import UserComponent from "./components/user";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserComponent />
    </main>
  );
}
