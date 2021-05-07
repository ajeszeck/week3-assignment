import '../_stylesheets/CartIcon.scss'
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class CartIcon extends Component {
  render() {
    return (
      <div className="shopping-cart" onClick={this.props.showHideCart}>
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-icon" size="2x" />
        <div className="number">{this.props.itemsInCart}</div>
      </div>
    )
  }
}

CartIcon.propTypes = {
  showHideCart: PropTypes.func.isRequired,
  itemsInCart: PropTypes.number.isRequired,
}

export default CartIcon;