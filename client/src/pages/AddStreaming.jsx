import React from "react";

const AddStreaming = () => (
  <div className="wrapper">
    {/* Header */}
    <header className="header clearfix">
      <button type="button" id="toggleMenu" className="toggle_menu">
        <i className="uil uil-bars"></i>
      </button>
      <button id="collapse_menu" className="collapse_menu">
        <i className="uil uil-bars collapse_menu--icon"></i>
        <span className="collapse_menu--label"></span>
      </button>
      <div className="main_logo" id="logo">
        <a href="/"><img src="/images/logo.svg" alt="" /></a>
        <a href="/"><img className="logo-inverse" src="/images/ct_logo.svg" alt="" /></a>
      </div>
      {/* ...top-category, search, header_right (copy from HTML, convert class to className, href to React Router Link if needed) */}
    </header>

    {/* Sidebar Navigation */}
    <nav className="vertical_nav">
      {/* ...copy sidebar nav content here, convert class to className, href to Link if using React Router */}
    </nav>

    {/* Main Content */}
    <div className="wrapper">
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-lg-8 col-md-10">
              <div className="section3125 stream_tabs">
                <ul className="nav nav-tabs slive_tabs justify-content-center" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="add-streaming-tab" data-toggle="tab" href="#add-straming" role="tab" aria-controls="add-straming" aria-selected="true">Add Streaming</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="setting-tab" data-toggle="tab" href="#setting" role="tab" aria-controls="setting" aria-selected="false">Setting</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="add-straming" role="tabpanel">
                    <div className="add_stream_content">
                      <h4 className="strm_title">Connect your live stream to the Live API</h4>
                      <div className="sf475">Use live-streaming software or a hardware encoder. <a href="#">Learn More</a></div>
                      <div className="stm_key">Preview your broadcast with a stream key or paired encoder.</div>
                      <div className="live_form">
                        <div className="group-form">
                          <label>Server URL*</label>
                          <input className="_dlor1" type="text" data-testid="server_url" placeholder="Stream URL" disabled value="rtmps://live-api-s.edututs+.com:443/rtmp/" />
                          <button className="_6tf7s" type="submit" value="1">Copy</button>
                        </div>
                        <div className="group-form">
                          <label>Persistent stream key*</label>
                          <input className="_dlor1" type="text" data-testid="server_url" placeholder="Stream URL" disabled value="592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api-s&a=AbzB7xYk7XdnKpBf" />
                          <button className="_6tf7s" type="submit" value="1">Copy</button>
                        </div>
                        <button className="_145d1"><i className="uil uil-video"></i>Go Live</button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="setting" role="tabpanel">
                    <div className="add_stream_content">
                      <h4 className="strm_title1">Live Streaming Setting</h4>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss1" defaultChecked />
                        <label>Publish this as a continuous live video</label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss2" />
                        <label>Allow embedding </label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss3" />
                        <label>Unpublish after live video ends</label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss4" defaultChecked />
                        <label>Allow viewers to rewind</label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss5" defaultChecked />
                        <label>End broadcast when stream ends</label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss6" />
                        <label>Publish as a test broadcast</label>
                      </div>
                      <div className="ui toggle checkbox _1457s2">
                        <input type="checkbox" name="stream_ss7" />
                        <label>Turn off live commentary</label>
                      </div>
                      <button className="_145d1">Save changes &amp; Go Live</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>

    {/* Footer */}
    <footer className="footer mt-30">
      {/* ...copy footer content here, convert class to className, href to Link if using React Router */}
    </footer>
  </div>
);

export default AddStreaming;