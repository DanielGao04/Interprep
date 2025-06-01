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
    <header className="w-full sticky top-0 z-50 bg-primary-900 text-primary-100 px-6 py-4 flex justify-between items-center shadow-md">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-lg font-semibold">InterPrep</h2>
        </Link>
      </nav>
      <Link href="/sign-in">
        <Button className="btn-primary px-5 py-2 text-sm font-medium bg-primary-700 hover:bg-primary-600 text-primary-100">
          Sign In
        </Button>
      </Link>
    </header>

      {/* Hero Section */}
      <section className=" border w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-8 text-primary-200">
          Ace Your Interviews<br />with InterPrep
        </h1>
        <p className="text-xl md:text-2xl text-primary-300 max-w-2xl mx-auto mb-12">
          Practice real interviews, receive AI-driven feedback, and improve your confidence — all in one place.
        </p>

        <div className="flex justify-center">
          <Link href="/sign-up">
            <Button className="btn-primary px-12 py-4 text-lg bg-primary-700 hover:bg-primary-600 text-primary-100 shadow-lg">
              Sign Up For Free
            </Button>
          </Link>
        </div>
      </section>


      {/* About InterPrep Section */}
      <section className=" border py-32 px-6 w-full bg-primary-800 text-center">
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

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {/* Shared card style */}
            {[{
              title: 'Interview Session',
              description: 'Simulate real interview scenarios with dynamic questions and responses.',
              src: '/interviewpreview.png',
              alt: 'Live interview preview'
            }, {
              title: 'AI Feedback',
              description: 'Receive instant, actionable AI-generated feedback on your interview performance.',
              src: '/feedbackpreview.png',
              alt: 'AI feedback preview'
            }, {
              title: 'Interview Generation',
              description: 'Generate personalized interviews based on your needs.',
              src: '/generatepreview.png',
              alt: 'Interview generation preview'
            }].map((card, idx) => (
              <div
                key={idx}
                className="bg-primary-800 rounded-xl shadow-lg border border-primary-700 max-w-sm w-full flex flex-col"
              >
                <div className="h-48 sm:h-60 overflow-hidden rounded-t-xl">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-primary-200 flex-1 flex flex-col justify-between min-h-[140px]">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-primary-400 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
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
              "Fear of Failure",
              "Sttuttering or Nervousness",
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
