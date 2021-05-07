import { Component } from 'react';
import CompressedListing from './CompressedListing';
import '../_stylesheets/Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeamSweat } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'

class Cart extends Component {
  render() {
    const items = this.props.items.map(item => {
      return (<CompressedListing 
                key={item.key} 
                info={item} 
                onLike={this.props.onLike}
                onCart={this.props.onCart} 
              />);
    });

    const totalPrice = () => {
      let price = 0;
      this.props.items.forEach(item => {
        price += item.payment.cost;
      })
      return price;
    }

    return (
      <div className="cart-container">
        <div className="cart-header">
          <h3>Cart</h3>
          <FontAwesomeIcon 
            icon={faTimesCircle} 
            className="close-icon icon" 
            size="lg" 
            onClick={this.props.showHideCart} 
          />
        </div>
        <div className="cart">
          { this.props.items.length === 0 &&
            <p>Nothing here yet!
            <FontAwesomeIcon 
            icon={faGrinBeamSweat} 
            className="empty-cart-icon" 
            size="lg" 
            onClick={this.props.showHideCart} 
            />
            </p>
          }
          {items}
        </div>
        <div className="total-cost">
          {`Total: $${totalPrice()}`}
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
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



export default Cart;