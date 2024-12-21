# Starling Academy Website

Starling Academy is a modern, responsive website built to showcase educational courses and extracuricullar activities, provide information about the institution, and allow users to enroll in classes. This project leverages React.js and Tailwind CSS for an intuitive and dynamic user interface.

## Features

- **Responsive Navbar**:

  - A fixed navigation bar that remains in view while scrolling.
  - Includes a mobile-friendly hamburger menu for smaller screens.
  - Prominent "Enroll Now" button.

- **Course Listings**:
  - Displays categorized course offerings.
  - Search and filter functionality to help users find relevant courses.
- **APIs and Fetching**:

  - Dynamically fetches course data from a remote API.
  - Implements filtering for course data using keywords or categories.

- **Responsive Design**:

  - Fully responsive layout that adjusts seamlessly to various screen sizes.
  - Built with Tailwind CSS for streamlined and modern styling.

- **Routing**:
  - Uses `react-router-dom` for seamless navigation between pages.

## Technologies Used

- **Frontend**:

  - React.js
  - Tailwind CSS
  - JavaScript (ES6+)

- **Development Tools**:
  - Vercel for deployment
  - GitHub for version control

## Installation

### Prerequisites

- Node.js installed on my local machine (Laptop).
- Git for version control.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Fabherbie/Final-Project
   ```

2. Navigate to the project directory:

   ```bash
   cd starling-academy
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000/`.

## Deployment

### To Vercel

1. I push  my code to a GitHub repository.
2. Login to [Vercel](https://vercel.com/).
3. Import the repository and follow the deployment steps.
4. My application is live at my Vercel URL (https://final-project-chi-two.vercel.app/).

### To GitHub

1. Initialized a Git repository 

   ```bash
   git init
   ```

2. Added files and commit:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. Added your remote repository:

   ```bash
   git remote add origin <repository_url>
   ```

4. Pushed to GitHub:
   ```bash
   git push -u origin master
   ```

## File Structure

```
starling-academy/
├── src/
│   ├── assets/
│   │   ├── images
│   │   └── videos
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   ├── courses.json
│   │   ├── features.json
│   │   ├── teamMember.json
│   │   └── values.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── .gitignore
├── package-lock.json
├── package.json
└── postcss.config.js
└── README.md
└── tailwind.config.js
```

## How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
