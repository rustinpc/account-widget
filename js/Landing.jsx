const React = require('react')
const Search = require('./Search')
const ContactList = require('./ContactList')

const Landing = React.createClass({
  render: function () {
    return (
      <div>
        <Search />
        <ContactList contacts={this.props.route.contacts} />
        <div className='home-info'>
          boops
        </div>
      </div>
    )
  }
})

module.exports = Landing
