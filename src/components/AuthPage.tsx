'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PasswordStrengthIndicator } from '@/components/PasswordStrengthIndicator';
import { DUMMY_TESTIMONIALS } from '@/lib/dummyData';

export default function AuthPage() {
  const pathname = usePathname();
  const isLogin = pathname === '/auth/login';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      console.log({ email, password });
      return;
    }

    console.log({ fullName, email, password });
  };

  let formFields;

  if (isLogin) {
    formFields = (
      <>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative mb-3">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>
      </>
    );
  } else {
    formFields = (
      <>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative mb-3">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <PasswordStrengthIndicator password={password} />
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#FAF8F5]">
      <div className="w-1/2 bg-[#424141] flex flex-col items-center justify-center p-8">
        <div className="text-center text-white max-w-md w-full">
          <h2 className="text-2xl font-italic mb-8">"Your work deserves to be paid on time."</h2>

          <div className="space-y-4">
            {DUMMY_TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-row gap-4 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-white/20 flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                </div>
                <p className="text-sm opacity-90 text-left italic">"{testimonial.testimony} - {testimonial.name}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome back' : 'Create Account'}
            </h1>
            <p className="text-gray-600 font-semibold text-sm">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <a href={isLogin ? '/auth/signup' : '/auth/login'} className="text-[#ab3413] font-semibold text-sm">
                {isLogin ? 'Sign up' : 'Log in'}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {formFields}

            <button
              type="submit"
              className="w-full bg-[#ab3413] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {isLogin ? 'Log in' : 'Create Account'}
            </button>
          </form>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs uppercase tracking-wide text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 rounded-lg py-3 font-medium hover:bg-gray-50"
              >
                <span>G</span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 rounded-lg py-3 font-medium hover:bg-gray-50"
              >
                <span>⌘</span>
              </button>
          </div>

        </div>
      </div>
    </div>
  );
}
