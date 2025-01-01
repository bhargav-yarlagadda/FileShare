'use client'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import UploadFile from '@/components/UploadFile'
import UploadSidebar from '@/components/UploadSidebar'

const UploadPage = () => {
  const {isLoaded, isSignedIn} = useUser()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      return redirect('/sign-in')
    }
  }, [isSignedIn])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-1 md:col-span-1">
        <UploadSidebar />
      </div>
      <div className="col-span-1 md:col-span-3">
        <UploadFile />
      </div>
    </div>
  )
}

export default UploadPage
