import React, { useContext, useState } from 'react';
import logo from './assets/dpp.avif';
import './styles/post.css'
import { AuthContext } from '../AuthContext'
import dummyImg from './assets/dpp.avif'
import dummyContent from './assets/p1.jpg'

const Post = ({addNewPost}) => {
    const {showPost, setShowPost, isQuestion, setIsQuestion, currentUser} = useContext(AuthContext);
    const [questions, setQuestions]=useState('');
    const [posts, setPosts]=useState('');

    // storing and sharing new question or post
    const handleSubmit = () => {
    if (isQuestion) {
        const newQuestion = {
            id: new Date().getTime(),
            question: questions,
            answer: '',
            date:  new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    }),
            Follow: 1,
        };
        const existingQuestions = JSON.parse(localStorage.getItem('questions')) || [];

        existingQuestions.unshift(newQuestion);

        localStorage.setItem('questions', JSON.stringify(existingQuestions));

        setShowPost(false);
        setQuestions('');
    } else {
        const first10Words = posts.split(' ').slice(0, 10).join(' ');
        const newPost = {
            id: new Date().getTime(),
            userUrl: dummyImg,
            postUrl: dummyContent,
            pageName: currentUser.username,
            authName: currentUser.username,
            date:  new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    }),
            title: first10Words,
            description: posts,
            upvotes: 0,
            downvotes: 0,
            reshares: 0
        };

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

        existingPosts.unshift(newPost);

        localStorage.setItem('posts', JSON.stringify(existingPosts));
        addNewPost(newPost)

        setShowPost(false);
        setPosts('');
    }
    };
    
  return (
    <div className="post-container">
    <div className="post-type">
        <i className="fa-solid fa-x" onClick={()=>setShowPost(false)}></i>
        <h4 onClick={()=>setIsQuestion(true)} className={isQuestion ? 'underline': ''}>Add Question</h4>
        <h4 onClick={()=>setIsQuestion(false)} className={isQuestion ? '': 'underline'}>Create Post</h4>
    </div>
    
    <div className={`ques-user-info ${isQuestion ? '': 'hidden2'}`}>
        <img src={logo} alt="dpp"/>
        <i className="fa-solid fa-arrow-right"></i>
        <div className="user">
            <i className="fa-regular fa-user"></i>
            <p>Public</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
    </div>
    <div className={`post-user-info ${isQuestion ? 'hidden2': ''}`}>
        <img src={logo}/>
        <i className="fa-solid fa-arrow-right"></i>
        <div className="user">
            <i className="fa-solid fa-globe"></i>
            <p>Everyone</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
    </div>
    <div className={`add-question ${isQuestion ? '': 'hidden2'}`}>
        <textarea
        value={questions}
        onChange={(e)=> setQuestions(e.target.value)}
        id="quesArea" type="text" placeholder="Start your questions with 'What', 'How', 'Why', etc.">

        </textarea>
    </div>
    <div className={`add-post ${isQuestion ? 'hidden2': ''}`}>
        <textarea 
            value={posts}
            onChange={(e)=> setPosts(e.target.value)}
            type="text" placeholder="Say something....">

        </textarea>
    </div>
    <div className="post-action">
        <div className={`post-media ${isQuestion ? 'hidden2': ''}`}>
            <p>Aa</p>
            <i className="fa-solid fa-images"></i>
        </div>
        <div className="post-btn">
           <button onClick={() => setShowPost(false)}>
                {isQuestion ? 'Cancel' : <i className="fa-solid fa-dollar-sign"></i>}
            </button>
            <button id='add-post-btn'
             onClick={handleSubmit}
             disabled={isQuestion ? !questions.trim() : !posts.trim()}>
                {isQuestion ? 'Add Question' : 'Post'}
            </button>
        </div>
    </div>

</div>
  )
}

export default Post
