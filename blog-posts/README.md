# Blog Posts Directory

This directory contains HTML files for your blog posts. Each file should contain the HTML content that will be displayed in your blog.

## How to Add a New Blog Post

1. **Create an HTML file** in this directory (e.g., `my-new-post.html`)
2. **Add a blog post entry** in `src/data/blogPosts.js`:
   ```javascript
   {
     slug: 'my-new-post',
     title: 'My New Blog Post',
     image: '/images/my-image.jpg',
     description: 'A brief description of the post',
     date: '2024-06-29',
     contentFile: 'my-new-post.html',
   }
   ```

## HTML Structure

Your HTML files should contain the content wrapped in a `<div class="blog-content">` container:

```html
<div class="blog-content">
  <h2>Your Post Title</h2>
  <p>Your content here...</p>
  
  <div class="image-container">
    <img src="/images/your-image.jpg" alt="Description">
    <p>Image caption</p>
  </div>
  
  <h3>Subsection</h3>
  <p>More content...</p>
</div>
```

## Available CSS Classes

You can use these CSS classes in your HTML:

- `image-container` - For images with captions
- `blog-highlight-box` - For highlighted content boxes
- `blog-grid` - For grid layouts
- `blog-stats-box` - For statistics/numbers
- `blog-note-box` - For notes/warnings

## Images

- Place your images in `public/images/`
- Reference them as `/images/filename.jpg` in your HTML
- Use the `image-container` class for proper styling

## Example

See `put-to-light.html` for a complete example of a blog post with images, sections, and styled content. 