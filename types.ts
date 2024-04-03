import { type } from "os";

export interface TeamCard {
    banner?: string; // For dynamic use we can shift to use URL here!
    name?: string; // Team name
    noOfEvents?: number;
    sport?: SportType;
    cardType: CardType.TEAM;
}

export interface TicketCard {
    id?: number;
    imageUrl?: string;
    team?: string;
    venue?: string;
    time?: string;
    date?: string;
    weekday?: string;
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
