// Complete curriculum data with lessons, videos, and quizzes

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoId: string; // YouTube video ID
  topics: string[];
  quiz: Quiz;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  totalLessons: number;
  totalDuration: string;
  modules: Module[];
}

export const curriculumTracks: Track[] = [
  {
    id: "mathematics",
    title: "Mathematics for Quants",
    description: "Master the mathematical foundations essential for quantitative finance",
    icon: "Calculator",
    color: "from-blue-500 to-blue-700",
    difficulty: "Beginner",
    totalLessons: 24,
    totalDuration: "40 hours",
    modules: [
      {
        id: "linear-algebra",
        title: "Linear Algebra Fundamentals",
        description: "Vectors, matrices, and transformations for finance",
        lessons: [
          {
            id: "la-1",
            title: "Introduction to Vectors",
            description: "Understanding vectors in the context of financial data representation",
            duration: "18 min",
            videoId: "fNk_zzaMoSs", // 3Blue1Brown - Essence of Linear Algebra
            topics: ["Vector notation", "Vector operations", "Geometric interpretation"],
            quiz: {
              questions: [
                {
                  question: "What is a vector in the context of linear algebra?",
                  options: ["A single number", "An ordered list of numbers", "A matrix", "A function"],
                  correctAnswer: 1
                },
                {
                  question: "What does vector addition represent geometrically?",
                  options: ["Rotation", "Scaling", "Translation/displacement", "Reflection"],
                  correctAnswer: 2
                },
                {
                  question: "In finance, how might a vector be used?",
                  options: ["Store a single stock price", "Represent portfolio weights", "Calculate a single return", "None of the above"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "la-2",
            title: "Matrix Operations",
            description: "Matrix multiplication, transpose, and their applications",
            duration: "25 min",
            videoId: "XkY2DOUCWMU", // 3Blue1Brown - Matrix multiplication
            topics: ["Matrix notation", "Multiplication rules", "Transpose", "Identity matrix"],
            quiz: {
              questions: [
                {
                  question: "What is the result dimensions of multiplying a 3x2 matrix with a 2x4 matrix?",
                  options: ["3x4", "2x3", "4x3", "Cannot multiply"],
                  correctAnswer: 0
                },
                {
                  question: "What is the transpose of a row vector?",
                  options: ["Row vector", "Column vector", "Scalar", "Matrix"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "la-3",
            title: "Eigenvalues and Eigenvectors",
            description: "Understanding eigendecomposition for PCA and risk analysis",
            duration: "30 min",
            videoId: "PFDu9oVAE-g", // 3Blue1Brown - Eigenvectors
            topics: ["Eigenvalue definition", "Characteristic polynomial", "Applications in PCA"],
            quiz: {
              questions: [
                {
                  question: "What remains unchanged when a matrix transforms an eigenvector?",
                  options: ["Its magnitude", "Its direction", "Its components", "Nothing"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "calculus",
        title: "Calculus for Finance",
        description: "Derivatives, integrals, and optimization techniques",
        lessons: [
          {
            id: "calc-1",
            title: "Derivatives and Rate of Change",
            description: "Understanding derivatives for sensitivity analysis",
            duration: "22 min",
            videoId: "WUvTyaaNkzM", // 3Blue1Brown - Essence of Calculus
            topics: ["Limit definition", "Derivative rules", "Financial interpretation"],
            quiz: {
              questions: [
                {
                  question: "What does the derivative of a position represent in finance?",
                  options: ["Velocity/rate of return", "Acceleration", "Total value", "Average value"],
                  correctAnswer: 0
                }
              ]
            }
          },
          {
            id: "calc-2",
            title: "Partial Derivatives and Greeks",
            description: "Multi-variable calculus for option pricing",
            duration: "28 min",
            videoId: "GkB4vW16QHI", // Partial derivatives
            topics: ["Partial derivatives", "Delta", "Gamma", "Theta", "Vega"],
            quiz: {
              questions: [
                {
                  question: "What does Delta measure in options?",
                  options: ["Time decay", "Volatility sensitivity", "Price sensitivity to underlying", "Interest rate sensitivity"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "calc-3",
            title: "Optimization and Critical Points",
            description: "Finding optimal portfolio allocations",
            duration: "25 min",
            videoId: "NUQ1gphNQVk", // Optimization
            topics: ["Gradient descent", "Lagrange multipliers", "Constrained optimization"],
            quiz: {
              questions: [
                {
                  question: "Why do we use Lagrange multipliers in portfolio optimization?",
                  options: ["For unconstrained problems", "To handle constraints like budget", "For linear problems only", "None of the above"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "probability",
        title: "Probability Theory",
        description: "Probability foundations for stochastic modeling",
        lessons: [
          {
            id: "prob-1",
            title: "Probability Basics",
            description: "Sample spaces, events, and probability axioms",
            duration: "20 min",
            videoId: "uzkc-qNVoOk", // Khan Academy probability
            topics: ["Sample space", "Events", "Probability axioms", "Conditional probability"],
            quiz: {
              questions: [
                {
                  question: "What is the probability of the entire sample space?",
                  options: ["0", "0.5", "1", "Undefined"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "prob-2",
            title: "Random Variables and Distributions",
            description: "Discrete and continuous distributions in finance",
            duration: "25 min",
            videoId: "3v9w79NhsfI", // 3Blue1Brown distributions
            topics: ["PDF", "CDF", "Normal distribution", "Log-normal"],
            quiz: {
              questions: [
                {
                  question: "Why is the log-normal distribution used for stock prices?",
                  options: ["Prices can be negative", "Prices are always positive", "Easier to compute", "No reason"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "prob-3",
            title: "Expected Value and Variance",
            description: "Moments and their financial interpretation",
            duration: "22 min",
            videoId: "KbB0FjPg0mw", // Expected value
            topics: ["Expected value", "Variance", "Covariance", "Correlation"],
            quiz: {
              questions: [
                {
                  question: "What does variance measure in a portfolio context?",
                  options: ["Expected return", "Risk/volatility", "Maximum value", "Minimum value"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "statistics",
    title: "Statistics & Data Analysis",
    description: "Statistical methods for analyzing financial data and making data-driven decisions",
    icon: "TrendingUp",
    color: "from-emerald-500 to-emerald-700",
    difficulty: "Intermediate",
    totalLessons: 20,
    totalDuration: "35 hours",
    modules: [
      {
        id: "descriptive-stats",
        title: "Descriptive Statistics",
        description: "Summarizing and visualizing financial data",
        lessons: [
          {
            id: "ds-1",
            title: "Measures of Central Tendency",
            description: "Mean, median, mode in financial analysis",
            duration: "18 min",
            videoId: "uhxtUt_-GyM", // Statistics intro
            topics: ["Arithmetic mean", "Geometric mean", "Median", "Mode"],
            quiz: {
              questions: [
                {
                  question: "Which mean is more appropriate for calculating average returns over time?",
                  options: ["Arithmetic mean", "Geometric mean", "Harmonic mean", "Weighted mean"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "ds-2",
            title: "Measures of Dispersion",
            description: "Variance, standard deviation, and risk metrics",
            duration: "20 min",
            videoId: "E4HAYd0QnRc", // Variance and std dev
            topics: ["Variance", "Standard deviation", "Range", "IQR"],
            quiz: {
              questions: [
                {
                  question: "What does a higher standard deviation indicate about an investment?",
                  options: ["Lower risk", "Higher risk", "Higher return", "Lower return"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "regression",
        title: "Regression Analysis",
        description: "Building predictive models for financial data",
        lessons: [
          {
            id: "reg-1",
            title: "Simple Linear Regression",
            description: "Modeling relationships between variables",
            duration: "25 min",
            videoId: "zPG4NjIkCjc", // Linear regression
            topics: ["Least squares", "R-squared", "Residuals", "Interpretation"],
            quiz: {
              questions: [
                {
                  question: "What does R-squared measure?",
                  options: ["Slope of the line", "Y-intercept", "Proportion of variance explained", "Correlation"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "reg-2",
            title: "Multiple Regression and Factor Models",
            description: "Multi-factor models like Fama-French",
            duration: "30 min",
            videoId: "dQNpSa-bq4M", // Multiple regression
            topics: ["Multiple predictors", "Beta", "Alpha", "Factor exposure"],
            quiz: {
              questions: [
                {
                  question: "In CAPM, what does beta represent?",
                  options: ["Total risk", "Systematic risk exposure", "Unsystematic risk", "Expected return"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "reg-3",
            title: "Time Series Analysis",
            description: "ARIMA, GARCH for volatility modeling",
            duration: "35 min",
            videoId: "DeORzP0go5I", // Time series
            topics: ["Autocorrelation", "ARIMA", "GARCH", "Stationarity"],
            quiz: {
              questions: [
                {
                  question: "Why is GARCH useful for financial time series?",
                  options: ["Models constant volatility", "Models time-varying volatility", "Predicts direction", "None of the above"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "hypothesis",
        title: "Hypothesis Testing",
        description: "Statistical inference for trading strategies",
        lessons: [
          {
            id: "hyp-1",
            title: "Fundamentals of Hypothesis Testing",
            description: "Null hypothesis, p-values, and significance",
            duration: "22 min",
            videoId: "0oc49DyA3hU", // Hypothesis testing
            topics: ["Null hypothesis", "Alternative hypothesis", "p-value", "Type I/II errors"],
            quiz: {
              questions: [
                {
                  question: "What is a Type I error?",
                  options: ["Failing to reject false null", "Rejecting true null", "Accepting alternative", "None"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "hyp-2",
            title: "Testing Trading Strategies",
            description: "Backtesting significance and avoiding overfitting",
            duration: "28 min",
            videoId: "VK-rnA3-41c", // Backtesting
            topics: ["Multiple testing correction", "Out-of-sample testing", "Sharpe ratio significance"],
            quiz: {
              questions: [
                {
                  question: "Why do we need multiple testing correction?",
                  options: ["Increase power", "Control false discovery rate", "Reduce sample size", "None"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "programming",
    title: "Programming for Quants",
    description: "Master Python, R, and C++ for quantitative analysis and algorithmic trading",
    icon: "Code",
    color: "from-purple-500 to-purple-700",
    difficulty: "Beginner",
    totalLessons: 32,
    totalDuration: "50 hours",
    modules: [
      {
        id: "python-basics",
        title: "Python Fundamentals",
        description: "Python programming essentials for finance",
        lessons: [
          {
            id: "py-1",
            title: "Python Setup and Basics",
            description: "Setting up your quant development environment",
            duration: "20 min",
            videoId: "rfscVS0vtbw", // Python crash course
            topics: ["Python installation", "Variables", "Data types", "Control flow"],
            quiz: {
              questions: [
                {
                  question: "Which Python package is essential for numerical computing?",
                  options: ["Django", "NumPy", "Flask", "Requests"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "py-2",
            title: "NumPy for Numerical Computing",
            description: "Efficient array operations for financial calculations",
            duration: "30 min",
            videoId: "QUT1VHiLmmI", // NumPy tutorial
            topics: ["Arrays", "Broadcasting", "Vectorization", "Linear algebra operations"],
            quiz: {
              questions: [
                {
                  question: "Why is vectorization preferred over loops in NumPy?",
                  options: ["Easier to read", "Much faster execution", "Uses less memory", "All of the above"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "py-3",
            title: "Pandas for Data Analysis",
            description: "DataFrames for financial time series",
            duration: "35 min",
            videoId: "vmEHCJofslg", // Pandas tutorial
            topics: ["DataFrame", "Series", "Indexing", "Time series operations"],
            quiz: {
              questions: [
                {
                  question: "What is the primary data structure in Pandas for tabular data?",
                  options: ["Array", "List", "DataFrame", "Dictionary"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "py-4",
            title: "Data Visualization with Matplotlib",
            description: "Creating financial charts and plots",
            duration: "25 min",
            videoId: "DAQNHzOcO5A", // Matplotlib tutorial
            topics: ["Line plots", "Candlestick charts", "Histograms", "Subplots"],
            quiz: {
              questions: [
                {
                  question: "Which chart type is commonly used for stock price visualization?",
                  options: ["Pie chart", "Candlestick chart", "Scatter plot", "Bar chart"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "python-finance",
        title: "Python for Finance",
        description: "Financial modeling and analysis with Python",
        lessons: [
          {
            id: "pyf-1",
            title: "Portfolio Analysis with Python",
            description: "Building and analyzing portfolios",
            duration: "40 min",
            videoId: "GUf_hwcpM5k", // Portfolio analysis
            topics: ["Returns calculation", "Sharpe ratio", "Portfolio optimization", "Efficient frontier"],
            quiz: {
              questions: [
                {
                  question: "What does the Sharpe ratio measure?",
                  options: ["Total return", "Risk", "Risk-adjusted return", "Volatility"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "pyf-2",
            title: "Option Pricing in Python",
            description: "Implementing Black-Scholes and Monte Carlo",
            duration: "45 min",
            videoId: "3gcLRU24-w0", // Options Python
            topics: ["Black-Scholes formula", "Greeks calculation", "Monte Carlo simulation"],
            quiz: {
              questions: [
                {
                  question: "Which inputs are needed for Black-Scholes?",
                  options: ["Only stock price", "Stock price, strike, volatility, time, risk-free rate", "Just volatility", "Strike and time only"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "pyf-3",
            title: "Algorithmic Trading with Python",
            description: "Building automated trading systems",
            duration: "50 min",
            videoId: "xfzGZB4HhEE", // Algo trading
            topics: ["Signal generation", "Backtesting", "Order execution", "Risk management"],
            quiz: {
              questions: [
                {
                  question: "What is backtesting?",
                  options: ["Testing future performance", "Testing strategy on historical data", "Testing hardware", "None"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "cpp-basics",
        title: "C++ for High-Frequency Trading",
        description: "Performance-critical programming in C++",
        lessons: [
          {
            id: "cpp-1",
            title: "C++ Fundamentals",
            description: "Memory management and performance optimization",
            duration: "30 min",
            videoId: "vLnPwxZdW4Y", // C++ crash course
            topics: ["Pointers", "References", "Memory management", "STL"],
            quiz: {
              questions: [
                {
                  question: "Why is C++ preferred for HFT systems?",
                  options: ["Easier syntax", "Low latency execution", "Better visualization", "Web integration"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "cpp-2",
            title: "Data Structures for Trading",
            description: "Efficient data structures for order books",
            duration: "35 min",
            videoId: "RBSGKlAvoiM", // Data structures C++
            topics: ["Arrays", "Maps", "Priority queues", "Custom allocators"],
            quiz: {
              questions: [
                {
                  question: "Which data structure is commonly used for order book implementation?",
                  options: ["Array", "Linked list", "Red-black tree / Map", "Stack"],
                  correctAnswer: 2
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "financial-engineering",
    title: "Financial Engineering",
    description: "Master derivatives, risk management, and quantitative trading strategies",
    icon: "Building2",
    color: "from-orange-500 to-orange-700",
    difficulty: "Advanced",
    totalLessons: 28,
    totalDuration: "45 hours",
    modules: [
      {
        id: "derivatives",
        title: "Derivatives and Options",
        description: "Understanding and pricing financial derivatives",
        lessons: [
          {
            id: "der-1",
            title: "Introduction to Derivatives",
            description: "Forwards, futures, options, and swaps",
            duration: "25 min",
            videoId: "Wjlw7ZpZVK4", // Derivatives intro
            topics: ["Forward contracts", "Futures", "Options basics", "Swap agreements"],
            quiz: {
              questions: [
                {
                  question: "What is the main difference between futures and forwards?",
                  options: ["Price", "Exchange-traded vs OTC", "Underlying asset", "Duration"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "der-2",
            title: "Option Strategies",
            description: "Spreads, straddles, and complex positions",
            duration: "35 min",
            videoId: "SD7SW0fBQu4", // Option strategies
            topics: ["Bull/Bear spreads", "Straddles", "Iron condor", "Butterfly"],
            quiz: {
              questions: [
                {
                  question: "When would you use a straddle strategy?",
                  options: ["Expecting low volatility", "Expecting high volatility", "Bullish outlook", "Bearish outlook"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "der-3",
            title: "Black-Scholes Model",
            description: "The fundamental option pricing model",
            duration: "40 min",
            videoId: "pr-u4LCFYEY", // Black-Scholes
            topics: ["Model assumptions", "Formula derivation", "Greeks", "Limitations"],
            quiz: {
              questions: [
                {
                  question: "Which assumption is NOT part of Black-Scholes?",
                  options: ["No dividends", "Constant volatility", "Stochastic volatility", "No arbitrage"],
                  correctAnswer: 2
                }
              ]
            }
          }
        ]
      },
      {
        id: "risk-management",
        title: "Risk Management",
        description: "Measuring and managing financial risk",
        lessons: [
          {
            id: "risk-1",
            title: "Value at Risk (VaR)",
            description: "Quantifying portfolio risk",
            duration: "30 min",
            videoId: "d6JwoqHjlzY", // VaR explained
            topics: ["Historical VaR", "Parametric VaR", "Monte Carlo VaR", "Expected Shortfall"],
            quiz: {
              questions: [
                {
                  question: "What does 95% VaR represent?",
                  options: ["Expected profit", "Maximum loss with 95% confidence", "Loss exceeded 5% of time", "Average return"],
                  correctAnswer: 2
                }
              ]
            }
          },
          {
            id: "risk-2",
            title: "Portfolio Risk Decomposition",
            description: "Understanding sources of portfolio risk",
            duration: "35 min",
            videoId: "iFO9ICn4bMc", // Risk decomposition
            topics: ["Factor risk", "Idiosyncratic risk", "Risk attribution", "Stress testing"],
            quiz: {
              questions: [
                {
                  question: "What type of risk can be diversified away?",
                  options: ["Systematic risk", "Idiosyncratic risk", "Market risk", "Factor risk"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "quant-strategies",
        title: "Quantitative Trading Strategies",
        description: "Designing and implementing trading algorithms",
        lessons: [
          {
            id: "strat-1",
            title: "Momentum Strategies",
            description: "Trend-following and momentum investing",
            duration: "30 min",
            videoId: "yV-yH3FLxvY", // Momentum investing
            topics: ["Cross-sectional momentum", "Time-series momentum", "Dual momentum"],
            quiz: {
              questions: [
                {
                  question: "What is the core assumption of momentum strategies?",
                  options: ["Prices are random", "Past winners continue winning", "Prices mean revert", "Markets are efficient"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "strat-2",
            title: "Mean Reversion Strategies",
            description: "Statistical arbitrage and pairs trading",
            duration: "35 min",
            videoId: "TPoAMHwGsLw", // Mean reversion
            topics: ["Cointegration", "Pairs trading", "Bollinger bands", "Z-score"],
            quiz: {
              questions: [
                {
                  question: "What statistical property is needed for pairs trading?",
                  options: ["Correlation", "Cointegration", "Independence", "Causation"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "strat-3",
            title: "Market Making Strategies",
            description: "Providing liquidity and earning the spread",
            duration: "40 min",
            videoId: "0vKdI9KKmis", // Market making
            topics: ["Bid-ask spread", "Inventory management", "Adverse selection", "Quote optimization"],
            quiz: {
              questions: [
                {
                  question: "What is the primary source of profit for market makers?",
                  options: ["Price appreciation", "Bid-ask spread", "Dividends", "Interest"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "projects",
    title: "Projects & Simulations",
    description: "Apply your skills with hands-on projects and real-world simulations",
    icon: "Laptop",
    color: "from-pink-500 to-pink-700",
    difficulty: "Advanced",
    totalLessons: 15,
    totalDuration: "30 hours",
    modules: [
      {
        id: "backtesting",
        title: "Backtesting Framework",
        description: "Build a complete backtesting system",
        lessons: [
          {
            id: "bt-1",
            title: "Designing a Backtesting Engine",
            description: "Architecture for strategy testing",
            duration: "45 min",
            videoId: "eggLMkT5C4c", // Backtesting system
            topics: ["Event-driven design", "Data handling", "Performance metrics"],
            quiz: {
              questions: [
                {
                  question: "Why is event-driven backtesting preferred?",
                  options: ["Simpler code", "More realistic simulation", "Faster execution", "Less data needed"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "bt-2",
            title: "Implementing Trading Signals",
            description: "Building signal generation modules",
            duration: "40 min",
            videoId: "SEQbb8w7VTw", // Trading signals
            topics: ["Signal generation", "Position sizing", "Entry/exit rules"],
            quiz: {
              questions: [
                {
                  question: "What is position sizing?",
                  options: ["Chart size", "Determining how much to invest", "Stop loss level", "Take profit level"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "monte-carlo",
        title: "Monte Carlo Simulations",
        description: "Probabilistic modeling and scenario analysis",
        lessons: [
          {
            id: "mc-1",
            title: "Monte Carlo for Option Pricing",
            description: "Pricing complex derivatives with simulation",
            duration: "50 min",
            videoId: "7TqhmX92P6U", // Monte Carlo options
            topics: ["Random path generation", "Variance reduction", "Exotic options"],
            quiz: {
              questions: [
                {
                  question: "When is Monte Carlo preferred over analytical solutions?",
                  options: ["Simple payoffs", "Path-dependent options", "European options", "Never"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "mc-2",
            title: "Portfolio Monte Carlo",
            description: "Simulating portfolio returns and risk",
            duration: "45 min",
            videoId: "6-dhdMDiYWQ", // Portfolio Monte Carlo
            topics: ["Correlated asset simulation", "Tail risk analysis", "Retirement planning"],
            quiz: {
              questions: [
                {
                  question: "Why is correlation important in portfolio simulation?",
                  options: ["Simplifies calculation", "Assets move together in stress", "Reduces runtime", "Not important"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: "live-trading",
        title: "Live Trading Project",
        description: "Deploy a trading bot with paper trading",
        lessons: [
          {
            id: "live-1",
            title: "API Integration",
            description: "Connecting to broker APIs",
            duration: "40 min",
            videoId: "c9OjAe1v08M", // Trading API
            topics: ["REST APIs", "WebSocket feeds", "Authentication", "Order types"],
            quiz: {
              questions: [
                {
                  question: "What is WebSocket used for in trading?",
                  options: ["Placing orders", "Real-time data streaming", "Account management", "Backtesting"],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: "live-2",
            title: "Paper Trading Deployment",
            description: "Testing strategies with simulated money",
            duration: "35 min",
            videoId: "GdlFhF6gjKo", // Paper trading
            topics: ["Paper trading setup", "Monitoring", "Logging", "Performance tracking"],
            quiz: {
              questions: [
                {
                  question: "What is the purpose of paper trading?",
                  options: ["Make real money", "Test strategy without risk", "Learn APIs faster", "Required by law"],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-success/10 text-success border-success/20";
    case "Intermediate":
      return "bg-warning/10 text-warning border-warning/20";
    case "Advanced":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};
