import React from 'react'

import TabNavigator from "./navigation/TabNavigator"
import { Provider } from 'react-redux'
import Store from './Store/configureStore' 

export default class App extends React.Component {
  render(){
    return (
      <Provider store = {Store}>
          <TabNavigator/>
      </Provider>
        
    );
  }
}
