'use client';

import { useEffect, useState } from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (!password) {
      setStrength(0);
      return;
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 16) score++;

    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    setStrength(Math.min(score, 3));
  }, [password]);

  if (!password) return null;

  const strengthLabels = ['Weak', 'Fair', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500'];

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded ${
              index < strength ? strengthColors[strength - 1] : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-600">
        Password strength: <span className="font-semibold">{strengthLabels[strength - 1] || 'Very Weak'}</span>
      </p>
    </div>
  );
}
