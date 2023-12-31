!(() => {
    let $ = i => i.dataset,
        r = {},
        s = {},
        o = document.querySelectorAll("[data-bind]"),
        f = (v) => {
            for (i in d = data[v]) window[i] = d[i]
        }
    data.init()
    f('properties')
    f('methods')
    for (i of o) {
        let t = $(i).bind.split(",")
        r[t[0]] = t[1] || i.innerHTML
        y = t[0]
        !(s[y]) && (q = s[y] = [])
        q.push([i, eval(`()=>{${i.dataset.set}}`)])
    }
    for (z in ref = new Proxy(r, {
        set: (i, t, e) => {
            i[t] = e
            for (f of s[t]) f[1](self = f[0])
        }
    })) ref[z] = r[z]
})()