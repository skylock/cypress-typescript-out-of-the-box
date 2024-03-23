import Counter from './Counter';
import { useCount } from './count-context';

export function About() {
  const { count } = useCount();
  return (
    <div>
      <h2>About</h2>
      <hr />
      My Context count: {count}
    </div>
  );
}
