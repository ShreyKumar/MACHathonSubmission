/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      // Root: {
      //   screens: {
      //     Login: {
      //       screens: {
      //         LoginScreen: 'one',
      //       },
      //     },
      //     TabTwo: {
      //       screens: {
      //         CameraScreen: 'two',
      //       },
      //     },
      //     CameraPreview: {
      //       screens: {
      //         CameraPreview: 'cameraPreview'
      //       }
      //     }
      //   },
      // },
      LoginScreen: 'LoginScreen',
      ProductListings: 'ProductListings',
      CameraScreen: 'CameraScreen',
      CameraPreview: 'CameraPreview',
      SubmissionConfirmation: 'SubmissionConfirmation',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
