import React, { useState } from "react";
import PropTypes from "prop-types";

function ButtonScroll(props) {
  const [display, setDisplay] = useState();
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div
      className="button-scroll"
      style={display}
      onClick={topFunction}
      id="myBtn"
    >
      <i className="ion ion-ios-arrow-forward" />
      <i className="ion ion-ios-arrow-forward" />
    </div>
  );
}

ButtonScroll.propTypes = {};

export default ButtonScroll;
