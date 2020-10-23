import React, {Component} from 'react';

import ReviewForm from '../review-form';
import Spinner from '../spinner';

import './reviews.css'

export default class Reviews extends Component {

  render () {

    const { review, loading, onItemAdded } = this.props;
    const reviews = loading ? <Spinner /> : <ReviewForm onItemAdded={onItemAdded} review={review} />
    return (
      <div className="reviews">
        <h2>Отзывы</h2>
        {reviews}
      </div>
    )
  }

};
