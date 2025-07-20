import Nav from "./components/nav";

export default function TransitionsLayout({ children }: { children: React.ReactNode }) {
    return (
    <div id="transitions">
        <Nav/>
        <main>{children}</main>
    </div>
    );

}1