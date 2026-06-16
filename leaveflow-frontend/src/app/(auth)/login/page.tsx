import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <div>
            <div>Login Page</div>
            <div className='input-form'>
                <Input type="email" label='Email'/>
                <Input type="password" label='Password'/>
                <Button type='button'>Login</Button>
            </div>
        </div>
    )
}

export default Page