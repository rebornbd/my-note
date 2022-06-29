import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { MainLayout } from './layout';
import {
  CounterApp,
  FetchData
} from "./pages";


const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/counter-app" element={<CounterApp />} />
          <Route path="/fetch-data" element={<FetchData />} />
          <Route path="*" element={<CounterApp />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App;
