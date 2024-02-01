import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainContainer from './containers/MainContainer'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  )
}

export default App
