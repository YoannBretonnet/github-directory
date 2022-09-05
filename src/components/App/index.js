import { Routes, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import SearchPage from 'src/components/pages/SearchPage';
import FaqPage from 'src/components/pages/FaqPage';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchPage />
      <FaqPage />
    </div>
  );
}

export default App;
