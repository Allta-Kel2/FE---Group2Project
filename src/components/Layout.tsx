import React, { FC } from "react";

interface LayoutProps {
    children?: React.ReactNode;
    mode?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, mode }) => {
    return (
        <div
        className={`flex min-h-screen ${mode ? "bg-black" : "bg-white"}`}
        >
        <div className="flex flex-rows w-screen">{children}</div>
        </div>
    );
};

export default Layout;