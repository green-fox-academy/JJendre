// Reuse your BlogPost class
// Create a Blog class which can:
// store a list of BlogPosts
// and has the following methods:
// add(BlogPost) -> adds a BlogPost to the list
// delete(int) -> deletes the BlogPost from the given index
// update(int, BlogPost) -> replaces an item at the given index with a new BlogPost
import { BlogPost, BlogPost1 } from './blog-post';
export class Blog {
  listOfBlogPosts: BlogPost[] = [];

  add(blogPost: BlogPost): void {
    this.listOfBlogPosts.push(blogPost);
  }

  delete(int: number): void {
    this.listOfBlogPosts.splice(int, 1);
  }

  update(int: number, blogPost: BlogPost): void {
    this.listOfBlogPosts.splice(int, 1, blogPost);
  }
}

let userBlog = new Blog();
userBlog.add(BlogPost1);
console.log(userBlog);
userBlog.delete(0);
console.log(userBlog);
