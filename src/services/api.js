export async function fetchPagesPosts(category) {
  const response = await fetch(`${process.env.backAPI}/posts/${category}`);
  const data = await response.json();
  return data;
}

export async function fetchPostDetail(category, id) {
  const response = await fetch(
    `${process.env.backAPI}/posts/${category}/${id}`
  );
  const data = await response.json();
  return data;
}

export async function fetchRecentPosts() {
  const response = await fetch(`${process.env.backAPI}/posts/recentPosts`);
  const { trial, posts } = await response.json();

  if (trial) {
    return posts;
  }
}
export async function fetchPopularPosts() {
  const response = await fetch(`${process.env.backAPI}/posts/popularPosts`);
  const { trial, posts } = await response.json();

  if (trial) {
    return posts;
  }
}

export async function fetchSearchField(searchField) {
  const response = await fetch(`${process.env.backAPI}/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: searchField,
  });
  const data = await response.json();

  return data;
}

export async function postLogin(email, password) {
  const response = await fetch(`${process.env.backAPI}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { trial, accessToken, userId } = await response.json();

  if (trial) return { userId, accessToken };
}

export async function postArticle(formData) {
  const response = await fetch(`${process.env.backAPI}/posts`, {
    method: 'POST',
    body: formData,
    // headers: {
    //   'Content-type': 'multipart/form-data',
    // },
  });

  const { trial, post } = await response.json();

  if (trial) {
    return { trial, post };
  }
}

export async function fetchGoogleAnalytics() {
  const result = await fetch(`${process.env.backAPI}/ga`);
  const data = await result.json();
  return data;
}

export async function patchLike(postId) {
  const result = await fetch(`${process.env.backAPI}/like/upLike`, {
    method: 'PATCH',
    body: postId,
  });
  const data = await result.json();
  return data;
}

export async function patchUnlike(postId) {
  const result = await fetch(`${process.env.backAPI}/like/unLike`, {
    method: 'PATCH',
    body: postId,
  });
  const data = await result.json();
  return data;
}

export async function fetchGuestBoard() {
  const result = await fetch(`${process.env.backAPI}/board`);
  const data = await result.json();
  return data;
}

export async function fetchBoardThread(threadId) {
  const result = await fetch(`${process.env.backAPI}/board/${threadId}`);
  const data = await result.json();
  return data;
}

export async function postThread(thread) {
  const result = await fetch(`${process.env.backAPI}/board`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(thread),
  });
  const data = await result.json();
  return data;
}

export async function patchThread(thread) {
  const result = await fetch(`${process.env.backAPI}/board`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(thread),
  });
  const data = await result.json();
  return data;
}

export async function postThreadLogin(loginState, id, password) {
  const result = await fetch(`${process.env.backAPI}/board/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loginState,
      id,
      password,
    }),
  });
  const data = await result.json();
  return data;
}
