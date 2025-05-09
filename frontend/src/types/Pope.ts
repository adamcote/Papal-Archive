export interface Pope {
    id: number;
    name: string;
    regnalName: string;
    birthName: string;
    birthDate: string;
    deathDate: string;
    papacyStart: string;
    papacyEnd: string;
    birthPlace: string;
    deathPlace: string;
    biography: string;
    notableEvents: string[];
    imageUrl?: string;
    predecessor?: string;
    successor?: string;
} 