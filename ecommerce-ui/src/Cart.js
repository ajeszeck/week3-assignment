import { Component } from 'react';
import CompressedListing from './CompressedListing';
import './_stylesheets/Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeamSweat } from '@fortawesome/free-regular-svg-icons'

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

export default Cart;