import { GetServerSideProps } from 'next';
import { Post } from '@/types/post';
import { fetchPosts } from '@/lib/fetch-posts';
import { StartQuiz } from '@/components/StartQuiz';

interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  if (!posts.length) {
    return <p>Lütfen daha sonra tekrar deneyin.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="lg:w-3/12 md:w-4/12">
        <StartQuiz questions={posts} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPosts();
  return {
    props: { posts },
  };
};
