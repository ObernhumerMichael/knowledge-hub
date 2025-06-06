import { type PrismTheme } from 'prism-react-renderer';

// Catppuccin color palettes
const colorSchemes = {
    latte: {
        base: '#eff1f5',
        text: '#4c4f69',
        rosewater: '#dc8a78',
        flamingo: '#dd7878',
        pink: '#ea76cb',
        mauve: '#8839ef',
        red: '#d20f39',
        maroon: '#e64553',
        peach: '#fe640b',
        yellow: '#df8e1d',
        green: '#40a02b',
        teal: '#179299',
        sky: '#04a5e5',
        sapphire: '#209fb5',
        blue: '#1e66f5',
        lavender: '#7287fd',
        subtext0: '#6c6f85',
        overlay1: '#9ca0b0',
        overlay2: '#8c8fa1',
        mantle: '#e6e9ef',
        crust: '#dce0e8',
    },
    frappe: {
        base: '#303446',
        text: '#c6d0f5',
        rosewater: '#f2d5cf',
        flamingo: '#eebebe',
        pink: '#f4b8e4',
        mauve: '#ca9ee6',
        red: '#e78284',
        maroon: '#ea999c',
        peach: '#ef9f76',
        yellow: '#e5c890',
        green: '#a6d189',
        teal: '#81c8be',
        sky: '#99d1db',
        sapphire: '#85c1dc',
        blue: '#8caaee',
        lavender: '#babbf1',
        subtext0: '#a5adce',
        overlay1: '#838ba7',
        overlay2: '#949cbb',
        mantle: '#292c3c',
        crust: '#232634',
    },
    macchiato: {
        base: '#24273a',
        text: '#cad3f5',
        rosewater: '#f4dbd6',
        flamingo: '#f0c6c6',
        pink: '#f5bde6',
        mauve: '#c6a0f6',
        red: '#ed8796',
        maroon: '#ee99a0',
        peach: '#f5a97f',
        yellow: '#eed49f',
        green: '#a6da95',
        teal: '#8bd5ca',
        sky: '#91d7e3',
        sapphire: '#7dc4e4',
        blue: '#8aadf4',
        lavender: '#b7bdf8',
        subtext0: '#b8c0e0',
        overlay1: '#939ab7',
        overlay2: '#a5adcb',
        mantle: '#1e2030',
        crust: '#181926',
    },
    mocha: {
        base: '#1e1e2e',
        text: '#cdd6f4',
        rosewater: '#f5e0dc',
        flamingo: '#f2cdcd',
        pink: '#f5c2e7',
        mauve: '#cba6f7',
        red: '#f38ba8',
        maroon: '#eba0ac',
        peach: '#fab387',
        yellow: '#f9e2af',
        green: '#a6e3a1',
        teal: '#94e2d5',
        sky: '#89dceb',
        sapphire: '#74c7ec',
        blue: '#89b4fa',
        lavender: '#b4befe',
        subtext0: '#a6adc8',
        overlay1: '#7f849c',
        overlay2: '#9399b2',
        mantle: '#181825',
        crust: '#11111b',
    },
};

const createTheme = (colors: typeof colorSchemes.latte): PrismTheme => ({
    plain: {
        color: colors.text,
        backgroundColor: colors.mantle,
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: colors.overlay1,
                fontStyle: 'italic',
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: colors.subtext0,
            },
        },
        {
            types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
            style: {
                color: colors.red,
            },
        },
        {
            types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
            style: {
                color: colors.green,
            },
        },
        {
            types: ['operator', 'entity', 'url'],
            style: {
                color: colors.peach,
            },
        },
        {
            types: ['atrule', 'attr-value', 'keyword'],
            style: {
                color: colors.mauve,
            },
        },
        {
            types: ['function', 'class-name'],
            style: {
                color: colors.blue,
            },
        },
        {
            types: ['regex', 'important', 'variable'],
            style: {
                color: colors.peach,
            },
        },
        {
            types: ['title'],
            style: {
                color: colors.blue,
                fontWeight: 'bold',
            },
        },
        {
            types: ['parameter'],
            style: {
                color: colors.teal,
            },
        },
        {
            types: ['script'],
            style: {
                color: colors.text,
            },
        },
        {
            types: ['arrow', 'rule'],
            style: {
                color: colors.mauve,
            },
        },
        {
            types: ['font-matter'],
            style: {
                color: colors.peach,
            },
        },
        {
            types: ['maybe-class-name'],
            style: {
                color: colors.teal,
            },
        },
    ],
});

// Create all themes
export const latte = createTheme(colorSchemes.latte);
export const frappe = createTheme(colorSchemes.frappe);
export const macchiato = createTheme(colorSchemes.macchiato);
export const mocha = createTheme(colorSchemes.mocha);