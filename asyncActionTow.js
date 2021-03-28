const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialSate = {
  loading: false,
  posts: [],
  error: "",
};

const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsfailure = (err) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: err,
  };
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        let posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((err) => {
        dispatch(fetchPostsfailure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState());
    
})

store.dispatch(fetchPosts())
