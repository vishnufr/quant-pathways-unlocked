import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Copy, RotateCcw, Terminal } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CodeEditorProps {
  title: string;
  defaultCode: string;
}

const SIMULATED_OUTPUTS: Record<string, string> = {
  "print": "Output displayed successfully!",
  "numpy": "NumPy array operations completed.",
  "pandas": "DataFrame created and processed.",
  "matplotlib": "Chart rendered (see visualization above).",
  "scipy": "Statistical computation completed.",
};

const CodeEditor = ({ title, defaultCode }: CodeEditorProps) => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const { theme } = useTheme();

  const handleRun = useCallback(() => {
    setIsRunning(true);
    setOutput(null);

    setTimeout(() => {
      const lines = code.split("\n");
      const outputs: string[] = [];

      for (const line of lines) {
        const printMatch = line.match(/print\(["'](.+?)["']\)/);
        if (printMatch) {
          outputs.push(printMatch[1]);
        } else if (line.match(/print\(/)) {
          const key = Object.keys(SIMULATED_OUTPUTS).find(k => code.includes(k));
          outputs.push(key ? SIMULATED_OUTPUTS[key] : ">>> Output");
        }
      }

      if (outputs.length === 0) {
        outputs.push("✅ Code executed successfully (no output)");
      }

      setOutput(outputs.join("\n"));
      setIsRunning(false);
    }, 800);
  }, [code]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    toast({ title: "Copied!", description: "Code copied to clipboard." });
  }, [code]);

  const handleReset = useCallback(() => {
    setCode(defaultCode);
    setOutput(null);
  }, [defaultCode]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Practice: {title}</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="w-3 h-3 mr-1" /> Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-3 h-3 mr-1" /> Reset
            </Button>
            <Button size="sm" onClick={handleRun} disabled={isRunning} className="gradient-primary text-primary-foreground">
              <Play className="w-3 h-3 mr-1" /> {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg overflow-hidden border border-border">
          <Editor
            height="300px"
            defaultLanguage="python"
            value={code}
            onChange={(v) => setCode(v ?? "")}
            theme={theme === "dark" ? "vs-dark" : "light"}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 12 },
            }}
          />
        </div>

        {output !== null && (
          <div className="rounded-lg bg-foreground/5 border border-border p-4">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <Terminal className="w-4 h-4" />
              Output
            </div>
            <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">{output}</pre>
          </div>
        )}

        <p className="text-sm text-muted-foreground">
          💡 This is a simulated environment. For full execution, use a local Python IDE or Jupyter notebook.
        </p>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;
