import React, { useState } from 'react';
import { newNotification } from './Details';
import './styles/notification.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState(newNotification);
  const [visited, setVisited] = useState([]);
  const [expanded, setExpanded] = useState({}); 

  const handleVisit = (index) => {
    setVisited((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const toggleExpand = (index, e) => {
    e.stopPropagation(); 
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className='notifications-container'>
      <div className="filters">
        <h3>Filters</h3>
        <hr />
        <p className='all-notification'>All Notifications</p>
        <div><p>Stories</p><span></span></div>
        <div><p>Questions</p><span></span></div>
        <div><p>Spaces</p><span>9</span></div>
        <div><p>People updates</p><span></span></div>
        <div><p>Comments and mentions</p><span></span></div>
        <div><p>Upvotes</p><span></span></div>
        <div><p>Your content</p><span></span></div>
        <div><p>Your profile</p><span>5</span></div>
        <div><p>Announcements</p><span>1</span></div>
        <div><p>Earnings</p><span>1</span></div>
        <div><p>Subscriptions</p><span></span></div>
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        <hr />
        <div className="ntf-box">
          {notifications.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`ntfbcg-wrapper ${visited.includes(index) ? '' : 'ntfbcg'}`}
                onClick={() => handleVisit(index)}
              >
                <div className="notification-box">
                  <img src={item.url} alt="notification" />
                  <div className="notification-details">
                    <p>
                      {item.spaceName}
                      {item.authName && ` • ${item.authName}`}
                      {item.date && ` • ${item.date}`}
                    </p>

                    {/* Conditionally apply truncation */}
                    <h4 className={expanded[index] ? '' : 'clamp-3-lines'}>
                      {item.title}
                    </h4>

                    {item.title.length > 100 && (
                      <button
                        onClick={(e) => toggleExpand(index, e)}
                        className="read-more-btn"
                      >
                        {expanded[index] ? 'Less' : 'More'}
                      </button>
                    )}

                    {item.action && <p>{item.action}</p>}
                  </div>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <hr className="ntf-hr" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
