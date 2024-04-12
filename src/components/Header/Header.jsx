// Base
import cn from "classnames";

// Styles
import "/src/styles/index.css";

// Module Styles
import styles from "./Header.module.css";

const Header = () => {
  const items = Array(5).fill(null);

  return (
    <header className={cn([styles.header])}>
      <div className={cn([styles.wrapper])}>
        <div className={cn([styles.logo])}></div>
        <div className={cn([styles.title])}>Blog name</div>
        <nav>
          <ul className={cn([styles.list])}>
            {items.map((_, index) => (
              <li key={index} className={cn([styles.item])}></li>
            ))}
            {/* <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li>
            <li className={cn([styles.item])}></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// //
// const items = Array(5).fill(null);
// <nav>
//   <ul className={cn([styles.list])}>
//     {items.map((item, index) => (
//       <li key={index} className={cn([styles.item])}></li>
//     ))}
//   </ul>
// </nav>;
// //
