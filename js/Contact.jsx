const React = require('react')
const { func, object } = React.PropTypes

const Contact = React.createClass({
  propTypes: {
    contact: object.isRequired,
    onSelect: func.isRequired
  },
  onContactClick: function (event) {
    this.props.onSelect(this.props.contact)
  },
  render: function () {
    return (
      <div onClick={this.onContactClick} >
        <p>First Name: {this.props.contact.FirstName}</p>
        <p>Last Name: {this.props.contact.LastName}</p>
        <p>Phone: {this.props.contact.Phone}</p>
        <p>Email: {this.props.contact.EmailAddress}</p>
      </div>
    )
  }
})

module.exports = Contact
