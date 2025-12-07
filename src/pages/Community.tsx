import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, Users, Trophy, Github, Star, 
  ThumbsUp, MessageCircle, Clock, TrendingUp, Code,
  Award, Flame, Target, Search
} from "lucide-react";

const forumTopics = [
  {
    id: 1,
    title: "Best resources for learning stochastic calculus?",
    author: "Alex Chen",
    avatar: "AC",
    category: "Mathematics",
    replies: 24,
    likes: 45,
    views: 892,
    timeAgo: "2 hours ago",
    pinned: true,
  },
  {
    id: 2,
    title: "Python vs R for quantitative analysis - which should I learn first?",
    author: "Sarah Johnson",
    avatar: "SJ",
    category: "Programming",
    replies: 56,
    likes: 89,
    views: 2341,
    timeAgo: "5 hours ago",
    pinned: true,
  },
  {
    id: 3,
    title: "How to break into quant trading without a PhD?",
    author: "Mike Williams",
    avatar: "MW",
    category: "Career",
    replies: 112,
    likes: 234,
    views: 5672,
    timeAgo: "1 day ago",
    pinned: false,
  },
  {
    id: 4,
    title: "Implementing Black-Scholes in Python - code review request",
    author: "Emily Zhang",
    avatar: "EZ",
    category: "Programming",
    replies: 18,
    likes: 32,
    views: 456,
    timeAgo: "3 days ago",
    pinned: false,
  },
  {
    id: 5,
    title: "Understanding Greeks in options trading",
    author: "David Park",
    avatar: "DP",
    category: "Financial Engineering",
    replies: 29,
    likes: 67,
    views: 1234,
    timeAgo: "4 days ago",
    pinned: false,
  },
];

const projectShowcases = [
  {
    id: 1,
    title: "Pairs Trading Strategy Backtester",
    author: "Jennifer Lee",
    avatar: "JL",
    description: "A complete pairs trading implementation with cointegration testing, z-score signals, and performance analytics.",
    github: "https://github.com",
    stars: 234,
    language: "Python",
    tags: ["Backtesting", "Pairs Trading", "Statistics"],
  },
  {
    id: 2,
    title: "Real-time Options Chain Analyzer",
    author: "Tom Anderson",
    avatar: "TA",
    description: "Web app that visualizes options chains, calculates Greeks, and identifies unusual activity in real-time.",
    github: "https://github.com",
    stars: 189,
    language: "TypeScript",
    tags: ["Options", "React", "WebSocket"],
  },
  {
    id: 3,
    title: "Monte Carlo Portfolio Optimizer",
    author: "Lisa Wang",
    avatar: "LW",
    description: "Interactive tool for portfolio optimization using Monte Carlo simulation with risk constraints.",
    github: "https://github.com",
    stars: 156,
    language: "Python",
    tags: ["Monte Carlo", "Optimization", "Visualization"],
  },
  {
    id: 4,
    title: "High-Frequency Order Book Visualizer",
    author: "Chris Murphy",
    avatar: "CM",
    description: "Real-time visualization of order book dynamics with depth charts and trade flow analysis.",
    github: "https://github.com",
    stars: 312,
    language: "C++",
    tags: ["HFT", "Order Book", "Visualization"],
  },
];

const leaderboard = [
  { rank: 1, name: "Alex Chen", xp: 15420, streak: 45, badges: 28, avatar: "AC" },
  { rank: 2, name: "Sarah Johnson", xp: 14890, streak: 32, badges: 25, avatar: "SJ" },
  { rank: 3, name: "Mike Williams", xp: 13560, streak: 28, badges: 22, avatar: "MW" },
  { rank: 4, name: "Emily Zhang", xp: 12340, streak: 21, badges: 20, avatar: "EZ" },
  { rank: 5, name: "David Park", xp: 11890, streak: 18, badges: 18, avatar: "DP" },
  { rank: 6, name: "Jennifer Lee", xp: 10450, streak: 15, badges: 16, avatar: "JL" },
  { rank: 7, name: "Tom Anderson", xp: 9870, streak: 12, badges: 14, avatar: "TA" },
  { rank: 8, name: "Lisa Wang", xp: 9230, streak: 10, badges: 12, avatar: "LW" },
];

const upcomingAMAs = [
  {
    id: 1,
    guest: "Dr. James Smith",
    role: "Head of Quant Research, Goldman Sachs",
    date: "Dec 15, 2024",
    time: "2:00 PM EST",
    topic: "Breaking into Quantitative Finance",
    registered: 234,
  },
  {
    id: 2,
    guest: "Prof. Sarah Martinez",
    role: "Professor of Financial Engineering, MIT",
    date: "Dec 22, 2024",
    time: "3:00 PM EST",
    topic: "Machine Learning in Finance",
    registered: 189,
  },
  {
    id: 3,
    guest: "Michael Chen",
    role: "Founder, Quantitative Trading Fund",
    date: "Jan 5, 2025",
    time: "1:00 PM EST",
    topic: "Starting Your Own Quant Fund",
    registered: 312,
  },
];

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mathematics":
        return "bg-blue-500/10 text-blue-500";
      case "Programming":
        return "bg-purple-500/10 text-purple-500";
      case "Career":
        return "bg-green-500/10 text-green-500";
      case "Financial Engineering":
        return "bg-orange-500/10 text-orange-500";
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
            Community Hub
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Connect with fellow quant aspirants, share projects, compete on leaderboards, 
            and learn from industry professionals.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">12,450+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">3,200+</div>
              <div className="text-sm text-muted-foreground">Forum Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">850+</div>
              <div className="text-sm text-muted-foreground">Projects Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">AMAs Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="forums" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="forums" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Forums
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger value="amas" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                AMAs
              </TabsTrigger>
            </TabsList>

            {/* Forums Tab */}
            <TabsContent value="forums">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {/* Search */}
                  <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search discussions..." 
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button className="btn-hero">New Topic</Button>
                  </div>

                  {/* Topics */}
                  {forumTopics.map((topic) => (
                    <Card key={topic.id} className="hover:shadow-elegant transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {topic.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              {topic.pinned && (
                                <Badge variant="outline" className="text-xs">Pinned</Badge>
                              )}
                              <Badge className={getCategoryColor(topic.category)}>
                                {topic.category}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {topic.title}
                            </h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>{topic.author}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {topic.timeAgo}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                {topic.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-3 h-3" />
                                {topic.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {["Mathematics", "Statistics", "Programming", "Financial Engineering", "Career", "General"].map((cat) => (
                        <Button key={cat} variant="ghost" className="w-full justify-start">
                          {cat}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Trending Topics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {["Machine Learning in Quant", "Interview Prep Tips", "Best Python Libraries"].map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <span className="text-primary font-bold">{idx + 1}</span>
                          <span className="text-muted-foreground hover:text-foreground cursor-pointer">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectShowcases.map((project) => (
                  <Card key={project.id} className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {project.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription>{project.author}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">{project.language}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-warning" />
                          {project.stars}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-warning" />
                        Weekly Leaderboard
                      </CardTitle>
                      <CardDescription>Top performers this week based on XP earned</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {leaderboard.map((user) => (
                          <div 
                            key={user.rank} 
                            className={`flex items-center gap-4 p-3 rounded-lg ${
                              user.rank <= 3 ? 'bg-primary/5' : 'hover:bg-secondary'
                            } transition-colors`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              user.rank === 1 ? 'bg-yellow-500 text-yellow-950' :
                              user.rank === 2 ? 'bg-gray-300 text-gray-800' :
                              user.rank === 3 ? 'bg-orange-400 text-orange-950' :
                              'bg-secondary text-muted-foreground'
                            }`}>
                              {user.rank}
                            </div>
                            <Avatar>
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {user.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="font-semibold">{user.name}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Flame className="w-3 h-3 text-orange-500" />
                                  {user.streak} day streak
                                </span>
                                <span className="flex items-center gap-1">
                                  <Award className="w-3 h-3 text-primary" />
                                  {user.badges} badges
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-primary">{user.xp.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">XP</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Weekly Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold mb-2">Monte Carlo Simulation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Implement a Monte Carlo simulation to price an Asian option.
                      </p>
                      <div className="text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Ends in 3 days
                        </span>
                      </div>
                      <Button className="w-full btn-hero">Join Challenge</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Badge Collection</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-4 gap-2">
                      {["🎯", "🔥", "⭐", "🏆", "📚", "💡", "🚀", "🎓"].map((emoji, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                          {emoji}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* AMAs Tab */}
            <TabsContent value="amas">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Upcoming AMAs with Industry Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {upcomingAMAs.map((ama) => (
                    <Card key={ama.id} className="hover:shadow-elegant transition-all">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                              {ama.guest.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{ama.guest}</CardTitle>
                            <CardDescription>{ama.role}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Topic</p>
                            <p className="font-medium">{ama.topic}</p>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {ama.date}
                            </span>
                            <span>{ama.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {ama.registered} registered
                            </span>
                            <Button size="sm" className="btn-hero !py-1">
                              Register
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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

export default CommunityPage;
