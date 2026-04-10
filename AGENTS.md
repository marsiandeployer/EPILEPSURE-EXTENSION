# AI Agent Guidelines

Every commit MUST include a "How to test" section in the body:

## Commit messages
- Live URL to open and verify the change
- Step-by-step what to click/check
- Test credentials if login is required
- Expected result for each step

Example:
  feat: Add user registration form

  How to test:
  - Open https://myapp.vercel.app/register
  - Fill in email/password, submit
  - Check that confirmation email arrives
  - Expected: User is redirected to dashboard
