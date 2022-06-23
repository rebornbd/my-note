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
  Advanced,
  Hooks
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
            path="/hooks"
            element={<Hooks />}
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
