import {
    r,
    L as b,
    K as g,
    aa as h,
    o as D,
    j as y,
    W as R
} from "./l52uiMmy.js";
import {
    u as S,
    a as E
} from "./CasmIQa0.js";
import {
    S as p,
    R as _
} from "./BAXUfs15.js";
const f = t => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t),
    i = "O",
    z = t => {
        const c = r([]),
            d = r(null),
            u = r(!1),
            T = r(!1),
            {
                langCode: m
            } = b(),
            {
                t: o
            } = g(),
            e = h({
                lang: m,
                supportType: null,
                caseSubject: "",
                description: "",
                email: "",
                recaptchaToken: ""
            }),
            v = () => {
                t === p.DELETE_ACCOUNT ? (e.description = "", e.email = "", e.supportType = i, e.caseSubject = o("deleteAccount.head")) : (e.supportType = null, e.caseSubject = "", e.description = "", e.email = "")
            },
            A = async () => {
                var s, n;
                const {
                    data: a
                } = await S(() => E.utils.supportTypes(), "$t47QatvzOs");
                ((s = a.value) == null ? void 0 : s.code) === _.SUCCESS && ((n = a.value) != null && n.types) && (c.value = a.value.types.filter(l => l.code !== "G" && l.code !== "P" && l.code !== "I"))
            };
        D(async () => {
            t === p.DELETE_ACCOUNT ? (c.value = [{
                en: "Delete Account",
                ar: "حذف الحساب",
                code: i
            }], e.supportType = i, e.caseSubject = o("deleteAccount.head")) : await A()
        });
        const C = async a => {
                try {
                    u.value = !0;
                    const s = e;
                    s.recaptchaToken = a;
                    const {
                        data: n
                    } = await S(() => E.utils.supportSend(s), "$S5ySL9r4jm");
                    return n.value
                } catch (s) {
                    d.value = s
                } finally {
                    u.value = !1
                }
            },
            j = y(() => [a => !!a || o("required.email"), a => f(a) || o("required.invalidEmail")]),
            O = y(() => !(e.supportType && e.caseSubject && e.description && e.email && f(e.email) && T.value && !u.value));
        return R(m, () => {
            t === p.DELETE_ACCOUNT && (e.caseSubject = o("deleteAccount.head"))
        }), {
            supportTypes: c,
            formValues: e,
            pending: u,
            error: d,
            agree: T,
            emailRules: j,
            isDisabled: O,
            sendTicket: C,
            resetForm: v
        }
    };
export {
    f as i, z as u
};