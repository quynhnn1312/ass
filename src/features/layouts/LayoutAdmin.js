import React from "react";
import ButtonScroll from "../../components/Admin/ButtonScroll";
import Footer from "../../components/Admin/Footer/index";
import Header from "../../components/Admin/Header/index";
import Sidebar from "../../components/Admin/Sidebar/index";
import styles from '../../assets/admin/css/Button.module.scss'
// css
import "../../assets/admin/css/sb-admin-2.min.scss";
import "../../assets/main/css/font-awesome.min.css";
import "../../assets/admin/vendor/datatables/dataTables.bootstrap4.min.css";
import "../../assets/admin/css/style.scss";

export default ({ children }) => {
  return (
    <div className="admin-page">
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          {children}
          {/* <button className={styles.btnAdmin}>Buttn Admin </button> */}
        </div>
        <Footer />
      </div>
      <ButtonScroll />
    </div>
    </div>
  );
};
