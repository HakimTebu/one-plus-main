import {
    j as J,
    aN as _,
    aO as X,
    aa as Z,
    aP as Y,
    d as K,
    r as b,
    L as ee,
    o as ae,
    t as f,
    v as h,
    z as a,
    A as s,
    x as O,
    aQ as te,
    G as e,
    B as P,
    y as x,
    P as q,
    $ as se,
    Z as le,
    M as oe,
    F as w,
    aR as ie,
    T as ne,
    ar as U,
    as as W,
    S as $,
    ao as B,
    a0 as V,
    aq as G,
    a9 as N,
    az as re,
    J as M,
    I as L,
    aB as ue,
    U as ce,
    V as de,
    ab as fe,
    H as pe,
    ai as me,
    aS as ge,
    aT as ye,
    q as ve
} from "./l52uiMmy.js";
import {
    u as Q
} from "./BaPOtJa_.js";
import {
    u as _e
} from "./DOrJb-DD.js";
import {
    u as be,
    i as he
} from "./D_D6d7w8.js";
import {
    u as xe
} from "./CasmIQa0.js";
import {
    V as E,
    a as H
} from "./iW-S33yr.js";
import "./BAXUfs15.js";

function Ve(g, u, o) {
    const [d = {}, n] = typeof u == "string" ? [{}, u] : [u, o], i = J(() => _(g)), r = d.key || X([n, typeof i.value == "string" ? i.value : "", ...we(d)]);
    if (!r || typeof r != "string") throw new TypeError("[nuxt] [useFetch] key must be a string: " + r);
    const y = r === n ? "$f" + r : r;
    if (!d.baseURL && typeof i.value == "string" && i.value[0] === "/" && i.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {
        server: S,
        lazy: k,
        default: F,
        transform: D,
        pick: j,
        watch: v,
        immediate: A,
        getCachedData: t,
        deep: l,
        dedupe: p,
        ...c
    } = d, C = Z({ ...Y,
        ...c,
        cache: typeof d.cache == "boolean" ? void 0 : d.cache
    }), T = {
        server: S,
        lazy: k,
        default: F,
        transform: D,
        pick: j,
        immediate: A,
        getCachedData: t,
        deep: l,
        dedupe: p,
        watch: v === !1 ? [] : [C, i, ...v || []]
    };
    let m;
    return xe(y, () => {
        var I;
        (I = m == null ? void 0 : m.abort) == null || I.call(m), m = typeof AbortController < "u" ? new AbortController : {};
        const z = _(d.timeout);
        let R;
        return z && (R = setTimeout(() => m.abort(), z), m.signal.onabort = () => clearTimeout(R)), (d.$fetch || globalThis.$fetch)(i.value, {
            signal: m.signal,
            ...C
        }).finally(() => {
            clearTimeout(R)
        })
    }, T)
}

function we(g) {
    var o;
    const u = [((o = _(g.method)) == null ? void 0 : o.toUpperCase()) || "GET", _(g.baseURL)];
    for (const d of [g.params || g.query]) {
        const n = _(d);
        if (!n) continue;
        const i = {};
        for (const [r, y] of Object.entries(n)) i[_(r)] = _(y);
        u.push(i)
    }
    return u
}
const ke = {
        key: 0,
        class: "mx-auto text-center py-10"
    },
    Ce = {
        key: 0,
        class: "modal__title"
    },
    $e = {
        key: 1
    },
    Se = {
        class: "modal__title"
    },
    De = {
        class: "dialog__description"
    },
    Te = {
        key: 0,
        class: "text-center mt-2"
    },
    Oe = {
        class: "dialog__description"
    },
    Le = K({
        __name: "index",
        setup(g) {
            const u = b(0),
                {
                    formValues: o,
                    emailRules: d
                } = be(0),
                n = b({
                    ratingDialog: !1,
                    tellMoreDialog: !1,
                    ratingStatusDialog: !1
                }),
                {
                    langCode: i
                } = ee(),
                {
                    email: r
                } = Q(),
                y = b(!1),
                S = b(!1),
                k = b(!1),
                F = J(() => !he(o.email)),
                D = b(!1),
                j = () => {
                    Object.keys(n.value).forEach(t => n.value[t] = !1), n.value.ratingDialog = !0
                },
                v = (t, l = null, p = !1) => {
                    n.value[t] = !1, p ? n.value.tellMoreDialog = !0 : l && (n.value[l] = !0)
                },
                A = async () => {
                    var C, T;
                    y.value = !0;
                    const t = window.navigator.platform;
                    let l;
                    t.includes("win") ? l = "WINDOWS" : l = "OTHERS";
                    const p = {
                            rating: u.value,
                            note: o.description || "",
                            platform: l,
                            appType: "WEBAPP",
                            email: r.value ? void 0 : o.email,
                            lang: i.value.toUpperCase()
                        },
                        c = await Ve("/api/v2/survey/rating", {
                            method: "post",
                            body: p
                        }, "$UCTR7Jmyd9");
                    ((T = (C = c == null ? void 0 : c.data) == null ? void 0 : C.value) == null ? void 0 : T.code) === "0" ? (S.value = !0, localStorage.setItem("isSurveySucessful", "true")) : k.value = !0, u.value = 0, o.description = "", o.email = r.value ? ? "", y.value = !1, D.value = !0, v("tellMoreDialog", "ratingStatusDialog")
                };
            return ae(() => {
                o.email = r.value ? ? ""
            }), (t, l) => (f(), h("div", {
                class: N(["icon__container-survey", "d-flex", "align-center", "justify-center", e(i) === "ar" && "left-side"])
            }, [a(fe, {
                "max-width": "450",
                class: "modal__rating"
            }, {
                activator: s(({
                    props: p
                }) => [O("div", se({
                    class: "icon__wrapper d-flex align-center justify-center v-expand-transition"
                }, p), [a(te, {
                    activator: "parent",
                    location: e(i) === "ar" ? "end" : "start",
                    "content-class": ["tooltip__survey", e(i) === "ar" && "left-side"]
                }, {
                    default: s(() => [P(x(t.$t("survey.rateExp")), 1)]),
                    _: 1
                }, 8, ["location", "content-class"]), a(q, {
                    color: "secondary",
                    size: "25",
                    icon: "uaepass-feedback",
                    tabindex: "0",
                    onClick: j,
                    class: "icon__survey"
                })], 16)]),
                default: s(({
                    isActive: p
                }) => [e(y) ? (f(), h("div", ke, [a(le, {
                    color: "primary",
                    height: "4",
                    indeterminate: "",
                    class: "mt-4"
                })])) : (f(), h(oe, {
                    key: 1
                }, [e(n).ratingDialog ? (f(), w(B, {
                    key: 0,
                    title: t.$t("survey.experienceTitle"),
                    class: "d-flex align-center justify-center"
                }, {
                    default: s(() => [a(ie, {
                        modelValue: e(u),
                        "onUpdate:modelValue": l[0] || (l[0] = c => ne(u) ? u.value = c : null),
                        class: "d-flex flex-start icon__rating__wrapper justify-space-between",
                        clearable: !0
                    }, {
                        item: s(c => [a(q, {
                            icon: "uaepass-star",
                            size: "40",
                            color: c.isFilled ? "#F2C94C" : "#E0E0E0",
                            class: "my-4"
                        }, null, 8, ["color"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(U, {
                        style: {
                            "max-width": "350px",
                            width: "100%"
                        }
                    }, {
                        default: s(() => [a(W), a($, {
                            disabled: e(u) === 0,
                            onClick: l[1] || (l[1] = c => v("ratingDialog", void 0, !0)),
                            class: "mt-4 py-4 text-color-primary-100 rating__action__btn",
                            variant: e(E).TONAL,
                            size: "large",
                            height: "auto",
                            block: "",
                            "data-test": "rating-continue"
                        }, {
                            default: s(() => [P(x(t.$t("survey.actions.continue")), 1)]),
                            _: 1
                        }, 8, ["disabled", "variant"])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["title"])) : V("", !0), e(n).tellMoreDialog ? (f(), w(B, {
                    key: 1,
                    class: "d-flex justify-center dialog__form",
                    title: t.$t("survey.whatCanBeenDoneBetter")
                }, {
                    default: s(() => [a(G, {
                        class: N(["full", e(r) ? "pb-0" : "", "px-2"])
                    }, {
                        default: s(() => [a(re, null, {
                            default: s(() => [a(M, null, {
                                default: s(() => [a(L, {
                                    cols: "12",
                                    class: "textarea__wrapper"
                                }, {
                                    default: s(() => [a(ue, {
                                        modelValue: e(o).description,
                                        "onUpdate:modelValue": l[2] || (l[2] = c => e(o).description = c),
                                        variant: e(H).SOLO,
                                        label: t.$t("survey.textareaLabel"),
                                        "aria-label": t.$t("survey.textareaLabel"),
                                        rounded: "lg",
                                        "hide-details": "auto",
                                        counter: "500",
                                        maxlength: "500"
                                    }, null, 8, ["modelValue", "variant", "label", "aria-label"])]),
                                    _: 1
                                })]),
                                _: 1
                            }), e(r) ? V("", !0) : (f(), w(M, {
                                key: 0,
                                class: "mt-0"
                            }, {
                                default: s(() => [a(L, {
                                    cols: "12",
                                    class: "py-0"
                                }, {
                                    default: s(() => [a(ce, {
                                        modelValue: e(o).email,
                                        "onUpdate:modelValue": l[3] || (l[3] = c => e(o).email = c),
                                        class: "email__field",
                                        rules: e(d),
                                        disabled: !!e(r),
                                        variant: e(H).SOLO,
                                        label: t.$t("survey.emailLabel"),
                                        "aria-label": t.$t("survey.emailLabel"),
                                        placeholder: t.$t("support.fields.email.placeholder"),
                                        rounded: "lg",
                                        "hide-details": "auto"
                                    }, null, 8, ["modelValue", "rules", "disabled", "variant", "label", "aria-label", "placeholder"])]),
                                    _: 1
                                })]),
                                _: 1
                            }))]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["class"]), a(U, {
                        class: "full"
                    }, {
                        default: s(() => [a(M, {
                            "no-gutters": "",
                            class: "d-flex flex-wrap justify-space-between"
                        }, {
                            default: s(() => [a(L, {
                                cols: "auto",
                                class: "d-flex"
                            }, {
                                default: s(() => [a($, {
                                    variant: "text",
                                    "append-icon": "uaepass-arrow-left",
                                    onClick: l[4] || (l[4] = c => v("tellMoreDialog", "ratingDialog")),
                                    height: "auto",
                                    class: "icon__btn py-3"
                                })]),
                                _: 1
                            }), a(L, {
                                class: N(["d-flex", e(i) === "ar" ? "pr-2" : "pl-2"])
                            }, {
                                default: s(() => [a($, {
                                    class: "py-3 text-color-primary-100 flex-grow-0 flex-shrink-1 rating__action__btn submit__btn",
                                    text: t.$t("survey.actions.submit"),
                                    disabled: e(F),
                                    "validate-on": "input",
                                    onClick: A,
                                    size: "large",
                                    variant: e(E).TONAL,
                                    height: "auto",
                                    block: ""
                                }, null, 8, ["text", "disabled", "variant"])]),
                                _: 1
                            }, 8, ["class"])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["title"])) : V("", !0), e(n).ratingStatusDialog ? (f(), w(B, {
                    key: 2,
                    class: "d-flex flex-col align-center justify-center",
                    "data-test": "status-card"
                }, {
                    default: s(() => [a(G, {
                        class: "px-4 w-full text-center d-flex flex-column align-center"
                    }, {
                        default: s(() => [a(de, {
                            class: "dialog__img flex-shrink-0 flex-grow-0 w-100",
                            src: e(k) ? "/images/failed-survey.png" : "/images/success-survey.png",
                            alt: `survey ${e(S)} `
                        }, null, 8, ["src", "alt"]), e(k) ? (f(), h("div", $e, [O("h1", Se, x(t.$t("survey.failedSubmission")), 1), O("p", De, x(t.$t("survey.failedSubmissionText")), 1)])) : (f(), h("h1", Ce, x(t.$t("survey.successSubmission")), 1))]),
                        _: 1
                    }), a(U, {
                        class: "w-100 flex-1-1-100"
                    }, {
                        default: s(() => [a(W), a($, {
                            class: "py-3 text-color-primary-100 rating__action__btn",
                            text: t.$t("survey.actions.done"),
                            variant: e(E).TONAL,
                            height: "auto",
                            block: "",
                            onClick: () => {
                                v("ratingStatusDialog"), p.value = !1
                            }
                        }, null, 8, ["text", "variant", "onClick"])]),
                        _: 2
                    }, 1024), e(D) ? V("", !0) : (f(), h("div", Te, [a($, {
                        variant: e(E).TEXT,
                        text: t.$t("survey.actions.tellUs"),
                        color: "#11A56F",
                        onClick: l[5] || (l[5] = c => v("ratingStatusDialog", "tellMoreDialog"))
                    }, null, 8, ["variant", "text"]), O("p", Oe, x(t.$t("survey.yourFeedback")), 1)]))]),
                    _: 2
                }, 1024)) : V("", !0)], 64))]),
                _: 1
            })], 2))
        }
    }),
    ze = K({
        __name: "default",
        async setup(g) {
            let u, o;
            const n = ve().public.isSurveyOn;
            _e();
            const {
                getProfileData: i
            } = Q();
            return [u, o] = pe(() => i()), await u, o(), (r, y) => (f(), w(ye, {
                class: "bg-white"
            }, {
                default: s(() => [a(ge, null, {
                    default: s(() => [me(r.$slots, "default"), e(n) ? (f(), w(Le, {
                        key: 0
                    })) : V("", !0)]),
                    _: 3
                })]),
                _: 3
            }))
        }
    });
export {
    ze as
    default
};