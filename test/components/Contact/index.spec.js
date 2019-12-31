import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Contact from '@/components/organisms/Form/Contact'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

it('reveals a notification when submitted', async () => {
  const wrapper = mount(Contact, {
    localVue
  })
  wrapper.find('#input-1').setValue('davidoregan91@gmail.com')
  wrapper.find('form').trigger('submit.prevent')
  await wrapper.vm.$nextTick()

  expect(wrapper.find('.toast-body').text()).toBe(
    'Your message has been submitted!'
  )
})
