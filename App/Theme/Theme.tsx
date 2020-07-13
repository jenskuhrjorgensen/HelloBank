interface Typography {
    fontSize: number,
}

interface Theme {
    typographies: {
        h1: Typography,
        h2: Typography,
        subtitle1: Typography,
        body1: Typography,
    },
    spacings: {
        s: number,
        m: number,
        l: number,
    }
}

const DefaultTheme = {
    typographies: {
        h1: {
            fontSize: 18,
            fontWeight: "bold",
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
    },
    spacings: {
        s: 4,
        m: 12,
        l: 20,
    }
}

export function getTheme(): Theme {
    return DefaultTheme
}
