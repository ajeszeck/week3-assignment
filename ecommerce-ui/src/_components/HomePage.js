import listings from '../_data/airbnbs.json';
import React, { Component } from 'react';
import Listing from './Listing';
import CartIcon from './CartIcon';
import HeartIcon from './HeartIcon';
import Cart from './Cart';
import Liked from './Liked';
import '../_stylesheets/HomePage.scss'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.loadListings(listings),
      cartOpen: false,
      likedOpen: false
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

  showHideLiked = () => {
    this.setState({
      likedOpen: !this.state.likedOpen
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

    const itemsInLiked = this.state.listings.reduce((liked, item, index) => {
      if (item.liked) {
        liked.push(item)
      }
      return liked;
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
        <div className="liked-section">
          {this.state.likedOpen &&
              <Liked 
                items={itemsInLiked} 
                listings={this.state.listings} 
                onRemove={this.handleCart} 
                onLike={this.handleLike}
                onCart={this.handleCart}
                showHideLiked={this.showHideLiked}
              />
          }
        </div>
        <div className="header-icons">
          <h3 className="rental-header">Rentals</h3>
          <div className="filter-items">
            <HeartIcon itemsInLiked={itemsInLiked.length} showHideLiked={this.showHideLiked} />
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