# Deploying to GitHub Pages

This guide will help you deploy your personal website to GitHub Pages.

## Prerequisites

1. Make sure your project is pushed to a GitHub repository
2. The repository should be named `HosseinlGholami.ir` (or update the homepage in package.json accordingly)

## Deployment Steps

### 1. Build and Deploy

Run the following command to build and deploy your website:

```bash
npm run deploy
```

This command will:
- Build your React app for production
- Deploy it to the `gh-pages` branch on GitHub
- Make it available at `https://hosseingholami.github.io/HosseinlGholami.ir`

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 3. Verify Deployment

After a few minutes, your website should be live at:
`https://hosseingholami.github.io/HosseinlGholami.ir`

## Important Notes

- **Repository Name**: Make sure your GitHub repository is named exactly `HosseinlGholami.ir` to match the homepage URL in package.json
- **Custom Domain**: If you want to use a custom domain, you can configure it in the GitHub Pages settings
- **Routing**: The app includes special scripts to handle client-side routing on GitHub Pages
- **Updates**: To update your website, simply run `npm run deploy` again

## Troubleshooting

### If the homepage URL doesn't match your repository:
Update the `homepage` field in `package.json` to match your actual GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### If routing doesn't work:
Make sure both `public/404.html` and the script in `public/index.html` are present and unchanged.

### If assets don't load:
Check that all file paths in your code use relative paths (they should work correctly with the current setup).

## File Structure for GitHub Pages

The deployment will create a `gh-pages` branch with this structure:
```
/
├── static/
├── asset-manifest.json
├── favicon.ico
├── index.html
├── manifest.json
└── ... (other build files)
```

Your static assets (images, PDFs, blog posts) will be available at:
- Images: `https://hosseingholami.github.io/HosseinlGholami.ir/images/`
- PDF: `https://hosseingholami.github.io/HosseinlGholami.ir/file/HosseinGholamiCV.pdf`
- Blog posts: `https://hosseingholami.github.io/HosseinlGholami.ir/blog-posts/` 