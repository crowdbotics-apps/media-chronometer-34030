import React from "react"

import { Helmet } from "react-helmet"
import { useState } from "react/cjs/react.development"

import "./create-study.css"

const CreateStudy1111677 = props => {
  const [isSubject, setIsSubject] = useState(false)
  const [subjects, setSubjects] = useState([])
  return (
    <div className="create-study1111677-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="create-study1111677-create-study1111677">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nODg5JyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDg4OSA0MDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxwYXRoIGQ9J00wIDBIODg5VjM3NkM4ODkgMzg5LjI1NSA4NzguMjU1IDQwMCA4NjUgNDAwSDI0QzEwLjc0NTIgNDAwIDAgMzg5LjI1NSAwIDM3NlYwWicgZmlsbD0nI0Y4RjhGOCcvPgo8L3N2Zz4K"
          alt="Rectangle91111678"
          className="create-study1111677-image"
        />
        <span className="create-study1111677-text">Create a new study</span>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQ0MCcgaGVpZ2h0PSc3Micgdmlld0JveD0nMCAwIDE0NDAgNzInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxtYXNrIGlkPSdwYXRoLTEtaW5zaWRlLTFfMTExXzE4MDAnIGZpbGw9J3doaXRlJz4KPHBhdGggZD0nTTAgMEgxNDQwVjcySDBWMFonLz4KPC9tYXNrPgo8cGF0aCBkPSdNMCAwSDE0NDBWNzJIMFYwWicgZmlsbD0nd2hpdGUnIGZpbGwtb3BhY2l0eT0nMC41Jy8+CjxwYXRoIGQ9J00xNDQwIDcxSDBWNzNIMTQ0MFY3MVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuMicgbWFzaz0ndXJsKCNwYXRoLTEtaW5zaWRlLTFfMTExXzE4MDApJy8+Cjwvc3ZnPgo="
          alt="Rectangle71111800"
          className="create-study1111677-image1"
        />
        <div className="create-study1111677-frame2211111866">
          <div className="create-study1111677-frame51111846">
            <span className="create-study1111677-text4">Study ID</span>
            <div className="create-study1111677-frame31111848">
              <input
                className="create-study1111677-text5"
                placeholder="Study ID Input Area"
              />
            </div>
          </div>

          <div className="subject-i-d-added1111923-frame2231111983">
            {subjects.map(() => (
              <span className="subject-i-d-added1111923-text06">#123678</span>
            ))}
          </div>
          <div
            onClick={() => setIsSubject(true)}
            className="create-study1111677-frame2201111863"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTcgMS43NUM5Ljg4NzUgMS43NSAxMi4yNSA0LjExMjUgMTIuMjUgN0MxMi4yNSA5Ljg4NzUgOS44ODc1IDEyLjI1IDcgMTIuMjVDNC4xMTI1IDEyLjI1IDEuNzUgOS44ODc1IDEuNzUgN0MxLjc1IDQuMTEyNSA0LjExMjUgMS43NSA3IDEuNzVaTTcgMC44NzVDMy42MzEyNSAwLjg3NSAwLjg3NSAzLjYzMTI1IDAuODc1IDdDMC44NzUgMTAuMzY4NyAzLjYzMTI1IDEzLjEyNSA3IDEzLjEyNUMxMC4zNjg3IDEzLjEyNSAxMy4xMjUgMTAuMzY4NyAxMy4xMjUgN0MxMy4xMjUgMy42MzEyNSAxMC4zNjg3IDAuODc1IDcgMC44NzVaJyBmaWxsPScjMjU3NUZDJy8+CjxwYXRoIGQ9J00xMC41IDYuNTYyNUg3LjQzNzVWMy41SDYuNTYyNVY2LjU2MjVIMy41VjcuNDM3NUg2LjU2MjVWMTAuNUg3LjQzNzVWNy40Mzc1SDEwLjVWNi41NjI1WicgZmlsbD0nIzI1NzVGQycvPgo8L3N2Zz4K"
              alt="carbonaddalt1111859"
              className="create-study1111677-image5"
            />
            <span className="create-study1111677-text6">Add Subject IDs</span>
          </div>
          <div className="create-study1111677-frame2221111867">
            <div className="create-study1111677-frame2191111864">
              <span className="create-study1111677-text7">Submit</span>
            </div>
          </div>
        </div>
        <div
          style={{ display: isSubject ? "block" : "none" }}
          className="create-study-add-subject-i-d-s1111868-frame1441111910"
        >
          <div className="create-study-add-subject-i-d-s1111868-frame1561111911">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTcnIHZpZXdCb3g9JzAgMCAxNiAxNycgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyLjY2NyA3LjgzMzM1SDQuNzYwMzNMNy4xODAzMyA0LjkyNjY5QzcuMjkzNDkgNC43OTA1NCA3LjM0NzkzIDQuNjE1MDIgNy4zMzE2NyA0LjQzODc0QzcuMzE1NDIgNC4yNjI0NSA3LjIyOTggNC4wOTk4NSA3LjA5MzY2IDMuOTg2NjlDNi45NTc1MSAzLjg3MzUzIDYuNzgxOTkgMy44MTkwOSA2LjYwNTcxIDMuODM1MzRDNi40Mjk0MyAzLjg1MTU5IDYuMjY2ODIgMy45MzcyMSA2LjE1MzY2IDQuMDczMzVMMi44MjAzMyA4LjA3MzM1QzIuNzk3OSA4LjEwNTE3IDIuNzc3ODUgOC4xMzg1OSAyLjc2MDMzIDguMTczMzVDMi43NjAzMyA4LjIwNjY5IDIuNzYwMzMgOC4yMjY2OSAyLjcxMzY2IDguMjYwMDJDMi42ODM0NCA4LjMzNjQ2IDIuNjY3NjIgOC40MTc4MyAyLjY2Njk5IDguNTAwMDJDMi42Njc2MiA4LjU4MjIxIDIuNjgzNDQgOC42NjM1OCAyLjcxMzY2IDguNzQwMDJDMi43MTM2NiA4Ljc3MzM1IDIuNzEzNjYgOC43OTMzNSAyLjc2MDMzIDguODI2NjlDMi43Nzc4NSA4Ljg2MTQ1IDIuNzk3OSA4Ljg5NDg3IDIuODIwMzMgOC45MjY2OUw2LjE1MzY2IDEyLjkyNjdDNi4yMTYzNCAxMy4wMDE5IDYuMjk0ODMgMTMuMDYyNSA2LjM4MzU2IDEzLjEwMzlDNi40NzIyOCAxMy4xNDU0IDYuNTY5MDUgMTMuMTY2OCA2LjY2Njk5IDEzLjE2NjdDNi44MjI3NiAxMy4xNjcgNi45NzM3MiAxMy4xMTI3IDcuMDkzNjYgMTMuMDEzNEM3LjE2MTE2IDEyLjk1NzQgNy4yMTY5NyAxMi44ODg3IDcuMjU3ODcgMTIuODExMUM3LjI5ODc3IDEyLjczMzUgNy4zMjM5NyAxMi42NDg3IDcuMzMyMDIgMTIuNTYxM0M3LjM0MDA3IDEyLjQ3NCA3LjMzMDgxIDEyLjM4NiA3LjMwNDc4IDEyLjMwMjJDNy4yNzg3NSAxMi4yMTg1IDcuMjM2NDYgMTIuMTQwNyA3LjE4MDMzIDEyLjA3MzRMNC43NjAzMyA5LjE2NjY5SDEyLjY2N0MxMi44NDM4IDkuMTY2NjkgMTMuMDEzNCA5LjA5NjQ1IDEzLjEzODQgOC45NzE0M0MxMy4yNjM0IDguODQ2NCAxMy4zMzM3IDguNjc2ODMgMTMuMzMzNyA4LjUwMDAyQzEzLjMzMzcgOC4zMjMyMSAxMy4yNjM0IDguMTUzNjQgMTMuMTM4NCA4LjAyODYyQzEzLjAxMzQgNy45MDM1OSAxMi44NDM4IDcuODMzMzUgMTIuNjY3IDcuODMzMzVaJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjc1Jy8+Cjwvc3ZnPgo="
              alt="Icons1111912"
              className="create-study-add-subject-i-d-s1111868-image6"
              onClick={() => setIsSubject(false)}
            />
            <span className="create-study-add-subject-i-d-s1111868-text08">
              Subject ID
            </span>
          </div>
          <div className="create-study-add-subject-i-d-s1111868-frame1571111915">
            <button
              className="create-study-add-subject-i-d-s1111868-button-primary-medium1111916"
              onClick={() => {
                setSubjects(subjects.concat({}))
                setIsSubject(false)
              }}
            >
              <span className="create-study-add-subject-i-d-s1111868-text09">
                Add
              </span>
            </button>
            <button
              className="create-study-add-subject-i-d-s1111868-button-primary-medium1111917"
              onClick={() => setIsSubject(false)}
            >
              <span className="create-study-add-subject-i-d-s1111868-text10">
                Cancel
              </span>
            </button>
          </div>
          <div className="create-study-add-subject-i-d-s1111868-frame31111921">
            <input
              className="create-study-add-subject-i-d-s1111868-text11"
              placeholder="Subject ID Input Area"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStudy1111677
