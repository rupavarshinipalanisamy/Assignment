import React from 'react'
import { Provider } from 'react-redux'
import  store from './redux_tool_kit/store'
import NavigationPage from './Navigation';


const App = () => {
  return (
    <Provider store ={store}>
     
      <NavigationPage/>
    </Provider> 
  );
};

export default App


