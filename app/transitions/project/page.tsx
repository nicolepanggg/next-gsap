import ReactLenis from "lenis/react";
import { CreateMetadata } from '../components/createMetadata';
import ProjectTransitions from './../components/ProjectTransitions';

export const metadata = CreateMetadata({
    title: 'Project',
    description: 'Welcome to the Project page.',
    keywords: 'GSAP, Home Page, Transitions, Project, Information',
});

const Projrcts = () => {
    return (
        <ProjectTransitions/>
    )
}

export default Projrcts