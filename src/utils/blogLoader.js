// Utility to load blog post content from HTML files
const blogContentCache = {};

export const loadBlogContent = async (filename) => {
  // Check cache first
  if (blogContentCache[filename]) {
    return blogContentCache[filename];
  }

  try {
    // Load the HTML file from the public directory
    const response = await fetch(`/blog-posts/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    
    const content = await response.text();
    blogContentCache[filename] = content;
    return content;
  } catch (error) {
    console.error(`Error loading blog content: ${error.message}`);
    return `<div class="text-red-500 p-4 bg-red-50 rounded-lg">
      <p><strong>Error:</strong> Could not load blog content from ${filename}</p>
      <p class="text-sm mt-2">Make sure the file exists in the public/blog-posts/ directory.</p>
    </div>`;
  }
}; 