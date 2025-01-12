'use client'
 
import { useRouter, useSearchParams } from 'next/navigation'
import UserRoom from './UserRoom'
import { Suspense } from 'react'

export default function Page() {
  const router = useSearchParams() 
  return (
    <main className='w-1/1 flex items-center justify-center '>
      <UserRoom/>
      </main>
  )
}