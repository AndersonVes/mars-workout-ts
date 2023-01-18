import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import { Wrapper } from './WorkoutItem.styles';
import { BsClock } from 'react-icons/bs'

type WorkoutProps = {
    description: string,
    thumbnail: string,
    levelTag: string,
    media: string,
    title: string,
    impactTag: string,
    id: string,
    trainerId: string,
    duration: number,
}

const WorkoutItem = (props: WorkoutProps) => {
    return (
        <Link to={`workout/${props.id}`} >
            <Wrapper>
                <img src={props.thumbnail} alt={props.title} />
                <div className='info'>
                    <h5>{props.title}</h5>
                    <span><BsClock /> {props.duration} min.</span>
                </div>
            </Wrapper>
        </Link>
    );
}

export default WorkoutItem;