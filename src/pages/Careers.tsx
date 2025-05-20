
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';

// Mock job listings
const jobListings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer to join our team and help build the next generation of developer tools. You'll work closely with our design and product teams to create intuitive, high-performance user interfaces.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Experience with TypeScript and state management libraries",
      "Strong understanding of web performance optimization",
      "Experience with responsive design and accessibility",
      "Excellent communication and collaboration skills"
    ]
  },
  {
    id: "2",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Join our Infrastructure team to help build and maintain our cloud infrastructure. You'll be responsible for ensuring our systems are reliable, secure, and performant as we scale to meet growing customer demand.",
    requirements: [
      "3+ years of experience in a DevOps or SRE role",
      "Strong knowledge of containerization (Docker, Kubernetes)",
      "Experience with cloud providers (AWS, GCP, Azure)",
      "Familiarity with CI/CD tools and practices",
      "Scripting skills in Python, Bash, or similar languages"
    ]
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "We're seeking a product-minded leader to drive the vision and strategy for our developer tools. You'll work at the intersection of engineering, design, and business to deliver products that delight developers and solve real problems.",
    requirements: [
      "3+ years of product management experience",
      "Technical background or experience with developer tools",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management",
      "Ability to translate customer needs into product features"
    ]
  },
  {
    id: "4",
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "Full-time",
    description: "Help us create clear, comprehensive documentation for our developer tools. You'll work with engineering and product teams to ensure our users have the resources they need to be successful with our platform.",
    requirements: [
      "2+ years of experience writing technical documentation",
      "Familiarity with developer tools and APIs",
      "Strong writing and editing skills",
      "Ability to explain complex concepts clearly",
      "Experience with documentation tools and platforms"
    ]
  },
  {
    id: "5",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our design team to create intuitive, beautiful experiences for developers. You'll be involved in all stages of the design process, from research and ideation to implementation and testing.",
    requirements: [
      "3+ years of UX design experience",
      "Strong portfolio showing user-centered design process",
      "Experience with design systems and component libraries",
      "Proficiency with modern design tools (Figma, Sketch, etc.)",
      "Ability to collaborate effectively with engineers"
    ]
  }
];

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          {/* Hero section */}
          <section className="bg-gradient-to-r from-brand-purple/5 to-brand-teal/5">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h1>
                <p className="text-lg text-gray-700 mb-8">
                  We're building tools that empower developers to create amazing software.
                  Join us on our mission to make development more efficient, accessible, and enjoyable.
                </p>
                <button className="bg-gradient-to-r from-brand-purple to-brand-teal text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                  See Open Positions
                </button>
              </div>
            </div>
          </section>
          
          {/* Values section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-purple"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Users First</h3>
                  <p className="text-gray-600">
                    We're obsessed with understanding and solving our users' problems. Everything we build starts with empathy for their needs.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-teal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We cultivate curiosity and a growth mindset. We value learning and experimentation as essential parts of our work.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold mb-3">Meaningful Impact</h3>
                  <p className="text-gray-600">
                    We focus on work that matters and makes a tangible difference in developers' lives and the software they build.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Benefits section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Benefits & Perks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="inline-block bg-brand-purple/10 p-4 rounded-full mb-4">
                    <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-600">Work when you're most productive, with core collaboration hours.</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="inline-block bg-brand-teal/10 p-4 rounded-full mb-4">
                    <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Competitive Pay</h3>
                  <p className="text-gray-600">Salary and equity packages that recognize your value.</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="inline-block bg-blue-500/10 p-4 rounded-full mb-4">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Health & Wellness</h3>
                  <p className="text-gray-600">Comprehensive health benefits and wellness stipend.</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="inline-block bg-purple-500/10 p-4 rounded-full mb-4">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Learning Budget</h3>
                  <p className="text-gray-600">Annual budget for conferences, courses, and books.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Open positions */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-2 text-center">Open Positions</h2>
              <p className="text-center text-gray-600 mb-12">Join our team and help shape the future of developer tools</p>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                {jobListings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-purple transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{job.department}</span>
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">{job.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex justify-end">
                      <button className="text-brand-purple hover:underline font-medium">View Details</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
