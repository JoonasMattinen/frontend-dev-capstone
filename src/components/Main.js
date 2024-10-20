import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default route (home) */}
      </Routes>
    </main>
  );
}

export default Main;
