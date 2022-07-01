import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { reserveRocket, cancelRocket } from '../Redux/Rockets/rockets';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <img src={flickrImages[0]} alt="" />
      <div className="rocket-info">
        <h2>{rocketName}</h2>
        {reserved ? (
          <div>
            {' '}
            <p>
              <span className="reserved-badge">Reserved</span>
              {description}
            </p>
            <button
              type="button"
              className="reserved-button"
              onClick={() => dispatch(cancelRocket(id))}
            >
              Cancel Reservation
            </button>
          </div>
        ) : (
          <div>
            <p>{description}</p>
            <button type="button" onClick={() => dispatch(reserveRocket(id))}>
              Reserve Rocket
            </button>
            {' '}
          </div>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  rocketName: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.arrayOf(PropTypes.string),
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  id: '1',
  rocketName: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.arrayOf(PropTypes.string),
  reserved: PropTypes.bool,
};

export default Rocket;
