// import { Meteor } from 'meteor/meteor'
import { connect } from 'react-redux'
import Login from '../components/Login.jsx'
import { connectMeteor } from 'meteor-connect'

const mapStateToProps = (state) => { // eslint-disable-line no-unused-vars
  return {}
}

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {}
}

const subscribe = (props) => { // eslint-disable-line no-unused-vars
    return {}
}

const mapMeteorDataToProps = (props, subscriptions) => { // eslint-disable-line no-unused-vars
    return {}
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectMeteor(subscribe, mapMeteorDataToProps)(Login))

export default LoginForm