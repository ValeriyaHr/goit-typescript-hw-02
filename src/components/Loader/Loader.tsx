import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <Bars
        height="80"
        width="80"
        color="#3d43ab"
        ariaLabel="loading"
        wrapperClass={css.loader}
      />
    </>
  );
};

export default Loader;