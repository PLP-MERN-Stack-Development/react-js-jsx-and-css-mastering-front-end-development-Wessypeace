import { User } from 'lucide-react';
import { Card } from './Card';

/**
 * Post card component for displaying API data
 */
export const PostCard = ({ post }) => {
  return (
    <Card hover>
      <div className="space-y-3">
        {/* User badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
            <User className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">User {post.userId}</span>
        </div>

        {/* Post title */}
        <h3 className="text-lg font-semibold text-foreground line-clamp-2 capitalize">
          {post.title}
        </h3>

        {/* Post body */}
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.body}
        </p>

        {/* Post ID badge */}
        <div className="pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">Post #{post.id}</span>
        </div>
      </div>
    </Card>
  );
};
