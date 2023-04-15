// Import react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Pages from './pages'; 
 
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
            <Route exact path="/" element={<Pages.Homepages/>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
