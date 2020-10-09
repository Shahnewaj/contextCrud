import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [...state, {title: `new post id # ${state.length + 1}`}];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'add_blogPost'});
  };
};

export const {Context, Provider} = createDataContext(
  BlogReducer,
  {addBlogPost},
  [],
);
