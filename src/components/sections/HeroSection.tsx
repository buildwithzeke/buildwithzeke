import Image from 'next/image';


export function HeroSection() {
  return (
    <section id="home" className="section-grid min-h-[680px] items-center pb-10 pt-14 md:pt-20">
      <div className="relative z-10 max-w-xl">
        <p className="eyebrow">Hi, I&apos;m</p>
        <h1 className="mt-3 text-5xl font-black leading-[.95] tracking-normal md:text-7xl">
          Ayebidun
          <br />
          Ezekiel<span className="text-[#20e0b0]">.</span>
        </h1>
        <p className="mt-6 text-xl font-semibold leading-8 text-[var(--text)]">
          Software Engineer, Mentor & Founder building digital solutions and empowering future developers.
        </p>
        <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
          I help businesses build their digital presence through websites and software solutions while mentoring aspiring developers to grow their skills and careers.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#connect" className="btn-primary">
            Work With Me <span>&rarr;</span>
          </a>
          <a href="#mentorship" className="btn-ghost">
            Book Mentorship
          </a>
        </div>
      </div>
      <div className="relative min-h-[390px]">
        <div className="absolute right-4 top-6 hidden text-[16rem] font-black leading-none text-[var(--brand-ghost)] md:block">
          DZ
        </div>
        <div className="arrow-shape" />
        <Image
          src="/brand/hero-person.png"
          alt="Ayebidun Ezekiel"
          width={282}
          height={290}
          priority
          className="relative z-10 ml-auto mt-12 w-full max-w-[360px] object-contain drop-shadow-2xl"
        />
        <div className="founder-card">
          <Image src="/brand/logo-mark.png" alt="" width={70} height={21} />
          <span>Founder of DEVZEKE</span>
        </div>
      </div>
    </section>
  );
}