import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function LandingPage() {
  return (
    <div className='relative flex min-h-screen w-full items-center justify-center bg-gray-700'>
      <Image
        src='/assets/image 3.png'
        alt='Financial charts and graphs'
        fill
        className='object-cover opacity-50'
        priority
      />
      <Card className='relative z-10 w-full max-w-md space-y-6 bg-white p-8'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Welcome to Finance Tracker</h1>
          <p className='text-gray-500'>Manage your finances efficiently</p>
        </div>

        <div className='space-y-4'>
          <Button asChild className='w-full'>
            <Link href='/login'>Log In</Link>
          </Button>
          <Button asChild variant='outline' className='w-full'>
            <Link href='/register'>Sign Up</Link>
          </Button>
        </div>

        <p className='text-center text-sm text-gray-500'>
          Start tracking your finances today and take control of your financial
          future.
        </p>
      </Card>
    </div>
  )
}
