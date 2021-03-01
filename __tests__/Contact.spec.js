import Contact from '@/views/Contact';
import { mount } from '@vue/test-utils';

describe("Tests unitaires de la vue Contact", () => {
    // Test #7
    test('Select lang dropdown did mount', () => {
        // Test si l'element select de langue est instancié
        expect(mount(Contact).find('#selectLanguage')).toBeTruthy;
    })

    // Test #8
    test('Select lang dropdown did not mount', () => {
        // Test si l'instance du select de langue est vide
        expect(mount(Contact).find('#selectLanguage').isEmpty()).toBeTruthy;
    })
})
