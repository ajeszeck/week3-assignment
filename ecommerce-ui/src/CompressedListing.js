import { Component } from 'react';
import './_stylesheets/CompressedListing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Liked } from '@fortawesome/free-solid-svg-icons'
import { faHeart as Unliked } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

class CompressedListing extends Component {
  render() {
    let info = this.props.info;
    let heartIcon = this.props.info.liked ? Liked : Unliked;
    let cartIcon =  this.props.info.inCart ? faMinusCircle : faPlusCircle;

    return (
      <div className="compressed-listing">
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
        </div>
          <div className="buttons">
            <FontAwesomeIcon 
              icon={heartIcon} 
              className="heart-icon" 
              size="lg" 
              onClick={this.props.onLike(this.props.info.key)} 
            />
            <FontAwesomeIcon 
              icon={cartIcon} 
              className="plus-icon" 
              size="lg" 
              onClick={this.props.onCart(this.props.info.key)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CompressedListing;