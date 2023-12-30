import vituum from 'vituum'
import tailwindcss from 'tailwindcss'
import posthtml from 'posthtml'

export default {
    plugins: [
        vituum(), tailwindcss(), posthtml({
            root: './src'
        })
    ]
}