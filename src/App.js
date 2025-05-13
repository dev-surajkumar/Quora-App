import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import { AuthProvider } from './AuthContext';
import Notifications from './components/Notifications';
import Account from './components/Account';
import Answers from './components/Answers';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Content/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/answers' element={<Answers/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
