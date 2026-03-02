'use client';

import { useState } from 'react';

type Social = {
  id: string;
  name: string;
  url: string;
};

interface Props {
  email: Social;
}

const EmailCTA = ({ email }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className='flex min-w-max flex-col -space-y-1.5'>
      <span className='text-base text-neutral-600'>
        {copied ? 'Copied!' : '(Click to copy!)'}
      </span>

      <button
        onClick={handleCopy}
        className='origin-left cursor-pointer text-left text-3xl font-medium text-neutral-700 underline transition-all hover:scale-[1.015] hover:text-neutral-950'
      >
        ↘ {email.url}
      </button>
    </section>
  );
};

export default EmailCTA;
