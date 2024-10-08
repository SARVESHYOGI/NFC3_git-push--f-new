import React, { ReactNode } from "react";
import { Metadata } from "next";
import { MPProvider } from "@/context/MPContext";

export const metadata: Metadata = {
    title: "Protected",
    description: "Protected Route Layout",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <MPProvider>
            {children}
        </MPProvider>
    )
}

export default RootLayout;