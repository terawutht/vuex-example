const state ={
    firstName :'terawuth',
    lastName : 'thavorn',
    // age : 27
}

const getters ={}


const actions = {
       setName :({ commit,state},payload) => {
            commit('SET_FIRST_NAME',payload.firstName)
            commit('SET_LAST_NAME',payload.lastName)
       }

       
}

const mutations = {
    SET_FIRST_NAME(state,payload){
        state.firstName = payload
   },
   SET_LAST_NAME(state,payload){
       state.lastName = payload
   }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations

}