import Image from "next/image";
import headerImage from "@/public/images/header.webp";
import ApplyButton from "@/components/shared/apply-button";

function Header() {
  return (
    <section
      id="header"
      className="relative flex items-center justify-center w-full h-[70dvh] md:h-[85dvh] bg-black"
    >
      <Image
        fill
        src={headerImage}
        alt="header_image"
        className="absolute h-full w-full object-cover brightness-75"
      />
      <div className="absolute max-w-4xl flex items-center flex-col space-y-5 md:space-y-7">
        <h2 className="text-center text-white text-3xl md:text-6xl font-black">
          Nursing and Midwifery Training College, Kumasi
        </h2>
        <ApplyButton />
      </div>
    </section>
  );
}

export default Header;
