import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Overall = () => {
    const percentage = 66;

    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.35,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />;
        </div>
    );
};

export default Overall;