import listings from './_data/airbnbs.json';
import React, { Component } from 'react';
import Listing from './Listing';
import CartIcon from './CartIcon';
import Cart from './Cart';
import './_stylesheets/HomePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/* 
TODO:
- Scrolling header / Parallax

Components: 
- Shopping Cart Done
- Shopping Cart Icon Container (to show count of listings in cart)
- Listing - done (but maybe adapt for compressed listing)
- Info Section (in listing)
- Rating ---> renders number of stars, some filled
*/ 

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.loadListings(listings),
      cartOpen: false
    }
  }

  loadListings = (listings) => {
    let fullListings = listings.map((listing, index) => {
      let tempListing = listing;
      tempListing["key"] = index;
      tempListing["liked"] = false;
      tempListing["inCart"] = false;
      return tempListing;
    })
    return fullListings;
  }

  handleLike = (key) => {
    return () => {
      let listings = this.state.listings;
      let listing = listings[key];
      listing.liked = !listing.liked;
      this.setState({
        listings
      })
    }
  }

  handleCart = (key) => {
    return () => {
      let listings = this.state.listings;
      let listing = listings.find(listing => listing.key === key);
      listing.inCart = !listing.inCart;
      this.setState({
        listings
      })
    }
  }

  showHideCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  render() {
    const renderListings = this.state.listings.map(listing => {
      return <Listing 
                key={listing.key} 
                info={listing} 
                onLike={this.handleLike}
                onCart={this.handleCart}
              />
    });

    const itemsInCart = this.state.listings.reduce((cart, item, index) => {
      if (item.inCart) {
        cart.push(item)
      }
      return cart;
    }, [])

    return (
      <div className="homepage">
        <div className="header">
          <h1>Home Away</h1>
          <h2>Find your next adventure</h2>
        </div>
        <div className="cart-section">
          {this.state.cartOpen &&
              <Cart 
                items={itemsInCart} 
                listings={this.state.listings} 
                onRemove={this.handleCart} 
                onLike={this.handleLike}
                onCart={this.handleCart}
                showHideCart={this.showHideCart}
              />
          }
        </div>
        <div className="header-icons">
          <h3 className="rental-header">Rentals</h3>
          <div className="filter-items">
            <FontAwesomeIcon icon={faHeart} className="icon" size="lg" />
            <CartIcon itemsInCart={itemsInCart.length} showHideCart={this.showHideCart} />
          </div>
        </div>
        <div className="listings">
          {renderListings}
        </div>
      </div>
    );
  }
}

export default HomePage;