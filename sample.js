// const redux = require("redux");
// const createStore = redux.createStore;

// const BUY_CAKE = "BUY_CAKE";
// const INCREAMENT_COUNT = "DECEAMENT_COUNT";

// const buyCake = () => {
//   return {
//     type: BUY_CAKE,
//   };
// };

// const inceamentCount = () => {
//   return {
//     type: INCREAMENT_COUNT,
//   };
// };

// const initialState = {
//   numOfCake: 10,
//   count: 0,
// };

// const reduser = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//       case INCREAMENT_COUNT:
//           return{
//               ...state,
//               count: state.count + 5
//           }
//     default:
//       return state;
//   }
// };

// const store = createStore(reduser);
// console.log("initialState", store.getState());
// store.subscribe(() => {
//   console.log("updated State", store.getState());
// });
// store.dispatch(buyCake());
// store.dispatch(inceamentCount())

const redux = require("redux");
const createStore = redux.createStore;

const INCREAMENT_COUNT = "INCREAMENT_COUNT";
const DECREAMENT_COUNT = "DECREAMENT_COUNT";
const RESET = "RESET";

const increamentCount = () => {
  return {
    type: INCREAMENT_COUNT,
  };
};

const decreamentCount = () => {
  return {
    type: DECREAMENT_COUNT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_COUNT:
      return {
        ...state,
        count: state.count + 10,
      };
    case DECREAMENT_COUNT:
      return {
        ...state,
        count: state.count - 10,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initialState", store.getState());

store.subscribe(() => {
  console.log("updated State", store.getState());
});

store.dispatch(increamentCount());
store.dispatch(increamentCount());
store.dispatch(increamentCount());
store.dispatch(increamentCount());
store.dispatch(increamentCount());
store.dispatch(decreamentCount());
store.dispatch(decreamentCount());
store.dispatch(reset());
