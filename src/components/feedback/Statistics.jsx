import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
// 1

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
    {total === 0 ? (
      <Notification error="There is no feedback"></Notification>
    ) : (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    )}
  </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;