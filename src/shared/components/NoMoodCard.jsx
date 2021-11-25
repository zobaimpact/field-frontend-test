import React from 'react';

const NoMoodCard = ({text, image}) => {
  return <div className='no_mood_card no_mood flex_display-center'>
      {/* You can dynamically pass in the width and heights, classNames etc  */}
      <div className="no_mood-img"><img src={image} width="50px" height="50px"/></div>
      <div className="no_mood_text-wrap"><p className="no_mood-para">{text}</p></div>
  </div>;
};

export default NoMoodCard;
