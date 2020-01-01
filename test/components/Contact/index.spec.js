import { mount, createLocalVue } from '@vue/test-utils'
// eslint-disable-next-line import/no-named-as-default
import BootstrapVue from 'bootstrap-vue'
import Contact from '@/components/organisms/Form/Contact'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

it('does not submit when form is not full', async () => {
  const wrapper = mount(Contact, {
    localVue
  })
  wrapper.find('form').trigger('submit.prevent')
  await wrapper.vm.$nextTick()

  expect(wrapper.find('#input-1').text()).toBe('')
})

it('does submit when form is full', async () => {
  const wrapper = mount(Contact, {
    localVue
  })
  wrapper.find('#input-1').setValue('davidoregan91@gmail.com')
  wrapper.find('#input-2').setValue('david')
  wrapper.find('#input-3').setValue('test')
  wrapper.find('#input-4').setValue('test 1')
  wrapper.find('form').trigger('submit.prevent')
  await wrapper.vm.$nextTick()

  expect(wrapper.find('#input-1').text()).toBe('')
})
