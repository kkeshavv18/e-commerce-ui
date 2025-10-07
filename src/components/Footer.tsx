import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 md:justify-between p-8 rounded-lg gap-8 md:gap-0 ">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            TRENDLAMA.
          </p>
        </Link>
        <p className="text-sm text-gray-400">@ 2025 Trendlama.</p>
        <p className="text-sm text-gray-400">All rights reserved</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-start text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">HomePage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Piracy Policy</Link>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-start text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-start text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Piracy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
