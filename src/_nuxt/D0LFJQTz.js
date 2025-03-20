import {
    aZ as f,
    r as u,
    a_ as o,
    a$ as d,
    W as v,
    f as l,
    b0 as i,
    b1 as h,
    b2 as m
} from "./l52uiMmy.js";

function I(t, a = {}) {
    const e = a.head || f();
    if (e) return e.ssr ? e.push(t, a) : p(e, t, a)
}

function p(t, a, e = {}) {
    const s = u(!1),
        n = u({});
    o(() => {
        n.value = s.value ? {} : d(a)
    });
    const r = t.push(n.value, e);
    return v(n, c => {
        r.patch(c)
    }), m() && (l(() => {
        r.dispose()
    }), i(() => {
        s.value = !0
    }), h(() => {
        s.value = !1
    })), r
}
export {
    I as u
};