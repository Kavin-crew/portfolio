import Image from "next/image";

export default function Images({ src, alt, translateY = 200 }) {
  return (
    <div className="relative h-20 w-full  rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60">
      <Image
        key={alt}
        src={src}
        alt={alt}
        width={500}
        height={500}
        style={{ "--ty": `${translateY}px` }}
        className={`absolute w-full h-fit transition-transform duration-2500 hover:translate-y-[calc(-1*var(--ty))]`}
      />
    </div>
  );
}
