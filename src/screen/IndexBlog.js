import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';

const IndexBlog = () => {
  const {state, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>hello</Text>
      <Button title="Add New Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

IndexBlog.navigationOptions = () => ({
  headerTitle: 'Blog Page',
});

const styles = StyleSheet.create({});

export default IndexBlog;
