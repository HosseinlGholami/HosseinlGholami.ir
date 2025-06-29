import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Camera } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to my blog and gallery! Here I share stories, experiences, and photos from my journey as a developer and beyond.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              to={`/blog/${post.slug}`}
              className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 h-64 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                  <div className="text-center p-6">
                    <Camera size={48} className="text-primary-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">Image placeholder</p>
                    <div className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full inline-block">
                      Add image to: public/images/{post.image.split('/').pop()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Instructions Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">📸 How to Add Your Images</h3>
            <div className="text-blue-800 space-y-2">
              <p>To add your own images to the blog:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Place your images in the <code className="bg-blue-100 px-1 rounded">public/images/</code> directory</li>
                <li>Update the image paths in <code className="bg-blue-100 px-1 rounded">src/data/blogPosts.js</code></li>
                <li>Use the same filenames as referenced in the data file</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Example:</strong> If your data shows <code className="bg-blue-100 px-1 rounded">/images/mountains.jpg</code>, 
                place your image as <code className="bg-blue-100 px-1 rounded">public/images/mountains.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 