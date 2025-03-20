import {
    _ as ce,
    a as le,
    b as re,
    c as de,
    d as _e,
    e as me
} from "./CvHy5JMd.js";
import {
    u as ue
} from "./BaPOtJa_.js";
import {
    d as y,
    a as pe,
    L as P,
    t as r,
    F as x,
    A as v,
    z as n,
    P as E,
    B as T,
    x as e,
    y as c,
    S as U,
    q as J,
    K as q,
    j as k,
    a6 as ge,
    v as g,
    a0 as S,
    a7 as W,
    a8 as Z,
    a9 as B,
    G as l,
    M as L,
    N as F,
    r as R,
    aa as X,
    T as ee,
    ab as fe,
    V as A,
    E as H,
    m as j,
    ac as te,
    ad as he
} from "./l52uiMmy.js";
import {
    _ as ve
} from "./BP1d2kDa.js";
import be from "./CRPEHUN9.js";
import {
    _ as w
} from "./DlAUqK2U.js";
import {
    u as $e,
    a as ye
} from "./CasmIQa0.js";
import {
    A as M
} from "./BAXUfs15.js";
import {
    V as we,
    b as xe
} from "./iW-S33yr.js";
import Ie from "./CUL8VHWe.js";
import {
    _ as De
} from "./DU51NzWg.js";
import {
    u as Te
} from "./D0LFJQTz.js";
import {
    H as Ae,
    P as Ee
} from "./UkgSXXPe.js";
var $ = (i => (i.SECURESIGNIN = "secureSignIn", i.DIGITALSIGNATURE = "digitalSignature", i.DOCUMENTSHARING = "documentSharing", i))($ || {}),
    C = (i => (i.DOWNLOADSTEP = "downloadStep", i.REGISTERSTEP = "registerStep", i.VERIFYSTEP = "verifyStep", i))(C || {});
const Ne = {
        class: "font-weight-600 letter-spacing-0"
    },
    ne = y({
        __name: "Button",
        setup(i) {
            const {
                isAuthenticated: t
            } = ue(), {
                $auth: d
            } = pe(), {
                langCode: s
            } = P(), o = J(), {
                appUrl: f
            } = o.public, u = () => {
                t ? window.location.href = `${f}/sign?lang=${s.value}` : d.login(s.value)
            };
            return (a, h) => (r(), x(U, {
                variant: "tonal",
                class: "me-lg-4 me-2 mt-sm-0 mt-2",
                "data-test": "sign-button",
                onClick: u
            }, {
                default: v(() => [n(E, {
                    color: "white",
                    class: "me-2"
                }, {
                    default: v(() => [T("uaepass-pencil-outline")]),
                    _: 1
                }), e("span", Ne, c(a.$t("landing.signDocument")), 1)]),
                _: 1
            }))
        }
    }),
    Se = {
        class: "d-flex flex-column"
    },
    ke = {
        key: 0,
        class: "py-8 mb-8 d-flex flex-column align-center verification-badge rounded-xl"
    },
    Ce = {
        class: "text-h4 valid-signature mb-2"
    },
    Ve = {
        class: "text-body-1"
    },
    Re = {
        class: "text-h6 font-weight-bold mb-6"
    },
    Ue = {
        class: "d-flex justify-space-between align-center"
    },
    Le = {
        class: "text-black font-weight-bold"
    },
    Ge = {
        class: "text-grey-darken-2"
    },
    Oe = {
        class: "d-flex justify-space-between align-center"
    },
    Be = {
        class: "text-black"
    },
    Pe = {
        class: "text-grey-darken-2"
    },
    Me = {
        class: "d-flex justify-space-between align-center"
    },
    Fe = {
        class: "pt-8 d-flex flex-1 flex-column"
    },
    je = {
        class: "text-h6 font-weight-bold mb-6"
    },
    qe = {
        class: "d-flex justify-space-between align-center"
    },
    He = {
        class: "text-subtitle-2"
    },
    ze = {
        class: "text-caption"
    },
    Ye = {
        class: "px-3 py-1 bg-white rounded-lg"
    },
    Ke = {
        class: "text-caption",
        style: {
            direction: "ltr"
        }
    },
    We = y({
        __name: "Detail",
        props: {
            documentDetails: {},
            isLoading: {
                type: Boolean
            }
        },
        setup(i) {
            const {
                documentDetails: t
            } = i, {
                t: d
            } = q(), s = a => {
                let h = "";
                return a === "application/pdf" && (h = "PDF"), h
            }, o = k(() => a => {
                if (!a) return;
                const h = new Date(a);
                return ge(h).format("D MMM YYYY HH:mm:ss Z")
            }), f = k(() => a => {
                if (!a) return a;
                let h = "";
                return a.split("").forEach((m, b) => {
                    let D = "";
                    b === 3 || b === 7 || b === 14 ? D = " " + m : D = m, b > 6 && b < 14 && (D = " •"), h += D
                }), h
            }), u = k(() => {
                let a = "",
                    h = "";
                return t.signatureValidation ? (a = d("signature.valid"), h = "text-green") : (a = d("signature.invalid"), h = "text-red"), {
                    validationText: a,
                    validationTextClass: h
                }
            });
            return (a, h) => (r(), g("div", Se, [e("div", null, [a.documentDetails.signatureValidation ? (r(), g("div", ke, [n(E, {
                icon: "mdi-check-decagram-outline",
                color: "#4CA25B",
                size: "40",
                class: "mb-3"
            }), e("p", Ce, c(a.$t("signature.valid")), 1), e("p", Ve, c(a.$t("signature.hasValid")), 1)])) : S("", !0), e("p", Re, c(a.$t("sign.document.details.title")), 1), e("div", Ue, [e("p", Le, c(a.$t("generics.name")), 1), e("p", Ge, c(a.documentDetails.documentName), 1)]), n(W, {
                class: "my-4"
            }), e("div", Oe, [e("p", Be, c(a.$t("generics.type")), 1), e("p", Pe, c(s(a.documentDetails.documentType)), 1)]), n(W, {
                class: "my-4"
            }), e("div", Me, [e("p", null, c(a.$t("generics.validation")), 1), a.isLoading ? (r(), x(Z, {
                key: 0,
                class: "rounded-lg bg-background mb-2",
                type: "list-item"
            })) : S("", !0), a.isLoading ? S("", !0) : (r(), g("p", {
                key: 1,
                class: B(l(u).validationTextClass)
            }, c(l(u).validationText), 3))])]), e("div", Fe, [e("p", je, c(a.$t("signature.by")), 1), a.isLoading ? (r(), g(L, {
                key: 0
            }, F(2, m => n(Z, {
                key: m,
                class: "rounded-lg bg-background mb-2",
                type: "list-item-avatar-two-line"
            })), 64)) : S("", !0), a.isLoading ? S("", !0) : (r(!0), g(L, {
                key: 1
            }, F(a.documentDetails.signedBy, (m, b) => (r(), g("div", {
                key: b,
                class: "d-flex flex-sm-row flex-column justify-space-between align-center bg-background rounded-lg px-4 py-2 mb-2"
            }, [e("div", qe, [e("div", null, [e("p", He, c(m.name), 1), e("p", ze, c(a.$t(m.isResident ? "signature.eid" : "signature.id")) + ": " + c(m.isResident ? l(f)(m.idn) : m.idn), 1)])]), e("div", Ye, [e("p", Ke, c(l(o)(m.signingTimestamp)), 1)])]))), 128))])]))
        }
    }),
    Ze = w(We, [
        ["__scopeId", "data-v-96f876c8"]
    ]),
    Qe = () => ({
        verifyDocument: async t => {
            const d = new FormData;
            d.append("document", t, t.name);
            const {
                data: s
            } = await $e(() => ye.utils.verify(d), "$o2DEHIeqES");
            return s.value
        }
    });
var V = (i => (i.REQUEST_ERROR = "-1", i.NO_SIGNATURE_FOUND = "0", i.VALID_SIGNATURE = "1", i.VALID_SIGNATURE_WITH_REVISIONS = "2", i.INVALID_SIGNATURE = "3", i.CANNOT_VALIDATE_SIGNATURE = "4", i.RESTRICTED_DOCUMENT = "5", i.INVALID_DOCUMENT = "6", i))(V || {});
const Je = {
        class: "font-weight-600 letter-spacing-0"
    },
    Xe = y({
        __name: "Button",
        setup(i) {
            const t = R(null),
                d = R(null),
                s = R(null),
                o = R(!1),
                {
                    t: f
                } = q(),
                {
                    langCode: u
                } = P(),
                a = X({
                    documentName: "",
                    documentType: "PDF",
                    signatureValidation: !1,
                    signatureLevel: "qualified",
                    signedBy: []
                }),
                {
                    verifyDocument: h
                } = Qe(),
                m = () => {
                    var p;
                    (p = t.value) == null || p.click()
                },
                b = p => {
                    p && p.length > 0 && (localStorage.setItem("signing-filename", p[0].name), D(p[0]))
                },
                D = async p => {
                    try {
                        if (!p) return;
                        o.value = !0, a.documentName = p.name, a.documentType = p.type;
                        const _ = await h(p);
                        a.signatureValidation = !!(_ != null && _.valid), a.signedBy = (_ == null ? void 0 : _.signers) || [], o.value = !1, a.signatureValidation ? await se() : await K(_ == null ? void 0 : _.status, _ == null ? void 0 : _.statusMsg)
                    } catch {
                        o.value = !1, await K(V.NO_SIGNATURE_FOUND, void 0)
                    } finally {
                        t.value && (t.value.value = null)
                    }
                },
                se = async () => {
                    const {
                        title: p,
                        description: _
                    } = Y(V.VALID_SIGNATURE, void 0), I = {
                        icon: "uaepass-checkmark",
                        iconColor: "success",
                        title: p,
                        contentText: _,
                        primaryButtonText: f("verifyDocument.primaryButtonText"),
                        secondaryButtonText: f("verifyDocument.secondaryButtonText"),
                        contentAlignment: M.MIDDLE,
                        actionAlignment: M.MIDDLE,
                        width: 450
                    };
                    (await d.value.open(I)).accepted || s.value.open({
                        width: 480,
                        height: 800
                    })
                },
                Y = (p, _) => {
                    let I = "invalidSignature";
                    p === V.NO_SIGNATURE_FOUND ? I = "noSignature" : p === V.INVALID_DOCUMENT ? I = "invalidDocument" : p === V.VALID_SIGNATURE && (I = "validSignature");
                    const N = f(`verifyDocument.${I}.title`),
                        G = (u.value === "en" ? _ == null ? void 0 : _.statusMsgEn : _ == null ? void 0 : _.statusMsgAr) || f(`verifyDocument.${I}.description`);
                    return {
                        title: N,
                        description: G
                    }
                },
                K = async (p, _) => {
                    const {
                        title: I,
                        description: N
                    } = Y(p, _), G = {
                        icon: "mdi-cancel",
                        title: I,
                        contentText: N,
                        primaryButtonText: f("verifyDocument.primaryButtonText"),
                        contentAlignment: M.MIDDLE,
                        actionAlignment: M.MIDDLE,
                        width: 450
                    };
                    await d.value.open(G)
                },
                ae = () => {
                    s.value.close()
                };
            return (p, _) => {
                const I = ve,
                    N = be,
                    G = Ze;
                return r(), g(L, null, [e("input", {
                    ref_key: "inputField",
                    ref: t,
                    type: "file",
                    name: "upload",
                    hidden: "",
                    accept: "application/pdf",
                    "aria-label": "upload file",
                    onChange: _[0] || (_[0] = ie => b(ie.target.files))
                }, null, 544), n(U, {
                    variant: "tonal",
                    class: "me-lg-4 me-2 mt-sm-0 mt-2 verify__btn",
                    onClick: m
                }, {
                    default: v(() => [n(E, {
                        color: "white",
                        class: "me-2"
                    }, {
                        default: v(() => [T("mdi-check-decagram-outline")]),
                        _: 1
                    }), e("span", Je, c(p.$t("landing.verifyDocument")), 1)]),
                    _: 1
                }), n(I, {
                    visible: l(o)
                }, null, 8, ["visible"]), n(N, {
                    ref_key: "verifyStatusModal",
                    ref: d
                }, null, 512), n(N, {
                    ref_key: "verifyDocumentDetailsModal",
                    ref: s
                }, {
                    default: v(() => [n(G, {
                        "document-details": l(a),
                        "is-loading": l(o)
                    }, null, 8, ["document-details", "is-loading"]), n(U, {
                        variant: l(we).TONAL,
                        color: l(xe).SURFACE,
                        size: "large",
                        class: "mt-4",
                        block: !0,
                        onClick: ae
                    }, {
                        default: v(() => [T(c(p.$t("verifyDocument.primaryButtonText")), 1)]),
                        _: 1
                    }, 8, ["variant", "color"])]),
                    _: 1
                }, 512)], 64)
            }
        }
    }),
    oe = w(Xe, [
        ["__scopeId", "data-v-5bdf237f"]
    ]),
    et = {
        general: {
            ar: "https://www.youtube.com/embed/zzPIMGlMYdI?controls=0",
            en: "https://www.youtube.com/embed/i7wHmROiWf0?controls=0"
        },
        access: {
            ar: "https://www.youtube.com/embed/ZEwtH3jAm2M?controls=0",
            en: "https://www.youtube.com/embed/Bm1Bdq6NAAo?controls=0"
        },
        signature: {
            ar: "https://www.youtube.com/embed/ZDbeZpRtTPI?controls=0",
            en: "https://www.youtube.com/embed/q4FuFlwyzkI?controls=0"
        },
        documents: {
            en: "https://www.youtube.com/embed/8qtP7K9fRec?controls=0",
            ar: "https://www.youtube.com/embed/5MeT1bSb4i0?controls=0"
        }
    },
    tt = ["src"],
    z = y({
        __name: "video",
        props: {
            name: {}
        },
        setup(i) {
            const {
                langCode: t
            } = P(), d = i, s = R(!1), o = k(() => et[d.name][t.value]);
            return (f, u) => (r(), x(fe, {
                modelValue: l(s),
                "onUpdate:modelValue": u[0] || (u[0] = a => ee(s) ? s.value = a : null),
                activator: "parent",
                width: "auto"
            }, {
                default: v(() => [e("iframe", {
                    class: "video-iframe",
                    title: "videoFrame",
                    style: {
                        border: "none"
                    },
                    alt: "About uaepass video",
                    src: l(o)
                }, null, 8, tt)]),
                _: 1
            }, 8, ["modelValue"]))
        }
    }),
    nt = {},
    ot = {
        class: "actions d-flex flex-sm-nowrap flex-wrap justify-sm-start justify-center mb-lg-16 mb-8"
    },
    st = {
        class: "font-weight-600 letter-spacing-0"
    };

function at(i, t) {
    const d = ne,
        s = oe,
        o = z;
    return r(), g("div", ot, [n(d), n(s), n(U, {
        variant: "text",
        class: "mt-sm-0 mt-2"
    }, {
        default: v(() => [n(E, {
            color: "white",
            class: "me-2"
        }, {
            default: v(() => [T("mdi-play-circle-outline")]),
            _: 1
        }), e("span", st, c(i.$t("landing.watchVideo")), 1), n(o, {
            name: "general"
        })]),
        _: 1
    })])
}
const it = w(nt, [
        ["render", at],
        ["__scopeId", "data-v-a88e803d"]
    ]),
    ct = {},
    lt = {
        class: "logo mt-md-4 mt-0 d-sm-block d-flex flex-column align-center"
    },
    rt = {
        class: "text-body-2"
    },
    dt = {
        class: "d-flex flex-sm-row flex-column align-center mt-4 collaborators__images ga-8"
    };

function _t(i, t) {
    return r(), g("div", lt, [e("p", rt, c(i.$t("landing.inCollaborationWith")), 1), e("div", dt, [n(A, {
        src: ce,
        alt: "Digital Dubai logo",
        width: "81px",
        class: "logo__dda"
    }), n(A, {
        src: le,
        alt: "TDRA logo",
        width: "195px",
        class: "logo__tdra"
    }), n(A, {
        src: re,
        alt: "Adda logo",
        width: "241px",
        class: "logo__adda"
    })])])
}
const mt = w(ct, [
        ["render", _t],
        ["__scopeId", "data-v-bcd69873"]
    ]),
    ut = H("/images/u-pass-mobile.png"),
    pt = H("/images/u-pass-mobile-ar.png"),
    gt = H("/images/qr-code.png"),
    ft = {
        class: "banner full__width-container d-flex flex-md-row flex-column-reverse position-relative text-color-on-primary"
    },
    ht = {
        class: "banner__content d-flex flex-column"
    },
    vt = {
        class: "text-sm-h3 text-h4 font-weight-bold"
    },
    bt = {
        class: "text-sm-h5 text-subtitle-1 font-weight-600 mt-1"
    },
    $t = {
        class: "text-sm-body-1 text-body-2 mt-lg-6 mt-2 mb-lg-8 mb-sm-6 mb-4"
    },
    yt = {
        class: "banner__images d-flex justify-center"
    },
    wt = {
        class: "text-sm-h5 text-overline font-weight-thin mt-sm-4 mt-2 banner__line-height"
    },
    xt = {
        class: "text-sm-h5 text-overline font-weight-bold banner__line-height"
    },
    It = y({
        __name: "Banner",
        setup(i) {
            const {
                langCode: t
            } = P(), d = k(() => t.value === "en" ? "" : "banner__qr-wrapper--rtl");
            return (s, o) => {
                const f = it,
                    u = mt;
                return r(), g("div", ft, [e("div", ht, [e("h1", vt, c(s.$t("landing.uaePass")), 1), e("h5", bt, c(s.$t("landing.banner.shortDesc")), 1), e("p", $t, c(s.$t("landing.banner.longDesc")), 1), n(f), n(u)]), e("div", yt, [l(t) === "en" ? (r(), x(A, {
                    key: 0,
                    src: ut,
                    class: "banner__mobile",
                    alt: "mobile uaepass image"
                })) : (r(), x(A, {
                    key: 1,
                    src: pt,
                    alt: "green background mobile image",
                    class: "banner__mobile",
                    "aria-hidden": "true"
                })), e("div", {
                    class: B(["banner__qr-wrapper", l(d)])
                }, [n(A, {
                    src: gt,
                    class: "banner__qr",
                    alt: "qr code image"
                }), e("p", wt, c(s.$t("landing.download")), 1), e("p", xt, c(s.$t("landing.uaePass")), 1)], 2)])])
            }
        }
    }),
    Dt = w(It, [
        ["__scopeId", "data-v-f1abacc5"]
    ]),
    Tt = {
        class: "flex-1 tips__item-container"
    },
    At = {
        class: "d-flex flex-column mt-md-0 mt-10 tips__item"
    },
    Et = {
        class: "text-sm-h5 text-h6 font-weight-600 text-color-gray-70 mt-5"
    },
    Nt = {
        class: "tips__desc mt-3"
    },
    St = y({
        __name: "Tip",
        props: {
            name: {},
            icon: {}
        },
        setup(i) {
            return (t, d) => (r(), g("div", Tt, [e("div", At, [n(E, {
                size: "40",
                color: "#AA8F00"
            }, {
                default: v(() => [T(c(t.icon), 1)]),
                _: 1
            }), e("p", Et, c(t.$t(`landing.convenience.${t.name}.word`)), 1), e("p", Nt, c(t.$t(`landing.convenience.${t.name}.shortDesc`)), 1), e("a", {
                class: "mt-4 text-subtitle-1 font-weight-medium text-decoration-none text-color-primary-60 cursor-pointer",
                onClick: d[0] || (d[0] = s => ("navigateTo" in t ? t.navigateTo : l(j))(`#${t.name}`)),
                tabindex: "0"
            }, [T(c(t.$t("landing.learnMore")) + " ", 1), n(E, {
                size: "20"
            }, {
                default: v(() => [T(c(t.$t("icons.arrowRightThin")), 1)]),
                _: 1
            })])])]))
        }
    }),
    kt = w(St, [
        ["__scopeId", "data-v-99e549d0"]
    ]),
    {
        public: {
            deepLinkAndroid: Ct,
            deepLinkIos: Vt
        }
    } = J(),
    O = {
        [$.SECURESIGNIN]: {
            image: "/images/secure-sign.png",
            class: "flex-row",
            actions: [{
                label: "explorePartners",
                variant: "tonal",
                icon: "mdi-compass-outline",
                color: "#fff",
                url: "/service-provider"
            }, {
                label: "watchVideo",
                variant: "text",
                icon: "mdi-play-circle-outline",
                color: "#11A56F",
                url: "",
                video: "access"
            }]
        },
        [$.DIGITALSIGNATURE]: {
            image: "/images/digital-signatures.png",
            class: "flex-row-reverse"
        },
        [$.DOCUMENTSHARING]: {
            image: "/images/document-sharing.png",
            class: "flex-row",
            actions: [{
                label: "exploreServices",
                variant: "tonal",
                icon: "mdi-compass-outline",
                color: "#fff",
                url: "/service-provider"
            }, {
                label: "watchVideo",
                variant: "text",
                icon: "mdi-play-circle-outline",
                color: "#11A56F",
                url: "",
                video: "documents"
            }]
        }
    },
    Q = {
        [C.DOWNLOADSTEP]: {
            image: "/images/download-step.png",
            actions: [{
                image: "/images/apple-store.png",
                url: Vt,
                variant: "tonal"
            }, {
                image: "/images/google-play.png",
                url: Ct,
                variant: "tonal"
            }]
        },
        [C.REGISTERSTEP]: {
            image: "/images/register-step.png",
            actions: [{
                label: "watchVideo",
                icon: "mdi-play-circle-outline",
                variant: "text",
                video: "general"
            }]
        },
        [C.VERIFYSTEP]: {
            image: "/images/verify-step.png",
            actions: [{
                label: "nearestKiosk",
                icon: "mdi-map-marker-outline",
                url: "/locations",
                variant: "text"
            }]
        }
    },
    Rt = ["id"],
    Ut = {
        class: "tip__text d-flex flex-column justify-center"
    },
    Lt = {
        class: "tip__phone text-color-secondary-secondary font-weight-600 text-body-2 mb-2"
    },
    Gt = {
        class: "tip__heading mb-4 text-color-gray-70 font-weight-600"
    },
    Ot = {
        class: "tip__desc text-color-gray-50 mb-2"
    },
    Bt = {
        class: "tip__learn font-weight-600 text-color-on-surface-variant mt-10"
    },
    Pt = {
        key: 1,
        class: "d-flex flex-wrap"
    },
    Mt = {
        class: "letter-spacing-0"
    },
    Ft = {
        class: "d-flex align-center justify-center py-sm-13 py-7"
    },
    jt = y({
        __name: "Detail",
        props: {
            name: {}
        },
        setup(i) {
            const t = i,
                d = X([{
                    "d-flex": !0
                }, {
                    "justify-space-between": !0
                }, {
                    tip: !0
                }, {
                    "mt-8": !0
                }, {
                    [O[t.name].class]: !0
                }, {
                    "flex-column-reverse": !0
                }, {
                    "flex-sm-row": t.name !== $.DIGITALSIGNATURE
                }, {
                    "flex-sm-row-reverse": t.name === $.DIGITALSIGNATURE
                }]),
                s = (o, f) => {
                    let u = o ? "me-sm-4 me-2 mt-5" : "mt-5";
                    return u += " font-weight-600 d-flex", f === "text" ? u += " text-color-primary-60" : u += " text-color-on-primary bg-color-primary-0", u
                };
            return (o, f) => {
                const u = ne,
                    a = oe,
                    h = z;
                return r(), g("div", {
                    id: o.name,
                    class: B(l(d))
                }, [e("div", Ut, [e("p", Lt, c(o.$t("landing.throughYourSmartphone")), 1), e("h2", Gt, c(o.$t(`landing.convenience.${o.name}.heading`)), 1), e("p", Ot, c(o.$t(`landing.convenience.${o.name}.longDesc`)), 1), e("p", Bt, c(o.$t("landing.learnUaePassUse")), 1), o.name === l($).DIGITALSIGNATURE ? (r(), x(te, {
                    key: 0,
                    class: "d-flex flex-wrap mt-5"
                }, {
                    default: v(() => [n(u, {
                        class: "d-flex"
                    }), n(a, {
                        color: "white"
                    })]),
                    _: 1
                })) : (r(), g("div", Pt, [(r(!0), g(L, null, F(l(O)[o.name].actions, (m, b) => (r(), x(U, {
                    key: b,
                    class: B([s(b < l(O)[o.name].actions.length - 1, m.variant), "cursor-pointer"]),
                    variant: m.variant,
                    onClick: D => ("navigateTo" in o ? o.navigateTo : l(j))(m.url)
                }, {
                    default: v(() => [n(E, {
                        color: m.color,
                        class: "me-2"
                    }, {
                        default: v(() => [T(c(m.icon), 1)]),
                        _: 2
                    }, 1032, ["color"]), e("span", Mt, c(o.$t(`landing.${m.label}`)), 1), m.video ? (r(), x(h, {
                        key: 0,
                        name: m.video
                    }, null, 8, ["name"])) : S("", !0)]),
                    _: 2
                }, 1032, ["class", "variant", "onClick"]))), 128))]))]), e("div", Ft, [n(A, {
                    src: l(O)[o.name].image,
                    class: "tip__image",
                    alt: `${l(O)[o.name]} image`
                }, null, 8, ["src", "alt"])])], 10, Rt)
            }
        }
    }),
    qt = w(jt, [
        ["__scopeId", "data-v-5d0ad5db"]
    ]),
    Ht = {
        class: "full__width-container py-sm-16 py-8"
    },
    zt = y({
        __name: "index",
        setup(i) {
            return (t, d) => {
                const s = qt;
                return r(), g("div", Ht, [n(s, {
                    name: l($).SECURESIGNIN
                }, null, 8, ["name"]), n(s, {
                    name: l($).DIGITALSIGNATURE
                }, null, 8, ["name"]), n(s, {
                    name: l($).DOCUMENTSHARING
                }, null, 8, ["name"])])
            }
        }
    }),
    Yt = {
        class: "convenience__wrapper"
    },
    Kt = {
        class: "full__width-container"
    },
    Wt = {
        class: "py-sm-16 py-8"
    },
    Zt = {
        class: "text-sm-h4 text-h5 font-weight-bold"
    },
    Qt = {
        class: "text-body-1 text-color-gray-50 mt-4"
    },
    Jt = {
        class: "d-flex flex-md-row flex-column justify-space-between mt-md-12 mt-0 convenience__tips-container"
    },
    Xt = y({
        __name: "index",
        setup(i) {
            return (t, d) => {
                const s = kt,
                    o = zt;
                return r(), g(L, null, [e("div", Yt, [e("div", Kt, [e("div", Wt, [e("h2", Zt, c(t.$t("landing.convenience.heading")), 1), e("p", Qt, c(t.$t("landing.convenience.desc")), 1), e("div", Jt, [n(s, {
                    name: l($).SECURESIGNIN,
                    icon: "mdi-shield-lock-outline"
                }, null, 8, ["name"]), n(s, {
                    name: l($).DIGITALSIGNATURE,
                    icon: "uaepass-pencil-outline"
                }, null, 8, ["name"]), n(s, {
                    name: l($).DOCUMENTSHARING,
                    icon: "uaepass-doc-badge"
                }, null, 8, ["name"])])])])]), n(o)], 64)
            }
        }
    }),
    en = w(Xt, [
        ["__scopeId", "data-v-0f365038"]
    ]),
    tn = {
        class: "d-flex flex-column text-center align-center register__step mt-sm-0 mt-10"
    },
    nn = {
        class: "register__head mt-n4"
    },
    on = {
        class: "register__desc mt-3"
    },
    sn = {
        class: "d-flex mt-4"
    },
    an = ["onClick", "aria-label"],
    cn = y({
        __name: "Step",
        props: {
            name: {}
        },
        setup(i) {
            return (t, d) => {
                const s = z;
                return r(), g("div", tn, [n(A, {
                    src: l(Q)[t.name].image,
                    class: "register__banner-img",
                    alt: "step icon"
                }, null, 8, ["src"]), e("h3", nn, c(t.$t(`landing.signup.${t.name}.word`)), 1), e("p", on, c(t.$t(`landing.signup.${t.name}.desc`)), 1), e("div", sn, [(r(!0), g(L, null, F(l(Q)[t.name].actions, (o, f) => (r(), g("span", {
                    key: f
                }, [o.icon ? (r(), x(U, {
                    key: 0,
                    variant: o.variant,
                    "prepend-icon": o.icon,
                    class: "cursor-pointer",
                    onClick: u => ("navigateTo" in t ? t.navigateTo : l(j))(o.url)
                }, {
                    prepend: v(() => [n(E, {
                        color: "success"
                    })]),
                    default: v(() => [T(" " + c(t.$t(`landing.${o.label}`)) + " ", 1), o.video ? (r(), x(s, {
                        key: 0,
                        name: o.video
                    }, null, 8, ["name"])) : S("", !0)]),
                    _: 2
                }, 1032, ["variant", "prepend-icon", "onClick"])) : (r(), g("a", {
                    key: 1,
                    onClick: u => ("navigateTo" in t ? t.navigateTo : l(j))(o.url),
                    "aria-label": `navigate to ${o.url}`,
                    class: "cursor-pointer",
                    tabindex: "0"
                }, [n(A, {
                    src: o.image,
                    class: "me-2 register__img",
                    alt: "action step image"
                }, null, 8, ["src"])], 8, an))]))), 128))])])
            }
        }
    }),
    ln = w(cn, [
        ["__scopeId", "data-v-164d3229"]
    ]),
    rn = {
        class: "signup"
    },
    dn = {
        class: "signup__head text-color-gray-70 font-weight-bold mb-4"
    },
    _n = {
        class: "signup__desc mb-sm-16 mb-0"
    },
    mn = {
        class: "d-flex flex-sm-row flex-column align-center align-sm-start justify-space-between"
    },
    un = y({
        __name: "index",
        setup(i) {
            return (t, d) => {
                const s = ln;
                return r(), g("div", rn, [e("h2", dn, c(t.$t("landing.signup.heading")), 1), e("p", _n, c(t.$t("landing.signup.desc")), 1), e("div", mn, [n(s, {
                    name: l(C).DOWNLOADSTEP
                }, null, 8, ["name"]), n(s, {
                    name: l(C).REGISTERSTEP
                }, null, 8, ["name"]), n(s, {
                    name: l(C).VERIFYSTEP
                }, null, 8, ["name"])])])
            }
        }
    }),
    pn = w(un, [
        ["__scopeId", "data-v-19c9428e"]
    ]),
    gn = {},
    fn = {
        class: "text-center mt-8"
    },
    hn = {
        class: "contact__text text-color-gray-50 font-weight-600"
    },
    vn = {
        style: {
            direction: "ltr"
        }
    },
    bn = {
        href: "tel:600561111",
        class: "contact__number text-decoration-none text-color-primary-60 font-weight-bold"
    };

function $n(i, t) {
    return r(), g("div", fn, [e("p", hn, c(i.$t("contactSupport.callUs")), 1), e("div", vn, [e("a", bn, c(i.$t("contactSupport.number")), 1)])])
}
const yn = w(gn, [
        ["render", $n],
        ["__scopeId", "data-v-9b4e19f4"]
    ]),
    wn = {},
    xn = {
        class: "bg-color-surface-1"
    },
    In = {
        class: "contact"
    };

function Dn(i, t) {
    const d = de,
        s = yn;
    return r(), g("div", xn, [e("div", In, [n(d, {
        head: "contactSupport.head",
        desc: "contactSupport.desc"
    }), n(s)])])
}
const Tn = w(wn, [
        ["render", Dn],
        ["__scopeId", "data-v-cc0dc5fb"]
    ]),
    An = y({
        __name: "index",
        setup(i) {
            const t = he(),
                {
                    error: d
                } = t.query,
                s = R(["invalid_request", "login_required", "access_denied", "cancelledOnApp"].includes(d));
            return (o, f) => {
                const u = en,
                    a = pn,
                    h = Tn,
                    m = Ie;
                return r(), x(te, null, {
                    default: v(() => [n(u), n(a), n(h), n(m, {
                        visible: l(s),
                        "onUpdate:visible": f[0] || (f[0] = b => ee(s) ? s.value = b : null),
                        icon: "mdi-message-alert-outline",
                        title: "errors.loginCanceled.title",
                        description: "errors.loginCanceled.desc",
                        error: !!l(d),
                        "ok-text": "actions.close"
                    }, null, 8, ["visible", "error"])]),
                    _: 1
                })
            }
        }
    }),
    En = {
        class: "banner__wrapper"
    },
    Nn = y({
        __name: "index",
        setup(i) {
            const {
                t
            } = q(), {
                langCode: d
            } = P(), s = k(() => d.value === "en" ? "" : "banner__images-color--rtl"), o = k(() => t("landing.uaePass") + " | " + t("pages.home"));
            return Te({
                title: o
            }), (f, u) => {
                const a = _e,
                    h = Dt,
                    m = An,
                    b = me,
                    D = De;
                return r(), x(D, null, {
                    default: v(() => [e("div", En, [e("div", {
                        class: B(["banner__images-color", l(s)])
                    }, null, 2), n(a, {
                        type: l(Ae).TRANSPARENT,
                        page: l(Ee).HOME
                    }, null, 8, ["type", "page"]), n(h)]), n(m), n(b)]),
                    _: 1
                })
            }
        }
    }),
    jn = w(Nn, [
        ["__scopeId", "data-v-1f289850"]
    ]);
export {
    jn as
    default
};