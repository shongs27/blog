export async function fetchPageContents(page) {
  const response = await fetch(`http://localhost:8000/${page}`);
  const data = await response.json();
  return data;
}
