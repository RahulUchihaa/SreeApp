import React from 'react';
import {Controller} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
// import { WelcomescreenStyles } from '../../Styles/Globalstyles';
import {onChangeByValueType} from '../Helpers/Constants';

export const FormTextInput = (props: any) => {
  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: 'row',
          width: '82%',
          alignItems: 'center',
          paddingHorizontal: 15,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          elevation: 2,
          borderWidth: 1,
          borderColor: props.formState.errors[props.inputName]?.message
            ? 'red'
            : '#F5F5F5',
        }}>
        {props.icon && props.icon}
        <Controller
          name={props.inputName}
          control={props.control}
          defaultValue={props.defaultValue}
          rules={props.rules}
          render={inputProps => {
            return (
              <TextInput
                {...props}
                value={inputProps.field.value}
                onChangeText={value =>
                  onChangeByValueType(inputProps, value, props)
                }
                style={[props.style, {color: `#3d3d3d`}]}
                placeholderTextColor="#D3D3D3"
              />
            );
          }}
        />
      </View>
      <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Text
          style={{
            color: 'red',
            marginTop: 5,
            marginBottom: 5,
            textAlign: 'left',
            alignSelf: 'flex-start',
          }}>
          {props.formState.errors[props.inputName]?.message}
        </Text>
      </View>
    </React.Fragment>
  );
};
