import Intro from './Intro';
import { useState } from 'react';

export default function Game() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <Intro onStart={() => setShowIntro(false)} />;
  }

  return (
    <div>
      <h1>SQL Legacy Game</h1>
      <p>Coming soon...</p>
    </div>
  );
}
