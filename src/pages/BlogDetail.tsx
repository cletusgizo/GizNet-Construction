import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogDetail = () => {
  // Blog post data
  const post = {
    id: 1,
    title: 'Sustainable Building Materials: The Future of Construction',
    slug: 'sustainable-building-materials-future-construction',
    excerpt: 'Explore the latest eco-friendly materials and practices that are revolutionizing the construction industry while reducing environmental impact.',
    content: `
      <p>The construction industry is experiencing a significant shift towards sustainability, with innovative materials and practices leading the way to a more environmentally conscious future. As climate change concerns grow and environmental regulations tighten, construction companies worldwide are adopting sustainable building materials and methods.</p>

      <h2>The Rise of Eco-Friendly Materials</h2>

      <p>Traditional construction materials like concrete and steel, while durable, have significant environmental impacts. The production of cement alone accounts for approximately 8% of global CO2 emissions. This has led to increased interest in alternative materials that offer similar performance with reduced environmental footprint.</p>

      <h3>Innovative Sustainable Materials</h3>

      <p>Several innovative materials are gaining traction in the construction industry:</p>

      <ul>
        <li><strong>Cross-Laminated Timber (CLT):</strong> This engineered wood product offers strength comparable to steel and concrete while storing carbon rather than emitting it.</li>
        <li><strong>Recycled Steel:</strong> Using recycled steel can reduce energy consumption by up to 75% compared to producing new steel.</li>
        <li><strong>Bamboo:</strong> Fast-growing and incredibly strong, bamboo is becoming popular for both structural and decorative applications.</li>
        <li><strong>Recycled Plastic Lumber:</strong> Made from post-consumer plastic waste, this material is ideal for outdoor applications and doesn't rot or decay.</li>
      </ul>

      <h2>Benefits Beyond Environmental Impact</h2>

      <p>Sustainable building materials offer numerous advantages beyond their environmental benefits:</p>

      <h3>Economic Advantages</h3>
      <p>While the initial cost of sustainable materials may be higher, they often provide long-term savings through:</p>
      <ul>
        <li>Lower energy costs due to better insulation properties</li>
        <li>Reduced maintenance requirements</li>
        <li>Potential tax incentives and rebates</li>
        <li>Higher property values</li>
      </ul>

      <h3>Health and Comfort</h3>
      <p>Many sustainable materials also contribute to better indoor air quality and occupant comfort. Natural materials like cork, bamboo, and natural stone don't emit volatile organic compounds (VOCs), creating healthier living and working environments.</p>

      <h2>Implementation Challenges</h2>

      <p>Despite their benefits, sustainable materials face several challenges in widespread adoption:</p>

      <ul>
        <li><strong>Supply Chain Limitations:</strong> Limited availability of sustainable materials can create supply chain challenges.</li>
        <li><strong>Building Codes:</strong> Existing building codes may not yet accommodate newer sustainable materials.</li>
        <li><strong>Education:</strong> Construction professionals need training on proper installation and use of new materials.</li>
        <li><strong>Initial Costs:</strong> Higher upfront costs can deter some developers and homeowners.</li>
      </ul>

      <h2>The Future of Sustainable Construction</h2>

      <p>The future of construction lies in the widespread adoption of sustainable practices and materials. We're already seeing exciting developments:</p>

      <ul>
        <li><strong>Bio-based materials:</strong> Materials grown from mycelium, algae, and other biological sources are showing promise.</li>
        <li><strong>3D printing:</strong> Additive manufacturing can reduce waste and allow for more efficient use of materials.</li>
        <li><strong>Smart materials:</strong> Self-healing concrete and materials that respond to environmental changes.</li>
        <li><strong>Circular economy:</strong> Design for disassembly and material reuse at the end of building life.</li>
      </ul>

      <h2>Making the Transition</h2>

      <p>For construction companies looking to incorporate sustainable materials, the transition should be gradual and strategic:</p>

      <ol>
        <li><strong>Start Small:</strong> Begin with non-structural applications to gain experience.</li>
        <li><strong>Partner with Suppliers:</strong> Work closely with suppliers who specialize in sustainable materials.</li>
        <li><strong>Educate Teams:</strong> Invest in training for your construction teams.</li>
        <li><strong>Communicate Benefits:</strong> Help clients understand the long-term value of sustainable choices.</li>
      </ol>

      <h2>Conclusion</h2>

      <p>Sustainable building materials represent not just an environmental imperative but also a business opportunity. As technology continues to advance and costs decrease, these materials will become the standard rather than the exception. Construction companies that embrace this transition early will be well-positioned for the future.</p>

      <p>At BuildCorp, we're committed to staying at the forefront of sustainable construction practices. We work closely with our clients to incorporate eco-friendly materials and methods whenever possible, ensuring that our projects contribute to a more sustainable future while meeting all performance requirements.</p>
    `,
    author: 'Sarah Johnson',
    authorRole: 'Chief Project Manager',
    authorImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Sustainability', 'Green Building', 'Materials', 'Environment', 'Innovation'],
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Smart Home Technology Integration in Modern Construction',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Technology',
      date: '2024-01-12',
    },
    {
      id: 3,
      title: 'Cost-Effective Renovation Strategies for Maximum Impact',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Renovation',
      date: '2024-01-10',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.title}
          </motion.h1>

          <motion.div 
            className="flex flex-wrap items-center gap-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article 
              className="lg:col-span-3 prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                '--tw-prose-body': 'rgb(75 85 99)',
                '--tw-prose-headings': 'rgb(30 58 138)',
                '--tw-prose-links': 'rgb(245 158 11)',
                '--tw-prose-bold': 'rgb(30 58 138)',
                '--tw-prose-counters': 'rgb(245 158 11)',
                '--tw-prose-bullets': 'rgb(245 158 11)',
                '--tw-prose-quotes': 'rgb(75 85 99)',
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Share */}
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="font-semibold text-navy-900 mb-4 flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Article
                  </h3>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="font-semibold text-navy-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-gold-300 hover:text-gold-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Author */}
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h3 className="font-semibold text-navy-900 mb-4">About the Author</h3>
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-navy-900">{post.author}</div>
                      <div className="text-gold-600 text-sm mb-2">{post.authorRole}</div>
                      <div className="text-gray-600 text-sm">
                        Experienced construction professional with expertise in 
                        sustainable building practices and project management.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Related Articles</h2>
            <p className="text-gray-600 text-lg">
              Continue reading with these related construction insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-navy-900 px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
            >
              View All Articles
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Sustainably?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can incorporate sustainable building practices 
              into your next construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;