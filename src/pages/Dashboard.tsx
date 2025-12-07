import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { curriculumTracks } from "@/data/curriculumData";
import { 
  BookOpen, Clock, Trophy, Flame, Target, Play,
  TrendingUp, Calendar, Award, Star, ArrowRight, Zap
} from "lucide-react";

// Mock user data - in real app, this would come from auth/database
const userData = {
  name: "Alex Chen",
  avatar: "AC",
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  streak: 7,
  badges: 8,
  completedLessons: 24,
  totalLessons: 119,
  hoursLearned: 32,
  joinDate: "November 2024",
};

const recentActivity = [
  { type: "lesson", title: "Matrix Operations", track: "Mathematics", time: "2 hours ago" },
  { type: "quiz", title: "Probability Basics Quiz", track: "Mathematics", time: "Yesterday" },
  { type: "lesson", title: "NumPy Fundamentals", track: "Programming", time: "2 days ago" },
  { type: "badge", title: "First Week Streak", track: "", time: "3 days ago" },
];

const upcomingWebinars = [
  { title: "Intro to Options Trading", date: "Dec 10", time: "2:00 PM EST" },
  { title: "Python for Finance Workshop", date: "Dec 12", time: "3:00 PM EST" },
];

const earnedBadges = [
  { emoji: "🎯", name: "First Steps", description: "Complete your first lesson" },
  { emoji: "🔥", name: "On Fire", description: "7-day learning streak" },
  { emoji: "📚", name: "Bookworm", description: "Complete 10 lessons" },
  { emoji: "⭐", name: "Quiz Master", description: "Perfect score on 5 quizzes" },
  { emoji: "🚀", name: "Fast Learner", description: "Complete 5 lessons in one day" },
  { emoji: "💡", name: "Problem Solver", description: "Complete first project" },
  { emoji: "🏆", name: "Top 10", description: "Reach top 10 on leaderboard" },
  { emoji: "🎓", name: "Module Master", description: "Complete a full module" },
];

const Dashboard = () => {
  const progressPercentage = Math.round((userData.completedLessons / userData.totalLessons) * 100);
  const xpPercentage = Math.round((userData.xp / userData.xpToNextLevel) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {userData.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {userData.name}!</h1>
                <p className="text-muted-foreground">
                  Level {userData.level} • Member since {userData.joinDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-lg">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-orange-500">{userData.streak} day streak</span>
              </div>
              <Link to="/curriculum">
                <Button className="btn-hero">
                  Continue Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">{userData.xp.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total XP</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <p className="text-2xl font-bold">{userData.completedLessons}</p>
                <p className="text-sm text-muted-foreground">Lessons Complete</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-warning/10 flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <p className="text-2xl font-bold">{userData.hoursLearned}</p>
                <p className="text-sm text-muted-foreground">Hours Learned</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-2xl font-bold">{userData.badges}</p>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-warning" />
                    Level Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Level {userData.level}</span>
                    <span className="text-sm text-muted-foreground">
                      {userData.xp} / {userData.xpToNextLevel} XP
                    </span>
                  </div>
                  <Progress value={xpPercentage} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {userData.xpToNextLevel - userData.xp} XP to Level {userData.level + 1}
                  </p>
                </CardContent>
              </Card>

              {/* Continue Where You Left Off */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Continue Where You Left Off
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Eigenvalues and Eigenvectors</p>
                      <p className="text-sm text-muted-foreground">Mathematics for Quants • Linear Algebra</p>
                      <div className="flex items-center gap-4 mt-2">
                        <Progress value={60} className="h-2 flex-1 max-w-32" />
                        <span className="text-sm text-muted-foreground">60% complete</span>
                      </div>
                    </div>
                    <Link to="/lesson/mathematics/linear-algebra/la-3">
                      <Button className="btn-hero">
                        Resume
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Track Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Your Learning Paths
                  </CardTitle>
                  <CardDescription>Track your progress across all curriculum paths</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {curriculumTracks.slice(0, 4).map((track, idx) => {
                    // Mock progress data
                    const progress = [45, 30, 20, 10, 5][idx];
                    return (
                      <div key={track.id} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${track.color} flex items-center justify-center flex-shrink-0`}>
                          <BookOpen className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-sm">{track.title}</p>
                            <span className="text-sm text-muted-foreground">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      </div>
                    );
                  })}
                  <Link to="/curriculum">
                    <Button variant="outline" className="w-full mt-2">
                      View All Paths
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-warning" />
                    Badges Earned
                  </CardTitle>
                  <CardDescription>Your achievements and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    {earnedBadges.map((badge, idx) => (
                      <div 
                        key={idx}
                        className="flex flex-col items-center gap-1 cursor-pointer group"
                        title={`${badge.name}: ${badge.description}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          {badge.emoji}
                        </div>
                        <span className="text-xs text-muted-foreground text-center truncate w-full">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Goal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5" />
                    Daily Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary">1 / 3</div>
                    <p className="text-sm text-muted-foreground">lessons today</p>
                  </div>
                  <Progress value={33} className="h-3 mb-4" />
                  <p className="text-sm text-muted-foreground text-center">
                    Complete 2 more lessons to reach your daily goal!
                  </p>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'lesson' ? 'bg-primary/10' :
                        activity.type === 'quiz' ? 'bg-success/10' :
                        'bg-warning/10'
                      }`}>
                        {activity.type === 'lesson' && <BookOpen className="w-4 h-4 text-primary" />}
                        {activity.type === 'quiz' && <Target className="w-4 h-4 text-success" />}
                        {activity.type === 'badge' && <Award className="w-4 h-4 text-warning" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.track && `${activity.track} • `}{activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Webinars */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingWebinars.map((webinar, idx) => (
                    <div key={idx} className="p-3 bg-secondary/50 rounded-lg">
                      <p className="font-medium text-sm">{webinar.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {webinar.date} • {webinar.time}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Weekly Challenge */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Trophy className="w-5 h-5 text-warning" />
                    Weekly Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Build a Moving Average Crossover</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implement a simple moving average crossover strategy in Python.
                  </p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-muted-foreground">Reward: 500 XP</span>
                    <Badge variant="outline">3 days left</Badge>
                  </div>
                  <Button className="w-full btn-hero">Start Challenge</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
