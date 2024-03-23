import { useState } from 'react';
import Counter from './Counter';
import { count } from 'console';
import { CountProvider } from './count-context';

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Counter />
    </div>
  );
}
