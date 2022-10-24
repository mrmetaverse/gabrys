import useStore from '@/helpers/store'
import { FiArrowUpRight } from 'react-icons/fi'

export const IndexOverlay = () => {
  const router = useStore((s) => s.router)

  return (
    <main className='relative flex flex-col h-full'>
      <div className='flex flex-col items-center justify-between h-full py-36 md:py-32'>
        <span className='text-base font-light uppercase pointer-events-none md:text-xl md:relative md:self-start indent-10 text-white/50 font-ubuntu whitespace-nowrap top-28'>
          {/* <h1 className='inline text-2xl italic normal-case md:text-3xl text-white/60 font-fog'>
            Gabryś Wronka:
          </h1>{' '} */}
          <br /><span className='italic'>Creator,</span>&nbsp; Actor, and Model
          <br />
          Based in Los Angeles, California.
        </span>
        <div className='flex flex-col items-center pointer-events-none md:self-end md:items-start'>
          <h2 className='relative italic lg:text-8xl text-[10vw] text-white/60 font-fog right-5'>
            <span className='relative lg:text-9xl left-2 text-[11vw]'>witam</span>
          </h2>
          <div className='flex flex-col justify-around md:flex-row'>
            <button
              onClick={() => router.push('/projects')}
              className='relative flex items-center self-end text-2xl italic font-light leading-none tracking-wider pointer-events-auto text-white/70 right-5 bottom-2 transition-all font-fog hover-effect'
            >
              Portfolio
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <Socials />
    </main>
  )
}

const Socials: React.FC = () => {
  return (
    <ul className='left-0 flex justify-center w-full mb-10 text-sm font-light tracking-widest md:absolute bottom-10 text-white/70 space-x-5 font-ubuntu [&>li]:flex [&>li]:items-center [&>li]:cursor-pointer [&>li]:transition-all md:justify-start md:mb-0'>
      <li className=' hover:text-white'>
        <a href='https://www.tiktok.com/@gabryshh?is_from_webapp=1&sender_device=pc'>TIKTOK</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.instagram.com/gabryswronka/?hl=en'>INSTAGRAM</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://twitter.com/GabrysWronka'>TWITTER</a>
        <FiArrowUpRight />
      </li>
      <li className=' hover:text-white'>
        <a href='https://www.instagram.com/gabryshia/'>DRAG</a>
        <FiArrowUpRight />
      </li>
    </ul>
  )
}
