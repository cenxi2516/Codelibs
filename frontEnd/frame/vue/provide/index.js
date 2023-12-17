import {
    provideStore as provideUserLoginStore,
} from './userLogin.js';

export default function provideStore(app) {
    provideUserLoginStore(app);
}
