import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-100'>
      <Card className='w-full max-w-md space-y-6 p-8'>
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
