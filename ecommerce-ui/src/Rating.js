import { Component } from 'react';
import './_stylesheets/Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as FilledStar} from '@fortawesome/free-solid-svg-icons'

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <p>
          {this.props.stars}</p>
          <FontAwesomeIcon 
            icon={FilledStar} 
            className="star-icon" 
            size="sm" 
          />
          <p>({this.props.reviews} reviews)</p>
      </div>
    )
  }
}

export default Rating;