'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

        <CardContent className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />

          <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl">
            Sign Up
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
