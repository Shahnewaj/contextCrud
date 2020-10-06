import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexBlog from '../src/screen/IndexBlog';

const AppStack = createStackNavigator({
  Home: IndexBlog,
});

export default createAppContainer(AppStack);
