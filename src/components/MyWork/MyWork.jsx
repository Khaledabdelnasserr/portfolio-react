import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data'; // Ensure you import the correct data file
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank'); // Opens the unique link in a new tab
    };

    return (
        <div id='work' className='my-work'>
            <div className="my-work-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="my-work-container">
                {mywork_data.map((work, index) => {
                    return (
                        <img
                            key={index}
                            src={work.w_img}
                            alt={work.w_name}
                            onClick={() => handleImageClick(work.link)} // Pass the unique link to the click handler
                            style={{ cursor: 'pointer' }} // Add pointer cursor
                        />
                    );
                })}
            </div>
            {/* <div className="my-work-show-more">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    );
};

export default MyWork;
