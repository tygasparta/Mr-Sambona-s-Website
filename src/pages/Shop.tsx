import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Download, BookOpen, Video, Users } from 'lucide-react';
import Payment from '@/components/Payment';

const Shop = () => {
  const [showPayment, setShowPayment] = React.useState(false);

  const products = [
    {
      id: 'influence-hub',
      title: 'Influence Hub: Women Empowerment',
      description: 'Access to exclusive women empowerment videos',
      price: 5.99,
      period: 'year',
      type: 'subscription',
      icon: <Video className="h-6 w-6" />
    },
    {
      id: 'journalist',
      title: 'Journalist Section',
      description: 'Daily articles on current affairs and social issues',
      price: 0.10,
      period: 'article',
      type: 'pay-per-article',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'education-resources',
      title: 'Educational Resources',
      description: 'English and Shona language resources',
      price: 4.99,
      period: 'month',
      type: 'subscription',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'magazine',
      title: 'Influence Hub Women\'s Magazine',
      description: 'Downloadable magazine issues',
      price: 1.99,
      period: 'issue',
      type: 'pay-per-issue',
      icon: <Download className="h-6 w-6" />
    }
    ,{
      id: 'battle-for-education',
      title: 'The Battle for Education (Print & eBook)',
      description: 'A call to action for Zimbabwe\'s education reform — $10.00 (print + e-book)',
      longDescription: `Book Launch: "The Battle for Education" by Ronald Takudzwa Sambona – A Rallying Cry for Zimbabwe’s Future
\nIn a nation where the classroom is often a battleground, Ronald Takudzwa Sambona’s debut book, "The Battle for Education," arrives as both a manifesto and a lifeline. Recently published by Sambona Worldwide Media, this powerful volume dares readers to confront the uncomfortable truths facing Zimbabwe’s education system while offering hope, vision, and a call to action.
\nSambona is no stranger to the conversation on education. At just 21, he is already nationally acclaimed as a Youth Interactive Writer for The Herald Newspaper and a prolific contributor to The Manica Post and Kwayedza Dzidza. His voice, familiar to many Zimbabweans, has consistently championed themes of educational rights, women’s empowerment, technology, and modernisation. Until now, his influential essays - such as "Quality education in digital era," "Building our future: Empowering rural children through education," and "A moment for transformative education!" - have inspired audiences in print and online. "The Battle for Education" marks his first foray into book-length advocacy, promising to ignite even greater impact.
\nWhat makes Sambona’s work compelling is its fearless honesty. Drawing from his personal journey - from rural Honde Valley to the heart of Zimbabwe’s academic debates - he explores the triumphs and heartbreaks of pursuing knowledge in a system fraught with inequality, outdated infrastructure, and cultural barriers. Sambona does not shy away from the realities: children walking 20 kilometres to school, girls married off before finishing their studies, or teachers who persist despite impossible odds. Yet, he refuses to let despair win. Instead, he urges readers to join a collective movement, arguing that education must be fought for and reimagined at every level of society.
\nThe book’s key focuses include:\n\t•\tThe vital need for a modern, tech-driven education system that includes digital skills for all, especially rural children and girls.\n\t•\tThe power of education to drive economic self-sufficiency, national vision, and cultural preservation.\n\t•\tConcrete policy recommendations for digitisation, infrastructure, teacher empowerment, and social inclusion.\n\t•\tA stirring call to action for parents, teachers, policymakers, and students to become advocates for change.\n+\n\n+\n+"The Battle for Education" is available now. Join Ronald Takudzwa Sambona in the fight for a brighter, more equitable future - one classroom, one community, and one courageous step at a time.\n\nGet your hands on both the print and e-book versions of this must-have book for only $USD10.00! Don't miss out - message us now on WhatsApp at +263718340867 or call +263789148212 to secure your copy today.
`,
      images: [new URL('../images/1.jpeg', import.meta.url).href, new URL('../images/2.jpeg', import.meta.url).href],
      price: 10.00,
      period: 'one-off',
      type: 'book',
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <Button onClick={() => setShowPayment(true)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          View Cart
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="pay-per">Pay Per Item</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {product.images && (
                      <div className="flex gap-2">
                        {product.images.map((img: string, i: number) => (
                          <img key={i} src={img} alt={`${product.title}-${i}`} className="w-1/2 object-cover rounded" />
                        ))}
                      </div>
                    )}
                    {product.longDescription ? (
                      <div className="text-sm text-gray-700 whitespace-pre-wrap">{product.longDescription.split('\n').slice(0, 6).join('\n')}</div>
                    ) : null}
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">
                        ${product.price.toFixed(2)}/{product.period}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {product.id === 'battle-for-education' ? (
                    <div className="w-full flex flex-col gap-2">
                      <a href="https://wa.me/263718340867" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                          Message on WhatsApp to order (+263718340867)
                        </Button>
                      </a>
                      <a href="tel:+263789148212">
                        <Button className="w-full">Call to order (+263789148212)</Button>
                      </a>
                    </div>
                  ) : (
                    <Button className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.type === 'subscription').map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pay-per" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.type.includes('pay-per')).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Shop; 