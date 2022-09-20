import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
// REDUX
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <div className="App">
    <Provider store={store}>
      <Navbar/>
      <UserList/>
    </Provider>
    </div>
  )
}

export default App
