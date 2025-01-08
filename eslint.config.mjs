import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const __dirname = import.meta.dirname
const files = [
    'src/**/*.ts',
    'tests/**/*.ts'
]

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked.map(config => ({
        ...config,
        files
    })),
    tseslint.configs.stylisticTypeChecked.map(config => ({
        ...config,
        files
    })),
    {
        files,
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                projectService: true,
                tsconfigRootDir: __dirname
            }
        },
        rules: {}
    }
)
