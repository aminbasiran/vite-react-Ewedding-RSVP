

const Landing = () => {
  return (
    <div className='w-full h-screen  flex justify-center-safe items-center-safe relative overflow-hidden'>
      
      <img src="./images/minimalist.png" alt="flower" className='object-cover absolute top-10 scale-125 left-[-140px]  -rotate-15 opacity-20 float'/>
      <img src="./images/minimalist.png" alt="flower" className='object-cover absolute -bottom-10 scale-130 left-[-90px] scale-y-[-1] rotate-12 opacity-20 float'/>
      <div className='w-[90%] h-[80%] flex flex-col justify-center-safe items-center-safe text-center gap-10 z-[100] shadow-xl px-5 rounded-sm text-shadow-xs'>
        <h2 className='text-secondary font-bold '>WALIMATUL URUS</h2>
        <div className='font-Gwendolyn text-6xl text-secondary font-[700]'>
          <h1>Mirza</h1>
          <h1>+</h1>
          <h1>Hasya</h1>
        </div>
        <div className='text-secondary font-bold'> 
          <h2>Sabtu</h2>
          <h2>27 | 8 | 2025</h2>
        </div>

        <div className='text-secondary font-bold'>
          <h2>Forest Valley Hillside Eventspace</h2>
          <h2>Ampang, KL</h2>
        </div>
        <h1 className='text-secondary font-bold text-xl '>#HanyaUntukMirza</h1>
      </div>
    </div>
  )
}

export default Landing