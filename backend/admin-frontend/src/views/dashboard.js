import React from "react";

import { Helmet } from "react-helmet";
import { Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateStudy1111677 from "./create-study";
import CurrentStudies1111180 from "./current-studies";
import DataView110763 from "./data-view";

import "./dashboard.css";

const Dashboard = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="data-view110763-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="data-view110763-data-view110763">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nODg5JyBoZWlnaHQ9Jzg4OScgdmlld0JveD0nMCAwIDg4OSA4ODknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBIODg5Vjg2NUM4ODkgODc4LjI1NSA4NzguMjU1IDg4OSA4NjUgODg5SDI0QzEwLjc0NTIgODg5IDAgODc4LjI1NSAwIDg2NVYwWicgZmlsbD0nI0Y4RjhGOCcvPgo8L3N2Zz4K"
          alt="Rectangle9110764"
          className="data-view110763-image"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQ0MCcgaGVpZ2h0PSc3Micgdmlld0JveD0nMCAwIDE0NDAgNzInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTFfMTEwXzEwODknIGZpbGw9J3doaXRlJz4KPHBhdGggZD0nTTAgMEgxNDQwVjcySDBWMFonLz4KPC9tYXNrPgo8cGF0aCBkPSdNMCAwSDE0NDBWNzJIMFYwWicgZmlsbD0nd2hpdGUnIGZpbGwtb3BhY2l0eT0nMC41Jy8+CjxwYXRoIGQ9J00xNDQwIDcxSDBWNzNIMTQ0MFY3MVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuMicgbWFzaz0ndXJsKCNwYXRoLTEtaW5zaWRlLTFfMTEwXzEwODkpJy8+Cjwvc3ZnPgo="
          alt="Rectangle71101089"
          className="data-view110763-image17"
        />

        <Switch>
          <Route component={DataView110763} path={path} exact />
          <Route
            component={CurrentStudies1111180}
            path={`${path}/current-studies`}
          />
          <Route component={CreateStudy1111677} path={`${path}/create-study`} />
        </Switch>
        <div className="data-view110763-frame1891101091">
          <NavLink
            to={url}
            activeStyle={{
              backgroundColor: "rgba(37, 117, 252, 1)",
              color: "#fff",
            }}
          >
            <div className="data-view110763-frame1861101092">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTExLjY2NjYgMy41MDAwMkMxMS42NjY2IDIuMjM1MzUgOS41Mjk4MyAxLjE2NjY5IDYuOTk5OTIgMS4xNjY2OUM0LjQ3IDEuMTY2NjkgMi4zMzMyNSAyLjIzNTM1IDIuMzMzMjUgMy41MDAwMlY0LjY2NjY5QzIuMzMzMjUgNS45MzEzNSA0LjQ3IDcuMDAwMDIgNi45OTk5MiA3LjAwMDAyQzkuNTI5ODMgNy4wMDAwMiAxMS42NjY2IDUuOTMxMzUgMTEuNjY2NiA0LjY2NjY5VjMuNTAwMDJaTTYuOTk5OTIgMTEuMDgzNEM0LjQ3IDExLjA4MzQgMi4zMzMyNSAxMC4wMTQ3IDIuMzMzMjUgOC43NTAwMlYxMC41QzIuMzMzMjUgMTEuNzY0NyA0LjQ3IDEyLjgzMzQgNi45OTk5MiAxMi44MzM0QzkuNTI5ODMgMTIuODMzNCAxMS42NjY2IDExLjc2NDcgMTEuNjY2NiAxMC41VjguNzUwMDJDMTEuNjY2NiAxMC4wMTQ3IDkuNTI5ODMgMTEuMDgzNCA2Ljk5OTkyIDExLjA4MzRaJyBmaWxsPSd3aGl0ZScvPgo8cGF0aCBkPSdNMTEuNjY2NiA1LjgzMzMxQzExLjY2NjYgNy4wOTc5OCA5LjUyOTgzIDguMTY2NjUgNi45OTk5MiA4LjE2NjY1QzQuNDcgOC4xNjY2NSAyLjMzMzI1IDcuMDk3OTggMi4zMzMyNSA1LjgzMzMxVjcuNTgzMzFDMi4zMzMyNSA4Ljg0Nzk4IDQuNDcgOS45MTY2NSA2Ljk5OTkyIDkuOTE2NjVDOS41Mjk4MyA5LjkxNjY1IDExLjY2NjYgOC44NDc5OCAxMS42NjY2IDcuNTgzMzFWNS44MzMzMVonIGZpbGw9J3doaXRlJy8+Cjwvc3ZnPgo="
                alt="Icon1101093"
                className="data-view110763-image18"
              />
              <span className="data-view110763-text136">Data View</span>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/current-studies`}
            activeStyle={{
              backgroundColor: "rgba(37, 117, 252, 1)",
              color: "#fff",
            }}
          >
            <div className="data-view110763-frame1871101095">
              <div className="data-view110763-icon1101096">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J000LjgzMzI1IDEuMDQxNjdDNC44MzMyNSAwLjk2NDMxMiA0Ljg2Mzk4IDAuODkwMTI1IDQuOTE4NjggMC44MzU0MjdDNC45NzMzOCAwLjc4MDcyOSA1LjA0NzU2IDAuNzUgNS4xMjQ5MiAwLjc1SDYuMjkxNTlDNi4zNjg5NCAwLjc1IDYuNDQzMTMgMC43ODA3MjkgNi40OTc4MiAwLjgzNTQyN0M2LjU1MjUyIDAuODkwMTI1IDYuNTgzMjUgMC45NjQzMTIgNi41ODMyNSAxLjA0MTY3QzYuNTgzMjUgMS4xMTkwMiA2LjU1MjUyIDEuMTkzMjEgNi40OTc4MiAxLjI0NzkxQzYuNDQzMTMgMS4zMDI2IDYuMzY4OTQgMS4zMzMzMyA2LjI5MTU5IDEuMzMzMzNINS4xMjQ5MkM1LjA0NzU2IDEuMzMzMzMgNC45NzMzOCAxLjMwMjYgNC45MTg2OCAxLjI0NzkxQzQuODYzOTggMS4xOTMyMSA0LjgzMzI1IDEuMTE5MDIgNC44MzMyNSAxLjA0MTY3WicgZmlsbD0nIzQwNDA0MCcvPgo8cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTUuNzA4MzMgMC43NUM1Ljc4NTY5IDAuNzUgNS44NTk4NyAwLjc4MDcyOSA1LjkxNDU3IDAuODM1NDI3QzUuOTY5MjcgMC44OTAxMjUgNiAwLjk2NDMxMiA2IDEuMDQxNjdWMi4yMDgzM0M2IDIuMjg1NjkgNS45NjkyNyAyLjM1OTg3IDUuOTE0NTcgMi40MTQ1N0M1Ljg1OTg3IDIuNDY5MjcgNS43ODU2OSAyLjUgNS43MDgzMyAyLjVDNS42MzA5OCAyLjUgNS41NTY3OSAyLjQ2OTI3IDUuNTAyMDkgMi40MTQ1N0M1LjQ0NzQgMi4zNTk4NyA1LjQxNjY3IDIuMjg1NjkgNS40MTY2NyAyLjIwODMzVjEuMDQxNjdDNS40MTY2NyAwLjk2NDMxMiA1LjQ0NzQgMC44OTAxMjUgNS41MDIwOSAwLjgzNTQyN0M1LjU1Njc5IDAuNzgwNzI5IDUuNjMwOTggMC43NSA1LjcwODMzIDAuNzVaTTEuMDQxNjcgNC44MzMzM0MxLjExOTAyIDQuODMzMzMgMS4xOTMyMSA0Ljg2NDA2IDEuMjQ3OTEgNC45MTg3NkMxLjMwMjYgNC45NzM0NiAxLjMzMzMzIDUuMDQ3NjUgMS4zMzMzMyA1LjEyNVY2LjI5MTY3QzEuMzMzMzMgNi4zNjkwMiAxLjMwMjYgNi40NDMyMSAxLjI0NzkxIDYuNDk3OTFDMS4xOTMyMSA2LjU1MjYgMS4xMTkwMiA2LjU4MzMzIDEuMDQxNjcgNi41ODMzM0MwLjk2NDMxMiA2LjU4MzMzIDAuODkwMTI1IDYuNTUyNiAwLjgzNTQyNyA2LjQ5NzkxQzAuNzgwNzI5IDYuNDQzMjEgMC43NSA2LjM2OTAyIDAuNzUgNi4yOTE2N1Y1LjEyNUMwLjc1IDUuMDQ3NjUgMC43ODA3MjkgNC45NzM0NiAwLjgzNTQyNyA0LjkxODc2QzAuODkwMTI1IDQuODY0MDYgMC45NjQzMTIgNC44MzMzMyAxLjA0MTY3IDQuODMzMzNaJyBmaWxsPScjNDA0MDQwJy8+CjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMC43NSA1LjcwODMxQzAuNzUgNS42MzA5NSAwLjc4MDcyOSA1LjU1Njc3IDAuODM1NDI3IDUuNTAyMDdDMC44OTAxMjUgNS40NDczNyAwLjk2NDMxMiA1LjQxNjY0IDEuMDQxNjcgNS40MTY2NEgyLjIwODMzQzIuMjg1NjkgNS40MTY2NCAyLjM1OTg3IDUuNDQ3MzcgMi40MTQ1NyA1LjUwMjA3QzIuNDY5MjcgNS41NTY3NyAyLjUgNS42MzA5NSAyLjUgNS43MDgzMUMyLjUgNS43ODU2NiAyLjQ2OTI3IDUuODU5ODUgMi40MTQ1NyA1LjkxNDU1QzIuMzU5ODcgNS45NjkyNCAyLjI4NTY5IDUuOTk5OTcgMi4yMDgzMyA1Ljk5OTk3SDEuMDQxNjdDMC45NjQzMTIgNS45OTk5NyAwLjg5MDEyNSA1Ljk2OTI0IDAuODM1NDI3IDUuOTE0NTVDMC43ODA3MjkgNS44NTk4NSAwLjc1IDUuNzg1NjYgMC43NSA1LjcwODMxWk04LjM4OTMzIDEuNzg5NzdDOC40MTY0MiAxLjc2MjY1IDguNDQ4NTkgMS43NDExMyA4LjQ4NCAxLjcyNjQ2QzguNTE5NCAxLjcxMTc4IDguNTU3MzYgMS43MDQyMiA4LjU5NTY5IDEuNzA0MjJDOC42MzQwMiAxLjcwNDIyIDguNjcxOTcgMS43MTE3OCA4LjcwNzM4IDEuNzI2NDZDOC43NDI3OSAxLjc0MTEzIDguNzc0OTUgMS43NjI2NSA4LjgwMjA0IDEuNzg5NzdMOS42MjY4NyAyLjYxNDZDOS42ODE2IDIuNjY5MjkgOS43MTIzNyAyLjc0MzQ4IDkuNzEyMzkgMi44MjA4NUM5LjcxMjQyIDIuODk4MjIgOS42ODE3MSAyLjk3MjQzIDkuNjI3MDIgMy4wMjcxNkM5LjU3MjMzIDMuMDgxODkgOS40OTgxNCAzLjExMjY1IDkuNDIwNzcgMy4xMTI2OEM5LjM0MzQgMy4xMTI3MSA5LjI2OTE5IDMuMDgyIDkuMjE0NDYgMy4wMjczMUw4LjM4OTMzIDIuMjAyMThDOC4zMzQ2NSAyLjE0NzQ5IDguMzAzOTQgMi4wNzMzMSA4LjMwMzk0IDEuOTk1OTdDOC4zMDM5NCAxLjkxODYzIDguMzM0NjUgMS44NDQ0NiA4LjM4OTMzIDEuNzg5NzdaJyBmaWxsPScjNDA0MDQwJy8+CjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMTQyNCAyLjIwMjQ3QzkuMjY4ODMgMi4yNTcxNiA5LjI5OTQ5IDIuMzMxMjcgOS4yOTk0OSAyLjQwODU0QzkuMjk5NDkgMi40ODU4IDkuMjY4ODMgMi41NTk5MiA5LjIxNDI0IDIuNjE0Nkw4LjM4OTQxIDMuNDM5NzJDOC4zMzQ0IDMuNDkyODUgOC4yNjA3MiAzLjUyMjI1IDguMTg0MjUgMy41MjE1OUM4LjEwNzc3IDMuNTIwOTIgOC4wMzQ2MiAzLjQ5MDI1IDcuOTgwNTQgMy40MzYxN0M3LjkyNjQ2IDMuMzgyMDkgNy44OTU3OSAzLjMwODk0IDcuODk1MTIgMy4yMzI0N0M3Ljg5NDQ2IDMuMTU1OTkgNy45MjM4NiAzLjA4MjMyIDcuOTc2OTkgMy4wMjczMUw4LjgwMjExIDIuMjAyMThDOC44NTY4MSAyLjE0NzUgOC45MzA5OCAyLjExNjc5IDkuMDA4MzIgMi4xMTY3OUM5LjA4NTY2IDIuMTE2NzkgOS4xNTk4MyAyLjE0NzUgOS4yMTQ1MyAyLjIwMjE4TDkuMjE0MjQgMi4yMDI0N1pNMy4wMjc0IDEuNzg5NzdDMy4wODIwOCAxLjg0NDQ2IDMuMTEyOCAxLjkxODYzIDMuMTEyOCAxLjk5NTk3QzMuMTEyOCAyLjA3MzMxIDMuMDgyMDggMi4xNDc0OSAzLjAyNzQgMi4yMDIxOEwyLjIwMjI4IDMuMDI3MzFDMi4xNDc1NSAzLjA4MiAyLjA3MzM0IDMuMTEyNzEgMS45OTU5NyAzLjExMjY4QzEuOTE4NiAzLjExMjY1IDEuODQ0NDEgMy4wODE4OSAxLjc4OTcyIDMuMDI3MTZDMS43MzUwMyAyLjk3MjQzIDEuNzA0MzIgMi44OTgyMiAxLjcwNDM1IDIuODIwODVDMS43MDQzNyAyLjc0MzQ4IDEuNzM1MTMgMi42NjkyOSAxLjc4OTg2IDIuNjE0NkwyLjYxNDcgMS43ODk3N0MyLjY0MTc4IDEuNzYyNjUgMi42NzM5NSAxLjc0MTEzIDIuNzA5MzYgMS43MjY0NkMyLjc0NDc3IDEuNzExNzggMi43ODI3MiAxLjcwNDIyIDIuODIxMDUgMS43MDQyMkMyLjg1OTM4IDEuNzA0MjIgMi44OTczMyAxLjcxMTc4IDIuOTMyNzQgMS43MjY0NkMyLjk2ODE1IDEuNzQxMTMgMy4wMDAzMiAxLjc2MjY1IDMuMDI3NCAxLjc4OTc3WicgZmlsbD0nIzQwNDA0MCcvPgo8cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIuMjAyNTkgMi4yMDI1NkMyLjI1NzI3IDIuMTQ3OTcgMi4zMzEzOCAyLjExNzMxIDIuNDA4NjUgMi4xMTczMUMyLjQ4NTkyIDIuMTE3MzEgMi41NjAwMyAyLjE0Nzk3IDIuNjE0NzIgMi4yMDI1NkwzLjQzOTg0IDMuMDI3MzlDMy40Njc3IDMuMDU0MyAzLjQ4OTkyIDMuMDg2NDggMy41MDUyIDMuMTIyMDdDMy41MjA0OSAzLjE1NzY1IDMuNTI4NTQgMy4xOTU5MiAzLjUyODg3IDMuMjM0NjVDMy41MjkyMSAzLjI3MzM4IDMuNTIxODMgMy4zMTE3OSAzLjUwNzE2IDMuMzQ3NjNDMy40OTI1IDMuMzgzNDcgMy40NzA4NCAzLjQxNjA0IDMuNDQzNDYgMy40NDM0M0MzLjQxNjA3IDMuNDcwODEgMy4zODM1MSAzLjQ5MjQ3IDMuMzQ3NjYgMy41MDcxM0MzLjMxMTgyIDMuNTIxOCAzLjI3MzQxIDMuNTI5MTggMy4yMzQ2OCAzLjUyODg0QzMuMTk1OTUgMy41Mjg1IDMuMTU3NjggMy41MjA0NiAzLjEyMjEgMy41MDUxN0MzLjA4NjUxIDMuNDg5ODkgMy4wNTQzMyAzLjQ2NzY3IDMuMDI3NDIgMy40Mzk4MUwyLjIwMjMgMi42MTQ2OEMyLjE0NzYyIDIuNTU5OTkgMi4xMTY5IDIuNDg1ODIgMi4xMTY5IDIuNDA4NDhDMi4xMTY5IDIuMzMxMTQgMi4xNDc2MiAyLjI1Njk2IDIuMjAyMyAyLjIwMjI3TDIuMjAyNTkgMi4yMDI1NlpNMy4wMjc0MiA5LjYyNjk0QzMuMDAwMzQgOS42NTQwNSAyLjk2ODE3IDkuNjc1NTcgMi45MzI3NiA5LjY5MDI0QzIuODk3MzUgOS43MDQ5MiAyLjg1OTQgOS43MTI0OCAyLjgyMTA3IDkuNzEyNDhDMi43ODI3NCA5LjcxMjQ4IDIuNzQ0NzkgOS43MDQ5MiAyLjcwOTM4IDkuNjkwMjRDMi42NzM5NyA5LjY3NTU3IDIuNjQxOCA5LjY1NDA1IDIuNjE0NzIgOS42MjY5NEwxLjc4OTg4IDguODAyMUMxLjczNjc1IDguNzQ3MDkgMS43MDczNSA4LjY3MzQyIDEuNzA4MDIgOC41OTY5NEMxLjcwODY4IDguNTIwNDcgMS43MzkzNiA4LjQ0NzMxIDEuNzkzNDQgOC4zOTMyNEMxLjg0NzUxIDguMzM5MTYgMS45MjA2NyA4LjMwODQ5IDEuOTk3MTQgOC4zMDc4MkMyLjA3MzYxIDguMzA3MTYgMi4xNDcyOSA4LjMzNjU2IDIuMjAyMyA4LjM4OTY4TDMuMDI3NDIgOS4yMTQ1MkMzLjA4MjEgOS4yNjkyMSAzLjExMjgyIDkuMzQzMzkgMy4xMTI4MiA5LjQyMDczQzMuMTEyODIgOS40OTgwNyAzLjA4MjEgOS41NzIyNCAzLjAyNzQyIDkuNjI2OTRaJyBmaWxsPScjNDA0MDQwJy8+CjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMi4yMDI0NCA5LjIxNDIyQzIuMTQ3ODUgOS4xNTk1NCAyLjExNzE5IDkuMDg1NDMgMi4xMTcxOSA5LjAwODE2QzIuMTE3MTkgOC45MzA4OSAyLjE0Nzg1IDguODU2NzggMi4yMDI0NCA4LjgwMjFMMy4wMjcyNyA3Ljk3Njk3QzMuMDgyIDcuOTIyMjggMy4xNTYyMSA3Ljg5MTU3IDMuMjMzNTggNy44OTE2QzMuMzEwOTUgNy44OTE2MyAzLjM4NTE0IDcuOTIyMzkgMy40Mzk4MyA3Ljk3NzEyQzMuNDk0NTIgOC4wMzE4NSAzLjUyNTIzIDguMTA2MDYgMy41MjUyMSA4LjE4MzQzQzMuNTI1MTggOC4yNjA4IDMuNDk0NDIgOC4zMzQ5OSAzLjQzOTY5IDguMzg5NjhMMi42MTQ1NiA5LjIxNDUxQzIuNTU5ODcgOS4yNjkxOSAyLjQ4NTY5IDkuMjk5OTEgMi40MDgzNSA5LjI5OTkxQzIuMzMxMDIgOS4yOTk5MSAyLjI1Njg0IDkuMjY5MTkgMi4yMDIxNSA5LjIxNDUxTDIuMjAyNDQgOS4yMTQyMlonIGZpbGw9JyM0MDQwNDAnLz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J001LjU0OSA5LjIwNDg3QzUuNDYwOTUgOC45MjI3NiA1LjQxNjMgOC42Mjg5MSA1LjQxNjU5IDguMzMzMzdDNS40MTY1OSA2LjcyMjUgNi43MjIzOCA1LjQxNjcxIDguMzMzMjUgNS40MTY3MUM4LjYzNjU5IDUuNDE2NzEgOC45Mjk0MiA1LjQ2MzA4IDkuMjA0NzUgNS41NDkxMkM5LjEyMTMzIDMuNjkwMDQgNy41ODc3NSAyLjIwODM3IDUuNzA4MjUgMi4yMDgzN0MzLjc3NTM4IDIuMjA4MzcgMi4yMDgyNSAzLjc3NTUgMi4yMDgyNSA1LjcwODM3QzIuMjA4MjUgNy41ODc4NyAzLjY4OTkyIDkuMTIxNDYgNS41NDkgOS4yMDQ4N1pNNC41NDE1OSA1LjcwODM3QzQuNzczNjUgNS43MDgzNyA0Ljk5NjIxIDUuNjE2MTkgNS4xNjAzIDUuNDUyMDlDNS4zMjQ0IDUuMjg4IDUuNDE2NTkgNS4wNjU0NCA1LjQxNjU5IDQuODMzMzdDNS40MTY1OSA0LjYwMTMxIDUuMzI0NCA0LjM3ODc1IDUuMTYwMyA0LjIxNDY2QzQuOTk2MjEgNC4wNTA1NiA0Ljc3MzY1IDMuOTU4MzcgNC41NDE1OSAzLjk1ODM3QzQuMzA5NTIgMy45NTgzNyA0LjA4Njk2IDQuMDUwNTYgMy45MjI4NyA0LjIxNDY2QzMuNzU4NzcgNC4zNzg3NSAzLjY2NjU5IDQuNjAxMzEgMy42NjY1OSA0LjgzMzM3QzMuNjY2NTkgNS4wNjU0NCAzLjc1ODc3IDUuMjg4IDMuOTIyODcgNS40NTIwOUM0LjA4Njk2IDUuNjE2MTkgNC4zMDk1MiA1LjcwODM3IDQuNTQxNTkgNS43MDgzN1onIGZpbGw9JyM0MDQwNDAnLz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J004LjMzMzMzIDYuNTgzMzNDNy44NjkyIDYuNTgzMzMgNy40MjQwOCA2Ljc2NzcxIDcuMDk1OSA3LjA5NTlDNi43Njc3MSA3LjQyNDA4IDYuNTgzMzMgNy44NjkyIDYuNTgzMzMgOC4zMzMzM0M2LjU4MzMzIDguNzk3NDYgNi43Njc3MSA5LjI0MjU4IDcuMDk1OSA5LjU3MDc3QzcuNDI0MDggOS44OTg5NiA3Ljg2OTIgMTAuMDgzMyA4LjMzMzMzIDEwLjA4MzNDOC43OTc0NiAxMC4wODMzIDkuMjQyNTggOS44OTg5NiA5LjU3MDc3IDkuNTcwNzdDOS44OTg5NiA5LjI0MjU4IDEwLjA4MzMgOC43OTc0NiAxMC4wODMzIDguMzMzMzNDMTAuMDgzMyA3Ljg2OTIgOS44OTg5NiA3LjQyNDA4IDkuNTcwNzcgNy4wOTU5QzkuMjQyNTggNi43Njc3MSA4Ljc5NzQ2IDYuNTgzMzMgOC4zMzMzMyA2LjU4MzMzWk02IDguMzMzMzNDNiA3LjcxNDQ5IDYuMjQ1ODMgNy4xMjEgNi42ODM0MiA2LjY4MzQyQzcuMTIxIDYuMjQ1ODMgNy43MTQ0OSA2IDguMzMzMzMgNkM4Ljk1MjE3IDYgOS41NDU2NiA2LjI0NTgzIDkuOTgzMjUgNi42ODM0MkMxMC40MjA4IDcuMTIxIDEwLjY2NjcgNy43MTQ0OSAxMC42NjY3IDguMzMzMzNDMTAuNjY2NyA4Ljk1MjE3IDEwLjQyMDggOS41NDU2NiA5Ljk4MzI1IDkuOTgzMjVDOS41NDU2NiAxMC40MjA4IDguOTUyMTcgMTAuNjY2NyA4LjMzMzMzIDEwLjY2NjdDNy43MTQ0OSAxMC42NjY3IDcuMTIxIDEwLjQyMDggNi42ODM0MiA5Ljk4MzI1QzYuMjQ1ODMgOS41NDU2NiA2IDguOTUyMTcgNiA4LjMzMzMzWicgZmlsbD0nIzQwNDA0MCcvPgo8cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTkuNTg1NCA5LjU4NTUyQzkuNjQwMDkgOS41MzA4NCA5LjcxNDI2IDkuNTAwMTIgOS43OTE2IDkuNTAwMTJDOS44Njg5NCA5LjUwMDEyIDkuOTQzMTIgOS41MzA4NCA5Ljk5NzgxIDkuNTg1NTJMMTEuNDU2MSAxMS4wNDM5QzExLjUwOTMgMTEuMDk4OSAxMS41Mzg3IDExLjE3MjUgMTEuNTM4IDExLjI0OUMxMS41MzczIDExLjMyNTUgMTEuNTA2NyAxMS4zOTg2IDExLjQ1MjYgMTEuNDUyN0MxMS4zOTg1IDExLjUwNjggMTEuMzI1NCAxMS41Mzc1IDExLjI0ODkgMTEuNTM4MUMxMS4xNzI0IDExLjUzODggMTEuMDk4NyAxMS41MDk0IDExLjA0MzcgMTEuNDU2M0w5LjU4NTQgOS45OTc5M0M5LjUzMDcyIDkuOTQzMjQgOS41IDkuODY5MDcgOS41IDkuNzkxNzNDOS41IDkuNzE0MzkgOS41MzA3MiA5LjY0MDIxIDkuNTg1NCA5LjU4NTUyWicgZmlsbD0nIzQwNDA0MCcvPgo8L3N2Zz4K"
                  alt="GroupI11010968743"
                  className="data-view110763-image19"
                />
              </div>
              <span className="data-view110763-text137">Current Studies</span>
            </div>
          </NavLink>
          <NavLink
            to={`${url}/create-study`}
            activeStyle={{
              backgroundColor: "rgba(37, 117, 252, 1)",
              color: "#fff",
            }}
          >
            <div className="data-view110763-frame1881101098">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIuMzMzNDEgMTIuODMzM0g5LjMzMzQxVjExLjY2NjZIMi4zMzM0MVY0LjY2NjYzSDEuMTY2NzVWMTEuNjY2NkMxLjE2Njc1IDEyLjMxIDEuNjkgMTIuODMzMyAyLjMzMzQxIDEyLjgzMzNaJyBmaWxsPScjNDA0MDQwJy8+CjxwYXRoIGQ9J00xMS42NjY3IDEuMTY2NjNINC42NjY2N0M0LjAyMzI1IDEuMTY2NjMgMy41IDEuNjg5ODggMy41IDIuMzMzMjlWOS4zMzMyOUMzLjUgOS45NzY3MSA0LjAyMzI1IDEwLjUgNC42NjY2NyAxMC41SDExLjY2NjdDMTIuMzEwMSAxMC41IDEyLjgzMzMgOS45NzY3MSAxMi44MzMzIDkuMzMzMjlWMi4zMzMyOUMxMi44MzMzIDEuNjg5ODggMTIuMzEwMSAxLjE2NjYzIDExLjY2NjcgMS4xNjY2M1pNMTAuNSA2LjQxNjYzSDguNzVWOC4xNjY2M0g3LjU4MzMzVjYuNDE2NjNINS44MzMzM1Y1LjI0OTk2SDcuNTgzMzNWMy40OTk5Nkg4Ljc1VjUuMjQ5OTZIMTAuNVY2LjQxNjYzWicgZmlsbD0nIzQwNDA0MCcvPgo8L3N2Zz4K"
                alt="Icon1101099"
                className="data-view110763-image20"
              />
              <span className="data-view110763-text138">Create New Study</span>
            </div>
          </NavLink>
        </div>

        {/* <div className="data-view110763-frame204110765">
          <div className="data-view110763-frame197110766">
            <div className="data-view110763-frame192110767">
              <span className="data-view110763-text">Subject ID</span>
            </div>
            <div className="data-view110763-frame195110769">
              <span className="data-view110763-text001">Study ID</span>
            </div>
            <div className="data-view110763-frame196110771">
              <span className="data-view110763-text002">date_start</span>
            </div>
            <div className="data-view110763-frame197110773">
              <span className="data-view110763-text003">time_start</span>
            </div>
            <div className="data-view110763-frame198110775">
              <span className="data-view110763-text004">date_end</span>
            </div>
            <div className="data-view110763-frame199110777">
              <span className="data-view110763-text005">time_end</span>
            </div>
            <div className="data-view110763-frame200110779">
              <span className="data-view110763-text006">content_title</span>
            </div>
            <div className="data-view110763-frame201110781">
              <span className="data-view110763-text007">content_type</span>
            </div>
          </div>
          <div className="data-view110763-frame202110783">
            <div className="data-view110763-frame194110784">
              <span className="data-view110763-text008">#123678</span>
            </div>
            <div className="data-view110763-frame196110786">
              <span className="data-view110763-text009">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110788"
                className="data-view110763-image01"
              />
            </div>
            <div className="data-view110763-frame197110789">
              <span className="data-view110763-text010">8113</span>
            </div>
            <div className="data-view110763-frame198110791">
              <span className="data-view110763-text011">19.050</span>
            </div>
            <div className="data-view110763-frame199110793">
              <span className="data-view110763-text012">8113</span>
            </div>
            <div className="data-view110763-frame200110795">
              <span className="data-view110763-text013">19.062</span>
            </div>
            <div className="data-view110763-frame200110797">
              <span className="data-view110763-text014">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110799">
              <span className="data-view110763-text015">2</span>
            </div>
          </div>
          <div className="data-view110763-frame203110801">
            <div className="data-view110763-frame194110802">
              <span className="data-view110763-text016">#123678</span>
            </div>
            <div className="data-view110763-frame196110804">
              <span className="data-view110763-text017">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110806"
                className="data-view110763-image02"
              />
            </div>
            <div className="data-view110763-frame197110807">
              <span className="data-view110763-text018">8113</span>
            </div>
            <div className="data-view110763-frame198110809">
              <span className="data-view110763-text019">19.050</span>
            </div>
            <div className="data-view110763-frame199110811">
              <span className="data-view110763-text020">8113</span>
            </div>
            <div className="data-view110763-frame200110813">
              <span className="data-view110763-text021">19.062</span>
            </div>
            <div className="data-view110763-frame200110815">
              <span className="data-view110763-text022">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110817">
              <span className="data-view110763-text023">2</span>
            </div>
          </div>
          <div className="data-view110763-frame204110819">
            <div className="data-view110763-frame194110820">
              <span className="data-view110763-text024">#123678</span>
            </div>
            <div className="data-view110763-frame196110822">
              <span className="data-view110763-text025">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110824"
                className="data-view110763-image03"
              />
            </div>
            <div className="data-view110763-frame197110825">
              <span className="data-view110763-text026">8113</span>
            </div>
            <div className="data-view110763-frame198110827">
              <span className="data-view110763-text027">19.050</span>
            </div>
            <div className="data-view110763-frame199110829">
              <span className="data-view110763-text028">8113</span>
            </div>
            <div className="data-view110763-frame200110831">
              <span className="data-view110763-text029">19.062</span>
            </div>
            <div className="data-view110763-frame200110833">
              <span className="data-view110763-text030">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110835">
              <span className="data-view110763-text031">2</span>
            </div>
          </div>
          <div className="data-view110763-frame205110837">
            <div className="data-view110763-frame194110838">
              <span className="data-view110763-text032">#123678</span>
            </div>
            <div className="data-view110763-frame196110840">
              <span className="data-view110763-text033">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110842"
                className="data-view110763-image04"
              />
            </div>
            <div className="data-view110763-frame197110843">
              <span className="data-view110763-text034">8113</span>
            </div>
            <div className="data-view110763-frame198110845">
              <span className="data-view110763-text035">19.050</span>
            </div>
            <div className="data-view110763-frame199110847">
              <span className="data-view110763-text036">8113</span>
            </div>
            <div className="data-view110763-frame200110849">
              <span className="data-view110763-text037">19.062</span>
            </div>
            <div className="data-view110763-frame200110851">
              <span className="data-view110763-text038">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110853">
              <span className="data-view110763-text039">2</span>
            </div>
          </div>
          <div className="data-view110763-frame206110855">
            <div className="data-view110763-frame194110856">
              <span className="data-view110763-text040">#123678</span>
            </div>
            <div className="data-view110763-frame196110858">
              <span className="data-view110763-text041">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110860"
                className="data-view110763-image05"
              />
            </div>
            <div className="data-view110763-frame197110861">
              <span className="data-view110763-text042">8113</span>
            </div>
            <div className="data-view110763-frame198110863">
              <span className="data-view110763-text043">19.050</span>
            </div>
            <div className="data-view110763-frame199110865">
              <span className="data-view110763-text044">8113</span>
            </div>
            <div className="data-view110763-frame200110867">
              <span className="data-view110763-text045">19.062</span>
            </div>
            <div className="data-view110763-frame200110869">
              <span className="data-view110763-text046">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110871">
              <span className="data-view110763-text047">2</span>
            </div>
          </div>
          <div className="data-view110763-frame207110873">
            <div className="data-view110763-frame194110874">
              <span className="data-view110763-text048">#123678</span>
            </div>
            <div className="data-view110763-frame196110876">
              <span className="data-view110763-text049">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110878"
                className="data-view110763-image06"
              />
            </div>
            <div className="data-view110763-frame197110879">
              <span className="data-view110763-text050">8113</span>
            </div>
            <div className="data-view110763-frame198110881">
              <span className="data-view110763-text051">19.050</span>
            </div>
            <div className="data-view110763-frame199110883">
              <span className="data-view110763-text052">8113</span>
            </div>
            <div className="data-view110763-frame200110885">
              <span className="data-view110763-text053">19.062</span>
            </div>
            <div className="data-view110763-frame200110887">
              <span className="data-view110763-text054">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110889">
              <span className="data-view110763-text055">2</span>
            </div>
          </div>
          <div className="data-view110763-frame208110891">
            <div className="data-view110763-frame194110892">
              <span className="data-view110763-text056">#123678</span>
            </div>
            <div className="data-view110763-frame196110894">
              <span className="data-view110763-text057">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110896"
                className="data-view110763-image07"
              />
            </div>
            <div className="data-view110763-frame197110897">
              <span className="data-view110763-text058">8113</span>
            </div>
            <div className="data-view110763-frame198110899">
              <span className="data-view110763-text059">19.050</span>
            </div>
            <div className="data-view110763-frame199110901">
              <span className="data-view110763-text060">8113</span>
            </div>
            <div className="data-view110763-frame200110903">
              <span className="data-view110763-text061">19.062</span>
            </div>
            <div className="data-view110763-frame200110905">
              <span className="data-view110763-text062">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110907">
              <span className="data-view110763-text063">2</span>
            </div>
          </div>
          <div className="data-view110763-frame209110909">
            <div className="data-view110763-frame194110910">
              <span className="data-view110763-text064">#123678</span>
            </div>
            <div className="data-view110763-frame196110912">
              <span className="data-view110763-text065">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110914"
                className="data-view110763-image08"
              />
            </div>
            <div className="data-view110763-frame197110915">
              <span className="data-view110763-text066">8113</span>
            </div>
            <div className="data-view110763-frame198110917">
              <span className="data-view110763-text067">19.050</span>
            </div>
            <div className="data-view110763-frame199110919">
              <span className="data-view110763-text068">8113</span>
            </div>
            <div className="data-view110763-frame200110921">
              <span className="data-view110763-text069">19.062</span>
            </div>
            <div className="data-view110763-frame200110923">
              <span className="data-view110763-text070">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110925">
              <span className="data-view110763-text071">2</span>
            </div>
          </div>
          <div className="data-view110763-frame210110927">
            <div className="data-view110763-frame194110928">
              <span className="data-view110763-text072">#123678</span>
            </div>
            <div className="data-view110763-frame196110930">
              <span className="data-view110763-text073">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110932"
                className="data-view110763-image09"
              />
            </div>
            <div className="data-view110763-frame197110933">
              <span className="data-view110763-text074">8113</span>
            </div>
            <div className="data-view110763-frame198110935">
              <span className="data-view110763-text075">19.050</span>
            </div>
            <div className="data-view110763-frame199110937">
              <span className="data-view110763-text076">8113</span>
            </div>
            <div className="data-view110763-frame200110939">
              <span className="data-view110763-text077">19.062</span>
            </div>
            <div className="data-view110763-frame200110941">
              <span className="data-view110763-text078">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110943">
              <span className="data-view110763-text079">2</span>
            </div>
          </div>
          <div className="data-view110763-frame211110945">
            <div className="data-view110763-frame194110946">
              <span className="data-view110763-text080">#123678</span>
            </div>
            <div className="data-view110763-frame196110948">
              <span className="data-view110763-text081">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110950"
                className="data-view110763-image10"
              />
            </div>
            <div className="data-view110763-frame197110951">
              <span className="data-view110763-text082">8113</span>
            </div>
            <div className="data-view110763-frame198110953">
              <span className="data-view110763-text083">19.050</span>
            </div>
            <div className="data-view110763-frame199110955">
              <span className="data-view110763-text084">8113</span>
            </div>
            <div className="data-view110763-frame200110957">
              <span className="data-view110763-text085">19.062</span>
            </div>
            <div className="data-view110763-frame200110959">
              <span className="data-view110763-text086">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110961">
              <span className="data-view110763-text087">2</span>
            </div>
          </div>
          <div className="data-view110763-frame212110963">
            <div className="data-view110763-frame194110964">
              <span className="data-view110763-text088">#123678</span>
            </div>
            <div className="data-view110763-frame196110966">
              <span className="data-view110763-text089">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110968"
                className="data-view110763-image11"
              />
            </div>
            <div className="data-view110763-frame197110969">
              <span className="data-view110763-text090">8113</span>
            </div>
            <div className="data-view110763-frame198110971">
              <span className="data-view110763-text091">19.050</span>
            </div>
            <div className="data-view110763-frame199110973">
              <span className="data-view110763-text092">8113</span>
            </div>
            <div className="data-view110763-frame200110975">
              <span className="data-view110763-text093">19.062</span>
            </div>
            <div className="data-view110763-frame200110977">
              <span className="data-view110763-text094">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110979">
              <span className="data-view110763-text095">2</span>
            </div>
          </div>
          <div className="data-view110763-frame213110981">
            <div className="data-view110763-frame194110982">
              <span className="data-view110763-text096">#123678</span>
            </div>
            <div className="data-view110763-frame196110984">
              <span className="data-view110763-text097">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon110986"
                className="data-view110763-image12"
              />
            </div>
            <div className="data-view110763-frame197110987">
              <span className="data-view110763-text098">8113</span>
            </div>
            <div className="data-view110763-frame198110989">
              <span className="data-view110763-text099">19.050</span>
            </div>
            <div className="data-view110763-frame199110991">
              <span className="data-view110763-text100">8113</span>
            </div>
            <div className="data-view110763-frame200110993">
              <span className="data-view110763-text101">19.062</span>
            </div>
            <div className="data-view110763-frame200110995">
              <span className="data-view110763-text102">WhatsApp</span>
            </div>
            <div className="data-view110763-frame201110997">
              <span className="data-view110763-text103">2</span>
            </div>
          </div>
          <div className="data-view110763-frame214110999">
            <div className="data-view110763-frame1941101000">
              <span className="data-view110763-text104">#123678</span>
            </div>
            <div className="data-view110763-frame1961101002">
              <span className="data-view110763-text105">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon1101004"
                className="data-view110763-image13"
              />
            </div>
            <div className="data-view110763-frame1971101005">
              <span className="data-view110763-text106">8113</span>
            </div>
            <div className="data-view110763-frame1981101007">
              <span className="data-view110763-text107">19.050</span>
            </div>
            <div className="data-view110763-frame1991101009">
              <span className="data-view110763-text108">8113</span>
            </div>
            <div className="data-view110763-frame2001101011">
              <span className="data-view110763-text109">19.062</span>
            </div>
            <div className="data-view110763-frame2001101013">
              <span className="data-view110763-text110">WhatsApp</span>
            </div>
            <div className="data-view110763-frame2011101015">
              <span className="data-view110763-text111">2</span>
            </div>
          </div>
          <div className="data-view110763-frame2151101017">
            <div className="data-view110763-frame1941101018">
              <span className="data-view110763-text112">#123678</span>
            </div>
            <div className="data-view110763-frame1961101020">
              <span className="data-view110763-text113">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon1101022"
                className="data-view110763-image14"
              />
            </div>
            <div className="data-view110763-frame1971101023">
              <span className="data-view110763-text114">8113</span>
            </div>
            <div className="data-view110763-frame1981101025">
              <span className="data-view110763-text115">19.050</span>
            </div>
            <div className="data-view110763-frame1991101027">
              <span className="data-view110763-text116">8113</span>
            </div>
            <div className="data-view110763-frame2001101029">
              <span className="data-view110763-text117">19.062</span>
            </div>
            <div className="data-view110763-frame2001101031">
              <span className="data-view110763-text118">WhatsApp</span>
            </div>
            <div className="data-view110763-frame2011101033">
              <span className="data-view110763-text119">2</span>
            </div>
          </div>
          <div className="data-view110763-frame2161101035">
            <div className="data-view110763-frame1941101036">
              <span className="data-view110763-text120">#123678</span>
            </div>
            <div className="data-view110763-frame1961101038">
              <span className="data-view110763-text121">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon1101040"
                className="data-view110763-image15"
              />
            </div>
            <div className="data-view110763-frame1971101041">
              <span className="data-view110763-text122">8113</span>
            </div>
            <div className="data-view110763-frame1981101043">
              <span className="data-view110763-text123">19.050</span>
            </div>
            <div className="data-view110763-frame1991101045">
              <span className="data-view110763-text124">8113</span>
            </div>
            <div className="data-view110763-frame2001101047">
              <span className="data-view110763-text125">19.062</span>
            </div>
            <div className="data-view110763-frame2001101049">
              <span className="data-view110763-text126">WhatsApp</span>
            </div>
            <div className="data-view110763-frame2011101051">
              <span className="data-view110763-text127">2</span>
            </div>
          </div>
          <div className="data-view110763-frame2171101053">
            <div className="data-view110763-frame1941101054">
              <span className="data-view110763-text128">#123678</span>
            </div>
            <div className="data-view110763-frame1961101056">
              <span className="data-view110763-text129">#123678</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                alt="Icon1101058"
                className="data-view110763-image16"
              />
            </div>
            <div className="data-view110763-frame1971101059">
              <span className="data-view110763-text130">8113</span>
            </div>
            <div className="data-view110763-frame1981101061">
              <span className="data-view110763-text131">19.050</span>
            </div>
            <div className="data-view110763-frame1991101063">
              <span className="data-view110763-text132">8113</span>
            </div>
            <div className="data-view110763-frame2001101065">
              <span className="data-view110763-text133">19.062</span>
            </div>
            <div className="data-view110763-frame2001101067">
              <span className="data-view110763-text134">WhatsApp</span>
            </div>
            <div className="data-view110763-frame2011101069">
              <span className="data-view110763-text135">2</span>
            </div>
          </div>
        </div> */}
        {/* <div className="data-view110763-group201101101">
          <span className="data-view110763-text139">
            Search by Subject ID or Study ID
          </span>
          <div className="data-view110763-group191101103">
            <img
              alt="Ellipse31101104"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHZpZXdCb3g9JzAgMCAzNiAzNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGNpcmNsZSBjeD0nMTgnIGN5PScxOCcgcj0nMTgnIGZpbGw9JyMyNTc1RkMnLz4KPC9zdmc+Cg=="
              className="data-view110763-svg"
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTguMzMzNDEgMTVDOS44MTI1NiAxNC45OTk3IDExLjI0OTEgMTQuNTA0NSAxMi40MTQyIDEzLjU5MzNMMTYuMDc3NiAxNy4yNTY2TDE3LjI1NTkgMTYuMDc4M0wxMy41OTI2IDEyLjQxNUMxNC41MDQyIDExLjI0OTcgMTQuOTk5NyA5LjgxMjgyIDE1LjAwMDEgOC4zMzMyOUMxNS4wMDAxIDQuNjU3NDYgMTIuMDA5MiAxLjY2NjYzIDguMzMzNDEgMS42NjY2M0M0LjY1NzU4IDEuNjY2NjMgMS42NjY3NSA0LjY1NzQ2IDEuNjY2NzUgOC4zMzMyOUMxLjY2Njc1IDEyLjAwOTEgNC42NTc1OCAxNSA4LjMzMzQxIDE1Wk04LjMzMzQxIDMuMzMzMjlDMTEuMDkwOSAzLjMzMzI5IDEzLjMzMzQgNS41NzU3OSAxMy4zMzM0IDguMzMzMjlDMTMuMzMzNCAxMS4wOTA4IDExLjA5MDkgMTMuMzMzMyA4LjMzMzQxIDEzLjMzMzNDNS41NzU5MSAxMy4zMzMzIDMuMzMzNDEgMTEuMDkwOCAzLjMzMzQxIDguMzMzMjlDMy4zMzM0MSA1LjU3NTc5IDUuNTc1OTEgMy4zMzMyOSA4LjMzMzQxIDMuMzMzMjlaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K"
              alt="Icon1101105"
              className="data-view110763-image21"
            />
          </div>
        </div>
        <div className="data-view110763-group291101106">
          <div className="data-view110763-frame1901101107">
            <span className="data-view110763-text140">Sort by:</span>
            <div className="data-view110763-group221101109">
              <div className="data-view110763-group211101111">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMTgnIHZpZXdCb3g9JzAgMCAxOCAxOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyLjIxOTcgNi45Njk3M0w4Ljk5OTk4IDEwLjE4OTVMNS43ODAyMyA2Ljk2OTczTDQuNzE5NzMgOC4wMzAyM0w4Ljk5OTk4IDEyLjMxMDVMMTMuMjgwMiA4LjAzMDIzTDEyLjIxOTcgNi45Njk3M1onIGZpbGw9JyM0MDQwNDAnLz4KPC9zdmc+Cg=="
                  alt="Icon1101112"
                  className="data-view110763-image22"
                />
                <span className="data-view110763-text141">Ascending</span>
              </div>
            </div>
          </div>
          <span className="data-view110763-text142">List</span>
        </div>
        <div className="data-view110763-group231101115">
          <span className="data-view110763-text143">Filter By:</span>
          <div className="data-view110763-group221101117">
            <div className="data-view110763-group211101119">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMTgnIHZpZXdCb3g9JzAgMCAxOCAxOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyLjIxOTcgNi45Njk3M0w4Ljk5OTk4IDEwLjE4OTVMNS43ODAyMyA2Ljk2OTczTDQuNzE5NzMgOC4wMzAyM0w4Ljk5OTk4IDEyLjMxMDVMMTMuMjgwMiA4LjAzMDIzTDEyLjIxOTcgNi45Njk3M1onIGZpbGw9JyM0MDQwNDAnLz4KPC9zdmc+Cg=="
                alt="Icon1101120"
                className="data-view110763-image23"
              />
              <span className="data-view110763-text144">Categories</span>
            </div>
          </div>
        </div>
        <div className="data-view110763-frame1911101122">
          <div className="data-view110763-group241101123">
            <span className="data-view110763-text145">Category 01</span>
          </div>
          <div className="data-view110763-group251101126">
            <span className="data-view110763-text146">Category 01</span>
          </div>
          <div className="data-view110763-group261101129">
            <span className="data-view110763-text147">Category 01</span>
          </div>
          <div className="data-view110763-group271101132">
            <span className="data-view110763-text148">Category 01</span>
          </div>
          <div className="data-view110763-group281101135">
            <span className="data-view110763-text149">Category 01</span>
          </div>
          <span className="data-view110763-text150">Clear Filters</span>
        </div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNzkzJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA3OTMgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9Jzc5MycgaGVpZ2h0PScxJyBmaWxsPScjRDlEOUQ5Jy8+Cjwvc3ZnPgo="
          alt="Rectangle151101139"
          className="data-view110763-image24"
        />
        <div className="data-view110763-scrollbar1101140">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMzA0JyB2aWV3Qm94PScwIDAgMTIgMzA0JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nMzA0JyBmaWxsPScjRDlEOUQ5Jy8+Cjwvc3ZnPgo="
            alt="Rectangle171101142"
            className="data-view110763-image25"
          />
        </div>
        <div className="data-view110763-frame2191111178">
          <span className="data-view110763-text151">Export as CSV</span>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
