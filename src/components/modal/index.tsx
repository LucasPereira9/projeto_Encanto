import React, {useEffect, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import Button from '../button';
import {IModal} from './modal.Structure';
import {styles} from './style';
import {Text, View} from 'react-native';
import theme from '../../global/theme';

export const Modal = (props: IModal) => {
  const myRef = useRef<Modalize>();

  useEffect(() => {
    if (props.opened) {
      myRef.current?.open();
    } else {
      myRef.current?.close();
    }
  }, [props, props.opened]);

  return (
    <Modalize
      handlePosition="inside"
      handleStyle={{backgroundColor: theme.colors.primary}}
      adjustToContentHeight
      ref={myRef}>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
        <View
          style={[
            styles.buttonContainer,
            {flexDirection: props.secondButton ? 'row' : undefined},
          ]}>
          <Button
            isDisabled={false}
            pressed={() => {
              myRef.current?.close();
              props.buttonFunction();
            }}
            title={props.buttonTitle}
          />
          {props.secondButton && (
            <Button
              isDisabled={false}
              pressed={() => {
                myRef.current?.close();
              }}
              title="Cancelar"
            />
          )}
        </View>
      </View>
    </Modalize>
  );
};
