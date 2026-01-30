
export interface SkillProofData {
    id: string;
    name: string;
    icon: string;
    color: string; // Add color for branding
    brief: string;
    sections: {
        codeSnippets: {
            title: string;
            problem: string;
            code: string;
            why: string;
        }[];
        architecture: {
            title: string;
            content: string;
            diagram?: string;
        };
        performance: {
            title: string;
            content: string;
        }[];
        mistakes: {
            title: string;
            error: string;
            discovery: string;
            fix: string;
            lesson: string;
        }[];
    };
}

export const skillsProofData: SkillProofData[] = [
    {
        id: "java",
        name: "Java",
        icon: "☕",
        color: "#e76f00",
        brief: "Core language mastery focusing on clean, efficient, and thread-safe code.",
        sections: {
            codeSnippets: [
                {
                    title: "Stream API / Optional",
                    problem: "Avoid NullPointerException while processing optional data",
                    code: `Optional<User> userOpt = userRepository.findById(id);

userOpt.ifPresent(user -> {
    processUser(user);
});`,
                    why: "Prevents null checks clutter and leverages functional style for readability."
                },
                {
                    title: "Custom Exception Handling",
                    problem: "Handling business logic errors gracefully",
                    code: `public class InsufficientFundsException extends RuntimeException {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

// Usage
if (balance < amount) {
    throw new InsufficientFundsException("Balance too low");
}`,
                    why: "Separates error handling from main logic, providing clear error types."
                }
            ],
            architecture: {
                title: "OOP & Design Patterns",
                content: "Applied SOLID principles and patterns like Factory and Strategy to decouple logic. For example, a PaymentStrategy interface dealing with ensuring new payment methods can be added without modifying core processing code.",
                diagram: `   [PaymentService]
          |
          v
   <<interface>>
  [PaymentStrategy]
    /       \\
[CreditCard] [PayPal]`
            },
            performance: [
                {
                    title: "Collection Choices",
                    content: "Switched from LinkedList to ArrayList for read-heavy operations to utilize CPU cache locality and O(1) random access."
                },
                {
                    title: "String Handling",
                    content: "Used StringBuilder in loops instead of string concatenation to avoid O(n^2) temporary object creation overhead."
                }
            ],
            mistakes: [
                {
                    title: "Inheritance Abuse",
                    error: "Overused inheritance for code reuse, leading to fragile hierarchies.",
                    discovery: "Changing base class broke multiple unrelated subclasses.",
                    fix: "Refactored to Composition over Inheritance using dependency injection.",
                    lesson: "Composition provides better flexibility and looser coupling."
                }
            ]
        }
    },
    {
        id: "springboot",
        name: "Spring Boot",
        icon: "🍃",
        color: "#6db33f",
        brief: "Building scalable, production-ready microservices and REST APIs.",
        sections: {
            codeSnippets: [
                {
                    title: "REST Controller",
                    problem: "Standardized API endpoint",
                    code: `@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
}`,
                    why: "Clean separation of concerns: Controller delegates to Service, returns standardized ResponseEntity."
                },
                {
                    title: "Global Exception Handling",
                    problem: "Centralized error response structure",
                    code: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(Exception e) {
        return ResponseEntity.status(404).body(new ErrorResponse(e.getMessage()));
    }
}`,
                    why: "Keeps controllers clean and ensures consistent API error responses."
                }
            ],
            architecture: {
                title: "Layered Architecture",
                content: "Strict separation of concerns. Controllers handle HTTP, Services handle business logic, Repositories handle data access.",
                diagram: `Controller -> Service -> Repository -> DB`
            },
            performance: [
                {
                    title: "N+1 Query Problem",
                    content: "Detected N+1 queries when fetching user orders. Fixed by using @EntityGraph or JOIN FETCH in JPQL to eager load related entities in a single query."
                },
                {
                    title: "Indexing",
                    content: "Added database indexes on frequently searched columns (email, status) to reduce lookup time from O(n) to O(log n)."
                }
            ],
            mistakes: [
                {
                    title: "Business Logic in Controller",
                    error: "Placed complex validation and calculation logic inside the Controller methods.",
                    discovery: "Hard to unit test controller; logic wasn't reusable by other parts of the app.",
                    fix: "Moved all logic to Service layer, keeping Controller as a thin routing layer.",
                    lesson: "Keep controllers thin, services fat."
                }
            ]
        }
    },
    {
        id: "sql",
        name: "SQL",
        icon: "💾",
        color: "#00758f",
        brief: "Designing normalized schemas and writing optimized complex queries.",
        sections: {
            codeSnippets: [
                {
                    title: "Aggregation & Join",
                    problem: "Count orders per user",
                    code: `SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;`,
                    why: "Efficiently groups data using LEFT JOIN to include users with zero orders."
                }
            ],
            architecture: {
                title: "Schema Design",
                content: "Prioritize 3rd Normal Form (3NF) to reduce redundancy. Use Foreign Keys for data integrity. Denormalization applied selectively only for read-heavy reporting views.",
                diagram: `[Users] 1 -- * [Orders] * -- 1 [Products]`
            },
            performance: [
                {
                    title: "Index Usage",
                    content: "Used EXPLAIN ANALYZE to identify full table scans. Added composite indexes on (status, created_at) for filtered sorting queries."
                }
            ],
            mistakes: [
                {
                    title: "Missing Indexes",
                    error: "Deployed to production without indexes on foreign keys.",
                    discovery: "JOIN performance degraded significantly as table size grew.",
                    fix: "Added indexes on all FK columns and frequently filtered fields.",
                    lesson: "Always index foreign keys and query predicates."
                }
            ]
        }
    },
    {
        id: "react",
        name: "React",
        icon: "⚛️",
        color: "#61dafb",
        brief: "Crafting interactive UIs with modern hooks, efficient state management, and reusable components.",
        sections: {
            codeSnippets: [
                {
                    title: "Custom Hook: useFetch",
                    problem: "Reusable logic for data fetching with loading states",
                    code: `const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};`,
                    why: "Encapsulates side-effects and state logic, keeping components clean."
                },
                {
                    title: "Performance: useMemo",
                    problem: "Prevent expensive calculations on every render",
                    code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
                    why: "Ensures the heavy computation only runs when dependencies 'a' or 'b' change."
                }
            ],
            architecture: {
                title: "Component Composition",
                content: "Build complex UIs from small, isolated, and reusable components. Using Context API for global state like themes or auth, avoiding deep prop drilling.",
                diagram: `[App] -> [AuthProvider] -> [Layout] -> [Dashboard]`
            },
            performance: [
                {
                    title: "Code Splitting",
                    content: "Used React.lazy and Suspense to load page-level components only when needed, reducing initial bundle size."
                },
                {
                    title: "Virtualization",
                    content: "Implemented React Window for rendering large lists, rendering only items currently in viewport."
                }
            ],
            mistakes: [
                {
                    title: "Prop Drilling",
                    error: "Passed data through 5 layers of components that didn't need it.",
                    discovery: "Refactoring intermediate components was a nightmare.",
                    fix: "Introduced Context API for shared state and Component Composition.",
                    lesson: "State should live as close to where it's needed as possible, or be global."
                }
            ]
        }
    },
    {
        id: "nodejs",
        name: "Node.js",
        icon: "🟩",
        color: "#339933",
        brief: "Scalable backend logic using event-driven, non-blocking I/O architecture.",
        sections: {
            codeSnippets: [
                {
                    title: "Event Emitter",
                    problem: "Decoupling system parts",
                    code: `const EventEmitter = require('events');
const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (order) => {
  sendEmail(order.user);
  updateInventory(order.items);
});

// Logic flow is not blocked by email sending
orderEmitter.emit('orderPlaced', newOrder);`,
                    why: "Asynchronous processing of side effects without blocking the main request."
                }
            ],
            architecture: {
                title: "Event Loop Awareness",
                content: "Designing around the single-threaded nature. Offloading CPU-intensive tasks (like image processing) to Worker Threads or separate microservices to keep the main loop free.",
                diagram: `[Request] -> [Event Loop] -> [Worker/DB callback] \n                     | \n                [Next Request]`
            },
            performance: [
                {
                    title: "Stream Processing",
                    content: "Used Streams instead of fs.readFile to process large CSV uploads. Reduced memory usage from 500MB+ to <50MB."
                }
            ],
            mistakes: [
                {
                    title: "Blocking the Event Loop",
                    error: "Ran a heavy synchronous cryptographic function on the main thread.",
                    discovery: "The entire API became unresponsive during the calculation.",
                    fix: "Switched to asynchronous versions and worker threads.",
                    lesson: "Never block the main thread in Node."
                }
            ]
        }
    },
    {
        id: "express",
        name: "Express.js",
        icon: "🚂",
        color: "#000000",
        brief: "Robust middleware chains and RESTful routing for web servers.",
        sections: {
            codeSnippets: [
                {
                    title: "Custom Middleware",
                    problem: "Request Logging",
                    code: `const requestLogger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
  next();
};

app.use(requestLogger);`,
                    why: "Applies cross-cutting concerns (logging, auth) uniformly across routes."
                }
            ],
            architecture: {
                title: "MVC Pattern",
                content: "Organized project into Routes (definitions), Controllers (request handling), and Services (business logic) to maintain clean code and testability.",
                diagram: `Request -> Router -> Middleware -> Controller -> Service`
            },
            performance: [
                {
                    title: "Production Best Practices",
                    content: "Implementation of Gzip compression (compression middleware) and helmet for security headers."
                }
            ],
            mistakes: [
                {
                    title: "Errors Swallowed",
                    error: "Forgot to call 'next(err)' in an async route handler.",
                    discovery: "Request hung indefinitely on error.",
                    fix: "Added a wrapper function to catch async errors and pass them to global error handler.",
                    lesson: "Always handle async errors explicitly in Express 4.x."
                }
            ]
        }
    },
    {
        id: "c",
        name: "C Programming",
        icon: "🇨",
        color: "#555555",
        brief: "Low-level system programming, memory management, and algorithm optimization.",
        sections: {
            codeSnippets: [
                {
                    title: "Pointer Manipulation",
                    problem: "Swapping values efficiently",
                    code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Usage
swap(&x, &y);`,
                    why: "Direct memory access for efficient data manipulation without copying."
                },
                {
                    title: "Memory Management",
                    problem: "Dynamic array allocation",
                    code: `int *arr = (int*)malloc(n * sizeof(int));
if (arr == NULL) {
    // Handle allocation failure
    exit(1);
}

// ... use arr ...

free(arr); // Important!`,
                    why: "Manual control over heap memory allows optimal resource usage."
                }
            ],
            architecture: {
                title: "Modular Design",
                content: "Separating Interface (.h files) from Implementation (.c files). Using Makefiles for incremental builds.",
                diagram: `main.c -> includes -> utils.h \n                         |\n            linked to -> utils.c`
            },
            performance: [
                {
                    title: "Stack vs Heap",
                    content: "Prioritize stack allocation for small variables (faster, auto-cleanup) and Heap only for large/dynamic structures."
                }
            ],
            mistakes: [
                {
                    title: "Memory Leak",
                    error: "Forgot to free a linked list node when deleting.",
                    discovery: "Program memory usage grew indefinitely over time.",
                    fix: "Implemented a helper function to recursively free nodes.",
                    lesson: "Every malloc must have a corresponding free."
                }
            ]
        }
    }
];
