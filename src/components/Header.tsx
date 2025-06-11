import { FC } from "react";
import logoImgLight from '../assets/logos/ose_logo_icon.svg';

const Header: FC = () => {
    return (
        <div className="flex items-center justify-between px-8 py-5">
            <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto mr-14 text-neutral">
                        <a href="/" className="flex items-center"><img
                            src={logoImgLight} alt="Logo"
                            className="h-[2em] mr-2"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;