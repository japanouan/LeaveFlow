'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { LoginFormValues, loginSchema } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

const Page = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues:{
            email:"",
            password:""
        },
    })
    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
            <div className='text-lg font-semibold mb-2'>Login Page</div>
            <form className='input-form' onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    <Input type="email" label='Email' error={errors.email?.message} {...register('email')}/>
                </div>
                <div>
                    <Input type="password" label='Password' error={errors.password?.message} {...register('password')}/>
                </div>
                <Button type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Page