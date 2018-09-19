import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/speakers/speakerCards.module.scss';

let SpeakerCard = function statelessFunctionComponentClass(props) {
  // let imageURL = './assets/speaker-headshots/' + 'arnaud_tanielian.jpg';
  // let imageURLPrefix = './assets/speaker-headshots/';
  let imageURLPrefix = 'https://thoughtatwork.cias.rit.edu/assets/graphics/2018-imagery/speaker-headshots/';

  return (
    <div className={classnames(styles.cardSize)}>
      <img className={classnames(styles.headshotContainer)}
        src={imageURLPrefix + props.headshot
          + '.jpg'}
      />
      <div className={classnames(styles.speakerCard_text)}>
        <h2 className={classnames(styles.speakerCard_text__spacing)}>
          {props.firstName + ' ' + props.lastName}
        </h2>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
