// Import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Pages from './pages'; 
import * as Admin from './admin'; 

 
// Import Redux
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from './bootstraps/rootReducer';
import rootSaga from './bootstraps/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';



function App() {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
        <Router>
          <Routes>
              <Route path="/" element={<Pages.Homepages/>} />
              <Route path="/detailproperty/1" element={<Pages.Detailproperty/>} />
              <Route path="/listproperty" element={<Pages.SearchProperty/>} />
              <Route path="/dashboard" element={<Admin.Dashboard/>} />
          </Routes>
        </Router>
    </Provider>
  )
}

export default App
