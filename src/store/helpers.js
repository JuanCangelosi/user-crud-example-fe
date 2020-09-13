import Vue from 'vue';

export const getStatus = (state) => (actionName) => {
    return state.status[actionName] || {};
};

export const isStatus = (state) => (actionName, statusToCheck) => {
    if (state.status[actionName]) {
        return state.status[actionName].status === statusToCheck;
    }
    return false;
};


export function changeState(state, { actionName, changeProperties, status }) {
    Vue.set(state.status, actionName, status);
    Object.entries(changeProperties)
        .forEach(([name, value]) => {
            Vue.set(state, name, value)
        })
}