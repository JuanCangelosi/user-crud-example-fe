import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { userService } from '@/services/user.service';
import { changeState, getStatus, isStatus } from '@/store/helpers';


const state = {
    status: {},
    currentUser: {},
    users: []
};

const getters = {
    getStatus,
    isStatus
}

const actions = {
    async getUsers({ commit }) {
        commit('changeState', {
            actionName: 'getUsers',
            changeProperties: {
                users: [],
            },
            status: { status: 'pending' }
        });
        try {
            const users = await userService.getUsers();
            commit('changeState', {
                actionName: 'getUsers',
                changeProperties: {
                    users,
                },
                status: { status: 'success' }
            });
        } catch (error) {
            commit('changeState', {
                actionName: 'getUsers',
                changeProperties: {
                    users: [],
                },
                status: { status: 'error', error: error }
            });
        }

    },
    async postUser({ commit, dispatch }, { user }) {
        commit('changeState', {
            actionName: 'postUser',
            changeProperties: {},
            status: { status: 'pending' }
        });
        try {
            const userPosted = await userService.postUser(user);
            commit('changeState', {
                actionName: 'postUser',
                changeProperties: {},
                status: { status: 'success' }
            });
            dispatch('getUsers');
        } catch (error) {
            commit('changeState', {
                actionName: 'postUser',
                changeProperties: {},
                status: { status: 'error', error: error }
            });
        }
    },
    async putUser({ commit, dispatch }, { user }) {
        commit('changeState', {
            actionName: 'putUser',
            changeProperties: {},
            status: { status: 'pending' }
        });
        try {
            const userEdited = await userService.putUser(user._id, {firstName: user.firstName, lastName: user.lastName});
            commit('changeState', {
                actionName: 'putUser',
                changeProperties: {},
                status: { status: 'success' }
            });
            dispatch('getUsers');
        } catch (error) {
            commit('changeState', {
                actionName: 'putUser',
                changeProperties: {},
                status: { status: 'error', error: error }
            });
        }
    },
    async deleteUser({ commit, dispatch }, { user }) {
        commit('changeState', {
            actionName: 'deleteUser',
            changeProperties: {},
            status: { status: 'pending' }
        });
        try {
            const userDeleted = await userService.deleteUser(user._id);
            commit('changeState', {
                actionName: 'deleteUser',
                changeProperties: {},
                status: { status: 'success' }
            });
            dispatch('getUsers');
        } catch (error) {
            commit('changeState', {
                actionName: 'deleteUser',
                changeProperties: {},
                status: { status: 'error', error: error }
            });
        }
    },
};

const mutations = {
    changeState
};

export const user = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};