import { SignUp } from '@clerk/nextjs'
import { dark, neobrutalism } from '@clerk/themes'
import Image from 'next/image'
export const metadata = {
    title:"FileShare | Auth"
}
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Left side with Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/auth.jpg" // Replace with your image path
          alt="Descriptive Alt Text"
          width={600}  // Adjust the width based on your design needs
          height={400} // Adjust the height based on your design needs
          className="rounded-lg  max-h-[85vh] max-w-full" // Optional, to add rounded corners
        />
      </div>

      {/* Right side with SignUp form */}
      <div className="flex items-center justify-center">
      <SignUp
            appearance={{
              elements: {
               
                formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm',
              },
            }}
          />
      </div>
    </div>
  )
}
