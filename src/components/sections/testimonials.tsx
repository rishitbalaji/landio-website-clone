import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Daniel Kim',
    title: 'Operations Lead at Flowbyte',
    quote: '“Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/G1bC6MQnKLl8c7ZyjwpJlVGuw-6.jpg?',
  },
  {
    name: 'Priya Mehra',
    title: 'CTO at Brightstack Labs',
    quote: '“Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/BgsxdPJJZ3faakDHp1W2WcB8CoM-7.jpg?',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Product Manager at Nexora',
    quote: '“Smooth setup. Their system replaced three tools. We saw improvements in just the first week.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/XeoHxv0ErFoyqieN2PppKnGRd2o-8.jpg?',
  },
  {
    name: 'Marcus Thompson',
    title: 'Marketing Director at OrbitShift',
    quote: '“Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/2brzgXS5fJHHMvAH83vgl5m8KTI-9.jpg?',
  },
  {
    name: 'Sarah Wong',
    title: 'Analytics Manager at Corelink',
    quote: '“Huge time-saver. Data is better organized. The insights we get now are actionable and fast.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/mCkhYgyE0LSy9RJ4nVmmGTpAjLA-10.jpg?',
  },
  {
    name: 'Ravi Shah',
    title: 'COO at PixelNest Solutions',
    quote: '“Very intuitive. No fluff, just performance. Our internal processes finally feel under control.”',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/YGV3hSM1KkFRZxZ0JDeOT7ry7u4-11.jpg?',
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-primary-background py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary-background px-3 py-1">
            <Star className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-primary-text">REVIEWS</p>
          </div>
          <h2 className="text-primary-text">
            Trusted by <span className="text-accent-italic">Visionaries</span>
          </h2>
          <p className="max-w-xl text-secondary-text">
            Hear from real users who achieved success with our automation
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={`user pic of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary-text">{testimonial.name}</p>
                  <small>{testimonial.title}</small>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-text">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;