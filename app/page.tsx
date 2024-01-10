"use client"

import { useState } from "react"

export default function Home() {

  const [value, setValue] = useState('')
  const [unitAsk, setUnitAsk] = useState('no')
  const [inputNumber, setInputNumber] = useState(0)
  const [cm, setCm] = useState(0)
  const [mm, setMm] = useState(0)
  const [km, setKm] = useState(0)
  let inputUnit: string

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.currentTarget.value)
  }

  const handleEnter = () => {
    inputUnit = value.substring(value.length, value.length-2)
    setInputNumber(parseInt(value.substring(0, value.length-2)))
    setUnitAsk(inputUnit)
    console.log(inputUnit)
    console.log(inputNumber)
  }

  

  const handleCMtoMM = () => {
    setMm(inputNumber*10)
    console.log(inputNumber)
  }
  const handleCMtoKM = () => {
    setKm(inputNumber*0.00001)
  }
  const handleMMtoCM = () => {
    setCm(inputNumber*0.1)
  }
  const handleMMtoKM = () => {
    setKm(inputNumber*0.000001)
  }
  const handleKMtoMM = () => {
    setMm(inputNumber*1000000)
  }
  const handleKMtoCM = () => {
    setCm(inputNumber*100000)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen font-nunito gap-4 text-lg">
      <h1 className="text-2xl">Welcome to my length converter that Hauwau Kudu Muhammad of Niger State refused to do!</h1>
      <p className="text-lg">Please enter a length in this format <span className="text-red-600">&apos;10cm&apos;</span>, <span className="text-red-600">&apos;10mm&apos;</span> and <span className="text-red-600">&apos;10km&apos;</span></p> 
      <fieldset className="bg-gray-100 shadow-xl">
        <input type="text" className="bg-inherit p-4 outline-none" placeholder='Enter length' onChange={handleChange} />
        <button onClick={handleEnter} className="bg-green-400 p-4">Enter</button>
      </fieldset>
      <div>
        <p>You entered {unitAsk} length, what will you like to convert to?</p>
        {unitAsk === 'cm' && 
        <div className="flex flex-col gap-4 ">
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleCMtoMM} className=" bg-gray-500 p-3 text-white">mm</button>
            <div className="text-base">{mm}mm</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleCMtoKM} className=" bg-gray-500 p-3 text-white">km</button>
            <div className="text-base">{km}km</div>
          </div>
        </div>}
        {unitAsk === 'mm' && 
        <div className="flex flex-col gap-4 ">
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleMMtoCM} className=" bg-gray-500 p-3 text-white">cm</button>
            <div className="text-base">{cm}cm</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleMMtoKM} className=" bg-gray-500 p-3 text-white">km</button>
            <div className="text-base">{km}km</div>
          </div>
        </div>}
        {unitAsk === 'km' && 
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleKMtoCM} className=" bg-gray-500 p-3 text-white">cm</button>
            <div className="text-base">{cm}cm</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-3 gap-3">
            <button onClick={handleKMtoMM} className=" bg-gray-500 p-3 text-white">mm</button>
            <div className="text-base">{mm}mm</div>
          </div>
        </div>}
      </div>
    </main>
  )
}
