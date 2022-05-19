import React, {useState, useEffect} from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>{blogitem.content.substr(0,400)}</p>
            </div>
          );
        })}
       
      </main>
    </div>
  );
};

export default Blog;
