const RESPONSES = {
  // ── Career fit ──
  role_fit: {
    keywords: ['fit', 'suit', 'role', 'career', 'path', 'right for me', 'best career', 'which job', 'job for me'],
    answer: `Based on your profile, here are some suggestions to find the right career fit:

1. **Self-Assessment** – Identify your strengths, interests, and values. Tools like the Holland Code (RIASEC) test can help.
2. **Explore Roles** – Research roles that align with your skills. Check job descriptions on LinkedIn, Indeed, or Glassdoor.
3. **Talk to Professionals** – Reach out to people already working in roles you're interested in.
4. **Experiment** – Try internships, freelance projects, or side projects to test different paths.
5. **Market Demand** – Consider roles that are in high demand in your region or globally.

Career fit depends on many factors including your interests, values, and market conditions. Consider speaking with a career counselor for personalized advice.`,
  },

  // ── Learning & upskilling ──
  learn_next: {
    keywords: ['learn next', 'what to learn', 'next skill', 'upskill', 'what should i study', 'skill gap', 'missing skill', 'roadmap'],
    answer: `Here's a strategic approach to deciding what to learn next:

1. **Check Job Postings** – Look at the "required skills" section in job postings for your target role.
2. **Identify Gaps** – Compare those skills with your current ones. The "Missing Skills" in your job matches can help.
3. **Prioritize** – Focus on skills that appear most frequently across multiple postings.
4. **One at a Time** – Pick one skill, build a small project with it, then move to the next.
5. **Stay Current** – Follow industry blogs, tech newsletters, and communities.

বাংলা:
পরবর্তী কী শিখবেন তা নির্ধারণ করতে আপনার টার্গেট রোলের জব পোস্টিং দেখুন এবং আপনার দক্ষতার ঘাটতি চিহ্নিত করুন।`,
  },

  // ── Internship ──
  internship: {
    keywords: ['internship', 'intern', 'first job', 'entry level', 'fresher job', 'no experience'],
    answer: `Here's a step-by-step guide to landing your first internship:

1. **Build a Portfolio** – Create 2-3 projects relevant to your target role. Deploy them online.
2. **Optimize Your Resume** – Tailor it for each application. Highlight projects, skills, and any relevant coursework.
3. **Apply Widely** – Don't limit yourself. Apply to at least 20-30 positions.
4. **Network** – Connect with recruiters and professionals on LinkedIn. Attend meetups and career fairs.
5. **Practice Interviews** – Use the STAR method for behavioral questions. Practice coding problems for technical roles.
6. **Start Early** – Many companies post internship openings 3-6 months in advance.

বাংলা:
ইন্টার্নশিপ পেতে পোর্টফোলিও তৈরি করুন, রেজ্যুমে অপ্টিমাইজ করুন, এবং ব্যাপকভাবে আবেদন করুন।`,
  },

  // ── Salary ──
  salary: {
    keywords: ['salary', 'pay', 'compensation', 'earn', 'income', 'package', 'ctc', 'lpa'],
    answer: `Salary information varies by company, location, role, and experience level. Here's how to research:

1. **Glassdoor** – Check company-specific salary data and reviews.
2. **Levels.fyi** – Great for tech company compensation data.
3. **LinkedIn Salary** – Offers salary insights based on role and location.
4. **PayScale** – Compare salaries by job title and experience.
5. **Local Job Boards** – Check BDJobs, Chakri.com, or equivalent platforms for local salary ranges.

**Negotiation Tips:**
- Always research before negotiating
- Consider the total package (benefits, bonuses, growth opportunities)
- Don't reveal your current salary; focus on market rates`,
  },

  // ── Interview preparation ──
  interview: {
    keywords: ['interview', 'prepare for interview', 'interview tips', 'technical interview', 'hr interview', 'mock interview', 'interview question'],
    answer: `Here's a comprehensive interview preparation guide:

**Technical Interviews:**
1. Practice Data Structures & Algorithms on LeetCode, HackerRank, or Codeforces
2. Review system design concepts (for mid-senior roles)
3. Know your projects inside-out — be ready to explain architecture and trade-offs
4. Practice coding on a whiteboard or shared editor

**Behavioral Interviews:**
1. Use the STAR method (Situation, Task, Action, Result)
2. Prepare stories about teamwork, leadership, conflict resolution, and failures
3. Research the company's values and culture

**General Tips:**
- Research the company thoroughly before the interview
- Prepare 3-5 thoughtful questions to ask the interviewer
- Practice with mock interviews (use Pramp or peers)
- Follow up with a thank-you email after the interview`,
  },

  // ── Resume / CV ──
  resume: {
    keywords: ['resume', 'cv', 'curriculum vitae', 'cover letter', 'resume tips', 'resume format', 'ats'],
    answer: `Here are tips for building an effective resume:

1. **Keep it Concise** – 1 page for freshers, 2 pages max for experienced professionals.
2. **Use Action Verbs** – Start bullet points with "Built", "Developed", "Led", "Optimized", etc.
3. **Quantify Results** – "Improved page load time by 40%" is better than "Improved performance".
4. **ATS-Friendly** – Use standard section headings, avoid tables/graphics, and include keywords from the job description.
5. **Tailor Each Resume** – Customize for each application to match the job requirements.
6. **Include Projects** – Especially important for freshers. Link to GitHub or live demos.
7. **Proofread** – Typos and grammar mistakes are instant red flags.

**Sections to Include:** Contact Info, Summary, Skills, Experience/Projects, Education, Certifications.`,
  },

  // ── Portfolio ──
  portfolio: {
    keywords: ['portfolio', 'github', 'project ideas', 'showcase', 'side project', 'build project'],
    answer: `Building a strong portfolio is crucial. Here's how:

1. **Quality Over Quantity** – 3-5 well-built projects are better than 20 half-done ones.
2. **Variety** – Show different skills (e.g., a full-stack app, a CLI tool, a mobile app).
3. **README Files** – Every project should have a clear README with setup instructions, screenshots, and tech stack.
4. **Deploy Projects** – Use Vercel, Netlify, Railway, or Render to make projects accessible.
5. **Contribute to Open Source** – Shows collaboration skills and community involvement.

**Project Ideas for Beginners:**
- Personal portfolio website
- Todo app with authentication
- Blog platform with CRUD operations
- E-commerce product page
- Weather app using a public API
- Chat application with real-time messaging`,
  },

  // ── Freelancing ──
  freelancing: {
    keywords: ['freelance', 'freelancing', 'upwork', 'fiverr', 'remote work', 'contract', 'self-employed', 'gig'],
    answer: `Getting started with freelancing:

1. **Choose a Niche** – Specialize in web development, mobile apps, data analysis, etc.
2. **Build a Portfolio** – Showcase 3-5 strong projects before applying.
3. **Start on Platforms** – Upwork, Fiverr, Toptal, or Freelancer.com.
4. **Set Competitive Rates** – Start slightly below market rate to build reviews, then increase.
5. **Write Great Proposals** – Personalize each proposal to the client's needs.
6. **Deliver Quality** – Exceed expectations to earn 5-star reviews.
7. **Build Long-Term Clients** – Repeat clients provide steady income.

**Tips:** Always use contracts, set clear milestones, and communicate regularly with clients.`,
  },

  // ── Networking ──
  networking: {
    keywords: ['networking', 'linkedin', 'connect', 'professional network', 'community', 'meetup', 'conference'],
    answer: `Building a professional network is essential:

1. **Optimize LinkedIn** – Professional photo, compelling headline, detailed experience section.
2. **Engage Regularly** – Comment on posts, share articles, publish your own content.
3. **Connect Strategically** – Reach out to people in your target industry with personalized messages.
4. **Attend Events** – Join local meetups, tech conferences, and webinars.
5. **Join Communities** – Discord servers, Slack groups, Reddit communities related to your field.
6. **Give Before You Ask** – Help others, share knowledge, and provide value first.
7. **Follow Up** – After meeting someone, send a follow-up message within 24 hours.`,
  },

  // ── Database / SQL / Normalization ──
  database: {
    keywords: ['database', 'sql', 'normalization', 'normalize', 'mysql', 'postgresql', 'mongodb', 'nosql', 'schema', 'relational', 'query', 'dbms', 'rdbms'],
    answer: `Here's a career-focused guide to database skills:

**Why Databases Matter:**
Database knowledge is essential for almost every software development role. It's a core skill that employers look for.

**Key Concepts to Learn:**
1. **SQL Basics** – SELECT, INSERT, UPDATE, DELETE, JOINs, GROUP BY, subqueries
2. **Normalization** – Organizing data to reduce redundancy (1NF, 2NF, 3NF, BCNF)
3. **Indexing** – How indexes improve query performance
4. **Relationships** – One-to-one, one-to-many, many-to-many
5. **NoSQL** – Document (MongoDB), Key-Value (Redis), Column (Cassandra)
6. **ORMs** – Mongoose (Node.js), SQLAlchemy (Python), Prisma

**Learning Resources:**
- SQLBolt.com for interactive SQL practice
- MongoDB University for free MongoDB courses
- "Database System Concepts" by Silberschatz (textbook)

**Normalization Explained:**
- **1NF** – Each column has atomic (single) values, no repeating groups
- **2NF** – Meet 1NF + no partial dependencies on composite keys
- **3NF** – Meet 2NF + no transitive dependencies
- **BCNF** – Every determinant is a candidate key`,
  },

  // ── Programming basics / OOP ──
  programming: {
    keywords: ['programming', 'coding', 'code', 'oop', 'object oriented', 'class', 'function', 'variable', 'loop', 'algorithm', 'data structure', 'dsa', 'array', 'linked list', 'stack', 'queue', 'tree', 'graph', 'sorting', 'searching', 'recursion', 'dynamic programming'],
    answer: `Here's a career-oriented guide to programming fundamentals:

**Core Concepts Every Developer Needs:**
1. **Variables & Data Types** – Understanding how data is stored and manipulated
2. **Control Flow** – if/else, loops (for, while), switch statements
3. **Functions** – Writing reusable, modular code
4. **OOP** – Classes, objects, inheritance, polymorphism, encapsulation, abstraction
5. **Data Structures** – Arrays, linked lists, stacks, queues, trees, graphs, hash maps
6. **Algorithms** – Sorting, searching, recursion, dynamic programming, greedy algorithms

**Practice Platforms:**
- LeetCode – Industry standard for interview prep
- HackerRank – Great for beginners
- Codeforces – Competitive programming
- freeCodeCamp – Project-based learning

**Tips:**
- Start with one language (Python or JavaScript are beginner-friendly)
- Build projects alongside learning theory
- Practice DSA daily for interview readiness
- Read clean code principles (Robert C. Martin's "Clean Code")`,
  },

  // ── Web Development ──
  web_dev: {
    keywords: ['web development', 'web dev', 'frontend', 'backend', 'full stack', 'fullstack', 'html', 'css', 'javascript', 'react', 'node', 'next.js', 'express', 'api', 'rest', 'mern', 'mean'],
    answer: `Here's a roadmap for web development careers:

**Frontend Development:**
1. HTML, CSS, JavaScript (fundamentals)
2. React.js or Vue.js (frameworks)
3. Responsive Design & CSS frameworks (Tailwind, Bootstrap)
4. State Management (Redux, Zustand, Context API)
5. TypeScript (increasingly required)

**Backend Development:**
1. Node.js + Express.js or Python + Django/FastAPI
2. REST APIs & GraphQL
3. Databases (MongoDB, PostgreSQL)
4. Authentication & Authorization (JWT, OAuth)
5. Server deployment (Docker, AWS, Vercel)

**Full Stack (MERN Stack):**
MongoDB + Express.js + React.js + Node.js

**Learning Path:**
1. Start with HTML/CSS/JS → Build static sites
2. Learn React → Build interactive SPAs
3. Learn Node.js/Express → Build APIs
4. Connect frontend + backend → Full-stack projects
5. Deploy on Vercel/Render → Live portfolio`,
  },

  // ── Mobile Development ──
  mobile_dev: {
    keywords: ['mobile', 'android', 'ios', 'flutter', 'react native', 'kotlin', 'swift', 'app development', 'mobile app'],
    answer: `Mobile development career guide:

**Cross-Platform (Recommended for Beginners):**
- **React Native** – If you know JavaScript/React
- **Flutter** – Google's framework using Dart, growing rapidly

**Native Development:**
- **Android** – Kotlin (recommended) or Java, Android Studio
- **iOS** – Swift, Xcode (requires Mac)

**Key Skills:**
1. UI/UX design principles for mobile
2. State management
3. API integration
4. Push notifications
5. App store deployment (Google Play, App Store)

**Career Prospects:**
Mobile developers are in high demand. Average salaries are competitive with web development roles.`,
  },

  // ── DevOps / Cloud ──
  devops: {
    keywords: ['devops', 'docker', 'kubernetes', 'cloud', 'aws', 'azure', 'gcp', 'ci/cd', 'deployment', 'server', 'linux', 'hosting'],
    answer: `DevOps & Cloud career guide:

**Core Skills:**
1. **Linux** – Command line, shell scripting, file management
2. **Git** – Version control, branching strategies
3. **Docker** – Containerization fundamentals
4. **CI/CD** – GitHub Actions, Jenkins, GitLab CI
5. **Cloud Platforms** – AWS, Azure, or GCP (start with one)
6. **Kubernetes** – Container orchestration (for intermediate level)

**Certifications to Consider:**
- AWS Certified Cloud Practitioner (beginner)
- AWS Solutions Architect Associate
- Docker Certified Associate
- Certified Kubernetes Administrator (CKA)

**Career Path:**
Junior DevOps → DevOps Engineer → Senior DevOps → DevOps Architect / SRE Lead`,
  },

  // ── Data Science / ML / AI ──
  data_science: {
    keywords: ['data science', 'machine learning', 'ml', 'ai', 'artificial intelligence', 'deep learning', 'nlp', 'data analyst', 'data engineer', 'tensorflow', 'pytorch', 'pandas', 'numpy'],
    answer: `Data Science & AI career guide:

**Learning Path:**
1. **Python** – Core language for data science
2. **Mathematics** – Statistics, linear algebra, probability
3. **Data Analysis** – Pandas, NumPy, data cleaning, EDA
4. **Visualization** – Matplotlib, Seaborn, Plotly
5. **Machine Learning** – Scikit-learn, regression, classification, clustering
6. **Deep Learning** – TensorFlow or PyTorch, neural networks
7. **NLP** – Text processing, sentiment analysis, transformers

**Key Projects to Build:**
- Data analysis dashboard
- Predictive model (house prices, stock trends)
- Image classification model
- Chatbot or sentiment analyzer

**Resources:**
- Kaggle (datasets and competitions)
- Andrew Ng's ML course (Coursera)
- fast.ai (practical deep learning)`,
  },

  // ── Cybersecurity ──
  cybersecurity: {
    keywords: ['cybersecurity', 'security', 'hacking', 'ethical hacking', 'penetration testing', 'pentest', 'infosec', 'soc', 'vulnerability'],
    answer: `Cybersecurity career guide:

**Getting Started:**
1. **Networking Fundamentals** – TCP/IP, DNS, HTTP, firewalls
2. **Linux** – Most security tools run on Linux
3. **Programming** – Python, Bash scripting
4. **Security Concepts** – CIA triad, authentication, encryption, OWASP Top 10
5. **Hands-On Practice** – TryHackMe, Hack The Box, OverTheWire

**Certifications:**
- CompTIA Security+ (beginner)
- CEH – Certified Ethical Hacker
- OSCP – Offensive Security Certified Professional
- CISSP – For experienced professionals

**Career Roles:**
SOC Analyst → Penetration Tester → Security Engineer → Security Architect → CISO`,
  },

  // ── Soft skills ──
  soft_skills: {
    keywords: ['soft skill', 'communication', 'teamwork', 'leadership', 'time management', 'presentation', 'public speaking', 'conflict'],
    answer: `Soft skills are crucial for career growth:

**Top Soft Skills Employers Look For:**
1. **Communication** – Clear writing, active listening, presenting ideas
2. **Teamwork** – Collaboration, giving/receiving feedback
3. **Problem Solving** – Analytical thinking, creativity
4. **Time Management** – Prioritization, meeting deadlines
5. **Adaptability** – Learning new things quickly, handling change
6. **Leadership** – Taking initiative, mentoring others

**How to Improve:**
- Join Toastmasters for public speaking
- Practice writing technical blog posts
- Participate in group projects and hackathons
- Seek feedback from peers and mentors
- Read books like "How to Win Friends and Influence People"`,
  },

  // ── Motivation / career change ──
  motivation: {
    keywords: ['motivat', 'stuck', 'confused', 'lost', 'burnout', 'career change', 'switch career', 'not sure', 'overwhelmed', 'depressed', 'anxiety', 'stress', 'give up', 'quit'],
    answer: `It's completely normal to feel uncertain about your career. Here's some guidance:

**If You Feel Stuck:**
1. **Reflect** – What did you enjoy doing most in the past year? What drained you?
2. **Take a Break** – Burnout is real. Rest and recharge before making big decisions.
3. **Set Small Goals** – Instead of "get dream job", try "learn one new thing this week".
4. **Talk to Someone** – A mentor, friend, or career counselor can offer perspective.
5. **Remember Your Progress** – Look at how far you've come, not just how far you have to go.

**If You're Considering a Career Change:**
1. Identify transferable skills from your current role
2. Start learning the new field part-time before making the switch
3. Build a portfolio in the new area
4. Network with people already in that field
5. Don't rush — career transitions take time

Remember: Every expert was once a beginner. Your journey is unique. 💪`,
  },

  // ── Education / degrees ──
  education: {
    keywords: ['degree', 'university', 'college', 'bootcamp', 'course', 'certification', 'masters', 'phd', 'cse', 'bsc', 'diploma', 'self-taught'],
    answer: `Education pathways for tech careers:

**Formal Degrees:**
- BSc/B.Tech in CSE/IT – Traditional path, valued by many employers
- Master's degree – Useful for specialized roles (ML, research) or career pivots
- PhD – For research-focused or academic careers

**Bootcamps:**
- 3-6 months intensive programs
- Focus on practical, job-ready skills
- Good for career changers
- Examples: App Academy, Hack Reactor, local bootcamps

**Self-Teaching:**
- Free resources: freeCodeCamp, The Odin Project, CS50
- Paid: Udemy, Coursera, Pluralsight
- Build a strong portfolio to compensate for lack of formal degree

**Certifications:**
- AWS, Google Cloud, Azure (cloud)
- Meta Frontend/Backend Developer (Coursera)
- Google Data Analytics (Coursera)

**The Truth:** In tech, skills and portfolio matter more than degrees. Many successful developers are self-taught.`,
  },

  // ── Remote work ──
  remote_work: {
    keywords: ['remote', 'work from home', 'wfh', 'hybrid', 'abroad', 'global job', 'international'],
    answer: `Guide to finding remote work:

**Where to Find Remote Jobs:**
1. **Remote-specific boards** – RemoteOK, We Work Remotely, FlexJobs
2. **Global platforms** – LinkedIn (remote filter), Indeed, AngelList
3. **Tech-focused** – Turing, Toptal, Arc.dev, Crossover
4. **Freelancing** – Upwork, Fiverr (for flexible work)

**How to Stand Out for Remote Roles:**
1. Highlight remote experience or self-directed projects
2. Show strong communication skills (written and async)
3. Demonstrate time management and self-motivation
4. Have a professional home setup

**Tips for Remote Work:**
- Set a dedicated workspace
- Maintain regular working hours
- Over-communicate with your team
- Use tools effectively (Slack, Notion, Zoom, GitHub)`,
  },

  // ── Explain / teach / concept ──
  explain: {
    keywords: ['explain', 'what is', 'define', 'meaning of', 'difference between', 'how does', 'tell me about', 'describe'],
    answer: `Great question! While I specialize in career guidance, here's how I can help with technical concepts:

I can explain how various technical topics relate to your career and what you need to know for interviews and jobs. Here are some things I can help with:

- **Career relevance** – How a concept is used in real-world jobs
- **Interview preparation** – What interviewers expect you to know
- **Learning resources** – Where to learn specific topics
- **Skill prioritization** – Which concepts to focus on for your target role

Try asking me something like:
- "Why is normalization important for backend developer roles?"
- "What database skills do I need for a full-stack job?"
- "How should I prepare for system design interviews?"
- "What skills should I learn for a data science career?"

I'll give you career-oriented guidance on any technical topic!`,
  },

  // ── Default fallback ──
  default: {
    answer: `I'm CareerBot, your AI career assistant! I can help you with:

🎯 **Career Guidance** – Finding the right career path, role fit analysis
📚 **Learning Roadmaps** – What to learn next, skill gap analysis
💼 **Job Preparation** – Resume tips, interview prep, portfolio building
🌐 **Industry Knowledge** – Web dev, mobile dev, data science, DevOps, cybersecurity
🤝 **Networking** – LinkedIn optimization, professional connections
💰 **Salary & Negotiation** – Research tips and negotiation strategies
🏠 **Remote Work** – Finding remote opportunities, work-from-home tips
💪 **Motivation** – Dealing with career uncertainty and burnout

**Try asking me:**
- "What skills should I learn next?"
- "How do I prepare for interviews?"
- "Give me resume tips"
- "What's the roadmap for web development?"
- "How to find remote jobs?"

Ask me anything about your career! 🚀`,
  },
};

function getBotResponse(query) {
  const q = (query || '').toLowerCase();
  for (const [key, config] of Object.entries(RESPONSES)) {
    if (key === 'default') continue;
    if (config.keywords.some((k) => q.includes(k))) {
      return {
        answer: config.answer,
        disclaimer: 'Suggestions are indicative. Not professional career advice. Results may vary.',
      };
    }
  }
  return {
    answer: RESPONSES.default.answer,
    disclaimer: 'Suggestions are indicative. Not professional career advice.',
  };
}

module.exports = { getBotResponse };
