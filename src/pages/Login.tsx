import { auth } from "firebase";
import React, { useEffect } from "react";
import { ui } from "../firebase";

export const Login = () => {
  useEffect(() => {
    ui.start("#login", {
      signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "/",
    });
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="login"
    ></div>
  );
};
