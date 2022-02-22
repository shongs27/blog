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
