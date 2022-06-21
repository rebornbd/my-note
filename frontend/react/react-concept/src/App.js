import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {
  Layout
} from "./layouts";
import {
  MainConcepts,
  Advanced
} from "./Pages";


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/main-concepts"
            element={<MainConcepts />}
          />

          <Route
            path="/advanced"
            element={<Advanced />}
          />

          <Route
            path="*"
            element={<Navigate replace to="/main-concepts" />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
