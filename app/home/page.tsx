"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-primary-900 to-primary-800 text-primary-100">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b border-primary-700 bg-primary-900 sticky top-0 z-50">
        <Link href="/">
          <h1 className="text-xl font-bold text-primary-300 tracking-tight cursor-pointer">
            InterPrep
          </h1>
        </Link>
        <Link href="/sign-in">
          <Button className="btn-primary px-5 py-2 text-sm font-medium bg-primary-700 hover:bg-primary-600 text-primary-100">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="w-full text-center py-24 px-6 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800">
        <h1 className="text-5xl font-extrabold leading-tight mb-8 text-primary-200">
          Ace Your Interviews with InterPrep
        </h1>
        <p className="text-xl text-primary-300 max-w-2xl mx-auto mb-12">
          Practice real interviews, receive AI-driven feedback, and improve your confidence — all in one place.
        </p>

        <div className="flex justify-center">
          <Link href="/sign-up">
            <Button className="btn-primary px-12 py-4 text-lg bg-primary-700 hover:bg-primary-600 text-primary-100">
              Sign Up
            </Button>
          </Link>
        </div>
      </section>
      
      {/* About InterPrep Section */}
      <section className="py-32 px-6 w-full max-w-5xl bg-primary-200 rounded-3xl">
        <h2 className="text-5xl font-bold mb-8 text-center text-black">
          What is InterPrep?
        </h2>
        <p className="text-black max-w-3xl mx-auto text-center text-lg leading-relaxed">
          InterPrep is your all-in-one platform to practice real interview scenarios, receive AI-powered feedback, and track your progress over time. 
          Whether you&apos;re preparing for your first interview or aiming to sharpen your skills, InterPrep helps you build confidence and succeed.
        </p>
      </section>

      {/* Why InterPrep Section */}
      <section className="py-16 px-6 w-full max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-10 text-primary-200">
          Why InterPrep?
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="p-8 bg-primary-900 rounded-xl shadow-md border border-primary-700 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-300">
              Simulated Interviews
            </h3>
            <p className="text-primary-400 max-w-xl">
              Test your skills in a realistic setting tailored to your role. Gain hands-on experience that mimics real-world interview scenarios.
            </p>
          </div>
          <div className="p-8 bg-primary-900 rounded-xl shadow-md border border-primary-700 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-300">
              Actionable Feedback
            </h3>
            <p className="text-primary-400 max-w-xl">
              Receive personalized AI-powered evaluations that highlight strengths and identify areas for improvement.
            </p>
          </div>
          <div className="p-8 bg-primary-900 rounded-xl shadow-md border border-primary-700 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4 text-primary-300">
              Track Your Progress
            </h3>
            <p className="text-primary-400 max-w-xl">
              Visualize your growth over time with clear insights, helping you stay motivated and focused on your goals.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: What Problems Does InterPrep Solve? */}
      <section className="py-16 px-6 w-full mb-12 max-w-5xl bg-primary-900 rounded-xl shadow-md border border-primary-700 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary-200">
          What Problems Does InterPrep Solve?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-primary-300 max-w-xl mx-auto text-left">
          <li>Lack of Confidence in Interviews</li>
          <li>Fear of Unexpected Questions</li>
          <li>Lack of Experience and Preparation</li>
          <li>Low Interview Success Rate</li>
          <li>Language Barriers</li>
          <li>Slow Job Search Process</li>
        </ul>
      </section>

      {/* User Reviews Section */}
      <section className="py-16 px-6 w-full max-w-5xl bg-primary-900 rounded-xl shadow-md border border-primary-700">
        <h2 className="text-3xl font-semibold mb-10 text-center text-primary-200">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-primary-800 rounded-xl shadow-inner border border-primary-700">
            <p className="text-primary-300 italic mb-4">
              “InterPrep transformed my interview preparation! The AI feedback was detailed and really helped me improve.”
            </p>
            <p className="font-semibold text-primary-200">— Alex M.</p>
          </div>
          <div className="p-6 bg-primary-800 rounded-xl shadow-inner border border-primary-700">
            <p className="text-primary-300 italic mb-4">
              “The simulated interviews feel so realistic. I felt more confident walking into my interviews thanks to InterPrep.”
            </p>
            <p className="font-semibold text-primary-200">— Jamie L.</p>
          </div>
          <div className="p-6 bg-primary-800 rounded-xl shadow-inner border border-primary-700">
            <p className="text-primary-300 italic mb-4">
              “Love how I can track my progress and see clear insights on where I need to improve. Highly recommend!”
            </p>
            <p className="font-semibold text-primary-200">— Priya S.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-primary-500">
        &copy; {new Date().getFullYear()} InterPrep. Built with ❤️ by Daniel.
      </footer>
    </main>
  );
};

export default Home;
