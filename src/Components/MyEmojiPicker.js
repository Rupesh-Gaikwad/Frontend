import React from 'react';
import Picker from 'emoji-picker-react';

const MyEmojiPicker = () => {

  return (
    <div>
      <Picker preload={true}/>
    </div>
  );
};

export default MyEmojiPicker;