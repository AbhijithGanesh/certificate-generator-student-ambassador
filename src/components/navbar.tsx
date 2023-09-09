import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

export default function NavbarComponent(): JSX.Element {
  return (
    <nav className="px-2 py-4 mx-4 h-16 flex justify-between items-center border-b-secondary border-b-2">
      <a href="./">
          <section className="text-secondary font-extrabold text-2xl p-2 hover:bg-sky-100 rounded-md tracking-tight">CertifyGen</section>
      </a>
      <section>
        <a href="https://github.com/AbhijithGanesh/certificate-generator-student-ambassador/" target="__blank">
            <button className="sm:hidden rounded-md text-lg font-semibold flex items-center gap-2 text-white bg-secondary p-2 hover:shadow-sm hover:shadow-primary">
              <section>
                  <AiOutlineStar className='text-xl' />
              </section>
              <section>Star us on GitHub</section>
            </button>
            <button className="hidden sm:flex bg-secondary p-2 rounded-md text-white">
              <section>
                  <AiOutlineHeart className='text-xl' />
              </section>
            </button>
        </a>
      </section>
    </nav>
  );
};
