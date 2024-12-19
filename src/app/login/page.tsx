import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='flex min-h-screen w-full flex-col md:flex-row'>
      <div className='relative min-h-[300px] w-full bg-slate-900 md:min-h-screen md:w-1/2'>
        <Image
          src='/assets/image.png'
          alt='Financial charts and graphs'
          fill
          className='object-cover opacity-50'
          priority
        />
        <div className='absolute inset-0 flex items-center justify-center p-8'>
          <div className='max-w-2xl space-y-4 text-center text-white'>
            <h1 className='text-4xl font-bold md:text-6xl'>
              Log in to track your finances efficiently.
            </h1>
            <p className='text-lg text-gray-200 md:text-xl'>
              Log in to track your finances efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className='flex w-full items-center justify-center p-8 md:w-1/2'>
        <Card className='w-full max-w-md space-y-6 p-8'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold'>Login</h2>
            <p className='text-gray-500'>Lorem ipsum</p>
          </div>

          <form className='space-y-4'>
            <div className='space-y-2'>
              <Input
                type='email'
                placeholder='Email address'
                className='w-full bg-gray-50'
                required
              />
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <Input
                  type='password'
                  placeholder='Password'
                  className='w-full bg-gray-50'
                  required
                />
              </div>
              <div className='text-right'>
                <Link
                  href='/forgot-password'
                  className='text-sm text-green-600 hover:text-green-700'
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button className='w-full bg-slate-900 hover:bg-slate-800'>
              Sign In
            </Button>
          </form>

          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>OR</span>
            </div>
          </div>

          <Button variant='outline' className='w-full'>
            <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
              />
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              />
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              />
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              />
            </svg>
            Continue with Google
          </Button>

          <div className='text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link
              href='/register'
              className='text-green-600 hover:text-green-700'
            >
              Sign Up Account
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
