import {
    b3 as S,
    r as i,
    L as A,
    j as c
} from "./l52uiMmy.js";
import {
    u,
    a as f
} from "./CasmIQa0.js";
const P = S("profile", () => {
        const e = i(void 0),
            s = i(!1);
        return {
            profile: e,
            isAuthenticated: s,
            setProfile: o => {
                e.value = o
            },
            setAuthenticated: o => {
                s.value = o
            }
        }
    }),
    N = () => {
        const {
            profile: e,
            isAuthenticated: s,
            setProfile: r,
            setAuthenticated: a
        } = P(), {
            langCode: o
        } = A(), l = "uaepass_profile", m = () => {
            const t = localStorage.getItem(l);
            t ? (r(JSON.parse(t)), a(!0)) : (a(!1), localStorage.removeItem(l))
        }, g = async () => {
            const {
                data: t
            } = await u(() => f.auth.getProfile(), "$oexzt2uIAV");
            if (t.value) {
                const n = t.value;
                n.isAuthenticated ? (r(n), a(!0), localStorage.setItem(l, JSON.stringify(n))) : (a(!1), localStorage.removeItem(l))
            }
        }, d = async () => {
            const {
                data: t
            } = await u(() => f.auth.logout(), "$j8PWaSjvR1");
            t.value && (a(!1), localStorage.removeItem("uaepass_profile"), localStorage.clear(), window.location.href = "/")
        }, h = c(() => o.value === "en" ? `${e==null?void 0:e.fullNameEn}` : `${e==null?void 0:e.fullNameAr}`), p = c(() => {
            const t = e == null ? void 0 : e.photo;
            return t ? "data:image/png;base64," + t : "/images/placeholder-img.svg"
        }), v = c(() => e == null ? void 0 : e.email);
        return m(), {
            getProfileData: g,
            isAuthenticated: s,
            fullName: h,
            photo: p,
            email: v,
            logout: d
        }
    };
export {
    N as u
};