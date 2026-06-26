import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 border-t border-base-300 pt-16 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 footer text-base-content">
        <aside className="max-w-xs space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/nexus-directory-favico.png"
              alt="Nexus Directory"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-2xl font-semibold">NEXUS</span>
          </Link>
          <p className="text-base-content/70 text-sm">
            Nexus Directory Ltd.
            <br />
            Connecting businesses with top-tier professionals seamlessly since
            2026.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              <FaFacebookF />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title text-base-content">Services</h6>
          <Link href="#" className="link link-hover text-base-content/70">
            Web Development
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Design & Branding
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Digital Marketing
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            SEO Optimization
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-base-content">Company</h6>
          <Link href="#" className="link link-hover text-base-content/70">
            About us
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Contact
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Jobs
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-base-content">Legal</h6>
          <Link href="#" className="link link-hover text-base-content/70">
            Terms of use
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Privacy policy
          </Link>
          <Link href="#" className="link link-hover text-base-content/70">
            Cookie policy
          </Link>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-base-300 text-center text-sm text-base-content/50">
        <p>
          © {new Date().getFullYear()} Nexus Directory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
