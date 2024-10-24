import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
    const [len, setLen] = useState(8);
    const [isNums, setIsNum] = useState(true);
    const [isChars, setIsChars] = useState(true);
    const [pass, setPass] = useState();
    // ref hook
    const passwordRef = useRef(null);

    // now we will be calling password generator again and again, and using useCallback the function definition is stored in cache
    const passGenerator = useCallback(() => {
        let pass = "";
        let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (isNums) string += "0123456789";
        if (isChars) string += "~!@#$%^&*()_+=-`";
        for (let i = 1; i <= len; i++) {
            let randInd = Math.floor(Math.random() * string.length);
            pass += string[randInd];
        }
        setPass(pass);
    }, [len, isNums, isChars, setPass]);
    // 

    // useCallback is for storing (memoizing) the function based on dependencies. It keeps the function reference stable unless one of the dependencies changes. This helps in avoiding unnecessary re-creations of the function on every render.

    // useEffect is for executing that function when its dependencies change or the page relods. It runs the effect logic (like calling your passGenerator function) whenever any specified dependencies are updated.
    useEffect(() => {
        passGenerator();
    }, [len, isNums, isChars, passGenerator]) //  if not  given any dependencies it will run everytime for any change

    const copyPassToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(pass);// this also copies but as we need to 
    }, [pass])

    return (
        <>
            <h1 className='text-4xl text-center'>Password Generator</h1>
            <div className='flex flex-wrap gap-5 w-96 items-center justify-center m-auto'>
                <input type="text" value={pass} className='w-3/5' readOnly ref={passwordRef} />{/* attached this tag and useRef */}
                <button onClick={copyPassToClipBoard} className='w-1/4 bg-blue-400 rounded-md p-2' >copy</button>
                <input type="range" className='cursor-pointer' onChange={(e) => setLen(e.target.value)} />
                <label className='w-full'>password length - {len}</label>
                <input type="checkbox" defaultChecked onChange={() => {
                    setIsNum((prev) => !prev)
                }} value={isNums} className='cursor-pointer' />
                <label>numbers</label>
                <input type="checkbox" defaultChecked onChange={() => {
                    setIsChars((prev) => !prev);
                }} value={isChars} className='cursor-pointer' />
                <label>special characters</label>
            </div>
        </>
    )
}

export default App
