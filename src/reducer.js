const initialState = {
  scrollY: 0,
  GA: {
    realTimeUsers: '',
    yesterdayActiveUsers: '',
    monthActiveUsers: '',
  },
  post: '',
  likePost: [],
  posts: {
    all: [],
    js: [],
    react: [],
    computer: [],
    recentPosts: [],
    popularPosts: [],
  },
  search: {
    searchField: '',
    searchedPosts: [],
  },
  login: {
    loginField: {
      email: '',
      password: '',
    },
    userId: '',
    accessToken: '',
  },
  page: { title: '', description: '', category: '' },
  guestBoard: {
    formMode: false,
    loginField: {
      password: '',
    },
    threadField: {
      title: '',
      name: '',
      password: '',
      content: '',
    },
    board: [],
    thread: { id: '', name: '', title: '', content: '' },
  },
};

const reducer = {
  setPagesPosts(state, { payload: { category, pagePosts } }) {
    return {
      ...state,
      posts: {
        ...state.posts,
        [category]: pagePosts,
      },
    };
  },

  setPostDetail(state, { payload: { postDetail } }) {
    return {
      ...state,
      post: postDetail,
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

  setSearchTarget(state, { payload: { searchedPosts } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchedPosts,
      },
    };
  },

  reverseClicked(state) {
    return {
      ...state,
      clicked: !state.clicked,
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      login: {
        ...state.login,
        loginField: {
          ...state.login.loginField,
          [name]: value,
        },
      },
    };
  },

  setAccessToken(state, { payload: { userId, accessToken } }) {
    return {
      ...state,
      login: {
        ...state.login,
        userId,
        accessToken,
      },
    };
  },

  logout(state) {
    return {
      ...state,
      login: {
        ...state.login,
        userId: '',
        accessToken: '',
      },
    };
  },

  changePostField(state, { payload: { name, value } }) {
    return {
      ...state,
      page: {
        ...state.page,
        [name]: value,
      },
    };
  },

  setGoogleAnalytics(state, { payload: { activeUsers } }) {
    return {
      ...state,
      GA: activeUsers,
    };
  },

  setLikePost(state, { payload: { likePost } }) {
    return {
      ...state,
      likePost,
    };
  },

  setGuestBoard(state, { payload: { guestBoard } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        board: guestBoard,
      },
    };
  },

  setBoardThread(state, { payload: { thread } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        thread,
      },
    };
  },

  changeThreadField(state, { payload: { name, value } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        threadField: {
          ...state.guestBoard.threadField,
          [name]: value,
        },
      },
    };
  },

  setThreadField(state, { payload: { thread } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        threadField: {
          //패스워드만 비워두기
          password: '',
          ...thread,
        },
      },
    };
  },

  changeThreadLoginField(state, { payload: { password } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        loginField: {
          password,
        },
      },
    };
  },

  changeFormMode(state, { payload: { formMode } }) {
    return {
      ...state,
      guestBoard: {
        ...state.guestBoard,
        formMode,
      },
    };
  },

  changeScrollY(state, { payload: { scrollY } }) {
    return {
      ...state,
      scrollY,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function (state = initialState, action) {
  return (reducer[action.type] || defaultReducer)(state, action);
}
