export async function fetchPageContents(category) {
  const response = await fetch(`http://localhost:8000/${category}`);
  const data = await response.json();

  return data;
}

export async function fetchPageDetail(category, id) {
  const response = await fetch(`http://localhost:8000/${category}/${id}`);
  const data = await response.json();
  return data;
}

export async function fetchRecentPosts() {
  const response = await fetch('http://localhost:8000/recentPosts');
  const data = await response.json();
  return data;
}

export async function fetchPopularPosts() {
  const response = await fetch('http://localhost:8000/popularPosts');
  const data = await response.json();
  return data;
}

export async function fetchSearchTarget(searchField) {
  //searchField를 어떻게 적용 시킬까?
  const response = await fetch(`http://localhost:8000/search`);
  const data = await response.json();
  return data;
}

export async function postLogin(email, password) {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { trial, accessToken } = await response.json();

  if (trial) return accessToken;
}

export async function postArticle(form) {
  const response = await fetch('http://localhost:3000/post', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response;
}
