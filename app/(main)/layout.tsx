export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen bg-main dark:bg-darkMain py-16 px-4 ">{children}</main>
    );
}
