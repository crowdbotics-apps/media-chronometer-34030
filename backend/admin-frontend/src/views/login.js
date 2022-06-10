import React from "react";

import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

import "./login.css";

const Login4112 = (props) => {
  const history = useHistory();
  return (
    <div className="login4112-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login4112-login4112">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTExNicgaGVpZ2h0PSc4MDAnIHZpZXdCb3g9JzAgMCAxMTE2IDgwMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgMEgxMTE2Vjc3NkMxMTE2IDc4OS4yNTUgMTEwNS4yNSA4MDAgMTA5MiA4MDBIMjRDMTAuNzQ1MSA4MDAgMCA3ODkuMjU1IDAgNzc2VjBaJyBmaWxsPScjRjhGOEY4Jy8+Cjwvc3ZnPgo="
          alt="Rectangle94424"
          className="login4112-image"
        />
        <span className="login4112-text">
          Enter your admin credentials to login. Otherwise contact your admin
          for credentials.
        </span>
        <span className="login4112-text1">Login to Media Chronometer</span>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQ0MCcgaGVpZ2h0PSc3Micgdmlld0JveD0nMCAwIDE0NDAgNzInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTFfNDNfMTQnIGZpbGw9J3doaXRlJz4KPHBhdGggZD0nTTAgMEgxNDQwVjcySDBWMFonLz4KPC9tYXNrPgo8cGF0aCBkPSdNMCAwSDE0NDBWNzJIMFYwWicgZmlsbD0nd2hpdGUnIGZpbGwtb3BhY2l0eT0nMC41Jy8+CjxwYXRoIGQ9J00wIDBIMTQ0MEgwWk0xNDQwIDczSDBWNzFIMTQ0MFY3M1pNMCA3MlYwVjcyWk0xNDQwIDBWNzJWMFonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuMicgbWFzaz0ndXJsKCNwYXRoLTEtaW5zaWRlLTFfNDNfMTQpJy8+Cjwvc3ZnPgo="
          alt="Rectangle74314"
          className="login4112-image1"
        />
        <div className="login4112-frame1824427">
          <span className="login4112-text2">Enter email address</span>
          <div className="login4112-group164426">
            <div className="login4112-group154425">
              <input
                className="login4112-text3"
                placeholder="Enter your super admin email address"
              />
              <div className="login4112-iconly-bold-message4419">
                <div className="login4112-message4420">
                  <img
                    alt="Message4421"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMiAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi4zNTEgMC4yNUMxNy44MDM4IDAuMjUgMTkuMjAxMyAwLjgyNDE2NyAyMC4yMjkzIDEuODU0NDJDMjEuMjU4NSAyLjg4MjUgMjEuODMzOCA0LjI2OTE3IDIxLjgzMzggNS43MjA4M1YxNC4yNzkyQzIxLjgzMzggMTcuMzAxNyAxOS4zNzQ2IDE5Ljc1IDE2LjM1MSAxOS43NUg1LjY0ODc1QzIuNjI1MTcgMTkuNzUgMC4xNjcwODQgMTcuMzAxNyAwLjE2NzA4NCAxNC4yNzkyVjUuNzIwODNDMC4xNjcwODQgMi42OTgzMyAyLjYxNDMzIDAuMjUgNS42NDg3NSAwLjI1SDE2LjM1MVpNMTguMDc0NiA3LjMzNUwxOC4xNjEzIDcuMjQ4MzNDMTguNDIwMiA2LjkzNDE3IDE4LjQyMDIgNi40NzkxNyAxOC4xNDkzIDYuMTY1QzE3Ljk5ODggNi4wMDM1OCAxNy43OTE4IDUuOTA1IDE3LjU3NjMgNS44ODMzM0MxNy4zNDg4IDUuODcxNDIgMTcuMTMyMSA1Ljk0ODMzIDE2Ljk2ODUgNi4xTDEyLjA4MzggMTBDMTEuNDU1NCAxMC41MjExIDEwLjU1NTIgMTAuNTIxMSA5LjkxNzA5IDEwTDUuMDQyMDkgNi4xQzQuNzA1MTcgNS44NTA4MyA0LjIzOTM0IDUuODgzMzMgMy45NTg3NSA2LjE3NTgzQzMuNjY2MjUgNi40NjgzMyAzLjYzMzc1IDYuOTM0MTcgMy44ODE4NCA3LjI1OTE3TDQuMDIzNzUgNy40TDguOTUyOTIgMTEuMjQ1OEM5LjU1OTU5IDExLjcyMjUgMTAuMjk1MiAxMS45ODI1IDExLjA2NTQgMTEuOTgyNUMxMS44MzM1IDExLjk4MjUgMTIuNTgyMSAxMS43MjI1IDEzLjE4NzcgMTEuMjQ1OEwxOC4wNzQ2IDcuMzM1WicgZmlsbD0nIzMzMzMzMycvPgo8L3N2Zz4K"
                    className="login4112-svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login4112-frame1834428">
          <span className="login4112-text4">Password</span>
          <div className="login4112-group164430">
            <div className="login4112-frame154432">
              <input className="login4112-text3" placeholder="Enter password" />
              <div className="login4112-iconly-bold-lock4439">
                <div className="login4112-lock4440">
                  <img
                    alt="Lock4441"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMCAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS45ODI5IDYuMDEyM1Y3LjY3MzQyQzE3Ljg0ODggOC4yNTU4MyAxOS4yMDgzIDkuOTQ0OTQgMTkuMjA4MyAxMS45NjI0VjE3LjMxMDdDMTkuMjA4MyAxOS44MDgzIDE3LjEzNzcgMjEuODMzMyAxNC41ODQ5IDIxLjgzMzNINS40MTYxOUMyLjg2MjI5IDIxLjgzMzMgMC43OTE2NTYgMTkuODA4MyAwLjc5MTY1NiAxNy4zMTA3VjExLjk2MjRDMC43OTE2NTYgOS45NDQ5NCAyLjE1MjI3IDguMjU1ODMgNC4wMTcwNSA3LjY3MzQyVjYuMDEyM0M0LjAyODA2IDIuNzgyNjUgNi43MDMwNCAwLjE2NjYyNiA5Ljk4MzQ4IDAuMTY2NjI2QzEzLjMwNzkgMC4xNjY2MjYgMTUuOTgyOSAyLjc4MjY1IDE1Ljk4MjkgNi4wMTIzWk0xMC4wMDU1IDIuMDUwNTlDMTIuMjQwMiAyLjA1MDU5IDE0LjA1NjUgMy44MjY5IDE0LjA1NjUgNi4wMTIzVjcuNDM5OEg1Ljk0MzQ4VjUuOTkwNzdDNS45NTQ0OSAzLjgxNjEzIDcuNzcwODQgMi4wNTA1OSAxMC4wMDU1IDIuMDUwNTlaTTEwLjk2MzIgMTUuODI2MUMxMC45NjMyIDE2LjM1MzYgMTAuNTMzOSAxNi43NzM1IDkuOTk0NDggMTYuNzczNUM5LjQ2NjA5IDE2Ljc3MzUgOS4wMzY3NyAxNi4zNTM2IDkuMDM2NzcgMTUuODI2MVYxMy40MzYyQzkuMDM2NzcgMTIuOTE5NSA5LjQ2NjA5IDEyLjQ5OTYgOS45OTQ0OCAxMi40OTk2QzEwLjUzMzkgMTIuNDk5NiAxMC45NjMyIDEyLjkxOTUgMTAuOTYzMiAxMy40MzYyVjE1LjgyNjFaJyBmaWxsPScjMzMzMzMzJy8+Cjwvc3ZnPgo="
                    className="login4112-svg1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login4112-group174449" onClick={()=>history.push(`/change-password`) }>
          <span className="login4112-text6">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Login4112;
