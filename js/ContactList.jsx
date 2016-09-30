const React = require('react')
const Contact = require('./Contact')
const { array } = React.PropTypes

const ContactList = React.createClass({
  propTypes: {
    contacts: array.isRequired
  },
  render: function () {
    return (
      <ul>
        {this.props.contacts.map(function (contact, i) {
          return <li key={i}>
            <Contact contact={contact} />
          </li>
        })}
      </ul>
    )
  }
})

module.exports = ContactList
