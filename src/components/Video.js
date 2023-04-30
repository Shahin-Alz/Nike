import React from 'react';
import videoNike from '../assets/nike.mp4.mp4';

const Video = () => {
    return (
        <div className='video1'>
            <video src={videoNike} autoPlay loop muted/>
        </div>
    );
};

export default Video;