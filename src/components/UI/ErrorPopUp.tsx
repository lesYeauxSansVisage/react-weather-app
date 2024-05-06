import classes from "./ErrorPopUp.module.scss";

const ErrorPopUp = () => {
  return (
    <div className={classes["error-popup"]}>
      <i className="fa-regular fa-face-frown-open"></i>
      <h2>
        {
          "Desculpa, não conseguimos achar o clima para a cidade que você procurou. "
        }
      </h2>
      <p>
        Por favor, verifique sua conexão com a internet e se você inseriu o nome
        da cidade corretamente.
      </p>
    </div>
  );
};

export default ErrorPopUp;
