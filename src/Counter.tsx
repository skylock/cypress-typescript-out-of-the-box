import React, { useState } from 'react';
import { useCount } from './count-context';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <Box sx={{ mt: 2 }}>{`Current Count ${count}`}</Box>
      <Button variant='contained' onClick={() => setCount(count + 1)} sx={{ mr: 2 }}>
        Increment
      </Button>
      <Button variant='contained' onClick={() => setCount(count - 1)} sx={{ mr: 2 }}>
        Decrement
      </Button>
    </div>
  );
}
