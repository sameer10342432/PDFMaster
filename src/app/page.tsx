
import { Hero } from '@/components/home/Hero';
import { Tools } from '@/components/home/Tools';
import { Features } from '@/components/home/Features';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Tools />
      <Features />
    </div>
  );
}