const a = {
        ar: [{
            country: !0,
            code: "ar-AE",
            name: "العربية"
        }]
    },
    c = [{
        code: "ar-AE",
        file: "ar-AE.js",
        name: "العربية",
        dir: "rtl",
        pluralRule: o => {
            const e = new Intl.PluralRules("ar-AE").select(o);
            return {
                zero: 0,
                one: 1,
                two: 2,
                few: 3,
                many: 4,
                other: 5
            }[e]
        }
    }, {
        code: "en-US",
        file: "en-US.js",
        name: "English"
    }];

function i() {
    return Object.values(c).reduce((e, t) => {
        const s = a[t.code];
        return s ? s.forEach(n => {
            const r = { ...t,
                code: n.code,
                name: n.name,
                files: [t.file, `${n.code}.js`]
            };
            delete r.file, e.push(r)
        }) : e.push(t), e
    }, []).sort((e, t) => e.code.localeCompare(t.code))
}
const l = i(),
    u = Object.values(l).reduce((o, e) => {
        const t = e.dateTimeFormats;
        return t ? (o[e.code] = { ...t
        }, delete e.dateTimeFormats) : o[e.code] = {
            shortDate: {
                dateStyle: "short"
            },
            short: {
                dateStyle: "short",
                timeStyle: "short"
            },
            long: {
                dateStyle: "long",
                timeStyle: "medium"
            }
        }, o
    }, {}),
    m = Object.values(l).reduce((o, e) => {
        const t = e.numberFormats;
        return t ? (o[e.code] = { ...t
        }, delete e.numberFormats) : o[e.code] = {
            percentage: {
                style: "percent",
                maximumFractionDigits: 1
            },
            smallCounting: {
                style: "decimal",
                maximumFractionDigits: 0
            },
            kiloCounting: {
                notation: "compact",
                compactDisplay: "short",
                maximumFractionDigits: 1
            },
            millionCounting: {
                notation: "compact",
                compactDisplay: "short",
                maximumFractionDigits: 2
            }
        }, o
    }, {}),
    d = Object.values(l).reduce((o, e) => {
        const t = e.pluralRule;
        return t && (o[e.code] = t, delete e.pluralRule), o
    }, {}),
    f = () => ({
        globalInjection: !0,
        legacy: !1,
        locale: "en-US",
        availableLocales: l.map(o => o.code),
        fallbackLocale: "en-US",
        fallbackWarn: !1,
        missingWarn: !1,
        datetimeFormats: u,
        numberFormats: m,
        pluralRules: d
    });
export {
    f as
    default
};