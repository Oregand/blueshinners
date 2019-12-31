import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Header from '@/components/organisms/Header'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
