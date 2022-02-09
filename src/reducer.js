const initialState = {
  pages: {
    main: [],
    js: [],
    react: [],
  },
};

const reducer = {
  setPageContents(state, { payload: { pageName, pageContents } }) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [pageName]: pageContents,
      },
    };
  },
};
function defaultReducer(state) {
  return state;
}

export default function (state = initialState, action) {
  return (reducer[action.type] || defaultReducer)(state, action);
}
