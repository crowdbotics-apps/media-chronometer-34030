import React from "react"
import { useState, useEffect } from "react"

import { Helmet } from "react-helmet"
import { main_api } from "../api/axios_helper"
import { CSVLink } from "react-csv"

import "./data-view.css"

const DataView110763 = props => {
  const [isLoading, setIsloading] = useState(false)
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    getDataList()
  }, [])
  const getDataList = () => {
    setIsloading(true)
    main_api
      .get("/api/v1/admin_datalist/")
      .then(({ data }) => {
        setIsloading(false)
        setDataList(data)
      })
      .catch(error => {
        console.log(error.response.data)
        setIsloading(false)
        // setDisableFields(false);
      })
  }
  return (
    <div className="data-view110763-container">
      <Helmet>
        <title>Dashboadrd | Data View</title>
      </Helmet>
      <div className="data-view110763-data-view110763">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nODg5JyBoZWlnaHQ9Jzg4OScgdmlld0JveD0nMCAwIDg4OSA4ODknIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBIODg5Vjg2NUM4ODkgODc4LjI1NSA4NzguMjU1IDg4OSA4NjUgODg5SDI0QzEwLjc0NTIgODg5IDAgODc4LjI1NSAwIDg2NVYwWicgZmlsbD0nI0Y4RjhGOCcvPgo8L3N2Zz4K"
          alt="Rectangle9110764"
          className="data-view110763-image"
        />
        <div className="data-view110763-frame204110765">
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
          {dataList.map((data, index) => (
            <div key={index} className="data-view110763-frame202110783">
              <div className="data-view110763-frame194110784">
                <span
                  className="data-view110763-text008"
                  style={{ overflow: "hidden", height: "20px" }}
                >
                  {data.study_id}
                </span>
              </div>
              <div className="data-view110763-frame196110786">
                <span className="data-view110763-text009">
                  {data.subject_id}
                </span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTAgN0MwIDMuMTM0MDEgMy4xMzQwMSAwIDcgMEMxMC44NjYgMCAxNCAzLjEzNDAxIDE0IDdDMTQgMTAuODY2IDEwLjg2NiAxNCA3IDE0QzMuMTM0MDEgMTQgMCAxMC44NjYgMCA3WicgZmlsbD0nI0M0QzRDNCcvPgo8cGF0aCBkPSdNOS41MDQyMyA1LjQyMDlMNi45OTk5OCA3LjkyNTE1TDQuNDk1NzMgNS40MjA5TDMuNjcwOSA2LjI0NTczTDYuOTk5OTggOS41NzQ4MUwxMC4zMjkxIDYuMjQ1NzNMOS41MDQyMyA1LjQyMDlaJyBmaWxsPScjNDA0MDQwJy8+Cjwvc3ZnPgo="
                  alt="Icon110788"
                  className="data-view110763-image01"
                />
              </div>
              <div className="data-view110763-frame197110789">
                <span className="data-view110763-text010">
                  {data.date_start}
                </span>
              </div>
              <div className="data-view110763-frame198110791">
                <span className="data-view110763-text011">
                  {data.first_timestamp}
                </span>
              </div>
              <div className="data-view110763-frame199110793">
                <span className="data-view110763-text012">{data.date_end}</span>
              </div>
              <div className="data-view110763-frame200110795">
                <span className="data-view110763-text013">
                  {data.last_timestamp}
                </span>
              </div>
              <div className="data-view110763-frame200110797">
                <span
                  className="data-view110763-text014"
                  style={{ overflow: "hidden" }}
                >
                  {data.content_title}
                </span>
              </div>
              <div className="data-view110763-frame201110799">
                <span className="data-view110763-text015">2</span>
              </div>
            </div>
          ))}
        </div>
        <div className="data-view110763-group201101101">
          <input
            className="data-view110763-text139"
            placeholder="Search by Subject ID or Study ID"
          />
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
                <select className="data-view110763-text141" name="sort">
                  <option value="ascending">Ascending</option>
                  <option value="decending">Decending</option>
                </select>
              </div>
            </div>
          </div>
          <span className="data-view110763-text142">List</span>
        </div>
        <div className="data-view110763-group231101115">
          <span className="data-view110763-text143">Filter By:</span>
          <div className="data-view110763-group221101117">
            <div className="data-view110763-group211101119">
              <select className="data-view110763-text144" name="filter">
                <option value="categories">Categories</option>
              </select>
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
        <CSVLink
          data={dataList}
          filename={"log-datalist.csv"}
          className="btn btn-primary"
          target="_blank"
        >
          <div className="data-view110763-frame2191111178">
            <span className="data-view110763-text151">Export as CSV</span>
          </div>
        </CSVLink>
        ;
      </div>
    </div>
  )
}

export default DataView110763
