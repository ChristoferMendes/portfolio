import { Link } from 'react-router-dom';
import { navLinks } from '../../contants'
import { useState } from 'react';

export function NavLinksSmallDevices({ setToggle }: { setToggle: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [active, setActive] = useState('')

  return (
    <ul className='flex justify-end items-start flex-col gap-4'>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`
        ${active === link.id ? 'text-white' : 'text-secondary'} 
        cursor-pointer hover:text-white text-[18px] font-medium`}
        >
          <Link to={link.id} onClick={() => {
            setActive(link.id)
            setToggle(prev => !prev)
          }}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
