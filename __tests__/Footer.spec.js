import Footer from '@/components/Footer';
import { shallowMount } from '@vue/test-utils';

describe("Tests unitaires de la vue Footer", () => {
    // Test #3 - test le rendu de la balise h3 du footer (copyright)
    it('is copyright redered', () => {
        const date = new Date().getFullYear();
        expect(shallowMount(Footer)
            .find('div')
            .text())
            .toEqual("Copyright © " + date + "All Rights reserved");
    });

    // Tests #4 qui verifie si la property 'name' du component Footer est égale à 'Pied de page'
    test('Test de la valeur l\'attribu name du component Footer', () => {
        // On s'attend que le param name soit égale à 'Pied de page', 'failed'
        expect(Footer.name).toEqual('Pied de page');
    });
})
