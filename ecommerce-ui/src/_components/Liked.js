import { Component } from 'react';
import CompressedListing from './CompressedListing';
import '../_stylesheets/Liked.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faGrin } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'


class Liked extends Component {
  render() {
    const items = this.props.items.map(item => {
      return (<CompressedListing 
                key={item.key} 
                info={item} 
                onLike={this.props.onLike}
                onCart={this.props.onCart} 
              />);
    });

    return (
      <div className="cart-container">
        <div className="liked-header">
          <h3>Liked</h3>
          <FontAwesomeIcon 
            icon={faTimesCircle} 
            className="close-icon icon" 
            size="lg" 
            onClick={this.props.showHideLiked} 
          />
        </div>
        <div className="liked">
          { this.props.items.length === 0 &&
            <p>Nothing here yet!<br></br><br></br>Check out some of our listings below!
            <FontAwesomeIcon 
            icon={faGrin} 
            className="empty-cart-icon" 
            size="lg" 
            onClick={this.props.showHideLiked} 
            />
            </p>
          }
          {items}
        </div>
      </div>
    )
  }
}

Liked.propTypes = {
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

export default Liked;