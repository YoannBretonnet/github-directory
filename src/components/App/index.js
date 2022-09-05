import { Routes, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import SearchPage from 'src/components/pages/SearchPage';
import FaqPage from 'src/components/pages/FaqPage';

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
