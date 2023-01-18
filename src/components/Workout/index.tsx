import React from 'react'
import { useParams } from 'react-router-dom';

// Data
import Data from '../../data/workouts.json'

// Styles
import { Content, Wrapper } from './Workout.styles';

const Workout = () => {
    const { workoutId } = useParams()

    return (
        <Wrapper>
            {Data.map((content) => content.id === workoutId &&
                <Content key={content.id}>
                    <video  src={content.media} controls></video>
                    <h2>{content.title}</h2>
                    <div className='info'>
                        <p>
                            {content.description}
                        </p>
                        <br/>
                        <span><b>Level:</b> {content.levelTag}</span>
                        <br/>
                        <br/>
                        <span><b>Impact:</b> {content.impactTag}</span>
                    </div>
                </Content>
            )}
        </Wrapper>
    );
}

export default Workout;