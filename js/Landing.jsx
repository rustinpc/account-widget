const React = require('react')
const Search = require('./Search')
const ContactList = require('./ContactList')
const { func, node } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    onQuery: func.isRequired,
    contacts: node.isRequired
  },
  render: function () {
    return (
      <div>
        <Search onQuery={this.props.onQuery} />
        <ContactList contacts={this.props.contacts} />
        <div className='home-info'>
          boops
        </div>
      </div>
    )
  }
})

module.exports = Landing
