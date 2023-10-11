var Sound = require('react-native-sound');

var NotificationSound = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    NotificationSound.setNumberOfLoops(-1);
    console.log('duration in seconds: ' + NotificationSound.getDuration() + 'number of channels: ' + NotificationSound.getNumberOfChannels());
  });

export default NotificationSound;