export interface TeamCard {
    banner?: string; // For dynamic use we can shift to use URL here!
    name?: string; // Team name
    noOfEvents?: number;
    sport?: SportType;
}

export interface TicketCard {
    banner?: string;
    name?: string;
    dateTime?: string;
    venue?: string;
}

export interface AdCard {
    banner?: string;
    title?: string;
    description?: string;
}

export enum SportType {
    baseball = "Baseball",
    iceHocker = "Ice Hockey",
    // Add more as needed
}
