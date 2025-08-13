# Technology Stack

## Frontend
- **React 19.1.1** with TypeScript
- **Vite** as build tool and dev server
- **Clerk** for authentication (@clerk/clerk-react)
- **Convex React Client** for real-time data synchronization

## Backend
- **Convex** - serverless backend with real-time capabilities
- **Clerk JWT** authentication integration

## Development Tools
- **TypeScript 5.8.3** with strict configuration
- **ESLint** with React and TypeScript rules
- **Vite** for fast development and HMR

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Convex Backend
```bash
npx convex dev       # Start Convex development server
npx convex deploy    # Deploy to production
```

## Environment Variables
- `VITE_CONVEX_URL` - Convex deployment URL
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication key
- `CLERK_JWT_ISSUER_DOMAIN` - Clerk JWT issuer for Convex integration