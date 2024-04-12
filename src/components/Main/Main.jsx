// Base
import cn from "classnames";

// Module Styles
import styles from "./Main.module.css";

const Main = () => {
  const items = Array(4).fill(null);
  return (
    <section className={cn([styles.section])}>
      <div className={cn([styles.container])}>
        <h7 className={cn([styles.title])}>Blog</h7>
        <div className={cn([styles.contentContainer])}>
          {items.map((_, index) => (
            <div key={index} className={cn([styles.content])}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
