import {
    d as A,
    r as M,
    o as se,
    ah as te,
    v as g,
    K as O,
    aU as j,
    j as $,
    aV as oe,
    t as n,
    x as i,
    M as B,
    N as P,
    au as U,
    av as D,
    a9 as w,
    G as e,
    m as z,
    y as v,
    z as l,
    A as d,
    F as T,
    S as R,
    P as C,
    a0 as G,
    aW as S,
    L as F,
    a as ne,
    B as x,
    V as K,
    $ as le,
    R as ie,
    O as H,
    Q as W,
    aX as re,
    q as ce,
    E as q,
    C as Q,
    D as Y,
    T as de,
    aY as pe,
    W as ue,
    a7 as X
} from "./l52uiMmy.js";
import {
    P as N,
    H as V
} from "./UkgSXXPe.js";
import {
    _ as L
} from "./DlAUqK2U.js";
import {
    u as J
} from "./BaPOtJa_.js";
const _e = Symbol.for("nuxt:client-only"),
    me = A({
        name: "ClientOnly",
        inheritAttrs: !1,
        props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
        setup(r, {
            slots: t,
            attrs: u
        }) {
            const o = M(!1);
            return se(() => {
                o.value = !0
            }), te(_e, !0), _ => {
                var p;
                if (o.value) return (p = t.default) == null ? void 0 : p.call(t);
                const b = t.fallback || t.placeholder;
                if (b) return b();
                const h = _.fallback || _.placeholder || "",
                    c = _.fallbackTag || _.placeholderTag || "span";
                return g(c, u, h)
            }
        }
    }),
    E = [{
        label: "pages.home",
        url: "/",
        aria: "pages.aria.home",
        klass: "link",
        type: "bottom",
        key: N.HOME
    }, {
        label: "pages.kioskLocations",
        url: "/locations",
        aria: "pages.aria.kioskLocations",
        klass: "link ms-md-8 ms-4",
        type: "bottom",
        key: N.KIOSK
    }, {
        label: "pages.partners",
        url: "/service-provider",
        aria: "pages.aria.partners",
        klass: "link ms-md-8 ms-4",
        type: "bottom",
        key: N.PARTNERS
    }, {
        label: "pages.developers",
        url: "/developers",
        aria: "pages.aria.developers",
        klass: "link ms-md-8 ms-4",
        type: "bottom",
        key: N.DEVELOPERS
    }, {
        label: "pages.about",
        url: "/about",
        aria: "pages.aria.aboutUs",
        klass: "link",
        type: "top",
        key: N.ABOUT
    }, {
        label: "pages.faq",
        url: "/faq",
        aria: "pages.ariafaq.",
        klass: "link ms-9",
        type: "top",
        key: N.FAQ
    }, {
        label: "pages.support",
        url: "/support",
        aria: "pages.aria.support",
        klass: "link ms-9",
        type: "top",
        key: N.SUPPORT
    }],
    ge = {
        class: "d-flex",
        gap: "36"
    },
    be = ["aria-label", "onClick"],
    fe = {
        class: "d-flex justify-space-between align-center"
    },
    ve = A({
        __name: "TopNav",
        props: {
            page: {},
            type: {},
            nav: {}
        },
        setup(r) {
            const {
                locale: t,
                setLocale: u
            } = O(), o = M(), {
                userWayInstance: _,
                accessibilityOn: b,
                openUserWayWidget: h
            } = j(), c = r, p = $(() => c.type === V.NORMAL ? "#404943" : "white"), I = a => c.page === a.key ? "link--active" : "", k = () => {
                t.value === S.ENGLISH ? u(S.ARABIC) : u(S.ENGLISH)
            };
            return (a, s) => {
                const m = me,
                    y = oe("ref");
                return n(), g("div", {
                    class: w(["d-none", "d-sm-flex", "justify-space-between", a.type])
                }, [i("div", ge, [(n(!0), g(B, null, P("nav" in a ? a.nav : e(E), f => U((n(), g("a", {
                    "aria-label": a.$t(f.aria),
                    tabindex: "0",
                    class: w([
                        [f.klass, I(f)], "cursor-pointer"
                    ]),
                    onClick: ae => ("navigateTo" in a ? a.navigateTo : e(z))(f.url)
                }, v(a.$t(f.label)), 11, be)), [
                    [D, f.type === "top"]
                ])), 256))]), i("div", fe, [l(m, null, {
                    default: d(() => [e(b) ? U((n(), T(R, {
                        key: 0,
                        id: "uaepass-accessibility-trigger",
                        "data-testid": "accessibility-btn",
                        density: "compact",
                        icon: "uaepass-accessiblity",
                        size: "30",
                        color: e(p),
                        class: w([
                            ["mx-1", "uaepass-accessibility"], "mx-1 uaepass-accessibility"
                        ]),
                        onClick: e(h)
                    }, {
                        default: d(() => [l(C, {
                            alt: "weelchair",
                            icon: "uaepass-accessiblity",
                            size: "30"
                        })]),
                        _: 1
                    }, 8, ["color", "onClick"])), [
                        [y, e(o)]
                    ]) : G("", !0)]),
                    _: 1
                }), l(R, {
                    "data-testid": "lang-btn",
                    density: "compact",
                    icon: "mdi-web",
                    "text-content": "earth",
                    color: e(p),
                    name: "earth",
                    "aria-label": "change language",
                    onClick: k,
                    size: "regular"
                }, {
                    default: d(() => [l(C, {
                        icon: "mdi-web"
                    })]),
                    _: 1
                }, 8, ["color"])])], 2)
            }
        }
    }),
    he = L(ve, [
        ["__scopeId", "data-v-0cb5a6fb"]
    ]),
    ye = A({
        __name: "Menu",
        setup(r) {
            const {
                fullName: t,
                isAuthenticated: u,
                logout: o,
                photo: _
            } = J(), b = ce(), {
                t: h
            } = O(), {
                langCode: c
            } = F(), {
                $auth: p
            } = ne(), I = $(() => [{
                title: h("profile.dashboard"),
                icon: "uaepass-square-grid",
                color: "on-surface",
                action: "dashboard"
            }, {
                title: h("profile.logout"),
                icon: "uaepass-logout",
                color: "error",
                action: "logout"
            }]), k = a => {
                switch (a.action) {
                    case "dashboard":
                        window.location.href = b.public.appUrl;
                        break;
                    case "logout":
                        p.logout();
                        break
                }
            };
            return (a, s) => e(u) ? (n(), T(re, {
                key: 1,
                class: "context-menu",
                "scroll-strategy": "close"
            }, {
                activator: d(({
                    props: m
                }) => [l(K, le({
                    "max-width": "40px",
                    width: "40",
                    height: "40",
                    src: e(_),
                    cover: !0,
                    alt: "avatar image"
                }, m, {
                    class: "cursor-pointer rounded-circle"
                }), null, 16, ["src"])]),
                default: d(() => [l(ie, {
                    elevation: "0",
                    width: "230"
                }, {
                    default: d(() => [l(H, {
                        class: "py-5"
                    }, {
                        default: d(() => [l(W, {
                            class: "px-4"
                        }, {
                            default: d(() => [i("strong", null, v(a.$t("hi", {
                                name: e(t)
                            })), 1)]),
                            _: 1
                        })]),
                        _: 1
                    }), (n(!0), g(B, null, P(e(I), (m, y) => (n(), T(H, {
                        key: y,
                        color: m.color,
                        tabindex: "0",
                        onClick: f => k(m)
                    }, {
                        prepend: d(() => [l(C, {
                            color: m.color,
                            icon: m.icon,
                            class: "ms-3"
                        }, null, 8, ["color", "icon"])]),
                        default: d(() => [l(W, {
                            class: w([`text-color-${m.color}`, "me-3"])
                        }, {
                            default: d(() => [x(v(m.title), 1)]),
                            _: 2
                        }, 1032, ["class"])]),
                        _: 2
                    }, 1032, ["color", "onClick"]))), 128))]),
                    _: 1
                })]),
                _: 1
            })) : (n(), T(R, {
                key: 0,
                variant: "tonal",
                onClick: s[0] || (s[0] = m => e(p).login(e(c))),
                class: "d-none d-sm-flex"
            }, {
                default: d(() => [x(v(a.$t("login")), 1)]),
                _: 1
            }))
        }
    }),
    ke = q("/images/full-logo.svg"),
    $e = r => (Q("data-v-34310377"), r = r(), Y(), r),
    xe = {
        class: "d-flex justify-space-between align-center"
    },
    we = ["aria-label"],
    Ce = ["aria-label", "custom-title", "onClick"],
    Ie = $e(() => i("div", {
        class: "link__border mt-2"
    }, null, -1)),
    Te = {
        class: "d-flex align-center"
    },
    Ae = A({
        __name: "BottomNav",
        props: {
            page: {},
            expanded: {
                type: Boolean
            },
            nav: {},
            type: {},
            isAccessibilityIconVisible: {
                type: Boolean
            }
        },
        emits: ["update:expanded"],
        setup(r, {
            emit: t
        }) {
            O();
            const {
                accessibilityOn: u,
                openUserWayWidget: o
            } = j(), _ = r, b = $(() => _.type === V.NORMAL ? "white" : "#404943"), h = $(() => _.type === V.TRANSPARENT ? "white" : "#2E312E"), c = t, p = $({
                get() {
                    return _.expanded
                },
                set(a) {
                    c("update:expanded", a)
                }
            }), I = $(() => p.value || _.type === V.TRANSPARENT ? "white-logo" : ""), k = () => {
                p.value = !_.expanded
            };
            return (a, s) => {
                const m = ye;
                return n(), g("div", xe, [i("a", {
                    href: "/",
                    "aria-label": a.$t("pages.aria.home")
                }, [l(K, {
                    src: ke,
                    alt: a.$t("header.altLogo"),
                    width: "126px",
                    height: "36px",
                    class: w(e(I))
                }, null, 8, ["alt", "class"])], 8, we), i("div", {
                    class: w(["d-sm-flex", "d-none", a.type])
                }, [(n(!0), g(B, null, P("nav" in a ? a.nav : e(E), y => U((n(), g("a", {
                    class: w([
                        [y.klass, a.page === y.key ? "link--active" : ""], "cursor-pointer"
                    ]),
                    "aria-label": a.$t(y.aria),
                    "custom-title": a.$t(y.label),
                    tabindex: "0",
                    onClick: f => ("navigateTo" in a ? a.navigateTo : e(z))(y.url)
                }, [x(v(a.$t(y.label)) + " ", 1), Ie], 10, Ce)), [
                    [D, y.type === "bottom"]
                ])), 256))], 2), i("div", Te, [e(u) ? U((n(), T(R, {
                    key: 0,
                    id: "uaepass-accessibility-trigger",
                    "data-test": "accessibility-btn",
                    density: "compact",
                    icon: "uaepass-accessiblity",
                    size: "30",
                    color: e(b),
                    class: w(["mx-1", "uaepass-accessibility", e(p) && "not-visible"]),
                    onClick: e(o)
                }, {
                    default: d(() => [l(C, {
                        alt: "weelchair",
                        icon: "uaepass-accessiblity",
                        size: "30"
                    })]),
                    _: 1
                }, 8, ["color", "class", "onClick"])), [
                    [D, a.isAccessibilityIconVisible]
                ]) : G("", !0), e(p) ? (n(), T(C, {
                    key: 1,
                    color: "white",
                    class: "d-sm-none mx-2",
                    tabindex: "0",
                    onClick: s[0] || (s[0] = () => k())
                }, {
                    default: d(() => [x("mdi-close ")]),
                    _: 1
                })) : (n(), T(C, {
                    key: 2,
                    tabindex: "0",
                    color: e(h),
                    class: "d-sm-none mx-2",
                    onClick: s[1] || (s[1] = () => k())
                }, {
                    default: d(() => [x("mdi-menu ")]),
                    _: 1
                }, 8, ["color"])), l(m)])])
            }
        }
    }),
    Z = L(Ae, [
        ["__scopeId", "data-v-34310377"]
    ]),
    Le = {
        class: "position-relative d-flex flex-column justify-space-between h-100"
    },
    Ne = {
        class: "d-flex flex-column"
    },
    Ve = ["aria-label", "onClick"],
    Ee = A({
        __name: "MobileNav",
        props: {
            expanded: {
                type: Boolean
            },
            nav: {},
            page: {},
            type: {}
        },
        emits: ["update:expanded"],
        setup(r, {
            emit: t
        }) {
            const {
                isAuthenticated: u
            } = J(), o = r, {
                locale: _,
                setLocale: b
            } = O(), {
                langCode: h
            } = F(), c = $(() => o.expanded ? "mobile-header--expanded" : ""), p = $(() => o.type === V.NORMAL ? "mobile-header--normal" : "mobile-header--transparent"), I = t, k = $({
                get() {
                    return o.expanded
                },
                set(s) {
                    I("update:expanded", s)
                }
            }), a = () => {
                _.value === S.ENGLISH ? b(S.ARABIC) : b(S.ENGLISH)
            };
            return (s, m) => {
                const y = Z;
                return n(), g("div", {
                    class: w(["mobile-header", "d-sm-none", e(p), e(c)])
                }, [l(y, {
                    expanded: e(k),
                    "onUpdate:expanded": m[0] || (m[0] = f => de(k) ? k.value = f : null),
                    nav: "nav" in s ? s.nav : e(E),
                    type: s.type,
                    page: s.page,
                    isAccessibilityIconVisible: !1
                }, null, 8, ["expanded", "nav", "type", "page"]), i("div", Le, [i("div", Ne, [(n(!0), g(B, null, P("nav" in s ? s.nav : e(E), f => (n(), g("a", {
                    "aria-label": s.$t(f.aria),
                    class: "mobile-header__nav cursor-pointer",
                    tabindex: "0",
                    onClick: ae => ("navigateTo" in s ? s.navigateTo : e(z))(f.url)
                }, v(s.$t(f.label)), 9, Ve))), 256)), i("a", {
                    href: "#",
                    class: "mobile-header__nav",
                    onClick: a,
                    "aria-label": "change language",
                    tabindex: "0"
                }, [l(C, {
                    color: "white",
                    class: "me-2"
                }, {
                    default: d(() => [x("mdi-web")]),
                    _: 1
                }), x(" " + v(s.$t("header.language")), 1)])]), e(u) ? (n(), T(R, {
                    key: 0,
                    variant: "flat",
                    class: "mobile-header__login",
                    onClick: s.$auth.logout
                }, {
                    default: d(() => [x(v(s.$t("profile.logout")), 1)]),
                    _: 1
                }, 8, ["onClick"])) : (n(), T(R, {
                    key: 1,
                    variant: "flat",
                    class: "mobile-header__login",
                    onClick: m[1] || (m[1] = f => s.$auth.login(e(h)))
                }, {
                    default: d(() => [x(v(s.$t("header.login")), 1)]),
                    _: 1
                }))])], 2)
            }
        }
    }),
    Se = L(Ee, [
        ["__scopeId", "data-v-6ca6b6e6"]
    ]),
    Re = A({
        __name: "index",
        props: {
            page: {},
            type: {}
        },
        setup(r) {
            const {
                xs: t
            } = pe(), u = r, o = M(!1), _ = $(() => o.value ? "header--expanded" : ""), b = $(() => o.value || u.type === V.TRANSPARENT ? "bg-color-transparent" : "bg-color-primary-100"), h = $(() => u.type === V.NORMAL ? "header--normal" : "header--transparent");
            return ue(o, () => {
                const c = document.documentElement.style;
                o.value ? c.overflow = "hidden" : c.overflow = "auto"
            }), (c, p) => {
                const I = he,
                    k = Z,
                    a = Se;
                return n(), g(B, null, [i("div", {
                    class: w(["header", e(_), e(b), e(h)])
                }, [l(I, {
                    nav: e(E),
                    type: c.type,
                    page: c.page
                }, null, 8, ["nav", "type", "page"]), l(X, {
                    class: w(["d-sm-block", "d-none", c.type])
                }, null, 8, ["class"]), l(k, {
                    expanded: o.value,
                    "onUpdate:expanded": p[0] || (p[0] = s => o.value = s),
                    nav: e(E),
                    type: c.type,
                    page: c.page,
                    isAccessibilityIconVisible: e(t)
                }, null, 8, ["expanded", "nav", "type", "page", "isAccessibilityIconVisible"])], 2), l(a, {
                    nav: e(E),
                    type: c.type,
                    page: c.page,
                    expanded: o.value,
                    "onUpdate:expanded": p[1] || (p[1] = s => o.value = s)
                }, null, 8, ["nav", "type", "page", "expanded"])], 64)
            }
        }
    }),
    pa = L(Re, [
        ["__scopeId", "data-v-523525b0"]
    ]),
    ua = q("/images/logos/dda.svg"),
    _a = q("/images/logos/tdra.svg"),
    ma = q("/images/logos/adda.svg"),
    Be = {
        class: "header"
    },
    Oe = {
        class: "header__head text-center mb-4 font-weight-bold text-color-gray-70"
    },
    Pe = {
        class: "header__desc text-center mx-auto text-color-gray-50"
    },
    Ue = A({
        __name: "Header",
        props: {
            head: {},
            desc: {}
        },
        setup(r) {
            return (t, u) => (n(), g("div", Be, [i("h2", Oe, v(t.$t(t.head)), 1), i("p", Pe, v(t.$t(t.desc)), 1)]))
        }
    }),
    ga = L(Ue, [
        ["__scopeId", "data-v-c8286ac5"]
    ]),
    Me = {},
    ee = r => (Q("data-v-59322d10"), r = r(), Y(), r),
    ze = {
        class: "d-flex justify-space-between flex-md-row flex-column"
    },
    qe = {
        class: "footer__description mb-md-0 mb-8"
    },
    De = {
        class: "d-flex flex-column"
    },
    He = {
        class: "d-flex"
    },
    We = {
        class: "footer__uae ps-2"
    },
    je = {
        class: "d-flex mt-3"
    },
    Ge = ee(() => i("a", {
        class: "footer__phone ps-2",
        href: "tel:600561111",
        style: {
            direction: "ltr"
        }
    }, "600 56 1111", -1)),
    Fe = {
        class: "d-flex mt-3"
    },
    Ke = ee(() => i("a", {
        class: "footer__mail ps-2",
        href: "mailto:support@uaepass.ae"
    }, "support@uaepass.ae", -1));

function Qe(r, t) {
    return n(), g("div", ze, [i("h2", qe, v(r.$t("footer.nationalIdentity")), 1), i("div", De, [i("div", He, [l(C, {
        color: "white",
        size: "18"
    }, {
        default: d(() => [x("mdi-crosshairs-gps")]),
        _: 1
    }), i("p", We, v(r.$t("footer.uae")), 1)]), i("div", je, [l(C, {
        color: "white",
        size: "18"
    }, {
        default: d(() => [x("mdi-phone")]),
        _: 1
    }), Ge]), i("div", Fe, [l(C, {
        color: "white",
        size: "18"
    }, {
        default: d(() => [x("mdi-email-outline")]),
        _: 1
    }), Ke])])])
}
const Ye = L(Me, [
        ["render", Qe],
        ["__scopeId", "data-v-59322d10"]
    ]),
    Xe = {
        class: "d-flex justify-md-space-between flex-md-row flex-column"
    },
    Je = {
        class: "mb-md-0 mb-4 d-flex flex-wrap"
    },
    Ze = ["aria-label", "onClick"],
    ea = {
        class: "footer__copyright"
    },
    aa = A({
        __name: "bottom",
        setup(r) {
            const {
                t
            } = O(), u = M([{
                label: "pages.about",
                url: "/about",
                aria: t("pages.aria.aboutUs")
            }, {
                label: "pages.faq",
                url: "/faq",
                aria: t("pages.aria.faq")
            }, {
                label: "pages.support",
                url: "/support",
                aria: t("pages.aria.support")
            }, {
                label: "pages.kioskLocations",
                url: "/locations",
                aria: t("pages.aria.kioskLocations")
            }, {
                label: "pages.partners",
                url: "/service-provider",
                aria: t("pages.aria.partners")
            }, {
                label: "pages.developers",
                url: "/developers",
                aria: t("pages.aria.developers")
            }]);
            return (o, _) => (n(), g("div", Xe, [i("div", Je, [(n(!0), g(B, null, P(u.value, b => (n(), g("a", {
                "aria-label": b.aria,
                class: "footer__link me-lg-12 me-md-8 me-6 cursor-pointer",
                tabindex: "0",
                onClick: h => ("navigateTo" in o ? o.navigateTo : e(z))(b.url)
            }, v(o.$t(b.label)), 9, Ze))), 256))]), i("p", ea, v(o.$t("footer.copyright", {
                year: new Date().getFullYear()
            })), 1)]))
        }
    }),
    sa = L(aa, [
        ["__scopeId", "data-v-d076b49a"]
    ]),
    ta = {},
    oa = {
        class: "footer__wrapper"
    },
    na = {
        class: "footer__content py-md-16 py-8 px-md-8 px-4 ma-auto"
    };

function la(r, t) {
    const u = Ye,
        o = sa;
    return n(), g("div", oa, [i("div", na, [l(u), l(X, {
        color: "white"
    }), l(o)])])
}
const ba = L(ta, [
    ["render", la],
    ["__scopeId", "data-v-f785e284"]
]);
export {
    ua as _, _a as a, ma as b, ga as c, pa as d, ba as e
};