import { ReactNode } from "react";



export default function ImgWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
            {children}
        </div>
    )
}