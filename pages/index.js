import { useState } from 'react';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <div>
        <h1>Welcome to SQL Legacy</h1>
        <button onClick={() => setShowIntro(false)}>Start Game</button>
      </div>
    );
  }

  return (
    <div>
      <h1>SQL Legacy Game</h1>
      <p>Coming soon...</p>
    </div>
  );
}
