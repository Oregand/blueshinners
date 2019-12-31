import { mount } from '@vue/test-utils'
import Contact from '@/components/organisms/Contact'

describe('Contact', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Contact)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
