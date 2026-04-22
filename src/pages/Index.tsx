import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MovingGallery from '@/components/MovingGallery';
import FeaturedContent from '@/components/FeaturedContent';
import DailyArticles from '@/components/DailyArticles';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Footer from '@/components/Footer';
import Contact from '@/pages/Contact';
import { useNavigate } from 'react-router-dom';
import articles from '@/data/articles.json';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="gallery"><MovingGallery /></section>
        <section id="shop"><FeaturedContent /></section>
        <section id="education"><DailyArticles /></section>
        {/* Articles Drawer trigger (replaces inline articles section) */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-center mb-6">Articles</h2>
            <p className="mb-6 text-muted-foreground">Open the drawer to view featured articles, or visit the Articles page for only articles.</p>
            <div className="flex justify-center">
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition">
                    View Articles
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Articles</DrawerTitle>
                  </DrawerHeader>
                  <div className="container mx-auto px-4 pb-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {articles.map((article, idx) => {
                        const viewCounts = [12034, 87654, 14321, 59000, 210345, 75012];
                        const colors = ["text-blue-500", "text-green-600", "text-purple-600", "text-pink-500", "text-yellow-600", "text-red-500"];
                        const badgeColors = ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800"];
                        const viewCount = viewCounts[idx % viewCounts.length];
                        const eyeColor = colors[idx % colors.length];
                        return (
                          <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-2xl duration-200 animate-fade-in">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-2xl font-extrabold text-primary font-serif line-clamp-2 hover:underline transition">{article.title}</h3>
                                <div className={`flex items-center space-x-1 ${eyeColor} text-base`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                  <span className="font-bold">{viewCount.toLocaleString()}</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {article.categories && article.categories.map((cat, i) => (
                                  <span key={i} className={`px-2 py-1 rounded-full text-xs font-bold ${badgeColors[(idx + i) % badgeColors.length]}`}>{cat}</span>
                                ))}
                              </div>
                              <div className="text-gray-700 text-sm mb-2 font-semibold font-mono">By <span className="italic text-gray-900 font-bold">{article.authorTitle || article.author}</span></div>
                              <p className="text-gray-800 text-base mb-4 line-clamp-4 font-sans"><span className="font-bold text-blue-700">{article.content.split('\n')[0]}</span> {article.content.split('\n').slice(1, 3).join(' ')}...</p>
                            </div>
                            <button
                              className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 shadow transition"
                              onClick={() => navigate(`/article/${idx}`)}
                            >
                              Read Article
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </section>
        <section id="contact"><Contact /></section>
        <div id="about"><Footer /></div>
      </main>
    </div>
  );
};

export default Index;
