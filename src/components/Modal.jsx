import { useState } from "react";
import classes from "./modal.module.css";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [Class, setClass] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");
  const [grade, setGrade] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [classMsg, setClassMsg] = useState(
    "please input values between 1 & 12"
  );
  const [scoreMsg, setScoreMsg] = useState(
    "please input values between 1 & 100"
  );

  const [nameErr, setNameErr] = useState(false);
  const [classErr, setClassErr] = useState(false);
  const [scoreErr, setScoreErr] = useState(false);

  const closeHandler = () => {
    props.onClose();
  };

  const nameChangehandler = (event) => {
    setName(event.target.value);
  };
  const classChangehandler = (event) => {
    setClass(event.target.value);
  };
  const scoreChangehandler = (event) => {
    setScore(event.target.value);
    const sc = event.target.value;
    if (sc >= 0 && sc <= 30) {
      setResult("Failed");
      setGrade("Poor");
    } else if (sc >= 31 && sc <= 75) {
      setResult("Passed");
      setGrade("Average");
    } else if (sc >= 76 && sc <= 100) {
      setResult("Passed");
      setGrade("Excellent");
    }
  };
  const resultChangehandler = (event) => {
    setResult(event.target.value);
  };
  const gradeChangehandler = (event) => {
    setGrade(event.target.value);
  };
  const submitHandler = () => {
    let error = false;
    if (!name) {
      setNameErr(true);
      setNameMsg("Error: Name field cannot be left blank");
      error = true;
    }
    if (!Class || isNaN(Class) || parseInt(Class) < 0 || parseInt(Class) > 12) {
      setClassErr(true);
      setClassMsg("Error: please input values between 1 & 100");
      error = true;
    }
    if (
      !score ||
      isNaN(score) ||
      parseInt(score) < 0 ||
      parseInt(score) > 100
    ) {
      setScoreErr(true);
      setScoreMsg("Error: please input values between 1 & 100");
      error = true;
    }

    if (error) {
      return;
    }
    props.onAdd({
      name,
      class: `${Class}Th`,
      score,
    });
  };

  return (
    <div className={classes.popupBox}>
      <div className={classes.box}>
        <div className={classes.head}>
          <h3>Add Student</h3>
        </div>
        <div className={classes.form}>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                STUDENT NAME*
              </label>
            </div>
            <div className={nameErr ? classes.error : ""}>
              <input type="text" value={name} onChange={nameChangehandler} />
            </div>
            {nameMsg && (
              <p className={nameErr ? classes.error : ""}>
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
            <div className={classErr ? classes.error : ""}>
              <input type="text" value={Class} onChange={classChangehandler} />
            </div>
            <p className={classErr ? classes.error : ""}>{classMsg}</p>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                SCORE*
              </label>
            </div>
            <div className={scoreErr ? classes.error : ""}>
              <input type="text" value={score} onChange={scoreChangehandler} />
            </div>
            <p className={scoreErr ? classes.error : ""}>{scoreMsg}</p>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName">RESULT</label>
            </div>
            <div>
              <div
                className={
                  result === "Passed"
                    ? classes.passed
                    : result === "Failed"
                    ? classes.failed
                    : ""
                }
              >
                {result ? result : "-"}
              </div>
            </div>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName">GRADE</label>
              <div
                className={
                  grade == "Excellent"
                    ? classes.excellent
                    : grade == "Poor"
                    ? classes.poor
                    : classes.average
                }
              >
                {grade ? grade : "-"}
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