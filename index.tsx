import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-blue-400">NeuronForge Academy</h1>
        <p className="text-xl text-gray-300 mb-10">
          Empowering Engineers with AI & Machine Learning Mastery
        </p>
        <Badge className="text-md px-4 py-2 bg-blue-500 rounded-full">Coming Soon</Badge>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border border-gray-700 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">About the Course</h2>
            <p className="text-gray-400">
              Our flagship course is designed for engineering students to build strong foundational and practical knowledge in Artificial Intelligence and Machine Learning.
              From algorithms to deployment, this course has it all.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border border-gray-700 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">What You'll Learn</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>Core AI/ML concepts and techniques</li>
              <li>Hands-on coding with Python & libraries</li>
              <li>Model evaluation, tuning, and deployment</li>
              <li>Real-world engineering projects</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-white mb-6">📩 Get Notified</h2>
        <form
          action="https://formspree.io/f/mnqeyzqv" 
          method="POST"
          className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <label className="block text-left text-gray-300 mb-2" htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded">
            Notify Me
          </Button>
        </form>
        <p className="mt-4 text-green-400 text-sm">Thanks for joining NeuronForge Academy! We’ll notify you when the course launches.</p>
      </div>
    </div>
  );
}