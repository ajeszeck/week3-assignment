import { Component } from 'react';
import '../_stylesheets/Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as FilledStar} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class Rating extends Component {
  render() {
    let { stars, reviews } = this.props;

    return (
      <div className="rating">
        <p>
          {stars}</p>
          <FontAwesomeIcon 
            icon={FilledStar} 
            className="star-icon" 
            size="sm" 
          />
          <p>({reviews} reviews)</p>
      </div>
    )
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
}

export default Rating;