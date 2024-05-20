import React from 'react';




import("../../../assets/css/header.css");



import logo from '../../../assets/images-new/logo.png'

function Header() {
      return (
        <div>
        
          <link href="" crossOrigin="anonymous" />   
        
          <section className="header" id="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                  <div className="card border-none bg-none">
                    <nav className="d-flex">
                      <a className="navbar-brand" href="index.php">
                       <img src={logo} alt="download icon" />
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-6  col-md-6 col-sm-12  col-12 nav-items">
                  <div className="card bg-none border-none">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="navbar-dropdown">
                        <a href="#">LOGIN <ion-icon name="caret-down-outline" /></a>
                        <div className="dropdown">
                          <a href data-bs-toggle="modal" data-bs-target="#userLoginModal">USER LOGIN</a>
                          <a href="#" data-bs-toggle="modal" data-bs-target="#DealerLoginModal">DEALER LOGIN</a>
                        </div>
                      </li>
                      <a target="_blank" href="https://web.whatsapp.com/" className="btn">
                        TALK TO AN EXPERT &nbsp; <ion-icon name="logo-whatsapp" /></a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
          <div className="modal fade defaultModal" id="userLoginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="close border-none" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <figure className="text-center"><img src="./images/main/user-login.png" alt="" /></figure>
                  <h5 className="modal-title">LOGIN USING AUTOSCAN <br /> CREDENCIALS</h5>
                  <form id="loginForm">
                    <div className="form__group field">
                      <input type="email" className="form__field" placeholder="userEmail" name="userEmail" id="userEmail" required />
                      <label htmlFor="userEmail" className="form__label">Email ID</label>
                      <p id="emailError" className="error-message validationMessage" />
                    </div>
                    <div className="form__group field">
                      <input type="password" className="form__field" placeholder="userPass" name="userPass" id="userPass" required />
                      <a href="#" className="s-anchor togglePassword">Show Password</a>
                      <label htmlFor="userPass" className="form__label">Enter Password</label>
                      <p id="passwordError" className="error-message" />
                    </div>
                    <div className="form-footer">
                      <button type="button" id="LoginSubmitButton" className="button">SIGN IN</button>
                      <a href="#" className="text-center loginFromAnother">
                        <div className="theme">LOGIN AS USER</div>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
          <div className="modal fade defaultModal" id="DealerLoginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="close border-none" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <figure className="text-center"><img src="./images/main/user-login.png" alt="" /></figure>
                  <h5 className="modal-title">LOGIN USING AUTOSCAN <br /> CREDENCIALS</h5>
                  <p className="s-para">for Better Experience, Order tracking &amp; Regular updates</p>
                  <form id="DealerLoginForm">
                    <div className="form__group field">
                      <input type="text" className="form__field" placeholder="dealerMobNumber" name="dealerMobNumber" id="dealerMobNumber" required />
                      <label htmlFor="dealerMobNumber" className="form__label">Enter mobile number</label>
                      <p id="validationMessage" className="s-para validationMessage" />
                    </div>
                    <div className="form-footer">
                      <button type="button" id="submitButton" className="button">
                        Send OTP
                      </button>
                      <p className="s-para">By continuing I agree with the <a href="#" className="theme">Privacy Policy</a>,
                        <a href="#" className="theme">Terms &amp; Conditions</a>
                      </p>
                      <div className="send-otp-section" style={{display: 'none'}}>
                        {/* Include your send OTP section here */}
                        <input type="text" id="otpInput" placeholder="Enter OTP" />
                        <button type="button" id="verifyOtpButton" className="border-none">Verify OTP</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ReportDoneBYAutoScan Modal */}
          <div className="modal fade" id="ReportDoneBYAutoScan" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <table>
                    <thead>
                      <tr>
                        <th>Make year</th>
                        <th>Brand Name</th>
                        <th>Model</th>
                        <th>Insurancer</th>
                        <th>Number of Owner</th>
                        <th>Kms</th>
                        <th>Varient</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2014</td>
                        <td>MG</td>
                        <td>MG</td>
                        <td>2014</td>
                        <td>2014</td>
                        <td>2014</td>
                        <td>Pertrol/Deisel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <a href="index.php">
                    <div className="button">BACK TO HOME</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* makeOfferModal Modal */}
          <div className="modal fade defaultModal " id="makeOfferModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">MAKE YOUR OFFER</h5>
                  <button type="button" className="close border-none" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="offerHighlightsContainer">
                    <div className="grid2">
                      <div>
                        <p>Highest price</p>
                        <h6 className="lastPrice bold">12.3 lakhs</h6>
                      </div>
                      <div>
                        <p>Number of offers made</p>
                        <h6 className="totalOffer bold">5 offers</h6>
                      </div>
                    </div>
                  </div>
                  <form action>
                    <div className="form__group field ownership-Fields di-flex fullSpace grid4">
                      <div className="checkboxbutton">
                        <input type="radio" id="offer1" name="Owner" />
                        <label className="btn btn-default" htmlFor="Owner">12.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer2" name="offer2" />
                        <label className="btn btn-default" htmlFor="Owner">11.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer3" name="offer3" />
                        <label className="btn btn-default" htmlFor="Owner">11.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer4" name="offer4" />
                        <label className="btn btn-default" htmlFor="Owner">12.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer5" name="offer5" />
                        <label className="btn btn-default" htmlFor="Owner">12.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer6" name="offer6" />
                        <label className="btn btn-default" htmlFor="Owner">11.5 lakhs</label>
                      </div>
                      <div className="checkboxbutton">
                        <input type="radio" id="offer7" name="offer7" />
                        <label className="btn btn-default" htmlFor="Owner">11.5 lakhs</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="button  ">Make offer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
export default Header;
