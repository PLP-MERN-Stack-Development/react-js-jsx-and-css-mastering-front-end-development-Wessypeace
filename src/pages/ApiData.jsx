import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function ApiData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <Card title="API Data (JSONPlaceholder)">
        {posts.map(post => (
          <div key={post.id} className="mb-4">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}