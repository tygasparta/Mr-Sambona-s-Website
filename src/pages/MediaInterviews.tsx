import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const images = [
  { src: new URL('../images/0d6b476d-4ee5-496b-9ea6-0093e438127a.jpeg', import.meta.url).href, label: '0d6b476d-4ee5-496b-9ea6-0093e438127a' },
  { src: new URL('../images/1e03fb11-8f75-4305-9548-6c050675c46d.jpeg', import.meta.url).href, label: '1e03fb11-8f75-4305-9548-6c050675c46d' },
  { src: new URL('../images/299cd4f1-08d5-46aa-9dce-b963a7f22d60.jpeg', import.meta.url).href, label: '299cd4f1-08d5-46aa-9dce-b963a7f22d60' },
  { src: new URL('../images/557a77b0-c0f4-4b67-8460-fb5b5e3bc765.jpeg', import.meta.url).href, label: '557a77b0-c0f4-4b67-8460-fb5b5e3bc765' },
  { src: new URL('../images/c12128b8-e399-4500-b850-5d0b01620487.jpeg', import.meta.url).href, label: 'c12128b8-e399-4500-b850-5d0b01620487' },
  { src: new URL('../images/f505378a-cbe6-4d43-851d-0e5dd7424d6a.jpeg', import.meta.url).href, label: 'f505378a-cbe6-4d43-851d-0e5dd7424d6a' },
];

const MediaInterviews = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<{ src: string; label: string } | null>(null);

  const handleOpen = (img: { src: string; label: string }) => {
    setSelected(img);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Media & Interviews</h1>
        <p className="text-muted mb-8">Selected photos and video labels from recent appearances.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <button
              key={img.label}
              onClick={() => handleOpen(img)}
              className="group text-left bg-white rounded-2xl overflow-hidden shadow-lg focus:outline-none"
            >
              <img src={img.src} alt={img.label} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <h3 className="text-sm font-semibold">{img.label}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Video embeds for Media & Interviews */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <p className="text-muted mb-6">Selected video appearances and interviews.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">ZTN Prime Campus Reflections Show S1E01 - No to Blessers, Education First!</h3>
              <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow">
                <iframe
                  src={`https://www.youtube.com/embed/1BwgSGPpJWM`}
                  title="ZTN Prime Campus Reflections Show S1E01"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Interview / Segment</h3>
              <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow">
                <iframe
                  src={`https://www.youtube.com/embed/LZujMRrqp8I`}
                  title="Media Interview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <Dialog open={open} onOpenChange={setOpen}>
          {selected && (
            <DialogContent className="max-w-4xl w-full">
              <DialogTitle className="mb-2">{selected.label}</DialogTitle>
              <DialogDescription className="mb-4">Click outside or press Esc to close.</DialogDescription>
              <div className="w-full flex items-center justify-center">
                <img src={selected.src} alt={selected.label} className="max-h-[75vh] w-auto object-contain" />
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default MediaInterviews;
