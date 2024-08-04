import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs"
import { HeaderLogo } from "./header-logo"
import { Navigation } from "./navigation"
import { Loader2 } from "lucide-react"
import { Welcome } from "./welcome"
import { Filters } from "./filters"

export const Header = () => {
    return (
        <header className="bg-gradient-to-b from-[#00674f] to-[#00a07b] px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo></HeaderLogo>
                        <Navigation></Navigation>
                    </div>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl="/" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-slate-400"></Loader2>
                    </ClerkLoading>
                </div>
                <Welcome />
                <Filters />
            </div>
        </header>
    )
}