import { useReducer, useEffect } from "react";
import classes from "../assets/css/modal.module.css";

const errorReducer = (state, action) => {
  switch (action.type) {
    case "CLASS_ERROR":
      return {
        ...state,
        classErrMsg: "Error: Please input values between 1 & 12",
        isClassErr: true,
      };
    case "NAME_ERROR":
      return {
        ...state,
        nameErrMsg: "Error: Name field cannot be left blank",
        isNameErr: true,
      };
    case "SCORE_ERROR":
      return {
        ...state,
        scoreErrMsg: "Error: Please input values between 1 & 100",
        isScoreErr: true,
      };
    case "REMOVE_CLASS_ERROR":
      return {
        ...state,
        classErrMsg: "Please input values between 1 & 12",
        isClassErr: false,
      };
    case "REMOVE_NAME_ERROR":
      return {
        ...state,
        nameErrMsg: "",
        isNameErr: false,
      };
    case "REMOVE_SCORE_ERROR":
      return {
        ...state,
        scoreErrMsg: "Please input values between 1 & 100",
        isScoreErr: false,
      };
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.value };
    case "CLASS":
      return { ...state, class: action.value };
    case "SCORE":
      const sc = action.value;
      let result = "",
        grade = "";
      if (sc >= 0 && sc <= 30) {
        result = "Failed";
        grade = "Poor";
      } else if (sc >= 31 && sc <= 75) {
        result = "Passed";
        grade = "Average";
      } else if (sc >= 76 && sc <= 100) {
        result = "Passed";
        grade = "Excellent";
      }
      return {
        ...state,
        score: isNaN(parseInt(sc)) ? sc : parseInt(sc),
        result,
        grade,
      };

    case "SCORE_ERROR":
      return {
        ...state,
        score: action.value,
        result: "",
        grade: "",
      };
    default:
      return state;
  }
};

const intitialErr = {
  nameErrMsg: "",
  isNameErr: false,
  classErrMsg: "Please input values between 1 & 12",
  isClassErr: false,
  scoreErrMsg: "Please input values between 1 & 100",
  isScoreErr: false,
};

const formInitialData = {
  name: "",
  class: "",
  score: "",
  result: "",
  grade: "",
};

const Modal = (props) => {
  const [formData, dispatch] = useReducer(formReducer, formInitialData);
  const [err, dispathErr] = useReducer(errorReducer, intitialErr);
  const closeHandler = () => {
    props.onClose();
  };

  const nameChangehandler = (event) => {
    if (event.target.value !== "" && !isNaN(event.target.value)) return;
    dispatch({ type: "NAME", value: event.target.value });
    if (!event.target.value) {
      dispathErr({ type: "NAME_ERROR" });
      return;
    }
    dispathErr({ type: "REMOVE_NAME_ERROR" });
  };
  const classChangehandler = (event) => {
    if (event.target.value !== "" && isNaN(event.target.value)) return;
    dispatch({ type: "CLASS", value: event.target.value });
    if (
      !event.target.value ||
      parseInt(event.target.value) > 12 ||
      parseInt(event.target.value) < 1
    ) {
      dispathErr({ type: "CLASS_ERROR" });
      return;
    }
    dispathErr({ type: "REMOVE_CLASS_ERROR" });
  };

  const scoreChangehandler = (event) => {
    const sc = event.target.value;
    if (sc !== "" && isNaN(sc)) return;

    if (!sc || sc > 100 || sc < 0) {
      dispatch({ type: "SCORE_ERROR", value: event.target.value });
      dispathErr({ type: "SCORE_ERROR" });
      return;
    }
    dispatch({ type: "SCORE", value: event.target.value });

    dispathErr({ type: "REMOVE_SCORE_ERROR" });
  };

  const submitHandler = () => {
    let error = false;
    if (!formData.name) {
      dispathErr({ type: "NAME_ERROR" });
      error = true;
    }
    if (
      !formData.class ||
      isNaN(formData.class) ||
      parseInt(formData.class) < 0 ||
      parseInt(formData.class) > 12
    ) {
      dispathErr({ type: "CLASS_ERROR" });
      error = true;
    }
    if (
      !formData.score ||
      isNaN(formData.score) ||
      parseInt(formData.score) < 0 ||
      parseInt(formData.score) > 100
    ) {
      dispathErr({ type: "SCORE_ERROR" });
      error = true;
    }

    if (error) {
      return;
    }
    if (props.type === "ADD") {
      props.onSubmit({
        name: formData.name,
        class: formData.class,
        score: formData.score,
      });
      return;
    }
    props.onSubmit({
      id: props.id,
      name: formData.name,
      class: formData.class,
      score: formData.score,
    });
  };
  const fillData = () => {
    const student = props.students.find((student) => {
      return student.id === props.id;
    });
    dispatch({ type: "SCORE", value: student.score });
    dispatch({ type: "NAME", value: student.name });
    dispatch({ type: "CLASS", value: student.class });
  };
  useEffect(() => {
    if (props.type === "EDIT") {
      fillData();
    }
  }, []);

  return (
    <div className={classes.popupBox}>
      <div className={classes.box}>
        <div className={classes.head}>
          <h3>{props.type === "EDIT" ? "Edit" : "Add"} Student</h3>
        </div>
        <div className={classes.form}>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                STUDENT NAME*
              </label>
            </div>
            <div className={err.isNameErr ? classes.error : ""}>
              <input
                type="text"
                value={formData.name}
                onChange={nameChangehandler}
              />
            </div>
            {err.nameErrMsg && (
              <p className={err.isNameErr ? classes.error : ""}>
                Error:Name field cannot be left blank
              </p>
            )}
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                CLASS*
              </label>
            </div>
            <div className={err.isClassErr ? classes.error : ""}>
              <input
                type="text"
                value={formData.class}
                onChange={classChangehandler}
              />
            </div>
            <p className={err.isClassErr ? classes.error : ""}>
              {err.classErrMsg}
            </p>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                SCORE*
              </label>
            </div>
            <div className={err.isScoreErr ? classes.error : ""}>
              <input
                type="text"
                value={formData.score}
                onChange={scoreChangehandler}
              />
            </div>
            <p className={err.isScoreErr ? classes.error : ""}>
              {err.scoreErrMsg}
            </p>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName">RESULT</label>
            </div>
            <div>
              <div
                className={
                  formData.result === "Passed"
                    ? classes.passed
                    : formData.result === "Failed"
                    ? classes.failed
                    : ""
                }
              >
                {formData.result ? formData.result : "-"}
              </div>
            </div>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName">GRADE</label>
              <div
                className={
                  formData.grade === "Excellent"
                    ? classes.excellent
                    : formData.grade === "Poor"
                    ? classes.poor
                    : classes.average
                }
              >
                {formData.grade ? formData.grade : "-"}
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.btn1} onClick={submitHandler}>
            Confirm
          </button>
          <button className={classes.btn2} onClick={closeHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
