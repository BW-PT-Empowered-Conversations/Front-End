import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Components/HomePage'
import SignupForm from './Components/SignupForm'
import ConversationStarter from './Components/ConversationStarter'



function App() {
  return (

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/new-conversation" component={ConversationStarter} />
    </Switch>  
  )
}

export default App;