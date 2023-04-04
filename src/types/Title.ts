
export type TitleWithoutId = Omit<Title, "id">;


export type Title = {
    id: string;
    title: string;
    artist: string;
    genre: string;
    year: number;
    duration: number;
    popularity: number;
}


