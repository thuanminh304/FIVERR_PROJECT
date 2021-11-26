import "./showError.scss"

const errorForm = {
  showErrors(errors, touched, values="" , mess1 = "", mess2 = "") {
    return (
      errors &&
      touched &&
      (values ? (
        <div className="styleErrors">
          <p>{mess2}</p>
        </div>
      ) : (
        <div className="styleErrors">
          <p>{mess1}</p>
        </div>
      ))
    );
  },

  showErrorsDefault(errors, touched) {
    return (
      errors &&
      touched && (
        <div className="styleErrors">
          <p>{errors}</p>
        </div>
      )
    );
  },
};
export default errorForm;
