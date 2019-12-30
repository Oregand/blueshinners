import { mount } from '@vue/test-utils'
import Home from '~/pages/index.vue'

describe('Home Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
