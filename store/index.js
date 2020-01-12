export const state = () => ({
  memorialPosts: []
})

export const mutations = {
  setMemorialPosts(state, list) {
    state.memorialPosts = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/memorial/',
      false,
      /\.json$/
    )
    const memorialPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setMemorialPosts', memorialPosts)
  }
}
