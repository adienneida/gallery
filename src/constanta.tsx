//This interface is used to define schema color information
export interface IColor {
    hex: string;
    removable: boolean;
    red?: number,
    green?: number,
    blue?: number,
    saturation?: number;
}

//Define default colors
export const Colors: IColor[] = [
    {
        hex: '#1ABC9C',
        removable: false
    },
    {
        hex: '#2ECC71',
        removable: false
    },
    {
        hex: '#3498DB',
        removable: false
    },
    {
        hex: '#9B59B6',
        removable: false
    },
    {
        hex: '#34495E',
        removable: false
    },
    {
        hex: '#16A085',
        removable: false
    },
    {
        hex: '#27AE60',
        removable: false
    },
    {
        hex: '#2980B9',
        removable: false
    },
    {
        hex: '#8E44AD',
        removable: false
    },
    {
        hex: '#2C3E50',
        removable: false
    },
    {
        hex: '#F1C40F',
        removable: false
    },
    {
        hex: '#E67E22',
        removable: false
    },
    {
        hex: '#E74C3C',
        removable: false
    },
    {
        hex: '#ECF0F1',
        removable: false
    },
    {
        hex: '#95A5A6',
        removable: false
    },
    {
        hex: '#F39C12',
        removable: false
    },
    {
        hex: '#D35400',
        removable: false
    },
    {
        hex: '#C0392B',
        removable: false
    },
    {
        hex: '#BDC3C7',
        removable: false
    },
    {
        hex: '#7F8C8D',
        removable: false
    }
]