import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import './styles/spaceboxstyle.css';
import dummyImg from './assets/dpp.avif';

const SpaceBox = ({ addNewSpace }) => {
    const { isSpace, setIsSpace, currentUser } = useContext(AuthContext);
    const [spaceName, setSpaceName] = useState('');
    const [spaceDescription, setSpaceDescription] = useState('');

    const handleSpaceCreation = () => {
        if (!spaceName.trim()) return; // Prevent empty space creation

        const newSpace = {
            url: dummyImg,
            name: spaceName,
            description: spaceDescription,
        };

        const existingSpace = JSON.parse(localStorage.getItem('spaces')) || [];
        const updatedSpaces = [newSpace, ...existingSpace];
        localStorage.setItem('spaces', JSON.stringify(updatedSpaces));

        // Notify Content.jsx to update immediately
        if (addNewSpace) {
            addNewSpace(newSpace);
        }

        // Reset and close popup
        setIsSpace(false);
        setSpaceName('');
        setSpaceDescription('');
    };

    return (
        <div className='space-popup-container'>
            <i className="fa-solid fa-x" onClick={() => setIsSpace(false)}></i>
            <div className='space-top'>
                <h3>Create a Space</h3>
                <p>Share your interests, curate content, host discussion, and more.</p>
            </div>
            <div className="space-name">
                <h4>Name <p>*</p></h4>
                <p>This can be changed in Space settings.</p>
                <input
                    type="text"
                    value={spaceName}
                    onChange={(e) => setSpaceName(e.target.value)}
                    placeholder={`${currentUser.username}'s Space`}
                />
                <p className="special-space">This name is available</p>
            </div>
            <div className="space-description">
                <h4>Brief description</h4>
                <p>Include a few keywords to show people what to expect if they join.</p>
                <input
                    type="text"
                    value={spaceDescription}
                    onChange={(e) => setSpaceDescription(e.target.value)}
                />
            </div>
            <div className="space-create">
                <button onClick={handleSpaceCreation}>Create</button>
            </div>
        </div>
    );
};

export default SpaceBox;
