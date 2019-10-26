import { INPUT_CHANGED } from './types'

export const onInputChange = ({name, value}) => {
    return {
        type: INPUT_CHANGED,
        payload: {
            name,
            value,
        }
    }
}