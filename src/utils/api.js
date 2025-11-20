const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch posts from JSONPlaceholder API
 * @param {number} limit - Number of posts to fetch
 * @param {number} start - Starting index for pagination
 */
export const fetchPosts = async (limit = 10, start = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_start=${start}&_limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Search posts by title or body content
 * @param {string} query - Search query string
 */
export const searchPosts = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const lowerQuery = query.toLowerCase();
    
    return data.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.body.toLowerCase().includes(lowerQuery)
    );
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};
