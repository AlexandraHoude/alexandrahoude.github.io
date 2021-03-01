import Home from '@/views/Home';
import { mount } from '@vue/test-utils';

describe("Tests unitaires de la vue Home", () => {
    // Test #1 Tester l'instance de Home
    test('component can mount', () => {
        const wrapper = mount(Home, {
            propsData: {
                Home:{
                    name: "Home"
                }
            }
        })

        // On s'attend que home soit bien une instance de vue, 'passed'
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    // Tests #2 qui verifie si la property 'name' du component Home est égale à 'Accueil'
    test('Test de la valeur l\'attribu name du component Home', () => {
        // On s'attend que le param name soit égale à 'Accueil', 'failed'
        expect(Home.name).toEqual('Home');
    });
})
