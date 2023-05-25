import React, { useState } from "react";
import classes from "./students.module.css";
import Modal from "./Modal";
import EditModal from "./ModalEdit.jsx";
import RemoveModal from "./RemoveModal";
import delete_icon from "../assets/icon_trash.png";
import edit_icon from "../assets/edit_attend.png";
import uuid from "react-uuid";
const initialData = [
  {
    id: 1,
    name: "Ashish",
    class: "10th",
    score: 70,
  },
];
const Students = () => {
  const [show, setShow] = useState(false);
  const [studentData, setStudentData] = useState(initialData);
  const [showEditModal, setShowEditModal] = useState(false);
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
  const closeEditHandler = () => {
    setShowEditModal(false);
  };

  const handleEdit = (id) => {
    setStudentId(id);
    setShowEditModal(true);
  };

  const UpdateHandler = (data) => {
    const temp = studentData.filter((student) => {
      return student.id !== data.id;
    });
    setStudentData([...temp, data]);
  };

  const handleDelete = (id) => {
    console.log("hello");
    const temp = studentData.filter((student) => {
      return student.id !== id;
    });
    console.log(temp, id);
    setStudentData(temp);
  };
  const closeDeleteHandler = () => {
    setShowDeleteModal(false);
  };
  return (
    <React.Fragment>
      {show && <Modal onClose={closeHandler} onAdd={addHandler} />}
      {showEditModal && (
        <EditModal
          id={studentId}
          students={studentData}
          onClose={closeEditHandler}
          onUpdate={UpdateHandler}
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
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.83331 16.2667L9.03331 12.4333L5.86664 9.96666H9.73331L11 5.99999L12.2333 9.96666H16.1333L12.9666 12.4333L14.1333 16.2667L11 13.9L7.83331 16.2667ZM3.13331 28.6667V18.5333C2.13331 17.4889 1.41665 16.3444 0.983313 15.1C0.54998 13.8555 0.333313 12.6 0.333313 11.3333C0.333313 8.3111 1.35554 5.77777 3.39998 3.73332C5.44442 1.68888 7.97775 0.666656 11 0.666656C14.0222 0.666656 16.5555 1.68888 18.6 3.73332C20.6444 5.77777 21.6666 8.3111 21.6666 11.3333C21.6666 12.6 21.45 13.8555 21.0166 15.1C20.5833 16.3444 19.8666 17.4889 18.8666 18.5333V28.6667L11 26.0333L3.13331 28.6667ZM11 20C13.4222 20 15.4722 19.1611 17.15 17.4833C18.8277 15.8055 19.6666 13.7555 19.6666 11.3333C19.6666 8.9111 18.8277 6.8611 17.15 5.18332C15.4722 3.50554 13.4222 2.66666 11 2.66666C8.57775 2.66666 6.52775 3.50554 4.84998 5.18332C3.1722 6.8611 2.33331 8.9111 2.33331 11.3333C2.33331 13.7555 3.1722 15.8055 4.84998 17.4833C6.52775 19.1611 8.57775 20 11 20ZM5.13331 25.8667L11 24.0333L16.8666 25.8667V20.1667C15.9777 20.8111 15.0222 21.2778 14 21.5667C12.9778 21.8555 11.9778 22 11 22C10.0222 22 9.0222 21.8555 7.99998 21.5667C6.97775 21.2778 6.0222 20.8111 5.13331 20.1667V25.8667Z"
                    fill="#333333"
                    stroke="#333333"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
            <p>School Space</p>
          </div>
          <div className={classes.title}>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5C0 3.16304 0.263392 3.79893 0.732233 4.26777C1.20107 4.73661 1.83696 5 2.5 5H5.5C6.16304 5 6.79893 4.73661 7.26777 4.26777C7.73661 3.79893 8 3.16304 8 2.5C8 1.83696 7.73661 1.20107 7.26777 0.732233C6.79893 0.263392 6.16304 0 5.5 0ZM5.5 4H2.5C2.10218 4 1.72064 3.84196 1.43934 3.56066C1.15804 3.27936 1 2.89782 1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H5.5C5.89782 1 6.27936 1.15804 6.56066 1.43934C6.84196 1.72064 7 2.10218 7 2.5C7 2.89782 6.84196 3.27936 6.56066 3.56066C6.27936 3.84196 5.89782 4 5.5 4V4ZM5.5 7H2.5C1.83696 7 1.20107 7.26339 0.732233 7.73223C0.263392 8.20107 0 8.83696 0 9.5V15.5C0 16.163 0.263392 16.7989 0.732233 17.2678C1.20107 17.7366 1.83696 18 2.5 18H5.5C6.16304 18 6.79893 17.7366 7.26777 17.2678C7.73661 16.7989 8 16.163 8 15.5V9.5C8 8.83696 7.73661 8.20107 7.26777 7.73223C6.79893 7.26339 6.16304 7 5.5 7ZM7 15.5C7 15.8978 6.84196 16.2794 6.56066 16.5607C6.27936 16.842 5.89782 17 5.5 17H2.5C2.10218 17 1.72064 16.842 1.43934 16.5607C1.15804 16.2794 1 15.8978 1 15.5V9.5C1 9.10218 1.15804 8.72064 1.43934 8.43934C1.72064 8.15804 2.10218 8 2.5 8H5.5C5.89782 8 6.27936 8.15804 6.56066 8.43934C6.84196 8.72064 7 9.10218 7 9.5V15.5ZM15.5 13H12.5C11.837 13 11.2011 13.2634 10.7322 13.7322C10.2634 14.2011 10 14.837 10 15.5C10 16.163 10.2634 16.7989 10.7322 17.2678C11.2011 17.7366 11.837 18 12.5 18H15.5C16.163 18 16.7989 17.7366 17.2678 17.2678C17.7366 16.7989 18 16.163 18 15.5C18 14.837 17.7366 14.2011 17.2678 13.7322C16.7989 13.2634 16.163 13 15.5 13ZM15.5 17H12.5C12.1022 17 11.7206 16.842 11.4393 16.5607C11.158 16.2794 11 15.8978 11 15.5C11 15.1022 11.158 14.7206 11.4393 14.4393C11.7206 14.158 12.1022 14 12.5 14H15.5C15.8978 14 16.2794 14.158 16.5607 14.4393C16.842 14.7206 17 15.1022 17 15.5C17 15.8978 16.842 16.2794 16.5607 16.5607C16.2794 16.842 15.8978 17 15.5 17ZM15.5 0H12.5C11.837 0 11.2011 0.263392 10.7322 0.732233C10.2634 1.20107 10 1.83696 10 2.5V8.5C10 9.16304 10.2634 9.79893 10.7322 10.2678C11.2011 10.7366 11.837 11 12.5 11H15.5C16.163 11 16.7989 10.7366 17.2678 10.2678C17.7366 9.79893 18 9.16304 18 8.5V2.5C18 1.83696 17.7366 1.20107 17.2678 0.732233C16.7989 0.263392 16.163 0 15.5 0ZM17 8.5C17 8.89782 16.842 9.27936 16.5607 9.56066C16.2794 9.84196 15.8978 10 15.5 10H12.5C12.1022 10 11.7206 9.84196 11.4393 9.56066C11.158 9.27936 11 8.89782 11 8.5V2.5C11 2.10218 11.158 1.72064 11.4393 1.43934C11.7206 1.15804 12.1022 1 12.5 1H15.5C15.8978 1 16.2794 1.15804 16.5607 1.43934C16.842 1.72064 17 2.10218 17 2.5V8.5Z"
                      fill="#A8B4B9"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Dashboard</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6656 3.09375H21.1406V2.7368C21.1413 2.24932 20.9489 1.7814 20.6055 1.43542C20.2621 1.08943 19.7957 0.89355 19.3082 0.890625H14.5542C14.3399 0.892178 14.1274 0.931252 13.9266 1.00608L12.3713 1.57416C12.1315 1.66157 11.8687 1.66201 11.6287 1.57538L10.0734 1.00547C9.87253 0.930828 9.6601 0.891959 9.44578 0.890625H4.69181C4.20434 0.89355 3.73787 1.08943 3.39446 1.43542C3.05105 1.7814 2.85866 2.24932 2.85938 2.7368V3.09375H1.33439C1.23155 3.09531 1.13318 3.1361 1.05941 3.20777C0.985639 3.27944 0.94203 3.37659 0.9375 3.47934V16.7246C0.942072 16.8272 0.985719 16.9243 1.0595 16.9958C1.13329 17.0674 1.23163 17.108 1.33439 17.1094H22.6656C22.7684 17.108 22.8667 17.0674 22.9405 16.9958C23.0143 16.9243 23.0579 16.8272 23.0625 16.7246V3.47934C23.058 3.37659 23.0144 3.27944 22.9406 3.20777C22.8668 3.1361 22.7685 3.09531 22.6656 3.09375ZM14.1829 1.71094C14.3016 1.66603 14.4273 1.64224 14.5542 1.64062H19.3082C19.5968 1.64332 19.8726 1.76011 20.0755 1.96549C20.2783 2.17088 20.3916 2.44816 20.3906 2.7368V12.9057C20.3906 13.5047 19.9072 13.9688 19.3082 13.9688H14.5542C14.3395 13.9726 14.1271 14.014 13.9267 14.091L12.375 14.6672V2.35312C12.4608 2.33453 12.5453 2.30984 12.6276 2.27925L14.1829 1.71094ZM3.60938 2.7368C3.60843 2.44816 3.72174 2.17088 3.92455 1.96549C4.12735 1.76011 4.40319 1.64332 4.69181 1.64062H9.44578C9.57268 1.64223 9.69833 1.66603 9.81703 1.71094L11.3724 2.27902C11.4547 2.30968 11.5391 2.33445 11.625 2.35312V14.6672L10.0734 14.0912C9.87295 14.0141 9.66054 13.9727 9.44578 13.9688H4.69181C4.09275 13.9688 3.60938 13.5047 3.60938 12.9057V2.7368ZM22.3125 16.3594H1.6875V3.84375H2.85938V12.9057C2.85966 13.1454 2.9074 13.3826 2.99983 13.6037C3.09226 13.8248 3.22755 14.0254 3.39791 14.194C3.56826 14.3625 3.77031 14.4957 3.99239 14.5857C4.21446 14.6758 4.45218 14.721 4.69181 14.7188H9.44578C9.57307 14.7227 9.69869 14.7488 9.81703 14.7958L11.3724 15.3673C11.7772 15.5168 12.2218 15.5184 12.6276 15.3717L14.1829 14.7951C14.3013 14.7483 14.427 14.7224 14.5542 14.7188H19.3082C19.5478 14.721 19.7855 14.6758 20.0076 14.5857C20.2297 14.4957 20.4317 14.3625 20.6021 14.194C20.7724 14.0254 20.9077 13.8248 21.0002 13.6037C21.0926 13.3826 21.1403 13.1454 21.1406 12.9057V3.84375H22.3125V16.3594Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Couses</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.active}>
                <div className={classes.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00857 6.8927C4.71546 6.8927 3.63788 5.77682 3.63788 4.44635C3.63788 3.11588 4.71546 2 6.00857 2C7.30167 2 8.37926 3.07296 8.37926 4.44635C8.37926 5.81974 7.30167 6.8927 6.00857 6.8927ZM6.00857 2.6867C5.06029 2.6867 4.28443 3.50215 4.28443 4.48927C4.28443 5.4764 5.06029 6.29185 6.00857 6.29185C6.95684 6.29185 7.73271 5.4764 7.73271 4.48927C7.73271 3.50215 6.95684 2.6867 6.00857 2.6867Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M6.35346 14.9184H5.70691V21.6566H6.35346V14.9184Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M4.45686 10.3691H3.8103V14.9185H4.45686V10.3691Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M12 6.89269C10.7069 6.89269 9.62927 5.77681 9.62927 4.44634C9.62927 3.11587 10.7069 2.04291 12 2.04291C13.2931 2.04291 14.3707 3.11587 14.3707 4.48926C14.3707 5.86265 13.2931 6.89269 12 6.89269ZM12 2.68668C11.0517 2.68668 10.2758 3.50214 10.2758 4.48926C10.2758 5.47638 11.0517 6.29184 12 6.29184C12.9482 6.29184 13.7241 5.47638 13.7241 4.48926C13.7241 3.50214 12.9482 2.68668 12 2.68668Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M12.3449 14.9184H11.6983V21.6566H12.3449V14.9184Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M10.4052 10.3691H9.75861V14.9185H10.4052V10.3691Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M8.25 22H3.81034V15.2618H3.2069C2.51724 15.2618 2 14.6609 2 13.8884V9.68239C2 8.90986 2.43103 8.26608 3.07759 8.09441C5.01724 7.57938 7 7.6223 8.98276 8.09441L8.81034 8.73818C6.9569 8.26608 5.06034 8.26608 3.2069 8.73818C2.86207 8.82402 2.60345 9.21029 2.60345 9.68239V13.8884C2.60345 14.2747 2.86207 14.618 3.16379 14.618H4.41379V21.3562H7.56034V14.618H8.81034V15.2618H8.2069V22H8.25Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M14.2413 22H9.75859V15.2618H9.15514C8.46548 15.2618 7.94824 14.6609 7.94824 13.8884V9.68239C7.94824 8.90986 8.37928 8.26608 9.02583 8.09441C10.9655 7.57938 12.9482 7.6223 14.931 8.09441L14.7586 8.73818C12.9051 8.26608 11.0086 8.26608 9.15514 8.73818C8.81031 8.82402 8.55169 9.21029 8.55169 9.68239V13.8884C8.55169 14.2747 8.81031 14.618 9.11203 14.618H10.362V21.3562H13.5086V14.618H14.7586V15.2618H14.1551V22H14.2413Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M17.9914 6.8927C16.6983 6.8927 15.6207 5.77682 15.6207 4.44635C15.6207 3.11588 16.6983 2 17.9914 2C19.2845 2 20.3621 3.07296 20.3621 4.44635C20.3621 5.81974 19.2845 6.8927 17.9914 6.8927ZM17.9914 2.6867C17.0431 2.6867 16.2672 3.50215 16.2672 4.48927C16.2672 5.47639 17.0431 6.29185 17.9914 6.29185C18.9396 6.29185 19.7155 5.47639 19.7155 4.48927C19.7155 3.50215 18.9396 2.6867 17.9914 2.6867ZM20.1896 22H15.75V15.2618H15.1465C14.4569 15.2618 13.9396 14.6609 13.9396 13.8884V9.6824C13.9396 8.90987 14.3707 8.26609 15.0172 8.09442C16.9569 7.62232 18.9827 7.62232 20.9224 8.09442C21.5689 8.26609 22 8.90987 22 9.6824V13.8884C22 14.6609 21.4396 15.2618 20.7931 15.2618H20.1896V22ZM16.3965 21.3562H19.5431V14.618H20.7931C21.0948 14.618 21.3534 14.2747 21.3534 13.8884V9.6824C21.3534 9.2103 21.0948 8.82403 20.75 8.7382C18.8965 8.26609 17 8.26609 15.1465 8.7382C14.8017 8.82403 14.5431 9.2103 14.5431 9.6824V13.8884C14.5431 14.2747 14.8017 14.618 15.1034 14.618H16.3534V21.3562H16.3965Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M18.2931 14.9184H17.6465V21.6566H18.2931V14.9184Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M20.1896 10.3691H19.5431V14.9185H20.1896V10.3691Z"
                      fill="#2CA4D8"
                    />
                    <path
                      d="M16.3965 10.3691H15.7499V14.9185H16.3965V10.3691Z"
                      fill="#2CA4D8"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Students</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.875 20.9371H1.61589L4.22383 11.3746H4.91289C4.38752 12.2988 4.71227 13.2993 5.41183 13.8978L5.01433 15.3806C4.94214 15.6526 5.18814 15.9125 5.46902 15.8411L8.00477 15.1955C8.07902 15.1833 8.15046 15.1496 8.20783 15.0926L8.79696 14.5083C9.33527 15.1381 10.2336 15.4893 11.176 15.1797C11.6404 15.9792 12.363 16.3516 13.1494 16.3516C13.8585 16.3516 14.5504 16.0083 14.97 15.4038C16.0037 15.5214 17.2774 14.8672 17.6327 14.4408C18.6505 14.8899 19.4861 15.4096 22.8703 15.4496C22.8718 15.4496 22.8733 15.4496 22.8746 15.4496C23.3678 15.4496 23.3719 14.7052 22.879 14.6996C17.9035 14.6414 17.6389 13.1699 15.2393 12.6866C15.2385 12.6864 15.2376 12.6866 15.2368 12.6864C14.3438 12.5099 11.2538 12.7833 9.90996 12.6425C9.18414 12.4677 8.69608 11.7708 8.79021 11.0514C8.79039 11.0502 8.79021 11.0491 8.79021 11.048C8.88677 10.4587 9.26046 10.0584 9.46896 10.0062C9.46896 10.0062 12.9548 9.77055 18.1345 9.21012C18.6274 9.15668 18.5464 8.41324 18.0538 8.46443L14.5026 8.84862C16.2833 7.08237 17.1816 6.1893 17.3713 6.00105C19.1788 6.46418 22.8743 7.75399 22.8743 7.75399C23.2945 7.75399 23.3959 7.16037 22.9954 7.02387C21.5828 6.54199 19.9399 5.9148 17.9897 5.38756L20.5841 2.81412C20.7565 2.6418 20.7154 2.40255 20.5793 2.27693L18.6341 0.41618C18.4877 0.27518 18.2511 0.280993 18.1103 0.421618L14.4925 4.03043C13.6498 3.69087 12.4693 3.53787 12.117 3.53787C10.4509 3.53787 8.22714 7.91974 6.92177 9.47655C6.60883 9.84949 6.04539 10.1742 5.54252 10.6246H3.93752C3.76839 10.6246 3.62027 10.7379 3.57564 10.901L0.763142 21.2135C0.69808 21.4524 0.878455 21.6871 1.12502 21.6871H22.875C23.3704 21.6871 23.3711 20.9371 22.875 20.9371ZM11.1664 14.3767C11.1662 14.3767 11.166 14.3769 11.1658 14.3771C11.1656 14.3772 11.1653 14.3772 11.1649 14.3774C10.5775 14.6808 9.82239 14.5655 9.35683 14.012L9.97633 13.3976C10.2191 13.4094 10.7404 13.4216 11.922 13.4341C11.8196 13.8352 11.5506 14.18 11.1664 14.3767ZM7.75558 14.4851L5.90439 14.9562L6.38946 13.1463L6.61389 12.9236L7.97477 14.2674L7.75558 14.4851ZM8.05033 11.5109C8.13546 12.1346 8.56427 12.8482 9.05552 13.1956L8.50727 13.7394L7.14639 12.3956C8.19864 11.3517 7.92396 11.618 8.05033 11.5109ZM11.8421 14.8332C12.2929 14.4924 12.5942 13.9968 12.6874 13.442L14.3211 13.4583C14.506 13.8864 14.6687 14.3911 14.4563 14.8066C13.8733 15.8712 12.4348 15.8551 11.8421 14.8332ZM15.2906 14.6671C15.349 14.2893 15.2584 13.8101 15.1318 13.4501C15.3763 13.4457 16.6307 13.9994 16.8771 14.1069C16.4458 14.4177 15.789 14.6448 15.2906 14.6671ZM18.3806 1.21118L19.7835 2.55274C15.8537 6.45087 17.2453 5.07274 13.3142 8.9718C12.8616 8.9943 11.4671 9.06687 10.4171 9.15143C11.4844 8.09262 9.78396 9.78668 18.3806 1.21118ZM7.49627 9.95843C8.60571 8.63562 11.0216 4.28787 12.117 4.28787C12.3988 4.28787 13.2302 4.40187 13.9056 4.61599C9.45377 9.05693 11.9271 6.5973 5.78964 12.6851C5.69533 12.7784 5.67639 12.9102 5.64246 13.037C5.46171 12.7781 5.29464 12.3804 5.48064 11.9167C5.80483 11.1084 6.90958 10.6586 7.49627 9.95843Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Exams</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.749817 0.5V21.4989H11.2903C11.6749 21.4992 12.0543 21.41 12.3985 21.2384C12.7427 21.0668 13.0423 20.8175 13.2736 20.5102L17.249 15.2224V0.5H0.749817ZM1.49978 1.24996H16.499V14.862L11.2449 17.2892C11.2996 17.2885 11.3544 17.2905 11.4089 17.295C11.4119 17.295 11.4148 17.295 11.4177 17.295C11.4216 17.2955 11.4255 17.296 11.4294 17.2965C11.862 17.3383 12.263 17.5413 12.5527 17.8652C12.8424 18.1892 12.9995 18.6103 12.9929 19.0448C12.9862 19.4794 12.8163 19.8955 12.5168 20.2104C12.2174 20.5253 11.8104 20.716 11.3767 20.7446C11.3718 20.7451 11.3669 20.7455 11.3621 20.746C11.3382 20.7475 11.3142 20.7485 11.2903 20.7489H1.49978V1.24996ZM15.6743 16.069L13.7408 18.6382C13.7283 18.5569 13.7116 18.4762 13.691 18.3965C13.691 18.396 13.691 18.3956 13.691 18.3951C13.6854 18.3764 13.6795 18.3579 13.6735 18.3394C13.6342 18.1994 13.5828 18.0632 13.5197 17.9322C13.5192 17.9317 13.5187 17.9312 13.5182 17.9307C13.4823 17.8565 13.4427 17.7842 13.3995 17.7139C13.3123 17.5734 13.2112 17.4418 13.0978 17.3214C13.0843 17.3071 13.0706 17.2929 13.0568 17.2789L15.6743 16.069Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M11.8666 5.52404C11.7381 5.5315 11.6169 5.58658 11.5269 5.67853C11.4368 5.77048 11.3842 5.8927 11.3794 6.02133L11.3309 6.87845L10.4838 6.8926C10.4122 6.8874 10.3403 6.89716 10.2727 6.92127C10.205 6.94537 10.1431 6.98328 10.0909 7.03259C10.0387 7.08191 9.99737 7.14154 9.96947 7.20771C9.94157 7.27388 9.92774 7.34512 9.92887 7.41692C9.92999 7.48872 9.94605 7.5595 9.97601 7.62476C10.006 7.69002 10.0492 7.74833 10.1029 7.79598C10.1566 7.84363 10.2197 7.87959 10.288 7.90155C10.3564 7.92352 10.4286 7.93102 10.5 7.92358L11.2743 7.91145L11.2177 8.91008C11.2087 8.98043 11.2143 9.05186 11.2341 9.11994C11.254 9.18803 11.2876 9.25132 11.3329 9.30588C11.3782 9.36044 11.4342 9.40511 11.4974 9.43713C11.5607 9.46914 11.6299 9.4878 11.7007 9.49197C11.7715 9.49613 11.8424 9.4857 11.909 9.46133C11.9756 9.43696 12.0364 9.39916 12.0878 9.35029C12.1392 9.30141 12.18 9.2425 12.2076 9.17721C12.2353 9.11192 12.2493 9.04163 12.2486 8.97072L12.3093 7.89325L13.2513 7.87708C13.3229 7.88228 13.3948 7.87252 13.4625 7.84842C13.5301 7.82432 13.592 7.78641 13.6442 7.73709C13.6964 7.68778 13.7378 7.62814 13.7657 7.56198C13.7936 7.49581 13.8074 7.42456 13.8063 7.35276C13.8051 7.28096 13.7891 7.21018 13.7591 7.14493C13.7292 7.07967 13.6859 7.02136 13.6322 6.97371C13.5785 6.92605 13.5155 6.8901 13.4471 6.86813C13.3787 6.84617 13.3065 6.83867 13.2351 6.84611L12.3659 6.86026L12.4103 6.08197C12.4162 6.00843 12.4063 5.93447 12.3812 5.86508C12.3562 5.79568 12.3166 5.73244 12.2651 5.67961C12.2136 5.62677 12.1514 5.58555 12.0826 5.55872C12.0139 5.53189 11.9402 5.52006 11.8666 5.52404V5.52404ZM8.6766 6.04154C8.65771 6.04118 8.63882 6.04186 8.62 6.04357C8.54526 6.05126 8.47309 6.07514 8.40851 6.11354C8.34392 6.15194 8.28848 6.20394 8.24602 6.26593C8.24602 6.26593 7.98629 6.64868 7.68808 7.12103C7.38987 7.59343 7.05762 8.12524 6.89362 8.57248C6.82581 8.75752 6.31993 9.64436 5.86265 10.3615C5.40537 11.0787 4.9752 11.7058 4.9752 11.7058C4.93482 11.7624 4.90619 11.8266 4.89102 11.8944C4.87584 11.9623 4.87443 12.0325 4.88685 12.1009C4.89928 12.1694 4.9253 12.2346 4.96337 12.2928C5.00144 12.351 5.05079 12.4009 5.1085 12.4397C5.16622 12.4785 5.23112 12.5053 5.29938 12.5186C5.36764 12.5319 5.43787 12.5314 5.50591 12.517C5.57396 12.5027 5.63844 12.4749 5.69555 12.4352C5.75265 12.3955 5.80122 12.3448 5.83839 12.286C5.83839 12.286 6.23631 11.6846 6.647 11.0448C6.74096 11.0291 7.35495 10.9269 8.07015 10.7881C8.45413 10.7137 8.83644 10.634 9.13953 10.5596C9.17178 10.5513 9.19394 10.545 9.22443 10.5374C9.54509 11.3878 9.94752 12.178 10.5526 12.6519C10.6059 12.6967 10.6677 12.7303 10.7343 12.7507C10.8009 12.771 10.8709 12.7777 10.9401 12.7704C11.0094 12.7631 11.0764 12.7418 11.1373 12.708C11.1981 12.6741 11.2515 12.6283 11.2942 12.5733C11.337 12.5184 11.3682 12.4553 11.386 12.388C11.4038 12.3207 11.4078 12.2504 11.3978 12.1815C11.3878 12.1126 11.364 12.0464 11.3279 11.9869C11.2917 11.9274 11.2439 11.8758 11.1873 11.8352C10.7349 11.4808 10.1182 10.1008 9.75205 8.84741C9.38589 7.59401 9.18602 6.47213 9.18602 6.47213C9.16551 6.35181 9.10314 6.24262 9.00993 6.16383C8.91671 6.08504 8.79865 6.04173 8.6766 6.04154V6.04154ZM8.45221 7.86293C8.55178 8.32371 8.56039 8.46387 8.75746 9.13851C8.79807 9.2775 8.84577 9.41972 8.88886 9.56101C8.61835 9.6272 8.24529 9.70095 7.87204 9.77327C7.62977 9.82021 7.60531 9.82242 7.3889 9.86221C7.5961 9.51355 7.76872 9.19203 7.86395 8.93232C7.94038 8.72381 8.20693 8.26597 8.45221 7.86293Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Results</span>
              </div>
            </div>

            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.00611 2.32446H20.9815C21.1859 2.32446 21.3516 2.49017 21.3516 2.69458V16.0805C21.3516 16.2849 21.1859 16.4506 20.9815 16.4506H3.00611C2.8017 16.4506 2.63599 16.2849 2.63599 16.0805V2.69458C2.63599 2.49017 2.8017 2.32446 3.00611 2.32446ZM20.6114 3.0647H3.37623V15.7104H20.6114V3.0647Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M10.0723 16.3132C10.2008 16.1552 10.1769 15.9228 10.0188 15.7942C9.86072 15.6657 9.62832 15.6896 9.49978 15.8477C7.50411 18.3132 5.17498 21.3038 5.16824 21.3124C5.04289 21.4737 5.07201 21.7061 5.2333 21.8315C5.39459 21.9568 5.62699 21.9277 5.75234 21.7664C5.75925 21.7575 8.14154 18.6985 10.0723 16.3133V16.3132ZM14.4882 15.8477C14.3596 15.6897 14.1272 15.6657 13.9692 15.7942C13.8111 15.9228 13.7871 16.1552 13.9157 16.3133C15.8464 18.6985 18.2287 21.7576 18.2356 21.7664C18.361 21.9277 18.5934 21.9568 18.7547 21.8315C18.916 21.7061 18.9451 21.4737 18.8197 21.3124C18.813 21.3038 16.4839 18.3132 14.4882 15.8477V15.8477Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M0.520143 15.7901C0.31574 15.7901 0.150024 15.9558 0.150024 16.1602C0.150024 16.3646 0.31574 16.5304 0.520143 16.5304H23.4675C23.6719 16.5304 23.8376 16.3646 23.8376 16.1602C23.8376 15.9558 23.6719 15.7901 23.4675 15.7901H0.520143V15.7901ZM12.4041 1.45944C12.4041 1.25503 12.2383 1.08932 12.0339 1.08932C11.8295 1.08932 11.6638 1.25503 11.6638 1.45944V2.69458C11.6638 2.89899 11.8295 3.0647 12.0339 3.0647C12.2383 3.0647 12.4041 2.89899 12.4041 2.69458V1.45944ZM5.21972 11.7903L7.06582 6.98487H7.75056L9.71749 11.7903H8.99248L8.43193 10.3347H6.42249L5.8955 11.7903H5.21972V11.7903ZM6.60598 9.81668H8.23614L7.73376 8.48636C7.5816 8.08246 7.46749 7.75017 7.39364 7.48946C7.3321 7.79827 7.24596 8.10371 7.13407 8.40804L6.60597 9.81668H6.60598ZM10.1986 11.7903V6.98487H12.0022C12.3691 6.98487 12.6634 7.0341 12.8849 7.13033C13.1076 7.22766 13.281 7.37759 13.4063 7.5801C13.5316 7.7815 13.5954 7.99295 13.5954 8.21449C13.5954 8.41923 13.5395 8.61279 13.4276 8.79405C13.3168 8.9753 13.1479 9.12187 12.923 9.23376C13.2139 9.31879 13.4365 9.46423 13.5932 9.66898C13.7498 9.87486 13.8281 10.1176 13.8281 10.3974C13.8281 10.6222 13.78 10.8315 13.6849 11.025C13.5898 11.2186 13.4723 11.3674 13.3325 11.4726C13.1926 11.5777 13.017 11.6561 12.8066 11.7098C12.5963 11.7635 12.3378 11.7903 12.0313 11.7903H10.1986V11.7903ZM10.8352 9.00438H11.8746C12.1554 9.00438 12.358 8.98537 12.481 8.94845C12.6421 8.90034 12.7641 8.82089 12.8458 8.70902C12.9274 8.59712 12.9689 8.45727 12.9689 8.28944C12.9689 8.13058 12.9308 7.9896 12.8547 7.86876C12.7775 7.74679 12.6679 7.66401 12.5269 7.61926C12.3848 7.5745 12.1409 7.55212 11.7952 7.55212H10.8352V9.00438L10.8352 9.00438ZM10.8352 11.2231H12.0313C12.2371 11.2231 12.3815 11.2152 12.4643 11.2007C12.6108 11.1738 12.7328 11.1302 12.8312 11.0687C12.9297 11.0082 13.0103 10.9187 13.074 10.8024C13.1367 10.6849 13.1691 10.5506 13.1691 10.3974C13.1691 10.2183 13.1233 10.0628 13.0315 9.92968C12.9398 9.79764 12.8122 9.70479 12.6489 9.65107C12.4866 9.59849 12.2517 9.57164 11.9462 9.57164H10.8352V11.2231V11.2231ZM18.1312 10.1053L18.7678 10.2665C18.6347 10.7878 18.3941 11.1861 18.0484 11.4614C17.7015 11.7355 17.2786 11.872 16.7774 11.872C16.2594 11.872 15.8387 11.7668 15.5142 11.5565C15.1898 11.345 14.9425 11.0396 14.7735 10.6401C14.6046 10.2396 14.5195 9.80996 14.5195 9.35123C14.5195 8.85112 14.6147 8.41477 14.806 8.04219C14.9973 7.66961 15.2692 7.38653 15.6227 7.19299C15.9752 6.99942 16.3634 6.90319 16.7875 6.90319C17.2686 6.90319 17.6725 7.02516 18.0003 7.27018C18.3281 7.5152 18.5563 7.85869 18.685 8.30288L18.0596 8.45056C17.9477 8.10037 17.7866 7.84638 17.574 7.68639C17.3625 7.52641 17.0962 7.44696 16.774 7.44696C16.4048 7.44696 16.0971 7.53535 15.8487 7.71212C15.6004 7.89003 15.4258 8.12722 15.3263 8.42595C15.2255 8.72356 15.1752 9.03124 15.1752 9.34788C15.1752 9.75738 15.2345 10.1132 15.3531 10.4186C15.4728 10.723 15.6574 10.9512 15.9092 11.1022C16.1609 11.2533 16.4328 11.3282 16.7259 11.3282C17.0817 11.3282 17.3827 11.2253 17.63 11.0206C17.8772 10.8147 18.0439 10.5092 18.1312 10.1053L18.1312 10.1053Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Notice Period</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM8.4694 8.34854C6.5102 10.3636 6.5102 13.6364 8.4694 15.6514L7.75242 16.3485C5.41586 13.9453 5.41586 10.0546 7.75242 7.65144L8.4694 8.34854ZM15.5306 15.6514C17.4898 13.6364 17.4898 10.3636 15.5306 8.34854L16.2476 7.65144C18.5841 10.0546 18.5841 13.9453 16.2476 16.3485L15.5306 15.6514Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.34284 6.35385C3.21905 9.47223 3.21905 14.5278 6.34284 17.6461L5.63635 18.3539C2.12122 14.8448 2.12122 9.15517 5.63635 5.64613L6.34284 6.35385ZM17.6572 17.6461C20.7809 14.5278 20.7809 9.47223 17.6572 6.35385L18.3637 5.64613C21.8788 9.15517 21.8788 14.8448 18.3637 18.3539L17.6572 17.6461Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <span className={classes.desc}>Live classes</span>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.inactive}>
                <div className={classes.icon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.752 1.92L13.992 1.224C14.088 0.984 13.968 0.696 13.704 0.624C13.464 0.528 13.176 0.672 13.104 0.912L12.84 1.584C9.74399 0.744 6.45599 2.376 5.32799 5.4L3.76799 9.672L0.887993 10.992C0.503993 11.16 0.527993 11.712 0.935993 11.856L6.11999 13.752C5.90399 14.976 6.59999 16.2 7.79999 16.632C8.99999 17.064 10.344 16.56 10.968 15.504L16.2 17.376C16.44 17.472 16.728 17.352 16.824 17.088C16.872 16.944 16.848 16.8 16.776 16.68L15.456 13.872L17.016 9.6C18.144 6.576 16.68 3.24 13.752 1.92ZM8.15999 15.744C7.43999 15.48 7.00799 14.808 7.05599 14.088L10.08 15.168C9.64799 15.744 8.85599 15.984 8.15999 15.744ZM16.128 9.288L14.496 13.728C14.448 13.848 14.448 13.968 14.52 14.088L15.456 16.08L10.92 14.472L6.86399 13.008L2.32799 11.376L4.34399 10.44C4.46399 10.392 4.53599 10.296 4.58399 10.176L6.21599 5.736C7.19999 3.048 10.224 1.656 12.96 2.616C15.696 3.6 17.112 6.6 16.128 9.288Z"
                      fill="#A8B4B9"
                      stroke="#A8B4B9"
                      strokeWidth="0.2"
                    />
                  </svg>
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
                  }}
                >
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                    </svg>
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
                        grade == "Excellent"
                          ? classes.excellent
                          : grade == "Poor"
                          ? classes.poor
                          : classes.average;
                      const resultClass =
                        result == "Passed" ? classes.passed : classes.failed;
                      return (
                        <tr key={student.id}>
                          <td>{ind + 1}</td>
                          <td>{student.name}</td>
                          <td>{student.class}</td>
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
