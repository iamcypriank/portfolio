import { Outlet, NavLink, Link} from "react-router-dom";
import Education from "./EducationCard";
import Button from "./Button";



export default function Navbar() {
  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-300">
        <Link to="/"><h1 className="font-bold">Cyprian Kujur</h1></Link>
        <nav className="flex gap-6 font-medium items-center">
          <NavLink to="/" className={({ isActive })=> isActive ? 'text-black underline underline-offset-4 decoration-2' : 'text-font-secondary-light hover:underline hover:text-black underline-offset-4 decoration-2' } >About</NavLink>
          <NavLink to="/projects" className={({ isActive })=> isActive ? 'text-black  underline underline-offset-4 decoration-2' : 'text-font-secondary-light hover:underline hover:text-black underline-offset-4 decoration-2' }>Projects</NavLink>
          <Button onClick={(()=>{

            const link = document.createElement('a');
            link.href="/vite.svg";
            link.download="'vite logo";
            link.click();
          })} to="/resume">Resume</Button>
        </nav>
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
