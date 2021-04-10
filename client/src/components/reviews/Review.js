import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react';

const Review = ({title, body, rating}) => {
    return (
        <>
            <h1>{title}</h1>
            <h3>{body}</h3>
            <h4>{rating}</h4>

        </>
    )
}

export default Review;