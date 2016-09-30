const React = require('react')
const { func } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    onQuery: func.isRequired
  },
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
    this.setState({Phone: event.target.value})
  },
  handleEmailChange: function (event) {
    this.setState({Email: event.target.value})
  },
  handleSubmit: function (event) {
    this.props.onQuery(this.state)
  },
  render () {
    return (
      <div className='flex-container'>
        <div className='search-box'>
          <div>
            <b className = 'title'>Shitty Contact Search</b>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              First name: <input type="text" name="firstname" value={this.state.ContactFirstName} onChange={this.handleFirstNameChange} />
            </div>
            <div>
              Last name: <input type="text" name="lastname" value={this.state.ContactLastName} onChange={this.handleLastNameChange} />
            </div>
            <div>
              Phone: <input type="text" name="phone" value={this.state.Phone} onChange={this.handlePhoneChange} />
            </div>
            <div>
              Email: <input type="email" name="email" value={this.state.Email} onChange={this.handleEmailChange} />
            </div>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Search
