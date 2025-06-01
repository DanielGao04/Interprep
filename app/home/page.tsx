"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-primary-900 to-primary-800 text-primary-100">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b border-primary-700 bg-primary-900 sticky top-0 z-50">
        <nav>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={38} height={32} />
            <h2 className="text-primary-100">InterPrep</h2>
          </Link>
        </nav>
        <Link href="/sign-in">
          <Button className="btn-primary px-5 py-2 text-sm font-medium bg-primary-700 hover:bg-primary-600 text-primary-100">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <ScrollFadeIn>
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
                Sign Up For Free
              </Button>
            </Link>
          </div>
        </section>
      </ScrollFadeIn>

      {/* About InterPrep Section */}
      <section className="py-32 px-6 w-full bg-primary-800 text-center">
        <h2 className="text-5xl font-bold mb-8 text-primary-100">
          What is InterPrep?
        </h2>
        <p className="text-primary-300 text-xl max-w-4xl mx-auto leading-relaxed">
          InterPrep is your all-in-one platform to practice real interview scenarios, receive AI-powered feedback, and track your progress over time. 
          Whether you&apos;re preparing for your first interview or aiming to sharpen your skills, InterPrep helps you build confidence and succeed.
        </p>
      </section>

      {/* Live AI Interviews Section */}
      <ScrollFadeIn>
        <section className="py-20 px-6 w-full mb-20 max-w-6xl bg-primary-900 rounded-2xl shadow-xl border-primary-700 text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary-100">
            Live AI Interviews With Dynamic Feedback
          </h2>
          <p className="text-primary-400 text-lg mb-12 max-w-2xl mx-auto">
            Experience realistic interview sessions and receive immediate AI-generated feedback tailored to your performance.
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 relative">
              <Image
                src="/interviewpreview.png"
                alt="Live interview preview"
                width={1200}
                height={675}
                className="rounded-xl w-full h-auto object-cover border-2 border-primary-700 shadow-lg shadow-primary-800/40 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Why InterPrep Section */}
      <ScrollFadeIn>
        <section className="py-16 px-6 w-full max-w-5xl text-center">
          <h2 className="text-3xl font-semibold mb-10 text-primary-200">
            Why InterPrep?
          </h2>
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              {
                title: "Simulated Interviews",
                text: "Test your skills in a realistic setting tailored to your role. Gain hands-on experience that mimics real-world interview scenarios.",
              },
              {
                title: "Actionable Feedback",
                text: "Receive personalized AI-powered evaluations that highlight strengths and identify areas for improvement.",
              },
              {
                title: "Track Your Progress",
                text: "Visualize your growth over time with clear insights, helping you stay motivated and focused on your goals.",
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="p-8 bg-primary-900 rounded-xl shadow-md border border-primary-700 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4 text-primary-300">{title}</h3>
                <p className="text-primary-400 max-w-xl">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Problems Solved Section */}
      <ScrollFadeIn>
        <section className="py-16 px-6 w-full mb-12 max-w-6xl bg-primary-900 rounded-xl shadow-md border-primary-700 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-primary-200">
            What Problems Does InterPrep Solve?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Lack of Confidence in Interviews",
              "Fear of Unexpected Questions",
              "Lack of Experience and Preparation",
              "Low Interview Success Rate",
              "Language Barriers",
              "Slow Job Search Process",
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-primary-800 text-primary-300 p-4 rounded-lg border border-primary-700"
              >
                {problem}
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* User Reviews Section */}
      <ScrollFadeIn>
        <section className="py-16 px-6 w-full max-w-5xl bg-primary-900 rounded-xl shadow-md border border-primary-700">
          <h2 className="text-3xl font-semibold mb-10 text-center text-primary-200">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                quote:
                  "“InterPrep transformed my interview preparation! The AI feedback was detailed and really helped me improve.”",
                name: "— Alex M.",
              },
              {
                quote:
                  "“The simulated interviews feel so realistic. I felt more confident walking into my interviews thanks to InterPrep.”",
                name: "— Jamie L.",
              },
              {
                quote:
                  "“Love how I can track my progress and see clear insights on where I need to improve. Highly recommend!”",
                name: "— Priya S.",
              },
            ].map(({ quote, name }, idx) => (
              <div key={idx} className="p-6 bg-primary-800 rounded-xl shadow-inner border border-primary-700">
                <p className="text-primary-300 italic mb-4">{quote}</p>
                <p className="font-semibold text-primary-200">{name}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      {/* Footer */}
      <footer className="py-6 text-sm text-primary-500">
        &copy; {new Date().getFullYear()} InterPrep. Built with ❤️ by Daniel.
      </footer>
    </main>
  );
};

export default Home;
