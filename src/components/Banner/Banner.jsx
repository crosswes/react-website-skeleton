// Base
import cn from "classnames";

// Module Styles
import styles from "./Banner.module.css";

// Styles
import "/src/styles/index.css";

const Banner = () => {
  return <div className={cn([styles.banner])}>Full-width Banner image</div>;
};

export default Banner;
