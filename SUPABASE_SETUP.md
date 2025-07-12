# Supabase Setup Guide

This guide will help you set up Supabase to store and manage your portfolio projects with full CRUD operations and admin authentication.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Your Next.js project with Supabase client already configured

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter a project name (e.g., "portfolio-projects")
5. Enter a database password
6. Choose a region close to your users
7. Click "Create new project"

## Step 2: Get Your API Keys

1. In your Supabase dashboard, go to Settings → API
2. Copy your Project URL and anon/public key
3. Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_admin_password_here
```

**Important**: Choose a strong password for `NEXT_PUBLIC_ADMIN_PASSWORD` as this will protect your admin dashboard.

## Step 3: Set Up the Database

1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-setup.sql` from this project
3. Paste it into the SQL Editor and click "Run"
4. This will create:
   - The `projects` table with all necessary columns
   - Indexes for better performance
   - Row Level Security (RLS) policies
   - Sample data (optional)

## Step 4: Verify the Setup

1. Go to Table Editor in your Supabase dashboard
2. You should see a `projects` table with sample data
3. Test the connection by running your Next.js app

## Step 5: Access the Admin Dashboard

1. Start your Next.js development server: `npm run dev`
2. Navigate to `/admin` in your browser
3. You'll be prompted to enter the admin password
4. After successful authentication, you can:
   - View all projects
   - Add new projects
   - Edit existing projects
   - Delete projects
   - Toggle featured status

## Database Schema

The `projects` table has the following structure:

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  tech TEXT[] DEFAULT '{}',
  liveUrl TEXT,
  githubUrl TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Features

### Authentication
- **Password Protection**: Admin dashboard is protected with a password
- **Session Management**: Login state persists until logout
- **Secure Logout**: Clear authentication on logout

### CRUD Operations
- **Create**: Add new projects through the admin form
- **Read**: Display projects on your portfolio pages
- **Update**: Edit project details and toggle featured status
- **Delete**: Remove projects with confirmation dialog

### Additional Features
- **Featured Projects**: Toggle which projects appear on the homepage
- **Technology Tags**: Add/remove technology tags for each project
- **Image URLs**: Store project preview images
- **Live Demo & GitHub Links**: Store external links
- **Automatic Timestamps**: Created and updated timestamps are managed automatically
- **Toast Notifications**: User feedback for all operations
- **Loading States**: Smooth user experience during operations

## Security Considerations

### Current Implementation
- Simple password-based authentication
- Client-side session management
- No server-side validation

### For Production Use
1. **Supabase Auth**: Implement proper user authentication with Supabase Auth
2. **Row Level Security**: Modify RLS policies to restrict access based on user roles
3. **Server-Side Validation**: Add API routes with proper validation
4. **Environment Variables**: Use server-side environment variables for sensitive data
5. **Rate Limiting**: Add rate limiting to prevent abuse

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check that your environment variables are correctly set
   - Restart your development server after changing environment variables

2. **"Table does not exist" error**
   - Make sure you ran the SQL setup script
   - Check that the table name matches exactly: `projects`

3. **"Permission denied" error**
   - Check your RLS policies in Supabase
   - Ensure your API key has the correct permissions

4. **Projects not loading**
   - Check the browser console for errors
   - Verify your Supabase connection in the Network tab
   - Check that your environment variables are accessible in the browser

5. **Edit button not working**
   - Make sure you're using the latest version of the admin dashboard
   - Check the browser console for JavaScript errors
   - Verify that the Dialog component is properly configured

6. **Authentication issues**
   - Check that `NEXT_PUBLIC_ADMIN_PASSWORD` is set correctly
   - Clear browser localStorage if needed
   - Restart the development server

### Getting Help

- Check the [Supabase documentation](https://supabase.com/docs)
- Review the [Supabase JavaScript client docs](https://supabase.com/docs/reference/javascript)
- Check the browser console and network tab for detailed error messages

## Next Steps

Once you have the basic setup working, you might want to:

1. **Enhanced Authentication**: Implement Supabase Auth with email/password or OAuth
2. **Image Upload**: Use Supabase Storage for project images
3. **Categories/Tags**: Add project categories or additional tags
4. **Search & Filter**: Add search and filtering capabilities
5. **Analytics**: Track project views and interactions
6. **Backup & Recovery**: Set up automated database backups
7. **API Rate Limiting**: Implement rate limiting for production use

## File Structure

```
├── lib/
│   ├── supabase.js          # Supabase client configuration
│   ├── projects.js          # CRUD operations for projects
│   └── auth.js              # Authentication utilities
├── hooks/
│   └── use-projects.js      # React hook for project management
├── components/
│   ├── admin-dashboard.jsx  # Main admin interface
│   ├── admin-login.jsx      # Login form
│   ├── protected-admin.jsx  # Authentication wrapper
│   ├── project-form.jsx     # Add/edit project form
│   ├── featured-projects.jsx # Homepage featured projects
│   └── projects-grid.jsx    # All projects display
├── app/
│   └── admin/
│       └── page.jsx         # Admin page route
├── supabase-setup.sql       # Database setup script
└── SUPABASE_SETUP.md        # This setup guide
``` 