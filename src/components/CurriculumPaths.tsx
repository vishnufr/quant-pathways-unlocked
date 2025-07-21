import { Calculator, BarChart, Code, DollarSign, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CurriculumPaths = () => {
  const paths = [
    {
      title: "Mathematics for Quants",
      description: "Master linear algebra, calculus, probability theory, and stochastic processes essential for quantitative finance.",
      icon: Calculator,
      difficulty: "Beginner",
      lessons: 45,
      duration: "6 weeks",
      topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Statistics & Data Analysis",
      description: "Learn statistical inference, regression analysis, time series, and hypothesis testing with real financial data.",
      icon: BarChart,
      difficulty: "Intermediate", 
      lessons: 38,
      duration: "5 weeks",
      topics: ["Regression", "Time Series", "Hypothesis Testing", "Bayesian Analysis"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Programming for Quants",
      description: "Build programming skills in Python, R, and C++ with focus on financial libraries and algorithmic trading.",
      icon: Code,
      difficulty: "Beginner",
      lessons: 52,
      duration: "8 weeks", 
      topics: ["Python", "NumPy/Pandas", "R", "C++ Basics"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Financial Engineering",
      description: "Understand derivatives, options pricing, risk management, and portfolio optimization techniques.",
      icon: DollarSign,
      difficulty: "Advanced",
      lessons: 35,
      duration: "6 weeks",
      topics: ["Derivatives", "Options Pricing", "Risk Management", "Portfolio Theory"],
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Projects & Simulations",
      description: "Apply your knowledge through backtesting strategies, building trading bots, and Monte Carlo simulations.",
      icon: Lightbulb,
      difficulty: "Advanced",
      lessons: 25,
      duration: "4 weeks",
      topics: ["Backtesting", "Trading Algorithms", "Monte Carlo", "Portfolio Analysis"],
      color: "from-rose-500 to-rose-600"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Structured Learning{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Paths
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Progressive curriculum designed to take you from beginner to professional quant through hands-on learning and real-world applications.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paths.map((path, index) => (
            <Card 
              key={path.title} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 cursor-pointer border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${path.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="flex items-start justify-between relative z-10">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${path.color} text-white`}>
                    <path.icon size={24} />
                  </div>
                  <Badge className={getDifficultyColor(path.difficulty)}>
                    {path.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {path.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {path.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{path.lessons} lessons</span>
                  <span>{path.duration}</span>
                </div>
                
                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {path.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA */}
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Start Path
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-effect p-6 rounded-2xl border border-primary/10">
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-1">Not sure where to start?</h3>
              <p className="text-sm text-muted-foreground">Take our skill assessment to find your perfect learning path.</p>
            </div>
            <Button className="btn-accent whitespace-nowrap">
              Take Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumPaths;