import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()

  if(!isUserAuthenticated) {
    redirect('/home')
  }

  return (
    <div className="root-layout">
        {children}
    </div>
  )
}

export default RootLayout