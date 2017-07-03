
import React ,{Component} from 'react';
import { StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

/**
 * 界面组件
 */
import SplashScene from './SplashScene';


/**
 * 路由导航 
 */
const AppNavigator = StackNavigator(
    {
        Splash: { screen: SplashScene },
    },

    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '',
            showIcon: true
        },
        modal: 'card',
        headerMode: 'screen',
        transitionConfig:()=>({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        })
    }
);

export default AppNavigator;