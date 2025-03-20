import {
    d as i,
    a as c,
    al as m,
    aC as h,
    ad as P,
    aD as v,
    j as b,
    G as f,
    aE as r,
    r as L,
    u as k,
    aF as g,
    aG as j,
    h as l,
    $ as R,
    aH as S,
    aI as T,
    aJ as _,
    ah as x,
    aK as A
} from "./l52uiMmy.js";
const O = i({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        async setup(t, o) {
            const a = await r[t.name]().then(e => e.default || e);
            return () => l(a, t.layoutProps, o.slots)
        }
    }),
    H = i({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            },
            fallback: {
                type: [String, Object],
                default: null
            }
        },
        setup(t, o) {
            const a = c(),
                e = m(h),
                n = e === P() ? v() : e,
                u = b(() => {
                    let s = f(t.name) ? ? n.meta.layout ? ? "default";
                    return s && !(s in r) && t.fallback && (s = f(t.fallback)), s
                }),
                y = L();
            o.expose({
                layoutRef: y
            });
            const p = a.deferHydration();
            if (a.isHydrating) {
                const s = a.hooks.hookOnce("app:error", p);
                k().beforeEach(s)
            }
            return () => {
                const s = u.value && u.value in r,
                    d = n.meta.layoutTransition ? ? g;
                return j(_, s && d, {
                    default: () => l(T, {
                        suspensible: !0,
                        onResolve: () => {
                            S(p)
                        }
                    }, {
                        default: () => l(B, {
                            layoutProps: R(o.attrs, {
                                ref: y
                            }),
                            key: u.value || void 0,
                            name: u.value,
                            shouldProvide: !t.name,
                            hasTransition: !!d
                        }, o.slots)
                    })
                }).default()
            }
        }
    }),
    B = i({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(t, o) {
            const a = t.name;
            return t.shouldProvide && x(A, {
                isCurrent: e => a === (e.meta.layout ? ? "default")
            }), () => {
                var e, n;
                return !a || typeof a == "string" && !(a in r) ? (n = (e = o.slots).default) == null ? void 0 : n.call(e) : l(O, {
                    key: a,
                    layoutProps: t.layoutProps,
                    name: a
                }, o.slots)
            }
        }
    });
export {
    H as _
};