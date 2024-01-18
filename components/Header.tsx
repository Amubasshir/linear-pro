import Link from 'next/link';
import Container from './Container';
import { Logo } from './icons/logo';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-transparent-white">
      <Container className="flex h-[var(--navigation-height)]">
        <Link href="/" className="flex items-center text-lg font-semibold">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-2" /> Linear
        </Link>
        <nav className="h-full">
          <ul className="flex items-center pt-[2px] h-full [&_a]:text-sm [&_li]:ml-6">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Methods</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center h-full">
          <Link className="text-sm ml-6" href="/">
            Log in
          </Link>
          <Link className="text-sm ml-6" href="/">
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
