import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import SearchPage from '../Pages/SearchPage';
import FaqPage from '../Pages/FaqPage';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}

export default App;
