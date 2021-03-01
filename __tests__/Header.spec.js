import Header from "@/components/Header";
import {mount} from "@vue/test-utils";

describe("Tests unitaires de la vue Header", () => {
    // Test #5 Tester l'instance de Header
    test('component can mount', () => {
        const wrapper = mount(Header, {
            propsData: {
                Header:{
                    name: "Header"
                }
            }
        })

        // On s'attend que header soit bien une instance de vue, 'passed'
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    // Tests #6 qui verifie si la property 'name' du component Header est égale à 'entête'
    test('Test de la valeur l\'attribu name du component Header', () => {
        // On s'attend que le param name soit égale à 'entête', 'failed'
        expect(Header.name).toEqual('entête');
    });
})
