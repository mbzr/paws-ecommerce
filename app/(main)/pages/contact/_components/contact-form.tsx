'use client'

import { LoadingDots } from 'components/loading-dots'
import { Button } from 'components/ui/button'
import { FormField } from 'components/ui/form-field'
import { Input } from 'components/ui/input'
import { Textarea } from 'components/ui/textarea'
import { FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    reset()
    toast.success('Message sent successfully')
  }

  const onError = (errors: FieldErrors<ContactFormData>) => {
    toast.error('Message sent failed')
  }

  return (
    <form
      method="POST"
      className="mt-12"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <div>
          <FormField id="name" label="Name" error={errors.name}>
            <Input
              type="text"
              id="name"
              autoComplete="given-name"
              required
              {...register('name')}
            />
          </FormField>
        </div>
        <div>
          <FormField id="email" label="Email" error={errors.email}>
            <Input
              type="email"
              id="email"
              autoComplete="email"
              required
              {...register('email')}
            />
          </FormField>
        </div>
        <div className="sm:col-span-2">
          <FormField id="message" label="Message" error={errors.message}>
            <Textarea id="message" rows={4} required {...register('message')} />
          </FormField>
        </div>
      </div>
      <div className="mt-4">
        <Button type="submit">
          {isSubmitting ? <LoadingDots className="bg-white" /> : 'Send'}
        </Button>
      </div>
    </form>
  )
}
