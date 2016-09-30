const React = require('react')

const Search = React.createClass({
  getInitialState: function () {
    return {
      ContactFirstName: '',
      ContactLastName: '',
      Phone: '',
      Email: ''
    }
  },
  handleFirstNameChange: function (event) {
    this.setState({ContactFirstName: event.target.value})
  },
  handleLastNameChange: function (event) {
    this.setState({ContactLastName: event.target.value})
  },
  handlePhoneChange: function (event) {
    console.log(event.target)
    this.setState({Phone: event.target.value})
  },
  handleEmailChange: function (event) {
    console.log(event.target)
    this.setState({Email: event.target.value})
  },
  handleSubmit: function (event) {
    console.log(this.requestBuildQueryString(this.state))
  },
  requestBuildQueryString: function (params) {
    var queryString = []
    for (var property in params) {
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]))
      }
    }
    return queryString.join('&')
  },
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First name:
          <input type="text" name="firstname" value={this.state.contactFirstName} onChange={this.handleFirstNameChange} />
          Last name:
          <input type="text" name="lastname" value={this.state.contactLastName} onChange={this.handleLastNameChange} />
          Phone:
          <input type="text" name="phone" value={this.state.Phone} onChange={this.handlePhoneChange} />
          Email:
          <input type="email" name="email" value={this.state.Email} onChange={this.handleEmailChange} />
          <input type="text" name="emais" onChange={this.handleSubmit} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
})

module.exports = Search
