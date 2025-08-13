# Project Structure

## Root Directory
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript project references
- `eslint.config.js` - ESLint configuration
- `.env.local` - Environment variables (not committed)

## Source Code (`src/`)
- `main.tsx` - Application entry point with providers setup
- `App.tsx` - Main application component with authentication flow
- `index.css` - Global styles
- `assets/` - Static assets (images, icons)

## Convex Backend (`convex/`)
- `schema.ts` - Database schema definitions
- `auth.config.ts` - Clerk authentication configuration
- `tasks.ts` - Task-related queries and mutations
- `messages.ts` - Message-related queries and mutations
- `_generated/` - Auto-generated Convex types and API

## Configuration Files
- `tsconfig.app.json` - TypeScript config for app code
- `tsconfig.node.json` - TypeScript config for build tools

## Architecture Patterns

### Authentication Flow
- Clerk handles user authentication
- `ConvexProviderWithClerk` integrates auth with Convex
- Use `Authenticated`, `Unauthenticated`, `AuthLoading` components for conditional rendering

### Data Access
- Convex queries use `useQuery` hook for real-time data
- All database operations go through Convex functions
- User-specific data filtered by authenticated identity

### Component Structure
- Main App component handles authentication states
- Separate Content component for authenticated functionality
- Clean separation between auth and business logic