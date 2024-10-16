import { TypeAnimation } from 'react-type-animation';

const Comments = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    `This is custom comments`,
                    1000, // 1 second pause
                ]}
                speed={50}
                style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
                repeat={Infinity}
            />
        </div>
    );
};


export default Comments;