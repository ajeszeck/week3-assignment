import { Component } from 'react';
import '../_stylesheets/CompressedListing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Liked } from '@fortawesome/free-solid-svg-icons'
import { faHeart as Unliked } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class CompressedListing extends Component {
  render() {
    let { payment, title, location, key, image } = this.props.info;

    let heartIcon = this.props.info.liked ? Liked : Unliked;
    let cartButtonText =  this.props.info.inCart ? "remove from cart" : "add to cart";
    let cartIcon =  this.props.info.inCart ? faMinusCircle : faPlusCircle;

    return (
      <div className="compressed-listing">
        <div className="image-container">
          <div className="black-overlay">
            <img className="listing-image" src={image} alt={title} />
          </div>
          <div className="price">
            <p>${payment.cost}/night</p>
            <p>{payment.description}</p>
          </div>
        </div>
        <div className="info-section">
        <div>
          <div>
            <h4>{title}</h4>
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
          <div className="buttons">
            <FontAwesomeIcon 
              icon={heartIcon} 
              className="heart-icon" 
              size="lg" 
              onClick={this.props.onLike(key)} 
            />
            <button onClick={this.props.onCart(key)}>
              <FontAwesomeIcon 
                icon={cartIcon} 
                className="plus-icon" 
                size="lg"
              />
              {cartButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

CompressedListing.propTypes = {
  onCart: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  info: PropTypes.shape({
    host: PropTypes.shape({
      isSuperHost: PropTypes.bool,
      name: PropTypes.string.isRequired,
    }),
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    inCart: PropTypes.bool.isRequired,
    location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }),
    payment: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
    rating: PropTypes.shape({
      reviews: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
    }),
    title: PropTypes.string.isRequired,
  })
}

export default CompressedListing;