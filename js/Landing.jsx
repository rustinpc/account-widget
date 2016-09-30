const React = require('react')
const Search = require('./Search')
const ContactList = require('./ContactList')
const { func, array } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    onQuery: func.isRequired,
    contacts: array.isRequired
  },
  render: function () {
    return (
      <div>
        <Search onQuery={this.props.onQuery} />
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
})

module.exports = Landing
