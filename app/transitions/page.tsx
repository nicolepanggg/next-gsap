import { unstable_ViewTransition as ViewTransition } from 'react';
import Nav from "./components/nav";

export default function transitions() {
    return (
        <>
            <Nav />
            <div className="transitions-home">
                {/* <ViewTransition></ViewTransition> */}
                <h1>Coffee</h1>
            </div>
        </>);
}