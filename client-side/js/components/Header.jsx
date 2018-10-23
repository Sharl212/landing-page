import React from "react";
import CustomNavbar from "./CustomNavbar.jsx"


class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      alreadyAmember: false,  // ! CHANGE LATER
      isSubscribed: true
    }

    this.onSignup = this.onSignup.bind(this)
    this.reSignUp = this.reSignUp.bind(this)
    this.addEmail = this.addEmail.bind(this)
  }

  addEmail = async (email) => {
    // new Promise((reject, resolve)=>{
    await fetch("/addemail", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email: email
      })
    }).then(response => {
      if (response.status == 200) {
        console.log("Subscribed")
        this.setState({
          isSubscribed: true,
          alreadyAmember: false
        })
      } else {
        this.setState({
          isSubscribed: false,
          alreadyAmember: true
        })
      }
    }).catch(err => {
      console.log(`ERROR:- ${err}`)
    })
    console.log(this.state)
  }

  onSignup = (e) => {
    e.preventDefault();
    let email = document.querySelector("input[type='email']").value

    this.addEmail(email);
  }

  reSignUp = () => {
    this.setState({
      isSubscribed: false,
      alreadyAmember: false
    })
  }

  render() {
    return (
      <header id="home">
        <div className="bg-img">
          <div className="overlay"></div>
          <video src="./videos/demo.mp4" autoPlay muted loop></video>
        </div>

        <CustomNavbar /> {/* the navbar code */}

        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="home-content">
                  {
                    this.state.isSubscribed ?
                      <div>
                        <div className="alert custom-alert col-12">
                          You're Now Subscribed
                          <span className="icon col-lg-3 col-md-3 col-sm-3">
                            <img class="icon" src="/img/success.png" alt="Success" title="Success" width="64" height="64"></img>
                          </span>
                        </div>
                        <button className="main-btn" onClick={this.reSignUp}>Use another email</button>
                      </div>
                      : this.state.alreadyAmember ? // ? if the user turns out to be a member already
                        <div>
                          <div className="alert custom-alert col-12">
                            You're Already Subscribed
                            <span className="icon col-lg-3 col-md-3 col-sm-3">
                              <img class="icon" src="/img/failure.png" alt="Success" title="Success" width="64" height="64"></img>
                            </span>
                          </div>
                          <button className="main-btn" onClick={this.reSignUp}>Use another email</button>
                        </div>
                        :
                        <form className="contact-form" onSubmit={this.onSignup}>
                          <h1 className="white-text">subscribe now!</h1>
                          <input type="email" className="input" placeholder="Email" />
                          <button className="main-btn">Subscribe</button>
                        </form>
                  }
                  {/* <p className="white-text">Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in
                      magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.</p>
                      <button className="white-btn">Get Started!</button>
                      <button className="main-btn">Learn more</button> */}
                </div>
              </div>
              {/*<!-- /home content -->*/}
            </div>
          </div>
        </div>
        {/*<!-- /home wrapper -->*/}
      </header>
    );
  }
};

export default Header;