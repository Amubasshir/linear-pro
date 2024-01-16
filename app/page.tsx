/* eslint-disable @next/next/no-img-element */
import Container from '@/components/Container';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way <br /> to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development. <br />{' '}
              Streamline issues, sprints, and product road maps.
            </HeroSubtitle>
            <Image
              src="/hero.webp"
              alt="Hero Image"
              width={1200}
              height={900}
            />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
