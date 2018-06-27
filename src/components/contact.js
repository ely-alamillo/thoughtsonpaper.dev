import React from 'react'
// import FontAwesome from 'react-fontawesome'
import './contact.scss'

const Contact = () => (
  <section className="section has-background-white">
    <div className="container">
      <form action="/test">
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input className="input" type="text" placeholder="Name input" />
            <span className="icon is-small is-left">
              <i className="fa fa-user-alt" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input className="input" type="email" placeholder="Email input" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Enter message" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default Contact
