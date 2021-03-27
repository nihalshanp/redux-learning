const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineRedusers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAMS = "BUY_ICECREAMS";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first action",
  };
}

function buyIcream() {
  return {
    type: BUY_ICECREAMS,
  };
}

// const initialState = {
//   numOfCake: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case BUY_ICECREAMS:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReduser = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const iceCreamReduser = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReduser = combineRedusers({
  cake: cakeReduser,
  iceCream: iceCreamReduser,
});

const store = createStore(rootReduser, applyMiddleware(logger));
console.log("initial State", store.getState());
const unsubscribe = store.subscribe(() => {} );
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());
unsubscribe();

