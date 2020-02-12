import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import HomePage from './Components/HomePage'
import SignupForm from './Components/SignupForm'
import login from './Components/Login'
import UserDashboard from './Components/UserDashboard'
import ConversationStarter from './Components/ConversationStarter'

function App() {
  return (

    <Switch>
      <Route exact path="/" component={login} />
      <Route path="/signup" component={SignupForm} />
      {/* <Route path="/login" component={login} /> */}
      <PrivateRoute path='/dashboard' component={UserDashboard} />
      <PrivateRoute path="/new-conversation" component={ConversationStarter} />
    </Switch>  
  )
}

export default App;
