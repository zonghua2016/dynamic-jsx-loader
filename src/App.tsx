import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DynamicLoader from './pages/DynamicLoader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicLoader />} />
        {/* <Route path="/" element={<div style={{ padding: 20 }}>主页，访问 /dynamic?uri=...</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
