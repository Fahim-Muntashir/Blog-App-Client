'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import{useForm} from "@tanstack/react-form";

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {

  const form =useForm(
    {
      defaultValues:{
        name:"",
        email:"",
        password:""
      },
      onSubmit:async({value})=>{
console.log(value)

console.log("submit ")
      }
    }
  )
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={(e)=>{
        e.preventDefault();
        form.handleSubmit()
        }}>
       

        </form>

        <CardFooter className="flex justify-end">       <Button type="submit" form ="login-form">Submit</Button>
</CardFooter>
      </CardContent>
    </Card>
  )
}
