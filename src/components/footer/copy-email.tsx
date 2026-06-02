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
    <section className='flex w-full flex-col space-y-1'>
      <span className='text-base font-medium text-neutral-600'>
        {copied ? 'Copied!' : '( Click to copy! )'}
      </span>

      <button
        onClick={() => void handleCopy()}
        className='origin-left cursor-pointer text-left text-3xl font-medium text-neutral-700 transition-all hover:scale-[1.015] hover:text-black'
      >
        <ScreenFitText text={`↘ ${email.url}`} />
      </button>
    </section>
  );
};

export default EmailCTA;
