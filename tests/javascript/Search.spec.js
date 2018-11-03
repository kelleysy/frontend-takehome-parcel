import { mount } from '@vue/test-utils'
import Search from '@/Search.vue'

describe('Search.vue', () => {
  it ('terms to be nil', () => {
    const wrapper = mount(Search);
    expect(wrapper.vm.search.terms).toBe('');
  })
})
