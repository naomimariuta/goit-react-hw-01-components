import React from "react";
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes } = stats;

  const handleLocationClick = () => {
    window.open(`https://www.google.com/maps/search/${location}`, '_blank');
  };

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User Avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location} onClick={handleLocationClick}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
