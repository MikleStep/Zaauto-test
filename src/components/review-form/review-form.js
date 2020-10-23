import React, {Component} from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask'

import './review-form.css'

export default class ReviewForm extends Component {

  state = {
    name: '',
    email: '',
    text: ''
  };

  onInfoChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state);
    this.setState({
      name: '',
      email: '',
      text: ''
    })
  }

  render() {
    const {name, email, text} = this.state;
    return (
      <form className="review-form" onSubmit={this.onSubmit}>
        <label className="review-label">Имя: 
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Ivanov Ivan"
            onChange={this.onInfoChange}
            required />
        </label>
        <label className="review-label review-email">E-mail: 
          <MaskedInput
            label="Email:"
            mask={emailMask}
            type="text"
            value={email}
            keep_placeholder="true"
            name="email"
            placeholder="email@example.com"
            onChange={this.onInfoChange}
            required />
        </label>
        <label className="review-label">Отзыв: <textarea
          name="text"
          value={text}
          placeholder="Your review"
          onChange={this.onInfoChange}
          required></textarea>
        </label>
        <button>Добавить отзыв</button>
      </form>
    );
  }
}
