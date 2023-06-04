import React, { useState } from "react";
import classes from "../assets/css/students.module.css";
import Modal from "./Modal";
import RemoveModal from "./RemoveModal";
import delete_icon from "../assets/img/icon_trash.png";
import edit_icon from "../assets/img/edit_attend.png";
import uuid from "react-uuid";
import logo from "../assets/svg/logo.svg";
import dashboard from "../assets/svg/dashboard.svg";
import course from "../assets/svg/course.svg";
import exams from "../assets/svg/exams.svg";
import liveClasses from "../assets/svg/liveClasses.svg";
import notice from "../assets/svg/notice.svg";
import notifications from "../assets/svg/notifications.svg";
import results from "../assets/svg/results.svg";
import students from "../assets/svg/student.svg";
import add from "../assets/svg/add.svg";
const initialData = [
  {
    id: 1,
    name: "Ashish",
    class: "10",
    score: 70,
  },
];
const Students = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [studentData, setStudentData] = useState(initialData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [studentId, setStudentId] = useState(-1);

  const addHandler = (student) => {
    const id = uuid();
    studentData.push({ ...student, id });
    setShow(false);
  };

  const closeHandler = () => {
    setShow(false);
  };

  const handleEdit = (id) => {
    setStudentId(id);
    setShow(true);
    setType("EDIT");
  };

  const UpdateHandler = (data) => {
    const temp = studentData.filter((student) => {
      return student.id !== data.id;
    });
    setStudentData([...temp, data]);
    setShow(false);
  };

  const handleDelete = (id) => {
    const temp = studentData.filter((student) => {
      return student.id !== id;
    });
    setStudentData(temp);
  };
  const closeDeleteHandler = () => {
    setShowDeleteModal(false);
  };
  return (
    <React.Fragment>
      {show && (
        <Modal
          id={studentId}
          students={studentData}
          onClose={closeHandler}
          onSubmit={type === "ADD" ? addHandler : UpdateHandler}
          type={type}
        />
      )}
      {showDeleteModal && (
        <RemoveModal
          id={studentId}
          students={studentData}
          onClose={closeDeleteHandler}
          onDelete={handleDelete}
        />
      )}
      <div className={classes.stdMain}>
        <div className={classes.stdSidebar}>
          <div className={classes.titleTop}>
            <div className={classes.iconWrapper}>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
            <p>School Space</p>
          </div>
          <div className={classes.title}>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={dashboard} alt="" />
                </div>
                <span className={classes.desc}>Dashboard</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={course} alt="" />
                </div>
                <span className={classes.desc}>Couses</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.active}>
                <div className={classes.icon}>
                  <img src={students} alt="" />
                </div>
                <span className={classes.desc}>Students</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={exams} alt="" />
                </div>
                <span className={classes.desc}>Exams</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={results} alt="" />
                </div>
                <span className={classes.desc}>Results</span>
              </div>
            </div>

            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={notice} alt="" />
                </div>
                <span className={classes.desc}>Notice Period</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={liveClasses} alt="" />
                </div>
                <span className={classes.desc}>Live classes</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <img src={notifications} alt="" />
                </div>
                <span className={classes.desc}>Notification</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.stdBody}>
          <div className={classes.rightWrapper}>
            <div className={classes.rightTop}>
              <div className={classes.subHeader}>
                <h2>Students</h2>
                <button
                  className={classes.btn}
                  onClick={() => {
                    setShow(true);
                    setType("ADD");
                  }}
                >
                  <span>
                    <img src={add} alt="" />
                  </span>
                  &nbsp;
                  <span>Add</span>
                </button>
              </div>
              <div className={classes.tableWrapper}>
                <table className={classes.contentTable}>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Student Name</th>
                      <th>Class </th>
                      <th>Result</th>
                      <th>Score</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((student, ind) => {
                      let result, grade;
                      if (student.score >= 0 && student.score <= 30) {
                        result = "Failed";
                        grade = "Poor";
                      } else if (student.score >= 31 && student.score <= 75) {
                        result = "Passed";
                        grade = "Average";
                      } else if (student.score >= 76 && student.score <= 100) {
                        result = "Passed";
                        grade = "Excellent";
                      }
                      const finalGrade =
                        grade === "Excellent"
                          ? classes.excellent
                          : grade === "Poor"
                          ? classes.poor
                          : classes.average;
                      const resultClass =
                        result === "Passed" ? classes.passed : classes.failed;
                      let suffix;
                      if (parseInt(student.class) > 3) suffix = "th";
                      else if (parseInt(student.class) === 3) suffix = "rd";
                      else if (parseInt(student.class) === 2) suffix = "nd";
                      else if (parseInt(student.class) === 1) suffix = "st";
                      return (
                        <tr key={student.id}>
                          <td>{ind + 1}</td>
                          <td>{student.name}</td>
                          <td>
                            {student.class}
                            {suffix}
                          </td>
                          <td>
                            <div className={resultClass}>{result}</div>
                          </td>
                          <td>{student.score}/100</td>
                          <td className={finalGrade}>
                            <div className={classes.gradeWrapper}>
                              {grade}
                              <div className={classes.actionIcons}>
                                <span
                                  onClick={() => {
                                    handleEdit(student.id);
                                  }}
                                >
                                  <img
                                    src={edit_icon}
                                    className="card_edit"
                                    alt="delete"
                                  />
                                </span>
                                <span
                                  onClick={() => {
                                    setStudentId(student.id);
                                    setShowDeleteModal(true);
                                  }}
                                >
                                  <img
                                    src={delete_icon}
                                    className="card_edit"
                                    alt="delete"
                                  />
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={classes.pagination}>
              Showing {studentData.length} out of {studentData.length} entries.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Students;
