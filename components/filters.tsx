"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import { useState } from "react";

const colors = [
    { name: 'Red', value: 'red', hex: '#FF0000' },
    { name: 'Blue', value: 'blue', hex: '#0000FF' },
    { name: 'Green', value: 'green', hex: '#008000' },
    { name: 'Yellow', value: 'yellow', hex: '#FFFF00' },
    { name: 'Purple', value: 'purple', hex: '#800080' },
    { name: 'Orange', value: 'orange', hex: '#FFA500' },
    { name: 'Pink', value: 'pink', hex: '#FFC0CB' },
    { name: 'Teal', value: 'teal', hex: '#008080' },
    { name: 'Brown', value: 'brown', hex: '#A52A2A' },
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'White', value: 'white', hex: '#FFFFFF' },
    { name: 'Gray', value: 'gray', hex: '#808080' },
    { name: 'Light Blue', value: 'light-blue', hex: '#ADD8E6' },
    { name: 'Dark Green', value: 'dark-green', hex: '#006400' },
    { name: 'Gold', value: 'gold', hex: '#FFD700' },
];

export default function Filters() {

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="my-10">
            <div className="flex justify-end">
                <Button onClick={() => setShowFilters(!showFilters)}>
                    <ListFilter /> Filters
                </Button>
            </div>
            {
                showFilters && (
                    <div className="flex justify-between gap-4 my-4">
                        <Select>
                            <SelectTrigger className="max-w-64">
                                <SelectValue placeholder="All Orientations" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="all-orientations">All Orientations</SelectItem>
                                    <SelectItem value="horizontal">Horizontal</SelectItem>
                                    <SelectItem value="vertical">Vertical</SelectItem>
                                    <SelectItem value="square">Square</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="max-w-64">
                                <SelectValue placeholder="All Sizes" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="all-sizes">All Sizes</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="small">Small</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="max-w-64">
                                <SelectValue placeholder="Enter hex Code" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        colors.map(({ name, hex, value }) => (
                                            <SelectItem key={value} value={value}>
                                                <div className="flex gap-4 items-center">
                                                    <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: hex }}></div>
                                                    <span> {name}</span>
                                                </div>
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                )
            }
        </div>
    )
}