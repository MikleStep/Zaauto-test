import React, { Component } from 'react';

import FilmsPage from '../films-page';
import Reviews from '../reviews/reviews'
import ReviewsModal from '../review-modal'

import './app.css';
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  maxId = 100;

  swapiService = new SwapiService();

  state = {
    review: {},
    modalStatus: false,
    loading: false
  }

  addReview(name, email, text) {
    return {
      name,
      email,
      text,
      id: this.maxId++
    }
  }

  updateReview = ({name, email, text}) => {
    this.setState({
      loading: true
    });
    new Promise ((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      document.body.classList.add('modal-open');
      this.setState({
        review: this.addReview(name, email, text),
        modalStatus: true,
        loading: false
      });
    });
    
  };

  hideModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({modalStatus: false});
  };


  render() {

    const { review, modalStatus, loading } = this.state;
    const modal = modalStatus ? <ReviewsModal review={review} hideModal={this.hideModal}/> : null;
    return (
      <div className="stardb-app">

        <FilmsPage />

        <div className="row">
          <div className="col-md-6">
            <Reviews 
              review={review}
              loading={loading}
              onItemAdded={this.updateReview}/>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}
