export default function Intro({ onStart }) {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-md mx-auto bg-slate-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to SQL Legacy</h1>
        <p className="mb-4">In a realm where data shapes destiny, your SQL mastery will determine the future.</p>
        <button 
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}
