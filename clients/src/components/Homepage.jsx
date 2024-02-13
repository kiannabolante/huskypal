import React, { useState } from 'react';
import styles from './Homepage.css';
import { Link } from 'react-router-dom';

function TraitBox() {
  return (

    <div className="trait-container">

      <section className="button-section">
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </section>

      <div className="trait-header">
        Welcome! Please pick a trait for your HuskyPal:
      </div>
      <div className="trait-option">
        <input type="radio" id="athletic" name="trait" value="athletic" />
        <label htmlFor="athletic">ATHLETIC</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="creative" name="trait" value="creative" />
        <label htmlFor="creative">CREATIVE</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="studious" name="trait" value="studious" />
        <label htmlFor="studious">STUDIOUS</label>
      </div>
      <div className="trait-option">
        <input type="radio" id="foodie" name="trait" value="foodie" />
        <label htmlFor="foodie">FOODIE</label>
      </div>
      <div>
        <Link to="/user/todolist">
          <button type="submit">Submit</button>
        </Link>
      </div>
      <div class="trait">This trait will determine what UW challenges you're assigned!</div>

    </div>
  );
}

export default TraitBox;