# Finple API

Financial API for couples developed with NestJS.

## 🚀 Technologies

- **NestJS** - Node.js framework
- **TypeScript** - Programming language
- **Biome** - Code linter and formatter
- **Jest** - Testing framework
- **pnpm** - Package manager

## 📋 Prerequisites

- Node.js 20.18.0 (gerenciado pelo nvm)
- pnpm

## 🔧 Installation

1. Clone the repository
2. Use the correct Node.js version:
   ```bash
   nvm use
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## 🎯 Available Scripts

```bash
# Development
pnpm start:dev          # Start server in development mode with watch
pnpm start:debug        # Start server in debug mode

# Build and production
pnpm build              # Build the project
pnpm start:prod         # Start server in production mode

# Testing
pnpm test               # Run unit tests
pnpm test:watch         # Run tests in watch mode
pnpm test:cov           # Run tests with coverage
pnpm test:e2e           # Run end-to-end tests

# Linting and formatting
pnpm lint               # Check code with Biome
pnpm lint:fix           # Automatically fix Biome issues
pnpm format             # Format code with Biome
```

## 📁 Project Structure

```
src/
├── app.controller.ts   # Main controller
├── app.module.ts       # Main module
├── app.service.ts      # Main service
├── main.ts            # Application entry point
└── ...

test/
├── app.e2e-spec.ts    # End-to-end tests
└── jest-e2e.json      # Jest configuration for e2e
```

## 🌐 Endpoints

- `GET /api` - Welcome message
- `GET /api/health` - Application health status

## 🔧 Configuration

The project is configured to run on port 3001 by default. You can change this by setting the `PORT` environment variable.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the ISC license.
