import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return <div className={classes.spinner} aria-label="loading-spinner"></div>;
};

export default LoadingSpinner;
