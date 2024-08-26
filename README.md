<h1>Netflix Clone</h1>
<img-"<img width="959" alt="Netflix Clone" src="https://github.com/user-attachments/assets/66474ad6-d9d1-4468-955c-cfa37d009a55">
"> 

This is a Netflix clone application built using modern web technologies. The project aims to replicate the core features of Netflix, such as user authentication, movie/TV show browsing, and video streaming, with a clean and responsive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication:** Sign up, login, and logout functionality.
- **Responsive Design:** Fully responsive design compatible with different devices.
- **Movie/TV Show Browsing:** Browse movies and TV shows with search and filter capabilities.
- **Video Streaming:** Watch movies and TV shows directly within the app.
- **Favorites:** Add movies/TV shows to your favorites list.
- **User Profile:** Manage your account and preferences.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Vite
- **Backend:**
  - Supabase (for user authentication and database management)
- **Other Tools:**
  - ESLint (for code linting)
  - GitHub (for version control and repository hosting)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)
- [Vite](https://vitejs.dev/) (optional but recommended)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dmoore9131/NETFLIX-CLONE.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd NETFLIX-CLONE
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Supabase:**

   - Sign up for a Supabase account if you don’t have one.
   - Create a new project in Supabase.
   - Add your Supabase project URL and API keys to the `.env` file (create one if it doesn't exist):

   ```bash
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Running the Project Locally

1. **Start the Development Server:**

   ```bash
   npm run dev
   ```

2. **Open the App:**

   Open your browser and navigate to `http://localhost:3000` to see the Netflix Clone in action.

## Project Structure

Here's an overview of the project structure:

```plaintext
├── public/             # Public assets like images, icons
├── src/                # Main source code for the app
│   ├── components/     # Reusable components
│   ├── pages/          # Application pages (Home, Profile, etc.)
│   ├── services/       # Services like API calls
│   ├── styles/         # Global styles (Tailwind CSS)
│   ├── utils/          # Utility functions
│   └── App.js          # Main App component
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Files and directories to ignore in Git
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration file
└── README.md           # Project documentation (this file)
```

## Usage

### User Authentication

1. **Sign Up:**
   - Click on the "Sign Up" button on the home page.
   - Enter your email and password to create a new account.

2. **Login:**
   - Enter your credentials to log in.

3. **Logout:**
   - Click on the "Logout" button to sign out of your account.

### Browsing Movies/TV Shows

- Use the search bar to find specific movies or TV shows.
- Use filters to sort content by genre, release date, etc.

### Adding to Favorites

- Click the "Add to Favorites" button on any movie/TV show to save it to your list.

## Deployment

To deploy the project, you can use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Here's how to deploy on Vercel:

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

   Follow the prompts to complete the deployment.

## Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

