import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/header";

type Props = {
    children: React.ReactNode;
}

const layout = ({ children }: Props) => {
    return (
        <>
            <Header></Header>
            <main className="px-3 lg:px-14">
                {children}
                <Analytics />
            </main>
        </>
    )
}

export default layout;