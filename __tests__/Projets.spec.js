import Projet from '@/views/Projets';
import { shallowMount } from '@vue/test-utils';

describe('Tests unitaires de la vue Projet', () => {
    // Test #9 - Verifie si le dernier enfant de la list est MediaQuerries
    test('Projet order', () => {
        const wrapper = shallowMount(Projet, {
            data() {
                return {
                    projets: [
                        {name:"Portfolio",link:"https://alexandrahoude.github.io/AEC_Front_End//portfolio/index.html"},
                        {name:"ComicStation",link:"https://alexandrahoude.github.io/AEC_Front_End/Examens/comicsstation/build/#/"},
                        {name:"MediaQuerries",link:"https://alexandrahoude.github.io/AEC_Front_End/Integration1/sitesWeb/mediaquerries/index.html"},
                    ]
                }
            }
        })
        expect(wrapper.find("li:last-child > a").text()).toBe("MediaQuerries");
    })
    // Test #10 - Test d'appel à la traduction (mixin)
    it('is mixin called twice', () => {
        const mixin = jest.fn()

        shallowMount(Projet, {
            filters: {
                translateTo: mixin
            }
        })

        // Failed
        expect(mixin).toHaveBeenCalledTimes(2);
    })
})
