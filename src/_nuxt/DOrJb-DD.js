import {
    K as L,
    ad as c,
    aW as a
} from "./l52uiMmy.js";
const i = () => {
    const {
        locale: t,
        setLocale: u
    } = L(), g = c(), {
        lang: o
    } = g.query, e = n => {
        u(n)
    }, r = () => {
        const n = t.value === a.ENGLISH ? a.ARABIC : a.ENGLISH;
        e(n)
    }, s = n => {
        n && (n != null && n.includes("ar") ? e(a.ARABIC) : e(a.ENGLISH))
    };
    return s(o), {
        changeLanguage: r,
        loadLanguage: s
    }
};
export {
    i as u
};