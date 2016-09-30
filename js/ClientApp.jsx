const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { contacts } = require('../public/contacts')

const App = React.createClass({
  getInitialState: function () {
    return {
      contacts: []
    }
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
  render () {
    return (
      <Layout>
        <Landing contacts={this.state.contacts} onQuery={this.selectContacts} />
      </Layout>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
