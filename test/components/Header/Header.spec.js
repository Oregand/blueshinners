import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Header from '@/components/organisms/Header'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Header', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Header, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('is renders a nuxt logo with a link', () => {
    const wrapper = mount(Header, {
      localVue
    })
    expect(wrapper.find('.navbar-brand').attributes('href')).toBe('https://nuxtjs.org')
  })
})
