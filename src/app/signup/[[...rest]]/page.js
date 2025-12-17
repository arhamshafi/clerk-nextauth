import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
    return (
        <div className='w-full min-h-screen bg-black flex justify-center items-center'>
            <SignUp />
               
        </div>
    )
}
