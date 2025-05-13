import React, { useState } from 'react'
import { questions } from './Details'
import './styles/answerstyle.css'

const Answers = () => {
    const [newQues, setNewQues]=useState(questions)
  return (
    <div className='answer-container'>
        <div className="answer-left">
            <h3>Questions</h3>
            <hr />
            <p className='all-questions-filter'>Questions for you</p>
            <p>Answer requests</p>
            <div><p>Drafts</p><span> 1</span></div>
        </div>
        <div className="answer-middle">
            <div className="answer-middle-top">
                <i class="fa-solid fa-star"></i>
                <p>Questions for you</p>
            </div>
            <hr />
            {newQues.map((item, index)=> (
                <div className="show-questions" key={index}>
                    <div className="quesBox">
                        <h4>{item.question}</h4>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div className="ansDetail">
                        <h5>{`${item.answers.length > 0 ? item.answers.length : 'No'} answers`}</h5>
                        <p>{`. Last followed ${item.date}`}</p>
                    </div>
                    <div className="ansAction">
                        <div className="ansActLeft">
                            <div className="ansActBox rounded">
                                <i className="fa-solid fa-file-pen"></i>
                                <p>Answer</p>
                            </div>
                            <div className="ansActBox">
                                <i className="fa-solid fa-signal"> </i>
                                <p>Follow . {item.Follow}</p>
                            </div>
                            <div className="ansActBox">
                                <i className="fa-solid fa-pen-ruler"></i>
                                <p>Pass</p>
                            </div>
                        </div>
                        <div className="ansActRight">
                            <i className="fa-solid fa-angles-down"></i>
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            ))}
            <div className="ask-user-action">
                <h4>Add 5 topics you know about</h4>
                <p>You'll get better questions if you add more specific topics</p>
                <button className='answer-page-button'>Add topics</button>
            </div>
        </div>
        <div className="answer-right">
            <div className="ansright-top">
                <h3>Topics you know about</h3>
                <i className="fa-solid fa-pen"></i>
            </div>
            
            <div className="right-topics">
                <hr />
                <i className="fa-solid fa-inbox"></i>
                <h4>No topics yet</h4>
                <p>you'll get better questions if you add more specific topics</p>
                <button className='answer-page-button'>Add topics</button>
            </div>
        </div>
      
    </div>
  )
}

export default Answers
