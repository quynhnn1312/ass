import React, { useState } from "react";

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
    <a
      className="go-to-top rounded"
      style={display}
      onClick={topFunction}
      id="myBtn"
    >
      <i className="fa fa-angle-up" />
    </a>
  );
}

ButtonScroll.propTypes = {};

export default ButtonScroll;
