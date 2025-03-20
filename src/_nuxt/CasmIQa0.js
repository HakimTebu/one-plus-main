import {
    a as C,
    b4 as d,
    r as v,
    b5 as O,
    ag as T,
    b6 as E,
    b7 as S,
    W as G,
    b8 as P,
    b9 as B,
    G as M,
    b2 as q,
    ba as H
} from "./l52uiMmy.js";
const K = a => a === "defer" || a === !1;

function X(...a) {
    var g;
    const n = typeof a[a.length - 1] == "string" ? a.pop() : void 0;
    typeof a[0] != "string" && a.unshift(n);
    let [t, l, e = {}] = a;
    if (typeof t != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof l != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const s = C(),
        y = l,
        h = () => d.value,
        p = () => s.isHydrating ? s.payload.data[t] : s.static.data[t];
    e.server = e.server ? ? !0, e.default = e.default ? ? h, e.getCachedData = e.getCachedData ? ? p, e.lazy = e.lazy ? ? !1, e.immediate = e.immediate ? ? !0, e.deep = e.deep ? ? d.deep, e.dedupe = e.dedupe ? ? "cancel";
    const f = () => e.getCachedData(t, s) != null;
    if (!s._asyncData[t] || !e.immediate) {
        (g = s.payload._errors)[t] ? ? (g[t] = d.errorValue);
        const i = e.deep ? v : O;
        s._asyncData[t] = {
            data: i(e.getCachedData(t, s) ? ? e.default()),
            pending: v(!f()),
            error: T(s.payload._errors, t),
            status: v("idle"),
            _default: e.default
        }
    }
    const r = { ...s._asyncData[t]
    };
    delete r._default, r.refresh = r.execute = (i = {}) => {
        if (s._asyncDataPromises[t]) {
            if (K(i.dedupe ? ? e.dedupe)) return s._asyncDataPromises[t];
            s._asyncDataPromises[t].cancelled = !0
        }
        if ((i._initial || s.isHydrating && i._initial !== !1) && f()) return Promise.resolve(e.getCachedData(t, s));
        r.pending.value = !0, r.status.value = "pending";
        const u = new Promise((c, o) => {
            try {
                c(y(s))
            } catch (m) {
                o(m)
            }
        }).then(async c => {
            if (u.cancelled) return s._asyncDataPromises[t];
            let o = c;
            e.transform && (o = await e.transform(c)), e.pick && (o = V(o, e.pick)), s.payload.data[t] = o, r.data.value = o, r.error.value = d.errorValue, r.status.value = "success"
        }).catch(c => {
            if (u.cancelled) return s._asyncDataPromises[t];
            r.error.value = B(c), r.data.value = M(e.default()), r.status.value = "error"
        }).finally(() => {
            u.cancelled || (r.pending.value = !1, delete s._asyncDataPromises[t])
        });
        return s._asyncDataPromises[t] = u, s._asyncDataPromises[t]
    }, r.clear = () => R(s, t);
    const D = () => r.refresh({
            _initial: !0
        }),
        w = e.server !== !1 && s.payload.serverRendered; {
        const i = q();
        if (i && !i._nuxtOnBeforeMountCbs) {
            i._nuxtOnBeforeMountCbs = [];
            const o = i._nuxtOnBeforeMountCbs;
            E(() => {
                o.forEach(m => {
                    m()
                }), o.splice(0, o.length)
            }), S(() => o.splice(0, o.length))
        }
        w && s.isHydrating && (r.error.value || f()) ? (r.pending.value = !1, r.status.value = r.error.value ? "error" : "success") : i && (s.payload.serverRendered && s.isHydrating || e.lazy) && e.immediate ? i._nuxtOnBeforeMountCbs.push(D) : e.immediate && D();
        const u = H();
        if (e.watch) {
            const o = G(e.watch, () => r.refresh());
            u && P(o)
        }
        const c = s.hook("app:data:refresh", async o => {
            (!o || o.includes(t)) && await r.refresh()
        });
        u && P(c)
    }
    const _ = Promise.resolve(s._asyncDataPromises[t]).then(() => r);
    return Object.assign(_, r), _
}

function R(a, n) {
    n in a.payload.data && (a.payload.data[n] = void 0), n in a.payload._errors && (a.payload._errors[n] = d.errorValue), a._asyncData[n] && (a._asyncData[n].data.value = void 0, a._asyncData[n].error.value = d.errorValue, a._asyncData[n].pending.value = !1, a._asyncData[n].status.value = "idle"), n in a._asyncDataPromises && (a._asyncDataPromises[n] && (a._asyncDataPromises[n].cancelled = !0), a._asyncDataPromises[n] = void 0)
}

function V(a, n) {
    const t = {};
    for (const l of n) t[l] = a[l];
    return t
}

function b(a, n = {}) {
    const t = {},
        l = $fetch.create({
            credentials: "include"
        });
    for (const e in a) Object.hasOwn(a, e) && (t[e] = async s => {
        const y = a[e](s),
            {
                url: h,
                ...p
            } = { ...y,
                ...n
            };
        return await l(h, p)
    });
    return t
}
const j = () => ({
        url: "/api/v1/utils/listSPs",
        method: "GET"
    }),
    z = () => ({
        url: "/api/v1/utils/listFaqs",
        method: "GET"
    }),
    F = () => ({
        url: "/api/v1/utils/listKiosks",
        method: "GET"
    }),
    N = () => ({
        url: "/api/v1/utils/support/types",
        method: "GET"
    }),
    I = a => ({
        url: "/api/v1/utils/support/send",
        method: "POST",
        body: a
    }),
    U = a => ({
        url: "/api/v2/utils/document/verify",
        method: "POST",
        body: a
    }),
    W = {
        listSPs: j,
        listFaqs: z,
        listKiosks: F,
        supportTypes: N,
        supportSend: I,
        verify: U
    },
    $ = () => ({
        url: "/api/auth/profile",
        method: "GET"
    }),
    J = () => ({
        url: "/api/auth/logout",
        method: "GET"
    }),
    L = {
        getProfile: $,
        logout: J
    },
    Y = {
        auth: b(L),
        utils: b(W)
    };
export {
    Y as a, X as u
};