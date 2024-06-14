# Dryv — AI Time Management Assistant

Dryv is an AI-powered time management assistant built with Next.js. It helps users optimize their schedules, prioritize tasks, and achieve peak productivity.

## Features

- **Smart Scheduling:** Dryv intelligently schedules your tasks and appointments, considering your availability, deadlines, and priorities.
- **Task Prioritization:** Prioritize tasks based on urgency and importance using the Eisenhower Matrix.
- **Time Tracking:** Track time spent on tasks and gain insights into your work patterns.
- **Focus Mode:** Eliminate distractions and enhance concentration with a dedicated Focus Mode.
- **Personalized Insights:** Receive personalized recommendations to improve your time management skills.
- **Calendar Integration:** Connect Dryv to your existing calendar for seamless scheduling.
- **AI-Powered Task Suggestions:** Get AI-driven suggestions for optimal task scheduling.
- **Personalized Reports:** Analyze your time usage and productivity with detailed reports.

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/dryv.git
```

2. **Install dependencies:**

```bash
cd dryv
npm install
```

3. **Set up environment variables:**

- Create a `.env.local` file in the root directory.
- Add the following environment variables, replacing the placeholders with your actual values:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_next_auth_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
MAILGUN_API_KEY=your_mailgun_api_key
```

4. **Start the development server:**

```bash
npm run dev
```

## Deployment

To deploy Dryv, you can use any platform that supports Next.js applications, such as Vercel, Netlify, or AWS.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
