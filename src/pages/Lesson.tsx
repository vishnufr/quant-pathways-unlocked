import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { curriculumTracks } from "@/data/curriculumData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, ArrowRight, Play, CheckCircle2, 
  Clock, BookOpen, Code, FileText, Trophy
} from "lucide-react";
import CodeEditor from "@/components/CodeEditor";
import { toast } from "@/hooks/use-toast";

const Lesson = () => {
  const { trackId, moduleId, lessonId } = useParams();
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const { track, module, lesson, prevLesson, nextLesson } = useMemo(() => {
    const track = curriculumTracks.find(t => t.id === trackId);
    const module = track?.modules.find(m => m.id === moduleId);
    const lessonIndex = module?.lessons.findIndex(l => l.id === lessonId) ?? -1;
    const lesson = module?.lessons[lessonIndex];
    
    // Find prev/next lessons
    let prevLesson = null;
    let nextLesson = null;
    
    if (module && lessonIndex > 0) {
      prevLesson = { 
        lesson: module.lessons[lessonIndex - 1], 
        moduleId: module.id 
      };
    } else if (track && module) {
      const moduleIndex = track.modules.findIndex(m => m.id === moduleId);
      if (moduleIndex > 0) {
        const prevModule = track.modules[moduleIndex - 1];
        prevLesson = { 
          lesson: prevModule.lessons[prevModule.lessons.length - 1], 
          moduleId: prevModule.id 
        };
      }
    }
    
    if (module && lessonIndex < module.lessons.length - 1) {
      nextLesson = { 
        lesson: module.lessons[lessonIndex + 1], 
        moduleId: module.id 
      };
    } else if (track && module) {
      const moduleIndex = track.modules.findIndex(m => m.id === moduleId);
      if (moduleIndex < track.modules.length - 1) {
        const nextModule = track.modules[moduleIndex + 1];
        nextLesson = { 
          lesson: nextModule.lessons[0], 
          moduleId: nextModule.id 
        };
      }
    }
    
    return { track, module, lesson, prevLesson, nextLesson };
  }, [trackId, moduleId, lessonId]);

  if (!track || !module || !lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Link to="/curriculum">
            <Button>Back to Curriculum</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    const correctCount = lesson.quiz.questions.reduce((acc, q, idx) => {
      return acc + (quizAnswers[idx] === q.correctAnswer ? 1 : 0);
    }, 0);
    
    setShowResults(true);
    
    if (correctCount === lesson.quiz.questions.length) {
      setCompletedLessons([...completedLessons, lesson.id]);
      toast({
        title: "Perfect Score! 🎉",
        description: "You've mastered this lesson. Keep going!",
      });
    } else {
      toast({
        title: `Score: ${correctCount}/${lesson.quiz.questions.length}`,
        description: "Review the material and try again!",
        variant: "destructive",
      });
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/curriculum" className="hover:text-primary">Curriculum</Link>
            <span>/</span>
            <Link to={`/track/${track.id}`} className="hover:text-primary">{track.title}</Link>
            <span>/</span>
            <span className="text-foreground">{lesson.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-foreground/5">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card>

              {/* Lesson Info */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
                <p className="text-muted-foreground mb-4">{lesson.description}</p>
                <div className="flex flex-wrap gap-2">
                  {lesson.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary">{topic}</Badge>
                  ))}
                </div>
              </div>

              {/* Tabs for Notes, Quiz, Code */}
              <Tabs defaultValue="quiz" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="notes" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="quiz" className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Quiz
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Practice
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="notes" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Lesson Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none">
                      <h3>Key Concepts</h3>
                      <ul>
                        {lesson.topics.map((topic, idx) => (
                          <li key={idx}><strong>{topic}</strong> - Core concept covered in this lesson</li>
                        ))}
                      </ul>
                      <h3>Summary</h3>
                      <p>{lesson.description}</p>
                      <h3>Additional Resources</h3>
                      <ul>
                        <li>Download the lecture slides (PDF)</li>
                        <li>Practice problems worksheet</li>
                        <li>Supplementary reading materials</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quiz" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Knowledge Check</span>
                        {showResults && (
                          <Button variant="outline" size="sm" onClick={resetQuiz}>
                            Try Again
                          </Button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {lesson.quiz.questions.map((q, qIdx) => (
                        <div key={qIdx} className="space-y-3">
                          <p className="font-medium">
                            {qIdx + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((option, oIdx) => {
                              const isSelected = quizAnswers[qIdx] === oIdx;
                              const isCorrect = q.correctAnswer === oIdx;
                              let bgColor = "bg-secondary hover:bg-secondary/80";
                              
                              if (showResults) {
                                if (isCorrect) bgColor = "bg-success/20 border-success";
                                else if (isSelected && !isCorrect) bgColor = "bg-destructive/20 border-destructive";
                              } else if (isSelected) {
                                bgColor = "bg-primary/20 border-primary";
                              }
                              
                              return (
                                <button
                                  key={oIdx}
                                  className={`w-full text-left p-3 rounded-lg border transition-all ${bgColor}`}
                                  onClick={() => !showResults && setQuizAnswers({ ...quizAnswers, [qIdx]: oIdx })}
                                  disabled={showResults}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-background flex items-center justify-center text-sm font-medium">
                                      {String.fromCharCode(65 + oIdx)}
                                    </span>
                                    {option}
                                    {showResults && isCorrect && (
                                      <CheckCircle2 className="w-4 h-4 text-success ml-auto" />
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      
                      {!showResults && (
                        <Button 
                          className="w-full btn-hero"
                          onClick={handleQuizSubmit}
                          disabled={Object.keys(quizAnswers).length < lesson.quiz.questions.length}
                        >
                          Submit Answers
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="code" className="mt-6">
                  <CodeEditor
                    title={lesson.title}
                    defaultCode={`# Practice: ${lesson.title}\n# Try implementing what you learned!\n\nimport numpy as np\nimport pandas as pd\n\n# Your code here...\ndef practice_exercise():\n    """\n    Implement the concepts from this lesson.\n    """\n    pass\n\n# Test your implementation\nif __name__ == "__main__":\n    practice_exercise()\n    print("Great job! 🎉")`}
                  />
                </TabsContent>
              </Tabs>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t">
                {prevLesson ? (
                  <Link to={`/lesson/${track.id}/${prevLesson.moduleId}/${prevLesson.lesson.id}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Previous: {prevLesson.lesson.title}
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}
                
                {nextLesson ? (
                  <Link to={`/lesson/${track.id}/${nextLesson.moduleId}/${nextLesson.lesson.id}`}>
                    <Button className="btn-hero flex items-center gap-2">
                      Next: {nextLesson.lesson.title}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/curriculum">
                    <Button className="btn-hero">
                      Complete Track 🎉
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{module.title}</span>
                        <span>0/{module.lessons.length}</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Module Lessons */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {module.lessons.map((l, idx) => (
                    <Link
                      key={l.id}
                      to={`/lesson/${track.id}/${module.id}/${l.id}`}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                        l.id === lesson.id 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        l.id === lesson.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                      }`}>
                        {completedLessons.includes(l.id) ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <span className="text-sm truncate">{l.title}</span>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <FileText className="w-4 h-4" />
                    Download Slides
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Code className="w-4 h-4" />
                    Code Examples
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BookOpen className="w-4 h-4" />
                    Further Reading
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
