import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-secondary-100">
            Practice on real interview questions, get feedback, and ace your next interview with confidence.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section>
        
      </section>


    </>
  )
}

export default page