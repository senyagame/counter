export default function (state, action) {
    switch (action.type) {
      case 'increment':
        return { counter: state.counter + 1 };
      case 'decrement':
        return { counter: state.counter - 1 };
      default:
        return { counter: 0 };
    }
  }
  