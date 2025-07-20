'use client';
import Nav from "./components/nav";
import { ViewTransitions } from 'next-view-transitions';

export default function TransitionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransitions>
            <div id="transitions">
                <Nav />
                <main>{children}</main>
            </div>
        </ViewTransitions>
    );


}

