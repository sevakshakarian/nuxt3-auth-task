export default defineAppConfig({
    ui: {
        button: {
            rounded: 'rounded-full',
            defaultVariants: {
                color: 'blue',
                variant: 'solid',
                size: 'md',
            },
            size: {
                xs: 'px-3 py-1 text-xs gap-1',
                sm: 'px-4 py-1.5 text-sm gap-1.5',
                md: 'px-5 py-2 text-base gap-2',
                lg: 'px-6 py-2.5 text-lg gap-2.5',
                xl: 'px-8 py-3 text-xl gap-3',
            },
            base: 'rounded-full font-semibold',
            color: {
                blue: {
                    solid: 'bg-[#0073bc] text-white hover:bg-[#0063a3]',
                },
                white: {
                    solid: 'bg-white text-black hover:bg-gray-100',
                },
            },
        },

        input: {
            defaultVariants: {
                size: 'md',
            },
            size: {
                xs: 'text-xs px-3 py-1',
                sm: 'text-sm px-4 py-2',
                md: 'text-base px-5 py-2.5',
                lg: 'text-lg px-6 py-3',
                xl: 'text-xl px-7 py-4',
            },
            base: 'bg-gray-50 border border-gray-200 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
            variants: {
                error: 'border-red-500 bg-red-50 text-red-700 placeholder-red-400 focus:ring-red-500 focus:border-red-500',
            },
        }



    },
})