import { useState, useEffect } from 'react';
import { Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchPosts, searchPosts } from '@/utils/api';
import { PostCard } from '@/components/PostCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/components/Button';

const POSTS_PER_PAGE = 12;

/**
 * API Data page component
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);

  // Fetch posts on mount and page change
  useEffect(() => {
    if (!searchQuery) {
      loadPosts();
    }
  }, [page]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPosts(POSTS_PER_PAGE, (page - 1) * POSTS_PER_PAGE);
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search with debouncing
  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        handleSearch();
      }, 500);
      return () => clearTimeout(timer);
    } else {
      loadPosts();
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      setSearching(true);
      setError(null);
      const data = await searchPosts(searchQuery);
      setPosts(data);
      setPage(1);
    } catch (err) {
      setError('Failed to search posts. Please try again.');
      console.error(err);
    } finally {
      setSearching(false);
    }
  };

  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => Math.max(1, p - 1));

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
          <Database className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">API Data Explorer</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse posts from JSONPlaceholder API with search and pagination
        </p>
      </div>

      {/* Search bar */}
      <div className="max-w-xl mx-auto">
        <SearchBar
          placeholder="Search posts by title or content..."
          onSearch={setSearchQuery}
        />
      </div>

      {/* Loading state */}
      {(loading || searching) && (
        <div className="py-12">
          <LoadingSpinner size="lg" />
          <p className="text-center text-muted-foreground mt-4">
            {searching ? 'Searching...' : 'Loading posts...'}
          </p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <ErrorMessage message={error} onRetry={searchQuery ? handleSearch : loadPosts} />
      )}

      {/* Posts grid */}
      {!loading && !searching && !error && (
        <>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? 'No posts found matching your search.' : 'No posts available.'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination - only show if not searching */}
              {!searchQuery && (
                <div className="flex items-center justify-center gap-4 pt-8">
                  <Button
                    variant="secondary"
                    onClick={prevPage}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Previous
                  </Button>
                  <span className="text-muted-foreground">Page {page}</span>
                  <Button
                    variant="secondary"
                    onClick={nextPage}
                    disabled={posts.length < POSTS_PER_PAGE}
                  >
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ApiData;
