import { CreateMetadata } from '../components/createMetadata';

export const metadata = CreateMetadata({
  title: 'Project',
  description: 'Welcome to the Project page.',
  keywords: 'GSAP, Home Page, Transitions, Project, Information',
});

const Projrcts = () => {
    return (
        <>
            <div className="project">
                <div className="images">
                    <img src="/img-1.jpg" alt="" />
                    <img src="/img-2.jpg" alt="" />
                    <img src="/img-3.jpg" alt="" />
                    <img src="/img-4.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Projrcts