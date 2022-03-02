export async function fetchPageContents(category) {
  const response = await fetch(`http://localhost:3000/${category}`);
  const data = await response.json();

  return data;
}

export async function fetchPageDetail(category, id) {
  const response = await fetch(`http://localhost:3000/${category}/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchRecentPosts() {
  const response = await fetch('http://localhost:3000/recentPosts');
  const data = await response.json();
  return data;
}

export async function fetchPopularPosts() {
  const response = await fetch('http://localhost:3000/popularPosts');
  const data = await response.json();
  return data;
}

export async function fetchSearchTarget(searchField) {
  //searchField를 어떻게 적용 시킬까?
  const response = await fetch(`http://localhost:3000/search`);
  const data = await response.json();
  return data;
}

export async function postLogin(email, address) {
  const response = await fetch('http://localhost:3000/login');

  // const response = await fetch('http://localhost:3000/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ email, address }),
  //   header: {
  //     'Content-type': 'application/json',
  //   },
  // });
  const { accessToken } = await response.json();

  return accessToken;
}

export async function postArticle(postForm) {
  const response = await fetch('http://localhost:3000/post', {
    method: 'POST',
    body: JSON.stringify(postForm),
    header: {
      'Content-type': 'multipart/form-data',
    },
  });

  return response.ok;
}
