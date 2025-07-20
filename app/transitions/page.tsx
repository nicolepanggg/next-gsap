
import Nav from "./components/nav";
import { CreateMetadata } from './components/createMetadata';

export const metadata = CreateMetadata({
    title: 'Home Page',
    description: 'Welcome to the Home page.',
    keywords: 'GSAP, Home Page, Transitions, Project, Information',
});

export default function transitions() {
    return (
        <>
            <Nav />
            <div className="transitions-home">

                <h1>Coffee</h1>
            </div>
        </>);
}