import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl text-blue-600 dark:text-emerald-400 font-bold mb-8 tracking-wider text-center">
        Password Generator
      </h1>

      {/* Input and Copy Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full max-w-xl">
        <input
          type="text"
          className="p-3 w-full sm:w-2/3 border border-gray-300 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400"
          placeholder="Your Password"
          readOnly
        />
        <button
          className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 transition-all"
        >
          Copy
        </button>
      </div>

      {/* Settings Section */}
      <div className="flex flex-col gap-6 w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Length Slider */}
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="text-gray-700 dark:text-gray-300 font-medium">
            Length:
          </label>
          <input
            type="range"
            min={6}
            max={100}
            className="w-2/3 cursor-pointer accent-blue-600 dark:accent-emerald-400"
          />
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="number"
            className="w-5 h-5 cursor-pointer accent-blue-600 dark:accent-emerald-400"
          />
          <label htmlFor="number" className="text-gray-700 dark:text-gray-300 font-medium">
            Include Numbers
          </label>
        </div>

        {/* Characters Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="character"
            className="w-5 h-5 cursor-pointer accent-blue-600 dark:accent-emerald-400"
          />
          <label htmlFor="character" className="text-gray-700 dark:text-gray-300 font-medium">
            Include Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
