
export default function Home() {
  return (
    <main className="">
      <h1>Welcome to my length converter that Hauwau Kudu Muhammad of Niger State refused to do!</h1>
      <p>Please enter a length in this format &apos;10cm&apos;, &apos;10mm&apos;, &apos;10km&apos;</p> 
      <fieldset>
        <input type="text" placeholder='Enter length' />
        <button>Enter</button>
      </fieldset>
      <div>
        <p>You entered a length in cm, what will you like to convert to?</p>
        <div>
          <button>cm</button>
          <div>10cm</div>
        </div>
        <div>
          <button>mm</button>
          <div>10mm</div>
        </div>
      </div>
    </main>
  )
}
