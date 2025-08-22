# Firebase Cloud Functions Template

A TypeScript-based template for Firebase Cloud Functions with ESLint 9 (flat config) and modern development tools.

## Features

- ⚡ **TypeScript** - Full TypeScript support with strict configuration
- 🛡️ **ESLint 9** - Modern flat config with TypeScript rules
- 🎨 **Prettier** - Code formatting with ESLint integration
- 🔥 **Firebase Functions** - Ready-to-use Firebase Cloud Functions setup
- 📦 **Modern Node.js** - Built for Node.js 22+
- 🚀 **Development Tools** - Hot reload, linting, and build optimization

## Prerequisites

- Node.js 22 or higher
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase project setup

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build the project:**

   ```bash
   npm run build
   ```

3. **Run locally with Firebase emulator:**

   ```bash
   npm run serve
   ```

4. **Deploy to Firebase:**
   ```bash
   npm run deploy
   ```

## Available Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run build` - Build the TypeScript code
- `npm run build:watch` - Build in watch mode for development
- `npm run serve` - Start Firebase emulator with functions
- `npm run deploy` - Deploy functions to Firebase
- `npm run clean` - Clean build artifacts

## Project Structure

```
├── src/
│   └── index.ts          # Main functions entry point
├── dist/                  # Compiled JavaScript (generated)
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint 9 flat config
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Example Functions

The template includes three example functions:

1. **HTTP Function** (`helloWorld`) - Simple HTTP endpoint
2. **Callable Function** (`getUserData`) - Secure callable function with authentication
3. **Firestore Trigger** (`onUserCreated`) - Database trigger example

## Configuration

### TypeScript

The `tsconfig.json` is configured with strict settings optimized for Firebase Functions:

- Target: ES2020
- Module: CommonJS
- Strict mode enabled
- Source maps for debugging
- Declaration files generation

### ESLint

ESLint 9 flat config includes:

- TypeScript-specific rules
- Import ordering and validation
- Promise best practices
- Node.js compatibility
- Firebase Functions best practices
- Prettier integration (conflict prevention)

### Prettier

Prettier configuration includes:

- Single quotes for strings
- No semicolons
- 2-space indentation
- 80 character line width
- Trailing commas for cleaner diffs
- Automatic formatting on save (when configured in your editor)

## Development Workflow

1. Write your functions in `src/index.ts` or create separate modules
2. Use `npm run format` to format your code
3. Use `npm run lint` to check code quality
4. Use `npm run build:watch` during development for automatic compilation
5. Test locally with `npm run serve`
6. Deploy with `npm run deploy`

## Adding New Functions

1. Create your function in `src/index.ts` or a separate file
2. Export it from the main index file
3. Follow the TypeScript and ESLint rules
4. Test locally before deploying

## Environment Variables

For local development, create a `.env` file in the root directory:

```env
# Add your environment variables here
```

## Contributing

1. Follow the ESLint rules
2. Write TypeScript with strict mode
3. Add tests for new functions
4. Update documentation as needed

## License

This template is open source and available under the MIT License.
