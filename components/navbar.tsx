"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {

    const [position, setPosition] = useState("")

    return (
        <nav className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1">
            <div>
                <h1 className="text-xl">Image Gallery</h1>
            </div>
            <div className="row-start-2 col-start-1 col-end-3 mt-2 md:mt-0 md:row-start-1 md:col-start-2">
                <form className="flex gap-4 justify-center">
                    <Input type="search" required placeholder="Search for Images" className="max-w-96" />
                    <Button type="submit">Search</Button>
                </form>
            </div>
            <div className="ms-auto">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Explore</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mr-4">
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="nature">Nature</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="animals">Animals</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="travel">Travel</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="food-drink">Food & Drink</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="art-abstract">Art & Abstract</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="technology">Technology</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}