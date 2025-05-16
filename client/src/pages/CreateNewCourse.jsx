import React, { useState } from "react";

function CreateCourseModals() {
  // Modal visibility state
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [showLectureModal, setShowLectureModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  // Tabs for Lecture and Quiz Modals
  const [lectureTab, setLectureTab] = useState("basic");
  const [quizTab, setQuizTab] = useState("quizbasic");

  // Example: Section Name state
  const [sectionName, setSectionName] = useState("");

  // Example: Lecture Title state
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureDescription, setLectureDescription] = useState("");

  // Example: Quiz Title state
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");

  return (
    <div>
      {/* Trigger Buttons */}
      <button className="main-btn" onClick={() => setShowSectionModal(true)}>Add Section</button>
      <button className="main-btn" onClick={() => setShowLectureModal(true)}>Add Lecture</button>
      <button className="main-btn" onClick={() => setShowQuizModal(true)}>Add Quiz</button>

      {/* Add Section Modal */}
      {showSectionModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Section</h5>
                <button type="button" className="close" onClick={() => setShowSectionModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="new-section-block">
                  <div className="form_group">
                    <label className="label25">Section Name*</label>
                    <input
                      className="form_input_1"
                      type="text"
                      placeholder="Section title here"
                      value={sectionName}
                      onChange={e => setSectionName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="main-btn cancel" onClick={() => setShowSectionModal(false)}>Close</button>
                <button className="main-btn">Add Section</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Lecture Modal */}
      {showLectureModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Lecture</h5>
                <button type="button" className="close" onClick={() => setShowLectureModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="course-main-tabs">
                  <div className="nav nav-pills flex-column flex-sm-row nav-tabs" role="tablist">
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${lectureTab === "basic" ? " active" : ""}`}
                      onClick={() => setLectureTab("basic")}
                    >
                      <i className="fas fa-file-alt mr-2"></i>Basic
                    </button>
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${lectureTab === "video" ? " active" : ""}`}
                      onClick={() => setLectureTab("video")}
                    >
                      <i className="fas fa-video mr-2"></i>Video
                    </button>
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${lectureTab === "attachment" ? " active" : ""}`}
                      onClick={() => setLectureTab("attachment")}
                    >
                      <i className="fas fa-paperclip mr-2"></i>Attachments
                    </button>
                  </div>
                  <div className="tab-content">
                    {lectureTab === "basic" && (
                      <div className="tab-pane fade show active">
                        <div className="new-section mt-30">
                          <div className="form_group">
                            <label className="label25">Lecture Title*</label>
                            <input
                              className="form_input_1"
                              type="text"
                              placeholder="Title here"
                              value={lectureTitle}
                              onChange={e => setLectureTitle(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="ui search focus lbel25 mt-30">
                          <label>Description*</label>
                          <div className="ui form swdh30">
                            <div className="field">
                              <textarea
                                rows="3"
                                placeholder="description here..."
                                value={lectureDescription}
                                onChange={e => setLectureDescription(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="preview-dt">
                          <span className="title-875">Free Preview</span>
                          <label className="switch">
                            <input type="checkbox" name="preview_op" value="" />
                            <span></span>
                          </label>
                        </div>
                      </div>
                    )}
                    {lectureTab === "video" && (
                      <div className="tab-pane fade show active">
                        <div className="lecture-video-dt mt-30">
                          <span className="video-info">Select your preferred video type. (.mp4, YouTube, Vimeo etc.)</span>
                          {/* Video type options and upload fields go here */}
                        </div>
                      </div>
                    )}
                    {lectureTab === "attachment" && (
                      <div className="tab-pane fade show active">
                        <div className="upload-file-dt mt-30">
                          <div className="upload-btn">
                            <input className="uploadBtn-main-input" type="file" id="SourceFile__input--source" />
                            <label htmlFor="SourceFile__input--source" title="Zip">
                              <i className="far fa-plus-square mr-2"></i>Attachment
                            </label>
                          </div>
                          <span className="uploadBtn-main-file">Supports: jpg, jpeg, png, pdf or .zip</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="main-btn cancel" onClick={() => setShowLectureModal(false)}>Close</button>
                <button className="main-btn">Add Lecture</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Quiz Modal */}
      {showQuizModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Quiz</h5>
                <button type="button" className="close" onClick={() => setShowQuizModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="course-main-tabs">
                  <div className="nav nav-pills flex-column flex-sm-row nav-tabs" role="tablist">
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${quizTab === "quizbasic" ? " active" : ""}`}
                      onClick={() => setQuizTab("quizbasic")}
                    >
                      <i className="fas fa-file-alt mr-2"></i>Basic
                    </button>
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${quizTab === "questions" ? " active" : ""}`}
                      onClick={() => setQuizTab("questions")}
                    >
                      <i className="fas fa-question-circle mr-2"></i>Questions
                    </button>
                    <button
                      className={`flex-sm-fill text-sm-center nav-link${quizTab === "setting" ? " active" : ""}`}
                      onClick={() => setQuizTab("setting")}
                    >
                      <i className="fas fa-cog mr-2"></i>Setting
                    </button>
                  </div>
                  <div className="tab-content">
                    {quizTab === "quizbasic" && (
                      <div className="tab-pane fade show active">
                        <div className="new-section">
                          <div className="form_group mt-30">
                            <label className="label25">Quiz Title*</label>
                            <input
                              className="form_input_1"
                              type="text"
                              placeholder="Title here"
                              value={quizTitle}
                              onChange={e => setQuizTitle(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="ui search focus lbel25 mt-30">
                          <label>Description*</label>
                          <div className="ui form swdh30">
                            <div className="field">
                              <textarea
                                rows="3"
                                placeholder="description here..."
                                value={quizDescription}
                                onChange={e => setQuizDescription(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {quizTab === "questions" && (
                      <div className="tab-pane fade show active">
                        <div className="lecture-video-dt mt-30">
                          <div className="add-ques-dt">
                            <button type="button" className="main-btn color btn-hover w-100">
                              <i className="far fa-plus-square mr-2"></i>Add Question
                            </button>
                            {/* Add question form fields here */}
                          </div>
                        </div>
                      </div>
                    )}
                    {quizTab === "setting" && (
                      <div className="tab-pane fade show active">
                        {/* Add quiz setting form fields here */}
                        <p>Quiz settings go here...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="main-btn cancel" onClick={() => setShowQuizModal(false)}>Close</button>
                <button className="main-btn">Add Quiz</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateCourseModals;

