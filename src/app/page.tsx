"use client";

import React, { useState, useEffect } from 'react';
import {Code, Rocket, Coffee,Camera, Twitter, Linkedin } from 'lucide-react';


export default function AayushPortfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [showProfessionalDialog, setShowProfessionalDialog] = useState(false);
  const [noteMessage, setNoteMessage] = useState('');
  const [noteName, setNoteName] = useState('');
  const [noteEmail, setNoteEmail] = useState('');

  // Debug: Log state changes
  useEffect(() => {
    console.log('showNoteDialog state changed:', showNoteDialog);
    console.log('showProfessionalDialog state changed:', showProfessionalDialog);
  }, [showNoteDialog, showProfessionalDialog]);

  const projects = [
    {
      title: "Prompt search engine",
      tech: "Nextjs • Python • Supabase • Pinecone • OpenAI embeddings",
      description: "Search engine for high quality AI prompts",
      status: "Live 🚀",
      link: "https://www.paainet.com/"
    },
    {
      title: "Building construction site", 
      tech: "Nextjs • Supabase",
      description: "Website for a leading contruction company",
      status: "Live 🚀",
      link: "https://kamdhenu-lemon.vercel.app/"
    },
    {
      title: "Closed insight",
      tech: "Nextjs • Supabase • LLM • Python",
      description: "Ai powered Ycombinator application analyser",
      status: "In progress 📈",
      link: null // no link yet
    }
  ];
  

  const articles = [
    {
      title: "Building Scalable Flutter Apps with Firebase and Supabase",
      excerpt: "Deep dive into combining Firebase authentication with Supabase's powerful database features for modern Flutter applications.",
      category: "Flutter",
      readTime: "8 min read",
      date: "Dec 15, 2024"
    },
    {
      title: "The Mathematics Behind Startup Success",
      excerpt: "Exploring calculus concepts and economic principles that every young entrepreneur should understand before diving into the startup world.",
      category: "Entrepreneurship",
      readTime: "12 min read",
      date: "Dec 8, 2024"
    },
    {
      title: "Vector Embeddings in Real-World Applications",
      excerpt: "How I implemented Supabase vector embeddings in my AI projects and what I learned about semantic search and similarity matching.",
      category: "AI/ML",
      readTime: "10 min read",
      date: "Nov 28, 2024"
    },
    {
      title: "From Sleep to Startup: A Gen Z Builder's Journey",
      excerpt: "My honest take on being an 18-year-old entrepreneur, the challenges of self-learning, and why starting young might be your superpower.",
      category: "Personal",
      readTime: "6 min read",
      date: "Nov 20, 2024"
    },
    {
      title: "State Management Patterns in Flutter: Bloc vs Provider",
      excerpt: "Comprehensive comparison of Flutter state management solutions with real-world examples and performance considerations.",
      category: "Flutter",
      readTime: "15 min read",
      date: "Nov 12, 2024"
    },
    {
      title: "Preparing for Deep Learning: A 2-Month Roadmap",
      excerpt: "My structured approach to mastering deep learning fundamentals, from 3Blue1Brown videos to building transformers from scratch.",
      category: "AI/ML",
      readTime: "9 min read",
      date: "Oct 30, 2024"
    }
  ];

  const handleProfessionalInquiry = () => {
    const subject = "Professional Collaboration Inquiry";
    const body = "Hi Aayush,\n\nI'm interested in discussing professional work, projects, or funding opportunities with you.\n\nBest regards,";
    const mailtoUrl = `mailto:aayushtimsina19@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    setShowProfessionalDialog(false);
  };

  // const handleSendNote = (e) => {
  //   e.preventDefault();
  //   if (noteMessage.trim() && noteName.trim()) {
  //     // Here you would typically send the note to your backend
  //     console.log('Note sent:', { name: noteName, email: noteEmail, message: noteMessage });
      
  //     // Reset form and close dialog
  //     setNoteMessage('');
  //     setNoteName('');
  //     setNoteEmail('');
  //     setShowNoteDialog(false);
      
  //     // Show success feedback (you could add a toast notification here)
  //     alert("Thanks for your note! I'll get back to you soon 🚀");

  //   }
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Profile Image & Name */}
<div className="relative pt-8 pb-4">
  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl overflow-hidden">
    <img 
      src="https://abtwmeanqfzlqypppdpe.supabase.co/storage/v1/object/public/ci/WhatsApp%20Image%202025-08-24%20at%2015.22.30.jpeg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
    <span className="text-slate-800">Aayush</span>{" "}
    <span className="text-orange-500 relative inline-block">
      Upadhyay
      <span className="absolute -top-2 -right-6 text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-normal">
        18
      </span>
    </span>
  </h1>
</div>

          
          {/* Dynamic Tagline */}
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              <span className="font-semibold text-orange-500 bg-orange-100 px-3 py-1 rounded-lg animate-pulse">
                Learning
              </span>{" "}
              .
              <span className="font-semibold text-orange-500 bg-orange-100 px-3 py-1 rounded-lg animate-pulse">
                Building
              </span>{" "}
              .
              <span className="font-semibold text-orange-500 bg-orange-100 px-3 py-1 rounded-lg animate-pulse">
                Serving
              </span>{" "}
              .
            </p>
            
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Self-taught <span className="text-orange-500 font-semibold">Programmer</span> and studing Data science from <span className="text-orange-500 font-semibold">IIT Madras</span>. 
              Currently deep-diving into <span className="text-orange-500 font-semibold">AI/ML</span>, building with 
              <span className="text-orange-500 font-semibold"> Full-stack AI development</span>, and dreaming of that 
              <span className="text-orange-500 font-semibold"> Y Combinator</span> acceptance letter ✨
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <span className="text-orange-500 font-semibold">Founded</span>
              <span className="text-slate-600 ml-2">Paainet</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <span className="text-orange-500 font-semibold">😴 Sleep</span>
              <span className="text-slate-600 ml-2">Enthusiast</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
              <span className="text-orange-500 font-semibold">🚀 YC S25</span>
              <span className="text-slate-600 ml-2">Applicant</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 items-center flex-col sm:flex-row justify-center pt-8">
            <button 
              className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto flex items-center gap-2 justify-center"
              onClick={() => setShowProfessionalDialog(true)}
            >
              <Rocket size={20} />
              Let's Build Together
            </button>
            {/* <button 
              type="button"
              className="border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 w-full sm:w-auto flex items-center gap-2 justify-center"
              onClick={() => {
                console.log('Button clicked - before state change');
                setShowNoteDialog(true);
                console.log('Button clicked - after state change');
              }}
            >
              <Coffee size={20} />
              Grab Coffee & Leave Note
            </button> */}
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-slate-800">What I'm</span>{" "}
            <span className="text-orange-500">Building</span>
          </h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            From AI-powered platforms to mobile apps, here's what keeps me up at night (besides sleep, of course)
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-orange-500 font-semibold">
                    <Code size={20} />
                    <span className="text-sm">{projects[currentProject].status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-slate-500">{projects[currentProject].tech}</p>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {projects[currentProject].description}
                </p>
                <button 
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  onClick={() => {
                    if (projects[currentProject].link) {
                      window.open(projects[currentProject].link, "_blank");
                    } else {
                      alert("Project is still in progress 🚧");
                    }
                  }}
                >
                  View Project <span>→</span>
                </button>

              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      index === currentProject 
                        ? 'bg-orange-100 border-2 border-orange-300' 
                        : 'bg-slate-100 hover:bg-slate-150'
                    }`}
                    onClick={() => setCurrentProject(index)}
                  >
                    <h4 className="font-semibold text-slate-800">{project.title}</h4>
                    <p className="text-sm text-slate-500">{project.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Contact Section */}
<section className="py-20 px-4 sm:px-8 lg:px-12">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8">
      <span className="text-slate-800">Let's</span>{" "}
      <span className="text-orange-500">Connect</span>
    </h2>
    
    <p className="text-xl text-slate-600 mb-12">
      Whether you want to collaborate, mentor me, 
      or just chat about the future of AI - I'm all ears!
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/aayush-537623256/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
      >
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
          <Linkedin className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
          LinkedIn
        </h3>
        <p className="text-slate-600">Professional networking & opportunities</p>
      </a>
      
      {/* Instagram */}
      <a 
        href="https://www.instagram.com/aayush.calling.aayush/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
      >
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
          <Camera className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
          Instagram
        </h3>
        <p className="text-slate-600">Personal updates & creative stories</p>
      </a>
      
      {/* Twitter / X */}
      <a 
        href="https://x.com/Reeg____" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
      >
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
          <Twitter className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
          Twitter (X)
        </h3>
        <p className="text-slate-600">Hot takes & conversations in real time</p>
      </a>

    </div>
  </div>
</section>

      
      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 mb-4">
            Built with ❤️ (and probably too much coffee) by Aayush
          </p>
          <p className="text-slate-400 text-sm">
            "The best time to plant a tree was 20 years ago. The second best time is now."💪
          </p>
        </div>
      </footer>

      {/* Professional Dialog */}
      {showProfessionalDialog && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4"
          style={{ zIndex: 10000 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowProfessionalDialog(false);
            }
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Professional Inquiry</h3>
                </div>
                <button 
                  onClick={() => setShowProfessionalDialog(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6m8 0H8" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Ready to Build Something Amazing?</h4>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                For <span className="font-semibold text-orange-500">professional work</span>, <span className="font-semibold text-orange-500">projects</span>, and <span className="font-semibold text-orange-500">funding</span> inquiries only.
              </p>
              
              <div className="bg-orange-50 rounded-2xl p-4 border-l-4 border-orange-500">
                <p className="text-slate-700 text-sm">
                  <strong>Note:</strong> This will open your email client to send a professional inquiry directly to my business email.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowProfessionalDialog(false)}
                  className="flex-1 px-6 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Maybe Later
                </button>
                <button
                  onClick={handleProfessionalInquiry}
                  className="flex-1 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Yes! I'm In</span>
                  <span className="text-lg">🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Note Dialog */}
      {showNoteDialog && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4"
          style={{ zIndex: 10000 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowNoteDialog(false);
            }
          }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Coffee className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Leave me a note!</h3>
                </div>
                <button 
                  onClick={() => setShowNoteDialog(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
                >
                  ×
                </button>
              </div>
              <p className="text-orange-100 mt-2">I'd love to hear from you! ☕</p>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  value={noteName}
                  onChange={(e) => setNoteName(e.target.value)}
                  placeholder="What should I call you?"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email (optional) - Help me reach you</label>
                <input
                  type="email"
                  value={noteEmail}
                  onChange={(e) => setNoteEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Your Message *</label>
                <textarea
                  value={noteMessage}
                  onChange={(e) => setNoteMessage(e.target.value)}
                  placeholder="Hi Aayush! I wanted to reach out because..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none text-slate-800"
                />
                <p className="text-slate-400 text-sm mt-1">{noteMessage.length}/500 characters</p>
              </div>

              {/* Actions */}
              {/* <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowNoteDialog(false)}
                  className="flex-1 px-6 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Maybe Later
                </button>
                <button
                  onClick={handleSendNote}
                  disabled={!noteMessage.trim() || !noteName.trim()}
                  className="flex-1 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Note</span>
                  <span className="text-lg">🚀</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}  
    </div>
  );
}