import axios from 'axios'
import { Link } from 'react-router-dom'
import ReviewList from './ReviewList'
import { Card, Button, Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { CardContainer, FormContainer, HeaderText, SubText, Text } from '../style/Styledcomponents'
import { Component } from 'react'

const Review = ({title, body, rating}) => {
    return (
      <>
        
          <Card>
            <Card.Content>
              <Card.Header>{title}</Card.Header>
              <Card.Meta>Rating: {rating}</Card.Meta>
              <Card.Description>
                {body}
              </Card.Description>
            </Card.Content>
          </Card>
       
      </>
    );
}
// class Review extends Component {

//     addReview = (review) => {
//     const { campgroundId } = this.props
//     axios.post(`/api/campgrounds/${this.props.match.params.id}/review`, {review})
//       .then( res => {
//         const { review } = this.state 
//         this.setState({ review: [...review, res.data ]})
//       })
//       .catch( err => console.log(err))
//   }
//     deleteReview = (id) => {
//     const { campgroundId } = this.props
//     axios.delete(`/api/campgrounds/${this.props.match.params.id}/review/${id}`)
//       .then( res => {
//         const { review } = this.state 
//         this.setState({ review: review.filter( r => r.id !== id )})
//       })
//       .catch( err => console.log(err))
//   }

//     updateReview = (id, review) => {
//     const { campgroundId } = this.props
//     axios.put(`/api/campgrounds/${this.props.match.params.id}/review/${id}`, { review })
//       .then( res => {
//         const review = this.state.review.map( r => {
//           if (r.id === id)
//             return res.data
//           return r;
//         });
//         this.setState({ review })
//       })
//     }
//     render() {
//         const { reviews } = this.props
//         const { campgroundId  } = this.props
  
//         return (
//         <>
//          <Container>
//         <Header>Reviews about Campground</Header>
//         <h1>{campgroundId}</h1>
     
//          <br/>
//             <CardContainer>
//             <ReviewList
//           reviews={reviews}
//           deleteReview={this.deleteReview}
//           updateReview={this.updateReview}
//             />
//         </CardContainer>
//         <FormContainer>
//             <p>Add Review</p>
//             {/* <ReviewForm 
//             addReview={this.addReview}
//             updateReview={this.updateReview}
//             /> */}
//         </FormContainer>
//         </Container>
//         </>
//         )
//     }

// }


export default Review;