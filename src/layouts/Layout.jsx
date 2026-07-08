import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">SideDev</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Alireza With 🔥</p>
      </footer>
    </>
  );
}

export default Layout;
