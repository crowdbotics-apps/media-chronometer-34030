import React, { useEffect, useState } from "react"

import { Helmet } from "react-helmet"

import "./current-studies.css"
import { basic_api } from "../api/axios_helper"

const CurrentStudies1111180 = props => {
  const [isLoading, setIsloading] = useState(false)
  const [studies, setStudies] = useState([])
  useEffect(() => {
    getDataList()
  }, [])
  const getDataList = () => {
    setIsloading(true)
    basic_api
      .get("/api/v1/studyid/")
      .then(({ data }) => {
        setIsloading(false)
        setStudies(data)
      })
      .catch(error => {
        console.log(error.response.data)
        setIsloading(false)
        // setDisableFields(false);
      })
  }
  return (
    <div className="current-studies1111180-container">
      <Helmet>
        <title>Currend Study</title>
      </Helmet>
      <div className="current-studies1111180-current-studies1111180">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nODg5JyBoZWlnaHQ9Jzg4OScgdmlld0JveD0nMCAwIDg4OSA4ODknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBIODg5Vjg2NUM4ODkgODc4LjI1NSA4NzguMjU1IDg4OSA4NjUgODg5SDI0QzEwLjc0NTIgODg5IDAgODc4LjI1NSAwIDg2NVYwWicgZmlsbD0nI0Y4RjhGOCcvPgo8L3N2Zz4K"
          alt="Rectangle91111181"
          className="current-studies1111180-image"
        />
        <div className="current-studies1111180-frame2041111182">
          <div className="current-studies1111180-frame1971111183">
            <div className="current-studies1111180-frame1921111184">
              <span className="current-studies1111180-text">sn</span>
            </div>
            <div className="current-studies1111180-frame1951111186">
              <span className="current-studies1111180-text01">Study ID</span>
            </div>
            <div className="current-studies1111180-frame2021111583">
              <span className="current-studies1111180-text02">
                No. of Subjects
              </span>
            </div>
            <div className="current-studies1111180-frame1961111188">
              <span className="current-studies1111180-text03">Date Start</span>
            </div>
            <div className="current-studies1111180-frame1971111190">
              <span className="current-studies1111180-text04">Time Start</span>
            </div>
            <div className="current-studies1111180-frame1981111192">
              <span className="current-studies1111180-text05">Date End</span>
            </div>
            <div className="current-studies1111180-frame2011111198">
              <span className="current-studies1111180-text06">Time End</span>
            </div>
          </div>
          {studies.map((study, id) => (
            <div key={id} className="current-studies1111180-frame2021111200">
              <div className="current-studies1111180-frame1941111201">
                <span className="current-studies1111180-text07">
                  {study.id}
                </span>
              </div>
              <div className="current-studies1111180-frame1961111203">
                <span
                  className="current-studies1111180-text08"
                  style={{ overflow: "hidden" }}
                >
                  {study.study_id}
                </span>
              </div>
              <div className="current-studies1111180-frame2021111585">
                <span className="current-studies1111180-text09">255</span>
              </div>
              <div className="current-studies1111180-frame1971111206">
                <span className="current-studies1111180-text10">
                  29-Jan-2022
                </span>
              </div>
              <div className="current-studies1111180-frame1981111208">
                <span className="current-studies1111180-text11">19.050</span>
              </div>
              <div className="current-studies1111180-frame1991111210">
                <span className="current-studies1111180-text12">
                  29-Jan-2022
                </span>
              </div>
              <div className="current-studies1111180-frame2011111216">
                <span className="current-studies1111180-text13">
                  19.000
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " "
                    }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQ0MCcgaGVpZ2h0PSc3Micgdmlld0JveD0nMCAwIDE0NDAgNzInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTFfMTExXzE0ODgnIGZpbGw9J3doaXRlJz4KPHBhdGggZD0nTTAgMEgxNDQwVjcySDBWMFonLz4KPC9tYXNrPgo8cGF0aCBkPSdNMCAwSDE0NDBWNzJIMFYwWicgZmlsbD0nd2hpdGUnIGZpbGwtb3BhY2l0eT0nMC41Jy8+CjxwYXRoIGQ9J00xNDQwIDcxSDBWNzNIMTQ0MFY3MVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuMicgbWFzaz0ndXJsKCNwYXRoLTEtaW5zaWRlLTFfMTExXzE0ODgpJy8+Cjwvc3ZnPgo="
          alt="Rectangle71111488"
          className="current-studies1111180-image1"
        />
        <div className="current-studies1111180-group201111500">
          <input
            className="current-studies1111180-text59"
            placeholder="Search by Study ID"
          />
          <div className="current-studies1111180-group191111503">
            <img
              alt="Ellipse31111504"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIHZpZXdCb3g9JzAgMCAzNiAzNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPGNpcmNsZSBjeD0nMTgnIGN5PScxOCcgcj0nMTgnIGZpbGw9JyMyNTc1RkMnLz4KPC9zdmc+Cg=="
              className="current-studies1111180-svg"
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTguMzMzMTcgMTVDOS44MTIzMiAxNC45OTk3IDExLjI0ODggMTQuNTA0NSAxMi40MTQgMTMuNTkzM0wxNi4wNzczIDE3LjI1NjZMMTcuMjU1NyAxNi4wNzgzTDEzLjU5MjMgMTIuNDE1QzE0LjUwNCAxMS4yNDk3IDE0Ljk5OTUgOS44MTI4MiAxNC45OTk4IDguMzMzMjlDMTQuOTk5OCA0LjY1NzQ2IDEyLjAwOSAxLjY2NjYzIDguMzMzMTcgMS42NjY2M0M0LjY1NzM0IDEuNjY2NjMgMS42NjY1IDQuNjU3NDYgMS42NjY1IDguMzMzMjlDMS42NjY1IDEyLjAwOTEgNC42NTczNCAxNSA4LjMzMzE3IDE1Wk04LjMzMzE3IDMuMzMzMjlDMTEuMDkwNyAzLjMzMzI5IDEzLjMzMzIgNS41NzU3OSAxMy4zMzMyIDguMzMzMjlDMTMuMzMzMiAxMS4wOTA4IDExLjA5MDcgMTMuMzMzMyA4LjMzMzE3IDEzLjMzMzNDNS41NzU2NyAxMy4zMzMzIDMuMzMzMTcgMTEuMDkwOCAzLjMzMzE3IDguMzMzMjlDMy4zMzMxNyA1LjU3NTc5IDUuNTc1NjcgMy4zMzMyOSA4LjMzMzE3IDMuMzMzMjlaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K"
              alt="Icon1111505"
              className="current-studies1111180-image5"
            />
          </div>
        </div>
        <div className="current-studies1111180-group301111578">
          <div className="current-studies1111180-group291111506">
            <div className="current-studies1111180-frame1901111507">
              <span className="current-studies1111180-text60">Sort by:</span>
              <div className="current-studies1111180-group221111509">
                <div className="current-studies1111180-group211111511">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMTgnIHZpZXdCb3g9JzAgMCAxOCAxOCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyLjIxOTcgNi45Njk3M0w4Ljk5OTk4IDEwLjE4OTVMNS43ODAyMyA2Ljk2OTczTDQuNzE5NzMgOC4wMzAyM0w4Ljk5OTk4IDEyLjMxMDVMMTMuMjgwMiA4LjAzMDIzTDEyLjIxOTcgNi45Njk3M1onIGZpbGw9JyM0MDQwNDAnLz4KPC9zdmc+Cg=="
                    alt="Icon1111512"
                    className="current-studies1111180-image6"
                  />

                  <select className="current-studies1111180-text61" name="sort">
                    <option value="ascending">Ascending</option>
                    <option value="decending">Decending</option>
                  </select>
                </div>
              </div>
            </div>
            <span className="current-studies1111180-text62">List</span>
          </div>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNzkzJyBoZWlnaHQ9JzEnIHZpZXdCb3g9JzAgMCA3OTMgMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9Jzc5MycgaGVpZ2h0PScxJyBmaWxsPScjRDlEOUQ5Jy8+Cjwvc3ZnPgo="
            alt="Rectangle151111539"
            className="current-studies1111180-image7"
          />
        </div>
      </div>
    </div>
  )
}

export default CurrentStudies1111180
