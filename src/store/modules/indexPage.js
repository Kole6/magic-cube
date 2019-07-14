const state = {
    Collapse: false,
}
const actions = {
    actionExample({
        commit,
        state
    }, payload) {

    },
}
const mutations = {
    updateCollapse(state, collapse) {
        state.Collapse = collapse;
    },
}


export default {
    state,
    actions,
    mutations
}