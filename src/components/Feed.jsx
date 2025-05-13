import React, { useState, useEffect } from 'react'
import { mainContent } from './Details'

const Feed = ({ feeds, setFeeds }) => {
  const [expanded, setExpanded] = useState({});
  
  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleUpvote = (index) => {
    const updatedFeeds = [...feeds];
    const feed = updatedFeeds[index];

    if (feed.upvotes > 0) {
      feed.upvotes -= 1;
    } else {
      feed.upvotes += 1;
      if (feed.downvotes > 0) feed.downvotes -= 1;
    }

    setFeeds(updatedFeeds);
  };

  const handleDownvote = (index) => {
    const updatedFeeds = [...feeds];
    const feed = updatedFeeds[index];

    if (feed.downvotes > 0) {
      feed.downvotes -= 1;
    } else {
      feed.downvotes += 1;
      if (feed.upvotes > 0) feed.upvotes -= 1;
    }

    setFeeds(updatedFeeds);
  };

  const handleReshare = (index) => {
    const updatedFeeds = [...feeds];
    updatedFeeds[index].reshares += 1;
    setFeeds(updatedFeeds);
  };

  return (
    <div className="display-feed">
      {feeds.map((feed, index) => (
        <div className="feed-container" key={index}>
          {/* Top Section */}
          <div className="feed-top">
            <img src={feed.userUrl} alt="User" />
            <div>
              <h4>
                {feed.pageName} <span>Follow</span>
              </h4>
              <p>
                Answered by {feed.authName}. {feed.date}
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="feed-middle">
            <h3>{feed.title}</h3>
            
            <p className={expanded[index] ? '' : 'clamp-3-lines'}>
              {feed.description && feed.description.length > 0
                ? feed.description
                : "No description available."}
            </p>
            {feed.description && feed.description.length > 100 && (
              <button
                onClick={(e) => toggleExpand(index, e)}
                className="read-more-btn"
              >
                {expanded[index] ? "Less" : "More"}
              </button>
            )}
            <img src={feed.postUrl} alt="Post" />
          </div>

          {/* Bottom Section */}
          <div className="feed-bottom">
            <span
              onClick={() => handleUpvote(index)}
              style={{ color: feed.upvotes > 0 ? "blue" : "black" }}
            >
              &#129093;
            </span>
            <p>{feed.upvotes}</p>

            <span
              onClick={() => handleDownvote(index)}
              style={{ color: feed.downvotes > 0 ? "blue" : "black" }}
            >
              &#129095;
            </span>
            <p>{feed.downvotes}</p>

            <i
              className="fa-solid fa-share-nodes"
              onClick={() => handleReshare(index)}
              style={{ color: feed.reshares > 0 ? "blue" : "black" }}
            ></i>
            <p>{feed.reshares}</p>
            <i className="fa-solid fa-comment"></i>

            <div className="feed-actions">
              <i className="fa-solid fa-ellipsis"></i>
              <i className="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;


