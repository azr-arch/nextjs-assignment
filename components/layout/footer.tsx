import { Logo } from "../logo";

export const Footer = () => {
    return (
        <footer className="h-[546px] px-[80px] py-[40px] flex items-center">
            <Logo />

            <div className="pt-[21px] px-[156px] grid grid-cols-4">
                <div>
                    <b>Lorem ipsum</b>

                    <p>Lorem ipssum</p>
                </div>
            </div>
        </footer>
    );
};
