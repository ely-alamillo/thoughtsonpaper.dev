import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './contact.scss'

const Contact = () => (
  <section className="section has-background-white  is-medium" id="contact">
    <h1 className="title has-text-centered is-size-1-desktop is-size-2-tablet is-size-3-mobile">
      Contact Me.
    </h1>
    <div className="container">
      <form action="https://formspree.io/ely0013@gmail.com" method="POST">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label">Name</label>
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                  name="_replyto"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Submission @ elyalamillo.com"
                />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Enter message"
              name="message"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit" value="Send">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default Contact
