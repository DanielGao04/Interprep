import React from 'react'
import dayjs from 'dayjs'
import { getRandomInterviewCover } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import DisplayTechIcons from './DisplayTechIcons'

const InterviewCard = ({ id, userID, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          {/* Type Badge */}
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          {/* Interview Image */}
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          {/* Interview Role Title */}
          <h3 className="mt-5 capitalize">{role} Interview</h3>

          {/* Date + Score + Summary */}
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                <p className="text-sm">{formattedDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/star.svg" alt="star" width={22} height={22} />
                <p className="text-sm">{feedback?.totalScore || '---'}/100</p>
              </div>
            </div>
            <p className="text-sm line-clamp-2">
              {feedback?.finalAssessment || 'You haven’t taken the Interview yet'}
            </p>
          </div>

          {/* Tech Stack + Button */}
          <div className="flex flex-row justify-between items-center mt-4">
            <DisplayTechIcons techStack={techstack} />
            <Link
              href={
                feedback
                  ? `/interview/${id}/feedback`
                  : `/interview/${id}`
              }
            >
              <Button className="btn-primary w-full sm:w-auto">
                {feedback ? 'View Feedback' : 'View Interview'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard
