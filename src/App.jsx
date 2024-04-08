import { useState } from 'react'
import './App.css'
import angela from "./assets/images/angela.webp"
import anna from "./assets/images/anna.webp"
import chess from "./assets/images/chess.webp"
import jacob from "./assets/images/jacob.webp"
import kimberly from "./assets/images/kimberly.webp"
import nathan from "./assets/images/nathan.webp"
import rizky from "./assets/images/rizky.webp"
import mark from "./assets/images/mark.webp"

function App() {
  const [unreadCount, setUnreadCount] = useState(3)

  return (
    <>
      <div className="container md:w-[40%] w-full md:h-fit md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 m-auto rounded-xl p-4 pb-0 bg-white md:shadow-xl">
        <header>
          <div className="notifi-header flex justify-between">
            <h1 className='text-2xl font-bold flex gap-2'>Notifications <div className='inline-block text-lg h-fit px-3 rounded-md bg-[#0a317b] text-white'>{unreadCount}</div></h1>
            <p onClick={() => setUnreadCount(null)} className='text-sm text-slate-400 hover:text-[#0a317b] cursor-pointer pl-2 md:pl-0'>Mark all as read</p>
          </div>
        </header>

        <main className='mt-4'>
          <div className="notifi-main flex flex-col gap-2">
            <div className={`notifiReact flex gap-4 text-[#5e6778] text-sm p-3 ${unreadCount?'bg-blue-50 rounded-md':''}`}>
              <img className='w-11 h-11 cursor-pointer' src={mark} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Mark Webber</span> reacted to your recent post <span className='font-bold hover:text-[#0a317b] cursor-pointer'>My first tournament today! <svg className={`w-1.5 h-1.5 ${unreadCount?'inline-block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f65351" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg></span></p>
                <p className='text-[#939dae]'>1m ago</p>
              </div>
            </div>

            <div className={`notifiFollow flex gap-4 text-[#5e6778] text-sm p-3 ${unreadCount?'bg-blue-50 rounded-md':''} rounded-md`}>
              <img className='w-11 h-11 cursor-pointer' src={angela} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Angela Gray</span> followed you <svg className={`w-1.5 h-1.5 ${unreadCount?'inline-block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f65351" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg></p>
                <p className='text-[#939dae]'>5m ago</p>
              </div>
            </div>

            <div className={`notifiJoined flex gap-4 text-[#5e6778] text-sm p-3 ${unreadCount?'bg-blue-50 rounded-md':''} rounded-md`}>
              <img className='w-11 h-11 cursor-pointer' src={jacob} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Jacob Thompson</span> has joined your group <span className='font-bold hover:text-[#0a317b] cursor-pointer'>Chess Club <svg className={`w-1.5 h-1.5 ${unreadCount?'inline-block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f65351" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg></span></p>
                <p className='text-[#939dae]'>1day ago</p>
              </div>
            </div>

            <div className="notifiMsg flex gap-4 text-[#5e6778] text-sm p-3 rounded-md">
              <img className='w-11 h-11 cursor-pointer' src={rizky} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Rizky Hasanuddin</span> sent you a private message</p>
                <p className='text-[#939dae]'>5 days ago</p>
                <ul className='border-2 p-4 rounded-md mt-3 hover:bg-blue-100 cursor-pointer'>
                  <li>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</li>
                </ul>
              </div>
            </div>

            <div className="notifiComment flex text-[#5e6778] text-sm p-3 rounded-md justify-between">
              <div className="comment flex gap-4">
                <img className='w-11 h-11 cursor-pointer' src={kimberly} alt="mark" />
                <div className="react">
                  <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Kimberly Smith</span> commented on your picture</p>
                  <p className='text-[#939dae]'>1 week ago</p>
                </div>
              </div>
              <div className="commentImg">
                <img className='w-11 h-11 cursor-pointer ml-1' src={chess} alt="" />
              </div>
            </div>

            <div className="notifiReact flex gap-4 text-[#5e6778] text-sm p-3 rounded-md">
              <img className='w-11 h-11 cursor-pointer' src={nathan} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Nathan Peterson</span> reacted to your recent post <span className='font-bold'>5 end-game strategies to increase your win rate</span></p>
                <p className='text-[#939dae]'>2 weeks ago</p>
              </div>
            </div>

            <div className="notifiLeft flex gap-4 text-[#5e6778] text-sm p-3 pb-2 rounded-md">
              <img className='w-11 h-11 cursor-pointer' src={anna} alt="mark" />
              <div className="react">
                <p><span className='font-bold text-black hover:text-[#0a317b] cursor-pointer'>Anna Kim</span> left the group <span className='font-bold hover:text-[#0a317b] cursor-pointer'>Chess Club</span></p>
                <p className='text-[#939dae]'>2 weeks ago</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
