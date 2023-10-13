import classes from "./MainHeader.module.scss";

type MainHeaderProps = {
  fontSize: "big" | "default";
};

const MainHeader = (props: MainHeaderProps) => {
  const titleClasses = props.fontSize === "big" ? classes.big : classes.default;

  return (
    <header className={classes.header}>
      <h1 className={titleClasses}>Previsão do Tempo</h1>
    </header>
  );
};

export default MainHeader;
