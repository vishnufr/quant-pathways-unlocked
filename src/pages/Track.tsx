import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { curriculumTracks, getDifficultyColor } from "@/data/curriculumData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calculator, TrendingUp, Code, Building2, Laptop,
  Clock, BookOpen, Play, CheckCircle2, Lock, ArrowRight, Star
} from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Calculator,
  TrendingUp,
  Code,
  Building2,
  Laptop,
};

const Track = () => {
  const { trackId } = useParams();
  
  const track = useMemo(() => {
    return curriculumTracks.find(t => t.id === trackId);
  }, [trackId]);

  if (!track) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Track not found</h1>
          <Link to="/curriculum">
            <Button>Back to Curriculum</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[track.icon];
  const totalLessons = track.modules.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className={`pt-24 pb-12 bg-gradient-to-br ${track.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              {IconComponent && <IconComponent className="w-10 h-10 text-primary-foreground" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {track.title}
                </h1>
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">
                  {track.difficulty}
                </Badge>
              </div>
              <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl">
                {track.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {totalLessons} lessons
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {track.totalDuration}
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  4.9 rating
                </span>
              </div>
            </div>
            <Link to={`/lesson/${track.id}/${track.modules[0].id}/${track.modules[0].lessons[0].id}`}>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-6 bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-sm text-muted-foreground">0 / {totalLessons} lessons completed</span>
          </div>
          <Progress value={0} className="h-3" />
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Course Content</h2>
              
              <Accordion type="multiple" defaultValue={[track.modules[0].id]} className="space-y-4">
                {track.modules.map((module, moduleIndex) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {moduleIndex + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {module.lessons.length} lessons • {module.lessons.reduce((acc, l) => {
                              const mins = parseInt(l.duration);
                              return acc + mins;
                            }, 0)} min
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <Link
                            key={lesson.id}
                            to={`/lesson/${track.id}/${module.id}/${lesson.id}`}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {lessonIndex + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium group-hover:text-primary transition-colors">
                                {lesson.title}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Play className="w-3 h-3" />
                                  Video
                                </span>
                                <span>{lesson.duration}</span>
                                <span>Quiz ({lesson.quiz.questions.length} questions)</span>
                              </div>
                            </div>
                            <Play className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Modules</span>
                    <span className="font-medium">{track.modules.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Lessons</span>
                    <span className="font-medium">{totalLessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{track.totalDuration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <Badge className={getDifficultyColor(track.difficulty)}>
                      {track.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Certificate</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {track.modules.slice(0, 4).map((module) => (
                      <li key={module.id} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{module.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {track.difficulty === "Beginner" ? (
                      <>
                        <li>• Basic high school math</li>
                        <li>• Interest in finance and technology</li>
                        <li>• No prior programming experience required</li>
                      </>
                    ) : track.difficulty === "Intermediate" ? (
                      <>
                        <li>• Completion of beginner tracks</li>
                        <li>• Basic programming knowledge</li>
                        <li>• Understanding of calculus fundamentals</li>
                      </>
                    ) : (
                      <>
                        <li>• Strong programming skills</li>
                        <li>• Statistics and probability knowledge</li>
                        <li>• Understanding of financial markets</li>
                      </>
                    )}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Ready to start?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Begin your journey in {track.title.toLowerCase()} today.
                  </p>
                  <Link to={`/lesson/${track.id}/${track.modules[0].id}/${track.modules[0].lessons[0].id}`}>
                    <Button className="w-full btn-hero">
                      Start First Lesson
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Track;
