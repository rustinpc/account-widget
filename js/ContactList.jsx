const React = require('react')
const Contact = require('./Contact')
const { func, array } = React.PropTypes

const ContactList = React.createClass({
  propTypes: {
    contacts: array.isRequired,
    onSelect: func.isRequired
  },
  render: function () {
    return (
      <ul>
        {this.props.contacts.map(function (contact, i) {
          return <li key={i}>
            <Contact onSelect={this.props.onSelect} contact={contact} />
          </li>
        }, this)}
      </ul>
    )
  }
})

module.exports = ContactList
