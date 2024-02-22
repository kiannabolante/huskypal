import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DubsTrack.css';

import huskyAvatar from "../images/huskyAvatar.png";
import activatedLevels from "../images/nav-bar/activatedLevels.png";
import activatedHome from "../images/nav-bar/activatedHome.png";
import deactivatedPals from "../images/nav-bar/deactivatedPals.png";
import deactivatedLevels from "../images/nav-bar/deactivatedLevels.png";
import deactivatedCloset from "../images/nav-bar/deactivatedCloset.png";

function DubsTrack() {
    const [selectedItems, setSelectedItems] = useState([]);

    // Retrieve the selected items from localStorage on component mount
    useEffect(() => {
        const storedItems = localStorage.getItem('selectedItems');
        if (storedItems) {
            setSelectedItems(JSON.parse(storedItems));
        }
    }, []);

    return (
        <div className="track-container">
            <header className="header">
                <div className="trophy-icon">
                    {' '}
                    <img src={activatedLevels} alt="level display" className="homeLevel" />
                </div>
                <div className="level">4</div>
            </header>
            <div className="profile">
                <h3>Dubs</h3>
            </div>
            <div className="avatar">
                <img src={huskyAvatar} alt="husky" />
                <div className="selected-items">
                    {selectedItems.map((item, index) => (
                        <img key={index} src={item.image} alt={`selected item ${index}`} />
                    ))}
                </div>
            </div>

            <div className="floor-content">
                <div className="track-title">
                    <h3>Athletic Track</h3>
                </div>
                <ul className="activities">
                    <li className="completed"><input type="checkbox"/> Go on a run on the Burke Gilman Trail</li>
                    <li><input type="checkbox" /> Attend Friday night skating at the IMA</li>
                    <li><input type="checkbox" /> Watch an upcoming UW sports game</li>
                    <li><input type="checkbox" /> Join a sports or fitness-related RSO</li>
                </ul>
            </div>

            <section className="logos">
                <div>
                    <Link to="/user/todolist">
                        <img src={activatedHome} alt="home button to get to home page" className="imageSize imageSpace" />
                    </Link>
                </div>
                <div>
                    <Link to="/user/accessories">
                        <img src={deactivatedCloset} alt="closet button to see accessories " className="imageSize imageSpace" />
                    </Link>
                </div>
                <div>
                    <Link to="/user/level">
                        <img src={deactivatedLevels} alt="levels button to see progress and rewards" className="imageSize imageSpace" />
                    </Link>
                </div>
                <div>
                    <Link to="/user/pal">
                        <img src={deactivatedPals} alt="pals button to connect with others" className="imageSize imageSpace" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default DubsTrack;