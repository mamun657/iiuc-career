# 🚀 NextCareer — AI-Powered Career Companion

### Empowering Youth Through AI-Driven Career Guidance | UN SDG 8

NextCareer is a full-stack AI-powered career guidance platform designed to help students, fresh graduates, and job seekers explore career opportunities, identify skill gaps, discover relevant learning resources, and build actionable career roadmaps.

By combining intelligent career assistance, skill-based job matching, and personalized learning guidance, NextCareer aims to make career planning more accessible, structured, and practical.

The platform integrates **Gemma LLM through Ollama** to provide AI-powered career conversations, helping users explore career options, understand skill requirements, and prepare for professional opportunities.

## 🌍 Alignment with UN Sustainable Development Goal 8

NextCareer supports **UN SDG 8: Decent Work and Economic Growth** by helping users improve their employability, develop relevant skills, and make informed career decisions.

The platform focuses on:
- Improving access to career guidance.
- Supporting skills development and lifelong learning.
- Helping users identify relevant job opportunities.
- Encouraging informed career planning.
- Promoting better preparation for internships and employment.

## 🌐 Live Demo

**Live Application:** https://nextcareer-w6qe.onrender.com/

## ✨ Key Features

### 🔐 Authentication and User Sessions
- JWT-based registration and login.
- Protected routes for authenticated users.
- Secure session handling.
- User-specific career information and preferences.

### 👤 Personalized User Profile
- Education and experience information.
- Preferred career tracks.
- Technical and professional skills.
- Career interests.
- CV-based skill extraction to help users build their profiles.

### 💼 Intelligent Job Matching
NextCareer matches user profiles with available job opportunities using a weighted scoring system.

**Matching criteria:**
- Skills compatibility: 50%
- Experience compatibility: 25%
- Career track compatibility: 25%

Additional capabilities include:
- Job match scores.
- Identification of missing skills.
- Relevant job recommendations.
- Direct application links when available.

### 🧠 CV Skill Extraction
- Extract skill information from CV text.
- Review and edit detected skills before saving.
- Identify potential skill gaps.
- Use extracted skills to support job matching and career planning.

### 📚 Learning Resources
- Curated learning resources and tutorials.
- Skill-based resource discovery.
- Filters for skill categories and cost.
- Support for finding relevant learning opportunities.

### 🗺️ Personalized Career Roadmap
- Structured career plans spanning approximately 3–6 months.
- Step-by-step learning and preparation milestones.
- Actionable skill-development recommendations.
- Copyable roadmap content for convenient reference.

### 🤖 Gemma-Powered CareerBot
CareerBot provides an interactive career assistance experience powered by the Gemma language model through Ollama.

Depending on the configured model and implemented features, it can assist users with:
- Career exploration and career-path guidance.
- Understanding required technical and professional skills.
- Identifying potential skill gaps.
- Interview preparation.
- Internship preparation.
- Learning recommendations.
- Career-planning questions and answers.

Using a locally hosted model through Ollama can reduce dependence on paid hosted LLM APIs and allow inference on the machine running the model.

AI-generated advice should be reviewed critically and does not guarantee employment or job placement.

## 🏗️ System Architecture

NextCareer follows a frontend-backend architecture:

1. **Frontend:** React and Vite provide the interactive user interface.
2. **Backend:** Node.js and Express.js handle API requests, authentication, and application logic.
3. **Database:** MongoDB Atlas with Mongoose supports persistent user and application data when configured.
4. **AI Layer:** Gemma LLM runs through Ollama for supported AI-powered career conversations.
5. **Matching Engine:** A weighted scoring algorithm compares user profiles with available jobs.
6. **Career Planning:** Profile information and skill requirements support roadmap and learning recommendations.

## 🛠️ Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)

### AI and Language Models
- Gemma LLM
- Ollama
- Rule-based career matching and recommendation logic where implemented

### Development Tools
- Git and GitHub
- npm
- Environment variables for configuration

## ⚙️ Getting Started

### Prerequisites

Install the following tools before running the application:

- Node.js and npm
- Git
- Ollama, if using the Gemma-powered CareerBot locally
- MongoDB Atlas credentials, if the current backend requires MongoDB for persistent data

### 1. Clone the Repository

```bash
git clone https://github.com/mamun657/iiuc-career.git
cd iiuc-career
```

### 2. Install Dependencies

Install dependencies in the frontend and backend directories according to their respective package files.

```bash
cd frontend
npm install
```

Then install the backend dependencies:

```bash
cd ../backend
npm install
```

If your repository uses different directory names, follow the actual project structure.

### 3. Configure Environment Variables

Create the appropriate `.env` file in the backend directory and configure the variables required by the existing application.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=gemma3:4b
```

Use the actual environment variable names expected by your code. The model name above is an example and should match the model installed in Ollama.

Never commit real API keys, database credentials, JWT secrets, or other sensitive environment variables to GitHub.

### 4. Start Ollama and Prepare Gemma

Install Ollama, then download the model you intend to use.

```bash
ollama pull gemma3:4b
```

Start Ollama if it is not already running, and verify that the model is available:

```bash
ollama list
```

The backend must be configured to call the Ollama API correctly. A local Ollama URL works only when the backend can access the machine running Ollama.

### 5. Run the Backend

From the backend directory, use the start script defined in `package.json`.

For example:

```bash
npm run dev
```

If the project does not define a `dev` script, use its actual available script.

### 6. Run the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite in your terminal.

## 🔒 Security and Privacy

- Keep secrets in environment variables.
- Never expose JWT secrets or database credentials to the frontend.
- Protect authenticated API routes on the backend.
- Validate user input and uploaded CV content.
- Do not trust client-provided role information for authorization.
- Review privacy requirements before storing personal CV or profile information.
- Remember that local Ollama inference is local to the Ollama host; it is not automatically local if Ollama is hosted on another server.

## 🚀 Future Improvements

Potential extensions for NextCareer include:
- More advanced semantic job matching.
- Improved CV parsing and skill normalization.
- AI-assisted interview simulations.
- Multilingual career conversations.
- Voice-based interaction and text-to-speech.
- Expanded learning-resource recommendations.
- Better job-market data integration.
- More detailed progress tracking and roadmap updates.

These are future possibilities and should not be interpreted as currently implemented features unless verified in the application.

## 🎯 Project Vision

NextCareer aims to bridge the gap between education, skills, and employment by giving users a more accessible way to explore opportunities and plan their professional growth.

By combining career guidance, job matching, learning resources, and Gemma-powered AI assistance, the project seeks to support informed career decisions and contribute to the broader goals of **UN SDG 8: Decent Work and Economic Growth**.

## 👨‍💻 Contributing

Contributions, suggestions, and bug reports are welcome. Please review the existing project structure and follow its coding conventions before submitting changes.

## 📄 License

Add the appropriate license for this project before distributing or reusing the code.

---

**NextCareer — Explore Your Potential. Build Your Future.**
