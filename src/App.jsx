import './App.css'
import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
    const [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false);
    const [password, setPassword] = useState('');
    const [userInput, setUserInput] = useState('');

    // Ref for Copy Button
    const passwardRef = useRef(null);

    // Generate Password Function
    const generatePassword = useCallback(() => {
        // Generate password logic goes here
        let generatedPassword = '';
        let str = '';

        if(userInput) {
            let formatUserInput = '';
            formatUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
            generatedPassword += formatUserInput;
            // console.log(formatUserInput);
        }else{
            str += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if(includeNumbers) {
            str += '0123456789';
        }

        if(includeSpecialCharacters) {
            str += '!@#$%&*_';
       }

       const iterations = userInput ? Math.floor(length / 2) : length;

        for (let i = 0; i < iterations; i++) {
            const randomIndex = Math.floor(Math.random() * str.length);
            generatedPassword += str.charAt(randomIndex);    
        }

        setPassword(generatedPassword);
    },[length, includeNumbers, includeSpecialCharacters, userInput]);

    // Copy Password to Clipboard
    const copyPasswordToClipboard = ()=>{
        window.navigator.clipboard.writeText(password);
        passwardRef.current?.select();
    }
    useEffect(() => {
        generatePassword();
    },[length, includeNumbers, includeSpecialCharacters, userInput]);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl text-blue-600 dark:text-emerald-400 font-bold mb-8 tracking-wider text-center">
        Password Generator
      </h1>

      
      {/* User Input for Custom Password */}
      <div className="flex flex-col w-full max-w-xl gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md py-5 rounded-b-none">
        <div className="flex flex-col gap-3">
            <label
                htmlFor="userInput"
                className="text-gray-700 dark:text-gray-300 font-medium">
                Enter a Name or keyword:
            </label>
            <input
                type="text"
                maxLength={10}
                name="userInput"
                onChange={(e) => setUserInput(e.target.value)}
                id="userInput"
                placeholder="Type something to base your password on"
                className="p-3 border border-gray-300 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400"
            />
        </div>

         {/* Input and Copy Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full max-w-xl">
                <input
                type="text"
                value={password}
                ref={passwardRef}
                className="p-3 sm:w-full w-1/2 border border-gray-300 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-emerald-400"
                placeholder="Your Password Will Appear Here"
                readOnly
                />
                <button
                    className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-emerald-400 dark:hover:bg-emerald-500 transition-all"
                    onClick={copyPasswordToClipboard}
                    >
                    Copy
                </button>
            </div>
        </div>
     

      {/* Settings Section */}
      <div className="flex flex-col gap-6 w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-t-none rounded-b-lg  shadow-md ">
        {/* Length Slider */}
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="text-gray-700 dark:text-gray-300 font-medium">
            Length:
          </label>
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={6}
            max={100}
            className="w-2/3 cursor-pointer accent-blue-600 dark:accent-emerald-400"
          />
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked = {includeNumbers}
            onChange = {() => setIncludeNumbers((prev)=> !prev)}
            id="number"
            className="w-5 h-5 cursor-pointer accent-blue-600 dark:accent-emerald-400"
          />
          <label htmlFor="number" className="text-gray-700 dark:text-gray-300 font-medium">
            Include Numbers
          </label>
        </div>

        {/* Special Characters Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked = {includeSpecialCharacters}
            onChange = {() => setIncludeSpecialCharacters((prev)=> !prev)}
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
