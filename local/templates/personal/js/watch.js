﻿(function() {
    try {
        (function() {
            function ge(a, c, b, d) {
                var e = this;
                return A(window, "c.i", function() {
                    function f(w) {
                        (w = he(k, l, "", w)(k, l)) && (S(w.then) ? w.then(g) : g(w));
                        return w
                    }

                    function g(w) {
                        w && (S(w) ? m.push(w) : Fa(w) && C(function(J) {
                            var T = J[0];
                            J = J[1];
                            S(J) && ("u" === T ? m.push(J) : h(J, T))
                        }, Ga(w)))
                    }

                    function h(w, J, T) {
                        e[J] = nk(k, l, T || p, J, w)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && dg();
                    var l = ok(a, ie, c, b, d),
                        m = [],
                        p = [eg, he, fg];
                    p.unshift(pk);
                    var r = z(O, ub),
                        v = M(l);
                    l.id || Va(hc("Invalid Metrika id: " + l.id, !0));
                    var x = Dc.o("counters", {});
                    if (x[v]) return vb(k,
                        v, "Duplicate counter " + v + " initialization"), x[v];
                    x[v] = e;
                    Dc.C("counters", x);
                    Dc.ta("counter", e);
                    C(function(w) {
                        w(k, l)
                    }, nd);
                    C(f, Ec);
                    f(qk);
                    h(rk(k, l, m), "destruct", [eg, fg]);
                    Yb(k, D([k, r, f, 1, "a.i"], sk));
                    C(f, Q)
                })()
            }

            function tk(a, c) {
                var b = uk(a),
                    d = [vk(a) || wk(a)];
                gg(a) && d.push(b);
                var e = Z(a);
                b = Ja(a);
                var f = b.o("synced", {});
                d = U(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e($a);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.C("synced", f);
                return z(function(g) {
                    return {
                        Fe: c[g],
                        oe: g
                    }
                }, d)
            }

            function wk(a) {
                a = xk(a);
                return yk[a] || a
            }

            function uk(a) {
                a =
                    hg(a);
                return zk[a] || "ru"
            }

            function Ak(a, c, b, d) {
                var e = b.G;
                if (c.Te || !e) d();
                else {
                    var f = od(a),
                        g = ic(a, "");
                    e = function() {
                        var x = ig(f);
                        x = "" + x + Bk(x, g);
                        pd(b, "gdpr", x);
                        d()
                    };
                    if (3 === c.id) e();
                    else {
                        var h = G(a),
                            k = h.o("f1");
                        if (k) k(e);
                        else if (k = (k = ig(f)) ? z(u(qd, n), k.split(",")) : [], jg(k)) e();
                        else {
                            var l = rd(a),
                                m = P(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                Oc: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "),
                                Tc: "_inversed_buttons"
                            } : void 0;
                            var r = (l = l || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", jc, 525600)) : l ? K(m, Jb) ? m === je ? k.push("12") : k.push("3") : ke(a) || Ck(a) ? k.push("17") : Dk(a) && k.push("28") : k.push("14");
                            var v = u(f, Ek);
                            jg(k) ? (C(v, k), e()) : (sd.push(e), h.C("f1", function(x, w) {
                                var J = 0;
                                if (w) {
                                    var T = hb(a, w) || "";
                                    J += T.length
                                }
                                sd.push(x);
                                1E6 >= J && sd.push(x)
                            }), (0, le[0])(a).then(R("params.eu")).then(function(x) {
                                if (x || r) {
                                    g.C("gdpr_popup",
                                        je);
                                    Fk(a, c);
                                    if (wb(a)) return Gk(a, v, c);
                                    var w = kg(a, f);
                                    if (w) return x = Hk(a, v, w, c, p), x.then(D([a, c], Ik)), x
                                }
                                x || v("8");
                                return H.resolve({
                                    value: jc,
                                    Qb: !0
                                })
                            }).then(function(x) {
                                g.gb("gdpr_popup");
                                if (x) {
                                    var w = x.value;
                                    x = x.Qb;
                                    K(w, Jb) && g.C("gdpr", w, x ? void 0 : 525600)
                                }
                                w = me(sd, fa);
                                lg(a, w, 20)(ib(A(a, "gdr"), E));
                                h.C("f1", fa)
                            })["catch"](A(a, "gdp.a")))
                        }
                    }
                }
            }

            function Ik(a, c) {
                if (rd(a)) {
                    var b = od(a),
                        d = wa(a, c);
                    d = d && d.params;
                    b = z(u(Jk, n), ne(b));
                    d && b.length && d("gdpr", U(Boolean, b))
                }
            }

            function Gk(a, c, b) {
                var d = td(a, b);
                return new H(function(e) {
                    var f;
                    if (d) {
                        var g = d.V,
                            h = q(u("4", c), u(null, e)),
                            k = da(a, h, 2E3, "gdp.f.t");
                        d.cd((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.D(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], oe), function(m) {
                                e({
                                    value: mg(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(D([a, k], Ra))
                    } else e({
                        value: je,
                        Qb: !0
                    })
                })
            }

            function Fk(a, c) {
                var b = td(a, c);
                b && b.V.D(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = rd(a), d
                });
                return b
            }

            function Hk(a, c, b, d, e) {
                var f = void 0 === e ? Kk : e;
                e = f.url;
                var g = f.Tc;
                f =
                    Lk(a, f.Oc, d.Ue);
                var h = td(a, d);
                if (!h) return H.resolve({
                    value: jc,
                    Qb: !0
                });
                var k = kc(a, {
                    src: "" + e + f + g + ".js"
                });
                return new H(function(l, m) {
                    k ? (c("7"), k.onerror = function() {
                        var p;
                        c("9");
                        h.bd((p = {}, p.type = "GDPR-ok-view-default", p));
                        l(null)
                    }, k.onload = function() {
                        c("10");
                        b.D(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], oe), function(p) {
                            var r;
                            p = p.type;
                            h.bd((r = {}, r.type = p, r));
                            l({
                                value: mg(p)
                            })
                        })
                    }) : (c("9"), m(Oa("gdp.e")))
                })
            }

            function Lk(a, c, b) {
                a = b || hg(a);
                return K(a, c) ? a : "en"
            }

            function mg(a) {
                if (K(a, ["GDPR-ok-view-default",
                    "GDPR-ok-view-detailed"
                ])) return jc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return K(a, Jb) ? a : jc
            }

            function ng(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    L(e, d)(hb(a, c))
                } catch (f) {} else og = da(a, D([a, c, 2 * b], ng), b, "ai.d");
                return function() {
                    return Ra(a, og)
                }
            }

            function Mk(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = L(c, a.speechSynthesis);
                return Kb(function(b) {
                    return z(u(b, n), Nk)
                }, a())
            }

            function Ok(a, c, b) {
                return I("x", z(q(O, na("concat", "" + a), u(b, n)), c))
            }

            function Pk(a, c) {
                var b =
                    c.Hd;
                if (!Qk(a, b)) return "";
                var d = [];
                a: {
                    var e = Rk(a, b);
                    try {
                        var f = D(e, q)()();
                        break a
                    } catch (J) {
                        if ("ccf" === J.message) {
                            f = null;
                            break a
                        }
                        Va(J)
                    }
                    f = void 0
                }
                if (ab(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (J) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = ya(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (J) {
                    k = []
                }
                k = I(";", k);
                f = pe(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = pe(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    r = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (r) {
                    var v = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === v && (v = 2)
                }
                v = {
                    rf: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": r ? v : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": pe(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                qe(d, v, ": ");
                a: {
                    try {
                        var x = b.getExtension("WEBGL_debug_renderer_info");
                        if (x) {
                            var w = {
                                "webgl unmasked vendor": b.getParameter(x.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(x.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (J) {}
                    w = {}
                }
                qe(d, w);
                if (!b.getShaderPrecisionFormat) return I("~", d);
                qe(d, Sk(b));
                return I("~", d)
            }

            function qe(a, c, b) {
                void 0 === b && (b = ":");
                C(function(d) {
                    return a.push("" +
                        d[0] + b + d[1])
                }, Ga(c))
            }

            function Tk(a, c, b, d) {
                c = d.o("cc");
                d = D(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ka(e)) && 1440 < Z(a)($a) - e) return d();
                    b.C("cc", c)
                } else la(0)(c) || d()
            }

            function Uk(a, c, b, d) {
                return oa(c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !ud(a))
                        if (e = d.o("zzlc"), Y(e) || ab(e) || "na" === e) {
                            e = "ru";
                            var f = re(a, 68),
                                g = se(a, 79);
                            if (f || g) e = "md";
                            if (f = jb(a)) {
                                var h = f("iframe");
                                y(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + pg("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Lb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ha(a).D(a, ["message"], A(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (Zb(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), Ra(a, k))
                                        }));
                                    k = da(a, q(l, u(h, Zb)), 3E3)
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function Vk(a, c, b) {
                var d, e;
                c = Mb(u(a, n), Wk);
                c = Y(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    S(a) && (L(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) &&
                    !a.length && (a = L(a, f)(), d = n(a, "then"), S(d) && L(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        S(h) && L(h, f, g, E, E)()
                    })(), y(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (S(h)) {
                            h = L(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = E;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = $b(k[1]), b.C("pp", g));
                            f.onicecandidate = E;
                            h()
                        }
                    }, e))))
                }
            }

            function Xk(a, c, b) {
                var d, e = Fc(a, c);
                if (e) {
                    e.V.D(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = da(a, D([a, c, b], qg), 200, "pu.m");
                        e.cc(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (Ra(a, g), b.C("pu", l))
                        })
                    } else qg(a, c, b)
                }
            }

            function qg(a, c, b) {
                var d = n(a, "location.host");
                a = vd(a, c);
                b.C("pu", "" + $b(d) + a)
            }

            function rg(a, c, b) {
                c = ic(a, void 0, c);
                c = sg(a, c.o("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? Yk(a, b.vc, {
                    ld: Zk
                }).Xc(g).then(function(h) {
                    return $k(b, {
                        Oa: d,
                        Ua: e,
                        fd: f
                    }, h.Z, g, h.ea)
                })["catch"](function() {}) : H.resolve()
            }

            function Zk(a, c, b) {
                a = al(b.ub);
                if ("href" === b.ac) {
                    var d = b.Ga;
                    c = d.href;
                    b = c.replace(a, b.ya);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.Ga.textContent) || void 0 === d ? void 0 : d.replace(a, b.ya)) && a !== b.Ga.textContent) return b.Ga.textContent = a, !0;
                return !1
            }

            function $k(a, c, b, d, e) {
                var f;
                c.Oa && c.Ua && (c.Oa === a.Oa && c.Ua === a.Ua || y(a, c, {
                    Z: {},
                    Ib: !0
                }), 0 < e && Ha(a.ea, [e]), C(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.Z[l] && a.Z[l][g] ? a.Z[l][g] : 0);
                    y(a.Z,
                        (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), C(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.Z[l] ? a.Z[l][g] : 0);
                    y(a.Z, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Lc && (a.Ib || b.length) && ((c = wa(a.l, a.vc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Oa, f.orderId = a.Ua, f.service_id = a.fd, f.phones = a.Z, f.performance = a.ea, f)), a.Ib = !1))
            }

            function bl(a) {
                a = jb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = na("canPlayType", a),
                        b = Kb(function(d) {
                            return z(q(O, na("concat", d + "; codecs=")), cl)
                        }, tg);
                    return z(c, [].concat(tg, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function dl(a) {
                var c = n(a, "matchMedia");
                if (c && za("matchMedia", c)) {
                    var b = na("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, el)
                }
            }

            function Sk(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                        a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int",
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                    ],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function Rk(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter &&
                    za("getParameter", c.getParameter) || te();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(fl);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.me = 3;
                    b.se = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || te();
                    return {
                        $b: d,
                        Se: e,
                        Re: b
                    }
                }, function(b) {
                    var d = b.$b,
                        e = b.Se;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d,
                        e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || te();
                    return y(b, {
                        Xd: d
                    })
                }, function(b) {
                    var d = b.$b,
                        e = b.Xd;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.$b;
                    b = b.Re;
                    d.Qe = c.getAttribLocation(d, "attrVertex");
                    d.ue = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.bg);
                    c.vertexAttribPointer(d.Qe, b.me, c.FLOAT,
                        !1, 0, 0);
                    c.uniform2f(d.ue, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.se);
                    return c.canvas
                }]
            }

            function Qk(a, c) {
                if (!S(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !za("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function pe(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function gl(a, c, b) {
                function d(r) {
                    return function() {
                        var v = b.o("scip", "") + r;
                        b.C("scip", v)
                    }
                }
                var e, f = Gc(a, "ci");
                f = ob(a, f);
                var g = ue(a),
                    h = Z(a)($a),
                    k = ["sync.cook.int"],
                    l = hl(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"),
                        p = lc(a, c);
                    return f({
                        M: {
                            ga: k,
                            Ja: 1500,
                            Bb: !0
                        },
                        F: (e = {}, e.duid = p, e.hid = "" + xb(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"]).then(function(r) {
                            r = n(r.vb, "CookieMatchUrls");
                            ba(r) || (r = []);
                            Aa(r) ? d("1")() : m();
                            var v = Gc(a, "c"),
                                x = ob(a, v);
                            r = z(function(w, J) {
                                var T = "" + w + (mc(w, "?") ? "&" : "?") + "duid=" + p;
                                return x({
                                    M: {
                                        ga: k,
                                        Ja: 1500
                                    }
                                }, ["https://" + T]).then(E, q(d("b"), d("" + J)))
                            }, U(Ba, r));
                            return H.all(r)
                        },
                        m).then(function() {
                        var r = b.o("scip");
                        !r || mc(r, "a") || mc(r, "b") || (g.C("sci", h), d("2")())
                    }, E)
                }
                return H.resolve()
            }

            function ug(a) {
                return {
                    N: function(c, b) {
                        if (!c.G) return b();
                        var d = G(a).o("fid");
                        !vg && d && (pd(c, "fid", d), vg = !0);
                        return b()
                    }
                }
            }

            function il(a, c) {
                var b = a.document;
                if (K(b.readyState, ["interactive", "complete"])) Yb(a, c);
                else {
                    var d = ha(a),
                        e = d.D,
                        f = d.Xa,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function ve(a) {
                return {
                    N: function(c, b) {
                        var d = c.G;
                        if (d) {
                            var e = G(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            }

            function jl(a) {
                var c = A(a, "i.clch", kl);
                ha(a).D(a.document, ["click"], L(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = pa.va,
                        e = a.Ya[pa.Eb],
                        f = !!e._informer;
                    e._informer = y({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || kc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function ll(a, c) {
                var b = Ja(a);
                if ("" === b.o("cc")) {
                    var d = u("cc", b.C);
                    d(0);
                    var e = Z(a),
                        f = G(a);
                    f = q(R(ml({
                        vb: 1
                    }) + ".c"), Hc(function(g) {
                        d(g + "&" + e($a))
                    }), u("cc", f.C));
                    qa(a, "6", c)({
                            M: {
                                Bb: !0,
                                ud: !1
                            }
                        },
                        ["https://mc.yandex.md/cc"]).then(f)["catch"](q(Hc(function() {
                        var g = e($a);
                        b.C("cc", "&" + g)
                    }), A(a, "cc")))
                }
            }

            function wd(a, c) {
                if (!c) return !1;
                var b = P(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function nl(a, c) {
                return oa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Pd: ol(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function pl(a, c, b, d, e) {
                b = we(a.document.body, b);
                d = we(a.document.body, d);
                K(e.target, [b, d]) && xe(a, c)
            }

            function wg(a, c, b, d) {
                (b = ql(a, d, b)) && xe(a, c, b)
            }

            function xg(a, c) {
                var b = yg(a,
                    c);
                return rl(a, b)
            }

            function yg(a, c) {
                var b = we(a.document.body, c);
                return b ? sl(a, b) : ""
            }

            function xe(a, c, b) {
                if (c = wa(a, c)) a = nc(["dr", b || "" + Wa(a, 10, 99)]), c.params(nc(["__ym", a]))
            }

            function we(a, c) {
                var b = null;
                try {
                    b = c ? ac(c, a) : b
                } catch (d) {}
                return b
            }

            function zg(a) {
                a = Ia(pg(a));
                return z(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Ag("0", 8, c)
                }, a)
            }

            function sl(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                Bg(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f =
                        e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function tl(a, c, b) {
                a = va(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    hb: b
                })
            }

            function ul(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(vl, d + "." + b.hb)) && (c && K(b, wl) || a("ym-" + b + "-" + d))
                }
            }

            function xl(a, c, b) {
                var d, e = Cg(a, c),
                    f = P(a);
                f = xd(f.protocol + "//" + f.hostname + f.pathname);
                c = vd(a, c);
                var g = "";
                do g += Wa(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) -
                    96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function yl(a, c, b) {
                var d = n(b, "data");
                if (Ba(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function zl(a) {
                var c = a.l,
                    b = pb(a.X);
                if (b) {
                    var d = Math.random();
                    a = {
                        x: b.scrollLeft,
                        y: b.scrollTop
                    };
                    if (b.Ub) {
                        if (d = ye[b.Ub], !d || 10 > Math.abs(a.x -
                            d.x) && 10 > Math.abs(a.y - d.y)) return
                    } else {
                        for (; ye[d];) d = Math.random();
                        b.Ub = d
                    }
                    ye[b.Ub] = a;
                    if (b !== c.document) {
                        d = qb(c, b);
                        c = La(c);
                        var e = [];
                        b = b[Ca];
                        !b || 0 > b ? a = [] : (Ma(e, 16), F(e, c), F(e, a.x), F(e, a.y), F(e, b), a = e);
                        a = aa(d, a)
                    } else a = [];
                    return a
                }
            }

            function Dg(a) {
                var c = a.l,
                    b = a.X;
                Eg(a);
                if (b.touches && b.touches.length) {
                    var d = pb(b);
                    if (d && d !== c.document) return aa(qb(c, d), Kb(function(e) {
                        return Fg(c, La(c), "touch", d, [e.pageX, e.pageY], 0, 0)
                    }, Ia(b.touches)))
                }
            }

            function Al(a) {
                var c = a.l;
                a = La(c);
                var b = Ic(c),
                    d = Gg(c);
                c = [];
                var e = b[0];
                b = b[1];
                var f = d[0];
                d = d[1];
                Ma(c, 28);
                F(c, a);
                F(c, e);
                F(c, b);
                F(c, f);
                F(c, d);
                return c
            }

            function Hg(a) {
                var c = [];
                return Sa(a.l, c, 13) ? [] : c
            }

            function Bl(a) {
                var c = a.l;
                a = a.X;
                var b = pb(a);
                if (b) {
                    var d;
                    "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                    if (d) {
                        var e = yd(c, a);
                        a = qb(c, b);
                        c = La(c);
                        e = [e.x, e.y];
                        b = b[Ca];
                        if (!b || 0 > b) b = [];
                        else {
                            var f = [];
                            Ma(f, 31);
                            F(f, c);
                            F(f, b);
                            F(f, e[0]);
                            F(f, e[1]);
                            Ma(f, 0);
                            Ma(f, 0);
                            Ma(f, d);
                            b = f
                        }
                        return aa(a, b)
                    }
                }
            }

            function Eg(a) {
                var c =
                    a.l;
                a = ze(c);
                var b = Z(c)(ca);
                if (!(10 > b - Ig || 10 > Math.abs(a.x - Ae.x) && 10 > Math.abs(a.y - Ae.y))) return Ig = b, Ae = a, c = La(c), b = [], Ma(b, 3), F(b, c), F(b, a.x), F(b, a.y), b
            }

            function Cl(a) {
                var c = a.l,
                    b = a.X,
                    d = Z(c)(ca),
                    e = d - Jg;
                if (!(10 > e)) {
                    c = yd(c, b);
                    b = Be.x - c.x;
                    var f = Be.y - c.y;
                    b = b * b + f * f;
                    if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b)) return Jg = d, Be = c, Jc(a)
                }
            }

            function Dl(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.sd) return H.resolve(E);
                var g = qa(a, "4", c),
                    h = {
                        G: ra()
                    };
                b = new El(a, b, function(l, m, p) {
                    var r;
                    if (!g) return H.resolve();
                    m = "wv-data=" + Kg(l,
                        !0);
                    return g(y({}, h, {
                        M: {
                            W: m
                        },
                        F: (r = {}, r["wv-check"] = "" + Fl(l), r["wv-type"] = "0", r)
                    }), c, p)["catch"](A(a, "m.n.m.s"))
                });
                var k = Gl(a, b, d, e);
                return oa(c, function(l) {
                    l && G(a).C("isEU", n(l, "settings.eu"));
                    if (!G(a).o("oo") && k) {
                        var m = bc(a),
                            p = m.o("visorc");
                        K(p, ["w", "b"]) || (p = "");
                        Lg(a) && Mg(a, zd, "visorc") && !Hl.test(bb(a) || "") || (p = "b");
                        l = n(l, "settings.webvisor.recp");
                        if (!a.isFinite(l) || 0 > l || 1 < l) p = "w";
                        p || (p = G(a).o("hitId") % 1E4 / 1E4 < l ? "w" : "b");
                        m.C("visorc", p, 30);
                        "w" === p && k.start()
                    }
                    return f
                })
            }

            function Gl(a, c, b, d) {
                var e =
                        a.document,
                    f = [],
                    g = ha(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = L(c.flush, c),
                    m = ja(function(v, x) {
                        A(a, "hfv." + v, function() {
                            try {
                                var w = x.type
                            } catch (J) {
                                return
                            }
                            w = K(w, d);
                            c.push(x, {
                                type: v
                            });
                            w && l()
                        })()
                    }),
                    p = A(a, "sfv", function() {
                        var v = b(a),
                            x = Il(a);
                        C(function(w) {
                            f.push(g.D(w.target, [w.event], m(w.type)))
                        }, v);
                        C(function(w) {
                            f.push(g.D(w.target, [w.event], A(a, "hff." + w.type + "." + w.event, function(J) {
                                C(Da({
                                    l: a,
                                    X: J,
                                    flush: l
                                }), w.H)
                            })))
                        }, x);
                        k = Ng(a, "form", e);
                        e.attachEvent && (v = Ng(a, "form *", e), C(function(w) {
                            f.push(g.D(w, ["submit"],
                                m("form")))
                        }, k), C(function(w) {
                            Ce(w) && f.push(g.D(w, ["change"], m("formInput")))
                        }, v));
                        C(function(w) {
                            var J = w.submit;
                            if (S(J) || "object" === typeof J && Jl.test("" + J)) w[h] = J, w.submit = A(a, "fv", function() {
                                var T = {
                                    target: w,
                                    type: "submit"
                                };
                                m("document")(T);
                                return w[h]()
                            })
                        }, k)
                    }),
                    r = A(a, "ufv", function() {
                        C(fa, f);
                        C(function(v) {
                            v && (v.submit = v[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: r
                }
            }

            function Og(a, c) {
                var b = U(function(e) {
                        return 0 < e.H.length
                    }, c),
                    d = Pg({
                        target: a.document,
                        type: "document"
                    });
                return z(q(O, d, Kl(a)), b)
            }

            function Qg(a,
                        c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ca] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        Ad(h) && !h[Ca] && Ha(d, qb(b, h))
                    }
                } else Ha(d, qb(b, c));
                return d
            }

            function De(a) {
                if (Kc) {
                    Kc = !1;
                    var c = La(a.l),
                        b = [];
                    Sa(a.l, b, 15) ? a = [] : (F(b, c), a = b);
                    return a
                }
            }

            function Rg(a) {
                if (!Kc) {
                    Kc = !0;
                    a = La(a.l);
                    var c = [];
                    Ma(c, 14);
                    F(c, a);
                    return c
                }
            }

            function Ll(a, c, b) {
                var d = c[Ca];
                if (d) {
                    a: {
                        var e = La(a),
                            f = c[Ca];
                        if (0 < f) {
                            var g = [];
                            c = Ee(a, c);
                            var h = cc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Sc) {
                                h.Sc = k;
                                if (Sa(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                F(g,
                                    e);
                                F(g, f);
                                F(g, c[0]);
                                F(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (Sa(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                F(g, e);
                                F(g, f);
                                F(g, c[2]);
                                F(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Ha(b, a)
                }
                return d
            }

            function Bd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {
                    Ta: !1,
                    Bc: !1,
                    Kc: !1
                };
                var d = c && Nb("ym-record-keys", c),
                    e = Sg(c);
                a = Fe(a, c) || b && e;
                return {
                    Ta: !(d || !a),
                    Bc: d,
                    Kc: e
                }
            }

            function Fe(a, c) {
                return Tg(a, c) || Lc(a, c) ? !0 : Ug(a, c)
            }

            function Sg(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = U(Vg, [a.className, a.id, a.name]);
                return b &&
                    K(b, Ml) || Na(Pa(Nl), a) || Vg(c) && Ol.test(c)
            }

            function Vg(a) {
                return !!(a && 2 < a.length)
            }

            function Wg(a, c) {
                return c && Nb("(ym-disable-submit|-metrika-noform)", c)
            }

            function Ug(a, c) {
                if (sa(c)) return !1;
                if (Xg(c)) {
                    var b = c.parentNode;
                    return (sa(b) ? 0 : 11 === b.nodeType) ? !1 : Ug(a, c.parentNode)
                }
                if (Pl.test(c.className)) return !0;
                b = Yg(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (Ql.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Cd(a) {
                return ba(a) ? z(Cd, a) : sa(a) || "object" !==
                typeof a ? a : N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Rl[d];
                    Y(f) && (f = d);
                    e = K(f, Sl) ? e : Cd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Ga(a))
            }

            function Tl(a, c) {
                return oa(c, function(b) {
                    var d = G(a);
                    M(c);
                    if (!d.o("dSync", !1)) return d.C("dSync", !0), Zg(a, b, {
                        za: c,
                        tb: "s",
                        Sb: "ds",
                        Ee: function(e, f, g) {
                            var h = e.vb;
                            e = e.host;
                            if (n(h, "settings")) return Va(Oa("ds.e"));
                            f = f(ca) - g;
                            g = e[1];
                            var k, l;
                            h = ra((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = P(a).href, l);
                            return qa(a, "S", $g)({
                                G: h,
                                F: k
                            }, $g)["catch"](A(a, "ds.rs"))
                        }
                    })
                })
            }

            function Zg(a,
                        c, b) {
                var d = b.za,
                    e = Z(a),
                    f = Ul(a, c.userData, d),
                    g = Vl(a);
                return g.length ? Wl(a, e, f, c, b).then(function() {
                    return Xl(a, g, f, e, b)
                }, E) : H.resolve()
            }

            function Vl(a) {
                var c = Dd(a);
                a = q(Ge, dc(["iPhone", "iPad"]))(a);
                return c ? Yl : a ? Zl : []
            }

            function Xl(a, c, b, d, e) {
                var f = e.Ee,
                    g = void 0 === f ? E : f,
                    h = e.Sb,
                    k = d(ca);
                return $l(a, c, e)(ib(function(l) {
                    C(function(m) {
                        m && Ed(a, h + ".s", m)
                    }, l);
                    l = d($a);
                    b.C(h, l)
                }, function(l) {
                    b.C(h, d($a));
                    g(l, d, k)
                }))
            }

            function Wl(a, c, b, d, e) {
                var f = e.Sb,
                    g = e.za;
                return new H(function(h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" +
                        l, 10);
                    return 60 >= c($a) - l ? k() : am(a) ? h(void 0) : ah(d) ? k() : h(bm(a, g))
                })
            }

            function $l(a, c, b) {
                var d = b.tb,
                    e = b.data,
                    f = qa(a, d, b.za);
                a = y({}, bh);
                e && y(a.F, e);
                return cm(z(function(g) {
                    return dm(f(y({
                        M: {
                            ud: !1,
                            Be: !0
                        }
                    }, bh), z(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = I("", z(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + em[d]
                    }, g)).then(function(h) {
                        return y({}, h, {
                            host: g[h.od]
                        })
                    }))
                }, c))
            }

            function Ul(a, c, b) {
                var d = c || {},
                    e = qa(a, "u", b),
                    f = Ja(a);
                return {
                    o: function(g,
                                h) {
                        return Y(d[g]) ? f.o(g, h) : d[g]
                    },
                    C: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({
                            F: (k = {}, k.key = g, k.value = l, k)
                        }, [pa.va + "//" + Ob + "/user_storage_set"], {})["catch"](A(a, "u.d.s.s"))
                    }
                }
            }

            function fm(a) {
                return {
                    N: function(c, b) {
                        G(a).o("oo") || b()
                    }
                }
            }

            function gm(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return H.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] = hm, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = hb(a, e)) ? d(im, {
                            Va: g,
                            ga: [],
                            W: "site-info=" + xd(e)
                        })["catch"](E) :
                        H.resolve()
                }
            }

            function jm(a, c) {
                if (a["disableYaCounter" + c.id]) {
                    var b = M(c);
                    delete G(a).o("counters", {})[b];
                    Va(Oa("oo.e"))
                }
            }

            function km(a) {
                if (Mc(a)) return null;
                var c = lm(a),
                    b = c.Vc;
                Y(b) && (c.Vc = null, mm(a).then(function(d) {
                    c.Vc = d
                }));
                return b ? 1 : null
            }

            function nm(a, c, b) {
                b = b.F;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = He(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = om);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = pm, d = e)
                }
                if (!b) return null;
                a = qm(a, d, b);
                c = M(c);
                c =
                    rm(c);
                return (c = sm(c, a)) && I(",", c)
            }

            function sm(a, c) {
                var b = a.length ? z(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                C(q(O, na("push", a)), c);
                return U(la(null), b).length === a.length ? null : b
            }

            function qm(a, c, b) {
                return z(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (S(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(ch[d[0]] || ch[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Kg(a,
                        c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                        6 & 63
                            ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ? dh(e, !0) : e
            }

            function pg(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = dh(b)); b.length % 4;) b +=
                    "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) :
                        64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function dh(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return tm[b] || b
                }) : ""
            }

            function um(a) {
                try {
                    var c = Aa(a) ? a : [];
                    return I(",", [a.name, a.description, q(Ia, oc(Boolean), cb(vm), Nc(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function vm(a) {
                return I(",", [a.description, a.suffixes, a.type])
            }

            function wm(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function xm(a, c, b, d, e, f, g, h) {
                var k = b.o(f);
                sa(k) && (b.C(f,
                    g), e(a, c, b, d), k = b.o(f, g));
                Y(h) || h.yb(f, "" + k);
                return k
            }

            function zm(a, c) {
                if (Oc(a)) {
                    var b = bb(a).match(Am);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function Fd(a, c, b) {
                return function(d) {
                    var e, f, g = wa(c, b);
                    g && Bm(a, d, c) && (g = L(g.params, g), (d = Ie({
                        event: a,
                        Ka: "products",
                        Ca: pc,
                        ce: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Bm(a, c, b) {
                var d = !1,
                    e = "";
                if (!Fa(c)) return vb(b, "", "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ba(f) && f.length ?
                            (d = eh(function(g) {
                                return Fa(g) && (Ba(g.id) || Gd(b, g.id) || Ba(g.name))
                            }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        Gd(b, c.id) || Ba(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                vb(b, "", e);
                return d
            }

            function Pc(a, c) {
                return {
                    N: function(b, d) {
                        Je(b) ? d() : oa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.F = y(b.F || {}, e);
                            d()
                        })
                    }
                }
            }

            function Cm(a,
                        c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && Na(q(Pa, Da(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = rb(a, c.data), "appendremote" === n(b, "action") && Dm(a, c, b))
            }

            function fh(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = G(a),
                    l = {};
                l.getCachedTags = Ke;
                l.form = (e = {}, e.closest = u(a, gh), e.select = Em, e.getData = u(a, hh), e);
                l.button = (f = {}, f.closest = u(a, Le), f.select = Me, f.getData = u(a, Ne), f);
                l.phone = (g = {}, g.hidePhones = D([a, null,
                    [d]
                ], ih), g);
                l.status = (h = {}, h.checkStatus = D([a, Ka(b)], Fm), h);
                k.C("_u", l);
                c && kc(a, {
                    src: c
                })
            }

            function jh(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = I(".", q(cb(q(O, Ka)), oc(Boolean))(b.split(".")));
                if (!K(d, Gm) || !K(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return kh(c) ? c : ""
            }

            function Hm(a, c) {
                var b =
                    jb(a);
                if (b) {
                    var d = b("div"),
                        e = Lb(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            kc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ?
                            g = d.attachShadow({
                                mode: "open"
                            }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function Fm(a) {
                var c, b = lh(a);
                a = G(a).o("getCounters", Hd)();
                a = z(R("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && K(b, a), c
            }

            function ih(a, c, b) {
                var d;
                c = mh(a, c, {
                    ld: Im,
                    pe: (d = {}, d.href = !0, d)
                });
                b = U(Boolean, z(function(f) {
                    return "*" === f ? f : yb(f)
                }, b));
                var e = z(q(O, na("concat", [""]), nh("reverse"), fa), b);
                b = Qc(a);
                d = oh(a,
                    b, 1E3);
                c = L(c.Xc, c, e);
                d.D(c);
                Jm(a, b);
                ph(a, b);
                c()
            }

            function Im(a, c, b) {
                var d = jb(a),
                    e = b.Ga,
                    f = b.ub,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.ac && h && d && g) {
                    b = d("small");
                    qh(b);
                    var k = h.split(""),
                        l = rh(h).length;
                    C(na("appendChild", b), N(function(m, p) {
                        var r = m.Xb,
                            v = m.rd,
                            x = d("small");
                        x.innerHTML = p;
                        var w = Km.test(p);
                        qh(x);
                        w && (x.style.opacity = "" + (l - v - 1) / l);
                        r.push(x);
                        return {
                            Xb: r,
                            rd: v + (w ? 1 : 0)
                        }
                    }, {
                        Xb: [],
                        rd: 0
                    }, k).Xb);
                    Lm(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Lm(a, c, b, d) {
                function e() {
                    C(u(["style",
                        "opacity", ""
                    ], nc), Ia(b.childNodes));
                    if (c) {
                        var k = wa(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ha(a),
                    g = E,
                    h = E;
                g = f.D(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = da(a, e, 200, "ph.h.e");
                        (h || E)();
                        h = f.D(b, ["mouseleave"], function(m) {
                            m.target === b && Ra(a, l)
                        })
                    }
                })
            }

            function ph(a, c) {
                Rc(a)(ib(E, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    za("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                }))
            }

            function Jm(a, c) {
                return ha(a).D(a, ["load"],
                    c.T)
            }

            function mh(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.ub]) || void 0 === l ? void 0 : l.zb : null
                }
                var e, f = b.ld;
                b = b.pe;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    Xc: function(k) {
                        return new H(function(l, m) {
                            k && k.length || m();
                            h = sh()(k);
                            Rc(a)(ib(u({
                                Z: [],
                                ea: 0
                            }, l), function() {
                                var p = Z(a),
                                    r = p(ca),
                                    v = g.href ? Mm(a, h) : [],
                                    x = g.text ? th(a, h) : [];
                                l({
                                    Z: U(ba, U(Boolean, z(d, v.concat(x)))),
                                    ea: p(ca) - r
                                })
                            }))
                        })
                    }
                }
            }

            function Mm(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = uh(c);
                return N(function(e, f) {
                    var g =
                        n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? yb(k) : "",
                            m = c[l];
                        Y(m) || !l && "*" !== m.zb[0] || (e.push({
                            ac: "href",
                            Ga: f,
                            ub: l,
                            ya: vh(k, c[l].ya),
                            Ge: g
                        }), g = yb(h.slice(4)), l = sh()([l ? m.zb : [g, ""]]), e.push.apply(e, th(a, l, f)))
                    }
                    return e
                }, [], Ia(b.querySelectorAll("a")))
            }

            function th(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = uh(c);
                Bg(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = U(Boolean, e.exec(f.textContent ||
                            "") || []);
                        C(function(h) {
                            var k = yb(h);
                            Y(c[k]) || d.push({
                                ac: "text",
                                Ga: f,
                                ub: k,
                                ya: vh(h, c[k].ya),
                                Ge: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function sh() {
                return Oe(function(a, c) {
                    var b = z(yb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        ya: b,
                        zb: c
                    };
                    var e = wh(d);
                    e !== d && (a[e] = {
                        ya: wh(b),
                        zb: c
                    });
                    return a
                }, {})
            }

            function vh(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return I("",
                    b) + c.slice(f + 1)
            }

            function wh(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function uh(a) {
                return new RegExp("(?:" + I("|", z(xh, ea(a))) + ")")
            }

            function Bg(a, c, b, d, e) {
                function f(g) {
                    return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Xg(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                        acceptNode: f
                    } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function yh(a, c, b) {
                var d;
                a = [zh(a, c, function(e) {
                    d = e;
                    e.rb.D(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return D([Ah, a], C)
            }

            function Nm(a, c, b, d) {
                var e, f;
                if (b) {
                    c = n(d, "ecommerce") || {};
                    var g = n(d, "event") || "";
                    c = Fa(c) && Ba(g) ? Ie(g, c) : void 0;
                    if (!c) a: {
                        c = d;!ba(d) && Gd(a, Aa(d)) && (c = va(c));
                        if (ba(c) && (a = c[0], g = c[1], c = c[2], Ba(g) && Fa(c) && "event" === a)) {
                            c = Ie(g, c);
                            break a
                        }
                        c = void 0
                    }(d = c || Om(d)) && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
                }
            }

            function Om(a) {
                var c = n(a, "ecommerce");
                if (Fa(c)) return a = U(dc(Pm), ea(c)), a = N(function(b, d) {
                        b[d] = c[d];
                        return b
                    }, {},
                    a), 0 === ea(a).length ? void 0 : a
            }

            function Ie(a, c) {
                var b, d, e = Ba(a) ? Qm[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ka,
                        h = e.ce,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = z(u(e.Ca, Rm), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ea(l);
                        g && 1 < b.length && (m[f].actionField = N(function(p, r) {
                            if (r === k) return p;
                            if ("currency" === r) return m.currencyCode = l.currency, p;
                            p[Sm[r] || Pe[r] || r] = l[r];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function Rm(a, c) {
                var b = {};
                C(function(d) {
                    var e = a[d] || Pe[d] || d; - 1 !== d.indexOf("item_category") ? (e = Pe.item_category,
                        b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ea(c));
                return b
            }

            function Tm(a, c, b) {
                if (b && (b = Le(a, b), b = Ne(a, b))) {
                    b = "?" + Sc(b);
                    var d = sb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    Id(a, c, "btn", d).reachGoal(b)
                }
            }

            function Um(a, c, b, d) {
                d = n(d, "target");
                (d = Pb("button,input", a, d)) && "submit" === d.type && (d = gh(a, d)) && (b.push(d), da(a, D([!1, a, c, b, d], Bh), 300))
            }

            function Bh(a, c, b, d, e) {
                var f = ec(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = hh(c, e), a = "?" + Sc(a), d = D([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Ch),
                    Id(c, b, "form", d).reachGoal(a)
            }

            function Ch(a, c, b) {
                return Vm(a, c).then(function(d) {
                    d && sb(a, c, b)()
                })
            }

            function hh(a, c, b) {
                return Dh(a, c, ["i", "n", "p"], void 0, b)
            }

            function Wm(a, c) {
                var b;
                a((b = {}, b.clickmap = Y(c) ? !0 : c, b))
            }

            function Xm(a, c, b, d, e) {
                var f;
                c = {
                    G: ra(),
                    F: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f),
                    aa: {
                        ma: "clmap/" + e.id
                    }
                };
                d(c, e)["catch"](A(a, "c.s.c"))
            }

            function Ym(a, c, b, d, e) {
                if (Tc(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Xa(c.element);
                if (e && !e(c.element, a) || K(c.button, [2, 3]) && "A" !== a || Na(la(a),
                    d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Zm(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function $m(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function an(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ?
                    1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function yd(a, c) {
                var b = Lb(a),
                    d = ze(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Jd(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.G,
                            g = b.na,
                            h = b.F,
                            k = b.M;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = Z(a);
                            f.yb("rqnl", 1);
                            for (var m = Uc(a), p = 1; m[p];) p += 1;
                            b.L || (b.L = {});
                            b.L.Wa = p;
                            m[p] = (e = {}, e.protocol = pa.va, e.host = Ob, e.resource = b.aa.ma, e.postParams = k.W, e.time = l(ca), e.counterType = c.R, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = xb(a), e);
                            g && (m[p].telemetry = g.l());
                            Qe(a)
                        }
                        d()
                    },
                    fa: function(b, d) {
                        Eh(a, b);
                        d()
                    }
                }
            }

            function Eh(a, c) {
                var b = Uc(a);
                c.G && !ab(b) && c.L && (delete b[c.L.Wa], Qe(a))
            }

            function Qe(a) {
                var c = Uc(a);
                Ja(a).C("retryReqs", c)
            }

            function bn(a, c) {
                if (a.Ke()) {
                    var b = Fh(c);
                    if (b && !Nb("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Md,
                            f = a.za,
                            g = a.sender,
                            h = a.Td,
                            k = f.kb,
                            l = b.href;
                        var m = db(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? db(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        if (Nb("ym-external-link",
                            b)) Kd(d, f, {
                            url: l,
                            Ra: !0,
                            title: m,
                            sender: g
                        });
                        else {
                            k = k ? Ld(d, k).hostname : P(d).hostname;
                            h = RegExp("\\.(" + I("|", z(cn, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = Gh.test(p) || Gh.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            Md(k) === Md(b) ? h ? Kd(d, f, {
                                url: l,
                                mb: !0,
                                title: m,
                                sender: g
                            }) : m && e.C("il", db(m).slice(0, 100)) : l && dn.test(l) || Kd(d, f, {
                                url: l,
                                qb: !0,
                                Ra: !0,
                                mb: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Kd(a, c, b) {
                var d, e = ra();
                b.mb && e.C("dl", 1);
                b.Ra && e.C("ln", 1);
                var f = b.qd || {};
                e = {
                    G: e,
                    L: {
                        title: f.title || b.title,
                        qb: !!b.qb,
                        O: f.params
                    },
                    F: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.kb || P(a).href, d)
                };
                d = "Link";
                b.mb ? d = b.Ra ? "Ext link - File" : "File" : b.Ra && (d = "Ext link");
                c = b.sender(e, c).then(sb(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.qd));
                return qc(a, "cl.p.s", c, f.callback || E, f.ctx)
            }

            function en(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function fn(a, c, b, d) {
                var e = P(a),
                    f = e.hostname;
                e = e.href;
                if (c = Vc(c).url) a = Ld(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Hh(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function gn(a, c, b, d) {
                var e;
                if (a = wa(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    K(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.cd((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function kg(a, c, b) {
                void 0 === b && (b = O);
                var d = Re(a);
                b(d);
                var e = u(d, hn);
                Se(a, c, function(f) {
                    f.rb.D(e)
                });
                return d
            }

            function hn(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.T(n(b, "type"), b)
            }

            function Se(a,
                        c, b, d) {
                void 0 === b && (b = E);
                void 0 === d && (d = !1);
                var e = Qc(a);
                if (c && S(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = va(arguments),
                            h = g[0];
                        d && e.T(h);
                        g = f.apply(c, g);
                        d || e.T(h);
                        return g
                    };
                    a = {
                        rb: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    C(e.T, c);
                    return a
                }
            }

            function od(a) {
                a = G(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function Ek(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function Ih(a, c) {
                var b = Fc(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = D([a, b.cc], jn),
                    g = u(f, kn);
                b.V.D(["initToParent"],
                    function(h) {
                        g(d, b.children[h[1].counterId])
                    }).D(["parentConnect"], function(h) {
                    g(e, b.ja[h[1].counterId])
                });
                return {
                    V: b.V,
                    Xf: function(h, k) {
                        return new H(function(l, m) {
                            b.cc(h, k, function(p, r) {
                                l([p, r])
                            });
                            da(a, u(Oa(), m), 5100, "is.o")
                        })
                    },
                    bd: function(h) {
                        var k = {
                            ed: [],
                            lc: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    cd: function(h) {
                        var k = {
                            ed: [],
                            lc: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.ja, k, h)
                    }
                }
            }

            function kn(a, c, b) {
                c = U(function(d) {
                    return !K(b.info.counterId, d.lc)
                }, c);
                C(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] =
                        b, e), d, d.data)
                }, c)
            }

            function jn(a, c, b, d, e) {
                return (new H(function(f, g) {
                    var h = ea(b),
                        k = q(d.resolve ? d.resolve : O, Hc(f)),
                        l = q(d.reject ? d.reject : O, Hc(g));
                    d.resolve = k;
                    d.reject = l;
                    C(function(m) {
                        var p;
                        d.lc.push(+m);
                        var r = b[m],
                            v = da(a, u(Oa(), l), 5100, "is.m");
                        c(r.window, y(e, (p = {}, p.toCounter = Ka(m), p)), function(x, w) {
                            Ra(a, v);
                            d.ed.push(m);
                            d.resolve && d.resolve(w)
                        })
                    }, h)
                }))["catch"](A(a, "if.b"))
            }

            function ln(a) {
                var c = E,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    S(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    S(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Nd: b,
                        ab: c,
                        O: 1 === d.length ? a[0] : nc(d)
                    }
                }
            }

            function qc(a, c, b, d, e) {
                var f = D([a, d, e], Te);
                return b.then(f, function(g) {
                    f();
                    Ed(a, c, g)
                })
            }

            function Jh(a, c) {
                return {
                    N: function(b, d) {
                        var e = (b.L || {}).O,
                            f = b.M;
                        f = void 0 === f ? {} : f;
                        if (e && (Kh(c, e), !f.W && b.G && b.F)) {
                            var g = hb(a, e),
                                h = Lh(a),
                                k = b.G.o("pv");
                            g && !b.F.nohit && (k ? encodeURIComponent(g).length > pa.yd ? h.push([b.G, e]) : b.F["site-info"] = g : (f.W = g, b.M = f, b.wa || (b.wa = {}), b.wa.qe = !0))
                        }
                        d()
                    },
                    fa: function(b, d) {
                        var e = Lh(a),
                            f = wa(a, c),
                            g = f && f.params;
                        g && (f = U(q(Wc, la(b.G)), e), C(function(h) {
                            g(h[1]);
                            h = Ue(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Nd(a, c) {
                return function(b) {
                    Mh(a, c, b)
                }
            }

            function mn(a, c) {
                Ve(a)(function(b) {
                    delete b[c]
                })
            }

            function Mh(a, c, b) {
                Ve(a)(function(d) {
                    d[c] = y(d[c] || {}, b)
                })
            }

            function Ve(a) {
                a = G(a);
                var c = a.o("dsjf") || Da({});
                a.ta("dsjf", c);
                return c
            }

            function nn(a, c) {
                return function(b) {
                    var d, e, f = wa(a, c);
                    f && (Fa(b) ? Aa(ea(b)) ? (b = Nh(b)) && Aa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : sb(a, c, "First party params error. Empty object.")() :
                        sb(a, c, "First party params error. Not an object.")())
                }
            }

            function Nh(a) {
                a = Ga(a);
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Fa(e);
                    if (!Ba(e) && !f) return c;
                    e = f ? Nh(e) : e;
                    Aa(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function Oh(a, c, b) {
                void 0 === b && (b = 0);
                c = Ga(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = Fa(g);
                    if (!Ba(g) && !h) return d;
                    h ? g = Oh(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = on(g) : "email" === f && (g = pn(g)), g = Ph(a, g)) : g = H.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return H.all(c)
            }

            function pn(a) {
                var c =
                        db(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                Qh(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(We, "-") : "gmail.com" === c && (b = b.replace(We, ""));
                a = Xe(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function on(a) {
                a = yb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function Ph(a, c) {
                return new H(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(hc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function wa(a, c) {
                var b = G(a).o("counters", {}),
                    d = M(c);
                return b[d]
            }

            function Rh(a, c) {
                G(a).C("dce:" + c, !0);
                var b = G(a).o("dclq:" + c);
                b && (C(function(d) {
                    var e = d[0];
                    d = d[1];
                    fa.apply(void 0, aa([Od(a, c)[e]], d))
                }, b), Ye(b))
            }

            function sb(a, c, b, d) {
                return Sh(c) ? E : u(D(aa([a, M(c)], d ? [b + ". Params:", d] : [b]), vb), fa)
            }

            function vb() {
                var a = va(arguments),
                    c = a.slice(2);
                Od(a[0], a[1]).log.apply(vb,
                    c)
            }

            function Th(a) {
                var c = "1" === bc(a).o("debug"),
                    b = -1 < P(a).href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    de: c,
                    je: a || b,
                    isEnabled: Na(Boolean, [c, a, b])
                }
            }

            function oa(a, c) {
                var b = M(a);
                return Uh()(qn(b)).then(c)
            }

            function rn(a, c, b) {
                c = M(c);
                a = Vh(a);
                b = y({
                    Vd: a(ca)
                }, b);
                return Uh()(sn(c, b))
            }

            function sn(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.ze = c, d.Zc = !0, d.Yc ? d.Yc(c) : d.xa = H.resolve(c)) : b[a] = {
                        xa: H.resolve(c),
                        ze: c,
                        Zc: !0
                    }
                }
            }

            function zb(a) {
                return z(function(c) {
                    return !c || K(c, a) ? c : 0
                }, Qb)
            }

            function Wh(a) {
                return !Mc(a) &&
                    Xh(a)
            }

            function Ze(a) {
                return jb(a) ? u(a, tn) : !1
            }

            function Xh(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && za("sendBeacon", c) ? D([a, L(c, n(a, "navigator"))], un) : !1
            }

            function un(a, c, b, d) {
                return new H(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = y(d.Va, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Sc(h) + (d.W ? "&" + d.W : "");
                    return 2E3 < g.length ? f(Oa("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function tn(a, c, b) {
                return new H(function(d, e) {
                    var f, g, h = "_ymjsp" + Wa(a),
                        k = y((f = {}, f.callback = h, f), b.Va),
                        l = D([a, h], vn);
                    a[h] =
                        function(p) {
                            try {
                                l(), Zb(m), d(p)
                            } catch (r) {
                                e(r)
                            }
                        };
                    k.wmode = "5";
                    var m = kc(a, (g = {}, g.src = Yh(c, b, k), g));
                    if (!m) return l(), e(hc("jp.s"));
                    f = u(m, Zb);
                    f = q(f, u(Oa(b.ga), e));
                    g = Pd(a, f, b.Ja || 1E4);
                    g = D([a, g], Ra);
                    m.onload = g;
                    m.onerror = q(l, g, f)
                })
            }

            function vn(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Xc(a) {
                var c = jb(a);
                return c ? D([a, c], wn) : !1
            }

            function wn(a, c, b, d) {
                return new H(function(e, f) {
                    var g = Lb(a),
                        h = c("img"),
                        k = q(u(h, Zb), u(Oa(d.ga), f)),
                        l = Pd(a, k, d.Ja || 3E3);
                    h.onerror = k;
                    h.onload = q(u(h, Zb), u(null, e), D([a, l], Ra));
                    k = y({}, d.Va);
                    delete k.wmode;
                    h.src = Yh(b, d, k);
                    Oc(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Rb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (xn.test(a.location.host) && a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    } return c ? u(a, yn) : !1
            }

            function yn(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.W,
                    g = y(b.Bb ? (d = {}, d.wmode = "7", d) : {},
                        b.Va);
                return new H(function(h, k) {
                    e.open(b.rc || "GET", c + "?" + Sc(g), !0);
                    e.withCredentials = !1 !== b.ud;
                    b.Ja && (e.timeout = b.Ja);
                    Zh(Ga, cb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Fa);
                    var l = D([a, e, Oa(b.ga), b.Bb, b.Be, h, k], zn);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function zn(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(hc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = rb(a, c.responseText)) ||
                            g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    } return h
            }

            function Yh(a, c, b) {
                (b = Sc(b)) && (a += "?" + b);
                c.W && (a += (b ? "&" : "?") + c.W);
                return a
            }

            function An(a, c, b) {
                var d = z(Wc, Ab[c] || Bb);
                C(function(e) {
                    return d.unshift(e)
                }, Qd);
                return z(q(rc([a, b]), fa), d)
            }

            function $h(a, c) {
                var b = P(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!Ba(c) || Y(c)) return d;
                b = c.replace(ai, "");
                if (-1 !== b.search(Bn)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e),
                    -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, I("/", d);
                return ""
            }

            function Rd(a, c) {
                return {
                    N: function(b, d) {
                        var e = bi(c);
                        e = D([b, e, d], Cn);
                        Dn(a, c, e)
                    },
                    fa: function(b, d) {
                        var e = b.G,
                            f = bi(c);
                        if (e) {
                            var g = f.ca;
                            f.Ac === e && g && (C(fa, g), f.ca = null)
                        }
                        d()
                    }
                }
            }

            function Cn(a, c, b) {
                var d = a.G;
                d ? Je(a) ? (c.Ac = d, b()) : c.ca ? c.ca.push(b) : b() : b()
            }

            function Je(a) {
                return (a = a.G) && a.o("pv") && !a.o("ar")
            }

            function Dn(a, c, b) {
                if ($e(a) && wb(a)) {
                    var d = En(c);
                    if (!d.ke) {
                        d.ke = !0;
                        c = Fc(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ca = [];
                        var e =
                            function() {
                                d.ca && (C(fa, d.ca), d.ca = null)
                            };
                        da(a, e, 3E3);
                        c.V.D(["initToChild"], e)
                    }
                    d.ca ? d.ca.push(b) : b()
                } else b()
            }

            function ci(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.G;
                        if (e && (!c || c.ad)) {
                            var f = a.document.title;
                            b.L && b.L.title && (f = b.L.title);
                            var g = Sb("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, pa.zd);
                            e.C("t", f)
                        }
                        d()
                    }
                }
            }

            function Cb(a) {
                return function(c, b) {
                    return {
                        N: function(d, e) {
                            var f = d.G,
                                g = d.F;
                            f && g && C(function(h) {
                                var k = af[h],
                                    l = "bi",
                                    m = f;
                                k || (k =
                                    bf[h], l = "tel", m = pd(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.yb(h, k))
                            }, a || Fn());
                            e()
                        }
                    }
                }
            }

            function Gn(a, c) {
                var b = Yc(a);
                c.D(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).D(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.T("parentConnect", [e, d])
                }).D(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.ja[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function Hn(a) {
                if (za("MutationObserver", a.MutationObserver)) {
                    var c =
                            Yc(a).children,
                        b = new a.MutationObserver(function() {
                            C(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, ea(c))
                        });
                    Rc(a)(ib(E, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function In(a, c) {
                return function(b, d) {
                    var e, f = {
                        fb: Z(a)(ca),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.fb = Ka(b[0]), f.key = parseFloat(b[1]), f.dir = Ka(b[2]));
                    y(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = I(":", ["__yminfo", f.fb, f.key, f.dir]), e);
                    return {
                        ia: f,
                        hd: hb(a, g) || ""
                    }
                }
            }

            function Rc(a, c) {
                function b(e) {
                    n(c, d) ? e() : da(a, u(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Da(function(e, f) {
                    b(f)
                })
            }

            function lc(a, c) {
                var b = c.Tb,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = bc(a),
                    f = Ja(a),
                    g = Z(a)(cf),
                    h = di(a, c),
                    k = h[0];
                h = h[1];
                var l = e.o("d");
                ei(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = I("", [g, Wa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ka(l)) m = !0;
                m && !c.Da && (e.C(d, h, 525600, b), e.C("d", "" + g, 525600, b));
                f.C(d, h);
                return h
            }

            function Jn(a, c) {
                return !c.Da && ei(a, c)
            }

            function di(a, c) {
                var b = Ja(a),
                    d = bc(a),
                    e = c.Tb || "uid";
                return [b.o(e), d.o(e)]
            }

            function Lg(a, c, b) {
                df(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = fi(a);
                (d = d && d.metrika_enabled) && gi(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function df(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Mg(a, zd, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Kn(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Ln, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (hi(a)[c] = b)
                    } catch (l) {}
                }
            }

            function zd(a, c) {
                var b =
                    hi(a);
                return b ? b[c] || null : null
            }

            function fi(a) {
                try {
                    var c = a.document.cookie;
                    if (!sa(c)) {
                        var b = {};
                        C(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[db(d[0])] = db(ii(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function Mg(a, c, b) {
                return !ef.length || K(b, ji) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, ef)
            }

            function xb(a) {
                var c = G(a),
                    b = c.o("hitId");
                b || (b = Wa(a), c.C("hitId", b));
                return b
            }

            function Qh(a) {
                var c = a.match(ki);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return K(c, ff) ? c : !1;
                    if (a) return ff[0]
                }
                return !1
            }

            function P(a) {
                return N(function(c,
                                  b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Mn)
            }

            function Ne(a, c, b) {
                var d = Xa(c);
                return d && Dh(a, c, U(Boolean, ["p", Nn[d], "c"]), Me, b)
            }

            function Le(a, c) {
                var b = Pb(gf, a, c);
                if (!b) {
                    var d = Pb("div", a, c);
                    d && (kb(gf + ",div", d).length || (b = d))
                }
                return b
            }

            function Dh(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in li ? h = c.getAttribute && c.getAttribute(li[g]) : g in sc && (h = "p" === g ? sc[g](a, c, e) : "c" === g ? sc[g](a, c, d) : sc[g](a, c));
                    h && (h = h.slice(0, mi[g] || 100), f[g] = hf[g] ? "" + $b(h) : h);
                    return f
                }, {}, b)
            }

            function Ng(a, c, b) {
                if (Zc(a)) return Ia(b.querySelectorAll(c));
                var d = ni(c.split(" "), b);
                return U(function(e, f) {
                    return ec(a)(e, d) === f
                }, d)
            }

            function ni(a, c) {
                var b = aa(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? Kb(u(b, ni), Ia(d)) : Ia(d)
            }

            function ac(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = kb(a, c);
                return b && b.length ? b[0] : null
            }

            function kb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? Ia(b) : []
            }

            function Fh(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function kc(a, c) {
                var b = a.document,
                    d = y({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = jb(a);
                if (e) {
                    var f = e("script");
                    Zh(Ga, cb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = Sb("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k =
                                g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function On(a, c, b) {
                var d = oi(c);
                K(b, d.Ea) || d.Ea.push(b);
                if (ab(d.Aa)) {
                    b = jb(a);
                    if (!b) return null;
                    b = b("iframe");
                    y(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Lb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.Aa = b
                } else(a = n(d.Aa, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.Aa
            }

            function Pn(a, c) {
                var b = ba(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = I(", ", z(function(e) {
                        return "." +
                            e
                    }, b));
                    return Ia(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return Kb(q(na("getElementsByClassName", c), Ia), b);
                d = c.getElementsByTagName("*");
                b = "(" + I("|", b) + ")";
                return U(u(b, Nb), Ia(d))
            }

            function jf(a, c, b) {
                for (var d = "", e = Ke(), f = Xa(c) || "*"; c && c.parentNode && !K(f, ["BODY", "HTML"]);) d += e[f] || "*", d += pi(a, c, b) || "", c = c.parentElement, f = Xa(c) || "*";
                return db(d, 128)
            }

            function pi(a, c, b) {
                if (a = Sd(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Sd(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === fc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function Ee(a, c) {
                var b = kf(a, c),
                    d = b.left;
                b = b.top;
                var e = Td(a, c);
                return [d, b, e[0], e[1]]
            }

            function Td(a, c) {
                var b = n(a, "document");
                return c === fc(a) || c === b.documentElement ? Gg(a) : (b = $c(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function kf(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Xa(b);
                if (!b || !b.ownerDocument || "PARAM" ===
                    e || b === fc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = $c(b)) return b = ze(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function db(a, c) {
                if (a) {
                    var b = qi ? qi.call(a) : ("" + a).replace(ai, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function Pb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && za("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Yg(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Zc(c)) {
                    for (a = Ia((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === ec(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Zc(a) {
                return !(!za("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function ri(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.Ab;
                b = b.Ba;
                a = a.Math;
                c = a.min(a.max(c.right,
                    0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function si(a) {
                return Ud(a) && !Na(la(a.type), Qn) ? ti(a) ? !a.checked : !a.value : Rn(a) ? !a.value : Sn(a) ? 0 > a.selectedIndex : !0
            }

            function Xa(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (Ba(c)) return c;
                    c = a.tagName;
                    if (Ba(c)) return c
                } catch (b) {}
            }

            function ui(a, c) {
                var b = a.document.getElementsByTagName("form");
                return ec(a)(c, Ia(b))
            }

            function Tn(a, c, b) {
                b = Sb("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (za("(Event|Object|constructor)",
                    e) || lf(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Sb("createEvent", n(a, "document"))) && S(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function $c(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Qc && c.Qc & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Gg(a) {
                var c = Lb(a);
                a = Ic(a);
                return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])]
            }

            function ze(a) {
                var c =
                        fc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Ic(a) {
                var c = mf(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Lb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function mf(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return sa(c) ||
                sa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Lb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : fc(a) || b
            }

            function fc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function Nb(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function pb(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function Zb(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Db(a) {
                return a ? a.innerText || "" : ""
            }

            function Xg(a) {
                if (sa(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function ue(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Pb: Un(a),
                    o: function(e, f) {
                        var g = vi(a, "" + d + e);
                        return ab(g) && !Y(f) ? f : g
                    },
                    C: function(e, f) {
                        wi(a, "" + d + e, f);
                        return this
                    },
                    gb: function(e) {
                        xi(a, "" + d + e);
                        return this
                    }
                }
            }

            function wi(a, c, b) {
                var d = nf(a);
                a = hb(a, b);
                if (!ab(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function vi(a, c) {
                var b =
                    nf(a);
                try {
                    return rb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function xi(a, c) {
                var b = nf(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function nf(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function hb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function pd(a, c, b) {
                void 0 === b && (b = null);
                a.na || (a.na = of());
                c && a.na.yb(c, b);
                return a.na
            }

            function Vd(a) {
                return {
                    N: function(c, b) {
                        var d = a.document,
                            e = c.G;
                        if (e && pf(a)) {
                            var f = ha(a),
                                g = function(h) {
                                    pf(a) || (f.Xa(d, yi, g), b());
                                    return h
                                };
                            f.D(d, yi, g);
                            e.C("pr",
                                "1")
                        } else b()
                    }
                }
            }

            function qf(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = Ha(rf(c, a, f), d);
                        return Wd(c, b, g)(e)
                    }
                }
            }

            function Wd(a, c, b) {
                var d = ob(a, c);
                return function(e) {
                    return zi(b, e, !0).then(function() {
                        var f = e.aa || {},
                            g = f.ee,
                            h = void 0 === g ? "" : g;
                        g = f.ma;
                        var k = void 0 === g ? "" : g;
                        f = f.fe;
                        f = z(function(l) {
                            return pa.va + "//" + ("" + h + l || Ob) + "/" + k
                        }, void 0 === f ? [Ob] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.vb;
                        f = f.od;
                        e.Ae = g;
                        e.Wf = f;
                        return zi(b, e).then(u(g, O))
                    })
                }
            }

            function ob(a, c) {
                return function(b, d) {
                    return Ai(a, c,
                        d, b)
                }
            }

            function Ai(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({
                        ga: []
                    }, d.M),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.Fa && h.Fa["Content-Type"] || !h.W || (h.Fa = y({}, h.Fa, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.W = "site-info=" + xd(h.W));
                h.rc = h.W ? "POST" : "GET";
                h.Va = Vn(a, d, l);
                h.ga.push(l);
                y(d.M, h);
                return k("" + m + (d.wa && d.wa.qe ? "/1" : ""), h).then(function(p) {
                    return {
                        vb: p,
                        od: e
                    }
                })["catch"](function(p) {
                    var r = f + 1 >= c.length,
                        v = e + 1 >= b.length;
                    r && v && Va(p);
                    return Ai(a, c, b, d, !v && r ? e + 1 : e,
                        r ? 0 : f + 1)
                })
            }

            function Vn(a, c, b) {
                var d = y({}, c.F);
                a = Z(a);
                c.G && (d["browser-info"] = ra(c.G.l()).C("st", a(cf)).sa());
                !d.t && (c = c.na) && (c.C("ti", b), d.t = c.sa());
                return d
            }

            function Sc(a) {
                return a ? q(Ga, Oe(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    Y(e) || sa(e) || c.push(d + "=" + xd(e));
                    return c
                }, []), Nc("&"))(a) : ""
            }

            function Wn(a) {
                return a ? q(cb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], sa(b) ? void 0 : ii(b)]
                }), Oe(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function ii(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function xd(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = I("", U(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function rf(a, c, b) {
                return z(q(Wc, rc([a, b]), fa), Bi[c] || [])
            }

            function Ci(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !sa(d) && Di(a[c], b, d)
            }

            function Di(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function tc(a) {
                C(function(c) {
                        var b = c[1];
                        ie[c[0]] = {
                            ba: b.ba,
                            Sa: b.Sa
                        }
                    },
                    Ga(a))
            }

            function zi(a, c, b) {
                void 0 === b && (b = !1);
                return new H(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        N: f,
                        fa: f
                    });
                    var h = me(g, function(k, l) {
                        var m = b ? k.N : k.fa;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(Xn), e(p)
                        } else l()
                    });
                    h(Ei)
                })
            }

            function Yb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ha(a);
                    var e = "__ym__promise_" + Wa(a) + "_" + Wa(a),
                        f = E;
                    d = A(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.D(a, ["message"], d);
                    a.postMessage(e, "*")
                } else da(a,
                    c, 0, d)
            }

            function sk(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = me(c, b);
                lg(a, c, d)(ib(A(a, e), E))
            }

            function lg(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Yn);
                sf = Infinity === b;
                return Da(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(Zn);
                        if (c(Xd)) return f(h), Fi(a);
                        sf ? (c(d(a, 1E4)), f(h), Fi(a)) : da(a, g, 100)
                    }
                    var h = [];
                    $n(g)
                })
            }

            function Fi(a) {
                if (tf.length) {
                    var c = tf.shift();
                    sf ? c() : da(a, c, 100)
                } else uf = !1
            }

            function $n(a) {
                uf ? tf.push(a) : (uf = !0, a())
            }

            function Gi(a) {
                return Da(function(c,
                                   b) {
                    b(a)
                })
            }

            function dm(a) {
                return Da(function(c, b) {
                    a.then(b, c)
                })
            }

            function cm(a) {
                var c = [],
                    b = !1;
                return Da(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    C(function(g) {
                        g(ib(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function ib(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function me(a, c) {
                void 0 === c && (c = O);
                return Da({
                    pb: a,
                    Nc: c,
                    fc: !1,
                    da: 0
                })
            }

            function Ei(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.da += 1
                    }
                    b = !1;
                    a.Nc(a.pb[a.da], function() {
                        d()
                    });
                    b || (a.da += 1, d = u(a, Ei))
                }
                for (var b = !0; !Xd(a) && b;) c()
            }

            function Yn(a,
                        c) {
                return function(b) {
                    var d = Z(a),
                        e = d(ca);
                    return ao(function(f, g) {
                        d(ca) - e >= c && g(bo)
                    })(b)
                }
            }

            function co(a) {
                Xd(a) && Va(hc("i"));
                var c = a.Nc(a.pb[a.da]);
                a.da += 1;
                return c
            }

            function Zn(a) {
                a.fc = !1
            }

            function bo(a) {
                a.fc = !0
            }

            function Xn(a) {
                a.da = a.pb.length
            }

            function Xd(a) {
                return a.fc || a.pb.length <= a.da
            }

            function La(a) {
                a = Z(a);
                return Math.round(a(Hi) / 50)
            }

            function Hi(a) {
                var c = a.ea,
                    b = c[1];
                a = c[0] && b ? b() : ca(a) - a.ie;
                return Math.round(a)
            }

            function cf(a) {
                return Math.round(ca(a) / 1E3)
            }

            function $a(a) {
                return Math.floor(ca(a) / 1E3 /
                    60)
            }

            function ca(a) {
                var c = a.oc;
                return 0 !== c ? c : vf(a.l, a.ea)
            }

            function Vh(a) {
                var c = ha(a),
                    b = Ii(a),
                    d = {
                        l: a,
                        oc: 0,
                        ea: b,
                        ie: vf(a, b)
                    },
                    e = b[1];
                b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                    0 === d.oc && (d.oc = vf(a, d.ea))
                });
                return Da(d)
            }

            function eo(a) {
                return (10 > a ? "0" : "") + a
            }

            function oh(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = da(a, d, b), e.T(h))
                }
                var e = Qc(a),
                    f, g = !1,
                    h;
                c.D(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return E
                });
                return e
            }

            function fo(a, c) {
                return a.clearInterval(c)
            }

            function go(a, c, b, d) {
                return a.setInterval(A(a, "i.err." + (d ||
                    "def"), c), b)
            }

            function da(a, c, b, d) {
                return Pd(a, A(a, "d.err." + (d || "def"), c), b)
            }

            function Re(a) {
                var c = {};
                return {
                    D: function(b, d) {
                        C(function(e) {
                            n(c, e) || (c[e] = Qc(a));
                            c[e].D(d)
                        }, b);
                        return this
                    },
                    sb: function(b, d) {
                        C(function(e) {
                            n(c, e) && c[e].sb(d)
                        }, b);
                        return this
                    },
                    T: function(b, d) {
                        return n(c, b) ? A(a, "e." + d, c[b].T)(d) : []
                    }
                }
            }

            function Qc(a) {
                var c = [],
                    b = {};
                b.Ff = c;
                b.D = q(na("push", c), u(b, O));
                b.sb = q(tb(ec(a))(c), tb(na("splice", c))(1), u(b, O));
                b.T = q(O, tb(fa), ho(c));
                return b
            }

            function Ji(a, c, b, d, e) {
                var f = a.addEventListener &&
                        a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function B(a, c, b) {
                return function() {
                    return A(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function A(a, c, b, d, e) {
                var f = Va,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        Ed(a, c, k)
                    }
                    return h
                }
            }

            function vf(a, c) {
                var b = c || Ii(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() :
                    (new a.Date).getTime()
            }

            function Ii(a) {
                a = He(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = L(b, a));
                return [c, b]
            }

            function He(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Ed(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Va(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                io(d) || Na(q(na("indexOf", d), la(-1), Tb), jo) || ko(d) && .1 <= a.Math.random() || C(q(O, rc(["jserrs", d, c, e]), fa), Ki)
            }

            function dg() {
                var a = va(arguments);
                return Va(Oa(a))
            }

            function Oa(a) {
                var c = "";
                ba(a) ? c = I(".", a) : Ba(a) && (c = a);
                return hc("err.kn(" + pa.$a + ")" + c)
            }

            function lo(a) {
                this.message = a
            }

            function ok(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    R: d,
                    eb: e,
                    O: b
                };
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.Sa;
                    k = f[k.ba];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ga(c));
                Kh(a, a.O || {});
                return a
            }

            function mo(a, c) {
                return N(function(b, d) {
                    b[c[d[0]].ba] = d[1];
                    return b
                }, {}, Ga(a))
            }

            function Li(a) {
                a = M(a);
                return Ub[a] && Ub[a].Ie
            }

            function Kh(a, c) {
                var b = M(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                Ub[b] ||
                (Ub[b] = {});
                if (d || e) Ub[b].Ie = d, Ub[b].Je = e
            }

            function no(a) {
                return wf(a) || Dd(a) || /mobile/i.test(bb(a)) || !Y(n(a, "orientation"))
            }

            function re(a, c) {
                if (ad(a) && c) {
                    var b = bb(a).match(oo);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function se(a, c) {
                var b = bb(a);
                return b && (b = b.match(po)) && 1 < b.length ? Ka(b[1]) >= c : !1
            }

            function pf(a) {
                return K("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Wa(a, c, b) {
                var d = Y(b);
                Y(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() *
                    (c - d)) + d
            }

            function qo() {
                var a = va(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Tc(b, d) && (c[d] = b[d]);
                    Tc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Mi(a) {
                return Y(a) ? [] : bd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Ni(a))
            }

            function Ni(a) {
                var c = [],
                    b;
                for (b in a) Tc(a, b) && c.push(b);
                return c
            }

            function hl(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function Gd(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === xf(c)
            }

            function ro(a) {
                for (var c = [], b = a.length -
                    1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Ha(a, c) {
                C(q(O, na("push", a)), c);
                return a
            }

            function Ye(a) {
                return a.splice(0, a.length)
            }

            function Ia(a) {
                return a ? ba(a) ? a : Yd ? Yd(a) : "number" === typeof a.length && 0 <= a.length ? Oi(a) : [] : []
            }

            function yf(a, c, b) {
                return b ? a : c
            }

            function so(a, c) {
                return bd(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ba(d) ? d : [d])
                }, [], c)
            }

            function Pi(a, c) {
                return bd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function to(a, c) {
                if (!ad(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function ba(a) {
                if (cd) return cd(a);
                (cd = ya(Array.isArray, "isArray")) || (cd = uo);
                return cd(a)
            }

            function vo(a, c) {
                return 1 <= Qi(la(a), c).length
            }

            function wo(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function Qi(a, c) {
                return bd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Te(a, c, b) {
                try {
                    if (S(c)) {
                        var d = va(arguments).slice(3);
                        sa(b) ? c.apply(void 0, d) : L.apply(void 0, aa([c, b], d))()
                    }
                } catch (e) {
                    Pd(a, u(e, Va), 0)
                }
            }

            function Va(a) {
                throw a;
            }

            function Pd(a, c,
                        b) {
                return Sb("setTimeout", a)(c, b)
            }

            function Ra(a, c) {
                return Sb("clearTimeout", a)(c)
            }

            function Hd() {
                return []
            }

            function uc() {
                return {}
            }

            function Sb(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function Vb(a, c, b) {
                return function() {
                    var d = va(arguments),
                        e = d[0];
                    d = d.slice(1);
                    var f = G(e),
                        g = b ? "global" : "m1001",
                        h = f.o(g, {}),
                        k = n(h, a);
                    k || (k = t(c), h[a] = k, f.C(g, h));
                    return k.apply(void 0, aa([e], d))
                }
            }

            function nc(a, c) {
                void 0 ===
                c && (c = {});
                if (!a || 1 > a.length) return c;
                N(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (sa(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function dd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    ta: function(b, d) {
                        zf.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return zf.call(c, b) || Y(d) ? e : d
                    }
                }
            }

            function Tc(a,
                        c) {
                return sa(a) ? !1 : zf.call(a, c)
            }

            function t(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : O;
                return function() {
                    var f = va(arguments),
                        g = e.apply(void 0, f),
                        h = Ri(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function ec(a) {
                if (Af) return Af;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && ya(a.Array.prototype.indexOf, "indexOf");
                return Af = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : xo
            }

            function xo(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function fa(a, c) {
                return c ? a(c) : a()
            }

            function q() {
                var a = va(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return N(Si, b, a)
                }
            }

            function Oe(a, c) {
                return D([a, c], N)
            }

            function bd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function Pa(a) {
                return na("test", a)
            }

            function na(a, c) {
                return L(c[a], c)
            }

            function u(a, c) {
                return L(c, null, a)
            }

            function D(a, c) {
                return L.apply(void 0, aa([c, null], a))
            }

            function yo() {
                var a = va(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e =
                        aa(d, va(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, aa([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Ti(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Ti(c, e)
                }
            }

            function Ti(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                S(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function va(a) {
                if (Yd) try {
                    return Yd(a)
                } catch (c) {}
                return Oi(a)
            }

            function Oi(a) {
                for (var c =
                    a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Fa(a) {
                return !ab(a) && !Y(a) && "[object Object]" === xf(a)
            }

            function sa(a) {
                return Y(a) || ab(a)
            }

            function S(a) {
                return "function" === typeof a
            }

            function tb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function ja(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function Si(a, c) {
                return c(a)
            }

            function zo(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function cn(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(We,
                    "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Ao(a) {
                return "" + a
            }

            function mc(a, c) {
                return !(!a || -1 === Xe(a, c))
            }

            function Xe(a, c) {
                if (Ui) var b = Ui.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function Ba(a) {
                return "string" ===
                    typeof a
            }

            function xf(a) {
                return Object.prototype.toString.call(a)
            }

            function Bf(a, c) {
                Bf = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, d) {
                        b.__proto__ = d
                    } || function(b, d) {
                        for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                    };
                return Bf(a, c)
            }

            function ya(a, c) {
                return za(c, a) && a
            }

            function za(a, c) {
                var b = Zd(a, c);
                c && !b && Cf.push([a, c]);
                return b
            }

            function Zd(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g +=
                    1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function E() {}

            function Tb(a) {
                return !a
            }

            function lb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function ed(a, c) {
                function b() {
                    this.constructor = a
                }
                Bf(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function aa() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function Bo() {}

            function Co(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function ta(a) {
                if (!(this instanceof ta)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.oa = 0;
                this.sc = !1;
                this.ua = void 0;
                this.Ma = [];
                Vi(a, this)
            }

            function Wi(a, c) {
                for (; 3 === a.oa;) a = a.ua;
                0 === a.oa ? a.Ma.push(c) : (a.sc = !0, ta.tc(function() {
                    var b = 1 === a.oa ? c.ve : c.we;
                    if (null === b)(1 === a.oa ? Df : fd)(c.xa, a.ua);
                    else {
                        try {
                            var d = b(a.ua)
                        } catch (e) {
                            fd(c.xa, e);
                            return
                        }
                        Df(c.xa, d)
                    }
                }))
            }

            function Df(a,
                        c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof ta) {
                            a.oa = 3;
                            a.ua = c;
                            Ef(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Vi(Co(b, c), a);
                            return
                        }
                    }
                    a.oa = 1;
                    a.ua = c;
                    Ef(a)
                } catch (d) {
                    fd(a, d)
                }
            }

            function fd(a, c) {
                a.oa = 2;
                a.ua = c;
                Ef(a)
            }

            function Ef(a) {
                2 === a.oa && 0 === a.Ma.length && ta.tc(function() {
                    a.sc || ta.Fd(a.ua)
                });
                for (var c = 0, b = a.Ma.length; c < b; c++) Wi(a, a.Ma[c]);
                a.Ma = null
            }

            function Do(a, c, b) {
                this.ve = "function" === typeof a ?
                    a : null;
                this.we = "function" === typeof c ? c : null;
                this.xa = b
            }

            function Vi(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Df(c, d))
                    }, function(d) {
                        b || (b = !0, fd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, fd(c, d))
                }
            }

            function Fl(a) {
                for (var c = a.length, b = 0, d = 255, e = 255, f, g, h; c;) {
                    f = 21 < c ? 21 : c;
                    c -= f;
                    do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
                    d = (d & 255) + (d >> 8);
                    e = (e & 255) + (e >> 8)
                }
                a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
                return 65535 === a ? 0 : a
            }

            function rb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function $b(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function gi(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return df(a, c, "", -100, b, d, e)
            }

            function ic(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Eo(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    gb: function(g, h, k) {
                        gi(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    o: function(g) {
                        return zd(a, "" + c + g + f)
                    },
                    C: function(g, h, k, l, m) {
                        df(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function pk(a,
                        c, b, d) {
                var e = Xi[b];
                return e ? function() {
                    var f = va(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = G(a);
                        h.ta("mt", {});
                        var k = h.o("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Va(m)
                    }
                    return g
                } : d
            }

            function Ld(a, c) {
                var b = Fo(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function Yi(a) {
                return (a = P(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Go(a,
                        c) {
                var b = Yi(a);
                Zi = go(a, function() {
                    var d = Yi(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return L(fo, null, a, Zi)
            }

            function Ho(a, c, b) {
                var d, e, f = c.R,
                    g = c.qc,
                    h = c.kb,
                    k = G(a),
                    l = ra((d = {}, d.wh = 1, d.pv = 1, d));
                $i(f) && a.Ed && a.Ed.Ve && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = P(a).href;
                h = {
                    F: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    G: l
                };
                b(h, c)["catch"](A(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function Io(a, c, b) {
                function d() {
                    Ra(a, h);
                    g(!1)
                }

                function e() {
                    k = !0;
                    g(!1);
                    c()
                }

                function f() {
                    Ra(a, h);
                    if (k) g(!1);
                    else {
                        var T = Math.max(0, b -
                            (r ? v : v + l(ca) - x));
                        T ? h = da(a, e, T, "u.t.d.c") : e()
                    }
                }

                function g(T) {
                    C(function(V) {
                        var xa = V[0],
                            ma = V[1];
                        V = V[2];
                        T ? w.D(xa, ma, V) : w.Xa(xa, ma, V)
                    }, J)
                }
                var h = 0,
                    k = !1;
                if (lf(a)) return h = da(a, c, b, "u.t.d"), d;
                var l = Z(a),
                    m = !1,
                    p = !1,
                    r = !0,
                    v = 0,
                    x = l(ca),
                    w = ha(a),
                    J = [
                        [a, ["blur"], function() {
                            r = m = p = !0;
                            v += l(ca) - x;
                            x = l(ca);
                            f()
                        }],
                        [a, ["focus"], function() {
                            m || p || (v = 0);
                            x = l(ca);
                            m = p = !0;
                            r = !1;
                            f()
                        }],
                        [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                            p || (m = !0, r = !1, p = !0, f())
                        }]
                    ];
                g(!0);
                f();
                return d
            }

            function he(a, c, b, d) {
                return function() {
                    if (wa(a,
                        c)) {
                        var e = va(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function eb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] <<
                16 | b[1], b[2] << 16 | b[3]
                ]
            }

            function Wb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function vc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 -
                c
                ]
            }

            function Ya(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ia(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function aj(a) {
                a = ia(a, [0, a[0] >>> 1]);
                a = eb(a, [4283543511, 3981806797]);
                a = ia(a, [0, a[0] >>> 1]);
                a = eb(a, [3301882366, 444984403]);
                return a = ia(a, [0, a[0] >>> 1])
            }

            function Jo(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    J: [0, d],
                    K: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f +
                            7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = eb(h, $d);
                    h = vc(h, 31);
                    h = eb(h, ae);
                    g.J = ia(g.J, h);
                    g.J = vc(g.J, 27);
                    g.J = Wb(g.J, g.K);
                    g.J = Wb(eb(g.J, [0, 5]), [0, 1390208809]);
                    k = eb(k, ae);
                    k = vc(k, 33);
                    k = eb(k, $d);
                    g.K = ia(g.K, k);
                    g.K =
                        vc(g.K, 31);
                    g.K = Wb(g.K, g.J);
                    g.K = Wb(eb(g.K, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ia(h, Ya([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ia(h, Ya([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ia(h, Ya([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ia(h, Ya([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ia(h, Ya([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ia(h, Ya([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ia(h, [0, b.charCodeAt(f + 8)]), h = eb(h, ae), h = vc(h, 33), h = eb(h, $d), d.K = ia(d.K, h);
                    case 8:
                        g = ia(g, Ya([0, b.charCodeAt(f +
                            7)], 56));
                    case 7:
                        g = ia(g, Ya([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ia(g, Ya([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ia(g, Ya([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ia(g, Ya([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ia(g, Ya([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ia(g, Ya([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ia(g, [0, b.charCodeAt(f)]), g = eb(g, $d), g = vc(g, 31), g = eb(g, ae), d.J = ia(d.J, g)
                }
                d.J = ia(d.J, [0, b.length]);
                d.K = ia(d.K, [0, b.length]);
                d.J = Wb(d.J, d.K);
                d.K = Wb(d.K, d.J);
                d.J = aj(d.J);
                d.K = aj(d.K);
                d.J = Wb(d.J, d.K);
                d.K = Wb(d.K, d.J);
                return ("00000000" +
                    (d.J[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.J[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8)
            }

            function gd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = kb('[itemprop~="' + b + '"]', c);
                return d ? U(function(e) {
                    return e.parentNode && Pb("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function Ta(a, c, b) {
                return (a = gd(a, c, b)) && a.length ? a[0] : null
            }

            function Qa(a) {
                if (!a) return "";
                a = ba(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") ||
                    Db(a[0]) : ""
            }

            function bj(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Qa(a) : ""
            }

            function Lc(a, c, b) {
                a = c && (mc(c.className, "ym-disable-keys") || mc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Pn(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Tg(a, c) {
                return Ud(c) ? "password" === c.type || c.name && K(c.name.toLowerCase(), cj) || c.id && K(c.id.toLowerCase(), cj) : !1
            }

            function dj(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Ha(a, [b >> 8, b & 255])
            }

            function Ma(a, c) {
                Ha(a, [c & 255])
            }

            function Sa(a, c, b) {
                Ma(c, b);
                return !1
            }

            function F(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Ha(a, [b & 127 | 128]), b >>= 7;
                Ha(a, [b])
            }

            function Ff(a, c) {
                F(a, c.length);
                for (var b = 0; b < c.length; b += 1) F(a, c.charCodeAt(b))
            }

            function Gf(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) dj(a, b.charCodeAt(d))
            }

            function Ko(a, c) {
                var b = [];
                if (Sa(a, b, 27)) return [];
                F(b, c);
                return b
            }

            function Lo(a, c) {
                var b = Xa(c);
                if (!b) return c[Ca] = -1, null;
                var d = +c[Ca];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e =
                        c; e;) {
                        if (e.attributes.af) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Sd(a, c),
                    g = f && f[Ca] ? f[Ca] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Mo()[b];
                h || (e |= 2);
                var k = pi(a, c);
                k || (e |= 4);
                var l = Ee(a, c);
                (f = f ? Ee(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                cc[d].Sc = l[0] + "x" + l[1];
                cc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (Sa(a, f, 1)) return null;
                F(f, d);
                Ma(f, e);
                F(f, g);
                h ? Ma(f, h) : Gf(f, b);
                k && F(f, k);
                e & 8 || (F(f, l[0]), F(f, l[1]), F(f, l[2]), F(f, l[3]));
                e & 32 && Gf(f, c.id);
                Ma(f,
                    0);
                return f
            }

            function No(a, c) {
                var b = c[Ca];
                if (!b || 0 > b || !Ce(c) || !c.form || Wg(a, c.form)) return [];
                var d = ui(a, c.form);
                if (0 > d) return [];
                if (Ud(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        fb: 0,
                        pf: 0,
                        "datetime-local": 0,
                        email: 0,
                        Qc: 0,
                        Vf: 0,
                        search: 0,
                        $f: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        cg: 0,
                        password: 2,
                        Uf: 3,
                        kf: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        Ye: 1,
                        Ze: 5
                    };
                    var f = Xa(c);
                    e = Y(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    } if (0 > f) return [];
                g = [];
                if (Sa(a, g, 7)) return [];
                F(g, b);
                F(g, d);
                F(g, e);
                Ff(g, c.name || "");
                F(g, f);
                return g
            }

            function Fg(a, c, b, d, e, f, g) {
                var h;
                var k = Td(a, d);
                var l = k[0];
                for (k = k[1]; d && (!l || !k);)
                    if (d = Sd(a, d)) k = Td(a, d), l = k[0], k = k[1];
                if (!d) return [];
                l = d[Ca];
                if (!l || 0 > l) return [];
                k = (h = {}, h.mousemove = 2, h.click = 32, h.dblclick = 33, h.mousedown = 4, h.mouseup = 30, h.touch = 12, h)[b];
                if (!k) return [];
                h = [];
                d = kf(a, d);
                if (Sa(a, h, k)) return [];
                F(h, c);
                F(h, l);
                F(h, Math.max(0, e[0] - d.left));
                F(h, Math.max(0, e[1] - d.top));
                /^mouse(up|down)|click$/.test(b) && (a = f || g, Ma(h,
                    2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2));
                return h
            }

            function Oo(a, c, b) {
                var d = ui(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!si(e[g])) {
                        var h = e[g][Ca];
                        h && 0 < h && b.push(h)
                    } e = [];
                if (Sa(a, e, 11)) return [];
                F(e, c);
                F(e, d);
                F(e, b.length);
                for (a = 0; a < b.length; a += 1) F(e, b[a]);
                return e
            }

            function qb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !Ll(a, c, b); c = Sd(a, c)) d.push(c);
                C(function(e) {
                    cc.Fb += 1;
                    var f = cc.Fb;
                    e[Ca] = f;
                    cc[f] = {};
                    f = Lo(a, e);
                    e = No(a, e);
                    f && e && (Ha(b, f), Ha(b, e))
                }, Po(d));
                return b
            }

            function Qo(a) {
                var c =
                    a.X;
                if (!Kc || c && !c.fromElement) return Rg(a)
            }

            function Ro(a) {
                var c = a.X;
                if (c && !c.toElement) return De(a)
            }

            function ej(a) {
                var c = pb(a.X);
                if (c && Ad(c)) {
                    var b = Qg(a, c);
                    var d = La(a.l),
                        e = [];
                    Sa(a.l, e, 17) ? a = [] : (F(e, d), F(e, c[Ca]), a = e);
                    return aa(b, a)
                }
            }

            function fj(a) {
                var c = a.l,
                    b = a.X.target;
                if (b && Ad(b)) {
                    c = qb(c, b);
                    var d = La(a.l),
                        e = [];
                    Sa(a.l, e, 18) ? a = [] : (F(e, d), F(e, b[Ca]), a = e);
                    return aa(c, a)
                }
            }

            function gj(a) {
                var c = a.l,
                    b = pb(a.X);
                if (!b || Tg(c, b) || Lc(c, b)) return [];
                if (Ce(b)) {
                    var d = G(c).o("isEU"),
                        e = Bd(c, b, d),
                        f = e.Ta;
                    d = e.Kc;
                    e = e.Bc;
                    if (ti(b)) var g = b.checked;
                    else g = b.value, g = f ? I("", hj(g.split(""))) : g;
                    c = qb(c, b);
                    f = La(a.l);
                    d = d && !e;
                    e = [];
                    Sa(a.l, e, 39) ? a = [] : (F(e, f), F(e, b[Ca]), Gf(e, String(g)), Ma(e, d ? 1 : 0), a = e);
                    return aa(c, a)
                }
            }

            function Jc(a) {
                var c = a.l,
                    b = a.X,
                    d = pb(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, Ha);
                d && Ad(d) ? f(Qg(a, d)) : f(qb(c, d));
                f = yd(c, b);
                return aa(e, Fg(c, La(a.l), b.type, d, [f.x, f.y], b.which, b.button))
            }

            function So(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (ab(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Bd(b, c).Ta || Lc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Bd(b, d).Ta || Lc(b, d, !0), f += 1;
                if (e !== Hf) return Hf = e, d = d ? I("", hj(e.split(""))) : e, e = La(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) :
                    (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Sa(a.l, c, 29) ? a = [] : (F(c, e), Ff(c, b), Ff(c, d), a = c), a
            }

            function To(a) {
                return aa(Jc(a), So(a) || [])
            }

            function ij(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function jj(a) {
                var c = [];
                If || (If = !0, Hf && c.push.apply(c, Ko(a.l, La(a.l))), Yb(a.l, function() {
                    If = !1
                }, "fv.c"));
                return c
            }

            function kj(a, c, b, d) {
                var e = pb(c);
                if (!e || Fe(a, e)) return [];
                var f = e && Nb("ym-record-keys", e),
                    g = Sg(e);
                c = Bd(a, e).Ta;
                var h = G(a);
                if (!f && (g && h.o("isEU") ||
                    Lc(a, e))) a = [];
                else {
                    f = qb(a, e);
                    h = La(a);
                    g = [];
                    if (Sa(a, g, 38)) a = [];
                    else {
                        F(g, h);
                        dj(g, b);
                        Ma(g, d);
                        a = e[Ca];
                        if (!a || 0 > a) a = 0;
                        F(g, a);
                        Ma(g, c ? 1 : 0);
                        a = g
                    }
                    a = aa(f, a)
                }
                return a
            }

            function Uo(a) {
                var c = a.l,
                    b = a.X,
                    d = b.keyCode,
                    e = ij(b),
                    f = [],
                    g = u(f, Ha);
                if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                } [d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(kj(c, b, d, e | 16)), Jf = !1, Yb(c, function() {
                    Jf = !0
                }, "fv.kd"), !(67 === d &&
                    e & 4) || e & 1 || e & 2 || g(jj(a));
                return f
            }

            function Vo(a) {
                var c = a.l;
                a = a.X;
                var b = [];
                Jf && !Kf && 0 !== a.which && (b.push.apply(b, kj(c, a, a.charCode || a.keyCode, ij(a))), Kf = !0, Yb(c, function() {
                    Kf = !1
                }, "fv.kp"));
                return b
            }

            function lj(a) {
                var c = a.l,
                    b = pb(a.X);
                if (!b || Wg(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) si(e[f]) || d.push.apply(d, qb(c, e[f]));
                    d.push.apply(d, Oo(c, La(a.l), b))
                }
                return d
            }

            function Wo(a) {
                var c = a.flush;
                a = pb(a.X);
                "BODY" === Xa(a) && c()
            }

            function kl(a, c) {
                var b, d = pb(c),
                    e = pa.Eb,
                    f = dd(a);
                if (d && Nb("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ka(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function fg(a, c, b, d) {
                return function() {
                    var e = va(arguments);
                    e = d.apply(void 0, e);
                    return Y(e) ? wa(a, c) : e
                }
            }

            function eg(a, c, b, d) {
                return A(a, "cm." + b, d)
            }

            function nk(a, c, b, d, e) {
                return b.length && e ? D(N(function(f,
                                                    g, h) {
                    return b[h] ? f.concat(D([a, c, d], g)) : f
                }, [], b), q)()(e) : e
            }
            var wc = {
                    construct: "Metrika",
                    callbackPostfix: "",
                    version: "841zal6na1ckn5333zv067",
                    host: "mc.yandex.ru"
                },
                Cf = [],
                We = /\./g,
                Ui = ya(String.prototype.indexOf, "indexOf"),
                mj = ya(Array.prototype.join, "join"),
                I = mj ? function(a, c) {
                    return mj.call(c, a)
                } : zo,
                la = ja(function(a, c) {
                    return a === c
                }),
                Hc = ja(function(a, c) {
                    a(c);
                    return c
                }),
                Nc = ja(I),
                Da = ja(Si),
                ab = la(null),
                Y = la(void 0),
                Yd = ya(Array.from, "from"),
                nj = ya(Function.prototype.bind, "bind"),
                L = nj ? function() {
                    var a = va(arguments);
                    return nj.apply(a[0], aa([a[1]], a.slice(2)))
                } : yo,
                rc = ja(D),
                nh = ja(na),
                oj = ya(Array.prototype.reduce, "reduce"),
                N = oj ? function(a, c, b) {
                    return oj.call(b, a, c)
                } : bd,
                Zh = q,
                Ah = q(O, fa),
                Af, Ri = ec(window),
                Xo = tb(Ri),
                zf = Object.prototype.hasOwnProperty,
                G = t(dd),
                R = tb(n),
                Aa = R("length"),
                eh = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return N(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                pj = ya(Array.prototype.filter, "filter"),
                U = pj ? function(a, c) {
                    return pj.call(c, a)
                } : Qi,
                oc = ja(U),
                Mb = za("find",
                    Array.prototype.find) ? function(a, c) {
                    return Array.prototype.find.call(c, a)
                } : wo,
                K = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : vo,
                dc = tb(K),
                qj = t(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        Ic: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        pd: c
                    }
                }),
                bb = t(R("navigator.userAgent")),
                rj = t(u(/gecko/, function(a, c) {
                    return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
                })),
                ad = t(function(a) {
                    var c = n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || sa(a))
                }),
                cd, uo = q(xf, la("[object Array]")),
                sj = ya(Array.prototype.map, "map"),
                z = sj && to(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? sj.call(c, a) : []
                } : Pi,
                C = z,
                Kb = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : so,
                cb = ja(z),
                ho = tb(z),
                Na = yf(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, za("some", Array.prototype.some)),
                Ue = t(ec),
                Wc =
                    R("0"),
                Yo = ja(function(a, c) {
                    return Array.prototype.sort.call(c, a)
                }),
                tj = ya(Array.prototype.reverse, "reverse"),
                Po = tj ? function(a) {
                    return tj.call(a)
                } : ro,
                uj = tb(parseInt),
                Ka = uj(10),
                Lf = uj(2),
                Ga = Object.entries ? function(a) {
                    return a ? Object.entries(a) : []
                } : Mi,
                ea = Object.keys ? Object.keys : Ni,
                Zo = q(Mi, u(R("1"), Pi)),
                $o = Object.values ? Object.values : Zo,
                y = Object.assign || qo,
                Pg = ja(function(a, c) {
                    return y({}, a, c)
                }),
                ud = t(q(R("String.fromCharCode"), u("fromCharCode", za), Tb)),
                wf = t(q(bb, Pa(/ipad|iphone|ipod/i))),
                Ge = t(function(a) {
                    return n(a,
                        "navigator.platform") || ""
                }),
                Oc = t(function(a) {
                    a = qj(a);
                    var c = a.pd;
                    return a.Ic && !c.match("CriOS")
                }),
                ap = Pa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                bp = Pa(/; wv\)/),
                Mc = t(function(a) {
                    a = bb(a);
                    return bp(a) || ap(a)
                }),
                cp = /Chrome\/(\d+)\./,
                dp = t(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(cp)) && a.length ? 76 <= Ka(a[1]) : !1
                }),
                Dd = t(function(a) {
                    var c = (bb(a) || "").toLowerCase();
                    a = Ge(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                ep = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                fp = t(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (Y(c)) return null;
                    a = Ue(a)(c, ep);
                    return -1 === a ? c : "" + a
                }),
                lf = t(q(R("document.addEventListener"), Tb)),
                vj = t(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                hg = t(function(a) {
                    var c =
                        n(a, "navigator") || {};
                    a = vj(a);
                    Ba(a) || (a = "", c = n(c, "languages.0"), Ba(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                wb = t(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                gp = t(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                hp = t(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                ip = t(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Na(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Na(u(n(a, "document"), n), c) || b || d && Na(L(d.getAttribute, d), e))
                }),
                jp = t(function(a) {
                    return !!(Na(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(bb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                kp = t(function(a) {
                    return eh(u(a,
                        n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                lp = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                Dk = t(q(R("navigator.userAgent"), Pa(lp))),
                hd = t(function(a) {
                    var c = bb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0,
                        0
                    ];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (wf(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Oc(a)
                }),
                po = /Edg\/(\d+)\./,
                oo = /Firefox\/([0-9]+)/,
                $e = t(function(a) {
                    return hd(a) || re(a, 68) || se(a, 79)
                }),
                mp = wc.construct,
                Ob = wc.host,
                Mf = lf(window),
                pa = {
                    Bd: 24226447,
                    vd: 26302566,
                    Dd: 51533966,
                    We: 65446441,
                    va: "https:",
                    $a: "1001",
                    Eb: mp,
                    Ad: Mf ? 512 : 2048,
                    yd: Mf ? 512 : 2048,
                    zd: Mf ? 100 : 400,
                    Xe: 100,
                    Cd: "noindex"
                },
                Ub = {},
                M = t(function(a) {
                    return a.id + ":" + a.R
                }),
                $i = la("1"),
                np = setTimeout;
            ta.prototype["catch"] = function(a) {
                return this.then(null,
                    a)
            };
            ta.prototype.then = function(a, c) {
                var b = new this.constructor(Bo);
                Wi(this, new Do(a, c, b));
                return b
            };
            ta.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            ta.all = function(a) {
                return new ta(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            ta.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === ta ? a : new ta(function(c) {
                    c(a)
                })
            };
            ta.reject = function(a) {
                return new ta(function(c, b) {
                    b(a)
                })
            };
            ta.race = function(a) {
                return new ta(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) ta.resolve(a[d]).then(c, b)
                })
            };
            ta.tc = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                np(a, 0)
            };
            ta.Fd = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var H = window.Promise,
                op = ya(H, "Promise"),
                wj = ya(n(H, "resolve"), "resolve"),
                xj = ya(n(H, "reject"), "reject"),
                yj = ya(n(H, "all"), "all");
            if (K(!1, [op, wj, xj, yj])) H = ta;
            else {
                var be = function(a) {
                    return new Promise(a)
                };
                be.resolve = L(wj, H);
                be.reject = L(xj,
                    H);
                be.all = L(yj, H);
                H = be
            }
            var pp = dc([26812653]),
                Sh = t(q(R("id"), pp), M),
                ub = [],
                Q = [],
                Ec = [],
                nd = [],
                Nf = [],
                Of = [],
                jo = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                id, hc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (id) var d = new id(c);
                        else za("Error", a.Error) ? (id = a.Error, d = new a.Error(c)) : (id = lo, d = new id(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                ko = Pa(/^http./),
                io = Pa(/^err.kn/),
                Ki = [],
                qp = t(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b =
                            Object.defineProperty({}, "passive", {
                                get: function() {
                                    c = !0;
                                    return 1
                                }
                            });
                        a.addEventListener("test", E, b)
                    } catch (d) {}
                    return c
                }),
                rp = ja(function(a, c) {
                    return a ? y({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ha = t(function(a) {
                    a = qp(a);
                    var c = rp(a),
                        b = {};
                    return y(b, {
                        D: function(d, e, f, g) {
                            C(function(h) {
                                var k = c(g);
                                Ji(d, h, f, k, !1)
                            }, e);
                            return L(b.Xa, b, d, e, f, g)
                        },
                        Xa: function(d, e, f, g) {
                            C(function(h) {
                                var k = c(g);
                                Ji(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                Z = t(Vh),
                ao = ja(function(a, c) {
                    for (var b = []; !Xd(c);) {
                        var d = co(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                tf = [],
                uf = !1,
                sf = !1,
                Eb = {
                    id: "id",
                    qc: "ut",
                    R: "type",
                    Tb: "ldc",
                    Da: "nck",
                    kb: "url",
                    Wd: "referrer"
                },
                sp = /^\d+$/,
                xc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        sp.test(a) || (a = "0");
                        try {
                            var c = Ka(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    R: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Da: Boolean,
                    qc: Boolean
                };
            Eb.eb = "defer";
            xc.eb = Boolean;
            Eb.O = "params";
            xc.O = function(a) {
                return Fa(a) || ba(a) ? a : null
            };
            Eb.pc = "userParams";
            Eb.md = "triggerEvent";
            xc.md = Boolean;
            Eb.ad = "sendTitle";
            xc.ad = function(a) {
                return !!a || Y(a)
            };
            Eb.kc = "trackHash";
            xc.kc = Boolean;
            Eb.kd = "trackLinks";
            Eb.Qd = "enableAll";
            var ie = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ba: c[1],
                        Sa: xc[b]
                    };
                    return a
                }, {}, Ga(Eb)),
                zj = ja(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, O),
                        o: function(d, e) {
                            var f = b[d];
                            return Y(f) && !Y(e) ? e : f
                        },
                        C: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        yb: function(d, e) {
                            return "" === e || sa(e) ? this : this.C(d, e)
                        },
                        sa: u(b, a)
                    }
                }),
                ra = zj(function(a) {
                    var c = "";
                    a = N(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ga(a));
                    c && a.push(c);
                    return I(":", a)
                }),
                Pf, Bi = (Pf = {}, Pf.w = [
                    [function(a, c) {
                        return {
                            N: function(b, d) {
                                var e,
                                    f = b.F;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.R && (f["cnt-class"] = c.R);
                                b.G || (b.G = ra());
                                e = b.G;
                                var g = b.M;
                                f = {
                                    aa: {
                                        ma: "watch/" + c.id
                                    },
                                    M: y(void 0 === g ? {} : g, {
                                        Bb: !(!e.o("pv") || e.o("ar") || e.o("wh"))
                                    }),
                                    F: y(b.F || {}, f)
                                };
                                y(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Pf),
                tp = u(Bi, Ci),
                Za = qf("w"),
                yi = ["webkitvisibilitychange", "visibilitychange"],
                of = zj(function(a) {
                    a = Ga(a);
                    return I("", z(function(c) {
                        var b = c[0];
                        c = c[1];
                        return ab(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Aj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                dn = /^ *(data|javascript):/i,
                Gh = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ea, Xi = (Ea = {}, Ea.hit = "h", Ea.params = "p", Ea.reachGoal = "g", Ea.userParams = "up",
                    Ea.trackHash = "th", Ea.accurateTrackBounce = "atb", Ea.notBounce = "nb", Ea.addFileExtension = "fe", Ea.extLink = "el", Ea.file = "fc", Ea.trackLinks = "tl", Ea.destruct = "d", Ea.setUserID = "ui", Ea.getClientID = "ci", Ea.clickmap = "cm", Ea.enableAll = "ea", Ea),
                up = t(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                vp = q(M, up, fa),
                bf = {
                    mc: function(a) {
                        a = dd(a).o("mt", {});
                        a = Ga(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = G(a).o("cls", {
                                bb: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.bb,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.F;
                        return !a || a.nohit ? null : vp(c)
                    }
                },
                Fb = D([1, null], yf),
                ce = D([1, 0], yf),
                Un = t(function(a) {
                    wi(a, "_ymBRC", "1");
                    var c = "1" !== vi(a, "_ymBRC");
                    c || xi(a, "_ymBRC");
                    return c
                }),
                Ja = t(ue),
                yc = t(ue, function(a, c, b) {
                    return "" + c + b
                }),
                wp = t(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                jb = t(q(R("document"), u("createElement", Sb))),
                Yg = t(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = Mb(function(b) {
                            return za(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                xp = la("INPUT"),
                Ud = q(Xa, xp),
                yp = la("TEXTAREA"),
                Rn = q(Xa, yp),
                zp = la("SELECT"),
                Sn = q(Xa, zp),
                ti = q(R("type"), Pa(/^(checkbox|radio)$/)),
                Ce = q(Xa, Pa(/^INPUT|SELECT|TEXTAREA$/)),
                Ad = q(Xa, Pa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Qn = ["submit", "image", "hidden"],
                ai = /^\s+|\s+$/g,
                qi = ya(String.prototype.trim, "trim"),
                Bj = ja(function(a, c) {
                    return c.replace(a, "")
                }),
                rh = Bj(/\s/g),
                yb = Bj(/\D/g),
                Ke = t(function() {
                    for (var a = 59, c = {}, b = 0; b < Aj.length; b += 1) c[Aj[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                oi = t(function(a) {
                    return {
                        uf: a,
                        Aa: null,
                        Ea: []
                    }
                }),
                mi = {},
                hf = {};
            mi.p = 500;
            var li = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            hf.h = !0;
            hf.c = !0;
            var sc = {};
            sc.p = jf;
            sc.c = function(a, c, b) {
                (a = db(n(c, "textContent"))) && b && (b = b(c), b.length && Na(q(R("textContent"), db, la(a)), b) && (a = ""));
                Ud(c) && (a = db(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var zc, gf = "button," + z(function(a) {
                        return 'input[type="' + a + '"]'
                    },
                    ["button", "submit", "reset", "file"]).join(",") + ",a",
                Me = u(gf, kb),
                Nn = (zc = {}, zc.A = "h", zc.BUTTON = "i", zc.DIV = "i", zc.INPUT = "ty", zc),
                Mn = "hash host hostname href pathname port protocol search".split(" "),
                ff = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                ki = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                Md = t(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Ap = t(function(a) {
                    a = P(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(ki));
                    return c
                }),
                Cj =
                    q(P, R("protocol"), la("https:")),
                Dj = /\/$/,
                Bp = t(q(Z, Da(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Cp = q(Z, Da(function(a) {
                    a = new a.l.Date;
                    return I("", z(eo, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Dp = q(Z, Da(cf)),
                Ej = t(q(Z, Da(function(a) {
                    return a.ea[0]
                }))),
                Ep = t(uc),
                Kn = t(function(a) {
                    return dp(a) && Cj(a) ? "SameSite=None;Secure;" : ""
                }),
                ji = ["metrika_enabled"],
                ef = [],
                hi = Vb("gsc", fi),
                Ln = /:\d+$/,
                Eo = t(function(a) {
                    var c = (P(a).host || "").split(".");
                    return 1 ===
                    c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = I(".", c.slice(-e)), Lg(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                bc = t(ic),
                ei = Vb("r", function(a, c) {
                    var b = di(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Yc = t(function() {
                    return {
                        ja: {},
                        pending: {},
                        children: {}
                    }
                }),
                Qf = R("postMessage"),
                Fp = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Yc(a),
                        g = I(":", [c.ia.fb, c.ia.key]);
                    if (Qf(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.hd, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        da(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Gp = B("s.fh", function(a, c, b, d, e, f) {
                    var g =
                            null,
                        h = null,
                        k = Yc(a),
                        l = null;
                    try {
                        g = rb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!sa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !sa(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ba(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!ab(k) && Qf(k) && (f = d.T(l.type, [f, l]), e = z(q(O, Pg(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.hd, "*"))
                            }
                        } else g === "" + h && ba(l) && U(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length ===
                        l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                Fc = t(function(a, c) {
                    var b, d = Sb("getElementsByTagName", n(a, "document")),
                        e = Yc(a),
                        f = Qf(a),
                        g = Re(a),
                        h = ha(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + xb(a), b);
                    $e(a) && (f.duid = lc(a, c));
                    Gn(a, g);
                    Hn(a);
                    b = In(a, f);
                    var k = D([a, u([], b)], Fp);
                    C(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, r) {
                            g.T("initToParent", [p, r])
                        })
                    }, d);
                    wb(a) && k(a.parent, {
                            type: "initToParent"
                        },
                        function(l, m) {
                            g.T("parentConnect", [l, m])
                        });
                    h.D(a, ["message"], D([a, c, b, g, f], Gp));
                    return {
                        V: g,
                        ja: e.ja,
                        children: e.children,
                        cc: k
                    }
                }, q(lb, M)),
                vd = t(function(a, c) {
                    if (!$e(a) || !wb(a)) return lc(a, c);
                    var b = Fc(a, c);
                    return b && b.ja[c.id] ? b.ja[c.id].info.duid || lc(a, c) : lc(a, c)
                }, function(a, c) {
                    return "{" + c.Tb + c.Da
                }),
                Hp = t(function(a) {
                    a = G(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, q(lb, M)),
                W, af = (W = {}, W.vf = u(wc.version, O), W.nt = fp, W.fp = function(a, c, b) {
                    if (b.F && b.F.nohit) return null;
                    c = M(c);
                    b = Ep(a);
                    if (b[c]) return null;
                    a: {
                        var d = Ej(a),
                            e = n(a, "performance.getEntriesByType");
                        if (S(e)) {
                            if (a = U(q(O, R("name"), la("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) : null
                }, W.fu = function(a, c, b) {
                    var d = b.F;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Dj, "");
                    b = (d["page-ref"] ||
                        "").replace(Dj, "");
                    d = d["page-url"];
                    a = P(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, W.en = wp, W.la = vj, W.ut = function(a, c, b) {
                    var d = b.L;
                    b = b.F;
                    d = d && d.qb;
                    b && (Ap(a) || c.qc || d) && (b.ut = pa.Cd);
                    return null
                }, W.v = u(pa.$a, O), W.cn = Hp, W.dp = function(a) {
                    var c = G(a),
                        b = c.o("bt", {});
                    if (Y(c.o("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.C("bt", b);
                        b.p && b.p.then && b.p.then(A(a, "bi:dp.p", function(e) {
                            b.Pe = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return ce(b.Pe)
                }, W.ls = t(function(a,
                                     c) {
                    var b = yc(a, c.id),
                        d = Z(a),
                        e = b.o("lsid");
                    return +e ? e : (d = Wa(a, 0, d(ca)), b.C("lsid", d), d)
                }, lb), W.hid = xb, W.phid = function(a, c) {
                    if (!wb(a)) return null;
                    var b = Fc(a, c);
                    if (!b) return null;
                    var d = ea(b.ja);
                    return d.length ? b.ja[d[0]].info.hid : null
                }, W.z = Bp, W.i = Cp, W.et = Dp, W.c = q(R("navigator.cookieEnabled"), Fb), W.rn = q(O, Wa), W.rqn = function(a, c, b) {
                    b = b.F;
                    if (!b || b.nohit) return null;
                    c = M(c);
                    a = yc(a, c);
                    c = (a.o("reqNum", 0) || 0) + 1;
                    a.C("reqNum", c);
                    if (a.o("reqNum") === c) return c;
                    a.gb("reqNum");
                    return null
                }, W.u = vd, W.tp = q(lb, Li, Fb),
                    W.tpid = q(lb, function(a) {
                        a = M(a);
                        return Ub[a] && Ub[a].Je || null
                    }), W.w = function(a) {
                    a = Ic(a);
                    return a[0] + "x" + a[1]
                }, W.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return I("x", [a, b, c])
                    }
                    return null
                }, W.sk = R("devicePixelRatio"), W.ifr = q(wb, Fb), W.j = q(hp, Fb), W.sti = function(a) {
                    return wb(a) ? gp(a) ? "1" : null : null
                }, W),
                Fn = t(function() {
                    return Ha(ea(af), ea(bf))
                }),
                En = t(uc, M),
                bi = t(function() {
                    return {
                        Ac: null,
                        ca: []
                    }
                }, M),
                Bn = /^[a-z][\w.+-]+:/i,
                Rf, Bb = [
                    [Vd, 1],
                    [Rd, 2],
                    [Cb(), 3],
                    [ci, 4]
                ],
                Qd = [],
                mb = u(Bb, Di),
                Ab = (Rf = {}, Rf.h = Bb, Rf),
                X = u(Ab, Ci);
            mb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.F;
                        if (!c.G || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = $h(a, e) : delete d["page-ref"];
                        d["page-url"] = $h(a, f).slice(0, pa.Ad);
                        return b()
                    }
                }
            }, -100);
            var xn = /[^a-z0-9.:-]/,
                Sf, Qb = [],
                Tf = {};
            Qb.push(Wh, 0, Rb, Ze, Xc);
            var Fj = [Rb];
            Fj.push(Ze);
            var Gj = zb(Fj),
                Ac = zb([Xc]),
                Ip = zb([Wh, Xc]),
                de = zb([0, Rb, Ze, Xc]),
                ka = (Sf = {}, Sf.h = Gj, Sf),
                Gc = t(function(a, c) {
                    var b = Tf["*"] ? Tf["*"] : c &&
                        Tf[c];
                    b || (b = c ? ka[c] || [] : Qb);
                    b = N(function(d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || dg();
                    return b
                }, lb),
                Uf, Jp = L(H.reject, H, Oa()),
                ua = (Uf = {}, Uf.h = Za, Uf),
                qa = B("g.sen", function(a, c, b) {
                    var d = Gc(a, c);
                    b = b ? An(a, c, b) : [];
                    var e = ua[c],
                        f = e ? e(a, d, b) : Za(a, d, b);
                    return function() {
                        var g = va(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.M;
                        h = y(h, {
                            M: y(void 0 === k ? {} : k, {
                                ga: [c]
                            })
                        });
                        return f.apply(void 0, aa([h], g))
                    }
                }, Jp),
                qn = ja(function(a, c) {
                    if (!c[a]) {
                        var b, d = new H(function(e) {
                            b = e
                        });
                        c[a] = {
                            Yc: b,
                            xa: d,
                            Zc: !1
                        }
                    }
                    return c[a].xa
                }),
                Uh = t(q(uc, Da)),
                jd = t(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Zd("log", c) ? L(c, a) : E;
                    var b = n(a, "warn");
                    b = Zd("warn", b) ? L(b, a) : c;
                    var d = n(a, "error");
                    a = Zd("error", d) ? L(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Kp = B("dc.init", function(a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m - 1] = arguments[m];
                        G(a).o("dce:" + c, !1) && e[k].apply(e, l);
                        G(a).o("dclq:" + c).push([k, l])
                    }
                    var d = P(a),
                        e = jd(a, c);
                    G(a).ta("dclq:" + c, []);
                    var f = bc(a),
                        g = Th(a),
                        h = g.je;
                    g = g.de;
                    h && !g && f.C("debug", "1", void 0, d.host);
                    return h ||
                    g ? {
                        log: u("log", b),
                        warn: u("warn", b),
                        error: u("error", b)
                    } : {
                        log: E,
                        warn: E,
                        error: E
                    }
                }),
                Od = t(Kp, lb),
                Lp = B("p.dc", function(a, c) {
                    var b = M(c);
                    Rh(a, "");
                    Rh(a, b)
                }),
                qk = A(window, "h.p", function(a, c) {
                    var b, d, e = qa(a, "h", c),
                        f = c.kb || "" + P(a).href,
                        g = c.Wd || a.document.referrer,
                        h = {
                            G: ra((b = {}, b.pv = 1, b)),
                            F: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            L: {}
                        };
                    h.L.O = c.O;
                    h.L.pc = c.pc;
                    c.eb && h.F && (h.F.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.eb || sb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.O)(), Yb(a, D([a, c, k], rn)))
                    })["catch"](A(a,
                        "h.g.s"))
                }),
                Vf = ["yandex_metrika_callback" + wc.callbackPostfix, "yandex_metrika_callbacks" + wc.callbackPostfix],
                Mp = B("cb.i", function(a) {
                    var c = Vf[0],
                        b = Vf[1];
                    if (S(a[c])) a[c]();
                    "object" === typeof a[b] && C(function(d, e) {
                        a[b][e] = null;
                        Te(a, d)
                    }, a[b]);
                    C(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Vf)
                }),
                Hj = t(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                Np = B("fpm", function(a, c) {
                    if (!Cj(a)) return E;
                    var b = M(c);
                    if (!Hj(a)) return vb(a, b, "Not supported"), E;
                    var d = wa(a, c);
                    return d ? function(e) {
                        return (new H(function(f, g) {
                            return Fa(e) ? ea(e).length ? f(Oh(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, E)) : g(Oa("fpm.l")) : g(Oa("fpm.o"))
                        }))["catch"](A(a, "fpm.en"))
                    } : E
                }),
                ee = ja(function(a, c) {
                    var b = {};
                    Ve(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                Op = B("c.c.cc", function(a) {
                    var c = G(a),
                        b = q(ee(a), function(d) {
                            var e;
                            return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                        });
                    return A(a, "g.c.cc", q(L(c.o, c, "counters", {}), ea,
                        cb(b)))
                }),
                Pp = B("gt.c.rs", function(a, c) {
                    var b, d = M(c),
                        e = c.id,
                        f = c.R,
                        g = c.Jd,
                        h = c.kc,
                        k = D([a, d], mn);
                    Mh(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                Lh = t(Hd),
                Vc = t(uc, M),
                Qp = ["ecommerce", "user_id", "fpp"],
                Rp = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f = va(arguments),
                            g = ln(f);
                        if (!g) return null;
                        f = g.Nd;
                        var h = g.O;
                        g = g.ab;
                        if (!Fa(h) && !ba(h)) return null;
                        var k = qa(a, "1", c),
                            l = Vc(c).url,
                            m = n(h, "__ym.user_id"),
                            p = ea(h),
                            r = K("__ymu", p),
                            v = K("__ym", p) && m;
                        p = !Sh(c);
                        var x = h;
                        x.__ym &&
                        (x = y({}, h), x.__ym = N(function(w, J) {
                            var T = n(h, "__ym." + J);
                            T && (w[J] = T);
                            return w
                        }, {}, Qp), ea(x.__ym).length || delete x.__ym, p = !!ea(x).length);
                        m = sb(a, c, v ? "Set user id " + m : (r ? "User p" : "P") + "arams. Counter " + c.id, v ? void 0 : JSON.stringify(x));
                        k = k({
                            L: {
                                O: h
                            },
                            G: ra((d = {}, d.pa = 1, d.ar = 1, d)),
                            F: (e = {}, e["page-url"] = l || P(a).href, e)
                        }, c).then(p ? m : E);
                        return qc(a, "p.s", k, g, f)
                    }, b
                }),
                td = t(Ih, q(lb, M)),
                Sp = B("y.p", function(a, c) {
                    var b = Ih(a, c);
                    if (b) {
                        var d = od(a),
                            e = D([a, b, c], gn);
                        kg(a, d, function(f) {
                            f.D(["params"], e)
                        });
                        b.V.D(["params"],
                            q(R("1"), e))
                    }
                }),
                Fo = t(function(a) {
                    if (a = jb(a)) return a("a")
                }),
                Ij = {
                    zf: Pa(/[/&=?#]/)
                },
                Id = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m;
                        if (!f || Ij[b] && Ij[b](f)) return null;
                        var p = g,
                            r = h || E;
                        S(g) && (r = g, p = void 0, k = h);
                        var v = sb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                            x = "goal" === b;
                        g = qa(a, "g", c);
                        h = fn(a, c, f, b);
                        f = h[0];
                        h = h[1];
                        p = g({
                            L: {
                                O: p
                            },
                            G: ra((l = {}, l.ar = 1, l)),
                            F: (m = {}, m["page-url"] = f, m["page-ref"] = h, m)
                        }, c).then(function() {
                            x && v();
                            d && d()
                        });
                        return qc(a,
                            "g.s", p, r, k)
                    }, e
                }),
                Tp = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = lc(a, c);
                        d && Te(a, d, null, e);
                        return e
                    }, b
                }),
                Zi, Up = B("th.e", function(a, c) {
                    function b() {
                        g || (k = Tc(a, "onhashchange") ? ha(a).D(a, ["hashchange"], h) : Go(a, h))
                    }
                    var d, e = qa(a, "t", c),
                        f = Nd(a, M(c)),
                        g = !1,
                        h = A(a, "h.h.ch", L(Ho, null, a, c, e)),
                        k = E;
                    c.kc && (b(), g = !0);
                    e = A(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                Vp = ja(function(a, c) {
                    Ba(c) ? a.push(c) : C(q(O, na("push",
                        a)), c)
                }),
                Wp = B("cl.p", function(a, c) {
                    function b(p, r, v, x) {
                        void 0 === x && (x = {});
                        v ? Kd(a, c, {
                            url: v,
                            Ra: !0,
                            mb: p,
                            qb: r,
                            sender: e,
                            qd: x
                        }) : g.warn("Empty link")
                    }
                    var d, e = qa(a, "2", c),
                        f = [],
                        g = jd(a, M(c)),
                        h = M(c),
                        k = A(a, "s.s.tr", u(Nd(a, h), en));
                    h = {
                        l: a,
                        za: c,
                        Td: f,
                        sender: e,
                        globalStorage: G(a),
                        Md: yc(a, c.id),
                        Bf: xb(a),
                        Ke: u(u(h, ee(a)), q(fa, R("trackLinks")))
                    };
                    h = A(a, "cl.p.c", u(h, bn));
                    h = ha(a).D(a, ["click"], h);
                    c.kd && k(c.kd);
                    var l = A(a, "file.clc", D([!0, !1], b)),
                        m = A(a, "e.l.l.clc", D([!1, !0], b));
                    f = A(a, "add.f.e.clc", Vp(f));
                    return d = {}, d.file =
                        l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                }),
                Uc = Vb("retryReqs", function(a) {
                    return Ja(a).o("retryReqs", {})
                }, !0),
                Jj = tb(q(Xe, la(0))),
                Xp = [Jj("watch"), Jj("clmap")],
                Yp = B("g.r", function(a) {
                    var c = Z(a),
                        b = Uc(a),
                        d = c(ca),
                        e = xb(a);
                    return N(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && Na(Da(k.resource), Xp) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            ma: k.resource,
                            xe: k.postParams,
                            O: k.params,
                            Gd: k.browserInfo,
                            yf: k.ghid,
                            time: k.time,
                            Wa: Ka(h),
                            Ld: k.counterId,
                            R: k.counterType
                        }, k.telemetry && (h.na = k.telemetry), f.push(h));
                        return f
                    }, [], Ga(b))
                }),
                Zp = B("nb.p", function(a, c) {
                    function b(J) {
                        l() || (J = "number" === typeof J ? J : 15E3, w = Io(a, d(!1), J), m())
                    }

                    function d(J) {
                        return function(T) {
                            var V, xa, ma;
                            void 0 === T && (T = (V = {}, V.ctx = {}, V.callback = E, V));
                            if (J || !v && !k.Pb) {
                                v = !0;
                                m();
                                w && w();
                                var Gb = p(ca);
                                V = (Ka(k.o("lastHit")) || 0) < Gb - 18E5;
                                var Wf = .1 > Math.random();
                                k.C("lastHit", Gb);
                                Gb = ra((xa = {}, xa.nb = 1, xa.cl = x, xa.ar = 1, xa));
                                xa = Vc(c);
                                xa = {
                                    F: (ma = {}, ma["page-url"] = xa.url ||
                                        P(a).href, ma),
                                    G: Gb,
                                    L: {
                                        force: J
                                    }
                                };
                                ma = jd(a, M(c)).warn;
                                !T.callback && T.ctx && ma('"callback" argument missing');
                                (ma = J || V || Wf) || (ma = a.location.href, V = a.document.referrer, ma = !(ma && V ? Hh(ma) === Hh(V) : !ma && !V));
                                if (ma) return ma = g(xa, c), qc(a, "l.o.l", ma, T.callback, T.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = qa(a, "n", c),
                        h = M(c),
                        k = yc(a, c.id),
                        l = u(u(h, ee(a)), q(fa, R("accurateTrackBounce"))),
                        m = u((e = {}, e.accurateTrackBounce = !0, e), Nd(a, h)),
                        p = Z(a),
                        r = p(ca),
                        v = !1,
                        x = 0,
                        w;
                    oa(c, function(J) {
                        x = J.Vd - r
                    });
                    c.uc && b(c.uc);
                    e = (f = {}, f.notBounce = d(!0), f.u =
                        w, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Zm = ja(Nb)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                $p = B("clm.p", function(a, c) {
                    if (ud(a)) return E;
                    var b = qa(a, "m", c),
                        d = M(c),
                        e = Z(a),
                        f = e(ca),
                        g = u(u(d, ee(a)), q(fa, R("clickmap"))),
                        h, k = null;
                    d = A(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = G(a),
                                r = p.o("cls", {
                                    bb: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.C("cls", {
                                bb: r.bb + 1,
                                x: r.x + l.clientX,
                                y: r.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            r = p.filter;
                            m = p.isTrackHash || !1;
                            var v = z(function(w) {
                                return ("" + w).toUpperCase()
                            }, p.ignoreTags || []);
                            Y(h) && (h = p.quota ||
                                null);
                            var x = !!p.quota;
                            l = {
                                element: $m(a, l),
                                position: yd(a, l),
                                button: an(l),
                                time: e(ca)
                            };
                            p = P(a).href;
                            if (Ym(a, l, k, v, r)) {
                                if (x) {
                                    if (!h) return;
                                    --h
                                }
                                v = Td(a, l.element);
                                r = v[0];
                                v = v[1];
                                x = kf(a, l.element);
                                r = ["rn", Wa(a), "x", Math.floor(65535 * (l.position.x - x.left) / (r || 1)), "y", Math.floor(65535 * (l.position.y - x.top) / (v || 1)), "t", Math.floor((l.time - f) / 100), "p", jf(a, l.element), "X", l.position.x, "Y", l.position.y];
                                r = I(":", r);
                                m && (r += ":wh:1");
                                Xm(a, p, r, b, c);
                                k = l
                            }
                        }
                    });
                    return ha(a).D(n(a, "document"), ["click"], d)
                }),
                aq = B("trigger.in", function(a,
                                              c) {
                    c.md && Yb(a, D([a, "yacounter" + c.id + "inited"], Tn), "t.i")
                }),
                bq = B("c.m.p", function(a, c) {
                    var b, d = M(c);
                    return b = {}, b.clickmap = u(Nd(a, d), Wm), b
                }),
                gh = u("form", Pb),
                Em = u("form", kb),
                Vm = t(function(a, c) {
                    return oa(c, R("settings.form_goals"))
                }, lb),
                cq = u(!0, Bh),
                dq = B("s.f.i", function(a, c) {
                    var b = [];
                    ha(a).D(a, ["click"], A(a, "s.f.c", D([a, c, b], Um)));
                    ha(a).D(a, ["submit"], A(a, "s.f.e", q(R("target"), D([a, c, b], cq))));
                    Ch(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                eq = B("s.f.i", function(a, c) {
                    return oa(c, function(b) {
                        if (n(b, "settings.button_goals") ||
                            -1 !== P(a).href.indexOf("yagoalsbuttons=1")) ha(a).D(a, ["click"], A(a, "c.t.c", q(R("target"), D([a, c], he(a, c, "", Tm))))), sb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }),
                Hb, kd, Xf, gc, Pe = (Hb = {}, Hb.transaction_id = "id", Hb.item_brand = "brand", Hb.index = "position", Hb.item_variant = "variant", Hb.value = "revenue", Hb.item_category = "category", Hb.item_list_name = "list", Hb),
                pc = (kd = {}, kd.item_id = "id", kd.item_name = "name", kd.promotion_name = "coupon", kd),
                Sm = (Xf = {}, Xf.promotion_name = "name", Xf),
                Pm = "currencyCode add delete remove purchase checkout detail".split(" "),
                Qm = (gc = {}, gc.view_item = {
                    event: "detail",
                    Ca: pc,
                    Ka: "products"
                }, gc.add_to_cart = {
                    event: "add",
                    Ca: pc,
                    Ka: "products"
                }, gc.remove_from_cart = {
                    event: "remove",
                    Ca: pc,
                    Ka: "products"
                }, gc.begin_checkout = {
                    event: "checkout",
                    Ca: pc,
                    Ka: "products"
                }, gc.purchase = {
                    event: "purchase",
                    Ca: pc,
                    Ka: "products"
                }, gc),
                zh = B("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = ba(g) && Se(a, g, b)) || (f = da(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return Ra(a, f)
                    }
                }),
                fq = B("p.e", function(a, c) {
                    var b = wa(a, c);
                    if (b) {
                        var d = G(a);
                        b = b.params;
                        var e =
                            A(a, "h.ee", D([a, M(c), b], Nm));
                        return c.Hb ? (d.C("ecs", 0), yh(a, c.Hb, e)) : oa(c, function(f) {
                            if (f = n(f, "settings.ecommerce")) return d.C("ecs", 1), yh(a, f, e)
                        })
                    }
                }),
                xh = t(function(a) {
                    return I("[^\\d<>]*", a.split(""))
                }),
                al = t(function(a) {
                    return new RegExp(xh(a), "g")
                }),
                Km = /\S/,
                qh = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], nc),
                Kj = t(function(a) {
                    return ud(a) || !Zc(a)
                }),
                gq = B("phc.h", function(a, c) {
                    return no(a) || Kj(a) ? null : oa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d =
                                ic(a, "").o("yaHidePhones");
                            d = d ? rb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && ih(a, c, b)
                        }
                    })
                }),
                Lj = t(function(a) {
                    a = P(a);
                    a = Wn(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                lh = q(Lj, R("_ym_status-check"), Ka),
                hq = q(Lj, R("_ym_lang")),
                kh = Pa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Gm = ["form", "button", "phone", "status"],
                Mj = [],
                Dm = t(function(a, c, b) {
                    C(q(rc([a, c, b]), fa), Mj);
                    if (b.inline) {
                        c = jh(b);
                        var d = b.data;
                        b = b.id;
                        fh(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && kh(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Hm(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                iq = B("cs.init", function(a, c) {
                    var b, d = lh(a);
                    if (d && c.id === d && "0" === c.R) {
                        var e = jh((b = {}, b.lang = hq(a), b.fileId = "status", b));
                        da(a, D([a, e, "" + d], fh), 0, "cs")
                    }
                }),
                jq = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                        if (Ba(d) || Gd(a, d)) {
                            var g = wa(a, c);
                            d = nc(["__ym", "user_id", d]);
                            g.params(d, e || E, f)
                        } else jd(a, M(c)).error("Incorrect user ID")
                    }, b
                }),
                kq = B("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = A(a, "up.c", function(d, e, f) {
                        var g, h = wa(a, c),
                            k = Od(a, M(c)).warn;
                        h ? Fa(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                lq = /[\*\.\?\(\)]/g,
                mq = t(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(lq, "");
                        Od(a, "").warn('Function "' +
                            d + '" has been overridden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, lb),
                nq = B("r.nn", function(a) {
                    Th(a).isEnabled && Se(a, Cf, function(c) {
                        c.rb.D(function(b) {
                            mq(a, b[1], b[0]);
                            Cf.splice(100)
                        })
                    })
                }),
                oq = B("e.a.p", function(a, c) {
                    var b, d = wa(a, c);
                    d = D([q(O, Da(!0)), U(Boolean, z(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
                    c.Qd && d();
                    return b = {}, b.enableAll = d, b
                }),
                pq = u("add", Fd),
                qq = u("remove", Fd),
                rq = u("detail", Fd),
                sq = u("purchase", Fd),
                tq = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                ke = t(function(a) {
                    var c = qj(a);
                    a = c.pd;
                    if (!c.Ic) return !1;
                    c = na("indexOf", a);
                    c = Na(q(c, la(-1), Tb), tq);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                uq = ["YangoEats"],
                Ck = t(function(a) {
                    var c = bb(a);
                    if (!c) return !1;
                    c = na("indexOf", c);
                    return Na(q(c, la(-1), Tb), uq) || Mc(a)
                }),
                Am = /([0-9\\.]+) Safari/,
                vq = /\sYptp\/\d\.(\d+)\s/,
                Nj = t(function(a) {
                    var c;
                    a: {
                        if ((c = bb(a)) && (c = vq.exec(c)) && 1 < c.length) {
                            c = Ka(c[1]);
                            break a
                        }
                        c =
                            0
                    }
                    return 50 <= c && 99 >= c || se(a, 79) ? !1 : !hd(a) || ke(a)
                }),
                Oj = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                wq = t(function(a) {
                    a = jb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = L(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Pj = ya(String.prototype.repeat, "repeat"),
                xq = Pj ? function(a, c) {
                    return Pj.call(a, c)
                } : wm,
                Ag = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = xq(c, b);
                    return a ? c + d : d + c
                }),
                $d = [2277735313, 289559509],
                ae = [1291169091,
                    658871167
                ],
                yq = B("p.cd", function(a, c) {
                    if (Dd(a) || wf(a)) {
                        var b = Ja(a);
                        if (sa(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.lf || Oc(a) ? function() {} : /./,
                                e = jd(a, M(c));
                            d.toString = function() {
                                b.C("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                zq = t(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Aa(a) && Na(q(R("name"), Pa(/Chrome PDF Viewer/)), a))
                }),
                tm = {
                    "*": "+",
                    "-": "/",
                    $e: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Xb = ja(function(a, c) {
                    return G(c).o(a, null)
                }),
                Aq = t(function(a) {
                    return S(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                pm = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                fb, om = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                ch = (fb = {}, fb.responseEnd = 1, fb.domInteractive = 1, fb.domContentLoadedEventStart =
                    1, fb.domContentLoadedEventEnd = 1, fb.domComplete = 1, fb.loadEventStart = 1, fb.loadEventEnd = 1, fb.unloadEventStart = 1, fb.unloadEventEnd = 1, fb.secureConnectionStart = 1, fb),
                rm = t(Hd),
                lm = t(uc),
                mm = t(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (S(c) && !Dd(a)) return (new H(L(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, O));
                    if (ad(a)) return c = n(a, "navigator.serviceWorker"), H.resolve(Y(c));
                    c = n(a,
                        "openDatabase");
                    if (Oc(a) && S(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return H.resolve(b)
                    }
                    return H.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Bq = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Cq = t(function(a, c) {
                    var b = bc(a),
                        d = P(a).search.match(Bq);
                    return d && 2 <= d.length ? (d = d[2], c.Da || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Dq = B("pa.plgn", function(a, c) {
                    var b = td(a, c);
                    b && b.V.D(["pluginInfo"], A(a, "c.plgn", function() {
                        var d = G(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return mo(c,
                            ie)
                    }))
                }),
                Qj = Ob.split("."),
                Eq = Qj.pop(),
                Rj = I(".", Qj),
                xk = t(function(a) {
                    a = P(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                gg = t(function(a) {
                    return -1 !== P(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                Fq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                rd = t(function(a) {
                    a = P(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Fq));
                    return c
                }),
                Gq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                am = t(function(a) {
                    a = P(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Gq));
                    return c
                }),
                Sj = pa.va + "//" + Ob + "/metrika/metrika_match.html",
                gb, Ua, yk = (gb = {}, gb.am = "com.am", gb.tr = "com.tr", gb.ge = "com.ge", gb.il = "co.il", gb["\u0440\u0444"] = "ru", gb["xn--p1ai"] = "ru", gb["\u0443\u043a\u0440"] = "ua", gb["xn--j1amh"] = "ua", gb["\u0431\u0435\u043b"] = "by", gb["xn--90ais"] = "by", gb),
                Tj = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                zk = (Ua = {},
                    Ua.ka = "ge", Ua.ro = "md", Ua.tg = "tj", Ua.tk = "tm", Ua.et = "ee", Ua.hy = "com.am", Ua.he = "co.li", Ua.ky = "kg", Ua.uk = "ua", Ua.be = "by", Ua.tr = "com.tr", Ua.kk = "kz", Ua),
                hm = "ar:1:pv:1:v:" + pa.$a + ":vf:" + wc.version,
                im = pa.va + "//" + Ob + "/watch/" + pa.vd,
                Uj = {},
                Hq = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        void 0 === e && (e = E);
                        if (d && 0 < d.length) {
                            var k = qa(a, "e", c),
                                l = Vc(c).url;
                            d = k({
                                G: ra((g = {}, g.ex = 1, g.ar = 1, g)),
                                F: (h = {}, h["page-url"] = l || P(a).href, h.exp = d, h)
                            }, c);
                            return qc(a, "exps.s", d, e, f)
                        }
                    }, b
                }),
                le = [],
                Iq = B("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Ja(a),
                        f = Z(a),
                        g = e.o("wasSynced"),
                        h = {
                            id: 3,
                            R: "0"
                        };
                    return c && g && g.time + 864E5 > f(ca) ? H.resolve(g) : qa(a, "f", h)({
                        G: ra((b = {}, b.pv = 1, b)),
                        F: (d = {}, d["page-url"] = P(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(ca), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.C("wasSynced", k);
                        return k
                    })["catch"](A(a, "f.h"))
                }),
                Jq = ja(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Vb.C("ymoo" + a.qa, a.jd($a)),
                    a.Gb && a.Gb.destruct && a.Gb.destruct())
                }),
                ah = q(R("settings.pcs"), la("1")),
                Yl = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Zl = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                bh = {
                    F: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                $g = {
                    id: 42822899,
                    R: "0"
                },
                fe, em = (fe = {}, fe.s = "p", fe["8"] = "i", fe),
                bm = Vb("csp", function(a, c) {
                    return qa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                Vj = "et w v z i u vf".split(" "),
                Rl = {
                    Yf: "stamp",
                    tf: "frameId",
                    ia: "meta",
                    gf: "base",
                    Af: "hasBase",
                    cf: "address",
                    ag: "ua",
                    Tf: "prev",
                    Hf: "namespace",
                    Ef: "keystrokes",
                    Df: "isMeta",
                    Gf: "modifier",
                    Qf: "pageWidth",
                    Pf: "pageHeight",
                    Zf: "startNode",
                    qf: "endNode",
                    dg: "zoomFrom",
                    eg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    Cf: "i",
                    Lf: "o",
                    n: "n",
                    r: "r",
                    nf: "ct",
                    ef: "at",
                    If: "nm",
                    Jf: "ns",
                    Of: "pa",
                    Sf: "pr",
                    Kf: "nx",
                    Ba: "h",
                    jf: "changes",
                    bf: "a",
                    ff: "b",
                    hf: "c",
                    Nf: "op"
                },
                Sl = ["attributes", "attrs"],
                Wj = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.prototype.sa = function(c) {
                        var b = Cd(c);
                        c = z(L(this.Ia, this), b);
                        return Gi(hb(this.l,
                            z(function(d, e) {
                                var f;
                                return y({}, b[e], (f = {}, f.data = d, f))
                            }, c)))
                    };
                    a.prototype.Ia = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = hb(this.l, Cd(c.data)));
                        return b
                    };
                    a.prototype.Qa = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.gd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.l.JSON
                    };
                    return a
                }(),
                ld, Yf = (ld = {}, ld[1] = 500, ld[2] = 500, ld[3] = 0, ld),
                Zf = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id =
                            "a";
                        this.Ob = !1;
                        this.Pa = {};
                        this.Ha = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Rc: ["article"]
                        };
                        this.nc = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Kd = t(function(f, g) {
                            vb(e.l, e.qa, "Warning: content has only " + g.chars + " chars. Required " + Yf[g.type], g)
                        });
                        this.l = c;
                        this.root = Lb(c);
                        this.qa = b
                    }
                    a.prototype.ra = function(c) {
                        return c.element
                    };
                    a.prototype.Ec = function(c, b) {
                        var d = this,
                            e;
                        A(this.l, "P.s." + b, function() {
                            e = d.Pa[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.ye = function(c) {
                        var b =
                            y({}, c);
                        this.Ob && !b.id && K(c.type, [3, 2]) && (c = I(", ", z(R("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.ae(b.cb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.$d());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.ha = function(c) {
                        var b = this,
                            d = {},
                            e = this.ra(c);
                        if (!e) return null;
                        d.type = c.type;
                        C(function(g) {
                            d[g] = b.Ec(c, g)
                        }, ea(this.Pa));
                        var f = Z(this.l);
                        d.stamp = f(Hi);
                        d.element = c.element;
                        d.cb =
                            e;
                        d = this.ye(d);
                        d.id = d.id ? $b(d.id) : 1;
                        d.update = function(g) {
                            return b.ra(c) ? b.Ec(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.ae = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Qa(ac("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.$d = function() {
                        var c = ac('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.Gc = function() {
                        return 1
                    };
                    a.prototype.jb = function() {
                        return []
                    };
                    a.prototype.Ud = function() {
                        var c = this,
                            b = this.jb(),
                            d = 1;
                        return N(function(e, f) {
                            var g = c.ha({
                                element: f,
                                type: c.Gc(f)
                            }) || [];
                            ba(g) || (g = [g]);
                            g = N(function(h, k) {
                                var l =
                                        h.values,
                                    m = h.Hc;
                                k && k.chars > Yf[k.type] && !K(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Yf[k.type] && c.Kd(k.id, k);
                                return {
                                    values: l,
                                    Hc: m
                                }
                            }, {
                                values: [],
                                Hc: z(R("id"), e)
                            }, g).values;
                            return e.concat(z(function(h) {
                                var k;
                                h = y((k = {
                                    index: d,
                                    dd: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Xj = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Ob = !0;
                        d.wc = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Pa = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" === typeof e.data.text ? e.data.text.length : Db(this.ra(e)).length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.ib(e.data, "author"));
                            f = f.concat(this.ib(e.data.mainEntity, "author"));
                            return f.concat(this.ib(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.df && (f += " " + e.data.alternativeHeadline);
                            "" === f &&
                            (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.ib(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.ra(e);
                            e = U(Boolean, z(function(h) {
                                if (h = rb(f.l, Db(h))) {
                                    var k = f.Fc(h);
                                    if (k) return N(function(l,
                                                             m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(kb(this.wc, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, ba(e)) ? U(Boolean, z(function(h) {
                                return Fa(h) && h.item && Fa(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    ed(c, a);
                    c.prototype.ib = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ba(b[d]) ? b[d] : [b[d]];
                        b = U(O, z(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return z(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.ra = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.zc(f));
                        !b && e && "string" === typeof e && (b = this.zc(e));
                        b || (b = e = d.parentNode, !Pb("head", this.l, d) && e && 0 !== Db(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.zc = function(b) {
                        try {
                            var d = Ld(this.l, b).hash;
                            if (d) {
                                var e = ac(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Yb = function(b) {
                        return this.nc[b["@type"]] || 1
                    };
                    c.prototype.ha = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = rb(this.l, Db(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ba(b.data))) return null;
                        var f = this.Fc(b.data);
                        if (f) return z(function(h) {
                            if (!K(h["@type"], d.Ha["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.Yb(h)
                            };
                            return a.prototype.ha.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = Kb(u(g, n), ["acceptedAnswer", "suggestedAnswer"]), z(function(h) {
                            var k;
                            if (!h || !K(h["@type"], d.Ha["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.Yb(h),
                                data: y((k = {}, k.parentItem = g, k), h)
                            };
                            return a.prototype.ha.call(d, h)
                        }, b)) : K(b.data["@type"], this.Ha["schema.org"]) ? a.prototype.ha.call(this, y(b, {
                            type: this.Yb(b.data)
                        })) : null
                    };
                    c.prototype.jb = function() {
                        return kb(this.wc, this.root)
                    };
                    c.prototype.Fc = function(b) {
                        return ba(b) && b || b && ba(b["@graph"]) &&
                            b["@graph"]
                    };
                    return c
                }(Zf),
                $f = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Ob = !0;
                        d.Le = na("exec", new RegExp("schema.org\\/(" + I("|", ea(d.nc)) + ")$"));
                        d.Pa = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = Ta(this.l, e, "identifier");
                            return f ? Qa(f) : (f = Ta(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h +=
                                1) {
                                var k = Ta(this.l, e, g[h]);
                                if (k) {
                                    f = Qa(k).length;
                                    break
                                }
                            }
                            e = Db(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = gd(this.l, e.element, "about");
                            return z(function(h) {
                                var k = {
                                    name: Qa(h)
                                };
                                if (g = Ta(f.l, h, "name")) k.name = Qa(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = ac('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = ac('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? z(function(g) {
                                return {
                                    name: Qa(Ta(f.l, g, "name")),
                                    position: Qa(Ta(f.l, g, "position"))
                                }
                            }, gd(this.l,
                                e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = Ta(this.l, e.element, "dateModified")) ? bj(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = Ta(this.l, e.element, "datePublished")) ? bj(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = gd(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Qa(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = Ta(this.l, g, "headline");
                            h && (f += Qa(h));
                            (h = Ta(this.l, g, "alternativeHeadline")) && (f += " " + Qa(h));
                            "" === f && ((h = Ta(this.l, g, "name")) || (h = Ta(this.l,
                                g, "itemReviewed")), h && (f += Qa(h)));
                            3 === e.type && (e = Pb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Ta(this.l, e, "text")) && (f += Qa(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = gd(this.l, e.element, "author");
                            return z(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Ta(f.l, g, "name")) && (k.name = Qa(h));
                                k.name || (k.name = g.getAttribute("content") || Db(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    ed(c, a);
                    c.prototype.Gc = function(b) {
                        b =
                            b.getAttribute("itemtype") || "";
                        return (b = this.Le(b)) ? this.nc[b[1]] : 1
                    };
                    c.prototype.ha = function(b) {
                        return b.element && Db(b.element).length ? a.prototype.ha.call(this, b) : null
                    };
                    c.prototype.jb = function() {
                        var b = I(",", z(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.Ha["schema.org"]));
                        return kb(b, this.root)
                    };
                    return c
                }(Zf),
                Yj = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Pa = (e = {}, e.chars = function(g) {
                            g = this.ra(g);
                            return Db(g).length
                        }, e.authors = function(g) {
                            return this.Jb(g.data.author)
                        },
                            e.pageTitle = function(g) {
                                return this.lb(g.data.title) || ""
                            }, e.updateDate = function(g) {
                            return this.lb(g.data.modified_time)
                        }, e.publicationDate = function(g) {
                            return this.lb(g.data.published_time)
                        }, e.pageUrlCanonical = function(g) {
                            return this.lb(g.data.url)
                        }, e.rubric = function(g) {
                            return this.Jb(g.data.section)
                        }, e.topics = function(g) {
                            return this.Jb(g.data.tag)
                        }, e);
                        f.Rd = new RegExp("^(og:)?((" + I("|", f.Ha.Rc) + "):)?");
                        return f
                    }
                    ed(c, a);
                    c.prototype.Jb = function(b) {
                        var d;
                        return b ? ba(b) ? z(function(e) {
                            var f;
                            return f = {},
                                f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.lb = function(b) {
                        return ba(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.jb = function() {
                        var b = kb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.Zd = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.ra(b);
                        e = kb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) C(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Rd, ""),
                                        l = Qa(h);
                                    f[k] ? ba(f[k]) ?
                                        f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Ed(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return K(f.type, this.Ha.Rc) ? y(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.ra = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.ha = function(b) {
                        return (b = this.Zd(b)) ? a.prototype.ha.call(this, b) : null
                    };
                    return c
                }(Zf),
                Zj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Kq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                Lq = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.ob = !1;
                        this.ia = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Nb = this.Pc = 0;
                        this.Wb = this.Uc = "";
                        this.Y = [];
                        this.ec = this.He = 0;
                        this.La = {
                            Ba: 0,
                            Ab: 0
                        };
                        this.buffer = [];
                        this.wd = Kq;
                        this.flush = function() {
                            g.ec = da(g.l, g.flush, 2500);
                            var h = g.Kb();
                            if (g.buffer.length || h) {
                                var k = Ye(g.buffer);
                                h && k.push(h);
                                g.Uc = g.Wb;
                                g.$.sa(k)(ib(A(g.l, "p.b.st"), function(l) {
                                    l && g.dc(l)
                                }))
                            }
                        };
                        this.dc = e;
                        this.$ = d;
                        this.Za = L(this.Za, this);
                        this.Kb = L(this.Kb, this);
                        this.flush = L(this.flush, this);
                        this.l = c;
                        this.qa = f;
                        this.wb = b;
                        this.Rb = "pai" + b.id;
                        this.Lb();
                        this.yc = ha(this.l);
                        this.time = Z(this.l);
                        this.nd();
                        this.Mb = G(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.ec = da(this.l, this.flush, 2500);
                        if (!this.ob) {
                            this.De();
                            var b = this.Mb.o(this.Rb, []),
                                d = !b.length;
                            b.push(L(this.ne, this));
                            this.Mb.ta(this.Rb, b);
                            d && this.$c();
                            var e = function(f, g) {
                                return (f.bc || 0) <= (g.bc || 0) ? g : f
                            };
                            ha(this.l).D(this.l, ["click"], function(f) {
                                if (c.Y.length) {
                                    f = Fh(f);
                                    var g = P(c.l).hostname,
                                        h;
                                    if (h = f) h = Md(f.hostname) === Md(g);
                                    h && (f = N(e, c.Y[0], c.Y).id,
                                        g = xb(c.l), yc(c.l, c.qa.split(":")[0]).C("pai", f + "-" + g))
                                }
                            });
                            this.Za({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Me();
                        this.ob = !0;
                        this.flush();
                        Ra(this.l, this.ec)
                    };
                    a.prototype.Mc = function(c) {
                        return Pb("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.$c = function() {
                        var c = this;
                        A(this.l, "p.ic" + this.wb.id, function() {
                            if (!c.ob) {
                                var b = c.Mb.o(c.Rb),
                                    d = c.wb.Ud();
                                C(function(e) {
                                    var f = z(function(g) {
                                        return y({}, g)
                                    }, d);
                                    S(e) && e(f)
                                }, b);
                                c.He = da(c.l, L(c.$c, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.ne =
                        function(c) {
                            this.ob || (this.Ne(c), this.Oe(), this.Id())
                        };
                    a.prototype.Za = function(c) {
                        var b = this;
                        A(this.l, "p.ec." + this.wb.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, fc(b.l)];
                                K(e, g) && b.Lb()
                            }("resize" === d || f) && b.nd();
                            d = b.time(ca);
                            var h = Math.min(d - b.Pc, 5E3);
                            b.Nb += Math.round(h);
                            b.Pc = d;
                            if (b.ia && b.scroll && b.La) {
                                var k = b.La.Ba * b.La.Ab;
                                b.Y = z(function(l) {
                                    var m = y({}, l),
                                        p = b.ia[m.id],
                                        r = $c(l.cb);
                                    if (!p || b.Mc(m.element) ||
                                        !r) return m;
                                    l = b.l.Math;
                                    p = l.max((b.scroll.y + b.La.Ba - p.y) / p.height, 0);
                                    var v = r.height * r.width;
                                    r = ri(b.l, r, b.La);
                                    m.bc = r / k;
                                    m.visibility = r / v;
                                    if (.9 <= m.visibility || .1 <= m.bc) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.Y)
                            }
                        })()
                    };
                    a.prototype.Ne = function(c) {
                        var b = z(function(d) {
                            return d.id
                        }, this.Y);
                        this.Y = this.Y.concat(U(function(d) {
                            return !K(d.id, b)
                        }, c))
                    };
                    a.prototype.nd = function() {
                        var c = mf(this.l) || Ic(this.l);
                        this.La = {
                            Ab: c[0],
                            Ba: c[1]
                        }
                    };
                    a.prototype.Oe = function() {
                        var c = this;
                        A(this.l, "p.um." + this.wb.id,
                            function() {
                                var b = [];
                                c.Lb();
                                c.ia = N(function(d, e) {
                                    var f;
                                    if (c.Mc(e.element)) b.push(e), delete d[e.id];
                                    else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                        e.cb && (f = $c(e.cb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                        d[e.id] = g
                                    }
                                    return d
                                }, {}, c.Y);
                                C(function(d) {
                                    d = Ue(c.l)(d, c.Y);
                                    c.Y.splice(d, 1)
                                }, b)
                            })()
                    };
                    a.prototype.Kb =
                        function() {
                            var c, b, d = z(u(this.ia, n), ea(this.ia));
                            return d.length && (this.Wb = hb(this.l, d), this.Uc !== this.Wb) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Nb, b), c) : null
                        };
                    a.prototype.Id = function() {
                        var c = this;
                        if (this.Y.length) {
                            var b = z(function(d) {
                                var e, f = N(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.wd);
                                d.dd = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, U(function(d) {
                                return !d.dd
                            }, this.Y));
                            b.length && (this.buffer = this.buffer.concat(b), vb(this.l,
                                this.qa, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.De = function() {
                        this.yc.D(this.l, Zj, this.Za)
                    };
                    a.prototype.Me = function() {
                        this.yc.Xa(this.l, Zj, this.Za)
                    };
                    a.prototype.Lb = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                md = {};
            Xj && (md.json_ld = Xj);
            $f && (md.schema = $f, md.microdata = $f);
            Yj && (md.opengraph = Yj);
            var Mq = B("p.p", function(a, c) {
                    function b(l) {
                        var m = y({}, k);
                        m.M.W =
                            l;
                        return e(m, c)["catch"](A(a, "s.ww.p"))
                    }
                    if (!za("querySelectorAll", a.document.querySelectorAll)) return H.resolve();
                    var d = [new Wj(a)],
                        e = qa(a, "p", c),
                        f = Mb(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = ra();
                    var g = yc(a, c.id),
                        h = g.o("pai");
                    h && (g.gb("pai"), d.C("pai", h));
                    var k = {
                        F: {},
                        G: d,
                        wa: {
                            Jc: !(f instanceof Wj)
                        },
                        M: {}
                    };
                    return oa(c, A(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Li(c) ? "microdata" : l;
                            var m = md[l];
                            if (m && f) {
                                var p = M(c);
                                m = new m(a, p);
                                (new Lq(a, m, f, b, p)).start();
                                vb(a, p, 'Publishers analytics schema "' +
                                    l + '"')
                            }
                        }
                    }))
                }),
                Nq = function() {
                    function a(c, b) {
                        this.l = c;
                        this.Yd = b
                    }
                    a.prototype.sa = function(c) {
                        return Gi(Kb(L(this.Ia, this), c))
                    };
                    a.prototype.Ia = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Yd(this.l, b && b.type, c.type);
                        f && (e = Kb(function(g) {
                            return g({
                                l: d.l,
                                X: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Qa = function(c) {
                        return c.length
                    };
                    a.prototype.gd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                ak = function() {
                    function a(c, b, d) {
                        this.xc = 0;
                        this.Zb = 1;
                        this.Cb = 5E3;
                        this.l = c;
                        this.$ = b;
                        this.dc = d
                    }
                    a.prototype.xb =
                        function() {
                            this.xc = da(this.l, q(L(this.flush, this), L(this.xb, this)), this.Cb, "b.f")
                        };
                    a.prototype.send = function(c, b) {
                        var d = this.dc(c, b || [], this.Zb);
                        this.Zb += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                El = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.xd = 7500;
                        b.Cb = 3E4;
                        b.xb();
                        return b
                    }
                    ed(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.$.Ia(b, d);
                        Ha(this.buffer, e);
                        this.$.Qa(this.buffer) > this.xd && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b =
                            this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(ak),
                Hl = /opera mini/i,
                bk = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Ml = ["email", "tel"],
                Pl = /ym-hide-content/,
                Ql = /ym-show-content/,
                Nl = new RegExp("(" + I("|", bk) + ")", "i"),
                cj = ["password", "passwd", "pswd"],
                Ol = new RegExp("(" + I("|", bk.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ca = "metrikaId_" + Math.random(),
                cc = {
                    Fb: 0
                },
                Mo = t(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                Oq = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        wf: new RegExp("(" + I("|", a) + ")", "i"),
                        Rf: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        sf: /ym-record-keys/i,
                        te: "\u2022",
                        Mf: 88
                    }
                }(),
                hj = cb(u(Oq.te, O)),
                Kc = !0,
                Hf = "",
                If = !1,
                Jf = !0,
                Kf = !1,
                Kl = ja(function(a, c) {
                    var b = D([a, "efv." + c.event], A);
                    c.H = z(q(O, b), c.H);
                    return c
                }),
                Pq = t(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(De), b.push(Qo), b.push(Ro));
                    a.document.addEventListener ? c.push(fj) : (b.push(ej), d.push(fj));
                    c = aa([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        H: [E]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        H: [E]
                    }, {
                        event: "click",
                        H: [Jc]
                    }, {
                        event: "dblclick",
                        H: [Jc]
                    }, {
                        event: "mousedown",
                        H: [Jc]
                    }, {
                        event: "mouseup",
                        H: [To]
                    }, {
                        event: "keydown",
                        H: [Uo]
                    }, {
                        event: "keypress",
                        H: [Vo]
                    }, {
                        event: "copy",
                        H: [jj]
                    }, {
                        event: "blur",
                        H: c
                    }, {
                        event: "focusin",
                        H: b
                    }, {
                        event: "focusout",
                        H: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        H: [Rg]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        H: [De]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        H: [ej]
                    }, {
                        event: "change",
                        H: [gj]
                    }, {
                        event: "submit",
                        H: [lj]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        H: [gj]
                    }, {
                        type: "form",
                        event: "submit",
                        H: [lj]
                    }]);
                    return Og(a, c)
                }),
                Il =
                    t(function(a) {
                        return aa(fc(a) ? [{
                            target: a,
                            type: "document",
                            event: "mouseleave",
                            H: [Wo]
                        }] : [])
                    }),
                Qq = ["submit", "beforeunload", "unload"],
                Rq = t(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.H;
                        return d
                    }, {}, b)
                }),
                Jl = /^\s*function submit\(\)/,
                Jg = 0,
                Be = {
                    x: 0,
                    y: 0
                },
                Ig = 0,
                Ae = {
                    x: 0,
                    y: 0
                },
                ye = {},
                ck = t(function(a) {
                    var c = aa([{
                        event: "mousemove",
                        H: [Cl]
                    }, {
                        target: a,
                        type: "window",
                        event: "scroll",
                        H: [Eg]
                    }, {
                        event: "onmousewheel" in a.document ? "mousewheel" : "wheel",
                        H: [Bl]
                    }, {
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        H: [Hg]
                    }], rj(a) ? [{
                        target: a,
                        type: "window",
                        event: "unload",
                        H: [Hg]
                    }] : [], [{
                        target: a,
                        type: "window",
                        event: "resize",
                        H: [Al]
                    }, {
                        event: "touchmove",
                        H: [Dg]
                    }, {
                        event: "touchstart",
                        H: [Dg]
                    }], a.document.addEventListener ? [{
                        event: "scroll",
                        H: [zl]
                    }] : []);
                    return aa(Pq(a), Og(a, c))
                }),
                Sq = u(ck, function(a, c, b, d) {
                    return Rq(c, a)[b + ":" + d] || []
                }),
                Tq = t(function(a) {
                    return aa(Qq, ["beforeunload"], rj(a) ? ["unload"] : [])
                }),
                Uq = B("wv.p", function(a, c) {
                    var b;
                    if (!(b = !c.sd)) {
                        var d = G(a),
                            e = !1;
                        b = d.o("hitParam", {});
                        var f = M(c);
                        b[f] && (d = d.o("counters", {}), e = !(!$i(c.R) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return H.resolve(E);
                    b = new Nq(a, Sq);
                    return Dl(a, c, b, ck, Tq(a))
                });
            (function(a) {
                function c(b, d, e, f) {
                    void 0 === f && (f = 0);
                    d = a.call(this, b, d, e) || this;
                    d.jc = 0;
                    d.Na = 0;
                    d.ic = 0;
                    d.buffer = [];
                    d.Cb = 2E3;
                    d.V = Re(b);
                    d.xb();
                    d.ic = f;
                    return d
                }
                ed(c, a);
                c.prototype.Dc = function(b) {
                    return U(Boolean, this.V.T("ag", b))
                };
                c.prototype.Cc = function(b, d) {
                    var e = this;
                    b(ib(A(this.l, "wv2.b.st"), function(f) {
                        e.send(f, d)
                    }))
                };
                c.prototype.Ce = function(b, d) {
                    var e = this;
                    Ra(this.l, this.xc);
                    var f = Math.ceil(this.$.Qa(d) /
                            63E4),
                        g = this.$.gd(d, f);
                    C(function(h, k) {
                        var l, m = y({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                        l = e.$.sa([m], !1);
                        e.Cc(l, [m])
                    }, g);
                    this.xb()
                };
                c.prototype.send = function(b, d) {
                    var e = this;
                    this.V.T("se", d);
                    return a.prototype.send.call(this, b, d).then(O, function() {
                        e.V.T("see", d)
                    })
                };
                c.xf = function(b, d, e, f, g) {
                    c.Db["" + b + d] || (this.Db[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                    return this.Db[d]
                };
                c.prototype.le = function() {
                    return this.ic && this.jc >= this.ic
                };
                c.prototype.push = function(b) {
                    var d = this;
                    if (!this.le()) {
                        this.V.T("p",
                            b);
                        var e = this.$.Ia(b),
                            f = this.$.Qa(e);
                        7E5 < f ? this.Ce(b, e) : (e = this.Dc(this.buffer.concat([b])), e = N(function(g, h) {
                            return g + d.$.Qa(d.$.Ia(h))
                        }, 0, e), this.Na + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Na += f)
                    }
                };
                c.prototype.D = function(b, d) {
                    this.V.D([b], d)
                };
                c.prototype.sb = function(b, d) {
                    this.V.sb([b], d)
                };
                c.prototype.flush = function() {
                    var b = this.buffer.concat(this.Dc(this.buffer));
                    if (b.length) {
                        this.buffer = [];
                        this.jc += this.Na;
                        this.Na = 0;
                        var d = this.$.sa(b);
                        this.Cc(d, b)
                    }
                };
                return c
            })(ak).Db = {};
            var ml = q(ea,
                    Wc),
                dk = t(function(a) {
                    var c = G(a),
                        b = c.o("isEU");
                    if (Y(b)) {
                        var d = Ka(zd(a, "is_gdpr") || "");
                        if (K(d, [0, 1])) c.C("isEU", d), b = !!d;
                        else if (a = Ja(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return G(a).o("isEU")
                }),
                Vq = B("i.e", dk),
                Wq = B("i.ep", function(a) {
                    dk(a)
                }),
                ek = t(uc, M),
                Cg = q(vd, $b),
                fk = E,
                Xq = Vb("isp.stat", function(a, c) {
                    return new H(function(b, d) {
                        if (On(a, Sj, "isp")) {
                            var e = function(f) {
                                ("1" === f ? b : d)();
                                fk();
                                f = oi(Sj);
                                K("isp", f.Ea) && (f.Ea = U(q(la("isp"), Tb), f.Ea), f.Ea.length || (Zb(f.Aa),
                                    f.Aa = null))
                            };
                            fk = ha(a).D(a, ["message"], D([c, e], A(a, "isp.stat.m", yl)));
                            da(a, e, 1500)
                        } else d()
                    })
                }),
                Yq = Vb("isp", function(a, c) {
                    oa(c, function(b) {
                        var d = Mb(function(g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && hd(a)) {
                            var e = ah(b) && !rd(a),
                                f = ek(c);
                            y(f, {
                                tb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) return d = xl(a, c, d), e = function(g) {
                                f.status = g
                            }, Xq(a, d).then(u(1, e))["catch"](u(2, e))
                        }
                    })["catch"](A(a, "l.isp"))
                }),
                gk = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = va(arguments),
                                h = d.apply(void 0,
                                    g);
                            c(g);
                            return h
                        };
                        y(e, d);
                        b && C(c, b);
                        a.fbq = e
                    } else var f = da(a, D([a, c, aa(Ia(d && d.queue))], gk), 1E3, "fbq.d");
                    return L(Ra, null, a, f)
                }),
                Bc, nb, Cc, ag = (Bc = {}, Bc.add_to_wishlist = "add-to-wishlist", Bc.begin_checkout = "begin-checkout", Bc.generate_lead = "submit-lead", Bc.add_payment_info = "add-payment-info", Bc),
                bg = (nb = {}, nb.AddToCart = "add-to-cart", nb.Lead = "submit-lead", nb.InitiateCheckout = "begin-checkout", nb.Purchase = "purchase", nb.CompleteRegistration = "register", nb.Contact = "submit-contact", nb.AddPaymentInfo = "add-payment-info",
                    nb.AddToWishlist = "add-to-wishlist", nb.Subscribe = "subscribe", nb),
                vl = (Cc = {}, Cc["1"] = ag, Cc["2"] = ag, Cc["3"] = ag, Cc["0"] = bg, Cc),
                wl = [bg.AddToCart, bg.Purchase],
                Zq = ja(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                        version: "3",
                        hb: d
                    })) a: {
                        if (ba(c) || Aa(c))
                            if (b = va(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    hb: d
                                };
                                break a
                            } b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        hb: I(",", ea(b))
                    });
                    b && a(b)
                }),
                $q = B("ag.e", function(a, c) {
                    var b = [],
                        d = A(a, "ag.s", D([fa, b], C));
                    "0" === c.R && oa(c, function(e) {
                        if (n(e,
                            "settings.auto_goals") && wa(a, c) && (e = Id(a, c, "autogoal").reachGoal)) {
                            e = D([e, c.Hb], ul);
                            var f = Zq(e);
                            e = D([a, e], tl);
                            b.push(gk(a, e));
                            b.push(zh(a, "dataLayer", function(g) {
                                g.rb.D(f)
                            }))
                        }
                    });
                    return d
                }),
                ar = /[^\d.,]/g,
                br = /[.,]$/,
                rl = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(ar, "").replace(br, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (K(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(yb(b[0]) + "." + yb(d));
                    d = Math.pow(10,
                        8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                cr = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                dr = t(function(a) {
                    return new RegExp(a.join("|"),
                        "i")
                }),
                er = B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = rh(a);
                    return (a = Mb(function(b) {
                        return dr(b[0]).test(c)
                    }, cr)) ? a[1] : "643"
                }),
                fr = t(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = zg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                             e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                ol = B("ep.dec", function(a, c) {
                    if (!c || ud(a)) return [];
                    var b = zg(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Lf(b[0])) return [];
                    b = fr();
                    f = f.join("");
                    e = Lf(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Lf(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = rb(a, b);
                    return ba(d) ? z(Ao, d) : []
                }),
                ql = B("ep.ent", function(a, c, b) {
                    a = "" + Wa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Aa(b)) return "";
                    b = Ag("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                hk = q(yg, er),
                ik = B("ep.ctp", function(a, c, b, d) {
                    var e = hk(a, b),
                        f = xg(a, d);
                    wg(a, c, e, f);
                    za("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = hk(a, b),
                            h = xg(a, d);
                        if (e !== g || f !== h) e = g, f = h, wg(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                gr = B("ep.chp", function(a, c, b, d, e) {
                    b && xe(a, c);
                    return d || e ? ha(a).D(a.document, ["click"], A(a, "ep.chp.cl", D([a, c, d, e], pl))) : E
                }),
                lr = B("ep.i", function(a, c) {
                    return Zc(a) ? nl(a, c).then(function(b) {
                        var d = b.Pd,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            r = d[8],
                            v = d[9],
                            x = d[10],
                            w = d[11],
                            J = d[12],
                            T = d[13],
                            V = d[14],
                            xa = d[15];
                        if (!b.isEnabled) return H.resolve(E);
                        var ma = wd(a, e),
                            Gb = wd(a, h),
                            Wf = wd(a, m),
                            hr = wd(a, r),
                            ir = "" + e + f + g === "" + h + k + l;
                        return new H(function(jr,
                                              kr) {
                            Rc(a)(ib(kr, function() {
                                ma && ik(a, c, f, g, x, w, J);
                                Gb && !ir && ik(a, c, k, l, T, V, xa);
                                jr(gr(a, c, Wf || hr, p, v))
                            }))
                        })
                    }) : H.resolve(E)
                }),
                Wk = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                mr = B("cc.i", function(a, c) {
                    var b = D([a, c], ll);
                    b = D([a, b, 300, void 0], da);
                    oa(c, b)
                }),
                nr = u("9-d5ve+.r%7", O),
                or = B("ad", function(a, c) {
                    if (!c.Da) {
                        var b = G(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function(m) {
                                    K(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                                },
                                e = bc(a),
                                f = e.o("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.C),
                                    h = function(m) {
                                        m =
                                            m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.C("isad", m, 1200);
                                        return m
                                    },
                                    k = qa(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + nr().replace(/[^a-v]+/g, "") + "t.gif";
                                    il(a, function() {
                                        return k({
                                            aa: {
                                                ma: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                pr = B("pr.p", function(a, c) {
                    var b, d;
                    if (pf(a)) {
                        var e = qa(a, "5", c),
                            f = ra((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            G: f,
                            F: (d = {}, d["page-url"] = P(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](A(a, "pr.p.s"))
                    }
                }),
                vg = !1,
                qr = B("fid", function(a) {
                    var c, b = E;
                    if (!S(a.PerformanceObserver)) return b;
                    var d = G(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(A(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                jk = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                rr = t(function() {
                    return N(function(a, c) {
                        var b = $b(c + "/watch.js");
                        jk[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                sr = B("p.sci", function(a, c) {
                    var b = G(a);
                    return b.o("scip") ? H.resolve() : oa(c, O).then(function(d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? gl(a, c, b) : null
                    }, A(a, "ins.cs"))
                }),
                tr = B("lt.p", Vb("lt.p", function(a) {
                    var c;
                    if (za("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(A(a,
                                "lt.o",
                                function(e) {
                                    e && e.getEntries && (e = e.getEntries(), b = N(function(f, g) {
                                        return f + g.duration
                                    }, b, e), dd(a).C("lt", b))
                                }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return E
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return E
                })),
                ur = t(q(R("performance.memory.jsHeapSizeLimit"), na("concat", ""))),
                vr = ["availWidth", "availHeight", "availTop"],
                wr = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                xr = ["webgl", "experimental-webgl"],
                fl = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                te = u(Oa("ccf"), Va),
                el = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                tg = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                cl = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Yk = t(mh),
                sg = t(rb, lb),
                yr = B("phc.p", function(a, c) {
                    return Kj(a) ? E : oa(c, function(b) {
                        var d = c.id,
                            e = ic(a, void 0, d),
                            f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = hb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = sg(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Oa: "",
                            Ua: "",
                            fd: 0,
                            Z: {},
                            ea: [],
                            Lc: !1,
                            Ib: !0,
                            l: a,
                            vc: c
                        }, y(f, {
                            Lc: !0
                        }), rg(a, d, f), b = Qc(a), e = oh(a, b, 1E3), d = L(rg, null, a, d, f), e.D(d), ph(a,
                            b))
                    })
                }),
                cg = t(function(a, c) {
                    var b = G(a),
                        d = Ja(a),
                        e = [],
                        f = D([a, c, b, d], xm);
                    Mc(a) || zm(a, "14.1") || e.push(D([Vk, "pp", ""], f));
                    var g = Nj(a) && !re(a, 68);
                    g || e.push(D([Xk, "pu", ""], f));
                    g || d.Pb || hd(a) || (e.push(D([Uk, "zzlc", "na"], f)), e.push(D([Tk, "cc", ""], f)));
                    return e.length ? {
                        fa: function(h, k) {
                            if (0 === b.o("isEU")) try {
                                C(Ah, e)
                            } catch (l) {}
                            k()
                        },
                        N: function(h, k) {
                            var l = h.G;
                            if (l && 0 === b.o("isEU")) try {
                                C(Da(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return M(c)
                }),
                zr = q(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Aa(a) ? q(Ia, oc(Boolean),
                        Yo(function(c, b) {
                            return c.name > b.name ? 1 : 2
                        }), cb(um))(a) : ""
                }, Nc(",")),
                Ar = function(a) {
                    return function(c) {
                        var b = jb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Sd;
                        e = e.Od;
                        try {
                            var g = na("getContext", b);
                            d = z(q(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = Mb(O, d)) ? f(c, {
                            canvas: b,
                            Hd: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Od: xr,
                        Sd: Pk
                    }
                }),
                Nk = ["name", "lang", "localService", "voiceURI", "default"],
                Br = B("p.tfs", function(a) {
                    var c = G(a);
                    if (!c.o("tfs")) {
                        c.C("tfs", !0);
                        c = ha(a);
                        var b = E;
                        b = c.D(a, ["message"], function(d) {
                            try {
                                var e = d.origin
                            } catch (h) {}
                            if (e &&
                                "https://iframe-toloka.com" === e && (d = rb(a, d.data), Fa(d) && "appendremote" === d.action))
                                if (d = Ja(a), d.o("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.C("tfsc",
                                        1);
                                    var f, g;
                                    G(a).C("_u", (f = {}, f.getCachedTags = Ke, f.button = (g = {}, g.closest = u(a, Le), g.select = Me, g.getData = u(a, Ne), g), f));
                                    kc(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                Cr = Pa(/[a-z\u0430-\u044f,.]/gi),
                Dr = B("ice", function(a, c, b) {
                    var d = wa(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = db(c)) && !(100 <= Aa(c)))) {
                            b = yb(c);
                            var f = 0 < c.indexOf("@"),
                                g = "tel" === n(e, "type") || !f && Aa(b);
                            if (f || g) {
                                if (g) {
                                    if (Cr(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h &&
                                        "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[Aa(c) - 1];
                                    g = b[Aa(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                Aa(c) < b || Aa(c) > g || Ph(a, c).then(function(l) {
                                    var m, p, r, v = jf(a, e);
                                    d.params((m = {}, m.__ym = (p = {}, p.fi = of((r = {}, r.a = f ? 1 : 0, r.b = v, r.c = l, r)).sa(), p), m))
                                }, A(a, "ice.s"))
                            }
                        }
                    }
                }),
                Er = ["text", "email", "tel"],
                Fr = ["cc-", "name", "shipping"],
                Gr = B("icei", function(a, c) {
                    if (Zc(a) && Hj(a)) {
                        var b = !1,
                            d = [];
                        Rc(a)(ib(E, D([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = Vq(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = ha(a);
                                f =
                                    kb("input", a.document.body);
                                C(function(h) {
                                    Fe(a, h) || !K(h.type, Er) || Na(O, z(u(h.autocomplete, mc), Fr)) || d.push(g.D(h, ["blur"], D([a, c], Dr)))
                                }, Ia(f))
                            }
                        }], oa)));
                        return function() {
                            C(fa, d);
                            b = !0
                        }
                    }
                }),
                Hr = Vb("gic", Gr),
                og, Ir = B("p.ai", function(a, c) {
                    return new H(function(b) {
                        (Mc(a) || ke(a)) && b(oa(c, function(d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? ng(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : E
                        }));
                        b(E)
                    })
                }),
                Jb = ["0", "1", "2", "3"],
                jc = Jb[0],
                je = Jb[1],
                Jr = Jb[2],
                oe = z(q(O, na("concat", "GDPR-ok-view-detailed-")), Jb),
                qd = aa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "),
                    oe, ["28", "29", "30"]),
                Kr = "3 13 14 15 16 17 28".split(" "),
                ne = q(cb(R("ymetrikaEvent.type")), oc(dc(qd))),
                Kk = {
                    url: "https://yastatic.net/s3/gdpr/popup/v2/",
                    Oc: "ru en et fi lt lv pl fr no sr".split(" "),
                    Tc: "_two_main_buttons"
                },
                Ib, Jk = (Ib = {}, Ib["GDPR-ok"] = "ok", Ib["GDPR-ok-view-default"] = "ok-default", Ib["GDPR-ok-view-detailed"] = "ok-detailed", Ib["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Ib["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Ib["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Ib["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Ib),
                sd = [],
                ig = q(ne, cb(Xo(qd)), Nc(",")),
                jg = q(oc(dc(qd)), Aa, Boolean),
                Bk = t(function(a, c) {
                    var b = c.o("gdpr");
                    return K(b, Jb) ? "-" + b : ""
                });
            "function" == typeof Promise && Promise.resolve();
            var kk = t(Hd),
                Lr = t(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Rj + "." + b);
                        return c
                    }, {}, ff);
                    C(function(c) {
                        a[c] = c
                    }, ea(Tj));
                    return a
                }),
                vk = t(function(a) {
                    a = P(a).hostname;
                    return (a = Mb(q(R("1"), nh("test"), tb(fa)(a)), Ga(Tj))) && a[0]
                }),
                lk = function(a, c) {
                    return function(b, d) {
                        var e = M(d);
                        e = Lr(e);
                        var f = tk(b, e),
                            g =
                                G(b),
                            h = wb(b);
                        return hd(b) || ad(b) ? {} : {
                            N: function(k, l) {
                                var m = k.G,
                                    p = gg(b);
                                m = !(m && m.o("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.o("startSync")) kk(b).push(l);
                                else {
                                    g.C("startSync", !0);
                                    p = D([b, f, E, !1], a);
                                    m = le[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, q(Hc(l), A(b, c)))["catch"](E)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = Z(a),
                        f = G(a),
                        g = Ja(a);
                    b = Gc(a, "c");
                    var h = ob(a, b);
                    return N(function(k, l) {
                        function m() {
                            var v = g.o("synced");
                            f.C("startSync", !1);
                            v && (v[l.oe] = p, g.C("synced", v));
                            v = kk(a);
                            C(fa, v);
                            Ye(v)
                        }
                        var p, r = h({
                            M: {
                                ga: ["sync.cook"],
                                Ja: 1500
                            }
                        }, [pa.va + "//" + l.Fe + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e($a);
                            m()
                        })["catch"](function() {
                            p = e($a) - 1435;
                            m()
                        });
                        r = u(r, O);
                        return k.then(r)
                    }, H.resolve(), c)["catch"](A(a, "ctl"))
                }, "sy.c"),
                rk = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = G(a),
                            e = c.id;
                        C(function(f, g) {
                            return S(f) && A(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.o("counters")[M(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Dc = G(window);
            Dc.ta("hitParam", {});
            Dc.ta("lastReferrer", window.location.href);
            (function() {
                Q.push(function(a,
                                c) {
                    var b;
                    return b = {}, b.firstPartyParams = Np(a, c), b.firstPartyParamsHashed = nn(a, c), b
                })
            })();
            (function() {
                var a = G(window);
                a.ta("getCounters", Op(window));
                Ec.push(Pp);
                Nf.push(function(c, b) {
                    b.counters = a.o("getCounters")
                })
            })();
            ua["1"] = Za;
            Q.push(Rp);
            ka["1"] = de;
            mb(Jh, -1);
            Ab["1"] = [
                [Jh, -1],
                [Vd, 1],
                [Rd, 2],
                [Cb(), 3]
            ];
            Q.push(Sp);
            Q.push(function(a, c) {
                var b, d = qa(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, r = {
                        F: {},
                        G: ra((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = Fa(f) ? {
                        title: f.title,
                        Wc: f.referer,
                        O: f.params,
                        ab: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Wc: g,
                        O: h,
                        ab: k,
                        l: l
                    }, g = Vc(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || P(a).href, g = f.Wc || g.ref || a.document.referrer, h = sb(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.O), k = y(r.L || {}, {
                        O: f.O,
                        title: f.title
                    }), r = d(y(r, {
                        L: k,
                        F: y(r.F || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), qc(a, "p.ar.s", r, f.ab || E, f.l)
                }, b
            });
            ua.a = Za;
            Ab.a = Bb;
            ka.a = de;
            Q.push(Id);
            ua.g = Za;
            ka.g = de;
            Ab.g = Bb;
            Q.push(Tp);
            Q.push(Up);
            Ab.t = Bb;
            ua.t = Za;
            ka.t = Qb;
            Q.push(Wp);
            Ab["2"] = Bb;
            ua["2"] = Za;
            ka["2"] = Qb;
            ua.r = qf("r");
            ka.r = de;
            ub.push(function(a, c) {
                var b = Yp(a),
                    d = qa(a, "r", c),
                    e = A(a, "rts.p");
                return oa(c, D([function(f, g) {
                    var h = {
                            id: g.Ld,
                            R: g.R
                        },
                        k = {
                            M: {
                                W: g.xe
                            },
                            G: ra(g.Gd),
                            F: g.O,
                            L: {
                                Wa: g.Wa
                            },
                            aa: {
                                ma: g.ma
                            }
                        };
                    g.na && (k.na = of(g.na));
                    h = d(k, h)["catch"](e);
                    return f.then(u(h, O))
                }, H.resolve(), b], N))["catch"](e)
            });
            X("r", function(a) {
                return {
                    N: function(c, b) {
                        var d = c.G,
                            e = void 0 === d ? ra() : d,
                            f = c.L.Wa,
                            g = Uc(a);
                        d = e.o("rqnl", 0) + 1;
                        e.C("rqnl", d);
                        if (e = n(g, I(".", [f, "browserInfo"]))) e.rqnl = d, Qe(a);
                        b()
                    },
                    fa: function(c, b) {
                        Eh(a, c);
                        b()
                    }
                }
            }, 1);
            mb(Jd, 100);
            X("1",
                Jd, 100);
            Q.push(Zp);
            X("n", Vd, 1);
            X("n", Rd, 2);
            X("n", Cb(), 3);
            X("n", Jd, 100);
            ua.n = Za;
            ka.n = Qb;
            tc({
                uc: {
                    ba: "accurateTrackBounce"
                }
            });
            Q.push($p);
            ua.m = qf("cm");
            ka.m = Ip;
            X("m", Cb(["u", "v", "vf"]), 1);
            X("m", Jd, 2);
            tc({
                Jd: {
                    ba: "clickmap"
                }
            });
            Q.push(aq);
            Q.push(bq);
            Q.push(dq);
            Q.push(eq);
            (function() {
                Q.push(fq);
                tc({
                    Hb: {
                        ba: "ecommerce",
                        Sa: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            Q.push(gq);
            ub.push(iq);
            Q.push(jq);
            Q.push(kq);
            mb(function(a, c) {
                return {
                    fa: function(b, d) {
                        var e = wa(a, c);
                        e = e && e.userParams;
                        var f = (b.L || {}).pc;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            nd.push(Lp);
            Q.push(nq);
            Q.push(oq);
            Of.push(function(a) {
                var c = G(a);
                c.o("i") || (c.C("i", !0), ha(a).D(a, ["message"], u(a, Cm)))
            });
            mb(Pc, 20);
            X("n", Pc, 20);
            X("1", Pc, 20);
            Q.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", pq(a, c)), b.ecommerceRemove = B("ecm.r", qq(a, c)), b.ecommerceDetail = B("ecm.d", rq(a, c)), b.ecommercePurchase = B("ecm.p", sq(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = Aq;
                c.pri = km;
                c.ds = nm;
                c.co = function(b) {
                    return ce(G(b).o("jn"))
                };
                c.td = Cq;
                y(c, (a = {}, a.iss = q(ip, Fb), a.hdl = q(jp,
                    Fb), a.iia = q(kp, Fb), a.cpf = q(zq, Fb), a.ntf = t(function(b) {
                    a: switch (n(b, "Notification.permission")) {
                        case "denied":
                            b = !1;
                            break a;
                        case "granted":
                            b = !0;
                            break a;
                        default:
                            b = null
                    }
                    return ab(b) ? null : b ? 2 : 1
                }), a.eu = Xb("isEU"), a.ns = Ej, a.np = function(b) {
                    if (Wa(b, 0, 100)) b = null;
                    else {
                        b = db(Ge(b), 100);
                        for (var d = [], e = 0; e < b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                        }
                        b = Kg(d)
                    }
                    return b
                }, a));
                y(af, c)
            })();
            (function() {
                var a = {};
                a.hc = Xb("hc");
                a.oo = Xb("oo");
                a.pmc = Xb("cmc");
                a.lt = function(c) {
                    var b = dd(c).o("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.yu = function(c) {
                    var b = P(c);
                    return K(b.hostname, ["dzen.ru", "ya.ru"]) ? (ic(c, "").o("yandexuid") || "").substring(0, 25) : null
                };
                a.re = q(Jn, Fb);
                a.aw = function(c) {
                    c = Mb(q(sa, Tb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return sa(c) ? null : ce(!c)
                };
                a.ifc = Xb("ifc");
                a.ifb = Xb("ifb");
                a.ecs = Xb("ecs");
                a.csi = Xb("scip");
                y(bf, a)
            })();
            ka.er = Ac;
            (function(a) {
                try {
                    var c = Gc(a, "er"),
                        b = gm(a, c);
                    Ki.push(function(d,
                                     e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[pa.$a] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                nd.push(jm);
                Qd.unshift(fm);
                Mj.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    G(a).C("oo", c)
                })
            })();
            mb(function(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.F,
                            f = b.G;
                        !Uj[c.id] && f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, Uj[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            Q.push(Hq);
            Ab.e = Bb;
            ua.e = Za;
            ka.e = Qb;
            tc({
                exp: {
                    ba: "experiments"
                }
            });
            Xi.experiments =
                "ex";
            (function() {
                var a;
                le.push(Iq);
                ua.f = Za;
                y(ka, (a = {}, a.f = Gj, a));
                X("f", Cb(), 1);
                X("f", ci, 2);
                X("f", Pc, 20)
            })();
            nd.push(function(a, c) {
                var b = {
                        qa: M(c),
                        Gb: wa(a, c),
                        jd: Z(a),
                        Vb: Ja(a)
                    },
                    d = b.jd($a);
                if (!b.Vb.Pb) {
                    var e = b.Vb.o("ymoo" + b.qa);
                    if (e && 30 > d - e) b = b.qa, delete G(a).o("counters", {})[b], Va(Oa("uws"));
                    else oa(c, Jq(b))["catch"](A(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = zb([Rb]);
                y(ka, (a = {}, a.s = b, a.S = b, a.u = Ac, a));
                y(ua, (c = {}, c.s = ob, c.S = Za, c.u = ob, c));
                X("s");
                X("u");
                X("S", Cb(["v", "hid", "u", "vf", "rn"]), 1);
                Q.push(B("s", Tl))
            })();
            ua["8"] = ob;
            ka["8"] = [Xh];
            Q.push(function(a, c) {
                return oa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    return e && Zg(a, b, {
                        za: c,
                        tb: "8",
                        data: y({}, e, (d = {}, d.c = c.id, d)),
                        Sb: "cs"
                    })
                })
            });
            X("p", Cb(Vj), 1);
            ua.p = function(a, c, b) {
                return function(d, e) {
                    var f, g = y({
                        G: ra()
                    }, d);
                    g.F || (g.F = {});
                    var h = g.F,
                        k = g.wa;
                    k = void 0 === k ? {} : k;
                    h["wv-hit"] = h["wv-hit"] || "" + xb(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.wmode = "0";
                    h["wv-part"] = "0";
                    h["page-url"] = h["page-url"] || a.location.href;
                    h["wv-type"] || (h["wv-type"] = k.Jc ? "5" : "4");
                    h = {
                        aa: {
                            ma: "webvisor/" +
                                e.id
                        },
                        M: y(g.M, {
                            Fa: (f = {}, f["Content-Type"] = "text/plain", f),
                            rc: "POST"
                        }),
                        F: h
                    };
                    f = Ha(rf(a, "pub", e), b);
                    return Wd(a, c, f)(y(g, h))
                }
            };
            ka.p = zb([0, Rb]);
            ub.push(Mq);
            X("4", Cb(Vj), 1);
            ua["4"] = function(a, c, b) {
                return function(d, e, f) {
                    var g;
                    d = y({
                        G: ra()
                    }, d);
                    d.F || (d.F = {});
                    var h = d.F,
                        k = d.wa;
                    k = void 0 === k ? {} : k;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" + xb(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Wa(a);
                    h["wv-type"] || (h["wv-type"] = k.Jc ? "3" : "2");
                    f = {
                        aa: {
                            ma: "webvisor/" + e.id
                        },
                        M: y(d.M, {
                            Fa: (g = {},
                                g["Content-Type"] = "text/plain", g),
                            rc: "POST"
                        }),
                        F: h
                    };
                    e = Ha(rf(a, "wv", e), b);
                    return Wd(a, c, e)(y(d, f))
                }
            };
            ka["4"] = zb([0, Rb, Xc]);
            ub.push(Uq);
            tc({
                sd: {
                    ba: "webvisor",
                    Sa: Boolean
                }
            });
            Q.push(Yq);
            X("pi");
            ua.pi = ob;
            ka.pi = Ac;
            tp("w", function(a, c) {
                return {
                    N: function(b, d) {
                        if (b.G) {
                            var e = ek(c),
                                f = e.status;
                            "rt" === e.tb && f && (b.G.C("rt", f), b.aa || (b.aa = {}), b.aa.ee = 1 === f ? Cg(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            Q.push($q);
            Q.push(lr);
            ka["6"] = zb([0, Rb]);
            ua["6"] = ob;
            Q.push(mr);
            Q.push(Dq);
            (function() {
                Nf.push(function(a, c) {
                    c.informer = jl(a)
                })
            })();
            mb(ve,
                6);
            X("1", ve, 6);
            X("adb");
            X("n", ve, 4);
            ka.adb = Ac;
            ua.adb = Wd;
            Ec.push(or);
            ka["5"] = Qb;
            ua["5"] = Za;
            Ab["5"] = U(q(Wc, dc([Vd, Rd]), Tb), Bb);
            Q.push(pr);
            X("5", Pc, 20);
            mb(ug, 7);
            X("n", ug, 6);
            ub.push(qr);
            ua.d = Za;
            X("d", Cb(["hid", "u", "v", "vf"]), 1);
            ka.d = Ac;
            X("n", function(a, c) {
                return {
                    fa: function(b, d) {
                        if (!b.L || !b.L.force) {
                            var e = .002,
                                f = c.id === pa.Bd ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = He(a);
                            if (p && S(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var r = {}, v = {}, x = {}, w = rr(a), J = P(a).href, T = 0; T < p.length; T += 1) {
                                    var V = p[T],
                                        xa = V.name.replace(/^https?:\/\//, "").split("?")[0],
                                        ma = $b(xa),
                                        Gb = (g = {}, g.dns = Math.round(V.domainLookupEnd - V.domainLookupStart), g.tcp = Math.round(V.connectEnd - V.connectStart), g.duration = Math.round(V.duration), g.response = Math.round(V.responseEnd - V.requestStart), g);
                                    "script" !== V.initiatorType || e || (v[xa] = y(Gb, (h = {}, h.name = V.name, h.decodedBodySize = V.decodedBodySize, h)));
                                    !jk[ma] && !w[ma] || r[xa] || f || (r[xa] = y(Gb, (k = {}, k.pages = J, k)))
                                }
                                ea(r).length &&
                                (x.timings8 = r);
                                ea(v).length && (x.scripts = v);
                                if (ea(x).length) qa(a, "d", c)({
                                    G: ra((l = {}, l.ar = 1, l.pv = 1, l)),
                                    M: {
                                        W: hb(a, x) || void 0
                                    },
                                    F: (m = {}, m["page-url"] = J, m)
                                }, {
                                    id: pa.Dd,
                                    R: "0"
                                })["catch"](A(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            ka.ci = zb([Rb]);
            ub.push(sr);
            Q.push(tr);
            ub.push(yq);
            Q.push(yr);
            mb(cg, 8);
            X("f", cg, 3);
            X("n", cg, 5);
            Ec.push(function(a) {
                return B("fip", function(c) {
                    if (!Nj(c) || ad(c)) {
                        var b = Ja(c);
                        if (!b.o("fip")) {
                            var d = q(cb(q(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, L(Jo, null))), Nc("-"))(a);
                            b.C("fip", d)
                        }
                    }
                })
            }([Ar, zr, function(a) {
                var c =
                        n(a, "ApplePaySession"),
                    b = P(a).protocol;
                a = c && "https:" === b && !wb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (S(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = wq(a)) try {
                    for (var c = [], b = 0; b < Oj.length; b += 1) {
                        var d = a(Oj[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? I("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c =
                    wr);
                var b = n(a, "navigator") || {};
                c = z(u(b, n), c);
                c = I("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = ya(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Aa(e)
            }, ur, function(a) {
                a = n(a, "screen") || {};
                return I("x", z(u(a, n), vr))
            }, function(a) {
                return I("x", Mk(a) || [])
            }, function(a) {
                a = bl(a);
                return ba(a) ? I("x", a) : a
            }, function(a) {
                return (a = dl(a)) ? q($o, oc(O), cb(D(["", ["matches", "media"]], Ok)), u("x", I))(a) : ""
            }]));
            mb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.G,
                            e = Ja(a).o("fip");
                        e && d && (d.C("fip",
                            e), pd(c, "fip", ce(e)));
                        b()
                    }
                }
            }, 9);
            X("h", function(a) {
                return {
                    fa: function(c, b) {
                        var d = c.Ae;
                        Je(c) && d && G(a).C("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Ec.push(Wq);
            Of.push(Br);
            ub.push(Hr);
            Q.push(Ir);
            tc({
                Te: {
                    ba: "yaDisableGDPR"
                },
                Ue: {
                    ba: "yaGDPRLang"
                }
            });
            Qd.push(function(a, c) {
                return {
                    N: D([a, c], Ak)
                }
            });
            ji.push("gdpr", "gdpr_popup");
            ef.push(function(a, c) {
                var b = od(a);
                b = ne(b);
                if (U(dc(Kr), b).length) return !0;
                b = c(a, "gdpr");
                return K(b, [jc, Jr])
            });
            Qd.push(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.aa || {},
                            e;
                        (e = n(a, "document.referrer")) ?
                            (e = Ld(a, e).host, e = Qh(e), e = Rj + "." + (e || Eq)) : e = Ob;
                        c.aa = y(d, {
                            fe: [e]
                        });
                        b()
                    }
                }
            });
            mb(lk, 5);
            X("1", lk, 6);
            ka.c = Ac;
            ua.c = ob;
            (function() {
                function a(c) {
                    var b = ac("canvas", c.document);
                    if (b && (b = $c(b))) {
                        var d = mf(c) || Ic(c),
                            e = d[0];
                        d = d[1];
                        if (.3 <= ri(c, b, {
                            Ba: d,
                            Ab: e
                        }) / d * e) return G(c).C("hc", 1), !0
                    }
                    return !1
                }
                Q.push(B("hcp", function(c) {
                    a(c) || da(c, u(c, a), 3E3)
                }))
            })();
            if (window.Ya && ge) {
                var mk = pa.Eb;
                window.Ya[mk] = ge;
                Mp(window);
                C(q(rc([window, window.Ya[mk]]), fa), Nf)
            }
            C(q(rc([window]), fa), Of)
        })()
    } catch (ge) {};
}).call(this)