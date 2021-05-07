import '../_stylesheets/HeartIcon.scss'
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

class HeartIcon extends Component {
  render() {
    return (
      <div className="liked-cart" onClick={this.props.showHideLiked}>
        <FontAwesomeIcon icon={faHeart} className="liked-icon" size="2x" />
        <div className="number">{this.props.itemsInLiked}</div>
      </div>
    )
  }
}

HeartIcon.propTypes = {
  showHideLiked: PropTypes.func.isRequired,
  itemsInLiked: PropTypes.number.isRequired,
}

export default HeartIcon;