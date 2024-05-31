# React Quiz Application

This is a React quiz application that fetches quiz questions from a JSON server. The application uses Vite for development and build processes.

## Features

- Interactive quiz with multiple-choice questions
- Fetches quiz questions from a JSON server
- Environment-specific configurations

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. **Clone the repository:**

```
git clone https://github.com/hisbanbardai/react-quiz-app.git
cd react-quiz-app
```

2. **Install dependencies**

```
npm install
```

### Environment Variables

1. **Create environment variable files:**

   Copy the .env.example file to create .env.development and .env.production files.

2. **Edit the environment variable files:**

- .env.development

```
VITE_API_URL=http://localhost:9001/api
```

- .env.production

```
VITE_API_URL=https://your-production-url.com/api
```

### Running the application

1. **Start the JSON server and the development server concurrently:**

```
npm run dev
```

## Deployment

To deploy the application, make sure to set the correct API URL in the .env.production file and build the project for production:

1. **Build the application:**

```
npm run build
```

2. **Deploy the dist directory to your preferred hosting provider.**

## Live Demo

You can access the live demo of the application [here](https://react-knowledge-quiz.netlify.app){:target="\_blank"}.
