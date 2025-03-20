import {
    E as r,
    d as i,
    j as u,
    t as d,
    F as p,
    A as a,
    z as t,
    ao as c,
    aq as m,
    V as f,
    G as _,
    T as V,
    ab as g
} from "./l52uiMmy.js";
const b = r("/images/wait-logo.gif"),
    x = i({
        __name: "Loader",
        props: {
            visible: {
                type: Boolean,
                default: !1
            }
        },
        setup(o) {
            const l = o,
                e = u(() => l.visible);
            return (v, s) => (d(), p(g, {
                modelValue: _(e),
                "onUpdate:modelValue": s[0] || (s[0] = n => V(e) ? e.value = n : null),
                "overlay-opacity": "0.5",
                color: "#212121",
                persistent: !0,
                width: "120",
                height: "120",
                "content-class": "loader-dialogue"
            }, {
                default: a(() => [t(c, null, {
                    default: a(() => [t(m, null, {
                        default: a(() => [t(f, {
                            src: b,
                            alt: "wait icon"
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"]))
        }
    });
export {
    x as _
};