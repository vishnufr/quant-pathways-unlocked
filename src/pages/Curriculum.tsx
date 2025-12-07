import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { curriculumTracks, getDifficultyColor } from "@/data/curriculumData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Calculator, TrendingUp, Code, Building2, Laptop, 
  Clock, BookOpen, ArrowRight, Play, Star
} from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Calculator,
  TrendingUp,
  Code,
  Building2,
  Laptop,
};

const Curriculum = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Master Quantitative Finance
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Structured learning paths from fundamentals to advanced topics. 
            Learn at your own pace with video lessons, quizzes, and hands-on projects.
          </p>
        </div>
      </section>

      {/* Track Overview */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {curriculumTracks.map((track) => {
              const IconComponent = iconMap[track.icon];
              return (
                <Card 
                  key={track.id}
                  className={`cursor-pointer transition-all hover:shadow-elegant hover:scale-105 ${
                    selectedTrack === track.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-3`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary-foreground" />}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{track.title}</h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>{track.totalLessons} lessons</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Tracks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {curriculumTracks.map((track) => {
              const IconComponent = iconMap[track.icon];
              const isExpanded = selectedTrack === track.id || !selectedTrack;
              
              if (!isExpanded) return null;
              
              return (
                <div key={track.id} className="animate-fade-in-up">
                  {/* Track Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center flex-shrink-0`}>
                      {IconComponent && <IconComponent className="w-8 h-8 text-primary-foreground" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold">{track.title}</h2>
                        <Badge className={getDifficultyColor(track.difficulty)}>
                          {track.difficulty}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{track.description}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {track.totalLessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {track.totalDuration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning" />
                          4.9 rating
                        </span>
                      </div>
                    </div>
                    <Link to={`/track/${track.id}`}>
                      <Button className="btn-hero">
                        Start Track
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Modules Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {track.modules.map((module, moduleIndex) => (
                      <Card key={module.id} className="hover:shadow-elegant transition-all">
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                              Module {moduleIndex + 1}
                            </span>
                          </div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                              <Link 
                                key={lesson.id} 
                                to={`/lesson/${track.id}/${module.id}/${lesson.id}`}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  {lessonIndex + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{lesson.title}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                </div>
                                <Play className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                            {module.lessons.length > 3 && (
                              <p className="text-sm text-muted-foreground text-center pt-2">
                                +{module.lessons.length - 3} more lessons
                              </p>
                            )}
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Curriculum;
