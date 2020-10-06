import React, {useReducer} from 'react';
import {Children} from 'react';

const BlogContext = React.createContext();

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state, {title: `new post id # ${state.length + 1}`}];

    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  const [state, dispatch] = useReducer(BlogReducer, []);

  const addBlogPost = () => {
    return dispatch({type: 'add_blogPost'});
  };
  return (
    <BlogContext.Provider value={{data: state, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
