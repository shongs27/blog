const initialState = {
  pages: {
    home: [],
    js: [],
    react: [],
  },
  page: { id: '', title: '', content: '' },
  posts: {
    recentPosts: [],
    popularPosts: [],
  },
  search: {
    searchField: '',
    searchTarget: [],
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

  setPageDetail(state, { payload: { pageDetail } }) {
    return {
      ...state,
      page: pageDetail,
    };
  },

  setRecentPosts(state, { payload: { recentPosts } }) {
    return {
      ...state,
      posts: { ...state.posts, recentPosts },
    };
  },

  setPopularPosts(state, { payload: { popularPosts } }) {
    return {
      ...state,
      posts: { ...state.posts, popularPosts },
    };
  },

  changeSearchField(state, { payload: { searchField } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchField,
      },
    };
  },

  setSearchTarget(state, { payload: { searchTarget } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchTarget,
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
