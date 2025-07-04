### 🚗 MotorCheck Project Rules

### 🛑 CRITICAL CLIENT APPROVAL CHECKPOINT

**STOP! DO NOT PROCEED BEYOND TEST PAGES WITHOUT CONFIRMATION**

Before implementing ANY features beyond the initial test pages (homepage and dashboard), you MUST:
1. Ask: "ARE YOU HAPPY WITH THE TEST, HAS THE CLIENT APPROVED THE PROJECT?"
2. Wait for explicit confirmation from the user
3. Only proceed with full development if client approval is confirmed

**Current Status: TEST/DEMO PHASE ONLY**
- ✅ Allowed: Homepage test page
- ✅ Allowed: Dashboard test page  
- ❌ Prohibited: Any other features or pages
- ❌ Prohibited: Production deployment
- ❌ Prohibited: Payment integration
- ❌ Prohibited: Live API connections
- ❌ Prohibited: Real vehicle data implementation

---

#### 🔄 Project Awareness & Context
- **Project Purpose**: MotorCheck is a SaaS platform providing vehicle history checks and automotive data services - "The Stripe of vehicle data"
- **Current Phase**: CLIENT DEMO ONLY - Two test pages maximum
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn't listed, add it with a brief description and today's date.
- **Check `DEMO_STATUS.md`** to understand current demo progress and limitations.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.

#### 🎨 Design Integration & Figma MCP
- **Use Figma MCP** to pull in specific designs from Figma files
- **Convert Figma designs to theme files** before implementing any UI
- **Design tokens workflow**:
  1. Import designs via Figma MCP
  2. Extract design tokens (colors, typography, spacing)
  3. Generate `theme.css` from design tokens
  4. Use theme variables consistently across all pages
- **Never hardcode design values** - always use theme variables
- **Maintain design consistency** between Figma and implementation

#### 🔐 Security & Data Protection
- **Never store API keys, credentials, or sensitive data in code** - always use environment variables
- **Implement proper authentication and authorization** for all API endpoints
- **Sanitize and validate all user inputs** to prevent injection attacks
- **Follow GDPR compliance** for handling personal and vehicle data
- **Use HTTPS for all external API calls** and secure communication channels
- **Follow OWASP security guidelines**

#### 🏗️ Architecture Guidelines
- **Technology Stack** (as per SOW):
  - Frontend: HTML5, CSS3, JavaScript (ES6+) - No framework dependencies
  - Backend: Node.js with Express.js
  - Database: PostgreSQL with Redis caching
  - Infrastructure: AWS/DigitalOcean
  - Third-party: Supabase (auth), Stripe (payments), Resend (email)
- **API-First Design**: Build all features as RESTful APIs that can be consumed by multiple clients
- **Developer Experience Focus**: Prioritize instant activation, transparent pricing, interactive docs
- **Performance Requirements**:
  - API response time: < 200ms
  - Dashboard load time: < 2 seconds
  - 99.9% uptime SLA

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Project structure for demo phase**:
  ```
  src/
  ├── pages/        # HTML pages (homepage, dashboard only for demo)
  ├── css/          # Stylesheets including theme.css from Figma
  ├── js/           # JavaScript files
  ├── assets/       # Images and static files
  └── figma/        # Design tokens and Figma exports
  ```
- **Full project structure** (after client approval):
  ```
  api/              # API endpoints and routing
  services/         # Business logic and external integrations
  models/           # Database models and schemas
  utils/            # Shared utilities and helpers
  tasks/            # Background tasks and scheduled jobs
  ```

### 🧪 Testing & Reliability
- **For demo phase**: Focus on visual testing and browser compatibility
- **After client approval**:
  - Always create tests for new features
  - Mock all external API calls in tests
  - Include rate limiting test scenarios
  - Maintain test coverage above 80%

### ✅ Task Completion
- **Mark completed tasks in `TASK.md`** immediately after finishing them.
- **Update `DEMO_STATUS.md`** after completing each demo page.
- **Stop at demo checkpoint** and await client approval before proceeding.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a "Discovered During Work" section.

### 📎 Style & Conventions
- **Frontend (Demo Phase)**:
  - Use semantic HTML5
  - CSS with Sass preprocessing
  - Vanilla JavaScript (ES6+)
  - Mobile-first responsive design
  - Follow Figma design system exactly
- **Backend (After Approval)**:
  - Node.js with Express.js
  - Follow Airbnb JavaScript style guide
  - Use ESLint and Prettier
  - Implement proper error handling

### 📚 Documentation & Explainability
- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Maintain `DEMO_STATUS.md`** during demo phase with current progress.
- **Document Figma-to-code process** for design handoff.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `// Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Always check demo phase restrictions** before implementing features.
- **Respect the client approval checkpoint** - do not proceed beyond test pages.
- **Never hallucinate libraries or functions** – only use known, verified packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.
- **Never delete or overwrite existing code** unless explicitly instructed to or if part of a task from `TASK.md`.

### 🚀 Performance & Scalability
- **Demo Phase**: Focus on fast loading and smooth interactions
- **After Approval**:
  - Cache frequently accessed data using Redis
  - Implement pagination for all list endpoints
  - Use async/await for I/O operations
  - Monitor API response times
  - Design for horizontal scaling

### 🎯 Key Success Metrics
- **Developer Experience**: 5-minute setup (vs competitors' 2-3 weeks)
- **API Performance**: < 200ms response time
- **Conversion**: Transparent pricing to drive 3x higher conversion
- **Documentation**: Interactive docs to reduce support tickets by 50%

### 📈 SEO & Marketing Guidelines
- **SEO-First Development**: Every page optimized for search
- **Target Keywords**: Vehicle API, MOT check API, car valuation API, etc.
- **Content Strategy**: Developer guides, API documentation, comparison pages
- **Performance**: Core Web Vitals optimization for SEO ranking