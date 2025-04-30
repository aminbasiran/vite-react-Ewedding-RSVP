

const wishes = [

    {
        id: 1,
        wish: "Wishing you a lifetime of love, laughter, and happiness together!",
        author: "Wan Suen"
    },
    {
        id: 2,
        wish: "Selamat pengantin baru! Semoga bahagia hingga ke syurga.!",
        author: "Syamsul"
    },
    {
        id: 3,
        wish: "Barakallahu lakuma wa baraka ‘alaykuma wa jama’a baynakuma fi khayr.",
        author: "Alif daniel"
    },
    {
        id: 4,
        wish: "May this be the start of a lifelong journey full of laughter, understanding, and unwavering love.",
        author: "Sue ting"
    },
    {
        id: 5,
        wish: "Tahniah! Semoga rumahtangga yang dibina dilimpahi rahmat dan kasih sayang.",
        author: "Amin basiran"
    }
    
]

const Guestbook = () => {
  return (
        <div className='w-full h-screen flex flex-col justify-center-safe items-center-safe text-center text-shadow-xs'>
          <h1 className="text-6xl font-bold tracking-tighter pb-10 fade-in">Guestbook</h1>
          <div className='p-5 w-full flex flex-col justify-center-safe items-center-safe gap-10'>
              {wishes.map((wish, index) => (
                    <div key={index} className="fade-in">
                        <h1><i>{wish.wish}</i></h1>
                        <h3>- {wish.author}</h3>  
                    </div>
            ))}

          </div>
            

        </div>
  )
}

export default Guestbook