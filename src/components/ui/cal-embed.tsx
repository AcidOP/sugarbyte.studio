'use client';

import { useEffect } from 'react';

import Cal, { getCalApi } from '@calcom/embed-react';

export default function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const cal = await getCalApi({ namespace: 'chat' });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <Cal
      namespace='chat'
      calLink='sugarbyte/chat'
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
    />
  );
}
