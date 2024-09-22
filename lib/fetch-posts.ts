import { Post } from '@/types/post';

export const TOTAL_QUESTIONS = 10;

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error(`Error occured: ${res.status} - ${res.statusText}`);
    }
    const posts: Post[] = await res.json();
    return posts.slice(0, TOTAL_QUESTIONS);
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};
