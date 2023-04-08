import React from 'react';
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {options.map(option => {
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;