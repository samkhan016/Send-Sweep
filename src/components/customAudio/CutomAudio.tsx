import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player'; // Replace 'some-audio-library' with the actual library you are using
import {MotiView} from 'moti'; // Assuming you are using a library like 'moti' for animations
import Theme from '../../utils/theme';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const audioRecorderPlayer = new AudioRecorderPlayer();

const CustomAudio = ({onEndRecord, onStopPlayer}: any) => {
  const [recordTime, setRecordTime] = useState('00:00');
  const [isAnimated, setIsAnimated] = useState(false);
  const [isRecordState, setIsRecordState] = useState(false);

  const path = Platform.select({
    ios: undefined,
    android: undefined,
  });

  useEffect(() => {
    const startRecording = async () => {
      try {
        await audioRecorderPlayer.startRecorder(path);
        setIsRecordState(true);
        audioRecorderPlayer.addRecordBackListener(e => {
          setRecordTime(
            audioRecorderPlayer.mmss(Math.floor(e.currentPosition / 60)),
          );
        });
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    };

    startRecording();

    return () => {
      audioRecorderPlayer.removeRecordBackListener();
      audioRecorderPlayer.removePlayBackListener();
    };
  }, [path, isRecordState]);

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecordTime('00:00'); // Reset record time
      setIsAnimated(false);
      setIsRecordState(false);
      onEndRecord(result);
      onStopPlayer();
      console.log({result});
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  const onStopPlay = () => {
    audioRecorderPlayer.stopPlayer();
    onStopPlayer();
  };

  const onRecordStateView = () => (
    <View style={styles().buttonStyle}>
      <TouchableOpacity onPress={onStopRecord}>
        <Image
          style={styles().playerButtons}
          source={require('../../assets/stop.png')}
        />
      </TouchableOpacity>
      <Text style={styles().timeStyle}>{recordTime}</Text>
      <TouchableOpacity onPress={onStopPlay}>
        <Image
          style={styles().profileEditButton}
          source={require('../../assets/crossCircleIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <MotiView
      from={styles().rootInitial}
      animate={styles(isRecordState).rootFinal}
      onDidAnimate={() => setIsAnimated(true)}
      transition={{type: 'timing'}}>
      {isAnimated && onRecordStateView()}
    </MotiView>
  );
};

export default CustomAudio;

const styles = (props?: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455A64',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleTxt: {
      marginTop: 100,
      color: 'white',
      fontSize: 28,
    },
    viewRecorder: {
      marginTop: 40,
      width: '100%',
      alignItems: 'center',
    },
    recordBtnWrapper: {
      flexDirection: 'row',
    },
    viewPlayer: {
      marginTop: 60,
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    viewBarWrapper: {
      marginTop: 28,
      marginHorizontal: 28,
      alignSelf: 'stretch',
    },
    viewBar: {
      backgroundColor: '#ccc',
      height: 4,
      alignSelf: 'stretch',
    },
    viewBarPlay: {
      backgroundColor: 'white',
      height: 4,
      width: 0,
    },
    playStatusTxt: {
      marginTop: 8,
      color: '#ccc',
    },
    playBtnWrapper: {
      flexDirection: 'row',
      marginTop: 40,
    },
    btn: {
      borderColor: 'white',
      borderWidth: 1,
    },
    txt: {
      color: 'white',
      fontSize: 14,
      marginHorizontal: 8,
      marginVertical: 4,
    },
    txtRecordCounter: {
      marginTop: 32,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
    },
    txtCounter: {
      marginTop: 12,
      color: 'white',
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: '200',
      fontFamily: 'Helvetica Neue',
      letterSpacing: 3,
    },
    rootInitial: {
      flex: 0.2,
      borderRadius: 35 / 2,
      height: 35,
      backgroundColor: Theme.APP_RECORDER_BLUE,
    },
    rootFinal: {
      flex: props ? 1 : 0.2,
      borderRadius: 35 / 2,
      height: 35,
      backgroundColor: Theme.APP_RECORDER_BLUE,
    },
    crossImageContainer: {
      position: 'absolute',
      right: heightPercentageToDP(-1),
      top: heightPercentageToDP(-1),
    },

    profileEditButton: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.07,
      height: Dimensions.get('window').width * 0.07,
      tintColor: Theme.APP_WHITE_COLOR,
    },
    playerButtons: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },

    buttonStyle: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    timeStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 11,
    },
  });
