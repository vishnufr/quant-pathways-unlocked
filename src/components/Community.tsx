import { Users, MessageSquare, Trophy, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Community = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Goldman Sachs Analyst",
      avatar: "/api/placeholder/64/64",
      quote: "QuantStarter gave me the foundation I needed to land my dream role. The projects are incredibly practical and mirror real-world scenarios."
    },
    {
      name: "Marcus Rodriguez", 
      role: "JPMorgan Quant Developer",
      avatar: "/api/placeholder/64/64",
      quote: "The programming track is exceptional. I went from Python basics to building complex trading algorithms in just 8 weeks."
    },
    {
      name: "Aisha Patel",
      role: "Citadel Researcher",
      avatar: "/api/placeholder/64/64", 
      quote: "The mathematical rigor combined with practical applications made all the difference in my interview preparation."
    }
  ];

  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Connect with peers, ask questions, and share insights across all curriculum topics."
    },
    {
      icon: Trophy,
      title: "Weekly Challenges", 
      description: "Compete in coding challenges and financial modeling competitions with global leaderboards."
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join or create study groups with learners at your level for collaborative learning."
    },
    {
      icon: BookOpen,
      title: "Expert AMAs",
      description: "Monthly Ask Me Anything sessions with industry professionals from top firms."
    }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join Our Thriving{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of aspiring quants, industry professionals, and fellow learners from around the world.
          </p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="text-center hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 mx-auto gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">What Our Alumni Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="glass-effect border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-accent font-medium">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get access to exclusive resources, connect with industry professionals, and accelerate your quant career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Join Community
              <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button variant="outline" className="glass-effect">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;