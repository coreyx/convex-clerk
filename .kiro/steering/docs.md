---
inclusion: always
---

# Documentation and Reference Guidelines

## Primary Documentation Sources

When working with this codebase, reference these official documentation sources for accurate implementation patterns:

- **Convex**: https://docs.convex.dev/ - Core backend functionality, queries, mutations, schema design
- **Convex Stack**: https://stack.convex.dev/ - Best practices, tutorials, and advanced patterns
- **Clerk**: https://clerk.com/docs - Authentication flows, user management, JWT integration

## Documentation Usage Rules

1. **Always fetch current documentation** when implementing new features or debugging issues
2. **Prioritize official docs** over Stack Overflow or third-party sources for these core technologies
3. **Check version compatibility** - ensure examples match the versions in package.json
4. **Reference integration guides** specifically for Clerk + Convex when working with authentication

## Key Documentation Sections to Reference

### Convex
- Database schema and validators
- Query and mutation patterns
- Authentication integration
- Real-time subscriptions
- File storage and actions

### Clerk
- React integration patterns
- JWT configuration for backend services
- User session management
- Protected routes and components

## Implementation Standards

- Follow the exact patterns shown in official documentation
- Use TypeScript types provided by both libraries
- Implement error handling as demonstrated in docs
- Maintain consistency with documented best practices