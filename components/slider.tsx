import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface SliderProps {
    data?: any[];
}

export const Slider = () => {
    return (
        <div className="overflow-x-hidden w-full flex justify-between">
            <button className=" border-2 border-blueAccent w-9 h-9">
                <ChevronLeft className="w-full h-full text-blueAccent " />
            </button>

            <button className=" border-2 border-blueAccent w-9 h-9">
                <ChevronRight className="w-full h-full text-blueAccent " />
            </button>
        </div>
    );
};
