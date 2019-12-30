import { mount } from '@vue/test-utils'
import Footer from '@/components/organisms/Footer'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
