export const APPLY_FILTER = 'APPLY_FILTER'
export const OPEN_MODAL = 'OPEN_MODAL'

export function applyFilter(filter) {
    return {
        type: APPLY_FILTER,
        filter
    }
}

export function toggleFilterModal() {
    return {
        type: OPEN_MODAL
    }
}

const INITIAL_STATE = {
    filter: {
        searchState: {},
        refinementList: {}
    },
    isOpen: false
}

export function algoliaFilter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case APPLY_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            })
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isOpen: !state.isOpen
            })
        default:
            return state
    }
}