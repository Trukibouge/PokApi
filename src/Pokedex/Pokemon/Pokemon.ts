export interface Pokemon{
    id: number;
    name: {
        english: string,
        french: string,
        japanese: string,
        chinese: string
    };
    type: String[];
    base: {
        HP: number;
        Attack: number;
        Defense: number;
        SpAttack: number;
        SpDefense: number;
        Speed: number
    }
}