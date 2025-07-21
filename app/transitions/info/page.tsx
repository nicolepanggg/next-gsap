import { CreateMetadata } from '../components/createMetadata';
import InfoTransitions from './../components/InfoTransitions';

export const metadata = CreateMetadata({
    title: 'Information',
    description: 'Welcome to the Information page.',
    keywords: 'GSAP, Home Page, Transitions, Project, Information',
});

const Info = () => {
    return (
        <InfoTransitions/>
    )
}

export default Info;