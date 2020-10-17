import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => {
  return <Button title="Skip" color="black" {...props} />;
};

const Next = ({...props}) => <Button title="Next" color="black" {...props} />;

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 14}}>Done</Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let backgroundcolor;

  backgroundcolor = selected ? 'rgba(0,0,0.8)' : 'rgba(0,0,0.3)';

  return (
    <View style={{width: 5, height: 5, marginHorizontal: 3, backgroundcolor}} />
  );
};

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      // DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding1.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding3.png')} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
