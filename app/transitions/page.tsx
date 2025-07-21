import ReactLenis from "lenis/react";
import { CreateMetadata } from './components/createMetadata';
import Transitions from './components/HomeTransitions';

export const metadata = CreateMetadata({
    title: 'Home Page',
    description: 'Welcome to the Home page.',
    keywords: 'GSAP, Home Page, Transitions, Project, Information',
});

export default function Page() {
    return <Transitions />;
}