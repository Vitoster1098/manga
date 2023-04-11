/*! For license information please see 899.9af9a96b.js.LICENSE.txt */
(self.webpackChunkmangahub = self.webpackChunkmangahub || []).push([
    [899], {
        4899: function(r, n, o) {
            "use strict";
            o.d(n, {
                M: function() {
                    return Ks
                },
                U: function() {
                    return Ws
                }
            });
            var s = o(5084),
                a = o(570),
                l = o(523),
                c = o.n(l),
                u = (o(3869), o(6337), o(7363), o(1533), o(4913), o(7147), o(2934)),
                h = o.n(u),
                d = o(1996),
                f = o.n(d),
                p = o(72);

            function m(r, n, o) {
                return p.Z.generate(r, n, o)
            }
            var b = o(463);
            const v = o.n(b)(),
                g = o(8301);
            g.keys().forEach((r => {
                v.fromJSON(g(r))
            }));
            var y = v;

            function w(r, n, o, s) {
                return y.trans(r, n, o, s)
            }

            function E(r, n, o, s, a) {
                return y.transChoice(r, n, o, s, a)
            }
            var S = o(49),
                P = o(2593),
                z = {
                    bind(r, n) {
                        let o = "hover";
                        (n.modifiers.focus || n.modifiers.hover || n.modifiers.click) && (n.modifiers.focus && (o = "focus"), n.modifiers.hover && (o = "hover"), n.modifiers.click && (o = "click")), new S.Z(r, {
                            title: n.value,
                            placement: n.arg || "top",
                            trigger: o,
                            animation: "animation" in n.modifiers && n.modifiers.animation,
                            html: "html" in n.modifiers && n.modifiers.html
                        })
                    },
                    componentUpdated(r) {
                        if ("disabled" === r.getAttribute("disabled")) {
                            const n = S.Z.getInstance(r);
                            n && n.hide()
                        }
                    },
                    update(r, n) {
                        (0, P.$G)(r, n.value)
                    },
                    unbind(r) {
                        const n = S.Z.getInstance(r);
                        n && n.dispose()
                    }
                };

            function k(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class T {
                constructor() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-remove-class]";
                    k(this, "selector", void 0), this.selector = r
                }
                process() {
                    document.querySelectorAll(this.selector).forEach((r => {
                        this._manipulation(r)
                    }))
                }
                _manipulation(r) {
                    [r.dataset.removeClass].forEach((n => r.classList.remove(n)))
                }
            }
            var C, _, L, O = o(4775),
                x = o(133),
                M = o(3066),
                I = o(6039);

            function A(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class R {
                constructor(r, n, o) {
                    A(this, "username", void 0), A(this, "avatar", void 0), A(this, "id", void 0), this.username = n, this.avatar = o, this.id = r
                }
                static createFromJson(r) {
                    return new R(r.id, r.username, r.avatar)
                }
            }

            function F(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function U(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function q(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            let H = (C = class {
                constructor() {
                    F(this, "members", _, this), F(this, "isLast", L, this), U(this, "httpClient", void 0), this.httpClient = new I.eN
                }
                cancelActiveRequests() {
                    this.httpClient.clear()
                }
                resetMembers() {
                    this.members = []
                }
                loadMembers(r) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
                    const o = {
                        method: "GET",
                        query: {
                            offset: this.members.length,
                            limit: n
                        }
                    };
                    return this.httpClient.requestPromise(r, o).then((r => {
                        this.isLast = !Boolean(r.length / n >> 0), r.forEach((r => {
                            this.members.push(R.createFromJson(r))
                        }))
                    }))
                }
            }, _ = q(C.prototype, "members", [x.y$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), L = q(C.prototype, "isLast", [x.y$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), q(C.prototype, "resetMembers", [x.aU], Object.getOwnPropertyDescriptor(C.prototype, "resetMembers"), C.prototype), q(C.prototype, "loadMembers", [x.aU], Object.getOwnPropertyDescriptor(C.prototype, "loadMembers"), C.prototype), C);
            var N, B, D, V, Z = new H;

            function W(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            let K = (N = (0, O.fI)(), (0, x.Qj)(B = (0, O.wA)((D = class extends(h()) {
                constructor() {
                    super(...arguments),
                        function(r, n, o, s) {
                            o && Object.defineProperty(r, n, {
                                enumerable: o.enumerable,
                                configurable: o.configurable,
                                writable: o.writable,
                                value: o.initializer ? o.initializer.call(s) : void 0
                            })
                        }(this, "limit", V, this), W(this, "options", {}), W(this, "loading", !1), W(this, "store", Z)
                }
                mounted() {
                    s.Z.on(a.EE, this.onOpenModal)
                }
                onOpenModal(r) {
                    r && (this.options = r, this.store.cancelActiveRequests(), this.store.resetMembers(), this._loadMembers().then((() => {
                        M.Z.getOrCreateInstance(this.$el).show()
                    })))
                }
                fetchMore() {
                    this.loading = !0, this._loadMembers().then((() => {
                        this.loading = !1
                    }))
                }
                _loadMembers() {
                    return this.store.loadMembers(this.options.url, parseInt(this.limit))
                }
            }, V = function(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(D.prototype, "limit", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), B = D)) || B) || B);
            var Y = K;
            var Q, G, J, X, ee = o(4452);

            function te(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            let ie = (Q = (0, O.fI)(), (0, x.Qj)(G = (0, O.wA)((J = class extends(h()) {
                constructor() {
                    super(...arguments),
                        function(r, n, o, s) {
                            o && Object.defineProperty(r, n, {
                                enumerable: o.enumerable,
                                configurable: o.configurable,
                                writable: o.writable,
                                value: o.initializer ? o.initializer.call(s) : void 0
                            })
                        }(this, "toast", X, this), te(this, "native", null)
                }
                mounted() {
                    this.native = new ee.Z(this.$el, {
                        animation: this.toast.animation,
                        autohide: this.toast.autoHide,
                        delay: this.toast.delay
                    }), this.$el.addEventListener("hidden.bs.toast", (() => {
                        s.Z.emit("toast-remove", this.toast)
                    })), this.show()
                }
                show() {
                    this.native.show()
                }
                remove() {
                    this.native.hide()
                }
            }, X = function(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(J.prototype, "toast", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), G = J)) || G) || G);
            var re, ne, oe = ie,
                se = o(2578);

            function ae(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            let le = (re = (0, O.wA)({
                components: {
                    toast: oe
                }
            }), (0, x.Qj)(ne = re(ne = class extends(h()) {
                constructor() {
                    super(...arguments), ae(this, "store", se.Z)
                }
                mounted() {
                    s.Z.on("toast-remove", this.onRemove.bind(this))
                }
                onRemove(r) {
                    this.store.remove(r)
                }
            }) || ne) || ne);
            var ce = le,
                ue = o(7346);

            function he() {
                const r = document.querySelector("toasts");
                null !== r && (! function(r) {
                    if (!r) return;
                    JSON.parse(r).forEach((r => se.Z.add(ue.FN.create(r))))
                }(r.dataset.toasts), new(h())({
                    el: r,
                    components: {
                        toasts: ce
                    }
                }))
            }

            function de() {
                ! function() {
                    const r = document.querySelector("member-list");
                    null !== r && new(h())({
                        el: r,
                        delimiters: ["${", "}"],
                        components: {
                            "member-list": Y
                        }
                    })
                }(),
                    function() {
                        const r = document.querySelector("downloader");
                        null !== r && new(h())({
                            el: r,
                            delimiters: ["${", "}"],
                            components: {
                                downloader: () => Promise.all([o.e(354), o.e(296)]).then(o.bind(o, 1296))
                            }
                        })
                    }(), he()
            }
            var fe = o(8981),
                pe = o(4290),
                me = (o(1475), o(3673), o(620), o(7059)),
                be = o.n(me);

            function ve(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            new class {
                constructor() {
                    ve(this, "lozad", void 0), this.lozad = be()("[data-lazy-load]", {
                        rootMargin: "100px 0px"
                    }), s.Z.on(a.Mw, (() => {
                        this.observe()
                    }));
                    ["turbo:frame-render", "turbo:render", "turbo:load"].forEach((r => {
                        document.addEventListener(r, (() => this.observe()))
                    })), this.observe()
                }
                observe() {
                    this.lozad.observe()
                }
            }, o(8163);
            var ge = o(9755),
                ye = {
                    nameSpace: "markdown",
                    previewParserPath: p.Z.generate("mh_transform_markdown"),
                    onShiftEnter: {
                        keepDefault: !1,
                        openWith: "\n\n"
                    },
                    markupSet: [{
                        key: "3",
                        icon: "looks-3",
                        openWith: "### ",
                        placeHolder: "Заголовок 3 уровня...",
                        className: "h3"
                    }, {
                        key: "4",
                        icon: "looks-4",
                        openWith: "#### ",
                        placeHolder: "Заголовок 4 уровня...",
                        className: "h4"
                    }, {
                        key: "B",
                        icon: "format-bold",
                        openWith: "**",
                        closeWith: "**",
                        className: "bold"
                    }, {
                        key: "I",
                        icon: "format-italic",
                        openWith: "_",
                        closeWith: "_",
                        className: "italic"
                    }, {
                        className: "bullet-list",
                        icon: "format-list-bulleted",
                        openWith: "* "
                    }, {
                        className: "number-list",
                        icon: "format-list-numbered",
                        openWith: function(r) {
                            return r.line + ". "
                        }
                    }, {
                        key: "P",
                        className: "image",
                        icon: "photo",
                        replaceWith: '![[![Альтернативный текст]!]]([![УРЛ:!:http://]!] "[![Название]!]")'
                    }, {
                        key: "L",
                        icon: "link",
                        openWith: "[",
                        closeWith: ']([![УРЛ:!:http://]!] "[![Название]!]")',
                        placeHolder: "Вставьте ссылку здесь...",
                        className: "link"
                    }, {
                        openWith: "> ",
                        icon: "format-quote",
                        className: "quote"
                    }, {
                        call: "preview",
                        icon: "eye",
                        className: "preview",
                        beforeInsert: r => {
                            const n = ge(r.textarea).parents(".markdown"),
                                o = n.find(".preview"),
                                s = n.find(".markItUpPreviewFrame");
                            ge(s).toggleClass("open"), ge(o).toggleClass("close")
                        }
                    }]
                },
                we = o(9755);
            new class {
                constructor() {
                    new MutationObserver((() => {
                        this.markItUp()
                    })).observe(document, {
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["data-html-editor"]
                    })
                }
                markItUp() {
                    we("[data-html-editor]").filter(":not(.markItUpEditor)").markItUp(ye)
                }
            };
            const Ee = ["notification_referrer_id"];

            function Se() {
                const r = new URLSearchParams(window.location.search);
                let n = null;
                if (r.has("notification_referrer_id") && (n = function(r) {
                    for (const n of Ee) r.delete(n);
                    return r
                }(r)), !n) return null;
                const o = new URL(window.location.href, window.location.origin);
                return o.search = n.toString(), o.toString()
            }
            var Pe = o(7152),
                ze = o(9755);
            const ke = "show",
                Te = "collapsed",
                je = "header-index",
                Ce = ".header",
                _e = ".header .dropdown",
                Le = ".js-sidebar-burger",
                Oe = ".js-sidebar",
                xe = '[data-dismiss="sidebar"]',
                Me = '[data-toggle="block-collapse"]';
            class Ie {
                constructor() {
                    ze(document).on("click", Le, this.onToggle.bind(this)), ze(document).on("click", xe, this.onDismiss.bind(this)), ze(document).on("click", Ce, this.onDismiss.bind(this)), ze(document).on("show.bs.dropdown", _e, this.onDismiss.bind(this)), ze(document).on("click", Me, this.onCollapse.bind(this))
                }
                onCollapse(r) {
                    ze(r.currentTarget).parents("li").toggleClass(Te), r.preventDefault()
                }
                onDismiss(r) {
                    const n = ze(r.target);
                    n.hasClass(Le) || 0 !== n.parents(Le).length || this._closeSidebar()
                }
                onToggle(r) {
                    ze(r.currentTarget).hasClass(ke) ? this._closeSidebar() : this._openSidebar()
                }
                _openSidebar() {
                    ze(Le).addClass(ke), ze(Oe).addClass(ke), ze(Ce).addClass(je), Pe.Z.disableScroll()
                }
                _closeSidebar() {
                    const r = ze(Le);
                    r.hasClass(ke) && (r.removeClass(ke), ze(Oe).removeClass(ke), ze(Ce).removeClass(je), Pe.Z.enableScroll())
                }
            }
            var Ae = o(6916),
                Re = o.n(Ae),
                Fe = o(9755);

            function $e(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const Ue = ".header-notify-dropdown";
            class qe {
                constructor() {
                    $e(this, "options", {
                        cssVarName: "vh-offset",
                        updateOnTouch: !1,
                        force: !0
                    }), this._viewportCheck(), this._configureEvents()
                }
                _configureEvents() {
                    s.Z.on(a.ho, this.onHandlerEnable.bind(this)), s.Z.on(a.yN, this.onHandlerDisable.bind(this)), Fe(Ue).on("show.bs.dropdown", this.onHandlerEnable.bind(this)), Fe(Ue).on("hide.bs.dropdown", this.onHandlerDisable.bind(this))
                }
                onHandlerEnable() {
                    this._isTouchDevice() && (Fe(document).on("touchmove.vh-offset", this._viewportCheck.bind(this)), Fe(window).on("resize.vh-offset", this._viewportCheck.bind(this)))
                }
                onHandlerDisable() {
                    this._isTouchDevice() && (Fe(document).off(".vh-offset"), Fe(window).off(".vh-offset"))
                }
                _isTouchDevice() {
                    return "ontouchstart" in document
                }
                _viewportCheck() {
                    Re()(this.options)
                }
            }
            var He = o(9755);
            const Ne = '[data-dismiss="details"]',
                Be = "details",
                De = ".js-menu-label",
                Ve = ".js-menu-item",
                Ze = ".js-menu-item-label",
                We = ".js-menu-multiple";
            class Ke {
                constructor() {
                    this._configureEvents()
                }
                _configureEvents() {
                    He(document).on("click", this.onAutoClose.bind(this)), He(document).on("click", Ne, this.onDismiss.bind(this)), He(document).on("change", `${Ve} :input`, this.onUpdateSelected.bind(this))
                }
                onAutoClose(r) {
                    const n = "details[open][data-auto-close]",
                        o = He(r.target);
                    0 === He(o).parents(n).length && He(n).removeAttr("open")
                }
                onDismiss(r) {
                    He(r.currentTarget).parents(Be).removeAttr("open")
                }
                onUpdateSelected(r) {
                    const n = He(r.currentTarget),
                        o = n.parents(Ve),
                        s = n.parents("details");
                    !0 === n.parents(We).length > 0 ? o.toggleClass("selected") : (s.find(De).text(o.find(Ze).text()), s.find(Ve).removeClass("selected"), o.addClass("selected"))
                }
            }
            o(6688);
            var Ye = o(9755);

            function Qe(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class Ge {
                constructor() {
                    Qe(this, "selector", "[data-text-mask]"), Qe(this, "alias", {
                        phone: {
                            mask: "+0 (000) 000-0000",
                            options: {
                                placeholder: "+_ (___) ___-____"
                            }
                        },
                        date: {
                            mask: "00.00.0000",
                            options: {
                                placeholder: "__.__.____"
                            }
                        }
                    }), this._configureTextMask(), this._configureEvents()
                }
                _configureEvents() {
                    s.Z.on(a.Mw, (() => {
                        this._configureTextMask()
                    }))
                }
                _configureTextMask() {
                    Ye(this.selector).each(((r, n) => {
                        const o = Ye(n),
                            s = o.attr("data-text-mask"),
                            a = this.alias[s] || null;
                        a ? o.mask(a.mask, a.options) : o.mask(s)
                    }))
                }
            }
            var Je = o(2924),
                Xe = o(2274),
                et = (o(363), o(9755));

            function tt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class it {
                constructor() {
                    tt(this, "selector", "[data-datepicker]"), this._configurePlugin(), this._configureEvents()
                }
                _configureEvents() {
                    s.Z.on(a.Mw, (() => {
                        this._configurePlugin()
                    }))
                }
                _configurePlugin() {
                    et(this.selector).each(((r, n) => {
                        const o = et(n),
                            s = this._buildOptions(o),
                            a = o.datepicker(s).data("datepicker");
                        if (o.val()) {
                            const r = (0, Je.Z)(o.val(), "dd.MM.yyyy", new Date);
                            (0, Xe.Z)(r) && a.selectDate(r)
                        }
                    }))
                }
                _buildOptions(r) {
                    const n = {},
                        o = JSON.parse(r.attr("data-datepicker"));
                    return !0 === (0, P.Kn)(o) ? et.extends(n, o) : n
                }
            }

            function rt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class nt {
                constructor() {
                    rt(this, "selector", "[data-recaptcha]"), this._configureEvents()
                }
                _configureEvents() {
                    s.Z.on(a.Mw, this.onRenderRecaptcha.bind(this))
                }
                onRenderRecaptcha() {
                    const r = window.grecaptcha;
                    r && r.ready((() => {
                        document.querySelectorAll(this.selector).forEach((n => {
                            0 === n.childNodes.length && r.render(n.getAttribute("id"), {
                                sitekey: n.dataset.sitekey
                            })
                        }))
                    }))
                }
            }
            var ot = o(9755);

            function st(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class at {
                constructor() {
                    st(this, "selectorForm", "[feed-modal]"), st(this, "selectorModal", "#feed-modal"), st(this, "selectorSelect", "#feedback_type"), st(this, "relatedTarget", void 0), st(this, "httpClient", void 0), this.httpClient = new I.eN, this._configureEvents()
                }
                _configureEvents() {
                    ot(document).on("submit", this.selectorForm, this.onRequestForm.bind(this)), ot(document).on("show.bs.modal", this.selectorModal, this.onTypeReport.bind(this)), s.Z.on(a.ab, (r => {
                        r.target === this.selectorModal && (this.relatedTarget = r.node)
                    }))
                }
                onRequestForm(r) {
                    ot(this.selectorForm).find(":submit").prop("disabled", !0);
                    const n = ot(r.target),
                        o = {
                            body: new FormData(n[0]),
                            method: "POST"
                        };
                    this.httpClient.requestPromise(n.attr("action"), o).then((r => {
                        n.replaceWith(ot(r).find("form"))
                    })), r.preventDefault()
                }
                onTypeReport(r) {
                    const n = ot(r.currentTarget).find(this.selectorSelect);
                    let o = ot(this.relatedTarget || r.relatedTarget).attr("data-type");
                    o || (o = n.find("option:first").val()), n.val(o), this.relatedTarget = null
                }
            }

            function lt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class ct {
                constructor() {
                    lt(this, "selector", '[data-remote="modal"]'), lt(this, "destroy", "[data-remote-destroy]"), lt(this, "httpClient", void 0), this.httpClient = new I.eN, this._configureEvents()
                }
                _configureEvents() {
                    document.addEventListener("click", this.onFetchModal.bind(this)), document.addEventListener("hidden.bs.modal", this.onHideModal.bind(this))
                }
                onHideModal(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLElement && n.matches(this.destroy))) return;
                    const o = n.getAttribute("id") || "",
                        s = document.querySelector(`[data-bs-target="#${o}"]`);
                    n.remove(), null !== s && (s.removeAttribute("data-bs-target"), s.removeAttribute("data-bs-toggle"))
                }
                onFetchModal(r) {
                    const n = r.target;
                    if (!(n instanceof Element)) return;
                    const o = n.closest(this.selector);
                    o instanceof HTMLElement && (o.matches("[data-bs-toggle]") || (this.httpClient.requestPromise(this._getRemoteUrl(o)).then((r => {
                        const n = (0, P.rg)(r).firstElementChild;
                        if (!(n instanceof HTMLElement)) return;
                        const l = "#" + (n.getAttribute("id") || "");
                        o.matches(this.destroy) && n.setAttribute(this.destroy.replace(/[\[\]]/gi, ""), "true"), document.querySelector(l) || document.body && document.body.append(n), s.Z.emit(a.ab, {
                            target: l,
                            response: r,
                            node: o
                        }), o.setAttribute("data-bs-target", l), o.setAttribute("data-bs-toggle", "modal"), o.dispatchEvent(new Event("click"))
                    })), r.preventDefault()))
                }
                _getRemoteUrl(r) {
                    return r.hasAttribute("data-href") ? r.getAttribute("data-href") || "" : r.getAttribute("href") || ""
                }
            }
            var ut = o(9755);

            function ht(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class dt {
                constructor() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ht(this, "scrollerSelector", ".scroller"), ht(this, "scrollerControl", ".scroller-control"), ht(this, "scrollerCollect", []), this.scrollerSelector = r.scrollerSelector || this.scrollerSelector, this.scrollerControl = r.scrollerControl || this.scrollerControl, this.configureEvents()
                }
                configureEvents() {
                    ut(document).on("click", this.scrollerControl, this.onScrollUpdate.bind(this)), ut(document).on("mouseup", this.onMouseUp.bind(this)), ut(document).on("mousedown", this.scrollerSelector, this.onMouseDown.bind(this)).on("mousemove", this.scrollerSelector, this.onMouseMove.bind(this))
                }
                onScrollUpdate(r) {
                    const n = ut(r.currentTarget),
                        o = n.closest(n.data("closest")).find(n.data("target") ? n.data("target") : this.scrollerSelector),
                        s = o.scrollLeft() + parseInt(n.data("scrollLeft"));
                    o.stop(!0, !1).animate({
                        scrollLeft: s
                    }, 500)
                }
                onMouseDown(r) {
                    const n = ut(r.currentTarget);
                    this.scrollerCollect.push(n), n.data("down", !0).data("x", r.clientX).data("scrollLeft", n.scrollLeft())
                }
                onMouseUp() {
                    this.scrollerCollect.length && (this.scrollerCollect.forEach((r => r.data("down", !1))), this.scrollerCollect = [])
                }
                onMouseMove(r) {
                    const n = ut(r.currentTarget);
                    !0 === n.data("down") && n.scrollLeft(n.data("scrollLeft") + n.data("x") - r.clientX)
                }
            }
            var ft = o(3129),
                pt = o(9755);

            function mt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const bt = "upload",
                vt = "cropper";
            class gt {
                constructor() {
                    mt(this, "selectorModal", "#image-upload"), mt(this, "selectorModalDialog", ".modal-dialog"), mt(this, "selectorImageForm", "#image-upload-form"), mt(this, "selectorCropperForm", "#image-cropper-form"), mt(this, "selectorModalExec", "[data-image-modal]"), mt(this, "selectorLoading", "[data-loading]"), mt(this, "selectorPreview", "[data-cropper-preview]"), mt(this, "selectorToggleStep", '[data-toggle="step"]'), mt(this, "selectorLargeModal", "modal-xl"), mt(this, "httpClient", void 0), pt(this.selectorModal).length && (this.httpClient = new I.eN, this._configureEvents())
                }
                _configureEvents() {
                    pt(document).on("click", this.selectorModalExec, this.onShowModal.bind(this)), pt(document).on("click", this.selectorModalExec, this.onTitleModal.bind(this)), pt(this.selectorModal).on("shown.bs.modal", this.onDefaultStep.bind(this)), pt(this.selectorModal).on("shown.bs.modal", this.onCropperInit.bind(this)), pt(this.selectorModal).on("click", this.selectorToggleStep, this.onStepEvent.bind(this)), pt(this.selectorModal).on("submit", this.selectorCropperForm, this.onRequest.bind(this)), pt(this.selectorModal).on("change", this.selectorImageForm, this.onUploadImage.bind(this))
                }
                onShowModal(r) {
                    const n = document.querySelector(this.selectorModal);
                    M.Z.getOrCreateInstance(n).show(), r.preventDefault()
                }
                onTitleModal(r) {
                    const n = pt(this.selectorModal).find("h4"),
                        o = pt(r.currentTarget).data("title");
                    "string" == typeof o && o.length > 0 && n.text(o)
                }
                onDefaultStep() {
                    const r = pt(this.selectorModal).find("[data-step-default]").attr("data-step-default");
                    this._toggleStepAction(r)
                }
                onCropperInit() {
                    this._initCropperPlugin()
                }
                onStepEvent(r) {
                    const n = pt(r.currentTarget).attr("data-target");
                    this._toggleStepAction(n)
                }
                onRequest(r) {
                    const n = pt(r.currentTarget),
                        o = new FormData(n[0]);
                    this._toggleLoading();
                    const s = {
                        body: o,
                        method: "POST"
                    };
                    this.httpClient.requestPromise(n.attr("action"), s).then((r => {
                        if ((0, P.Kn)(r)) window.location.reload();
                        else {
                            const n = pt(r).find(this.selectorModalDialog);
                            pt(`${this.selectorModal} ${this.selectorModalDialog}`).replaceWith(n), this._initCropperPlugin()
                        }
                    })), r.preventDefault()
                }
                onUploadImage(r) {
                    const n = pt(r.currentTarget),
                        o = new FormData(n[0]);
                    this._toggleLoading();
                    const s = {
                        body: o,
                        method: "POST"
                    };
                    this.httpClient.requestPromise(n.attr("action"), s).then((r => {
                        const n = pt(r).find(this.selectorModalDialog);
                        pt(`${this.selectorModal} ${this.selectorModalDialog}`).replaceWith(n), this._initCropperPlugin()
                    }))
                }
                _initCropperPlugin() {
                    const r = document.getElementById("image-cropper"),
                        n = JSON.parse(pt(this.selectorModal).find("[data-crop-meta]").attr("data-crop-meta"));
                    new ft(r, {
                        aspectRatio: 1,
                        viewMode: 1,
                        movable: !1,
                        zoomable: !1,
                        preview: this.selectorPreview,
                        minCropBoxWidth: 150,
                        minCropBoxHeight: 150,
                        data: n.x ? {
                            x: parseInt(n.x),
                            y: parseInt(n.y),
                            width: parseInt(n.width),
                            height: parseInt(n.height),
                            rotate: parseInt(n.rotate),
                            scaleX: parseInt(n.scaleX),
                            scaleY: parseInt(n.scaleY)
                        } : {},
                        crop: r => {
                            pt("#cropper-x").val(r.detail.x), pt("#cropper-y").val(r.detail.y), pt("#cropper-width").val(r.detail.width), pt("#cropper-height").val(r.detail.height), pt("#cropper-rotate").val(r.detail.rotate), pt("#cropper-scaleX").val(r.detail.scaleX), pt("#cropper-scaleY").val(r.detail.scaleY)
                        }
                    })
                }
                _toggleStepAction(r) {
                    r !== vt && r !== bt || (pt("[data-step]").hide(), pt(`[data-step='${r}']`).show());
                    const n = this.selectorLargeModal;
                    r === vt ? pt(this.selectorModal).find(".modal-dialog").addClass(n) : r === bt && pt(this.selectorModal).find(".modal-dialog").removeClass(n)
                }
                _toggleLoading() {
                    pt(this.selectorLoading).each(((r, n) => {
                        const o = pt(n),
                            s = o.find("[data-loading-label]"),
                            a = o.find("[data-loading-input]");
                        o.hasClass("disabled") ? (o.removeClass("disabled"), s.text(s.attr("data-loading-original")), a.prop("disabled", !1)) : (o.addClass("disabled"), s.text(s.attr("data-loading-text")), a.prop("disabled", !0))
                    }))
                }
            }

            function yt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            var wt = new class {
                    constructor() {
                        yt(this, "httpClient", void 0), yt(this, "cache", {}), this.httpClient = new I.eN
                    }
                    isCached(r) {
                        return r in this.cache
                    }
                    getCard(r) {
                        const n = (new Date).getTime(),
                            o = r => ({
                                content: this.cache[r],
                                requestTime: (new Date).getTime() - n
                            });
                        return new Promise((n => {
                            if (this.isCached(r)) return n(o(r));
                            this.httpClient.requestPromise(r).then((s => (this.cache[r] = s, n(o(r)))))
                        }))
                    }
                },
                Et = o(9755);

            function St(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class Pt {
                constructor(r) {
                    St(this, "el", void 0), St(this, "popover", null), St(this, "tipMouseLeave", void 0), this.el = r, this.el.addEventListener("shown.bs.popover", this.onShowPopover.bind(this)), this.el.addEventListener("hide.bs.popover", this.onHidePopover.bind(this)), this.tipMouseLeave = this.hide.bind(this)
                }
                onShowPopover() {
                    const r = this.getTipElement();
                    r && (r.removeEventListener("mouseleave", this.tipMouseLeave), r.addEventListener("mouseleave", this.tipMouseLeave))
                }
                onHidePopover(r) {
                    const n = this.getTipElement();
                    n && n.matches(":hover") && r.preventDefault()
                }
                createPopover(r, n) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
                    const s = this.getOptions();
                    if (this.popover) return this.popover;
                    if (this.popover = new fe.Z(this.el, {
                        html: !0,
                        delay: {
                            show: o,
                            hide: 100
                        },
                        offset: [0, 12],
                        content: Et(r),
                        animation: !1,
                        placement: s.position,
                        fallbackPlacements: ["top", "bottom"],
                        trigger: "hover",
                        template: `\n        <div class="popover hovercard ${s.mobile?"hovercard-mobile":""}" role="tooltip">\n            <div class="popover-arrow"></div>\n            <div class="hovercard-${s.type}">\n                <div class="hovercard-header popover-header"></div>\n                <div class="hovercard-body popover-body"></div>\n            </div>\n        </div>\n        `
                    }), this.el.matches(":hover")) {
                        const r = Math.max(0, o - n);
                        setTimeout((() => {
                            this.el.matches(":hover") && this.show()
                        }), r)
                    }
                    return this.popover
                }
                show() {
                    this.popover && this.popover.show()
                }
                hide() {
                    this.popover && this.popover.hide()
                }
                getUrl() {
                    const {
                        url: r
                    } = this.getOptions();
                    return r
                }
                getTipElement() {
                    return this.popover ? this.popover.getTipElement() : null
                }
                getOptions() {
                    const r = r => `data-hovercard-${r}`,
                        n = {
                            type: this.el.getAttribute(r("type")) || "",
                            url: this.el.getAttribute(r("url")) || "",
                            position: this.el.getAttribute(r("position")) || "bottom",
                            mobile: this.el.hasAttribute(r("mobile"))
                        };
                    return ["url", "type"].forEach((o => {
                        if (!n[o]) throw Error(`Not found attr or empty "${r(o)}".`)
                    })), n
                }
            }
            var zt = o(9755);

            function kt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class Tt {
                constructor() {
                    kt(this, "fetcher", wt), kt(this, "hoverCards", new Map), kt(this, "observer", void 0), zt(document).on("mouseenter", "[data-hovercard-url]", (r => {
                        this.onHoverCard(r)
                    })), this.observer = new IntersectionObserver((r => {
                        r.forEach((r => {
                            if (0 !== r.intersectionRatio) return;
                            const n = this.hoverCards.get(r.target);
                            n instanceof Pt && n.hide()
                        }))
                    }))
                }
                onHoverCard(r) {
                    const n = r.currentTarget;
                    if (this.hoverCards.has(n)) return;
                    const o = new Pt(n);
                    this.hoverCards.set(n, o), this.observer.observe(n), this.fetcher.getCard(o.getUrl()).then((r => {
                        o.createPopover(r.content, r.requestTime)
                    }))
                }
            }
            var jt = o(9755);

            function Ct(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const _t = ".js-reaction-pick",
                Lt = ".js-reaction-container",
                Ot = ".js-reaction-details",
                xt = ".js-reaction-title",
                Mt = ".js-reaction-choose";
            class It {
                constructor() {
                    Ct(this, "httpClient", void 0), this.httpClient = new I.eN, jt(document).on("click", `${_t} [type="submit"]`, this.onUpdate.bind(this)), jt(document).on("mouseover", Mt, this.onMouseover.bind(this)), jt(document).on("mouseout", Mt, this.onMouseout.bind(this))
                }
                onMouseout() {
                    const r = jt(xt).data("default");
                    jt(xt).text(r)
                }
                onMouseover(r) {
                    const n = jt(r.currentTarget).data("title");
                    jt(xt).text(n)
                }
                onUpdate(r) {
                    const n = jt(r.currentTarget),
                        o = n.closest(_t),
                        s = o.data("id"),
                        a = new FormData(o[0]);
                    a.append(n.attr("name"), n.attr("value"));
                    const l = {
                        body: a,
                        method: "POST"
                    };
                    this.httpClient.requestPromise(o.attr("action"), l).then((r => {
                        jt(".tooltip").remove(), jt(`${Lt}[data-reaction="${s}"]`).replaceWith(r.container), jt(`${Ot}[data-reaction="${s}"]`).filter(((r, n) => 0 === jt(n).closest(Lt).length)).replaceWith(r.details)
                    })), r.preventDefault()
                }
            }
            o(686), o(1339), o(8229);
            var At = o(9755);

            function Rt(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class Ft {
                constructor() {
                    Rt(this, "simple", "select[data-select-2]"), Rt(this, "entity", '.select2entity[data-autostart="true"]'), this._configureEvents(), this._configureSimple()
                }
                _configureEvents() {
                    s.Z.on([a.Mw, a.LL], (() => {
                        this._configureSimple(), this._configureEntity()
                    })), document.addEventListener("turbo:frame-render", (() => {
                        this._configureSimple(), this._configureEntity()
                    }))
                }
                _configureSimple() {
                    At(this.simple).each(((r, n) => {
                        At(n).select2({
                            placeholder: At(n).attr("data-placeholder")
                        })
                    }))
                }
                _configureEntity() {
                    At(this.entity).select2entity()
                }
            }
            var $t = o(9755);

            function Ut(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class qt {
                constructor() {
                    Ut(this, "selectorCountry", "[js-location-country]"), Ut(this, "selectorCity", "[js-location-city]"), $t(this.selectorCity).length && $t(this.selectorCountry).length && (this._configureEvents(), this._configureSelects())
                }
                _configureEvents() {
                    s.Z.on(a.Mw, (() => {
                        this._configureSelects()
                    }))
                }
                _configureSelects() {
                    const r = r => ({
                            results: r
                        }),
                        n = r => ({
                            query: r.term,
                            country: $t(this.selectorCountry).val()
                        });
                    this._configureCountry(n, r), this._configureCity(n, r)
                }
                _configureCountry(r, n) {
                    $t(this.selectorCountry).select2({
                        ajax: {
                            url: p.Z.generate("mh_location_country"),
                            data: r,
                            processResults: n
                        }
                    }).on("select2:select", (() => {
                        $t(this.selectorCity).prop("disabled", !1), $t(this.selectorCity).val("").trigger("change")
                    }))
                }
                _configureCity(r, n) {
                    $t(this.selectorCountry).val() || $t(this.selectorCity).prop("disabled", !0), $t(this.selectorCity).select2({
                        ajax: {
                            url: p.Z.generate("mh_location_city"),
                            data: r,
                            processResults: n
                        }
                    })
                }
            }
            var Ht = o(9755),
                Nt = new Set(["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻", "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀", "👱‍♂", "🧓", "👴", "👵", "🙍", "🙍‍♂", "🙍‍♀", "🙎", "🙎‍♂", "🙎‍♀", "🙅", "🙅‍♂", "🙅‍♀", "🙆", "🙆‍♂", "🙆‍♀", "💁", "💁‍♂", "💁‍♀", "🙋", "🙋‍♂", "🙋‍♀", "🧏", "🧏‍♂", "🧏‍♀", "🙇", "🙇‍♂", "🙇‍♀", "🤦", "🤦‍♂", "🤦‍♀", "🤷", "🤷‍♂", "🤷‍♀", "🧑‍⚕", "👨‍⚕", "👩‍⚕", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖", "👨‍⚖", "👩‍⚖", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈", "👨‍✈", "👩‍✈", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂", "👮‍♀", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂", "💂‍♀", "🥷", "👷", "👷‍♂", "👷‍♀", "🤴", "👸", "👳", "👳‍♂", "👳‍♀", "👲", "🧕", "🤵", "🤵‍♂", "🤵‍♀", "👰", "👰‍♂", "👰‍♀", "🤰", "🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂", "🦸‍♀", "🦹", "🦹‍♂", "🦹‍♀", "🧙", "🧙‍♂", "🧙‍♀", "🧚", "🧚‍♂", "🧚‍♀", "🧛", "🧛‍♂", "🧛‍♀", "🧜", "🧜‍♂", "🧜‍♀", "🧝", "🧝‍♂", "🧝‍♀", "💆", "💆‍♂", "💆‍♀", "💇", "💇‍♂", "💇‍♀", "🚶", "🚶‍♂", "🚶‍♀", "🧍", "🧍‍♂", "🧍‍♀", "🧎", "🧎‍♂", "🧎‍♀", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂", "🏃‍♀", "💃", "🕺", "🕴️", "🧖", "🧖‍♂", "🧖‍♀", "🧗", "🧗‍♂", "🧗‍♀", "🏇", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂", "🏄‍♀", "🚣", "🚣‍♂", "🚣‍♀", "🏊", "🏊‍♂", "🏊‍♀", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂", "🚴‍♀", "🚵", "🚵‍♂", "🚵‍♀", "🤸", "🤸‍♂", "🤸‍♀", "🤽", "🤽‍♂", "🤽‍♀", "🤾", "🤾‍♂", "🤾‍♀", "🤹", "🤹‍♂", "🤹‍♀", "🧘", "🧘‍♂", "🧘‍♀", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬"]);

            function Bt(r) {
                return Nt.has(r)
            }
            const Dt = "‍",
                Vt = 65039;

            function Zt(r) {
                return [...r].filter((r => !Kt(r.codePointAt(0)))).join("")
            }

            function Wt(r, n) {
                const o = [...r].map((r => r.codePointAt(0)));
                return o[1] && (Kt(o[1]) || o[1] === Vt) ? o[1] = n : o.splice(1, 0, n), String.fromCodePoint(...o)
            }

            function Kt(r) {
                return r >= 127995 && r <= 127999
            }

            function Yt(r) {
                switch (r) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null
                }
            }
            class EmojiElement extends HTMLElement {
                get tone() {
                    return (this.getAttribute("tone") || "").split(" ").map((r => {
                        const n = parseInt(r, 10);
                        return n >= 0 && n <= 5 ? n : 0
                    })).join(" ")
                }
                set tone(r) {
                    this.setAttribute("tone", r)
                }
                connectedCallback() {
                    this.hasAttribute("tone") && this._updateTone(this)
                }
                attributeChangedCallback(r) {
                    if ("tone" === r) this._updateTone(this)
                }
                static get observedAttributes() {
                    return ["tone"]
                }
                _updateTone(r) {
                    const n = r.tone.split(" ").map((r => parseInt(r, 10)));
                    if (0 === n.length) r.textContent = Zt(r.textContent || "");
                    else if (1 === n.length) {
                        const o = n[0];
                        r.textContent = 0 === o ? Zt(r.textContent || "") : function(r, n) {
                            const o = Zt(r);
                            if (!Bt(o)) return r;
                            const s = Yt(n);
                            return s ? o.split(Dt).map((r => Bt(r) ? Wt(r, s) : r)).join(Dt) : r
                        }(r.textContent || "", o)
                    } else r.textContent = function(r, n) {
                        const o = Zt(r);
                        if (!Bt(o)) return r;
                        const s = n.map((r => Yt(r)));
                        return o.split(Dt).map((r => {
                            if (!Bt(r)) return r;
                            const n = s.shift();
                            return n ? Wt(r, n) : r
                        })).join(Dt)
                    }(r.textContent || "", n)
                }
            }
            var Qt = EmojiElement;
            class OpenerElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("click", this._emitOpen.bind(this))
                }
                _emitOpen() {
                    s.Z.emit(a.EE, {
                        url: this.getAttribute("url"),
                        title: this.getAttribute("title")
                    })
                }
            }
            var Gt = OpenerElement;
            const Jt = new ResizeObserver((r => {
                for (let n of r) {
                    const r = n.target;
                    r.scrollHeight > r.clientHeight ? r.classList.add("truncated") : r.classList.remove("truncated")
                }
            }));
            class ExpandableElement extends HTMLElement {
                connectedCallback() {
                    const r = this.button;
                    r && r.addEventListener("click", this.onClick.bind(this));
                    const n = this.text;
                    n && Jt.observe(n)
                }
                onClick(r) {
                    const n = r.currentTarget;
                    if (!(n instanceof HTMLElement)) return;
                    const o = this.text;
                    if (!(o instanceof HTMLElement)) return;
                    o.classList.toggle("expanded");
                    const s = n.dataset;
                    s.collapse ? (s.expand || (s.expand = n.innerText || ""), n.innerText = s[n.innerText === s.collapse ? "expand" : "collapse"]) : (n.remove(), Jt.unobserve(o))
                }
                get text() {
                    const r = this.getAttribute("text");
                    return r ? this.querySelector(r) : null
                }
                get button() {
                    const r = this.getAttribute("button");
                    return r ? this.querySelector(r) : null
                }
            }
            var Xt = ExpandableElement,
                ei = o(8150);
            var ti = new class {
                checkout(r) {
                    if (!this.names.includes(r)) throw new Error(`Not exists theme "${r}". Available list: ${this.names.join(", ")}.`);
                    const n = this.linkByTheme(r);
                    if (!(n instanceof HTMLLinkElement)) throw new Error(`Not found theme link with name "${r}".`);
                    return new Promise((r => {
                        const o = n.cloneNode(!0);
                        o.href = n.dataset.href, o.onload = () => {
                            this.links.forEach((r => {
                                o !== r && r.removeAttribute("href")
                            }));
                            const n = document.documentElement;
                            n instanceof HTMLElement && (n.dataset.theme = o.dataset.theme), r(o)
                        }, n.replaceWith(o)
                    }))
                }
                linkByTheme(r) {
                    return document.querySelector(`link[data-theme="${r}"]`)
                }
                currentTheme() {
                    const r = document.querySelector("link[data-theme][href]");
                    if (!(r instanceof HTMLLinkElement)) throw new Error("Not resolve current theme");
                    return r.dataset.theme
                }
                get names() {
                    return Array.from(this.links).map((r => r.dataset.theme || ""))
                }
                get links() {
                    return document.querySelectorAll("link[data-theme]")
                }
            };

            function ii(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class SwitchElement extends HTMLElement {
                constructor() {
                    super(...arguments), ii(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    this.inputs.forEach((r => {
                        r.addEventListener("change", this.onChange.bind(this))
                    }));
                    const r = this.toggle;
                    r instanceof HTMLElement && r.addEventListener("click", this.onToggle.bind(this))
                }
                onToggle(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLElement)) return;
                    const o = this.querySelector(n.dataset.target);
                    o instanceof HTMLInputElement && (o.value = "dark" === ti.currentTheme() ? "light" : "dark", ti.checkout(o.value).then((() => {
                        this._updateCookie(o.value), this._submitForm(o)
                    })))
                }
                onChange(r) {
                    const n = r.target;
                    n instanceof HTMLInputElement && ti.checkout(n.value).then((() => {
                        this._updateCookie(n.value), this._submitForm(n)
                    }))
                }
                _submitForm(r) {
                    const n = r.form;
                    n instanceof HTMLFormElement && this.httpClient.request(n.getAttribute("action") || "", {
                        body: new FormData(n),
                        method: "POST"
                    })
                }
                _updateCookie(r) {
                    ei.Z.set("preference_theme", r, 30)
                }
                get inputs() {
                    return this.querySelectorAll("input")
                }
                get toggle() {
                    return this.querySelector("[data-toggle=theme]")
                }
            }
            var ri, ni, oi, si, ai, ci = SwitchElement,
                ui = o(208),
                hi = o(9935);

            function di(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function fi(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((ni = class PasswordVisibleElement extends HTMLElement {
                constructor() {
                    super(...arguments), di(this, "input", oi, this), di(this, "showButton", si, this), di(this, "hideButton", ai, this)
                }
                show() {
                    this.input.type = "text", this.showButton.hidden = !0, this.hideButton.hidden = !1
                }
                hide() {
                    this.input.type = "password", this.showButton.hidden = !1, this.hideButton.hidden = !0
                }
            }, oi = fi(ni.prototype, "input", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), si = fi(ni.prototype, "showButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ai = fi(ni.prototype, "hideButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ri = ni));
            var pi, mi, bi, vi, gi;

            function yi(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function wi(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((mi = class CollapseMultipleElement extends HTMLElement {
                constructor() {
                    super(...arguments), yi(this, "items", bi, this), yi(this, "showButton", vi, this), yi(this, "hideButton", gi, this)
                }
                updateState(r) {
                    this.items.forEach((n => {
                        (n.hidden || n.dataset.hidden) && (n.hidden = r, n.dataset.hidden = "true")
                    }))
                }
                show() {
                    this.updateState(!1), this.showButton.hidden = !0, this.hideButton.hidden = !1
                }
                hide() {
                    this.updateState(!0), this.showButton.hidden = !1, this.hideButton.hidden = !0
                }
            }, bi = wi(mi.prototype, "items", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), vi = wi(mi.prototype, "showButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), gi = wi(mi.prototype, "hideButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), pi = mi));
            var Ei;
            (0, hi.b_)(Ei = class FlashMessageElement extends HTMLElement {
                close() {
                    this.remove()
                }
            });
            var Si, Pi, zi, ki;

            function Ti(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function ji(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Ci(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Pi = class FavoriteWidgetElement extends HTMLElement {
                constructor() {
                    super(...arguments), Ti(this, "reloadUrl", zi, this), Ti(this, "toastEnabled", ki, this), ji(this, "httpClient", new I.eN)
                }
                send(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLFormElement)) return;
                    const o = {
                        body: new FormData(n),
                        method: "POST"
                    };
                    r.preventDefault(), this.httpClient.requestPromise(n.getAttribute("action") || "", o).then((r => this.reload(r.type, r.message)))
                }
                reload(r, n) {
                    this.httpClient.requestPromise(this.reloadUrl).then((o => {
                        this.replaceWith((0, P.rg)(o)), this.toastEnabled && se.Z.message({
                            type: r,
                            content: n
                        })
                    }))
                }
            }, zi = Ci(Pi.prototype, "reloadUrl", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ki = Ci(Pi.prototype, "toastEnabled", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Si = Pi));
            var _i, Li, Oi, xi;

            function Mi(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Ii(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Ai(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Li = class LogoLoaderElement extends HTMLElement {
                constructor() {
                    super(...arguments), Mi(this, "paths", Oi, this), Mi(this, "loopTime", xi, this), Ii(this, "stopped", !1), Ii(this, "interval", void 0)
                }
                connectedCallback() {
                    s.Z.on(a.Z3, this.onStart.bind(this)), s.Z.on(a.Mw, this.onStop.bind(this))
                }
                onStart() {
                    this.stopped = !1, this.interval = setInterval((() => {
                        this.markActivePath()
                    }), this.loopTime)
                }
                onStop() {
                    this.stopped = !0
                }
                markActivePath() {
                    const r = this.nextPathIndex;
                    if (this.paths.forEach((r => r.classList.remove("active"))), this.stopped) return void clearInterval(this.interval);
                    const n = this.paths[r];
                    n instanceof Element && n.classList.add("active")
                }
                get nextPathIndex() {
                    const r = this.paths,
                        n = r.findIndex((r => r.classList.contains("active")));
                    return n === r.length - 1 ? 0 : n + 1
                }
            }, Oi = Ai(Li.prototype, "paths", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), xi = Ai(Li.prototype, "loopTime", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 40
                }
            }), _i = Li));
            var Ri, Fi, $i, Ui, qi, Hi, Ni, Bi, Di, Vi, Zi, Wi, Ki, Yi, Qi;

            function Gi(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Ji(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Xi(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Fi = class SearchSuggestionElement extends HTMLElement {
                constructor() {
                    super(...arguments), Gi(this, "wrapper", $i, this), Gi(this, "input", Ui, this), Gi(this, "typeStore", qi, this), Gi(this, "typeLabel", Hi, this), Gi(this, "form", Ni, this), Gi(this, "results", Bi, this), Gi(this, "counter", Di, this), Gi(this, "advancedResult", Vi, this), Gi(this, "query", Zi, this), Gi(this, "loader", Wi, this), Gi(this, "cleaner", Ki, this), Gi(this, "icon", Yi, this), Gi(this, "types", Qi, this), Ji(this, "popup", !1), Ji(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    const r = this.input;
                    r && (r.addEventListener("input", (() => {
                        this.advancedResult.hidden = !this.inputFocus && !this.popup || this.countSymbol < this.minSymbol, this.counter.hidden = !this.inputFocus && !this.popup || this.countSymbol >= this.minSymbol, this.results.hidden = this.countSymbol < this.minSymbol, this.loader.hidden = this.countSymbol < this.minSymbol, this.cleaner.hidden = 0 === this.countSymbol, this.icon.hidden = 0 !== this.countSymbol, this.query.innerText = r.value, this.search()
                    })), r.addEventListener("focus", (() => {
                        this.open = !0, this.counter.hidden = this.countSymbol >= this.minSymbol, this.popup || (this.advancedResult.hidden = this.countSymbol < this.minSymbol, this.countSymbol >= this.minSymbol && (this.results.hidden = !1))
                    }))), document.addEventListener("click", this.onAway.bind(this)), this.addEventListener("click", this.onInside.bind(this)), this.addEventListener("touchstart", this.onBlur.bind(this), {
                        passive: !0
                    })
                }
                onInside(r) {
                    const n = r.target;
                    if (!(n instanceof Element)) return;
                    n.closest("[data-prepend]") && (this.open = !1, this.advancedResult.hidden = !0, this.counter.hidden = !0, this.results.hidden = !0);
                    const o = n.closest("[data-type]");
                    o instanceof HTMLElement && this.typeChange({
                        name: o.dataset.type || "",
                        label: o.dataset.label || ""
                    })
                }
                onAway(r) {
                    const n = r.target;
                    n instanceof Element && this !== n.closest("search-suggestion") && (this.open = !1, this.clear(!1))
                }
                onBlur(r) {
                    const n = r.target;
                    n instanceof Element && (n.closest(".body-overlay") || n.closest(".js-blur-input")) && this.input.blur()
                }
                search() {
                    if (this.httpClient.clear(), this.countSymbol < this.minSymbol) return;
                    const r = r => {
                        this.loader.hidden = !r, this.cleaner.hidden = r
                    };
                    r(!0), this.httpClient.requestPromise(this.action).then((n => {
                        r(!1), this.results.innerHTML = n
                    }))
                }
                typeChange(r) {
                    this.types.forEach((r => {
                        r.classList.remove("active")
                    })), this.types.filter((n => r.name === n.dataset.type)).forEach((r => r.classList.add("active")));
                    const n = this.typeStore.value;
                    this.typeStore.value = r.name, this.typeLabel.innerText = r.label, n !== r.name && this.search()
                }
                clear() {
                    let r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.input.value = "", this.input.dispatchEvent(new Event("input")), this.results.innerHTML = "", r && this.input.focus()
                }
                show() {
                    this.open = !0, this.popup = !0, this.input.focus(), Pe.Z.disableScroll(), Pe.Z.showOverlay(this), s.Z.emit(a.ho)
                }
                hide() {
                    this.open = !1, this.popup = !1, this.clear(), Pe.Z.enableScroll(), Pe.Z.hideOverlay(), s.Z.emit(a.yN)
                }
                get countSymbol() {
                    return this.input.value.length
                }
                get minSymbol() {
                    return parseInt(this.getAttribute("min-symbol"))
                }
                get inputFocus() {
                    return this.input === document.activeElement
                }
                set open(r) {
                    const n = this.wrapper.classList;
                    r ? n.add("open") : n.remove("open")
                }
                get action() {
                    const r = new URL(this.form.getAttribute("action") || "", location.origin),
                        n = new URLSearchParams(new FormData(this.form));
                    return r.search = n.toString(), r.toString()
                }
            }, $i = Xi(Fi.prototype, "wrapper", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ui = Xi(Fi.prototype, "input", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), qi = Xi(Fi.prototype, "typeStore", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Hi = Xi(Fi.prototype, "typeLabel", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ni = Xi(Fi.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Bi = Xi(Fi.prototype, "results", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Di = Xi(Fi.prototype, "counter", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Vi = Xi(Fi.prototype, "advancedResult", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Zi = Xi(Fi.prototype, "query", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Wi = Xi(Fi.prototype, "loader", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ki = Xi(Fi.prototype, "cleaner", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Yi = Xi(Fi.prototype, "icon", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Qi = Xi(Fi.prototype, "types", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ri = Fi));
            var er, tr, ir, rr, nr, or;
            o(7629);

            function sr(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function ar(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((tr = class SocialEntryElement extends HTMLElement {
                constructor() {
                    super(...arguments), sr(this, "formToggle", ir, this), sr(this, "counts", rr, this), sr(this, "toastEnabled", nr, this), sr(this, "toastPlacement", or, this)
                }
                connectedCallback() {
                    this.formToggle && this.formToggle.registerHandler(this.handle.bind(this))
                }
                handle(r) {
                    "count" in r && this.counts.forEach((n => n.innerText = r.count)), this.toastEnabled && se.Z.message({
                        type: r.type,
                        content: r.message,
                        placement: this.toastPlacement
                    })
                }
            }, ir = ar(tr.prototype, "formToggle", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), rr = ar(tr.prototype, "counts", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), nr = ar(tr.prototype, "toastEnabled", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), or = ar(tr.prototype, "toastPlacement", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ue.ug.BOTTOM_LEFT
                }
            }), er = tr));
            var lr;

            function cr(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }(0, hi.b_)(lr = class FastViewElement extends HTMLElement {
                constructor() {
                    super(...arguments), cr(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    document.addEventListener("click", (r => {
                        const n = r.target;
                        if (!(n instanceof HTMLElement)) return;
                        const o = n.closest("[data-fast-view]");
                        o instanceof HTMLElement && (this.show(o.dataset.fastView || ""), r.preventDefault())
                    }))
                }
                show(r) {
                    this.httpClient.requestPromise(r).then((r => {
                        this.innerHTML = r, this.classList.remove("closed"), this.querySelectorAll("details").forEach((r => {
                            r.addEventListener("toggle", (() => this.classList.toggle("open-details")))
                        })), this.isTouchDevice && Pe.Z.disableScroll()
                    }))
                }
                hide() {
                    this.classList.add("closed"), this.isTouchDevice && Pe.Z.enableScroll()
                }
                get isTouchDevice() {
                    return "ontouchstart" in document
                }
            });
            var ur, hr, dr, fr;

            function pr(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function mr(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function br(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((hr = class BookmarkWidgetElement extends HTMLElement {
                constructor() {
                    super(...arguments), pr(this, "reloadUrl", dr, this), pr(this, "button", fr, this), mr(this, "httpClient", new I.eN)
                }
                sendRequest(r) {
                    const n = r.currentTarget;
                    if (!(n instanceof HTMLFormElement)) return;
                    r.preventDefault();
                    const o = {
                        body: new FormData(n),
                        method: "POST"
                    };
                    this.button.classList.toggle("disabled"), this.httpClient.requestPromise(n.getAttribute("action") || "", o).then((() => this.reload()))
                }
                reload() {
                    this.httpClient.requestPromise(this.reloadUrl).then((r => this.replaceWith((0, P.rg)(r))))
                }
            }, dr = br(hr.prototype, "reloadUrl", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), fr = br(hr.prototype, "button", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ur = hr));
            var vr, gr, yr, wr, Er, Sr;

            function Pr(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function zr(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function kr(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((gr = class ChapterListElement extends HTMLElement {
                constructor() {
                    super(...arguments), Pr(this, "lists", yr, this), Pr(this, "sorts", wr, this), Pr(this, "chapters", Er, this), Pr(this, "histories", Sr, this), zr(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    this.addEventListener("submit", (r => {
                        const n = r.target;
                        n instanceof HTMLFormElement && n.closest("[data-history]") && (this.historyUpdate(n), r.preventDefault())
                    }))
                }
                historyUpdate(r) {
                    const n = {
                            body: new FormData(r),
                            method: "POST"
                        },
                        o = parseFloat(r.dataset.number),
                        s = r.classList.contains("is-current");
                    this.httpClient.requestPromise(r.getAttribute("action") || "", n).then((n => {
                        this.histories.forEach((n => {
                            n.classList.remove("is-read", "is-current"), s || r !== n || n.classList.add("is-current"), !s && o >= parseFloat(n.dataset.number) && n.classList.add("is-read");
                            const a = n.dataset,
                                l = n.classList.contains("is-read") ? a.titleRead : a.titleUnread;
                            (0, P.$G)(n, l)
                        })), se.Z.message({
                            type: n.type,
                            content: n.message
                        })
                    }))
                }
                orderByPublish(r) {
                    this.removeOrder(), this.cancelReverse(), this.markSelected(r.currentTarget)
                }
                orderByCreatedAt(r) {
                    this.removeOrder(), this.applyReverse(), this.markSelected(r.currentTarget)
                }
                orderByLikes(r) {
                    this.setOrderByKey("likes"), this.markSelected(r.currentTarget)
                }
                orderByComments(r) {
                    this.setOrderByKey("comments"), this.markSelected(r.currentTarget)
                }
                cancelReverse() {
                    this.lists.forEach((r => {
                        r.classList.remove("is-reverse")
                    }))
                }
                applyReverse() {
                    this.lists.forEach((r => {
                        r.classList.add("is-reverse")
                    }))
                }
                removeOrder() {
                    this.chapters.forEach((r => {
                        r.removeAttribute("style")
                    }))
                }
                setOrderByKey(r) {
                    let n = !1;
                    this.chapters.forEach((o => {
                        const s = o.dataset[r];
                        n || "0" === s || (n = !0), o.style.order = s
                    })), n ? this.applyReverse() : this.cancelReverse()
                }
                markSelected(r) {
                    this.sorts.forEach((r => r.classList.remove("selected"))), r.classList.add("selected")
                }
            }, yr = kr(gr.prototype, "lists", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), wr = kr(gr.prototype, "sorts", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Er = kr(gr.prototype, "chapters", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Sr = kr(gr.prototype, "histories", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), vr = gr));
            var Tr, jr, Cr, _r;

            function Lr(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Or(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function xr(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((jr = class StarRatingElement extends HTMLElement {
                constructor() {
                    super(...arguments), Lr(this, "stars", Cr, this), Lr(this, "submitButton", _r, this), Or(this, "httpClient", new I.eN)
                }
                sendRequest(r) {
                    const n = r.currentTarget;
                    if (!(n instanceof HTMLFormElement)) return;
                    const o = {
                        body: new FormData(n),
                        method: "POST"
                    };
                    this.httpClient.requestPromise(n.getAttribute("action") || "", o).then((r => this.replaceWith((0, P.rg)(r)))), r.preventDefault()
                }
                selected(r) {
                    this.submitButton.removeAttribute("disabled"), this.stars.forEach((r => {
                        r.classList.remove("active"), delete r.dataset.active
                    }));
                    for (const n of this.stars)
                        if (n.classList.add("active"), n === r.currentTarget) break
                }
                highlighted(r) {
                    this.unHighlighted(), this.stars.forEach((r => {
                        r.classList.contains("active") && (r.classList.remove("active"), r.dataset.active = "true")
                    }));
                    for (const n of this.stars)
                        if (n.classList.add("highlighted"), n === r.currentTarget) break
                }
                unHighlighted() {
                    this.stars.forEach((r => {
                        r.classList.remove("highlighted"), r.dataset.active && (r.classList.add("active"), delete r.dataset.active)
                    }))
                }
            }, Cr = xr(jr.prototype, "stars", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _r = xr(jr.prototype, "submitButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Tr = jr));
            var Mr, Ir, Ar, Rr, Fr;

            function $r(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Ur(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Ir = class InputResetElement extends HTMLElement {
                constructor() {
                    super(...arguments), $r(this, "input", Ar, this), $r(this, "button", Rr, this), $r(this, "eventType", Fr, this)
                }
                connectedCallback() {
                    const r = this.input;
                    r && r.addEventListener("input", (() => {
                        this.button.hidden = 0 === r.value.length
                    }))
                }
                reset() {
                    this.input.value = "", this.button.hidden = !0, this.input.dispatchEvent(new Event(this.eventType, {
                        bubbles: !0
                    }))
                }
            }, Ar = Ur(Ir.prototype, "input", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Rr = Ur(Ir.prototype, "button", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Fr = Ur(Ir.prototype, "eventType", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "change"
                }
            }), Mr = Ir));
            var qr, Hr, Nr, Br, Dr, Vr, Zr, Wr = o(9492),
                Kr = o(6184);

            function Yr(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Qr(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Gr(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            const Jr = "show",
                Xr = ".filter-content";
            (0, hi.b_)((Hr = class FilterFormElement extends HTMLElement {
                constructor() {
                    super(...arguments), Yr(this, "form", Nr, this), Yr(this, "frame", Br, this), Yr(this, "enabledSefUrl", Dr, this), Yr(this, "enabledAutoSubmit", Vr, this), Yr(this, "submitTimeout", Zr, this), Qr(this, "submitTimoutId", null), Qr(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    this.addEventListener("submit", (r => {
                        this.form === r.target && this.submit(r)
                    })), this.addEventListener("change", (r => {
                        const n = r.target;
                        n instanceof HTMLElement && (n.closest("[data-filter-sort]") ? this.form.dispatchEvent(new Event("submit", {
                            bubbles: !0
                        })) : this.enabledAutoSubmit && this.form === n.closest("form") && this.change(r))
                    })), this.frame && this.frame.addEventListener("turbo:before-frame-render", (r => {
                        let {
                            detail: n
                        } = r;
                        n.render = this.renderFrame
                    }))
                }
                change(r) {
                    this.submitTimoutId && clearTimeout(this.submitTimoutId), this.submitTimoutId = setTimeout((() => {
                        this.submit(r)
                    }), this.submitTimeout)
                }
                submit(r) {
                    const n = !this.frame && !this.enabledSefUrl;
                    n || r.preventDefault();
                    const o = new FormData(this.form);
                    this.enabledSefUrl && o.append("sef_url", "true");
                    const s = new URL(this.form.getAttribute("action") || "", window.location.origin);
                    s.search = new URLSearchParams(o).toString(), this.enabledSefUrl ? (this.httpClient.clear(), this.httpClient.requestPromise(s.toString()).then((r => {
                        this.frame ? this.promoteToFrameVisit(r) : window.location.href = r
                    }))) : this.frame ? this.promoteToFrameVisit(s.toString()) : this.form.requestSubmit(), r instanceof SubmitEvent && !n && this.isFixedContent && this.submitter === r.submitter && this.hide()
                }
                toggle() {
                    this.form.classList.toggle(Jr), this.updateScrollContent()
                }
                hide() {
                    this.form.classList.remove(Jr), this.updateScrollContent()
                }
                updateScrollContent() {
                    this.isFixedContent && (this.form.classList.contains(Jr) ? (Pe.Z.disableScroll(), Pe.Z.showOverlay()) : (Pe.Z.enableScroll(), Pe.Z.hideOverlay()))
                }
                renderFrame(r, n) {
                    (0, Wr.Z)(r, n, {
                        onBeforeElUpdated: (r, n) => (r.closest("form") && !r.closest("[data-filter-sort]") && (n.hidden = r.hidden, n instanceof HTMLInputElement || (n.classList = r.classList)), !r.hasAttribute("data-morphdom-ignore"))
                    })
                }
                promoteToFrameVisit(r) {
                    const n = document.createElement("a");
                    n.setAttribute("href", r), n.setAttribute("data-turbo", "true"), n.toggleAttribute("hidden", !0), this.frame.appendChild(n), n.click(), this.frame.removeChild(n)
                }
                get isFixedContent() {
                    const r = document.querySelector(Xr);
                    return !!r && "fixed" === getComputedStyle(r).position
                }
                get submitter() {
                    return this.form.querySelector("[type=submit]")
                }
            }, Nr = Gr(Hr.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Br = Gr(Hr.prototype, "frame", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Dr = Gr(Hr.prototype, "enabledSefUrl", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Vr = Gr(Hr.prototype, "enabledAutoSubmit", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), Zr = Gr(Hr.prototype, "submitTimeout", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 800
                }
            }), qr = Hr));
            var en, tn, rn, nn, on;

            function sn(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function an(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            const ln = "collapsed",
                cn = "limited";
            (0, hi.b_)((tn = class FilterGroupElement extends HTMLElement {
                constructor() {
                    super(...arguments), sn(this, "showButton", rn, this), sn(this, "items", nn, this), sn(this, "filterInput", on, this)
                }
                collapse() {
                    this.classList.toggle(ln)
                }
                show() {
                    this.showButton.hidden = !0, this.filterInput.hidden = !1, this.classList.add(cn), this.items.forEach((r => r.hidden = !1))
                }
            }, rn = an(tn.prototype, "showButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), nn = an(tn.prototype, "items", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), on = an(tn.prototype, "filterInput", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), en = tn));
            var un;

            function hn(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }(0, hi.b_)(un = class FilterInputElement extends HTMLElement {
                constructor() {
                    super(), hn(this, "currentQuery", null), hn(this, "debounceInputChange", void 0), hn(this, "boundFilterResults", void 0), this.debounceInputChange = r => {
                        this.filterResults(!0), r.stopPropagation()
                    }, this.boundFilterResults = r => {
                        this.filterResults(!1), r.stopPropagation()
                    }
                }
                static get observedAttributes() {
                    return ["aria-owns"]
                }
                attributeChangedCallback(r, n) {
                    n && "aria-owns" === r && this.filterResults(!1)
                }
                connectedCallback() {
                    const r = this.input;
                    r && (r.setAttribute("autocomplete", "off"), r.setAttribute("spellcheck", "false"), r.addEventListener("focus", this.boundFilterResults), r.addEventListener("change", this.boundFilterResults), r.addEventListener("input", this.debounceInputChange), r.value && this.filterResults(!1))
                }
                disconnectedCallback() {
                    const r = this.input;
                    r && (r.removeEventListener("focus", this.boundFilterResults), r.removeEventListener("change", this.boundFilterResults), r.removeEventListener("input", this.debounceInputChange))
                }
                filterResults() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const n = this.input;
                    if (!n) return;
                    const o = n.value.trim(),
                        s = this.getAttribute("aria-owns");
                    if (!s) return;
                    const a = document.getElementById(s);
                    if (!a) return;
                    const l = a.hasAttribute("data-filter-list") ? a : a.querySelector("[data-filter-list]");
                    if (!l) return;
                    if (r && this.currentQuery === o) return;
                    this.currentQuery = o;
                    let c = 0;
                    for (const r of Array.from(l.children)) {
                        if (!(r instanceof HTMLElement)) continue;
                        const n = this.getText(r),
                            s = this.matchSubstring(n, o);
                        r.hidden = !s, s && c++
                    }
                    this.toggleBlankslate(a, c > 0)
                }
                matchSubstring(r, n) {
                    return -1 !== r.toLowerCase().indexOf(n.toLowerCase())
                }
                getText(r) {
                    return ((r.querySelector("[data-filter-item-text]") || r).textContent || "").trim()
                }
                toggleBlankslate(r, n) {
                    const o = r.querySelector("[data-filter-empty-state]");
                    o instanceof HTMLElement && (o.hidden = n)
                }
                get input() {
                    const r = this.querySelector("input");
                    return r instanceof HTMLInputElement ? r : null
                }
            });
            var dn, fn, pn;
            const mn = "indeterminate",
                bn = "is-invalid";
            (0, hi.b_)((fn = class TriStateElement extends HTMLElement {
                constructor() {
                    super(...arguments),
                        function(r, n, o, s) {
                            o && Object.defineProperty(r, n, {
                                enumerable: o.enumerable,
                                configurable: o.configurable,
                                writable: o.writable,
                                value: o.initializer ? o.initializer.call(s) : void 0
                            })
                        }(this, "excludes", pn, this)
                }
                connectedCallback() {
                    this.addEventListener("change", (r => {
                        const n = r.target;
                        n instanceof HTMLInputElement && this.changeState(n)
                    }))
                }
                changeState(r) {
                    r.checked = !r.checked, r.checked || r.classList.contains(mn) ? r.checked && !r.classList.contains(mn) ? (r.classList.add(mn), r.classList.add(bn), this.exclude(r)) : (r.checked = !1, r.classList.remove(mn), r.classList.remove(bn), this.exclude(r)) : r.checked = !0
                }
                exclude(r) {
                    const n = r.value,
                        o = this.excludes.value.split(",").map((r => r.trim())).filter((r => 0 === r || r)),
                        s = o.indexOf(n); - 1 !== s ? o.splice(s, 1) : o.push(n), this.excludes.value = o.join(",")
                }
            }, pn = function(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(fn.prototype, "excludes", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), dn = fn));
            var vn, gn, yn, wn, En;

            function Sn(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Pn(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function zn(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((gn = class JumpPageElement extends HTMLElement {
                constructor() {
                    super(...arguments), Sn(this, "up", yn, this), Sn(this, "down", wn, this), Sn(this, "bg", En, this), Pn(this, "bgWidth", void 0), Pn(this, "afterFocus", !1), Pn(this, "shown", !1), Pn(this, "wasSet", !1), Pn(this, "was", 0)
                }
                connectedCallback() {
                    if ("ontouchstart" in document) return;
                    window.addEventListener("scroll", (() => this.update(!1))), window.addEventListener("focus", (() => this.updateFocus())), this.bgWidth = this.computedBgWidth(), this.addEventListener("mousedown", (r => this.mousedown(r))), this.addEventListener("mouseover", (r => this.mouseover(r))), this.addEventListener("mouseout", (r => this.mouseover(r)));
                    const r = new ResizeObserver((() => this.update(!0)));
                    document.body && r.observe(document.body), this.getAttribute("extra-offset") && this.classList.add("is-extra-offset")
                }
                update(r) {
                    if (r) {
                        const r = this.container;
                        if (r) {
                            const n = r.getBoundingClientRect();
                            this.style.width = n.left + "px", this.classList.toggle("is-hidden", n.left <= this.bgWidth)
                        }
                    }
                    const n = 200,
                        o = this.scrollTop,
                        s = this.was || o > n;
                    let a = 0,
                        l = null;
                    if (this.classList.contains("is-extra-offset") && (this.style.marginTop = this.extraOffset + "px"), s) {
                        if (this.shown || (this.style.display = "block", this.shown = !0), this.was && o > 500 && (this.was = 0), o > n ? (a = (o - n) / n, this.wasSet && (this.wasSet = !1, this.up.hidden = !1, this.down.hidden = !0, l = !0)) : (a = (n - o) / n, this.was && (this.wasSet || (this.wasSet = !0, this.up.hidden = !0, this.down.hidden = !1, l = !1))), null !== l) {
                            const r = this.classList.contains("is-hover");
                            this.classList.toggle("is-set", r && l)
                        }
                        this.style.opacity = String(Math.min(Math.max(a, 0), 1))
                    } else this.shown && (this.style.display = "none", this.shown = !1)
                }
                updateFocus() {
                    this.afterFocus = !0, setTimeout((() => this.afterFocus = !1), 10)
                }
                mousedown(r) {
                    if (!this.afterFocus)
                        if (this.wasSet && this.was) {
                            const r = this.was;
                            this.was = 0, this.scrollTop = r
                        } else this.was = this.scrollTop, this.scrollTop = 0;
                    r.stopPropagation()
                }
                mouseover(r) {
                    const n = "mouseover" === r.type && (r.pageX > 0 || r.clientX > 0);
                    this.classList.toggle("is-hover", n), this.classList.toggle("is-set", n && !this.wasSet)
                }
                computedBgWidth() {
                    let r = getComputedStyle(this.bg).width;
                    return r = r.replace("px", ""), Number(r)
                }
                set scrollTop(r) {
                    window.scrollTo({
                        top: r,
                        behavior: "auto"
                    })
                }
                get scrollTop() {
                    return window.scrollY
                }
                get extraOffset() {
                    const r = (this.getAttribute("extra-offset") || "").split(";"),
                        n = r => {
                            const n = r.offsetHeight,
                                o = window.innerHeight,
                                s = r.getBoundingClientRect();
                            return Math.max(0, s.top > 0 ? Math.min(n, o - s.top) : Math.min(s.bottom, o))
                        };
                    let o = 0,
                        s = 0;
                    if (r.forEach((r => {
                        const a = document.querySelector(r);
                        a instanceof HTMLElement && (a.classList.contains("header-sticky") ? s = n(a) : o += n(a))
                    })), s > 0) {
                        const r = this.scrollTop;
                        o += 0 === r ? s : o >= s ? Math.max(s - r, 0) : s - o
                    }
                    return o
                }
                get container() {
                    const r = this.getAttribute("aria-owns");
                    return r ? document.getElementById(r) : null
                }
            }, yn = zn(gn.prototype, "up", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), wn = zn(gn.prototype, "down", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), En = zn(gn.prototype, "bg", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), vn = gn));
            var kn, Tn, jn, Cn, _n, Ln, On, xn;

            function Mn(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function In(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function An(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Tn = class PostListElement extends HTMLElement {
                constructor() {
                    super(...arguments), Mn(this, "loader", jn, this), Mn(this, "icon", Cn, this), Mn(this, "form", _n, this), Mn(this, "input", Ln, this), Mn(this, "titleTab", On, this), Mn(this, "searchTab", xn, this), In(this, "submitTimoutId", null)
                }
                connectedCallback() {
                    this.input.addEventListener("input", (() => {
                        this.submitTimoutId && clearTimeout(this.submitTimoutId), this.submitTimoutId = setTimeout((() => {
                            this.form.requestSubmit()
                        }), 300)
                    })), this.addEventListener("turbo:before-fetch-request", (() => {
                        this.loader.hidden = !1, this.icon.toggleAttribute("hidden", !0)
                    })), this.addEventListener("turbo:before-fetch-response", (() => {
                        this.loader.hidden = !0, this.icon.toggleAttribute("hidden", !1)
                    }))
                }
                showSearch() {
                    this.searchTab.hidden = !1, this.titleTab.hidden = !0
                }
                hideSearch() {
                    this.searchTab.hidden = !0, this.titleTab.hidden = !1, this.input.value = "", this.form.requestSubmit()
                }
            }, jn = An(Tn.prototype, "loader", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Cn = An(Tn.prototype, "icon", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _n = An(Tn.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ln = An(Tn.prototype, "input", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), On = An(Tn.prototype, "titleTab", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), xn = An(Tn.prototype, "searchTab", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), kn = Tn));
            var Rn, Fn, $n, Un, qn, Hn = o(1711),
                Nn = o(4484),
                Bn = o(9817),
                Dn = o(1474);

            function Vn(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Zn(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Wn(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Fn = class PostEditorElement extends HTMLElement {
                constructor() {
                    super(...arguments), Vn(this, "uploadUrl", $n, this), Vn(this, "uploadError", Un, this), Vn(this, "medias", qn, this), Zn(this, "httpClient", new I.eN), Zn(this, "fileManager", void 0)
                }
                connectedCallback() {
                    this.fileManager = new Hn.p({
                        imageRegex: /(\.|\/)(jpg|png|jpeg)$/i,
                        imageUploadUrl: this.uploadUrl,
                        acceptImage: !0,
                        acceptArchive: !1,
                        maxFileSize: 104857600,
                        onProgress: this.onProgress.bind(this),
                        onFileLoad: this.onFileLoad.bind(this),
                        onFileInvalid: this.onFileInvalid.bind(this)
                    }), this.attachment && this.attachment.addEventListener("file-accepted", this.onFileAccepted.bind(this)), this.medias && Dn.ZP.create(this.medias, {
                        delay: 200,
                        delayOnTouchOnly: !0
                    }), (0, Bn.Z)()
                }
                onFileAccepted(r) {
                    r.detail.files.forEach((r => {
                        this.fileManager.addFile(r)
                    }))
                }
                onFileLoad(r) {
                    if (200 !== r.status) return;
                    const n = JSON.parse(r.response);
                    n.success && (this.medias.innerHTML += n.template, this.progressCheck()), n.success || (this.messageError(n.message), this.progressCheck())
                }
                onFileInvalid(r) {
                    this.messageError(this.uploadError.replace("%file%", r.name))
                }
                onProgress(r) {
                    this.progress && this.progress.setAttribute("percent", r.toString())
                }
                messageError(r) {
                    se.Z.message({
                        type: "error",
                        content: r,
                        autoHide: !1
                    })
                }
                progressCheck() {
                    this.fileManager.isUploaded() && this.progress instanceof Nn.A && this.progress.hide()
                }
                get attachment() {
                    return this.querySelector("file-attachment")
                }
                get progress() {
                    return this.querySelector("file-progress")
                }
            }, $n = Wn(Fn.prototype, "uploadUrl", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Un = Wn(Fn.prototype, "uploadError", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), qn = Wn(Fn.prototype, "medias", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Rn = Fn));
            var Kn, Yn, Qn;
            (0, hi.b_)((Yn = class PostMediaElement extends HTMLElement {
                constructor() {
                    super(...arguments),
                        function(r, n, o, s) {
                            o && Object.defineProperty(r, n, {
                                enumerable: o.enumerable,
                                configurable: o.configurable,
                                writable: o.writable,
                                value: o.initializer ? o.initializer.call(s) : void 0
                            })
                        }(this, "removeButton", Qn, this)
                }
                connectedCallback() {
                    this.removeButton && this.removeButton.addEventListener("click", (r => {
                        this.remove(), r.preventDefault()
                    }))
                }
            }, Qn = function(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(Yn.prototype, "removeButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Kn = Yn));
            var Gn;
            (0, hi.b_)(Gn = class FileAttachmentElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("dragenter", this.onDragenter.bind(this)), this.addEventListener("dragover", this.onDragenter.bind(this)), this.addEventListener("dragleave", this.onDragleave.bind(this)), this.addEventListener("drop", this.onDrop.bind(this)), this.addEventListener("change", this.onChange.bind(this))
                }
                attach(r) {
                    const n = r instanceof DataTransfer ? [...r.files] : [...r];
                    n.length && this.dispatchEvent(new CustomEvent("file-accepted", {
                        bubbles: !0,
                        detail: {
                            files: n
                        }
                    }))
                }
                onDragenter(r) {
                    const n = r.currentTarget;
                    if (!(n instanceof Element)) return;
                    const o = r.dataTransfer;
                    o && this._hasFile(o) && (o.dropEffect = "copy", n.setAttribute("hover", ""), r.stopPropagation(), r.preventDefault())
                }
                onDragleave(r) {
                    r.dataTransfer && (r.dataTransfer.dropEffect = "none");
                    const n = r.currentTarget;
                    n instanceof Element && n.removeAttribute("hover"), r.stopPropagation(), r.preventDefault()
                }
                onDrop(r) {
                    const n = r.currentTarget;
                    n instanceof Element && n.removeAttribute("hover");
                    const o = r.dataTransfer;
                    o && this._hasFile(o) && (this.attach(o), r.stopPropagation(), r.preventDefault())
                }
                onChange(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLInputElement)) return;
                    const o = n.files;
                    o && 0 !== o.length && (this.attach(o), n.value = "")
                }
                _hasFile(r) {
                    return Array.from(r.types).indexOf("Files") >= 0
                }
            });
            var Jn, Xn, eo, to;

            function io(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function ro(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            const no = new I.eN,
                oo = new IntersectionObserver((r => {
                    r.forEach((r => {
                        if (0 === r.intersectionRatio) return;
                        const n = r.target;
                        n instanceof so && n.reloadViews()
                    }))
                }));
            let so = (0, hi.b_)((Xn = class ViewsCounterElement extends HTMLElement {
                constructor() {
                    super(...arguments), io(this, "output", eo, this), io(this, "form", to, this)
                }
                connectedCallback() {
                    this.isReadOnly || oo.observe(this)
                }
                reloadViews() {
                    const r = {
                        body: new FormData(this.form),
                        method: "POST"
                    };
                    no.requestPromise(this.form.getAttribute("action") || "", r).then((r => {
                        this.output.innerText = r.views, oo.unobserve(this)
                    }))
                }
                get isReadOnly() {
                    return this.hasAttribute("readonly")
                }
            }, eo = ro(Xn.prototype, "output", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), to = ro(Xn.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Jn = Xn)) || Jn;
            var ao, lo, co;
            (0, hi.b_)((lo = class ImageViewerElement extends HTMLElement {
                constructor() {
                    super(...arguments),
                        function(r, n, o, s) {
                            o && Object.defineProperty(r, n, {
                                enumerable: o.enumerable,
                                configurable: o.configurable,
                                writable: o.writable,
                                value: o.initializer ? o.initializer.call(s) : void 0
                            })
                        }(this, "image", co, this)
                }
                connectedCallback() {
                    this.modal && this.modal.addEventListener("show.bs.modal", this.onShowModal.bind(this))
                }
                onShowModal(r) {
                    const n = r.relatedTarget;
                    this.setImage(n.dataset.viewerSrc || "", n.dataset.viewerAlt || "")
                }
                setImage(r, n) {
                    this.image.src = r, this.image.alt = n
                }
                get modal() {
                    return this.querySelector(".modal")
                }
            }, co = function(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(lo.prototype, "image", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ao = lo));
            o(5620);
            var uo = o(7563);
            const ho = "url",
                fo = "title",
                po = "img",
                mo = "desc";
            var bo, vo = {
                vk: {
                    url: "http://vkontakte.ru/share.php?",
                    vars: new Map([
                        [ho, "url"],
                        [fo, "title"],
                        [po, "image"],
                        [mo, "description"]
                    ])
                },
                ok: {
                    url: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&",
                    vars: new Map([
                        [ho, "st.shareUrl"],
                        [fo, "st.title"],
                        [po, "st.imageUrl"],
                        [mo, "st.description"]
                    ])
                },
                fb: {
                    url: "https://www.facebook.com/sharer/sharer.php?",
                    vars: new Map([
                        [ho, "p[url]"],
                        [fo, "p[title]"],
                        [po, "p[images][0]"],
                        [mo, "p[summary]"]
                    ])
                },
                twit: {
                    url: "http://twitter.com/share?",
                    vars: new Map([
                        [ho, "url"],
                        [fo, "text"]
                    ])
                },
                mail: {
                    url: "http://connect.mail.ru/share?",
                    vars: new Map([
                        [ho, "url"],
                        [fo, "title"],
                        [po, "imageurl"],
                        [mo, "description"]
                    ])
                }
            };

            function go(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }(0, hi.b_)(bo = class SocialSharerElement extends HTMLElement {
                constructor() {
                    super(...arguments), go(this, "locations", ["url", "img"])
                }
                connectedCallback() {
                    this.addEventListener("click", (r => {
                        const n = r.target;
                        if (!(n instanceof Element)) return;
                        const o = n.closest("[data-share]");
                        o instanceof HTMLElement && (this.share(o), r.preventDefault())
                    }))
                }
                share(r) {
                    const n = r.dataset.share,
                        o = vo[n];
                    if (!o) return console.warn(`[Sharer] Not found social with name "${n}"`);
                    const s = o.url + this._buildParams(o);
                    window.open(s, "", "toolbar=0,status=0,width=626,height=436")
                }
                _buildParams(r) {
                    let n = {};
                    return r.vars.forEach(((r, o) => {
                        let s = this.dataset[o];
                        void 0 !== s && (n[r] = this.locations.indexOf(o) >= 0 ? location.origin + s.replace(/\s+/g, "") : s)
                    })), (0, uo.stringify)(n, {
                        sort: !1
                    })
                }
            });
            var yo, wo, Eo, So, Po, zo, ko, To, jo, Co;

            function _o(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Lo(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Oo(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            let xo = (0, hi.b_)((wo = class ChatRoomsElement extends HTMLElement {
                constructor() {
                    super(...arguments), _o(this, "loader", Eo, this), _o(this, "icon", So, this), _o(this, "form", Po, this), _o(this, "input", zo, this), _o(this, "hideButton", ko, this), _o(this, "newButton", To, this), _o(this, "list", jo, this), _o(this, "items", Co, this), Lo(this, "submitTimoutId", null)
                }
                connectedCallback() {
                    this.input.addEventListener("input", (() => {
                        this.onInput()
                    })), this.addEventListener("turbo:before-fetch-request", (() => {
                        this.loader.hidden = !1, this.icon.toggleAttribute("hidden", !0)
                    })), this.addEventListener("turbo:before-fetch-response", (() => {
                        this.loader.hidden = !0, this.icon.toggleAttribute("hidden", !1)
                    }))
                }
                onInput() {
                    const r = this.input.value.length;
                    this.hideButton.hidden = 0 === r, this.newButton && (this.newButton.hidden = r > 0), this.submitTimoutId && clearTimeout(this.submitTimoutId), this.submitTimoutId = setTimeout((() => {
                        this.form.requestSubmit()
                    }), 300)
                }
                hideSearch() {
                    this.input.value = "", this.input.dispatchEvent(new Event("input"))
                }
                get isFilter() {
                    return "" !== this.input.value
                }
                get selectedItems() {
                    return this.items.filter((r => r.classList.contains("selected")))
                }
            }, Eo = Oo(wo.prototype, "loader", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), So = Oo(wo.prototype, "icon", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Po = Oo(wo.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), zo = Oo(wo.prototype, "input", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ko = Oo(wo.prototype, "hideButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), To = Oo(wo.prototype, "newButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), jo = Oo(wo.prototype, "list", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Co = Oo(wo.prototype, "items", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), yo = wo)) || yo;
            var Mo;
            const Io = new I.eN({});
            let Ao = (0, hi.b_)(Mo = class ChatMessageElement extends HTMLElement {
                connectedCallback() {
                    this.dispatchEvent(new CustomEvent("chat-message:add", {
                        bubbles: !0
                    })), this.updateSameAuthor();
                    const r = this.nextElementSibling;
                    r instanceof ChatMessageElement && r.updateSameAuthor(), this.readUrl && Io.request(this.readUrl, {
                        method: "POST"
                    })
                }
                disconnectedCallback() {
                    document.dispatchEvent(new CustomEvent("chat-message:remove", {
                        bubbles: !0,
                        detail: {
                            message: this
                        }
                    }))
                }
                updateSameAuthor() {
                    const r = this.previousElementSibling;
                    r instanceof ChatMessageElement && this.classList.toggle("is-same-author", this.isSameAuthor(r))
                }
                isAnotherDay(r) {
                    return r.publishDate !== this.publishDate
                }
                isSameAuthor(r) {
                    return !this.isSystem && !r.isSystem && (!this.isAnotherDay(r) && this.participantId === r.participantId)
                }
                get isSystem() {
                    return this.classList.contains("is-system")
                }
                get participantId() {
                    return this.getAttribute("participant-id") || ""
                }
                get publishDate() {
                    return this.getAttribute("publish-date") || ""
                }
                get messageId() {
                    return this.getAttribute("message-id") || ""
                }
                get replyUrl() {
                    return this.getAttribute("reply-url") || ""
                }
                get editUrl() {
                    return this.getAttribute("edit-url") || ""
                }
                get readUrl() {
                    return this.getAttribute("read-url") || ""
                }
            }) || Mo;
            var Ro, Fo, $o, Uo, qo, Ho, No, Bo, Do, Vo, Zo, Wo, Ko;

            function Yo(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Qo(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function Go(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Fo = class ChatDialogElement extends HTMLElement {
                constructor() {
                    super(...arguments), Yo(this, "pager", $o, this), Yo(this, "formFrame", Uo, this), Yo(this, "removeButton", qo, this), Yo(this, "editButton", Ho, this), Yo(this, "replyButton", No, this), Yo(this, "previewCount", Bo, this), Yo(this, "messageList", Do, this), Yo(this, "panelActions", Vo, this), Yo(this, "panelEditor", Zo, this), Yo(this, "days", Wo, this), Yo(this, "messages", Ko, this), Qo(this, "shouldScroll", !1)
                }
                connectedCallback() {
                    this.scrollMessagesToBottom(), this.messageList.addEventListener("scroll", this.onScrollHandle.bind(this)), document.addEventListener("chat-message:remove", this.onMessageRemove.bind(this)), this.addEventListener("chat-message:add", this.onMessageAdd.bind(this)), this.addEventListener("click", this.onInside.bind(this)), this.addEventListener("turbo:frame-render", (r => {
                        this.formFrame === r.target && this.unSelectedMessages()
                    }))
                }
                onInside(r) {
                    const n = r.target;
                    if (!(n instanceof Element)) return;
                    const o = n.closest("chat-message");
                    o instanceof Ao && this.selectedToggle(o)
                }
                onMessageRemove() {
                    this.updateElements(), this.days.forEach((r => {
                        this.messagesByDate(r.dataset.date || "").length || r.remove()
                    }));
                    let r = null;
                    this.messages.forEach((n => {
                        null === r ? n.classList.remove("is-same-author") : n.classList.toggle("is-same-author", n.isSameAuthor(r)), r = n
                    }))
                }
                onMessageAdd() {
                    const {
                        scrollHeight: r,
                        clientHeight: n
                    } = this.messageList;
                    n >= r && (this.shouldScroll = !0), this.shouldScroll && this.scrollMessagesToBottom()
                }
                onScrollHandle() {
                    const {
                        scrollTop: r,
                        scrollHeight: n,
                        clientHeight: o,
                        offsetHeight: s,
                        offsetTop: a
                    } = this.messageList;
                    this.shouldScroll = o >= n || Math.abs(r + s - n) < 1, 0 === r && this.pager && (this.pager.hidden = !1, this.pager.click());
                    const l = new Map;
                    this.days.forEach((r => {
                        const n = r.offsetTop - a,
                            o = l.get(n);
                        o ? o.push(r) : l.set(n, [r]), r.classList.contains("is-stuck-below") && r.classList.remove("is-stuck-below")
                    }));
                    for (const r of l.values()) r.length > 1 && (r.splice(-1), r.forEach((r => {
                        r.classList.add("is-stuck-below")
                    })))
                }
                selectedToggle(r) {
                    r.isSystem || (r.classList.toggle("selected"), this.updateElements())
                }
                unSelectedMessages() {
                    this.selectedMessages.forEach((r => r.classList.remove("selected"))), this.updateElements()
                }
                updateElements() {
                    this.updatePreviewCount(), this.updatePanel(), this.updateRemoveButton(), this.updateReplyButton(), this.updateEditButton()
                }
                updatePanel() {
                    const r = this.selectedMessages.length;
                    this.panelActions.hidden = !r, this.panelEditor.hidden = r > 0
                }
                updateRemoveButton() {
                    const r = [...this.selectedMessages].map((r => r.messageId)),
                        n = (0, uo.stringify)({
                            ids: r
                        }, {
                            arrayFormat: "bracket"
                        });
                    let o = new URL(this.removeButton.dataset.path || "", window.location.origin);
                    o = o.toString(), o += o.includes("?") ? `&${n}` : `?${n}`, this.removeButton.href = o
                }
                updateEditButton() {
                    const r = this.selectedMessages.length;
                    if (this.editButton.hidden = r > 1, 1 === r) {
                        const r = this.selectedMessages[0];
                        this.editButton.href = r.editUrl, this.editButton.hidden = !r.editUrl
                    }
                }
                updateReplyButton() {
                    const r = this.selectedMessages.length;
                    if (this.replyButton.hidden = r > 1, 1 === r) {
                        const r = this.selectedMessages[0];
                        this.replyButton.href = r.replyUrl
                    }
                }
                updatePreviewCount() {
                    const r = JSON.parse(this.previewCount.dataset.declension) || [],
                        n = this.selectedMessages.length;
                    this.previewCount.innerText = `${n} ${(0,P.Fm)(n,r)}`
                }
                scrollMessagesToBottom() {
                    const {
                        scrollHeight: r,
                        clientHeight: n
                    } = this.messageList;
                    r >= n && (this.messageList.scrollTop = r - n)
                }
                messagesByDate(r) {
                    return this.messages.filter((n => r === n.publishDate))
                }
                get selectedMessages() {
                    return this.messages.filter((r => r.classList.contains("selected")))
                }
            }, $o = Go(Fo.prototype, "pager", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Uo = Go(Fo.prototype, "formFrame", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), qo = Go(Fo.prototype, "removeButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ho = Go(Fo.prototype, "editButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), No = Go(Fo.prototype, "replyButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Bo = Go(Fo.prototype, "previewCount", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Do = Go(Fo.prototype, "messageList", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Vo = Go(Fo.prototype, "panelActions", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Zo = Go(Fo.prototype, "panelEditor", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Wo = Go(Fo.prototype, "days", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ko = Go(Fo.prototype, "messages", [hi.tY], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ro = Fo));
            var Jo, Xo, es, ts, is;

            function rs(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function ns(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function os(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Xo = class ChatBoxElement extends HTMLElement {
                constructor() {
                    super(...arguments), rs(this, "streamSourceUrl", es, this), rs(this, "aside", ts, this), rs(this, "main", is, this), ns(this, "eventSource", void 0)
                }
                connectedCallback() {
                    this.eventSource = new EventSource(this.streamSourceUrl, {
                        withCredentials: !0
                    }), (0, Kr.c$)(this.eventSource)
                }
                disconnectedCallback() {
                    this.eventSource.close(), (0, Kr.kK)(this.eventSource)
                }
                showAside() {
                    this.aside.hidden = !1, this.main.hidden = !0
                }
                showMain() {
                    this.aside.hidden = !0, this.main.hidden = !1
                }
            }, es = os(Xo.prototype, "streamSourceUrl", [hi.Ps], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ts = os(Xo.prototype, "aside", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), is = os(Xo.prototype, "main", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Jo = Xo));
            var ss, as, ls, cs, us, hs, ds, fs = o(2441),
                ps = o.n(fs);

            function ms(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function bs(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function vs(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((as = class ChatEditorElement extends HTMLElement {
                constructor() {
                    super(...arguments), ms(this, "form", ls, this), ms(this, "content", cs, this), ms(this, "submitButton", us, this), ms(this, "reply", hs, this), ms(this, "replyPreview", ds, this), bs(this, "contentMaxHeight", 80)
                }
                connectedCallback() {
                    (0, Bn.Z)(), ps().bind(["enter"], (() => {
                        this.content.matches(":focus") && "" !== this.content.value.trim() && !this.isTouchDevice && (this.form.requestSubmit(), this.content.blur(), this.content.style.height = "", this.content.value = "")
                    }));
                    const r = setInterval((() => {
                        if (this.content.scrollHeight) {
                            if (this.content.dispatchEvent(new Event("input")), this.content.value) {
                                this.content.focus();
                                const r = this.content.value;
                                this.content.value = "", this.content.value = r, this.scrollContentToBottom()
                            }
                            clearInterval(r)
                        }
                    }));
                    this.content.addEventListener("input", (() => {
                        this.content.style.height = "", this.content.style.height = Math.min(this.content.scrollHeight, this.contentMaxHeight) + "px", this.submitButton.disabled = !this.content.value.length
                    }))
                }
                undoReply() {
                    this.reply.value = "", this.replyPreview && this.replyPreview.remove()
                }
                scrollContentToBottom() {
                    const {
                        scrollHeight: r,
                        clientHeight: n
                    } = this.content;
                    r >= n && (this.content.scrollTop = r - n)
                }
                get isTouchDevice() {
                    return "ontouchstart" in document
                }
            }, ls = vs(as.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), cs = vs(as.prototype, "content", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), us = vs(as.prototype, "submitButton", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), hs = vs(as.prototype, "reply", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ds = vs(as.prototype, "replyPreview", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ss = as));
            var gs, ys, ws, Es, Ss, Ps, zs, ks, Ts;

            function js(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function Cs(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function _s(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            Kr.Q$.messageDayPublish = function() {
                const r = this.templateContent.firstElementChild;
                document.getElementById(r.id) || this.targetElements.forEach((n => n.before(r)))
            }, Kr.Q$.roomEdit = function() {
                const r = this.templateContent.firstElementChild;
                this.targetElements.forEach((n => {
                    n.innerHTML = r.innerHTML
                }))
            }, Kr.Q$.roomPublish = function() {
                const r = this.templateContent.firstElementChild,
                    n = document.querySelector("chat-rooms");
                if (!(n instanceof xo)) return;
                const o = this.targetElements;
                o.length || n.isFilter || (r.classList.toggle("selected", !n.selectedItems.length), n.list.prepend(r)), o.forEach((o => {
                    o.innerHTML = r.innerHTML, n.list.prepend(o)
                }))
            };
            (0, hi.b_)((ys = class UserStatusElement extends HTMLElement {
                constructor() {
                    super(...arguments), js(this, "toggler", ws, this), js(this, "picker", Es, this), js(this, "emoji", Ss, this), js(this, "emojiEmpty", Ps, this), js(this, "emojiStore", zs, this), js(this, "form", ks, this), js(this, "message", Ts, this), Cs(this, "httpClient", new I.eN)
                }
                connectedCallback() {
                    (0, Bn.Z)(), this.addEventListener("submit", (r => {
                        r.preventDefault()
                    })), document.addEventListener("click", this.onPickerAutoClose.bind(this)), s.Z.on(a.UA, this.onEmojiSelect.bind(this))
                }
                onEmojiSelect(r) {
                    const n = r.character;
                    this.setEmoji(n.shortname, n.emoji)
                }
                onPickerAutoClose(r) {
                    const n = r.target;
                    n instanceof HTMLElement && (this.toggler.contains(n) || this.picker.contains(n) || (this.picker.hidden = !0))
                }
                togglePicker() {
                    this.picker.hidden = !this.picker.hasAttribute("hidden")
                }
                submit() {
                    this.submitForm()
                }
                reset() {
                    this.submitForm(!0)
                }
                submitForm() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const n = {
                        method: "POST",
                        body: new FormData(this.form),
                        query: {}
                    };
                    r && (n.query.reset = "true"), this.httpClient.requestPromise(this.form.getAttribute("action") || "", n).then((r => {
                        this.replaceWith((0, P.rg)(r))
                    })).catch((r => {
                        if (400 !== r.status) return;
                        const n = (0, P.rg)(r.data).firstElementChild;
                        n instanceof UserStatusElement && (this.form.innerHTML = n.form.innerHTML, (0, Bn.Z)())
                    }))
                }
                suggest(r) {
                    const n = r.currentTarget;
                    n instanceof HTMLButtonElement && (this.message.value = n.dataset.message || "", this.setEmoji(n.value, n.dataset.emoji || ""))
                }
                setEmoji(r, n) {
                    const o = document.createElement("emoji-item");
                    o.innerText = n, o.classList.add("emoji"), o.setAttribute("alias", r), this.emojiStore.value = r, this.emojiEmpty.hidden = !0, this.picker.hidden = !0, this.emoji.hidden = !1, this.emoji.innerHTML = "", this.emoji.append(o)
                }
            }, ws = _s(ys.prototype, "toggler", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Es = _s(ys.prototype, "picker", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ss = _s(ys.prototype, "emoji", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ps = _s(ys.prototype, "emojiEmpty", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), zs = _s(ys.prototype, "emojiStore", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ks = _s(ys.prototype, "form", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ts = _s(ys.prototype, "message", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), gs = ys));
            var Ls, Os, xs, Ms;

            function Is(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function As(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }(0, hi.b_)((Os = class UploadPreviewElement extends HTMLElement {
                constructor() {
                    super(...arguments), Is(this, "name", xs, this), Is(this, "image", Ms, this)
                }
                connectedCallback() {
                    this.file && this.file.addEventListener("change", this.onUpdateMeta.bind(this))
                }
                onUpdateMeta(r) {
                    const n = r.target.files[0];
                    if (void 0 === typeof FileReader) return;
                    const o = new FileReader;
                    o.readAsDataURL(n), o.onload = () => {
                        this.name.innerText = n.name;
                        const r = o.result;
                        "string" == typeof r && (this.image.style.backgroundImage = `url("${r}")`)
                    }
                }
                get file() {
                    return this.querySelector("input[type=file]")
                }
            }, xs = As(Os.prototype, "name", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ms = As(Os.prototype, "image", [hi.Vz], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Ls = Os));
            class Rs {
                onClick(r) {}
                onBeforeVisit(r) {}
                onVisit(r) {}
                onSubmitStart(r) {}
                onBeforeFetchRequest(r) {}
                onBeforeFetchResponse(r) {}
                onSubmitEnd(r) {}
                onBeforeCache(r) {}
                onBeforeRender(r) {}
                onBeforeStreamRender(r) {}
                onRender(r) {}
                onLoad(r) {}
                onBeforeFrameRender(r) {}
                onFrameRender(r) {}
                onFrameLoad(r) {}
                onFrameMissing(r) {}
                onFetchRequestError(r) {}
            }
            var Fs = new class extends Rs {
                onBeforeFetchRequest(r) {
                    const {
                        fetchOptions: n
                    } = r.detail, o = n.headers["Turbo-Frame"];
                    if (!o) return;
                    const s = document.getElementById(o);
                    if (!s) return;
                    const a = s.dataset.turboRedirect;
                    a && (n.headers["Turbo-Frame-Redirect"] = a)
                }
                onBeforeFetchResponse(r) {
                    const {
                        fetchResponse: n
                    } = r.detail, o = n.response.headers.get("Turbo-Frame-Redirect"), s = n.response.headers.get("Turbo-Location");
                    if (s) {
                        if ("visit" !== o && "location" !== o) throw new Error(`Not correct type redirect "${o}". Available values: "visit", "location".`);
                        "location" === o ? window.location.href = s : (Kr.Fs.clear(), Kr.Vn(s)), r.preventDefault()
                    }
                }
            };
            var $s = new class extends Rs {
                onSubmitEnd(r) {
                    const {
                        submitter: n
                    } = r.detail.formSubmission;
                    if (!n || !n.closest('[data-turbo-dismiss="modal"]')) return;
                    const o = n.closest(".modal");
                    o instanceof HTMLElement && this.hideModal(o)
                }
                hideModal(r) {
                    M.Z.getOrCreateInstance(r).hide()
                }
            };

            function Us(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            var qs = new class extends Rs {
                constructor() {
                    super(...arguments), Us(this, "shouldScroll", !1)
                }
                onClick(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLElement)) return;
                    const o = n.closest("[data-turbo-pagination]");
                    o && "true" === o.getAttribute("data-turbo-pagination") && (this.shouldScroll = !0)
                }
                onFrameRender(r) {
                    this.shouldScroll && (window.scrollTo(0, 0), this.shouldScroll = !1)
                }
            };

            function Hs(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            var Ns = new class extends Rs {
                constructor() {
                    super(...arguments), Hs(this, "timeoutId", null)
                }
                onBeforeFetchRequest(r) {
                    const n = r.target;
                    n instanceof HTMLElement && "true" === n.getAttribute("data-turbo-progress-bar") && (this.timeoutId || this.progressBar.setValue(0), this.timeoutId = window.setTimeout((() => {
                        this.progressBar.show()
                    }), Kr.nP.progressBarDelay))
                }
                onBeforeFetchResponse(r) {
                    this.timeoutId && (window.clearTimeout(this.timeoutId), this.progressBar.hide(), this.timeoutId = null)
                }
                get progressBar() {
                    return Kr.ry.delegate.adapter.progressBar
                }
            };

            function Bs(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            var Ds = new class extends Rs {
                constructor() {
                    super(...arguments), Bs(this, "selector", null)
                }
                onClick(r) {
                    const n = r.target;
                    if (!(n instanceof HTMLElement)) return;
                    const o = n.closest("[data-turbo-scroll-into-view]");
                    null !== o && (this.selector = o.getAttribute("data-turbo-scroll-into-view"))
                }
                onFrameRender(r) {
                    if (this.selector) {
                        const r = document.querySelector(this.selector);
                        this.selector = null, r && r.scrollIntoView({
                            behavior: "instant",
                            block: "start"
                        })
                    }
                }
            };
            const Vs = [Fs, $s, qs, Ns, Ds];
            var Zs;
            const Ws = {
                    POLYFILL: 5,
                    VUE: 10,
                    DEFAULT: 15
                },
                Ks = (Zs = class r {
                    static boot() {
                        r.listeners.sort(((r, n) => r[1] - n[1])), r.listeners.forEach((r => {
                            r[0]()
                        })), s.Z.emit(a.dR)
                    }
                    static onLoad(n) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ws.DEFAULT;
                        r.listeners.push([n, o])
                    }
                }, function(r, n, o) {
                    (n = function(r) {
                        var n = function(r, n) {
                            if ("object" != typeof r || null === r) return r;
                            var o = r[Symbol.toPrimitive];
                            if (void 0 !== o) {
                                var s = o.call(r, n || "default");
                                if ("object" != typeof s) return s;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === n ? String : Number)(r)
                        }(r, "string");
                        return "symbol" == typeof n ? n : String(n)
                    }(n)) in r ? Object.defineProperty(r, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[n] = o
                }(Zs, "listeners", [
                    [() => {
                        c().polyfill()
                    }, Ws.POLYFILL],
                    [() => {
                        h().config.ignoredElements = ["thread-comment", "emoji-item", "member-opener", "text-expandable", "route-page", "social-entry", "form-toggle", "scan-favorite"], h().filter("path", m), h().filter("trans", w), h().filter("transChoice", E), h().directive("tooltip", z), h().use(f());
                        (new T).process(), de(), s.Z.on(a.O1, de)
                    }, Ws.VUE],
                    [() => {
                        window.customElements.define("emoji-item", Qt), window.customElements.define("member-opener", Gt), window.customElements.define("text-expandable", Xt), window.customElements.define("theme-switch", ci), window.customElements.define("auto-complete", ui.Z)
                    }, Ws.DEFAULT],
                    [() => {
                        const r = {
                            "turbo:click": "onClick",
                            "turbo:before-visit": "onBeforeVisit",
                            "turbo:visit": "onVisit",
                            "turbo:submit-start": "onSubmitStart",
                            "turbo:before-fetch-request": "onBeforeFetchRequest",
                            "turbo:before-fetch-response": "onBeforeFetchResponse",
                            "turbo:submit-end": "onSubmitEnd",
                            "turbo:before-cache": "onBeforeCache",
                            "turbo:before-render": "onBeforeRender",
                            "turbo:before-stream-render": "onBeforeStreamRender",
                            "turbo:render": "onRender",
                            "turbo:load": "onLoad",
                            "turbo:before-frame-render": "onBeforeFrameRender",
                            "turbo:frame-render": "onFrameRender",
                            "turbo:frame-load": "onFrameLoad",
                            "turbo:frame-missing": "onFrameMissing",
                            "turbo:fetch-request-error": "onFetchRequestError"
                        };
                        for (let [n, o] of Object.entries(r)) document.addEventListener(n, (r => {
                            Vs.forEach((n => n[o](r)))
                        }))
                    }, Ws.DEFAULT],
                    [() => {
                        const r = document.querySelector("body"),
                            n = document.querySelector("html");
                        new S.Z(r, {
                            animation: !1,
                            selector: '[data-bs-toggle="tooltip"], .js-toggle-tooltip',
                            html: !0,
                            trigger: "hover"
                        }), new fe.Z(n, {
                            selector: '[data-bs-toggle="popover"], .js-toggle-popover',
                            html: !0,
                            trigger: "focus"
                        });
                        S.Z.Default.allowList["*"].push(/^.*$/i);
                        pe.Z.Default.popperConfig = r => (r.modifiers.push({
                            name: "flip",
                            enabled: !1
                        }), r), s.Z.emit(a.Er)
                    }, Ws.DEFAULT],
                    [() => {
                        Ht.fn.select2.defaults.set("theme", "bootstrap4"), Ht.fn.select2.defaults.set("language", "ru"), Ht.fn.select2.defaults.set("width", null), new Ft, new qt
                    }, Ws.DEFAULT],
                    [() => {
                        ! function() {
                            const r = Se();
                            r && window.history.replaceState(null, "", r)
                        }(), new Ie, new qe, new Ke, new Ge, new it, new nt, new at, new ct, new dt, new gt, new Tt, new It
                    }, Ws.DEFAULT]
                ]), Zs)
        },
        208: function(r, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return d
                }
            });
            var s = o(6039);

            function a(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class l {
                constructor(r, n, o) {
                    a(this, "httpClient", void 0), a(this, "container", void 0), a(this, "input", void 0), a(this, "results", void 0), a(this, "destroyEvents", void 0), this.container = r, this.input = n, this.results = o, this.httpClient = new s.eN, this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false");
                    const l = this.onInputChange.bind(this),
                        c = this.onInputFocus.bind(this),
                        u = this.onKeydown.bind(this),
                        h = this.onChoose.bind(this),
                        d = this.onClickAway.bind(this);
                    this.input.addEventListener("keydown", u), this.input.addEventListener("focus", c), this.input.addEventListener("input", l), this.results.addEventListener("click", h), document.addEventListener("click", d), this.destroyEvents = () => {
                        this.input.removeEventListener("keydown", u), this.input.removeEventListener("focus", c), this.input.removeEventListener("input", l), this.results.removeEventListener("click", h), document.removeEventListener("click", d)
                    }
                }
                destroy() {
                    this.destroyEvents()
                }
                onClickAway(r) {
                    if (!(r.target instanceof Element)) return;
                    r.target.closest("auto-complete") !== this.container && (this.container.open = !1)
                }
                onChoose(r) {
                    if (!(r.target instanceof Element)) return;
                    const n = r.target.closest("li");
                    n && this.choose(n)
                }
                onKeydown(r) {
                    "Escape" === r.key && this.container.open && (this.container.open = !1, r.stopPropagation(), r.preventDefault())
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                fetchResults() {
                    const r = this.input.value.trim();
                    if (!r) return void(this.container.open = !1);
                    const n = this.container.src;
                    if (!n) return;
                    const o = {
                        method: "GET",
                        query: {
                            q: r
                        }
                    };
                    this.httpClient.clear(), this.httpClient.requestPromise(n, o).then((r => {
                        this.results.innerHTML = r, this.container.open = !!this.results.querySelectorAll("li").length
                    }))
                }
                choose(r) {
                    if (!r.hasAttribute("data-value")) return;
                    const n = r.getAttribute("data-value") || r.textContent;
                    this.container.open = !1, this.container.value = n
                }
                open() {
                    this.results.hidden && (this.results.hidden = !1)
                }
                close() {
                    this.results.hidden || (this.results.hidden = !0)
                }
            }

            function c(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class u extends CustomEvent {
                constructor(r, n) {
                    super(r, n), c(this, "relatedTarget", void 0), this.relatedTarget = n.relatedTarget
                }
            }
            const h = new WeakMap;
            class AutocompleteElement extends HTMLElement {
                connectedCallback() {
                    const r = this.getAttribute("for");
                    if (!r) return;
                    const n = this.querySelector("input"),
                        o = document.getElementById(r);
                    n instanceof HTMLInputElement && o && h.set(this, new l(this, n, o))
                }
                disconnectedCallback() {
                    const r = h.get(this);
                    r && (r.destroy(), h.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(r) {
                    this.setAttribute("src", r)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(r) {
                    this.setAttribute("value", r)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(r) {
                    r ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(r, n, o) {
                    if (n === o) return;
                    const s = h.get(this);
                    if (s) switch (r) {
                        case "open":
                            null === o ? s.close() : s.open();
                            break;
                        case "value":
                            null !== o && (s.input.value = o, this.dispatchEvent(new u("autocomplete-change", {
                                bubbles: !0,
                                relatedTarget: s.input
                            })))
                    }
                }
            }
            var d = AutocompleteElement
        },
        7152: function(r, n) {
            "use strict";
            n.Z = new class {
                showOverlay() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (this.overlay) return;
                    let n = document.body;
                    if (r instanceof HTMLElement && (n = r), null !== n) {
                        const r = document.createElement("div");
                        r.classList.add("body-overlay", "show"), n.appendChild(r)
                    }
                }
                hideOverlay() {
                    const r = this.overlay;
                    r && (r.classList.remove("show"), r.remove())
                }
                disableScroll() {
                    const r = document.body;
                    r && !r.classList.contains("no-scroll") && r.classList.add("no-scroll")
                }
                enableScroll() {
                    const r = document.body;
                    r && r.classList.contains("no-scroll") && r.classList.remove("no-scroll")
                }
                get overlay() {
                    return document.querySelector(".body-overlay:not([data-static])")
                }
            }
        },
        8150: function(r, n) {
            "use strict";
            n.Z = new class {
                set(r, n, o, s, a, l) {
                    let c = encodeURIComponent(r) + "=" + encodeURIComponent(n) + ";";
                    if (o)
                        if ("number" == typeof o) {
                            c += "expires=" + new Date((new Date).getTime() + 1e3 * o * 60 * 60 * 24).toUTCString() + ";"
                        } else c += "expires=" + o.toUTCString() + ";";
                    s || (s = "/"), c += "path=" + s + ";", a && (c += "domain=" + a + ";"), l && (c += "secure;"), document.cookie = c
                }
                remove(r, n, o) {
                    this.set(r, "", -1, n, o)
                }
                check(r) {
                    if ("undefined" == typeof document) return !1;
                    r = encodeURIComponent(r);
                    return new RegExp("(?:^" + r + "|;\\s*" + r + ")=(.*?)(?:;|$)", "g").test(document.cookie)
                }
                get(r) {
                    if (!1 === this.check(r)) return "";
                    r = encodeURIComponent(r);
                    const n = new RegExp("(?:^" + r + "|;\\s*" + r + ")=(.*?)(?:;|$)", "g").exec(document.cookie);
                    return decodeURIComponent(null !== n ? n[1] : "")
                }
            }
        },
        5084: function(r, n) {
            "use strict";

            function o(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            n.Z = new class {
                constructor() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, "events", void 0), this.events = r
                }
                on(r, n) {
                    ("string" == typeof r ? [r] : r).forEach((r => {
                        (this.events[r] || (this.events[r] = [])).push(n)
                    }))
                }
                off(r, n) {
                    this.events[r] && this.events[r].splice(this.events[r].indexOf(n) >>> 0, 1)
                }
                emit(r, n) {
                    (this.events[r] || []).slice().map((r => {
                        r(n)
                    })), (this.events["*"] || []).slice().map((o => {
                        o(r, n)
                    }))
                }
            }
        },
        6039: function(r, n, o) {
            "use strict";
            o.d(n, {
                eN: function() {
                    return m
                }
            });
            var s = o(5084),
                a = o(570),
                l = o(2593);

            function c(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class u {
                constructor(r, n) {
                    c(this, "alive", void 0), c(this, "requestPromise", void 0), c(this, "abortController", void 0), this.requestPromise = r, this.abortController = n, this.alive = !0
                }
                cancel() {
                    this.alive = !1, this.abortController?.abort()
                }
            }

            function h(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class d extends Error {
                constructor(r, n, o) {
                    super(o), h(this, "response", void 0), h(this, "data", void 0), this.name = "RequestError", this.data = r, this.response = n
                }
                get status() {
                    return this.response.status
                }
            }
            var f = o(7563);

            function p(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class m {
                constructor() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    p(this, "activeRequests", {}), p(this, "baseUrl", void 0), this.baseUrl = r.baseUrl || ""
                }
                clear() {
                    for (let r in this.activeRequests) this.activeRequests.hasOwnProperty(r) && this.activeRequests[r].cancel()
                }
                request(r) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    n.headers = n.headers || {}, n.headers["X-Requested-With"] = "XMLHttpRequest";
                    const o = function(r, n, o) {
                            let s;
                            try {
                                s = (0, f.stringify)(o || [])
                            } catch (r) {
                                throw r
                            }
                            let a = n.includes(r) ? n : r + n;
                            return s && (a += a.includes("?") ? `&${s}` : `?${s}`), a
                        }(this.baseUrl, r, n.query),
                        c = new AbortController;
                    if ("signal" in n) throw new Error("Parameter `signal` not supported, use `httpClient.clear` method or `Request.cancel()`");
                    n.signal = c.signal;
                    s.Z.emit(a.Z3, {
                        url: o,
                        options: n
                    });
                    const h = fetch(o, n);
                    h.then((async r => {
                        let l, c;
                        const {
                            status: u,
                            statusText: h
                        } = r;
                        let {
                            ok: f
                        } = r, p = "Request not OK";
                        try {
                            c = await r.clone().text()
                        } catch (r) {
                            f = !1, p = r.toString()
                        }
                        const m = r.clone().headers.get("content-type"),
                            b = m?.includes("json");
                        if (204 !== u && !(u >= 300 && u < 400)) try {
                            l = await r.clone().json()
                        } catch (r) {
                            b && r instanceof SyntaxError && (f = !1, p = "JSON parse error")
                        }
                        const v = b ? l : c,
                            g = {
                                getResponseHeader: n => r.headers.get(n),
                                rawResponse: r.clone(),
                                responseJSON: l,
                                responseText: c,
                                status: u,
                                statusText: h
                            };
                        f ? ((r, o) => {
                            void 0 !== n.success && n.success(r, o)
                        })(v, g) : ((r, o, s) => {
                            if (void 0 !== n.error) {
                                const a = new d(r, o, s);
                                n.error(a)
                            }
                        })(v, g, p), ((r, o) => {
                            void 0 !== n.complete && n.complete(r, o)
                        })(v, g), setTimeout((() => {
                            s.Z.emit(a.Mw, {
                                url: o,
                                responseData: v,
                                responseMeta: g
                            })
                        }), 0)
                    })).catch((() => {}));
                    const p = new u(h, c);
                    return this.activeRequests[(0, l.Vj)()] = p, p
                }
                requestPromise(r) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(((o, s) => this.request(r, {
                        ...n,
                        success: r => {
                            o(r)
                        },
                        error: r => {
                            s(r)
                        }
                    })))
                }
            }
        },
        133: function(r, n, o) {
            "use strict";
            o.d(n, {
                D0: function() {
                    return s.Fl
                },
                Qj: function() {
                    return a.Q
                },
                aU: function() {
                    return s.aD
                },
                y$: function() {
                    return s.LO
                }
            });
            var s = o(2188),
                a = o(7712)
        },
        72: function(r, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return u
                }
            });
            var s = o(8352),
                a = o.n(s),
                l = JSON.parse('{"base_url":"","routes":{"mh_location_city":{"tokens":[["text","/api/location/city"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"mh_location_country":{"tokens":[["text","/api/location/country"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"mh_manga_detail":{"tokens":[["variable","/","[^/]++","slug"],["text","/title"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"mh_fast_view_chapters":{"tokens":[["text","/chapters"],["variable","/","[^/]++","id"],["text","/fast_view"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"mh_fast_view":{"tokens":[["variable","/","[^/]++","id"],["text","/fast_view"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"mh_transform_markdown":{"tokens":[["text","/api/markdown"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"mh_downloader_launch":{"tokens":[["variable","/","[^/]++","translation"],["text","/downloader/launch"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"mh_user":{"tokens":[["variable","/","[^/]++","id"],["text","/user"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"bazinga_jstranslation_js":{"tokens":[["variable",".","js|json","_format"],["variable","/","[\\\\w]+","domain"],["text","/translations"]],"defaults":{"domain":"messages","_format":"js"},"requirements":{"_format":"js|json","domain":"[\\\\w]+"},"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"mangahub.ru","port":"","scheme":"https","locale":""}');
            const c = a();
            c.setRoutingData(l);
            var u = c
        },
        9935: function(r, n, o) {
            "use strict";
            o.d(n, {
                Ps: function() {
                    return a
                },
                b_: function() {
                    return v
                },
                Vz: function() {
                    return g
                },
                tY: function() {
                    return y
                }
            });
            const s = new WeakMap;

            function a(r, n) {
                s.has(r) || s.set(r, []);
                (s.get(r) || []).push(n)
            }

            function l(r) {
                const n = new Set;
                let o = r;
                for (; o && o !== HTMLElement;) {
                    const r = s.get(o) || [];
                    for (const o of r) n.add(o);
                    o = Object.getPrototypeOf(o)
                }
                return n
            }

            function c(r) {
                return r.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/--/g, "-").toLowerCase()
            }
            const u = new WeakSet,
                h = new WeakMap;

            function d(r) {
                u.add(r), f(r),
                    function() {
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                        const n = h.get(r);
                        if (n) return n;
                        let o = !1;
                        const s = new MutationObserver((r => {
                            for (const n of r)
                                if ("attributes" === n.type && n.target instanceof Element) b(n.target);
                                else if ("childList" === n.type && n.addedNodes.length)
                                    for (const r of n.addedNodes) r instanceof Element && f(r)
                        }));
                        s.observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["data-action"]
                        });
                        const a = {
                            get closed() {
                                return o
                            },
                            unsubscribe() {
                                o = !0, h.delete(r), s.disconnect()
                            }
                        };
                        h.set(r, a)
                    }(r.ownerDocument)
            }

            function f(r) {
                for (const n of r.querySelectorAll("[data-action]")) b(n);
                r instanceof Element && r.hasAttribute("data-action") && b(r)
            }

            function p(r) {
                const n = r.currentTarget;
                if (n instanceof Element)
                    for (const o of m(n))
                        if (r.type === o.type) {
                            const s = n.closest(o.tag);
                            u.has(s) && "function" == typeof s[o.method] && s[o.method](r)
                        }
            }

            function* m(r) {
                for (const n of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    const r = n.lastIndexOf(":"),
                        o = n.lastIndexOf("#");
                    yield {
                        type: n.slice(0, r),
                        tag: n.slice(r + 1, o),
                        method: n.slice(o + 1)
                    }
                }
            }

            function b(r) {
                for (const n of m(r)) r.addEventListener(n.type, p)
            }

            function v(r) {
                const n = r.prototype.connectedCallback;
                r.prototype.connectedCallback = function() {
                    customElements.upgrade(this),
                        function(r) {
                            for (const n of l(Object.getPrototypeOf(r))) {
                                const o = r[n],
                                    s = c(n);
                                let a = {
                                    configurable: !0,
                                    get() {
                                        return this.getAttribute(s) || ""
                                    },
                                    set(r) {
                                        this.setAttribute(s, r || "")
                                    }
                                };
                                "number" == typeof o ? a = {
                                    configurable: !0,
                                    get() {
                                        return Number(this.getAttribute(s) || 0)
                                    },
                                    set(r) {
                                        this.setAttribute(s, r)
                                    }
                                } : "boolean" == typeof o && (a = {
                                    configurable: !0,
                                    get() {
                                        return this.hasAttribute(s)
                                    },
                                    set(r) {
                                        this.toggleAttribute(s, r)
                                    }
                                }), Object.defineProperty(r, n, a), n in r && !r.hasAttribute(s) && a.set && a.set.call(r, o)
                            }
                        }(this), d(this), n && n.call(this)
                },
                    function(r) {
                        let n = r.observedAttributes || [];
                        Object.defineProperty(r, "observedAttributes", {
                            configurable: !0,
                            get() {
                                return [...l(r.prototype)].map(c).concat(n)
                            },
                            set(r) {
                                n = r
                            }
                        })
                    }(r),
                    function(r) {
                        const n = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
                        window.customElements.get(n) || (window[r.name] = r, window.customElements.define(n, r))
                    }(r)
            }

            function g(r, n) {
                return Object.defineProperty(r, n, {
                    configurable: !0,
                    get() {
                        return function(r, n) {
                            const o = r.tagName.toLowerCase();
                            for (const s of r.querySelectorAll(`[data-target~="${o}.${n}"]`))
                                if (s.closest(o) === r) return s
                        }(this, n)
                    }
                })
            }

            function y(r, n) {
                return Object.defineProperty(r, n, {
                    configurable: !0,
                    get() {
                        return function(r, n) {
                            const o = r.tagName.toLowerCase(),
                                s = [];
                            for (const a of r.querySelectorAll(`[data-targets~="${o}.${n}"]`)) a.closest(o) === r && s.push(a);
                            return s
                        }(this, n)
                    }
                })
            }
        },
        7180: function(r, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return se
                }
            });
            var s, a, l, c, u, h, d, f, p, m = o(2934),
                b = o.n(m),
                v = o(4775),
                g = o(3691),
                y = o(5084),
                w = o(570),
                E = o(133),
                S = o(5463),
                P = o(804);

            function z(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function k(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function T(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            let C = (s = (0, v.wA)({
                mixins: [S.jB]
            }), a = (0, v.fI)(), l = (0, v.Rl)("container"), c = (0, v.Rl)("arrow"), (0, E.Qj)(u = s((h = class extends(b()) {
                constructor() {
                    super(...arguments), z(this, "skinTones", d, this), z(this, "containerRef", f, this), z(this, "arrowRef", p, this), k(this, "enabledClickAway", !0), k(this, "popperOpen", !1), k(this, "popperInstance", void 0)
                }
                instantiatePopper(r) {
                    this.popperInstance = (0, P.fi)(r, this.containerRef, {
                        placement: "top",
                        modifiers: [{
                            name: "flip",
                            enabled: !1
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this.$parent.$el
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: this.arrowRef
                            }
                        }]
                    }), this.popperOpen = !0
                }
                isOpenPopper() {
                    return this.popperOpen
                }
                closePopper() {
                    this.popperOpen = !1, this._destroyPopper()
                }
                deferredClickAway() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.enabledClickAway = !1, setTimeout((() => {
                        this.enabledClickAway = !0
                    }), r)
                }
                onClickAway() {
                    this.popperOpen && this.enabledClickAway && (this.popperOpen = !1, this._destroyPopper())
                }
                _destroyPopper() {
                    this.popperInstance && this.popperInstance.destroy()
                }
            }, d = T(h.prototype, "skinTones", [a], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), f = T(h.prototype, "containerRef", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), p = T(h.prototype, "arrowRef", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), u = h)) || u) || u);
            var _ = C;

            function L(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class O {
                constructor() {
                    L(this, "name", void 0), L(this, "code", void 0), L(this, "emoji", void 0)
                }
                static create(r) {
                    const n = new O;
                    return n.name = r.name, n.code = r.code, n.emoji = r.emoji, n
                }
            }

            function x(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class M {
                constructor() {
                    x(this, "emoji", void 0), x(this, "shortname", void 0), x(this, "category", void 0), x(this, "tags", void 0), x(this, "isSkinTone", void 0), x(this, "skinTones", [])
                }
                isSkinToneSupport() {
                    return this.skinTones.length > 0
                }
                addSkinTone(r) {
                    this.skinTones.push(r)
                }
                static create(r) {
                    const n = new M;
                    return n.emoji = r.emoji, n.shortname = r.shortname, n.category = r.category, n.tags = r.tags, n.isSkinTone = r.is_skin_tone, r.skin_tones.forEach((r => {
                        n.addSkinTone(M.create(r))
                    })), n
                }
            }
            var I, A, R, F = o(6039);

            function U(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            class q {
                constructor() {
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "emoji",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36e5;
                    U(this, "httpClient", void 0), U(this, "ttl", void 0), U(this, "key", void 0), this.httpClient = new F.eN, this.key = r, this.ttl = n
                }
                load(r) {
                    return new Promise((n => {
                        const o = this._getFromStorage();
                        if (o) return n(o);
                        this.httpClient.requestPromise(r).then((r => {
                            this._setToStorage(r), n(r)
                        }))
                    }))
                }
                _setToStorage(r) {
                    const n = {
                        value: r,
                        expiry: (new Date).getTime() + this.ttl
                    };
                    localStorage.setItem(this.key, JSON.stringify(n))
                }
                _getFromStorage() {
                    const r = localStorage.getItem(this.key);
                    if (!r) return null;
                    const n = JSON.parse(r);
                    return (new Date).getTime() > n.expiry ? (localStorage.removeItem(this.key), null) : n.value
                }
            }

            function H(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function N(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function B(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            var D, V, Z, W, K, Y, Q, G, J, X, ee, te = new(A = B((I = class {
                constructor() {
                    H(this, "categories", A, this), H(this, "characters", R, this), N(this, "emojiLoader", new q)
                }
                loadEmoji() {
                    const r = r => {
                        const n = [],
                            o = new Map;
                        r.categories.forEach((r => {
                            n.push(O.create(r))
                        })), r.characters.forEach((r => {
                            const n = M.create(r);
                            o.set(n.shortname, n)
                        })), this.categories = n, this.characters = o
                    };
                    return new Promise((n => {
                        0 === this.characters.size ? this.emojiLoader.load("/api/emoji").then((o => {
                            n(r(o))
                        })) : n()
                    }))
                }
                characterByName(r) {
                    return this.characters.get(r)
                }
                charactersByCategory(r) {
                    return Array.from(this.characters.values()).filter((n => r.code === n.category))
                }
                charactersByQuery(r) {
                    const n = Array.from(this.characters.values());
                    if (!r) return n;
                    const o = r.toLocaleLowerCase();
                    return n.filter((r => r.shortname.includes(o) || r.tags.includes(o)))
                }
            }).prototype, "categories", [E.y$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), R = B(I.prototype, "characters", [E.y$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new Map
                }
            }), I);

            function ie(r, n, o, s) {
                o && Object.defineProperty(r, n, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(s) : void 0
                })
            }

            function re(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }

            function ne(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            let oe = (D = (0, v.wA)({
                components: {
                    "emoji-popup": _
                }
            }), V = (0, v.fI)(), Z = (0, v.fI)(), W = (0, v.Rl)("skinsPopup"), K = (0, v.Rl)("content"), (0, E.Qj)(Y = D((Q = class extends(b()) {
                constructor() {
                    super(...arguments), ie(this, "for", G, this), ie(this, "tone", J, this), ie(this, "skinsPopupRef", X, this), ie(this, "contentRef", ee, this), re(this, "skinTones", []), re(this, "popupInterval", void 0), re(this, "currentCategory", null), re(this, "store", te), re(this, "isCompleted", !1), re(this, "query", "")
                }
                mounted() {
                    this.store.loadEmoji().then((() => {
                        this.currentCategory = this.store.categories[0], this.isCompleted = !0
                    }))
                }
                onScroll() {
                    this.skinsPopupRef.closePopper()
                }
                onSelectCharacter(r) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.skinsPopupRef.deferredClickAway(), !this.skinsPopupRef.isOpenPopper() || n)
                        if (this.skinsPopupRef.closePopper(), this.for) {
                            const n = document.querySelector(this.for);
                            n && (0, g.Z)(n, r.emoji)
                        } else y.Z.emit(w.UA, {
                            character: r
                        })
                }
                onSelectCategory(r) {
                    this.currentCategory = r, this.contentRef.scrollTop = 0, this.query = ""
                }
                get characters() {
                    return this.query ? this.store.charactersByQuery(this.query) : this.currentCategory ? this.store.charactersByCategory(this.currentCategory) : []
                }
                startPopupInterval(r, n) {
                    this.skinsPopupRef.closePopper(), r.isSkinToneSupport() && (this.popupInterval || (this.popupInterval = setInterval((() => {
                        this.skinTones = [r, ...r.skinTones], this.skinsPopupRef.instantiatePopper(n)
                    }), 500)))
                }
                stopPopupInterval() {
                    this.popupInterval && (clearInterval(this.popupInterval), this.popupInterval = null)
                }
            }, G = ne(Q.prototype, "for", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), J = ne(Q.prototype, "tone", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), X = ne(Q.prototype, "skinsPopupRef", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), ee = ne(Q.prototype, "contentRef", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), Y = Q)) || Y) || Y);
            var se = oe
        },
        9817: function(r, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return c
                }
            });
            var s = o(2934),
                a = o.n(s),
                l = o(7180);

            function c() {
                const r = document.querySelector("emoji-picker");
                null !== r && new(a())({
                    el: r,
                    delimiters: ["${", "}"],
                    components: {
                        "emoji-picker": l.Z
                    }
                })
            }
        },
        570: function(r, n, o) {
            "use strict";
            o.d(n, {
                EE: function() {
                    return u
                },
                Er: function() {
                    return a
                },
                LL: function() {
                    return l
                },
                Mw: function() {
                    return p
                },
                O1: function() {
                    return c
                },
                T3: function() {
                    return y
                },
                UA: function() {
                    return h
                },
                Z3: function() {
                    return f
                },
                _J: function() {
                    return S
                },
                ab: function() {
                    return d
                },
                dR: function() {
                    return s
                },
                dp: function() {
                    return g
                },
                gY: function() {
                    return b
                },
                ho: function() {
                    return w
                },
                kZ: function() {
                    return P
                },
                rg: function() {
                    return m
                },
                xw: function() {
                    return v
                },
                yN: function() {
                    return E
                }
            });
            const s = "kernel::booted",
                a = "bootstrap::init",
                l = "select2::init",
                c = "vue::mount",
                u = "member::open",
                h = "emoji_picker::select",
                d = "remote_modal::complete",
                f = "http_request::send",
                p = "http_request::complete",
                m = "downloader::item_remove",
                b = "downloader::item_launch",
                v = "reader::init",
                g = "reader::scan_change",
                y = "reader::scan_force",
                w = "vh::handler_enable",
                E = "vh::handler_disable",
                S = "graph::reload",
                P = "graph::day"
        },
        1711: function(r, n, o) {
            "use strict";

            function s(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            o.d(n, {
                p: function() {
                    return a
                }
            });
            class a {
                constructor(r) {
                    s(this, "progressUpload", []), s(this, "progressCount", 0), s(this, "options", void 0), this.options = r
                }
                addFile(r) {
                    this._isSupportedFile(r) ? (this.progressCount += 1, this.progressUpload.push(0), this._startUpload(r, this.progressUpload.length - 1)) : this.options.onFileInvalid(r)
                }
                isUploaded() {
                    return 0 === this.progressCount
                }
                _startUpload(r, n) {
                    const o = new FormData;
                    o.append("file", r);
                    const s = new XMLHttpRequest;
                    s.addEventListener("load", (() => {
                        this._fileUpload(s, n)
                    })), s.upload.addEventListener("progress", (r => {
                        this._progressUpdate(n, 100 * r.loaded / r.total || 100)
                    })), s.open("POST", this._resolveUrl(r), !0), s.send(o)
                }
                _fileUpload(r, n) {
                    this.progressCount -= 1, this._progressUpdate(n, 100), this.options.onFileLoad(r)
                }
                _progressUpdate(r, n) {
                    const o = this.progressUpload.length,
                        s = this.progressUpload.reduce(((r, n) => r + n), 0) / o;
                    this.progressUpload[r] = n, this.options.onProgress(s)
                }
                _resolveUrl(r) {
                    const {
                        imageUploadUrl: n,
                        archiveUploadUrl: o
                    } = this.options;
                    if (n && this._isImage(r)) return n;
                    if (o && this._isArchive(r)) return o;
                    throw Error(`Not resolve url for type "${r.type}".`)
                }
                _isSupportedFile(r) {
                    const {
                        acceptArchive: n,
                        acceptImage: o,
                        maxFileSize: s
                    } = this.options;
                    let a = !1;
                    return (o && this._isImage(r) || n && this._isArchive(r)) && (a = !0), a && r.size < s
                }
                _isImage(r) {
                    return (this.options.imageRegex || /(\.|\/)(jpg|png|jpeg|gif|webp)$/i).test(r.type)
                }
                _isArchive(r) {
                    const n = this.options.archiveRegex || /(zip|rar)/i;
                    return n.test(r.type) || n.test(r.name)
                }
            }
        },
        4484: function(r, n, o) {
            "use strict";
            var s;
            o.d(n, {
                A: function() {
                    return a
                }
            });
            let a = (0, o(9935).b_)(s = class FileProgressElement extends HTMLElement {
                static get observedAttributes() {
                    return ["percent"]
                }
                attributeChangedCallback(r) {
                    if ("percent" === r) this.updateBar()
                }
                updateBar() {
                    const r = this.bar;
                    r instanceof HTMLElement && (this.show(), r.style.width = this.percent + "%", r.innerText = 100 === this.percent ? this.extract : this.percent + "%")
                }
                hide() {
                    this.style.display = "none"
                }
                show() {
                    this.removeAttribute("style")
                }
                get percent() {
                    return parseInt(this.getAttribute("percent"))
                }
                get extract() {
                    return this.getAttribute("extract") || ""
                }
                get bar() {
                    return this.firstElementChild ? this.firstElementChild : null
                }
            }) || s
        },
        8349: function(r, n, o) {
            "use strict";
            o.d(n, {
                y: function() {
                    return d
                }
            });
            var s = o(9755);

            function a(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const l = "is-invalid",
                c = ".alert",
                u = '.invalid-feedback, [id*="_errors"]',
                h = ".form-control";
            class d {
                constructor(r) {
                    a(this, "form", void 0), this.form = r
                }
                static createFromForm(r) {
                    return new d(r)
                }
                removeMessages() {
                    this.form.find(u).remove(), this.form.find(h).removeClass(l)
                }
                removeAlert() {
                    this.form.find(c).remove()
                }
                resetValue() {
                    this.form.find(":input").each(((r, n) => {
                        switch (n.type) {
                            case "password":
                            case "select-multiple":
                            case "select-one":
                            case "text":
                            case "textarea":
                                s(n).val("");
                                break;
                            case "checkbox":
                            case "radio":
                                s(n).prop("checked", !1)
                        }
                    }))
                }
                resetForm() {
                    this.resetValue(), this.removeAlert(), this.removeMessages()
                }
            }
        },
        7629: function(r, n, o) {
            "use strict";
            var s, a, l, c = o(6039),
                u = o(9935);

            function h(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            document.addEventListener("submit", (r => {
                const n = r.target;
                if (!(n instanceof HTMLFormElement)) return;
                const o = n.closest("form-toggle");
                o instanceof d && o.isTarget(n) && (o.request(n), r.preventDefault())
            }));
            let d = (0, u.b_)((a = class FormToggleElement extends HTMLElement {
                constructor() {
                    var r, n, o, s;
                    super(...arguments), r = this, n = "forms", s = this, (o = l) && Object.defineProperty(r, n, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(s) : void 0
                    }), h(this, "httpClient", new c.eN), h(this, "handlers", new Set)
                }
                registerHandler(r) {
                    this.handlers.add(r)
                }
                isTarget(r) {
                    return Array.from(this.forms).includes(r)
                }
                request(r) {
                    const n = {
                        body: new FormData(r),
                        method: "POST"
                    };
                    this.httpClient.requestPromise(r.getAttribute("action") || "", n).then((n => {
                        this.forms.forEach((r => r.hidden = !1)), r.hidden = !0, this.handlers.forEach((o => o(n, r)))
                    }))
                }
            }, f = a.prototype, p = "forms", m = [u.tY], b = {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }, g = {}, Object.keys(b).forEach((function(r) {
                g[r] = b[r]
            })), g.enumerable = !!g.enumerable, g.configurable = !!g.configurable, ("value" in g || g.initializer) && (g.writable = !0), g = m.slice().reverse().reduce((function(r, n) {
                return n(f, p, r) || r
            }), g), v && void 0 !== g.initializer && (g.value = g.initializer ? g.initializer.call(v) : void 0, g.initializer = void 0), void 0 === g.initializer && (Object.defineProperty(f, p, g), g = null), l = g, s = a)) || s;
            var f, p, m, b, v, g
        },
        5620: function(r, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return V
                }
            });
            var s, a = o(9935),
                l = o(49),
                c = o(6039),
                u = o(8349),
                h = o(2593),
                d = o(9817),
                f = o(9755);

            function p(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const m = "fos_comment_replying",
                b = "active",
                v = "d-none",
                g = ".fos_comment_list",
                y = ".fos_comment_comment_pager",
                w = ".fos_comment_comment_reply_show_form",
                E = ".fos_comment_comment_reply_cancel",
                S = ".fos_comment_comment_edit_cancel",
                P = ".fos_comment_comment_edit_show_form",
                z = ".fos_comment_comment_edit_form",
                k = ".fos_comment_comment_vote",
                T = ".fos_comment_comment_state",
                C = ".fos_comment_comment_new_form",
                _ = ".fos_comment_space",
                L = ".fos_comment_comment_body",
                O = ".fos_comment_comment_form_holder",
                x = ".fos_comment_reply_form",
                M = ".fos_comment_comment_show",
                I = ".fos_comment_children",
                A = ".fos_comment_form_errors",
                R = ".fos_comment_sort",
                F = ".fos_comment_loader",
                U = ".fos_comment_switch",
                q = ".fos_comment_switch_value",
                H = ".fos_comment_switch_visual",
                N = ".fos_comment_switch_item",
                B = Object.freeze({
                    APPEND: "append",
                    PREPEND: "prepend"
                });
            let D = !0,
                V = (0, a.b_)(s = class ThreadCommentElement extends HTMLElement {
                    constructor() {
                        super(...arguments), p(this, "httpClient", new c.eN)
                    }
                    connectedCallback() {
                        const r = f(this);
                        r.on("click", y, this.onPagination.bind(this)), r.on("click", w, this.onReplyShow.bind(this)), r.on("click", E, this.onReplyCancel.bind(this)), r.on("click", S, this.onEditCancel.bind(this)), r.on("click", P, this.onEditShow.bind(this)), r.on("submit", z, this.onEditSubmit.bind(this)), r.on("click", k, this.onCommentVote.bind(this)), r.on("click", T, this.onCommentState.bind(this)), r.on("submit", C, this.onCommentSubmit.bind(this)), r.on("click", R, this.onSortable.bind(this)), r.on("click", N, this.onSwitchAuthor.bind(this)), this.getAction().includes("reader") && D ? D = !1 : (0, d.Z)()
                    }
                    reloadByIdentifier(r, n, o) {
                        const s = "/thread/" + encodeURIComponent(r) + this.getAction(),
                            a = {
                                method: "GET",
                                query: {
                                    position: this.getPosition(),
                                    permalink: encodeURI(o || window.location.href),
                                    sorter: n || this._resolveSort()
                                }
                            };
                        this.httpClient.clear(), this._startLoader(), this.httpClient.requestPromise(s, a).then((r => {
                            this.replaceWith((0, h.rg)(r))
                        }))
                    }
                    setInsertMode(r) {
                        this.setAttribute("data-insert-mode", r)
                    }
                    getInsertMode() {
                        return this.getAttribute("data-insert-mode") || B.APPEND
                    }
                    setPosition(r) {
                        this.setAttribute("data-position", r.toString())
                    }
                    getPosition() {
                        return parseInt(this.getAttribute("data-position"))
                    }
                    getIdentifier() {
                        return this.getAttribute("data-thread") || ""
                    }
                    getAction() {
                        return this.getAttribute("data-action") || "/card"
                    }
                    onSwitchAuthor(r) {
                        const n = f(r.currentTarget),
                            o = n.parents(U),
                            s = o.find(H);
                        n.data("value") ? (0, h.$G)(s, s.data("translator")) : (0, h.$G)(s, s.data("self")), o.find(q).val(n.data("value")), s.css("background-image", `url("${n.data("image")}")`), r.preventDefault()
                    }
                    onSortable(r) {
                        const n = f(r.currentTarget),
                            o = n.data("activeClass") || b;
                        r.preventDefault(), n.hasClass(o) || (this._startLoader(), this.httpClient.requestPromise(n.attr("href")).then((r => {
                            this._replaceCommentsList(r, !1), this._stopLoader(), f(R).removeClass(o), n.addClass(o)
                        })))
                    }
                    onCommentSubmit(r) {
                        const n = f(r.currentTarget),
                            o = n.find(":submit"),
                            s = {
                                method: "POST",
                                body: new FormData(n[0]),
                                query: {
                                    position: this.getPosition()
                                }
                            };
                        r.preventDefault();
                        const a = document.getElementById("form-login");
                        a ? a.click() : (o.prop("disabled", !0), this.httpClient.requestPromise(n.attr("action"), s).then((r => {
                            this._insertComment(r, n), o.prop("disabled", !1)
                        })).catch((r => {
                            400 === r.status && n.html(f(r.data).find(C).html())
                        })))
                    }
                    onReplyShow(r) {
                        const n = f(r.currentTarget),
                            o = n.closest(M).find(x).eq(0);
                        if (o.hasClass(m)) return;
                        const s = {
                            method: "GET",
                            query: {
                                parentId: n.attr("data-parent-id")
                            }
                        };
                        this.httpClient.requestPromise(n.attr("data-url"), s).then((r => {
                            o.addClass(m), o.html(r), (0, d.Z)()
                        }))
                    }
                    onReplyCancel(r) {
                        const n = f(r.currentTarget).closest(O);
                        n.closest(x).removeClass(m), n.remove()
                    }
                    onEditSubmit(r) {
                        const n = f(r.currentTarget),
                            o = {
                                method: "POST",
                                body: new FormData(n[0])
                            };
                        this.httpClient.requestPromise(n.attr("action"), o).then((r => {
                            this._replaceComment(r)
                        })), r.preventDefault()
                    }
                    onEditShow(r) {
                        const n = f(r.currentTarget);
                        this.httpClient.requestPromise(n.attr("data-url")).then((r => {
                            const o = f(n.attr("data-container"));
                            o.data("original", o.html()), o.html(r), (0, d.Z)()
                        }))
                    }
                    onEditCancel(r) {
                        const n = f(r.currentTarget).parents(L);
                        n.html(n.data("original"))
                    }
                    onCommentState(r) {
                        const n = f(r.currentTarget);
                        this.httpClient.requestPromise(n.attr("data-url")).then((r => {
                            const n = f(r),
                                o = {
                                    method: "POST",
                                    body: new FormData(n[0])
                                };
                            this.httpClient.requestPromise(n.attr("action"), o).then((r => {
                                this._replaceComment(r)
                            }))
                        }))
                    }
                    onCommentVote(r) {
                        const n = f(r.currentTarget);
                        this.httpClient.requestPromise(n.attr("data-url")).then((r => {
                            const o = f(r),
                                s = {
                                    method: "POST",
                                    body: new FormData(o[0])
                                };
                            l.Z.getOrCreateInstance(n[0]).hide(), this.httpClient.requestPromise(o.attr("action"), s).then((r => {
                                this._replaceComment(r)
                            }))
                        }))
                    }
                    onPagination(r) {
                        const n = f(r.currentTarget);
                        n.prop("disable", !0), this.httpClient.requestPromise(n.attr("data-url")).then((r => {
                            this._replaceCommentsList(r)
                        }))
                    }
                    _startLoader() {
                        f(F).removeClass(v)
                    }
                    _stopLoader() {
                        f(F).addClass(v)
                    }
                    _resolveSort() {
                        return f(R).filter(((r, n) => f(n).hasClass(b))).attr("data-sort")
                    }
                    _replaceCommentsList(r) {
                        let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        const o = f("<div/>").append(r),
                            s = o.find(g).html(),
                            a = o.find(y);
                        f(y).remove(), !0 === n ? f(g).append(s) : f(g).html(s), a.length > 0 && f(g).after(a)
                    }
                    _replaceComment(r) {
                        const n = f(r).find(_).eq(0);
                        f("#" + f(r).attr("id")).find(_).eq(0).replaceWith(n)
                    }
                    _insertComment(r, n) {
                        if ("" !== n.attr("data-parent")) {
                            const o = n.closest(O),
                                s = n.closest(M).find(x).eq(0),
                                a = n.closest(M).find(I).eq(0);
                            o.remove(), s.removeClass(m), a.prepend(r)
                        } else {
                            if (B.APPEND === this.getInsertMode()) f(g).append(r);
                            else {
                                if (B.PREPEND !== this.getInsertMode()) throw new Error(`Not correct insert type "${this.getInsertMode()}".`);
                                f(g).prepend(r)
                            }
                            n.children(A).remove();
                            u.y.createFromForm(n).resetForm()
                        }
                    }
                }) || s
        },
        7346: function(r, n, o) {
            "use strict";
            o.d(n, {
                $e: function() {
                    return c
                },
                FN: function() {
                    return u
                },
                ug: function() {
                    return l
                }
            });
            var s = o(2593);

            function a(r, n, o) {
                return (n = function(r) {
                    var n = function(r, n) {
                        if ("object" != typeof r || null === r) return r;
                        var o = r[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var s = o.call(r, n || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(r)
                    }(r, "string");
                    return "symbol" == typeof n ? n : String(n)
                }(n)) in r ? Object.defineProperty(r, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[n] = o, r
            }
            const l = Object.freeze({
                    TOP_LEFT: "topLeft",
                    TOP_RIGHT: "topRight",
                    BOTTOM_LEFT: "bottomLeft",
                    BOTTOM_RIGHT: "bottomRight",
                    BOTTOM_CENTER: "bottomCenter"
                }),
                c = Object.freeze({
                    NOTIFICATION: "notification",
                    MESSAGE: "message"
                });
            class u {
                constructor() {
                    a(this, "id", void 0), a(this, "variant", void 0), a(this, "placement", void 0), a(this, "type", void 0), a(this, "content", void 0), a(this, "title", void 0), a(this, "link", void 0), a(this, "animation", void 0), a(this, "autoHide", void 0), a(this, "delay", void 0), this.id = (0, s.Vj)(), this.type = "default", this.variant = c.NOTIFICATION, this.placement = l.BOTTOM_LEFT, this.animation = !0, this.autoHide = !1, this.delay = 2500
                }
                get isMessage() {
                    return c.MESSAGE === this.variant
                }
                get isNotification() {
                    return c.NOTIFICATION === this.variant
                }
                static create(r) {
                    return Object.assign(new u, r)
                }
            }
        },
        2578: function(r, n, o) {
            "use strict";
            var s, a, l = o(133),
                c = o(7346);

            function u(r, n, o, s, a) {
                var l = {};
                return Object.keys(s).forEach((function(r) {
                    l[r] = s[r]
                })), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = !0), l = o.slice().reverse().reduce((function(o, s) {
                    return s(r, n, o) || o
                }), l), a && void 0 !== l.initializer && (l.value = l.initializer ? l.initializer.call(a) : void 0, l.initializer = void 0), void 0 === l.initializer && (Object.defineProperty(r, n, l), l = null), l
            }
            let h = (a = u((s = class {
                constructor() {
                    var r, n, o, s;
                    r = this, n = "toasts", s = this, (o = a) && Object.defineProperty(r, n, {
                        enumerable: o.enumerable,
                        configurable: o.configurable,
                        writable: o.writable,
                        value: o.initializer ? o.initializer.call(s) : void 0
                    })
                }
                message(r) {
                    this.add(c.FN.create({
                        autoHide: !0,
                        ...r,
                        variant: c.$e.MESSAGE
                    }))
                }
                notification(r) {
                    this.add(c.FN.create({
                        ...r,
                        variant: c.$e.NOTIFICATION
                    }))
                }
                add(r) {
                    this.toasts.push(r)
                }
                get toastsByPlacement() {
                    const r = {};
                    return Object.values(c.ug).forEach((n => {
                        r[String(n)] = []
                    })), this.toasts.forEach((n => {
                        r[n.placement].push(n)
                    })), r
                }
                remove(r) {
                    this.toasts = this.toasts.filter((n => n.id !== r.id))
                }
            }).prototype, "toasts", [l.y$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), u(s.prototype, "message", [l.aU], Object.getOwnPropertyDescriptor(s.prototype, "message"), s.prototype), u(s.prototype, "notification", [l.aU], Object.getOwnPropertyDescriptor(s.prototype, "notification"), s.prototype), u(s.prototype, "add", [l.aU], Object.getOwnPropertyDescriptor(s.prototype, "add"), s.prototype), u(s.prototype, "toastsByPlacement", [l.D0], Object.getOwnPropertyDescriptor(s.prototype, "toastsByPlacement"), s.prototype), u(s.prototype, "remove", [l.aU], Object.getOwnPropertyDescriptor(s.prototype, "remove"), s.prototype), s);
            n.Z = new h
        },
        2593: function(r, n, o) {
            "use strict";

            function s(r) {
                const n = document.createElement("template");
                return n.innerHTML = r, document.importNode(n.content, !0)
            }

            function a() {
                const r = () => Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r()
            }

            function l(r, n) {
                return n[r % 100 > 4 && r % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][r % 10 < 5 ? r % 10 : 5]]
            }

            function c(r, n) {
                const o = [],
                    s = [];
                for (r.replace(/(\d+)|(\D+)/g, ((r, n, s) => (o.push([n || 1 / 0, s || ""]), r))), n.replace(/(\d+)|(\D+)/g, ((r, n, o) => (s.push([n || 1 / 0, o || ""]), r))); o.length && s.length;) {
                    const r = o.shift(),
                        n = s.shift(),
                        a = r[0] - n[0] || r[1].localeCompare(n[1]);
                    if (a) return a
                }
                return o.length - s.length
            }

            function u(r) {
                switch ("string" == typeof r && (r = r.toLowerCase().trim()), r) {
                    case "true":
                    case "yes":
                    case "1":
                        return !0;
                    case "false":
                    case "no":
                    case "0":
                    case null:
                        return !1;
                    default:
                        return Boolean(r)
                }
            }

            function h(r) {
                const n = typeof r;
                return null != r && ("object" === n || "function" === n)
            }
            o.d(n, {
                FI: function() {
                    return c
                },
                Fm: function() {
                    return l
                },
                Kn: function() {
                    return h
                },
                rg: function() {
                    return s
                },
                hb: function() {
                    return u
                },
                $G: function() {
                    return p
                },
                Vj: function() {
                    return a
                }
            });
            var d = o(49),
                f = o(9755);

            function p(r, n) {
                r instanceof f && (r = r.get(0));
                const o = d.Z.getInstance(r);
                if (!o) return;
                r.setAttribute("title", n), o._fixTitle();
                const s = o.getTipElement();
                o.setElementContent(s.querySelector(".tooltip-inner"), o.getTitle())
            }
        },
        1533: function() {
            "undefined" != typeof Element && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(r) {
                let n = this;
                do {
                    if (n.matches(r)) return n;
                    n = n.parentElement || n.parentNode
                } while (null !== n && 1 === n.nodeType);
                return null
            }))
        },
        8163: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
            var jQuery = __webpack_require__(9755);
            (function($) {
                $.fn.markItUp = function(settings, extraSettings) {
                    var method, params, options, ctrlKey, shiftKey, altKey;
                    ctrlKey = shiftKey = altKey = !1, "string" == typeof settings && (method = settings, params = extraSettings), options = {
                        id: "",
                        nameSpace: "",
                        root: "",
                        previewHandler: !1,
                        previewInWindow: "",
                        previewInElement: "",
                        previewAutoRefresh: !0,
                        previewPosition: "after",
                        previewTemplatePath: "~/templates/preview.html",
                        previewParser: !1,
                        previewParserPath: "",
                        previewParserVar: "data",
                        previewParserAjaxType: "POST",
                        resizeHandle: !0,
                        beforeInsert: "",
                        afterInsert: "",
                        onEnter: {},
                        onShiftEnter: {},
                        onCtrlEnter: {},
                        onTab: {},
                        markupSet: [{}]
                    }, $.extend(options, settings, extraSettings), options.root || $("script").each((function(r, n) {
                        miuScript = $(n).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/), null !== miuScript && (options.root = miuScript[1])
                    }));
                    var uaMatch = function(r) {
                            r = r.toLowerCase();
                            var n = /(chrome)[ \/]([\w.]+)/.exec(r) || /(webkit)[ \/]([\w.]+)/.exec(r) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(r) || /(msie) ([\w.]+)/.exec(r) || r.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(r) || [];
                            return {
                                browser: n[1] || "",
                                version: n[2] || "0"
                            }
                        },
                        matched = uaMatch(navigator.userAgent),
                        browser = {};
                    return matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), this.each((function() {
                        var $$, textarea, levels, scrollPosition, caretPosition, caretOffset, clicked, hash, header, footer, previewWindow, template, iFrame, abort;
                        if ($$ = $(this), textarea = this, levels = [], abort = !1, scrollPosition = caretPosition = 0, caretOffset = -1, options.previewParserPath = localize(options.previewParserPath), options.previewTemplatePath = localize(options.previewTemplatePath), method) switch (method) {
                            case "remove":
                                remove();
                                break;
                            case "insert":
                                markup(params);
                                break;
                            default:
                                $.error("Method " + method + " does not exist on jQuery.markItUp")
                        } else init();

                        function localize(r, n) {
                            return n ? r.replace(/("|')~\//g, "$1" + options.root) : r.replace(/^~\//, options.root)
                        }

                        function init() {
                            id = "", nameSpace = "", options.id ? id = 'id="' + options.id + '"' : $$.attr("id") && (id = 'id="markItUp' + $$.attr("id").substr(0, 1).toUpperCase() + $$.attr("id").substr(1) + '"'), options.nameSpace && (nameSpace = 'class="' + options.nameSpace + '"'), $$.wrap("<div " + nameSpace + "></div>"), $$.wrap("<div " + id + ' class="markItUp"></div>'), $$.wrap('<div class="markItUpContainer"></div>'), $$.addClass("markItUpEditor"), header = $('<div class="markItUpHeader"></div>').insertBefore($$), $(dropMenus(options.markupSet)).appendTo(header), footer = $('<div class="markItUpFooter"></div>').insertAfter($$), !0 === options.resizeHandle && !0 !== browser.safari && (resizeHandle = $('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown.markItUp", (function(r) {
                                var n, o, s = $$.height(),
                                    a = r.clientY;
                                n = function(r) {
                                    return $$.css("height", Math.max(20, r.clientY + s - a) + "px"), !1
                                }, o = function(r) {
                                    return $("html").unbind("mousemove.markItUp", n).unbind("mouseup.markItUp", o), !1
                                }, $("html").bind("mousemove.markItUp", n).bind("mouseup.markItUp", o)
                            })), footer.append(resizeHandle)), $$.bind("keydown.markItUp", keyPressed).bind("keyup", keyPressed), $$.bind("insertion.markItUp", (function(r, n) {
                                !1 !== n.target && get(), textarea === $.markItUp.focused && markup(n)
                            })), $$.bind("focus.markItUp", (function() {
                                $.markItUp.focused = this
                            })), options.previewInElement && refreshPreview()
                        }

                        function dropMenus(markupSet) {
                            var ul = $("<ul></ul>"),
                                i = 0;
                            return $("li:hover > ul", ul).css("display", "block"), $.each(markupSet, (function() {
                                var button = this,
                                    t = "",
                                    title, li, j;
                                if (title = button.title ? button.key ? (button.title || "") + " [Ctrl+" + button.key + "]" : button.title || "" : button.key ? (button.name || "") + " [Ctrl+" + button.key + "]" : button.name || "", key = button.key ? 'accesskey="' + button.key + '"' : "", button.separator) li = $('<li class="markItUpSeparator">' + (button.separator || "") + "</li>").appendTo(ul);
                                else {
                                    for (i++, j = levels.length - 1; j >= 0; j--) t += levels[j] + "-";
                                    li = $('<li class="markItUpButton markItUpButton' + t + i + " " + (button.className || "") + '"><a href="#" ' + key + ' title="' + title + '">' + (button.name || "") + "<svg class='c-icon'> <use xlink:href='#icon-" + (button.icon || "") + "'></use></svg></a></li>").bind("contextmenu.markItUp", (function() {
                                        return !1
                                    })).bind("click.markItUp", (function(r) {
                                        r.preventDefault()
                                    })).bind("focusin.markItUp", (function() {
                                        $$.focus()
                                    })).bind("mouseup", (function(e) {
                                        return button.call && eval(button.call)(e), setTimeout((function() {
                                            markup(button)
                                        }), 1), !1
                                    })).bind("mouseenter.markItUp", (function() {
                                        $("> ul", this).show(), $(document).one("click", (function() {
                                            $("ul ul", header).hide()
                                        }))
                                    })).bind("mouseleave.markItUp", (function() {
                                        $("> ul", this).hide()
                                    })).appendTo(ul), button.dropMenu && (levels.push(i), $(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu)))
                                }
                            })), levels.pop(), ul
                        }

                        function magicMarkups(r) {
                            return r ? r = (r = (r = r.toString()).replace(/\(\!\(([\s\S]*?)\)\!\)/g, (function(r, n) {
                                var o = n.split("|!|");
                                return !0 === altKey ? void 0 !== o[1] ? o[1] : o[0] : void 0 === o[1] ? "" : o[0]
                            }))).replace(/\[\!\[([\s\S]*?)\]\!\]/g, (function(r, n) {
                                var o = n.split(":!:");
                                return !0 !== abort && (value = prompt(o[0], o[1] ? o[1] : ""), null === value && (abort = !0), value)
                            })) : ""
                        }

                        function prepare(r) {
                            return $.isFunction(r) && (r = r(hash)), magicMarkups(r)
                        }

                        function build(r) {
                            var n = prepare(clicked.openWith),
                                o = prepare(clicked.placeHolder),
                                s = prepare(clicked.replaceWith),
                                a = prepare(clicked.closeWith),
                                l = prepare(clicked.openBlockWith),
                                c = prepare(clicked.closeBlockWith),
                                u = clicked.multiline;
                            if ("" !== s) block = n + s + a;
                            else if ("" === selection && "" !== o) block = n + o + a;
                            else {
                                var h = [r = r || selection],
                                    d = [];
                                !0 === u && (h = r.split(/\r?\n/));
                                for (var f = 0; f < h.length; f++) {
                                    var p;
                                    line = h[f], (p = line.match(/ *$/)) ? d.push(n + line.replace(/ *$/g, "") + a + p) : d.push(n + line + a)
                                }
                                block = d.join("\n")
                            }
                            return block = l + block + c, {
                                block: block,
                                openBlockWith: l,
                                openWith: n,
                                replaceWith: s,
                                placeHolder: o,
                                closeWith: a,
                                closeBlockWith: c
                            }
                        }

                        function markup(r) {
                            var n, o, s, a;
                            if (hash = clicked = r, get(), $.extend(hash, {
                                line: "",
                                root: options.root,
                                textarea: textarea,
                                selection: selection || "",
                                caretPosition: caretPosition,
                                ctrlKey: ctrlKey,
                                shiftKey: shiftKey,
                                altKey: altKey
                            }), prepare(options.beforeInsert), prepare(clicked.beforeInsert), (!0 === ctrlKey && !0 === shiftKey || !0 === r.multiline) && prepare(clicked.beforeMultiInsert), $.extend(hash, {
                                line: 1
                            }), !0 === ctrlKey && !0 === shiftKey) {
                                for (lines = selection.split(/\r?\n/), o = 0, s = lines.length, a = 0; a < s; a++) "" !== $.trim(lines[a]) ? ($.extend(hash, {
                                    line: ++o,
                                    selection: lines[a]
                                }), lines[a] = build(lines[a]).block) : lines[a] = "";
                                string = {
                                    block: lines.join("\n")
                                }, start = caretPosition, n = string.block.length + (browser.opera ? s - 1 : 0)
                            } else !0 === ctrlKey ? (string = build(selection), start = caretPosition + string.openWith.length, n = string.block.length - string.openWith.length - string.closeWith.length, n -= string.block.match(/ $/) ? 1 : 0, n -= fixIeBug(string.block)) : !0 === shiftKey ? (string = build(selection), start = caretPosition, n = string.block.length, n -= fixIeBug(string.block)) : (string = build(selection), start = caretPosition + string.block.length, n = 0, start -= fixIeBug(string.block));
                            "" === selection && "" === string.replaceWith && (caretOffset += fixOperaBug(string.block), start = caretPosition + string.openBlockWith.length + string.openWith.length, n = string.block.length - string.openBlockWith.length - string.openWith.length - string.closeWith.length - string.closeBlockWith.length, caretOffset = $$.val().substring(caretPosition, $$.val().length).length, caretOffset -= fixOperaBug($$.val().substring(0, caretPosition))), $.extend(hash, {
                                caretPosition: caretPosition,
                                scrollPosition: scrollPosition
                            }), string.block !== selection && !1 === abort ? (insert(string.block), set(start, n)) : caretOffset = -1, get(), $.extend(hash, {
                                line: "",
                                selection: selection
                            }), (!0 === ctrlKey && !0 === shiftKey || !0 === r.multiline) && prepare(clicked.afterMultiInsert), prepare(clicked.afterInsert), prepare(options.afterInsert), previewWindow && options.previewAutoRefresh && refreshPreview(), shiftKey = altKey = ctrlKey = abort = !1
                        }

                        function fixOperaBug(r) {
                            return browser.opera ? r.length - r.replace(/\n*/g, "").length : 0
                        }

                        function fixIeBug(r) {
                            return browser.msie ? r.length - r.replace(/\r*/g, "").length : 0
                        }

                        function insert(r) {
                            document.selection ? document.selection.createRange().text = r : textarea.value = textarea.value.substring(0, caretPosition) + r + textarea.value.substring(caretPosition + selection.length, textarea.value.length)
                        }

                        function set(r, n) {
                            if (textarea.createTextRange) {
                                if (browser.opera && browser.version >= 9.5 && 0 == n) return !1;
                                range = textarea.createTextRange(), range.collapse(!0), range.moveStart("character", r), range.moveEnd("character", n), range.select()
                            } else textarea.setSelectionRange && textarea.setSelectionRange(r, r + n);
                            textarea.scrollTop = scrollPosition, textarea.focus()
                        }

                        function get() {
                            if (textarea.focus(), scrollPosition = textarea.scrollTop, document.selection)
                                if (selection = document.selection.createRange().text, browser.msie) {
                                    var r = document.selection.createRange(),
                                        n = r.duplicate();
                                    for (n.moveToElementText(textarea), caretPosition = -1; n.inRange(r);) n.moveStart("character"), caretPosition++
                                } else caretPosition = textarea.selectionStart;
                            else caretPosition = textarea.selectionStart, selection = textarea.value.substring(caretPosition, textarea.selectionEnd);
                            return selection
                        }

                        function preview() {
                            "function" == typeof options.previewHandler ? previewWindow = !0 : options.previewInElement ? previewWindow = $(options.previewInElement) : !previewWindow || previewWindow.closed ? options.previewInWindow ? (previewWindow = window.open("", "preview", options.previewInWindow), $(window).unload((function() {
                                previewWindow.close()
                            }))) : (iFrame = $('<iframe class="markItUpPreviewFrame"></iframe>'), "after" == options.previewPosition ? iFrame.insertAfter(footer) : iFrame.insertBefore(header), previewWindow = iFrame[iFrame.length - 1].contentWindow || frame[iFrame.length - 1]) : !0 === altKey && (iFrame ? iFrame.remove() : previewWindow.close(), previewWindow = iFrame = !1), options.previewAutoRefresh || refreshPreview(), options.previewInWindow && previewWindow.focus()
                        }

                        function refreshPreview() {
                            renderPreview()
                        }

                        function renderPreview() {
                            var r = $$.val();
                            return options.previewParser && "function" == typeof options.previewParser && (r = options.previewParser(r)), options.previewHandler && "function" == typeof options.previewHandler ? options.previewHandler(r) : "" !== options.previewParserPath ? $.ajax({
                                type: options.previewParserAjaxType,
                                dataType: "text",
                                global: !1,
                                url: options.previewParserPath,
                                data: options.previewParserVar + "=" + encodeURIComponent(r),
                                success: function(r) {
                                    writeInPreview(localize(r, 1))
                                }
                            }) : template || $.ajax({
                                url: options.previewTemplatePath,
                                dataType: "text",
                                global: !1,
                                success: function(n) {
                                    writeInPreview(localize(n, 1).replace(/<!-- content -->/g, r))
                                }
                            }), !1
                        }

                        function writeInPreview(r) {
                            if (options.previewInElement) $(options.previewInElement).html(r);
                            else if (previewWindow && previewWindow.document) {
                                try {
                                    sp = previewWindow.document.documentElement.scrollTop
                                } catch (r) {
                                    sp = 0
                                }
                                previewWindow.document.open(), previewWindow.document.write(r), previewWindow.document.close(), previewWindow.document.documentElement.scrollTop = sp
                            }
                        }

                        function keyPressed(r) {
                            if (shiftKey = r.shiftKey, altKey = r.altKey, ctrlKey = (!r.altKey || !r.ctrlKey) && (r.ctrlKey || r.metaKey), "keydown" === r.type) {
                                if (!0 === ctrlKey && (li = $('a[accesskey="' + (13 == r.keyCode ? "\\n" : String.fromCharCode(r.keyCode)) + '"]', header).parent("li"), 0 !== li.length)) return ctrlKey = !1, setTimeout((function() {
                                    li.triggerHandler("mouseup")
                                }), 1), !1;
                                if (13 === r.keyCode || 10 === r.keyCode) return !0 === ctrlKey ? (ctrlKey = !1, markup(options.onCtrlEnter), options.onCtrlEnter.keepDefault) : !0 === shiftKey ? (shiftKey = !1, markup(options.onShiftEnter), options.onShiftEnter.keepDefault) : (markup(options.onEnter), options.onEnter.keepDefault);
                                if (9 === r.keyCode) return 1 != shiftKey && 1 != ctrlKey && 1 != altKey && (-1 !== caretOffset ? (get(), set(caretOffset = $$.val().length - caretOffset, 0), caretOffset = -1, !1) : (markup(options.onTab), options.onTab.keepDefault))
                            }
                        }

                        function remove() {
                            $$.unbind(".markItUp").removeClass("markItUpEditor"), $$.parent("div").parent("div.markItUp").parent("div").replaceWith($$);
                            var r = $$.parent("div").parent("div.markItUp").parent("div");
                            r.length && r.replaceWith($$), $$.data("markItUp", null)
                        }
                    }))
                }, $.fn.markItUpRemove = function() {
                    return this.each((function() {
                        $(this).markItUp("remove")
                    }))
                }, $.markItUp = function(r) {
                    var n = {
                        target: !1
                    };
                    if ($.extend(n, r), n.target) return $(n.target).each((function() {
                        $(this).focus(), $(this).trigger("insertion", [n])
                    }));
                    $("textarea").trigger("insertion", [n])
                }
            })(jQuery)
        },
        463: function(r, n, o) {
            var s, a, l, c;
            c = function(r) {
                "use strict";

                function n(r, n) {
                    var o, s = v.placeHolderPrefix,
                        a = v.placeHolderSuffix;
                    for (o in n) {
                        var l = new RegExp(s + o + a, "g");
                        if (l.test(r)) {
                            var c = String(n[o]).replace(new RegExp("\\$", "g"), "$$$$");
                            r = r.replace(l, c)
                        }
                    }
                    return r
                }

                function o(r, n, o, a, l, c) {
                    var h, f, p, m = o || a || l,
                        v = n,
                        g = c || {},
                        y = m.split("_")[0];
                    if (g.isICU = !1, !(m in u))
                        if (y in u) m = y;
                        else {
                            if (!(l in u)) return r;
                            m = l
                        } if (null == v)
                        for (var w = 0; w < d.length; w++)
                            if (s(m, d[w], r) || s(y, d[w], r) || s(l, d[w], r)) {
                                v = d[w].replace(b, "");
                                break
                            } if (s(m, v + b, r)) return g.isICU = !0, u[m][v + b][r];
                    if (s(m, v, r)) return u[m][v][r];
                    for (; m.length > 2 && (h = m.length, p = (f = m.split(/[\s_]+/))[f.length - 1].length, 1 !== f.length);)
                        if (s(m = m.substring(0, h - (p + 1)), v, r)) return u[m][v][r];
                    return s(l, v, r) ? u[l][v][r] : r
                }

                function s(r, n, o) {
                    return r in u && n in u[r] && o in u[r][n]
                }

                function a(r, n, o) {
                    var s, a, c = [],
                        u = [],
                        h = r.split(v.pluralSeparator),
                        d = [];
                    for (s = 0; s < h.length; s++) {
                        var b = h[s];
                        p.test(b) ? c[(d = b.match(p))[0]] = d[d.length - 1] : f.test(b) ? (d = b.match(f), u.push(d[1])) : u.push(b)
                    }
                    for (a in c)
                        if (m.test(a))
                            if ((d = a.match(m))[1]) {
                                var g, y = d[2].split(",");
                                for (g in y)
                                    if (n == y[g]) return c[a]
                            } else {
                                var w = l(d[4]),
                                    E = l(d[5]);
                                if (("[" === d[3] ? n >= w : n > w) && ("]" === d[6] ? n <= E : n < E)) return c[a]
                            } return u[function(r, n) {
                        var o = n;
                        switch ("pt_BR" === o && (o = "xbr"), o.length > 3 && (o = o.split("_")[0]), o) {
                            case "bo":
                            case "dz":
                            case "id":
                            case "ja":
                            case "jv":
                            case "ka":
                            case "km":
                            case "kn":
                            case "ko":
                            case "ms":
                            case "th":
                            case "tr":
                            case "vi":
                            case "zh":
                            default:
                                return 0;
                            case "af":
                            case "az":
                            case "bn":
                            case "bg":
                            case "ca":
                            case "da":
                            case "de":
                            case "el":
                            case "en":
                            case "eo":
                            case "es":
                            case "et":
                            case "eu":
                            case "fa":
                            case "fi":
                            case "fo":
                            case "fur":
                            case "fy":
                            case "gl":
                            case "gu":
                            case "ha":
                            case "he":
                            case "hu":
                            case "is":
                            case "it":
                            case "ku":
                            case "lb":
                            case "ml":
                            case "mn":
                            case "mr":
                            case "nah":
                            case "nb":
                            case "ne":
                            case "nl":
                            case "nn":
                            case "no":
                            case "om":
                            case "or":
                            case "pa":
                            case "pap":
                            case "ps":
                            case "pt":
                            case "so":
                            case "sq":
                            case "sv":
                            case "sw":
                            case "ta":
                            case "te":
                            case "tk":
                            case "ur":
                            case "zu":
                                return 1 == r ? 0 : 1;
                            case "am":
                            case "bh":
                            case "fil":
                            case "fr":
                            case "gun":
                            case "hi":
                            case "ln":
                            case "mg":
                            case "nso":
                            case "xbr":
                            case "ti":
                            case "wa":
                                return 0 === r || 1 == r ? 0 : 1;
                            case "be":
                            case "bs":
                            case "hr":
                            case "ru":
                            case "sr":
                            case "uk":
                                return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
                            case "cs":
                            case "sk":
                                return 1 == r ? 0 : r >= 2 && r <= 4 ? 1 : 2;
                            case "ga":
                                return 1 == r ? 0 : 2 == r ? 1 : 2;
                            case "lt":
                                return r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2;
                            case "sl":
                                return r % 100 == 1 ? 0 : r % 100 == 2 ? 1 : r % 100 == 3 || r % 100 == 4 ? 2 : 3;
                            case "mk":
                                return r % 10 == 1 ? 0 : 1;
                            case "mt":
                                return 1 == r ? 0 : 0 === r || r % 100 > 1 && r % 100 < 11 ? 1 : r % 100 > 10 && r % 100 < 20 ? 2 : 3;
                            case "lv":
                                return 0 === r ? 0 : r % 10 == 1 && r % 100 != 11 ? 1 : 2;
                            case "pl":
                                return 1 == r ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 12 || r % 100 > 14) ? 1 : 2;
                            case "cy":
                                return 1 == r ? 0 : 2 == r ? 1 : 8 == r || 11 == r ? 2 : 3;
                            case "ro":
                                return 1 == r ? 0 : 0 === r || r % 100 > 0 && r % 100 < 20 ? 1 : 2;
                            case "ar":
                                return 0 === r ? 0 : 1 == r ? 1 : 2 == r ? 2 : r >= 3 && r <= 10 ? 3 : r >= 11 && r <= 99 ? 4 : 5
                        }
                    }(n, o)] || u[0] || void 0
                }

                function l(r) {
                    return "-Inf" === r ? Number.NEGATIVE_INFINITY : "+Inf" === r || "Inf" === r ? Number.POSITIVE_INFINITY : parseInt(r, 10)
                }

                function c() {
                    return "undefined" != typeof document ? document.documentElement.lang.replace("-", "_") : h
                }
                var u = {},
                    h = "en",
                    d = [],
                    f = new RegExp(/^\w+\: +(.+)$/),
                    p = new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),
                    m = new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),
                    b = "+intl-icu",
                    v = {
                        locale: c(),
                        fallback: h,
                        placeHolderPrefix: "%",
                        placeHolderSuffix: "%",
                        defaultDomain: "messages",
                        pluralSeparator: "|",
                        add: function(r, n, o, s) {
                            var a = s || this.locale || this.fallback,
                                l = o || this.defaultDomain;
                            return u[a] || (u[a] = {}), u[a][l] || (u[a][l] = {}), u[a][l][r] = n, !1 === function(r, n) {
                                for (var o = 0; o < r.length; o++)
                                    if (n === r[o]) return !0;
                                return !1
                            }(d, l) && d.push(l), this
                        },
                        trans: function(s, a, l, c) {
                            var u = {},
                                h = o(s, l, c, this.locale, this.fallback, u);
                            if (u.isICU) {
                                if (void 0 === r) throw new Error('The dependency "IntlMessageFormat" is required to use ICU MessageFormat but it has not been found. Please read https://github.com/willdurand/BazingaJsTranslationBundle/blob/master/Resources/doc/index.md#using-icu-messageformat');
                                return new r.IntlMessageFormat(h, void 0, void 0, {
                                    ignoreTag: !0
                                }).format(a || {})
                            }
                            return n(h, a || {})
                        },
                        transChoice: function(r, s, l, c, u) {
                            var h = o(r, c, u, this.locale, this.fallback),
                                d = parseInt(s, 10);
                            return void 0 === (l = l || {}).count && (l.count = s), void 0 === h || isNaN(d) || (h = a(h, d, u || this.locale || this.fallback)), n(h, l)
                        },
                        fromJSON: function(r) {
                            if ("string" == typeof r && (r = JSON.parse(r)), r.locale && (this.locale = r.locale), r.fallback && (this.fallback = r.fallback), r.defaultDomain && (this.defaultDomain = r.defaultDomain), r.translations)
                                for (var n in r.translations)
                                    for (var o in r.translations[n])
                                        for (var s in r.translations[n][o]) this.add(s, r.translations[n][o][s], o, n);
                            return this
                        },
                        reset: function() {
                            u = {}, d = [], this.locale = c()
                        }
                    };
                return v
            }, r.exports ? r.exports = c(o(3940)) : (a = [o(3940)], void 0 === (l = "function" == typeof(s = c) ? s.apply(n, a) : s) || (r.exports = l))
        },
        8352: function(r, n) {
            var o, s, a, l;
            l = function() {
                var r = {
                    __esModule: (!0, !0)
                };
                r.Routing = r.Router = void 0;
                var n = function() {
                    function n(r, n) {
                        this.context_ = r || {
                            base_url: "",
                            prefix: "",
                            host: "",
                            port: "",
                            scheme: "",
                            locale: ""
                        }, this.setRoutes(n || {})
                    }
                    return n.getInstance = function() {
                        return r.Routing
                    }, n.setData = function(r) {
                        n.getInstance().setRoutingData(r)
                    }, n.prototype.setRoutingData = function(r) {
                        this.setBaseUrl(r.base_url), this.setRoutes(r.routes), void 0 !== r.prefix && this.setPrefix(r.prefix), void 0 !== r.port && this.setPort(r.port), void 0 !== r.locale && this.setLocale(r.locale), this.setHost(r.host), void 0 !== r.scheme && this.setScheme(r.scheme)
                    }, n.prototype.setRoutes = function(r) {
                        this.routes_ = Object.freeze(r)
                    }, n.prototype.getRoutes = function() {
                        return this.routes_
                    }, n.prototype.setBaseUrl = function(r) {
                        this.context_.base_url = r
                    }, n.prototype.getBaseUrl = function() {
                        return this.context_.base_url
                    }, n.prototype.setPrefix = function(r) {
                        this.context_.prefix = r
                    }, n.prototype.setScheme = function(r) {
                        this.context_.scheme = r
                    }, n.prototype.getScheme = function() {
                        return this.context_.scheme
                    }, n.prototype.setHost = function(r) {
                        this.context_.host = r
                    }, n.prototype.getHost = function() {
                        return this.context_.host
                    }, n.prototype.setPort = function(r) {
                        this.context_.port = r
                    }, n.prototype.getPort = function() {
                        return this.context_.port
                    }, n.prototype.setLocale = function(r) {
                        this.context_.locale = r
                    }, n.prototype.getLocale = function() {
                        return this.context_.locale
                    }, n.prototype.buildQueryParams = function(r, n, o) {
                        var s, a = this,
                            l = new RegExp(/\[\]$/);
                        if (n instanceof Array) n.forEach((function(n, s) {
                            l.test(r) ? o(r, n) : a.buildQueryParams(r + "[" + ("object" == typeof n ? s : "") + "]", n, o)
                        }));
                        else if ("object" == typeof n)
                            for (s in n) this.buildQueryParams(r + "[" + s + "]", n[s], o);
                        else o(r, n)
                    }, n.prototype.getRoute = function(r) {
                        var n = [this.context_.prefix + r, r + "." + this.context_.locale, this.context_.prefix + r + "." + this.context_.locale, r];
                        for (var o in n)
                            if (n[o] in this.routes_) return this.routes_[n[o]];
                        throw new Error('The route "' + r + '" does not exist.')
                    }, n.prototype.generate = function(r, o, s) {
                        var a = this.getRoute(r),
                            l = o || {},
                            c = Object.assign({}, l),
                            u = "",
                            h = !0,
                            d = "",
                            f = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                        if (a.tokens.forEach((function(o) {
                            if ("text" === o[0] && "string" == typeof o[1]) return u = n.encodePathComponent(o[1]) + u, void(h = !1);
                            if ("variable" !== o[0]) throw new Error('The token type "' + o[0] + '" is not supported.');
                            6 === o.length && !0 === o[5] && (h = !1);
                            var s = a.defaults && !Array.isArray(a.defaults) && "string" == typeof o[3] && o[3] in a.defaults;
                            if (!1 === h || !s || "string" == typeof o[3] && o[3] in l && !Array.isArray(a.defaults) && l[o[3]] != a.defaults[o[3]]) {
                                var d = void 0;
                                if ("string" == typeof o[3] && o[3] in l) d = l[o[3]], delete c[o[3]];
                                else {
                                    if ("string" != typeof o[3] || !s || Array.isArray(a.defaults)) {
                                        if (h) return;
                                        throw new Error('The route "' + r + '" requires the parameter "' + o[3] + '".')
                                    }
                                    d = a.defaults[o[3]]
                                }
                                if (!0 !== d && !1 !== d && "" !== d || !h) {
                                    var f = n.encodePathComponent(d);
                                    "null" === f && null === d && (f = ""), u = o[1] + f + u
                                }
                                h = !1
                            } else s && "string" == typeof o[3] && o[3] in c && delete c[o[3]]
                        })), "" === u && (u = "/"), a.hosttokens.forEach((function(r) {
                            var n;
                            "text" !== r[0] ? "variable" === r[0] && (r[3] in l ? (n = l[r[3]], delete c[r[3]]) : a.defaults && !Array.isArray(a.defaults) && r[3] in a.defaults && (n = a.defaults[r[3]]), d = r[1] + n + d) : d = r[1] + d
                        })), u = this.context_.base_url + u, a.requirements && "_scheme" in a.requirements && this.getScheme() != a.requirements._scheme) {
                            var p = d || this.getHost();
                            u = a.requirements._scheme + "://" + p + (p.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + u
                        } else void 0 !== a.schemes && void 0 !== a.schemes[0] && this.getScheme() !== a.schemes[0] ? (p = d || this.getHost(), u = a.schemes[0] + "://" + p + (p.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + u) : d && this.getHost() !== d + (d.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + d + (d.indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + u : !0 === s && (u = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + f) > -1 || "" === f ? "" : ":" + f) + u);
                        if (Object.keys(c).length > 0) {
                            var m = [],
                                b = function(r, o) {
                                    o = null === (o = "function" == typeof o ? o() : o) ? "" : o, m.push(n.encodeQueryComponent(r) + "=" + n.encodeQueryComponent(o))
                                };
                            for (var v in c) c.hasOwnProperty(v) && this.buildQueryParams(v, c[v], b);
                            u = u + "?" + m.join("&")
                        }
                        return u
                    }, n.customEncodeURIComponent = function(r) {
                        return encodeURIComponent(r).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27")
                    }, n.encodePathComponent = function(r) {
                        return n.customEncodeURIComponent(r).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|")
                    }, n.encodeQueryComponent = function(r) {
                        return n.customEncodeURIComponent(r).replace(/%3F/g, "?")
                    }, n
                }();
                return r.Router = n, r.Routing = new n, r.default = r.Routing, {
                    Router: r.Router,
                    Routing: r.Routing
                }
            }(), s = [], o = l.Routing, void 0 === (a = "function" == typeof o ? o.apply(n, s) : o) || (r.exports = a)
        },
        8229: function(r, n, o) {
            var s, a = o(9755);
            (s = a).fn.select2entity = function(r) {
                return this.each((function() {
                    let n, o = s(this),
                        a = (o.data("page-limit"), o.data("scroll")),
                        l = Date.now(),
                        c = o.data("query-parameters"),
                        u = o.data("render-html"),
                        h = [],
                        d = o.data("req_params");
                    d && s.each(d, (function(r, n) {
                        s('*[name="' + n + '"]').on("change", (function() {
                            o.val(null), o.trigger("change")
                        }))
                    }));
                    let f = s.extend(!0, {
                        createTag: function(r) {
                            if (o.data("tags") && r.term.length > 0) {
                                let n = r.term + o.data("tags-text");
                                return {
                                    id: o.data("new-tag-prefix") + r.term,
                                    text: n
                                }
                            }
                        },
                        ajax: {
                            url: o.data("ajax--url") || null,
                            transport: function(r, a, c) {
                                if (!o.data("ajax--cache")) return n && n.abort(), n = s.ajax(r).fail(c).done(a).always((function() {
                                    n = void 0
                                })), n;
                                var u = l + " page:" + (r.data.page || 1) + " " + r.data.q,
                                    d = o.data("ajax--cacheTimeout");
                                if (void 0 === h[u] || d && Date.now() >= h[u].time) return s.ajax(r).fail(c).done((function(r) {
                                    h[u] = {
                                        data: r,
                                        time: d ? Date.now() + d : null
                                    }, a(r)
                                }));
                                a(h[u].data)
                            },
                            data: function(r) {
                                let n = {
                                        q: r.term,
                                        field_name: o.data("name"),
                                        class_type: o.data("classtype")
                                    },
                                    l = o.data("req_params");
                                if (l && s.each(l, (function(r, o) {
                                    n[r] = s('*[name="' + o + '"]').val()
                                })), a && (n.page = r.page || 1), Array.isArray(c) || "object" == typeof c)
                                    for (var u in c) n[u] || (n[u] = c[u]);
                                return n
                            },
                            processResults: function(r, n) {
                                let o, l = !1,
                                    c = {};
                                return n.page = n.page || 1, s.isArray(r) ? o = r : "object" == typeof r ? (o = r.results, l = r.more) : o = [], a && (c.pagination = {
                                    more: l
                                }), c.results = o, c
                            }
                        }
                    }, r || {});
                    u && (f = s.extend({
                        escapeMarkup: function(r) {
                            return r
                        },
                        templateResult: function(r) {
                            return r.html ? r.html : r.text
                        },
                        templateSelection: function(r) {
                            return r.text
                        }
                    }, f)), o.select2(f)
                })), this
            },
                function(r) {
                    r(document).ready((function() {
                        r('.select2entity[data-autostart="true"]').select2entity()
                    }))
                }(a)
        },
        8301: function(r, n, o) {
            var s = {
                "./config.json": 3548,
                "./frontend/ru.json": 9988
            };

            function a(r) {
                var n = l(r);
                return o(n)
            }

            function l(r) {
                if (!o.o(s, r)) {
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return s[r]
            }
            a.keys = function() {
                return Object.keys(s)
            }, a.resolve = l, r.exports = a, a.id = 8301
        },
        3548: function(r) {
            "use strict";
            r.exports = JSON.parse('{"fallback":"ru","defaultDomain":"messages"}')
        },
        9988: function(r) {
            "use strict";
            r.exports = JSON.parse('{"translations":{"ru":{"frontend":{"total_translation":"Всего %count% перевод|Всего %count% перевода|Всего %count% переводов","reading_mode_horizontal":"Горизонтальный","reading_mode_vertical":"Вертикальный","image_size_default":"Обычный","image_size_medium":"Средний","image_size_full":"На весь экран"}}}}')
        }
    }
]);