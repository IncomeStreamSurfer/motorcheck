# MotorCheck - Vehicle History Check SaaS Platform

A comprehensive SaaS platform for vehicle history checks and automotive data services, built using Context Engineering principles for AI-assisted development.

## 🚗 About MotorCheck

MotorCheck provides instant access to comprehensive vehicle history data including:
- MOT history and test results
- Tax status and history
- Vehicle specifications and details
- Ownership history
- Mileage verification
- Outstanding finance checks
- Insurance write-off status
- Stolen vehicle checks

## 🏗️ Architecture Overview

MotorCheck is built with a modern, scalable architecture:

- **API-First Design**: RESTful APIs that can be consumed by web, mobile, and third-party applications
- **Microservices Ready**: Modular design allows easy scaling and service separation
- **High Performance**: Redis caching and async operations for fast response times
- **Secure**: Industry-standard authentication and GDPR compliance

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/IncomeStreamSurfer/motorcheck.git
cd motorcheck

# 2. Set up virtual environment
python -m venv venv_linux
source venv_linux/bin/activate  # On Windows: venv_linux\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configuration

# 5. Run database migrations
alembic upgrade head

# 6. Start the development server
uvicorn main:app --reload
```

## 📂 Project Structure

```
motorcheck/
├── api/              # API endpoints and routing
├── services/         # Business logic and external integrations
├── models/           # Database models and schemas
├── utils/            # Shared utilities and helpers
├── tasks/            # Background tasks and scheduled jobs
├── tests/            # Test suite
├── PRPs/             # Product Requirements Prompts
├── examples/         # Code examples and patterns
├── CLAUDE.md         # AI assistant rules and guidelines
├── PLANNING.md       # Project architecture and planning
└── TASK.md          # Task tracking and progress
```

## 🛠️ Technology Stack

- **Backend**: Python 3.11+, FastAPI
- **Database**: PostgreSQL, Redis
- **Queue**: Celery with Redis backend
- **Testing**: Pytest
- **Documentation**: OpenAPI/Swagger
- **Deployment**: Docker, Kubernetes-ready

## 🤖 Context Engineering

This project uses Context Engineering principles to enhance AI-assisted development:

1. **CLAUDE.md**: Contains project-specific rules and guidelines for AI assistants
2. **PRPs/**: Product Requirements Prompts for implementing features
3. **examples/**: Reference implementations and code patterns

### Using Context Engineering

```bash
# Generate a PRP for a new feature
/generate-prp INITIAL.md

# Execute the PRP to implement the feature
/execute-prp PRPs/feature-name.md
```

## 📚 API Documentation

Once the server is running, access the interactive API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## 🧪 Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=motorcheck

# Run specific test file
pytest tests/test_vehicle_api.py
```

## 🔒 Security

- All API endpoints require authentication
- API keys and sensitive data stored in environment variables
- Input validation and sanitization on all endpoints
- GDPR compliant data handling
- Regular security audits

## 📈 Performance

- Redis caching for frequently accessed data
- Async/await for I/O operations
- Pagination on all list endpoints
- Response time monitoring
- Horizontal scaling support

## 🤝 Contributing

1. Read `CLAUDE.md` for project guidelines
2. Check `TASK.md` for current tasks
3. Create a feature branch
4. Write tests for new features
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚀 Deployment

Deployment guides for various platforms:
- Docker: See `docker/README.md`
- Kubernetes: See `k8s/README.md`
- AWS: See `deploy/aws/README.md`

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@motorcheck.com
- Documentation: https://docs.motorcheck.com