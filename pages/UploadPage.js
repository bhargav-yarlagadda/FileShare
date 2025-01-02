'use client'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import UploadFile from '@/components/UploadFile'

const UploadPage = () => {
  const {isLoaded, isSignedIn} = useUser()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      return redirect('/sign-in')
    }
  }, [isSignedIn])

  return (
      <div className="order-1 md:order-2 ">
        <UploadFile />
      </div>
  );
  
}

export default UploadPage
