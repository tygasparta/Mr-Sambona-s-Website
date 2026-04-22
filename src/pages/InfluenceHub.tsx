import React from 'react';

const InfluenceHub = () => (
  <section className="py-16 min-h-screen bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Influence Hub</h2>
        <div className="text-lg text-gray-700 text-center mb-8">
          Unlock exclusive women empowerment video series and resources designed to inspire, educate, and empower women in all walks of life. Subscribe to access premium content and join a community of changemakers.
        </div>

        {/* Book Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Battle for Education</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">Book Launch: "The Battle for Education" by Ronald Takudzwa Sambona – A Rallying Cry for Zimbabwe’s Future
\nIn a nation where the classroom is often a battleground, Ronald Takudzwa Sambona’s debut book, "The Battle for Education," arrives as both a manifesto and a lifeline. Recently published by Sambona Worldwide Media, this powerful volume dares readers to confront the uncomfortable truths facing Zimbabwe’s education system while offering hope, vision, and a call to action.
\nSambona is no stranger to the conversation on education. At just 21, he is already nationally acclaimed as a Youth Interactive Writer for The Herald Newspaper and a prolific contributor to The Manica Post and Kwayedza Dzidza. His voice, familiar to many Zimbabweans, has consistently championed themes of educational rights, women’s empowerment, technology, and modernisation. Until now, his influential essays - such as "Quality education in digital era," "Building our future: Empowering rural children through education," and "A moment for transformative education!" - have inspired audiences in print and online. "The Battle for Education" marks his first foray into book-length advocacy, promising to ignite even greater impact.
\nWhat makes Sambona’s work compelling is its fearless honesty. Drawing from his personal journey - from rural Honde Valley to the heart of Zimbabwe’s academic debates - he explores the triumphs and heartbreaks of pursuing knowledge in a system fraught with inequality, outdated infrastructure, and cultural barriers. Sambona does not shy away from the realities: children walking 20 kilometres to school, girls married off before finishing their studies, or teachers who persist despite impossible odds. Yet, he refuses to let despair win. Instead, he urges readers to join a collective movement, arguing that education must be fought for and reimagined at every level of society.
\nThe book’s key focuses include:\n• The vital need for a modern, tech-driven education system that includes digital skills for all, especially rural children and girls.\n• The power of education to drive economic self-sufficiency, national vision, and cultural preservation.\n• Concrete policy recommendations for digitisation, infrastructure, teacher empowerment, and social inclusion.\n• A stirring call to action for parents, teachers, policymakers, and students to become advocates for change.\n\n"The Battle for Education" is available now. Get your hands on both the print and e-book versions of this must-have book for only $USD10.00! Message us on WhatsApp at +263718340867 or call +263789148212 to secure your copy today.</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a href="https://wa.me/263718340867" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg w-full">Order via WhatsApp</button>
                </a>
                <a href="tel:+263789148212" className="w-full sm:w-auto">
                  <button className="px-4 py-2 border rounded-lg w-full">Call to Order</button>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <img src={new URL('../images/1.jpeg', import.meta.url).href} alt="Battle for Education cover" className="w-full rounded object-cover shadow" />
              <img src={new URL('../images/2.jpeg', import.meta.url).href} alt="Author" className="w-full rounded object-cover shadow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InfluenceHub; 