export const ShowcaseSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="relative  w-full h-full py-5">
            <div className="flex flex-col-reverse md:flex-row shadow-2xl gap-8 gradient-border p-4">
                {children}
            </div>
        </section>
    );
};
