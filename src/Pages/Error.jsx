import React from "react";

import errorLogo from "../Assets/img/errorPaying.png";

function Error() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#2b2b2b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white"
      }}
    >
      <img src={errorLogo} style={{ width: "500px" }} alt={errorLogo} />
      <h2>
        Терминал не работает
        <br />
        Пожалуйста, обратитесь к администратору!
        <br />
        (нет ответа от утс)
      </h2>
    </div>
  );
}

export default Error;
