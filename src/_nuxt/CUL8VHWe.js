import {
    V as m
} from "./iW-S33yr.js";
import {
    d as y,
    j as c,
    t as u,
    F as f,
    A as a,
    z as t,
    ao as h,
    P as w,
    a9 as _,
    G as s,
    B as o,
    y as l,
    ap as B,
    aq as D,
    ar as N,
    S as V,
    a0 as O,
    T as $,
    ab as A
} from "./l52uiMmy.js";
import {
    _ as I
} from "./DlAUqK2U.js";
const z = y({
        __name: "MessageDialog",
        props: {
            visible: {},
            title: {},
            description: {},
            cancelText: {},
            okText: {},
            icon: {},
            error: {}
        },
        emits: ["update:visible", "cancel", "done"],
        setup(C, {
            emit: g
        }) {
            const r = C,
                n = g,
                i = c(() => r.visible),
                d = () => {
                    n("update:visible", !1)
                },
                v = () => {
                    d(), n("cancel")
                },
                T = () => {
                    d(), n("done")
                },
                k = c(() => r.error ? "text-color-error" : "text-color-primary-60"),
                x = c(() => r.error ? "text-color-error" : "");
            return (e, p) => (u(), f(A, {
                modelValue: s(i),
                "onUpdate:modelValue": p[0] || (p[0] = b => $(i) ? i.value = b : null),
                activator: "parent",
                width: "auto",
                "min-width": "300"
            }, {
                default: a(() => [t(h, {
                    class: "message align-center py-10",
                    width: "100%"
                }, {
                    default: a(() => [t(w, {
                        class: _([s(k)])
                    }, {
                        default: a(() => [o(l(e.icon), 1)]),
                        _: 1
                    }, 8, ["class"]), t(B, {
                        class: _(["message__title pt-3", "font-weight-medium", s(x)])
                    }, {
                        default: a(() => [o(l(e.$t(e.title)), 1)]),
                        _: 1
                    }, 8, ["class"]), t(D, {
                        class: "message__desc pt-0"
                    }, {
                        default: a(() => [o(l(e.$t(e.description)), 1)]),
                        _: 1
                    }), t(N, {
                        class: "pb-0"
                    }, {
                        default: a(() => [e.cancelText ? (u(), f(V, {
                            key: 0,
                            class: "message__action px-6",
                            variant: s(m).OUTLINED,
                            onClick: v
                        }, {
                            default: a(() => [o(l(e.$t(e.cancelText)), 1)]),
                            _: 1
                        }, 8, ["variant"])) : O("", !0), t(V, {
                            class: "message__action px-6 text-color-primary-100",
                            variant: s(m).TONAL,
                            onClick: T
                        }, {
                            default: a(() => [o(l(e.$t(e.okText)), 1)]),
                            _: 1
                        }, 8, ["variant"])]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"]))
        }
    }),
    j = I(z, [
        ["__scopeId", "data-v-b13af9f3"]
    ]);
export {
    j as
    default
};