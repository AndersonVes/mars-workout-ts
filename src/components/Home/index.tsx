import React from 'react'

// Data
import Data from '../../data/workouts.json'

// Compoents
import WorkoutItem from '../WorkoutItem';

// Styles
import { Wrapper } from './Home.styles';

const Home = () => {
    return (
        <Wrapper>
            <h2>Our classes:</h2>
            <div className='workout-grid'>
            {
                Data.map((content) =><WorkoutItem title={content.title} thumbnail={content.thumbnail} duration={content.duration} id={content.id} key={content.id} description={content.description} levelTag={content.levelTag} media={content.media} impactTag={content.impactTag} trainerId={content.trainerId}/>
                    
                )
            }
            </div>
        </Wrapper>
    );
}

export default Home;