### 🚗 MotorCheck Project Rules

#### 🔄 Project Awareness & Context
- **Project Purpose**: MotorCheck is a SaaS platform providing vehicle history checks and automotive data services
- **Always read `PLANNING.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Check `TASK.md`** before starting a new task. If the task isn't listed, add it with a brief description and today's date.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `PLANNING.md`.
- **Use venv_linux** (the virtual environment) whenever executing Python commands, including for unit tests.

#### 🔐 Security & Data Protection
- **Never store API keys, credentials, or sensitive data in code** - always use environment variables
- **Implement proper authentication and authorization** for all API endpoints
- **Sanitize and validate all user inputs** to prevent injection attacks
- **Follow GDPR compliance** for handling personal and vehicle data
- **Use HTTPS for all external API calls** and secure communication channels

#### 🏗️ Architecture Guidelines
- **API-First Design**: Build all features as RESTful APIs that can be consumed by multiple clients
- **Microservices Ready**: Structure code to be easily split into microservices as the platform scales
- **Database Design**: Use PostgreSQL for relational data, Redis for caching
- **Queue Management**: Use Celery with Redis for background tasks and API rate limiting

### 🧱 Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility:
  - `api/` - API endpoints and routing
  - `services/` - Business logic and external service integrations
  - `models/` - Database models and schemas
  - `utils/` - Shared utilities and helpers
  - `tasks/` - Background tasks and scheduled jobs
- **Use clear, consistent imports** (prefer relative imports within packages).
- **Use python_dotenv and load_env()** for environment variables.

### 🧪 Testing & Reliability
- **Always create Pytest unit tests for new features** (functions, classes, routes, etc).
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in a `/tests` folder** mirroring the main app structure.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case
    - 1 test for API rate limiting scenarios
- **Mock all external API calls** in tests to ensure reliability and speed

### ✅ Task Completion
- **Mark completed tasks in `TASK.md`** immediately after finishing them.
- Add new sub-tasks or TODOs discovered during development to `TASK.md` under a "Discovered During Work" section.
- **Update API documentation** when adding or modifying endpoints

### 📎 Style & Conventions
- **Use Python** as the primary language (Python 3.11+).
- **Follow PEP8**, use type hints, and format with `black`.
- **Use `pydantic` for data validation** and API request/response models.
- Use `FastAPI` for APIs and `SQLAlchemy` or `SQLModel` for ORM.
- Write **docstrings for every function** using the Google style:
  ```python
  def check_vehicle_history(registration: str) -> VehicleHistory:
      """
      Retrieve comprehensive vehicle history data.

      Args:
          registration (str): Vehicle registration number.

      Returns:
          VehicleHistory: Complete vehicle history including MOT, tax, and ownership.
      
      Raises:
          VehicleNotFoundError: If vehicle registration is not found.
      """
  ```

### 📚 Documentation & Explainability
- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Maintain API documentation** using FastAPI's automatic OpenAPI/Swagger generation
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `# Reason:` comment** explaining the why, not just the what.
- **Document all external API integrations** including rate limits, authentication methods, and response formats

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified Python packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.
- **Never delete or overwrite existing code** unless explicitly instructed to or if part of a task from `TASK.md`.
- **Consider API rate limits and costs** when designing features that call external services

### 🚀 Performance & Scalability
- **Cache frequently accessed data** using Redis with appropriate TTLs
- **Implement pagination** for all list endpoints
- **Use async/await** for I/O-bound operations
- **Monitor and log API response times** for performance tracking
- **Design for horizontal scaling** from day one