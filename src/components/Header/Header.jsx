// Base
import cn from "classnames";

// Styles
import "/Users/crosswes/react-website-skeleton/src/styles/index.css";
import "/Users/crosswes/react-website-skeleton/src/styles/base.css";

// Module Styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={cn([styles.header])}>
      <div className={cn([styles.wrapper])}>
        <div className={cn([styles.logo])}></div>
        <div className={cn([styles.title])}>Blog name</div>
        <nav>
          <ul className={cn([styles.list])}>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
