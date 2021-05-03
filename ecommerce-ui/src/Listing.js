import { Component } from 'react';
import './_stylesheets/Listing.scss';
import Rating from './Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Liked } from '@fortawesome/free-solid-svg-icons'
import { faHeart as Unliked } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class Listing extends Component {
  render() {
    let info = this.props.info;
    let superhost = info.host.isSuperhost;
    let heartIcon = this.props.info.liked ? Liked : Unliked;

    let cartButtonText =  this.props.info.inCart ? "remove from cart" : "add to cart";
    let cartIcon =  this.props.info.inCart ? faMinusCircle : faPlusCircle;
    let superhostText = superhost ? "• Superhost" : "" 

    return (
      <div className="listing">
        <div className="image-container">
          <div className="black-overlay">
            <img className="listing-image" src={info.image} alt={info.title} />
          </div>
          <div className="price">
            <p>${info.payment.cost}/night</p>
            <p>{info.payment.description}</p>
          </div>
        </div>
        <div className="info-section">
          <div>
            <div>
              <h4>{info.title}</h4>
              <p>{info.location.city}, {info.location.country}</p>
            </div>
            <div className="host">
              <p>Host: {info.host.name} <span className="superhost">{superhostText}</span></p>
            </div>
          </div>
          <Rating stars={info.rating.stars} reviews={info.rating.reviews} />
          <div className="buttons">
            <FontAwesomeIcon 
              icon={heartIcon} 
              className="heart-icon" 
              size="lg" 
              onClick={this.props.onLike(this.props.info.key)} 
            />
            <button onClick={this.props.onCart(this.props.info.key)}>
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

export default Listing;