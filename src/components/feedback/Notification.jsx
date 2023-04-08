import PropTypes from 'prop-types';


const Notification = ({ error }) => {
    return (
        <p>{error}</p>
    )
}

Notification.propTypes = {
    error: PropTypes.string
}

export default Notification;