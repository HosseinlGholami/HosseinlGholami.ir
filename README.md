# Hossein Gholami - Personal Website

A modern, responsive personal website built with React and Tailwind CSS. This site showcases your professional experience, open source contributions, and blog posts with a clean, modern design.

## 🌟 Features

- **Responsive Design:** Optimized for all devices and screen sizes
- **Modern UI/UX:** Built with React, Tailwind CSS, and Framer Motion
- **Client-Side Routing:** Smooth navigation with React Router
- **Data-Driven Content:** All content stored in separate data files for easy customization
- **Blog System:** Write blog posts as HTML files with embedded images
- **CV Download:** Direct download link for your resume
- **GitHub Pages Ready:** Configured for easy deployment

## 📱 Pages

- **Homepage:** Introduction, skills, and call-to-action
- **Work Experience:** Timeline of professional experience and achievements
- **Open Source Projects:** Showcase of GitHub contributions and projects
- **Blog:** Personal blog posts with rich HTML content and images

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hosseingholami/HosseinlGholami.ir.git
   cd HosseinlGholami.ir
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── public/
│   ├── images/         # Blog and website images
│   ├── file/           # Static files (CV, documents)
│   ├── blog-posts/     # HTML blog post files
│   ├── index.html      # Main HTML template
│   └── 404.html        # GitHub Pages routing support
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.js   # Navigation component
│   │   ├── Footer.js   # Footer component
│   │   └── BlogPost.js # Blog post renderer
│   ├── data/           # Website content
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   ├── workExperience.js
│   │   ├── openSourceProjects.js
│   │   └── blogPosts.js
│   ├── pages/          # Main pages
│   │   ├── Home.js
│   │   ├── WorkExperience.js
│   │   ├── OpenSource.js
│   │   └── Blog.js
│   ├── utils/          # Utility functions
│   │   └── blogLoader.js
│   ├── App.js          # Main app component
│   ├── index.js        # App entry point
│   └── index.css       # Tailwind CSS and custom styles
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── DEPLOYMENT.md       # GitHub Pages deployment guide
```

## 🎨 Customization

### Personal Information
Edit `src/data/personalInfo.js` to update:
- Your name, email, and social links
- About me content and statistics
- Professional summary

### Skills & Expertise
Modify `src/data/skills.js` to:
- Add/remove skills and technologies
- Update descriptions and icons
- Customize skill categories

### Work Experience
Update `src/data/workExperience.js` with:
- Your actual work history
- Projects and achievements
- Company information and dates

### Open Source Projects
Edit `src/data/openSourceProjects.js` to include:
- Your GitHub repositories
- Project descriptions and links
- Technologies used

### Blog Posts
1. **Add new posts** to `src/data/blogPosts.js`
2. **Create HTML files** in `public/blog-posts/`
3. **Include images** in `public/images/`
4. **Reference images** in your HTML with `/images/filename.jpg`

## 📝 Adding Blog Posts

1. **Create HTML file** in `public/blog-posts/` (e.g., `my-post.html`)
2. **Add post data** to `src/data/blogPosts.js`:
   ```javascript
   {
     id: 'my-post',
     title: 'My New Post',
     excerpt: 'Brief description...',
     date: '2024-01-15',
     image: '/images/post-image.jpg',
     htmlFile: '/blog-posts/my-post.html'
   }
   ```
3. **Write HTML content** using Tailwind CSS classes
4. **Include images** with `<img src="/images/your-image.jpg" />`

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder

Your site will be available at: `https://hosseingholami.github.io/HosseinlGholami.ir`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🛠️ Technologies Used

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **GitHub Pages** - Hosting platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions, please open an issue or submit a pull request.

---

Made with ❤️ using React & Tailwind CSS 