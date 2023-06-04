import React, { useEffect, useState } from "react";
import classes from "../assets/css/removeModal.module.css";
const RemoveModal = (props) => {
  const [name, setName] = useState("");
  const [Class, setClass] = useState("");
  const submitHandler = () => {
    props.onDelete(props.id);
    props.onClose();
  };
  const closeHandler = () => {
    props.onClose();
  };
  useEffect(() => {
    const student = props.students.find((student) => {
      return student.id === props.id;
    });
    setClass(student.class);
    setName(student.name);
  }, []);
  return (
    <div className={classes.popupBox}>
      <div className={classes.box}>
        <div className={classes.head}>
          <h2>Remove Student</h2>
        </div>

        <div className={classes.msg}>
          <h3>
            Are you sure you want to remove the current student from the list?
          </h3>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                Student Name
              </label>
            </div>
            <div>
              <p>{name}</p>
            </div>
          </div>
          <div className={classes.inp}>
            <div>
              <label htmlFor="studentName" required>
                Class
              </label>
            </div>
            <div>
              <p>{Class}</p>
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

export default RemoveModal;
