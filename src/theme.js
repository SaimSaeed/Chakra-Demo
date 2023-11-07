import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react"

const replaceExisting = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: "brand.500",
                },
            },
        },
    },
}
const theme = extendTheme({

    colors: {
        brand: {
            50: "#F0FFF4",
            100: "#C6F6D5",
            200: "#9AE6B4",
            300: "#68D391",
            400: "#48BB78",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532",

        },
    },
    fonts: {
        heading: `Montserrat, ${base.fonts.heading}`,
        body: "Inter",
    },
    components: {
        Input: { ...replaceExisting },
        Select: { ...replaceExisting },
        Textarea: {
            variants: {
                filled: {

                    _focus: {
                        borderColor: "brand.500",
                    },

                },
            },

        },
        Checkbox:{
            baseStyle:{
                control:{
                    _focus:{
                        ring:2,
                        ringColor:"brand.500"
                    }
                }
            }
        }

    }
},
    withDefaultColorScheme({
        colorScheme: "brand"
    }),
    withDefaultVariant({
        variant: "filled",
        components: ["Input", "Select", "Textarea"]
    })


);

export default theme;