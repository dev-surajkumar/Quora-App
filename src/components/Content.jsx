import React, { useContext, useEffect, useState } from 'react';
import './styles/content.css';
import logo from './assets/dpp.avif';
import { AuthContext } from '../AuthContext';
import Post from './Post';
import Feed from './Feed';
import Rightspace from './Rightspace';
import Leftspace from './Leftspace';
import { mainContent, spacesLeft } from './Details';
import SpaceBox from './SpaceBox';
import { Link } from 'react-router-dom';

const Content = () => {
    const { showPost, setShowPost, setIsQuestion, isSpace, setIsSpace, currentUser, setCurrentUser} = useContext(AuthContext);

    const [feeds, setFeeds] = useState([]);
    const [spaces, setSpaces]=useState([])

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const combined = [
            ...storedPosts,
            ...mainContent.filter(main =>
                !storedPosts.some(stored => stored.id === main.id)
            )
        ];
        setFeeds(combined);
        const savedSpaces = JSON.parse(localStorage.getItem('spaces')) || [];

    
        const combinedSpaces = [
            ...savedSpaces,
            ...spacesLeft.filter(space =>
                !savedSpaces.some(saved => saved.name === space.name)
            )
        ];

    setSpaces(combinedSpaces);
    }, []);

    const displayPost = () => {
        setIsQuestion(true);  
        setShowPost(true); 
    };

    const addNewPost = (newPost) => {
        setFeeds((prev) => [newPost, ...prev]);
    };
    const addNewSpace = (newSpace) => {
        setSpaces((prev) => [newSpace, ...prev]);
    };
    
    const showSpaceBoxCreate = () => {
        if (!currentUser){
            alert('Please Log In First')
        }else{
            setIsSpace(true)
        }


    }

    return (
        <main>
            <div className="left-container">
                <input type="text" placeholder="+ Create Space"
                onClick={showSpaceBoxCreate } />
                <Leftspace spaces={spaces}/>
            </div>
            <div className="main-container">
                <div className="create-post">
                    <div className="post-input">
                        <img src={logo} alt="dummy" />
                        <input 
                            type="text" 
                            placeholder="What do you want to ask or share?" 
                            onClick={displayPost}
                        />
                    </div>
                    <div className="main-post-action">
                        <div className="mpa" onClick={displayPost}>
                            <i className="fa-solid fa-clipboard-question"></i>
                            <p>Ask</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-file-pen"></i>
                            <Link to='/answers'>Answer</Link>
                        </div>
                        <div onClick={displayPost}>
                            <i className="fa-solid fa-pencil"></i>
                            <p>Post</p>
                        </div>
                    </div>
                </div>
                <Feed feeds={feeds} setFeeds={setFeeds}/>
            </div>
            <div className="right-container">
                <h3 className="rightTitle">Spaces to follow</h3>
                <Rightspace/>
            </div>
            {showPost && (
                 <div id="popup-overlay" >
                    <Post addNewPost={addNewPost} />
                </div>
            )}
            {isSpace && (
                <div className="space-popup">
                    <SpaceBox addNewSpace={addNewSpace}/>
                </div>
            )}
        </main>
    );
};

export default Content;
