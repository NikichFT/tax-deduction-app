import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        popupOpen: false,
        salary: null,
        years: [],
        max: 260000,
        decrease: {
            payment: true,
            time: false
        },
        validation: false,
        POSTtoServer: []
    },
    mutations: {
        SET_SHOW_POPUP(state) {
            state.popupOpen = !state.popupOpen
        },
        SET_CLOSE_POPUP(state) {
            state.popupOpen = false
        },
        SET_VALUE_INPUT(state, value) {
            state.salary = Number(value.replace(/\s/g, '').match(/\d+/))
        },
        SET_YEARS_DEDUCTION(state) {
            const deduction = state.salary * 12 * 0.13
            const arrYears = []

            if (state.salary === 0) state.years = []

            if (state.salary) {
                if (deduction > state.max) {
                    arrYears.push({
                        value: state.max,
                        use: false
                    })
                    state.years = arrYears
                    return
                }
                for (let i = 0; i < Math.floor(state.max / deduction); i++) {
                    arrYears.push({
                        value: deduction,
                        use: false
                    })
                }
                arrYears.push({
                    value: state.max % deduction,
                    use: false
                })
                state.years = arrYears
            }
        },
        SET_CLEAR_YEAR(state) {
            state.years = []
        },
        SET_CHOOSE_YEAR(state, e) {
            state.years[e.target.id].use = e.target.checked
        },
        SET_DECREASE(state, e) {
            if (e.target.id === 'payment') {
                state.decrease.payment = true
                state.decrease.time = false
            }
            if (e.target.id === 'time') {
                state.decrease.payment = false
                state.decrease.time = true
            }
        },
        SET_VALIDATION(state) {
            let validateYears = false
            let validateDecrease = false

            state.years.forEach((year) => {
                if (year.use) {
                    validateYears = year.use
                }
            })
            if (state.decrease.payment || state.decrease.time) validateDecrease = true
            if (state.salary && validateYears && validateDecrease) state.validation = true
            else { state.validation = false }
        },
        MAKE_SEND_TO_SERVER(state) {
            const info = {
                salary: state.salary,
                years: state.years,
                max: state.max,
                decrease: state.decrease
            }
            state.POSTtoServer.push(info)
            console.log('POST', JSON.stringify(info))
            state.popupOpen = false
            state.salary = null
            state.years = []
            state.decrease = {
                payment: true,
                time: false
            }
            state.validation = false
        }
    },
    actions: {
        SHOW_POPUP({ commit }) {
            commit('SET_SHOW_POPUP')
        },
        CLOSE_POPUP({ commit }) {
            commit('SET_CLOSE_POPUP')
        },
        VALUE_INPUT({ commit }, e) {
            commit('SET_VALUE_INPUT', e.target.value)
        },
        CALC_DEDUCTION({ commit }) {
            commit('SET_YEARS_DEDUCTION')
        },
        CHOOSE_YEAR({ commit, dispatch }, e) {
            commit('SET_CHOOSE_YEAR', e)
            dispatch('VALIDATE')
        },
        CHOOSE_DECREASE({ commit }, e) {
            commit('SET_DECREASE', e)
        },
        VALIDATE({ commit }) {
            commit('SET_VALIDATION')
        },
        CLEAR_YEAR({ commit }) {
            commit('SET_CLEAR_YEAR')
        },
        SEND_TO_SERVER({ commit }) {
            if (this.state.validation) commit('MAKE_SEND_TO_SERVER')
        }
    },
    getters: {
        POPUP(state) {
            return state.popupOpen
        },
        SALARY(state) {
            return state.salary
        },
        ARR_YEARS(state) {
            return state.years
        },
        DEACREASE(state) {
            return state.decrease
        },
        VALIDATION(state) {
            return state.validation
        }
    }
})