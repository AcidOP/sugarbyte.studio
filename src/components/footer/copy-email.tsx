'use client';

import { useState } from 'react';

import { ScreenFitText } from '../ui/screen-fit-text';

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
    await navigator.clipboard.writeText(email.url.toLocaleLowerCase());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className='flex w-full flex-col -space-y-1.5'>
      <span className='text-base text-neutral-600'>
        {copied ? 'Copied!' : '(Click to copy!)'}
      </span>

      <button
        onClick={handleCopy}
        className='origin-left cursor-pointer text-left text-3xl font-medium text-neutral-700 underline transition-all hover:scale-[1.015] hover:text-neutral-950'
      >
        <ScreenFitText text={`↘ ${email.url}`} />
      </button>
    </section>
  );
};

export default EmailCTA;
