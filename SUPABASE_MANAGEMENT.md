# Managing Projects in Supabase

Since you've removed the admin interface, you'll manage your projects directly in the Supabase dashboard. Here's how to set up and manage your projects.

## 🗄️ **Database Setup**

### **Step 1: Create the Projects Table**

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the following SQL:

```sql
-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for public read access)
CREATE POLICY "Allow all operations" ON projects
  FOR ALL USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

4. Click **"Run"** to execute the script

### **Step 2: Add Sample Data (Optional)**

```sql
-- Insert sample projects
INSERT INTO projects (title, description, image, tech, liveUrl, githubUrl, featured) VALUES
(
  'E-Commerce Platform',
  'Modern e-commerce website with payment integration, inventory management, and admin dashboard built with Next.js and Stripe.',
  'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
  'https://example.com',
  'https://github.com/example/ecommerce',
  true
),
(
  'Restaurant Website',
  'Beautiful restaurant website with online ordering system, reservation management, and menu showcase.',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  'https://example.com',
  'https://github.com/example/restaurant',
  true
),
(
  'SaaS Dashboard',
  'Comprehensive dashboard for SaaS application with analytics, user management, and real-time data visualization.',
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'PostgreSQL'],
  'https://example.com',
  'https://github.com/example/saas-dashboard',
  true
);
```

## 📝 **Managing Projects**

### **Adding a New Project**

1. Go to **Table Editor** in your Supabase dashboard
2. Click on the **projects** table
3. Click **"Insert row"**
4. Fill in the fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | Text | ✅ | Project title |
| `description` | Text | ✅ | Project description |
| `image` | Text | ✅ | Image URL |
| `tech` | Array | ❌ | Array of technologies (e.g., `["React", "Next.js"]`) |
| `liveUrl` | Text | ❌ | Live demo URL |
| `githubUrl` | Text | ❌ | GitHub repository URL |
| `featured` | Boolean | ❌ | Whether to show on homepage (true/false) |

5. Click **"Save"**

### **Editing a Project**

1. In the **Table Editor**, find the project you want to edit
2. Click on the row to edit it inline
3. Make your changes
4. Click **"Save"**

### **Deleting a Project**

1. In the **Table Editor**, find the project you want to delete
2. Click the **trash icon** next to the row
3. Confirm the deletion

### **Marking Projects as Featured**

1. Edit a project in the **Table Editor**
2. Set the `featured` field to `true`
3. Save the changes
4. The project will now appear on your homepage

## 🖼️ **Image Management**

### **Using External Image URLs**

You can use any image URL for your projects:

- **Pexels**: `https://images.pexels.com/photos/...`
- **Unsplash**: `https://images.unsplash.com/...`
- **Your own images**: Upload to a service like Cloudinary or AWS S3

### **Recommended Image Size**

- **Width**: 800px minimum
- **Height**: 600px minimum
- **Format**: JPG or PNG
- **Aspect Ratio**: 4:3 or 16:9 works best

## 🔧 **Environment Variables**

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 **Database Schema**

Your projects table has this structure:

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

## 🎯 **Tips for Better Management**

### **1. Use Consistent Naming**
- Keep project titles concise and descriptive
- Use consistent formatting for descriptions

### **2. Technology Tags**
- Use common technology names (React, Next.js, TypeScript)
- Keep the array format: `["React", "Next.js", "Tailwind CSS"]`

### **3. Featured Projects**
- Only mark your best projects as featured
- Featured projects appear on the homepage
- Keep 3-6 featured projects for optimal display

### **4. URLs**
- Always use full URLs (https://...)
- Test your live demo and GitHub links
- Use `null` or leave empty for missing URLs

### **5. Images**
- Use high-quality, relevant images
- Ensure images load quickly
- Use consistent aspect ratios

## 🔍 **Troubleshooting**

### **Projects Not Loading**
1. Check your environment variables
2. Verify the table exists in Supabase
3. Check browser console for errors
4. Ensure RLS policies are set correctly

### **Images Not Displaying**
1. Verify the image URL is accessible
2. Check if the URL requires authentication
3. Try a different image hosting service

### **Featured Projects Not Showing**
1. Check that `featured` is set to `true`
2. Verify the query is working in Supabase
3. Check browser console for errors

## 🚀 **Next Steps**

Once you have your projects set up:

1. **Test your portfolio** - Make sure everything displays correctly
2. **Add your real projects** - Replace sample data with your actual work
3. **Optimize images** - Ensure fast loading times
4. **Update regularly** - Keep your portfolio current with new projects

Your portfolio will now automatically display projects from Supabase, and you can manage them directly in the Supabase dashboard! 