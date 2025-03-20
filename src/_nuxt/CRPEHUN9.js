import {
    V as B,
    b as P
} from "./iW-S33yr.js";
import {
    A as i
} from "./BAXUfs15.js";
import {
    d as R,
    r as h,
    j as s,
    W as G,
    t as r,
    F as c,
    A as n,
    G as e,
    P as D,
    B as d,
    y as f,
    a0 as u,
    z as j,
    ao as H,
    ai as O,
    aq as E,
    a9 as p,
    ap as U,
    ar as q,
    S as L,
    T as W,
    ab as $
} from "./l52uiMmy.js";
import {
    _ as J
} from "./DlAUqK2U.js";
const K = R({
        name: "Modal",
        __name: "Modal",
        setup(Q, {
            expose: S
        }) {
            const o = h(!1),
                a = h({
                    title: null
                }),
                m = h({
                    resolve: null,
                    reject: null
                }),
                x = s(() => a.value.closeIcon),
                C = s(() => a.value.icon),
                z = s(() => a.value.iconColor),
                k = s(() => a.value.title),
                V = s(() => a.value.contentText),
                v = s(() => a.value.primaryButtonText),
                g = s(() => a.value.secondaryButtonText),
                T = s(() => a.value.actionAlignment),
                A = s(() => a.value.contentAlignment),
                M = s(() => {
                    let t = ["d-flex"];
                    if (T) switch (T.value) {
                        case i.LEFT:
                            t.push("justify-start");
                            break;
                        case i.RIGHT:
                            t.push("justify-end");
                            break;
                        case i.MIDDLE:
                            t.push("justify-center");
                            break;
                        default:
                            t = []
                    }
                    return t
                }),
                _ = s(() => {
                    let t = ["d-flex"];
                    if (A) switch (A.value) {
                        case i.LEFT:
                            t.push("align-start");
                            break;
                        case i.RIGHT:
                            t.push("align-end");
                            break;
                        case i.MIDDLE:
                            t.push("align-center justify-center text-center");
                            break;
                        default:
                            t = []
                    }
                    return t
                }),
                N = t => new Promise((l, y) => {
                    o.value = !0, m.value = {
                        resolve: l,
                        reject: y
                    }, a.value = { ...a,
                        ...t
                    }
                }),
                F = () => {
                    o.value = !1
                },
                b = () => {
                    a.value = {
                        title: null
                    }, m.value = {
                        resolve: null,
                        reject: null
                    }
                },
                w = () => {
                    var t, l;
                    (l = (t = m.value).resolve) == null || l.call(t, {
                        code: 0,
                        accepted: !0
                    }), o.value = !1
                },
                I = () => {
                    var t, l;
                    (l = (t = m.value).resolve) == null || l.call(t, {
                        code: 1,
                        accepted: !1
                    }), o.value = !1
                };
            return G(o, t => {
                t || b()
            }), S({
                open: N,
                close: F,
                resetModal: b,
                onPrimaryAction: w,
                onSecondaryAction: I
            }), (t, l) => (r(), c($, {
                modelValue: e(o),
                "onUpdate:modelValue": l[0] || (l[0] = y => W(o) ? o.value = y : null),
                "close-on-back": "",
                "scroll-strategy": "none",
                width: e(a).width,
                "max-width": "600",
                height: e(a).height || 600
            }, {
                default: n(() => [e(x) ? (r(), c(D, {
                    key: 0
                }, {
                    default: n(() => [d(f(e(x)), 1)]),
                    _: 1
                })) : u("", !0), j(H, {
                    class: "pa-6"
                }, {
                    default: n(() => [O(t.$slots, "default", {}, () => [e(C) ? (r(), c(E, {
                        key: 0,
                        class: p(e(_))
                    }, {
                        default: n(() => [j(D, {
                            color: e(z),
                            size: "x-large"
                        }, {
                            default: n(() => [d(f(e(C)), 1)]),
                            _: 1
                        }, 8, ["color"])]),
                        _: 1
                    }, 8, ["class"])) : u("", !0), e(k) ? (r(), c(U, {
                        key: 1,
                        class: p(e(_))
                    }, {
                        default: n(() => [d(f(e(k)), 1)]),
                        _: 1
                    }, 8, ["class"])) : u("", !0), e(V) ? (r(), c(E, {
                        key: 2,
                        class: p([e(_), "text-color-on-surface-variant"])
                    }, {
                        default: n(() => [d(f(e(V)), 1)]),
                        _: 1
                    }, 8, ["class"])) : u("", !0)], !0), e(v) || e(g) ? (r(), c(q, {
                        key: 0,
                        class: p(e(M))
                    }, {
                        default: n(() => [e(g) ? (r(), c(L, {
                            key: 0,
                            variant: e(B).OUTLINED,
                            color: "#000",
                            size: "large",
                            width: "120",
                            class: "mx-2",
                            onClick: I
                        }, {
                            default: n(() => [d(f(e(g)), 1)]),
                            _: 1
                        }, 8, ["variant"])) : u("", !0), e(v) ? (r(), c(L, {
                            key: 1,
                            variant: e(B).TONAL,
                            color: e(P).SURFACE,
                            size: "large",
                            width: "120",
                            class: "mx-2",
                            onClick: w
                        }, {
                            default: n(() => [d(f(e(v)), 1)]),
                            _: 1
                        }, 8, ["variant", "color"])) : u("", !0)]),
                        _: 1
                    }, 8, ["class"])) : u("", !0)]),
                    _: 3
                })]),
                _: 3
            }, 8, ["modelValue", "width", "height"]))
        }
    }),
    te = J(K, [
        ["__scopeId", "data-v-3ccbc4fb"]
    ]);
export {
    te as
    default
};