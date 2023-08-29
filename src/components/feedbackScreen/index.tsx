import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import theme from '../../global/theme';
import Button from '../button';
import {IFeedbackProps} from './feedback.structure';

export default function FeedbackScreen(props: IFeedbackProps) {
  const [loading, setLoading] = React.useState(true as boolean);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.activeIndicatorContainer}>
          <ActivityIndicator size="large" color={theme.colors.white} />
        </View>
      ) : (
        <View style={styles.content}>
          <View>
            <LottieView
              style={styles.lottieContent}
              source={require('../../assets/animations/successAnim.json')}
              autoPlay
              loop={false}
            />

            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.buttonContent}>
            <Button
              pressed={props.onPressButton}
              title="Entendido!"
              isDisabled={false}
            />
          </View>
        </View>
      )}
    </View>
  );
}
