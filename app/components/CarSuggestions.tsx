"use client";

import {
    Car,
    Clock,
    MapPinned,
    Bus,
    Package,
} from "lucide-react";

export default function Suggestions() {
    const items = [
        {
            title: "Ride",
            text: "Go anywhere with us. Request a ride, hop in, and go.",
            icon: <Car className="w-14 h-14 text-blue-600" />,
        },
        {
            title: "Reserve",
            text: "Reserve your ride in advance so you can relax on the day of your trip.",
            icon: <Clock className="w-14 h-14 text-purple-600" />,
        },
        {
            title: "Intercity",
            text: "Get convenient, affordable outstation cabs anytime at your door.",
            icon: <MapPinned className="w-14 h-14 text-green-600" />,
        },
        {
            title: "Shuttle",
            text: "Lower-cost shared rides on professionally driven buses.",
            icon: <Bus className="w-14 h-14 text-orange-600" />,
        },
        {
            title: "Courier",
            text: "We make same-day item delivery easier than ever.",
            icon: <Package className="w-14 h-14 text-red-600" />,
        },
    ];

    return (
        <section className="px-5 md:px-16 lg:px-28 py-12">
            <h2 className="text-4xl font-bold mb-10">Suggestions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-all p-6 rounded-2xl shadow-sm hover:shadow-md"
                    >
                        {/* Text Content */}
                        <div className="max-w-[60%]">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.text}</p>

                            <button className="px-5 py-2 bg-white rounded-full font-medium shadow hover:shadow-md">
                                Details
                            </button>
                        </div>

                        {/* Icon Box */}
                        <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] flex items-center justify-center">
                            <div className="p-4 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
