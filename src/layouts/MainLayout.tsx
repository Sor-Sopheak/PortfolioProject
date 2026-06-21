import Navbar from "../components/Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-bg-white text-text-main">
            <Navbar />
            <div className="pt-20">
                {children}
            </div>
        </div>
    );
}