'use client';

import { trpc } from '@/lib/trpc/client';
import React from 'react';

export default function TestTrpcPage() {
  const { data, isLoading, error } = trpc.example.hello.useQuery({ text: 'from Client Component' });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error:</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>tRPC Connection Test</h1>
      <p>Server says: {data?.greeting}</p>
    </div>
  );
} 