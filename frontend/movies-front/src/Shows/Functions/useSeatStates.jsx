import { useState } from "react";

export const useSeatStates = (numSeats) => {
    const seatStates = [];
    for (let i = 1; i <= numSeats; i++) {
        const [seat, setSeat] = useState(0);
        seatStates.push({ seat, setSeat });
    }
    return seatStates;
};
