// Base
import cn from "classnames";

// Module Styles
import styles from "./Main.module.css";

// Styles
import "/Users/crosswes/react-website-skeleton/src/styles/index.css";
import "/Users/crosswes/react-website-skeleton/src/styles/base.css";

const Main = () => {
  return (
    <div className={cn([styles.test])}>
      <section className={cn([styles.section])}>
        <div className={cn([styles.container])}>
          <h7 className={cn([styles.title])}>Blog</h7>
          <div className={cn([styles.contentContainer])}>
            <div className={cn([styles.content])}></div>
            <div className={cn([styles.content])}></div>
            <div className={cn([styles.content])}></div>
            <div className={cn([styles.content])}></div>
          </div>
        </div>
      </section>
      <span>hello</span>
    </div>
  );
};

export default Main;
