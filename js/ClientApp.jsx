const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { contacts } = require('../public/contacts')

const App = React.createClass({
  getInitialState: function () {
    return {
      contacts: [],
      selectedContact: {}
    }
  },
  updateState: function () {
    console.log(this.state.selectedContact)
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
  selectContacts (query, lastname) {
    this.requestBuildQueryString(this.state)
    const filtered = contacts.filter((contact) => contact.LastName === query.ContactLastName)
    this.setState({contacts: filtered})
  },
  selectContact (contact) {
    this.setState({selectedContact: contact}, this.updateState)
  },
  render () {
    return (
      <div>
        <Layout>
          <Landing contacts={this.state.contacts} onSelect={this.selectContact} onQuery={this.selectContacts} />
        </Layout>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
