import { Outlet, NavLink, Link} from "react-router-dom";
import Education from "./EducationCard";
import Button from "./Button";
import { X, Menu } from "lucide-react";
import { useRef, useState } from "react";



export default function Navbar() {

  const [ show, setShow ] = useState(false);
  const navRef = useRef(null);

  const closeMenu = ()=>{ 
    if(show){
      setShow(false);
      navRef.current.style.display="none "
    }
  }

  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="relative p-4 flex justify-between items-center border-b border-gray-300">
        <Link to="/" onClick={closeMenu}><h1 className="font-bold">Cyprian Kujur</h1></Link>
        
        { !show &&
        <Button 
        onClick={()=>{
          setShow(true);
          navRef.current.style.display="flex"
  
        }}
        customStyle="sm:hidden text-medium" >
          <Menu />
        </Button>
        }

        <nav 
        ref={navRef} 
        className="hidden max-sm:flex-col max-sm:w-full border-gray-200 max-sm:top-17 max-sm:right-0 max-sm:items-center max-sm:absolute sm:flex gap-6 max-sm:p-4 max-sm:border-b bg-bg-primary-light font-medium items-center">
          
          <NavLink to="/" 
          onClick={closeMenu}
          className={({ isActive })=> isActive ? 'text-black underline underline-offset-4 decoration-2' : 'text-font-secondary-light hover:underline hover:text-black underline-offset-4 decoration-2' } >About</NavLink>
          
          <NavLink   to="/projects" 
          onClick={closeMenu} 
          className={({ isActive })=> isActive ? 'text-black  underline underline-offset-4 decoration-2' : 'text-font-secondary-light hover:underline hover:text-black underline-offset-4 decoration-2' }>Projects</NavLink>
          
          <Button onClick={(()=>{
            closeMenu();
            const link = document.createElement('a');
            link.href="https://drive.usercontent.google.com/u/0/uc?id=1GE6pnULEVRZ_3Mbn49TOwWtZPelGPuio&export=download";
            link.download="'vite logo";
            link.click();

          })} to="/resume">Resume</Button>
          
        </nav>
        { show && 
          <Button 
          onClick={()=>{
            setShow(false);
            navRef.current.style.display="none"
          }}
          customStyle="sm:hidden text-medium">
            <X color="black" />
          </Button>
          }
      </header>

      {/* Page Content */}
      <section className=" h-[100%]">
        <Outlet />
      </section>

      {/* Footer */}
      <footer id="contact" className="p-4 py-8 text-white bg-black border-gray-300 flex justify-center font-medium">
        <a 
  href="mailto:youremail@example.com?subject=Hello&body=Hi, I want to contact you"
  className="px-4 py-2 border border-white   bg-accent-primary text-black "
>
  Email Me
</a>
      </footer>
    </main>
  );
}
