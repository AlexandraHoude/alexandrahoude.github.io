import mixin from '@/mixins/mixin';
import { mount } from '@vue/test-utils';

describe('mixin traductions', () => {
    // test #11
    test("can mount", () => {
        const Component = {
            render() {},
            Projects: 'translate',
            mixins: [mixin]
        }
        mount(Component)
        expect(document.Projects).toBe('translate')
    })
    // test #12
    test("can't mount", () => {
        document.Projects = 'un projet'
        const Component = {
            render() {},
            mixins: [mixin]
        }
        mount(Component)
        expect(document.title).toBe('un projet')
    })
})
