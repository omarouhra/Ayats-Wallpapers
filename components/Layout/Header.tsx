import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../Logo";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className='py-8'>
      <div className='flex items-center justify-between'>
        <Logo />
        <button
          onClick={ () => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          } }
          type='button'
          className='rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700'
          aria-label={ resolvedTheme === "light" ? "Dark Mode" : "Light Mode" }
        >
          { theme === "light" ? <MoonIcon /> : <SunIcon /> }
        </button>
      </div>
    </header>
  );
}

export default Header;
