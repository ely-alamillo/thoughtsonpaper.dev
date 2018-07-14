import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './contact.scss'

const Contact = () => (
  <section className="section has-background-white">
    <div className="container">
      <form action="https://formspree.io/ely0013@gmail.com" method="POST">
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Name input"
              name="name"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user-alt" />
            </span>
          </div>
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
