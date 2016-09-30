const React = require('react')
const { object } = React.PropTypes

const Contact = React.createClass({
  propTypes: {
    contact: object.isRequired
  },
  render: function () {
    return (
      <div>
        <p>First Name: {this.props.contact.FirstName}</p>
        <p>Last Name: {this.props.contact.LastName}</p>
        <p>Phone: {this.props.contact.Phone}</p>
        <p>Email: {this.props.contact.EmailAddress}</p>
      </div>
    )
  }
})

module.exports = Contact
