interface Typography {
    fontSize: number,
}

interface Theme {
    typographies: {
        h1: Typography,
        h2: Typography,
        subtitle1: Typography,
        body1: Typography,
    }
}

const DefaultTheme = {
    typographies: {
        h1: {
            fontSize: 20,
        },
        h2: {
            fontSize: 18,
        },
        subtitle1: {
            fontSize: 16,
        },
        body1: {
            fontSize: 14,
        },
    }
}

export function getTheme(): Theme {
    return DefaultTheme
}
