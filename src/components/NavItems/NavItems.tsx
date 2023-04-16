import { Link } from 'react-router-dom';
import { navLinks } from '../../contants'
import { useState } from 'react';

export function NavItems({ isSmallDevice }: { isSmallDevice?: boolean }) {
  const [active, setActive] = useState('')

  return (
    <ul className={'list none hidden sm:flex flex-row gap-10'}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`
        ${active === link.id ? 'text-white' : 'text-secondary'} 
        cursor-pointer hover:text-white text-[18px] font-medium`}
        >
          <Link to={link.id} onClick={() => {
            setActive(link.id)
            window.scrollTo(0, 0)
          }}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
