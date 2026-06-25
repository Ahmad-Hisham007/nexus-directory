# Next Login Page

A modern, full-stack authentication template built with Next.js, TypeScript, MongoDB, and NextAuth.js. This project provides a complete user authentication system with both traditional email/password login and OAuth integration (Google, GitHub, LinkedIn).

## Features

- **User Authentication**: Secure login and registration with email/password
- **OAuth Integration**: Social login with Google, GitHub, and LinkedIn
- **Dashboard**: Protected dashboard with sidebar navigation
- **User Management**: User profiles, roles, and session management
- **Responsive Design**: Mobile-first design using Tailwind CSS and DaisyUI
- **Type Safety**: Full TypeScript support
- **Database**: MongoDB with Mongoose ODM
- **Form Handling**: React Hook Form with validation
- **Notifications**: React Hot Toast for user feedback
- **Modern UI**: Clean, professional interface with dark theme support

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: NextAuth.js v5
- **Database**: MongoDB, Mongoose
- **Forms**: React Hook Form
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Password Hashing**: bcryptjs

## Project Structure

```
next-login-page/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts    # NextAuth.js API route
│   │   ├── register/route.ts              # User registration API
│   │   └── test-db/route.ts               # Database connection test
│   ├── dashboard/
│   │   ├── _components/                   # Dashboard components
│   │   ├── posts/                         # Posts management pages
│   │   ├── profile/                       # User profile page
│   │   ├── settings/                      # Settings page
│   │   └── page.tsx                       # Dashboard home
│   ├── login/
│   │   ├── _components/                   # Login/signup components
│   │   └── page.tsx                       # Login page
│   ├── globals.css                        # Global styles
│   ├── layout.tsx                         # Root layout
│   └── page.tsx                           # Home page
├── lib/
│   └── dbConnect.ts                       # Database connection utility
├── models/
│   ├── User.ts                            # User model
│   ├── Account.ts                         # NextAuth Account model
│   └── Session.ts                         # NextAuth Session model
├── Components/                            # Shared components
├── auth.config.ts                         # NextAuth configuration
├── auth.ts                                # NextAuth setup
└── package.json
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ahmad-Hisham007/next-login-page.git
   cd next-login-page
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/next-login-page

   # NextAuth.js
   AUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # OAuth Providers
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   LINKEDIN_CLIENT_ID=your-linkedin-client-id
   LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
   ```

   **Note**: For production, use a secure random string for `AUTH_SECRET`. You can generate one using:

   ```bash
   openssl rand -base64 32
   ```

4. **Set up MongoDB**:

   Make sure MongoDB is running locally or use a cloud service like MongoDB Atlas. Update the `MONGODB_URI` accordingly.

5. **Configure OAuth Apps**:
   - **Google**: Create a project in [Google Cloud Console](https://console.cloud.google.com/), enable Google+ API, and create OAuth 2.0 credentials.
   - **GitHub**: Go to [GitHub Developer Settings](https://github.com/settings/developers), create a new OAuth App.
   - **LinkedIn**: Create an app in [LinkedIn Developer Network](https://developer.linkedin.com/).

   Set the redirect URIs to: `http://localhost:3000/api/auth/callback/[provider]`

## Usage

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:3000`

3. **Register/Login**:
   - Visit `/login` to create a new account or sign in
   - Use email/password or social login options
   - After successful authentication, you'll be redirected to the dashboard

4. **Dashboard Features**:
   - **Posts**: Manage your posts and categories
   - **Profile**: View and edit your profile information
   - **Settings**: Configure your account settings

## API Endpoints

### Authentication

- `POST /api/auth/[...nextauth]` - NextAuth.js authentication routes
- `POST /api/register` - User registration

### Database

- `GET /api/test-db` - Test database connection

## User Model

```typescript
{
  name: string;
  phoneNumber: number;
  email: string; // unique, required
  emailVerified: Date | null;
  image: string;
  password: string; // hashed, not selected by default
  role: string; // default: "user"
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Make sure to set all environment variables and ensure MongoDB connectivity.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## Support

If you found this template helpful, please consider:

- Starring the repository
- Sharing it with others
- Checking out my portfolio: [LinkedIn](https://www.linkedin.com/in/ahmad-hisham007) | [Fiverr](https://www.fiverr.com/s/GzRj290)

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Component library for Tailwind CSS
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- [React Hook Form](https://react-hook-form.com/) - Form handling library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Hot Toast](https://react-hot-toast.com/) - Notification library
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing library
