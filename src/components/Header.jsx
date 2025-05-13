import React, { useContext, useState } from 'react';
import logo from './assets/dpp.avif';
import './styles/headerstyle.css';
import { AuthContext } from '../AuthContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const { setShowPost, setIsQuestion } = useContext(AuthContext);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser, logout } = useContext(AuthContext);
  const [infoAccount, setInfoAccount] = useState(false);
  const [isCreate, setIsCreate]=useState(false)

  const accountInfo = () => {
    setInfoAccount((prev) => !prev);
  };

  const navItems = [
    { icon: 'fa-house', label: 'Home', route: '/' },
    { icon: 'fa-rectangle-list', label: 'Following', route: '/following' },
    { icon: 'fa-file-pen', label: 'Answers', route: '/answers' },
    { icon: 'fa-users', label: 'Spaces', route: '/spaces' },
    { icon: 'fa-bell', label: 'Notifications', route: '/notifications' },
  ];


  
  const handleQues = () => {
    setShowPost(true);
    setIsQuestion(true);
  }
  const handleCreate = () => {
    setShowPost(true);
    setIsQuestion(false);
  }
  const showCreate = () => {
    setIsCreate((prev)=> !prev)
  }

  return (
    <header>
      <nav>
        <Link to="/" className="logoName">Quora</Link>
        
        <div className="nav-icons">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-icon ${location.pathname === navItems[index].route ? 'active' : ''}`}
              onClick={() => navigate(item.route)}
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => setHoverIndex(null)}
            >
              <Link to={item.route}><i className={`fa-solid ${item.icon}`}></i></Link>
              {item.label === 'Notifications' && <span>1</span>}
              <p className={`hidden ${hoverIndex === index ? 'active' : ''}`}>{item.label}</p>
            </div>
          ))}
        

        <div className="nav-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Quora" />
        </div>

        <div className="nav-right">
          <h2>Try Quora +</h2>
          {!currentUser ? (
        <div className="account-action">
          <Link to="/account" className="lgn-btn" state={{ mode: 'login' }}>
            Log In
          </Link>
        </div>
      ) : (
        <div className="account-active" onClick={accountInfo}>
          <p>{currentUser?.username?.[0].toUpperCase()}</p>
          <div className={infoAccount ? 'log-out' : 'acc-hidden'}>
            <p onClick={logout}>Log Out</p>
          </div>
        </div>
      )}
          <i className="fa-solid fa-globe"></i>
          <div className='addques-div'>
            <p onClick={handleQues}>Add question</p>
            <i className="fa-solid fa-angle-down" onClick={showCreate}></i>
            <div className={isCreate ? 'active-create-box': 'hidden'}>
              <i className="fa-solid fa-pen" ></i>
              <p onClick={handleCreate}>Create Post</p>
            </div>
          </div>
        </div>
        </div>
        <div className="hidden-add" onClick={handleQues}>
          <i className="fa-solid fa-plus"></i>
          <p>Add</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
