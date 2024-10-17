import Link from "next/link";
import schoolLogo from "../../public/images/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-slate-950 py-10 md:py-16">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
          <div className="bg-red-500">
            <Image src={schoolLogo} alt="logo" height={150} width={150} />
          </div>
          <div className="bg-red-500">hello</div>
          <div className="bg-red-500">hello</div>
          <div className="bg-red-500">hello</div>
          <div className="bg-red-500">hello</div>
          <div className="bg-red-500">hello</div>
        </div>
      </div>
      <div className="bg-black text-xs text-muted-foreground py-3">
        <div className="container flex-between">
          <p className="max-w-[9resmm] md:w-full">
            &copy; 2024 NMTC, Kumasi. All rights reserved.
          </p>
          <p className="text-right max-w-[9resmm] md:w-full">
            Designed &amp; built by{" "}
            <Link
              href="https://esatechgh.com"
              target="_blank"
              className="text-blue-500 underline"
            >
              EsaTech Inc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
