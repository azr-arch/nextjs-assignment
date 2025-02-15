"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfoCardPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("hasSeenInfoPopup");
        if (!hasSeenPopup) {
            setIsOpen(true);
            localStorage.setItem("hasSeenInfoPopup", "true");
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
                <CardHeader className="text-2xl relative">
                    <CardTitle className="font-heading">Welcome to the project demo!</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={closePopup}
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardFooter>
                    <Button onClick={closePopup} className="w-full">
                        Got it!
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
