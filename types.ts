import { type } from "os";

export interface TeamCard {
    banner?: string; // For dynamic use we can shift to use URL here!
    name?: string; // Team name
    noOfEvents?: number;
    sport?: SportType;
    cardType: CardType.TEAM;
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
    cardType: CardType.AD;
}

export enum SportType {
    BASEBALL = "Baseball",
    ICE_HOCKEY = "Ice Hockey",
    // Add more as needed
}

export enum CardType {
    TEAM = "teamCard",
    AD = "advertisementCard",
}
