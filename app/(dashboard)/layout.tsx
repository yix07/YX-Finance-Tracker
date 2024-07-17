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
            </main>
        </>
    )
}

export default layout;