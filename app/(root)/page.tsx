import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import InterviewCard from '@/components/InterviewCard';
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action';
import { signOut } from '@/lib/actions/auth.action';

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])


  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
    {/* Header */}
      <header className="w-full flex justify-between items-center border-b border-primary-700 bg-primary-900 top-0">
        <nav>
          <Link href="/" className="flex items-center gap-2" >
            <Image src="/logo.svg" alt="logo" width={38} height={32} />
            <h2 className="text-primary-100">InterPrep</h2>
          </Link>
        </nav>
         <form action={signOut} className="flex justify-end p-4">
          <Button className="btn-primary px-5 py-2 text-sm font-medium bg-primary-700 hover:bg-primary-600 text-primary-100">
            Sign Out
          </Button>
        </form>
      </header>

      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions, get feedback, and ace your next interview with confidence.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Generate An Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        
        <div className='interviews-section'>
          {hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard {... interview} key= {interview.id}/>
              ))) : (
                <p>You haven&apos;t taken any intervews yet</p>
              )
            }

        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Interviews By Others</h2>

        <div className="interviews-section">
           {hasUpcomingInterviews ? (
              latestInterviews?.map((interview) => (
                <InterviewCard {... interview} key= {interview.id}/>
              ))) : (
                <p>There are no new interviews available</p>
              )
            }
        </div>
      </section>
      
      <footer className="py-6 text-sm text-primary-500">
        &copy; {new Date().getFullYear()} InterPrep. Built with ❤️ by Daniel.
      </footer>

    </>
  )
}

export default page