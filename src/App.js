import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cover from './Components/Cover';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Cover />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
