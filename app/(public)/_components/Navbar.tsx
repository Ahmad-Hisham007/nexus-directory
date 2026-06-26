import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-8 py-3 border-b border-base-300 transition-colors duration-300">
      <div className="flex-1">
        <Link href="/" className="flex items-center gap-2">
          {/* Using your existing logo */}
          <Image
            src="/nexus-directory-logo.png"
            alt="Nexus Directory"
            width={140}
            height={45}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:flex gap-6 mr-6 font-medium text-base-content/80">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/explore" className="hover:text-primary transition-colors">
          Explore
        </Link>
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
      </div>

      <div className="flex-none gap-4">
        {/* Sign In routes to the Container.tsx page we just perfected */}
        <Link
          href="/login"
          className="btn btn-primary rounded-full px-8 text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0 hover:scale-105 transition-transform"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
