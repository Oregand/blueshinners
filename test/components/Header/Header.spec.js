import { mount } from '@vue/test-utils'
import Header from '@/components/organisms/Header'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
