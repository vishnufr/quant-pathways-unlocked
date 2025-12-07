import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, FileText, Calculator, BookOpen, 
  Code, Search, ExternalLink, Clock, Star, Filter
} from "lucide-react";

const cheatSheets = [
  {
    id: 1,
    title: "Linear Algebra Cheat Sheet",
    description: "Matrix operations, eigenvalues, decompositions, and key formulas",
    category: "Mathematics",
    downloads: 4523,
    pages: 4,
    format: "PDF",
  },
  {
    id: 2,
    title: "Probability & Statistics Quick Reference",
    description: "Distributions, hypothesis testing, regression formulas",
    category: "Statistics",
    downloads: 3891,
    pages: 6,
    format: "PDF",
  },
  {
    id: 3,
    title: "Python for Quants Reference",
    description: "NumPy, Pandas, Matplotlib essential functions and patterns",
    category: "Programming",
    downloads: 5234,
    pages: 8,
    format: "PDF",
  },
  {
    id: 4,
    title: "Options Greeks Formula Sheet",
    description: "Black-Scholes, Greeks calculations, put-call parity",
    category: "Financial Engineering",
    downloads: 3156,
    pages: 3,
    format: "PDF",
  },
  {
    id: 5,
    title: "Time Series Analysis Formulas",
    description: "ARIMA, GARCH, stationarity tests, autocorrelation",
    category: "Statistics",
    downloads: 2789,
    pages: 5,
    format: "PDF",
  },
  {
    id: 6,
    title: "C++ STL Quick Reference",
    description: "Containers, algorithms, iterators for HFT development",
    category: "Programming",
    downloads: 1892,
    pages: 4,
    format: "PDF",
  },
];

const codeTemplates = [
  {
    id: 1,
    title: "Backtesting Framework Starter",
    description: "Event-driven backtesting engine with position management and metrics",
    language: "Python",
    stars: 456,
    files: 8,
  },
  {
    id: 2,
    title: "Options Pricing Library",
    description: "Black-Scholes, Monte Carlo, and binomial tree implementations",
    language: "Python",
    stars: 389,
    files: 12,
  },
  {
    id: 3,
    title: "Portfolio Optimization Tools",
    description: "Mean-variance optimization, efficient frontier, risk parity",
    language: "Python",
    stars: 312,
    files: 6,
  },
  {
    id: 4,
    title: "Market Data Pipeline",
    description: "Real-time data ingestion with WebSocket and historical data handling",
    language: "Python",
    stars: 278,
    files: 10,
  },
  {
    id: 5,
    title: "Order Book Implementation",
    description: "High-performance order book with matching engine in C++",
    language: "C++",
    stars: 523,
    files: 15,
  },
  {
    id: 6,
    title: "Risk Metrics Calculator",
    description: "VaR, CVaR, Sharpe ratio, and other risk/return metrics",
    language: "Python",
    stars: 234,
    files: 5,
  },
];

const blogArticles = [
  {
    id: 1,
    title: "What is a Quant? A Complete Career Guide",
    excerpt: "Explore the different types of quant roles, required skills, and career paths in quantitative finance.",
    category: "Career",
    readTime: "12 min",
    date: "Dec 1, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "How to Land Your First Quant Internship",
    excerpt: "Tips and strategies for breaking into the competitive world of quant internships.",
    category: "Career",
    readTime: "8 min",
    date: "Nov 28, 2024",
    featured: true,
  },
  {
    id: 3,
    title: "Understanding Machine Learning in Trading",
    excerpt: "A beginner's guide to applying ML techniques in systematic trading strategies.",
    category: "Technical",
    readTime: "15 min",
    date: "Nov 25, 2024",
    featured: false,
  },
  {
    id: 4,
    title: "The Math Behind Black-Scholes",
    excerpt: "Deep dive into the mathematical derivation of the famous option pricing model.",
    category: "Technical",
    readTime: "20 min",
    date: "Nov 20, 2024",
    featured: false,
  },
  {
    id: 5,
    title: "Building Your First Algorithmic Trading Bot",
    excerpt: "Step-by-step tutorial on creating a simple momentum-based trading algorithm.",
    category: "Tutorial",
    readTime: "25 min",
    date: "Nov 15, 2024",
    featured: false,
  },
  {
    id: 6,
    title: "Interview Prep: Common Quant Questions",
    excerpt: "Practice problems and solutions for technical quant interviews.",
    category: "Career",
    readTime: "18 min",
    date: "Nov 10, 2024",
    featured: false,
  },
];

const tools = [
  {
    id: 1,
    title: "Matrix Calculator",
    description: "Perform matrix operations, find eigenvalues, and visualize transformations",
    icon: Calculator,
    status: "Available",
  },
  {
    id: 2,
    title: "Regression Tester",
    description: "Run linear regression analysis on your data with visualization",
    icon: Calculator,
    status: "Available",
  },
  {
    id: 3,
    title: "Options Calculator",
    description: "Calculate option prices and Greeks using Black-Scholes model",
    icon: Calculator,
    status: "Available",
  },
  {
    id: 4,
    title: "Portfolio Analyzer",
    description: "Analyze portfolio risk, return, and optimal allocations",
    icon: Calculator,
    status: "Coming Soon",
  },
  {
    id: 5,
    title: "Monte Carlo Simulator",
    description: "Run Monte Carlo simulations for pricing and risk analysis",
    icon: Calculator,
    status: "Coming Soon",
  },
  {
    id: 6,
    title: "Correlation Heatmap",
    description: "Visualize asset correlations and covariance matrices",
    icon: Calculator,
    status: "Available",
  },
];

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mathematics":
        return "bg-blue-500/10 text-blue-500";
      case "Statistics":
        return "bg-emerald-500/10 text-emerald-500";
      case "Programming":
        return "bg-purple-500/10 text-purple-500";
      case "Financial Engineering":
        return "bg-orange-500/10 text-orange-500";
      case "Career":
        return "bg-pink-500/10 text-pink-500";
      case "Technical":
        return "bg-cyan-500/10 text-cyan-500";
      case "Tutorial":
        return "bg-yellow-500/10 text-yellow-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-12 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Cheat sheets, code templates, tools, and articles to accelerate your quant journey.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="cheatsheets" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="cheatsheets" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Cheat Sheets
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Tools
              </TabsTrigger>
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Articles
              </TabsTrigger>
            </TabsList>

            {/* Cheat Sheets Tab */}
            <TabsContent value="cheatsheets">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cheatSheets.map((sheet) => (
                  <Card key={sheet.id} className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge className={getCategoryColor(sheet.category)}>
                          {sheet.category}
                        </Badge>
                        <Badge variant="outline">{sheet.format}</Badge>
                      </div>
                      <CardTitle className="text-lg">{sheet.title}</CardTitle>
                      <CardDescription>{sheet.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{sheet.pages} pages</span>
                        <span>{sheet.downloads.toLocaleString()} downloads</span>
                      </div>
                      <Button className="w-full flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Code Templates Tab */}
            <TabsContent value="templates">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {codeTemplates.map((template) => (
                  <Card key={template.id} className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge variant="outline">{template.language}</Badge>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-warning" />
                          {template.stars}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{template.files} files</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className={`hover:shadow-elegant transition-all ${
                    tool.status === "Coming Soon" ? "opacity-75" : ""
                  }`}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <tool.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <Badge variant={tool.status === "Available" ? "default" : "secondary"}>
                            {tool.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {tool.description}
                      </p>
                      <Button 
                        className="w-full" 
                        disabled={tool.status === "Coming Soon"}
                      >
                        {tool.status === "Available" ? "Launch Tool" : "Coming Soon"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="space-y-8">
                {/* Featured Articles */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogArticles.filter(a => a.featured).map((article) => (
                      <Card key={article.id} className="hover:shadow-elegant transition-all cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={getCategoryColor(article.category)}>
                              {article.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{article.date}</span>
                          </div>
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                          <CardDescription className="text-base">{article.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {article.readTime} read
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All Articles */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">All Articles</h2>
                  <div className="space-y-4">
                    {blogArticles.filter(a => !a.featured).map((article) => (
                      <Card key={article.id} className="hover:shadow-elegant transition-all cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={getCategoryColor(article.category)}>
                                  {article.category}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{article.date}</span>
                              </div>
                              <h3 className="font-semibold text-lg mb-1">{article.title}</h3>
                              <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
