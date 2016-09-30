const React = require('react')

const Contact = React.createClass({
  render: function () {
    return (
      <div>
        <h1>First Name: {this.props.contact.FirstName}</h1>
        <h1>Last Name: {this.props.contact.LastName}</h1>
        <h1>Phone: {this.props.contact.Phone}</h1>
        <h1>Email: {this.props.contact.EmailAddress}</h1>
      </div>
    )
  }
})

module.exports = Contact
