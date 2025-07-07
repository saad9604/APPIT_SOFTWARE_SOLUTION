// Metadata is defined as a JavaScript object

import Header from '@/components/home/Header';
import BlogDetailsHero from '@/components/blog/BlogDetailsHero';
import BlogDetailTitle from '@/components/blog/BlogDetailTitle';
import BlogDetailContent from '@/components/blog/BlogDetailContent';
import BlogDetailSection from '@/components/blog/BlogDetailSection';
import BlogHorizontalCards from '@/components/blog/BlogHorizontalCards';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'Blog Details | APPIT Software Solutions',
  description: 'Explore our insightful blogs and get to know the minds driving innovation at APPIT Software.',
  keywords: [
    'APPIT Software articles', 
    'tech innovation blog', 
    'IT insights', 
    'software development insights', 
    'AI technology blogs', 
    'digital transformation articles'
  ]
};

export default function BlogDetails() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <BlogDetailsHero />
      <BlogDetailTitle />
      <BlogDetailContent />
      <BlogDetailSection />
      <BlogHorizontalCards />
      {/* Other sections will be added later as per your instructions */}
      <AboveFooterSection />
      <Footer />
    </main>
  );
}
