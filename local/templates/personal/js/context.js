/*! v:751013 b:default c:loaders/context */
try {
    var cnc = function(e) {
        if (!e || !e.toString) return !1;
        const t = e.toString();
        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
    };
    cnc(Function.prototype.bind) ? Function.prototype.__pbind = Function.prototype.bind : Function.prototype.__pbind = function(e, ...t) {
        let n = this;
        return function(...r) {
            return n.apply(e, [...t, ...r])
        }
    }, cnc(Array.prototype.reduce) ? Object.defineProperty && Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1,
        iterable: !1,
        value: Array.prototype.reduce
    }) : Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1,
        iterable: !1,
        value: function(e) {
            if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var t, n = Object(this),
                r = n.length >>> 0,
                o = 0;
            if (arguments.length >= 2) t = arguments[1];
            else {
                for (; o < r && !(o in n);) o++;
                if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
                t = n[o++]
            }
            for (; o < r; o++) o in n && (t = e(t, n[o], o, n));
            return t
        }
    })
} catch (e) {}(() => {
    var e, t, n = {
            43699: (e, t, n) => {
                "use strict";
                t.a = void 0;
                t.a = function() {
                    var e = Date.now();
                    (0, n(1164).SS)(), (0, n(29479).W)(), (0, n(21760).Z)(), (0, n(76079).c)(), (0, n(73133).K)(), (0, n(25479).Q)(), (0, n(40755).jI)(), (0, n(78257).b)();
                    var t = (0, n(38710).getYaContext)();
                    if (t.AdvManager || (0, n(60572).A)(), t.processCallbacks(), !t.staticOnceLoaded) {
                        (0, n(94449).p)((function() {
                            t.Rum = (0, n(31427).I)().then((function(t) {
                                return t && t.sendAccumulatedDelta("contextJsExec", r - e, {
                                    "-additional": encodeURIComponent(n.lv["json"].stringify({
                                        activeTestIds: (0, n(88772).getAllActiveTestIds)()
                                    }))
                                }), t
                            })), (0, n(86188).w)()
                        })), t.staticOnceLoaded = !0, (0, n(13691).n)(), (0, n(28722).brakeFor)(n(28722).POINT_NAME.LOADER_INIT);
                        var r = Date.now()
                    }
                }
            },
            88205: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER = void 0, t.DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER = "adfoxDebugConsoleEnabled"
            },
            29916: (e, t, n) => {
                "use strict";

                function r(e) {
                    i && n(5945)((function(t) {
                        e(t.debugConsole)
                    }), (function(e) {
                        console.error(e, "External debug bundle loading error")
                    }))
                }

                function o(e, t, n) {
                    void 0 === n && (n = "info");
                    var o = performance.now();
                    r((function(r) {
                        r.log(e, o, n, t)
                    }))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isAdConsoleEnabled = t.enableAdConsole = t.openAdConsole = t.isDebugMode = t.setCurrentRequestParams = t.createRequest = t.setCurrentSessionParams = t.setCurrentSessionState = t.createSession = t.error = t.warning = t.setPlaceParams = t.log = t.createRecord = void 0, t.createRecord = function(e, t) {
                    var n = performance.now();
                    r((function(r) {
                        r.createRecord(e, n, t)
                    }))
                }, t.log = o, t.setPlaceParams = function(e, t) {
                    r((function(n) {
                        n.setPlaceParams(e, t)
                    }))
                }, t.warning = function(e, t) {
                    o(e, t, "warning")
                }, t.error = function(e, t) {
                    o(e, t, "error")
                }, t.createSession = function(e, t) {
                    var n = performance.now();
                    r((function(r) {
                        r.createSession(e, n, t)
                    }))
                }, t.setCurrentSessionState = function(e, t) {
                    var n = performance.now();
                    r((function(r) {
                        r.setCurrentSessionState(e, n, t)
                    }))
                }, t.setCurrentSessionParams = function(e, t) {
                    r((function(n) {
                        n.setCurrentSessionParams(e, t)
                    }))
                }, t.createRequest = function(e, t) {
                    var n = Date.now();
                    r((function(r) {
                        r.createRequest(e, n, t)
                    }))
                }, t.setCurrentRequestParams = function(e, t) {
                    r((function(n) {
                        n.setCurrentRequestParams(e, t)
                    }))
                };
                var i = !1;
                t.isDebugMode = function() {
                    return i
                }, t.openAdConsole = function(e) {
                    e && (i = !0), r((function(t) {
                        e ? t.open() : t.close()
                    }))
                }, t.enableAdConsole = function() {
                    return n(74987).safeLocalStorage.setItem(n(88205).DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER, "1"), "Reload page to view console"
                }, t.isAdConsoleEnabled = function() {
                    return n(42288).yf || n(74987).safeLocalStorage.getItem(n(88205).DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER)
                }
            },
            96054: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Testtag = void 0;
                var i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.getTemplate = function() {
                        return [
                            [4, "marker"],
                            [6, "format"],
                            [1, "shouldRenderInIframe"],
                            [2, null],
                            [1, "hasVideo"],
                            [1, "isRefresh"],
                            [1, null],
                            [1, "isIframe"],
                            [1, "isHover"],
                            [31, null],
                            [1, "adblock"],
                            [3, null]
                        ]
                    }, t.prototype.defaults = function() {
                        return {
                            marker: n(27265).T.WIDGET,
                            adblock: !1,
                            isIframe: (0, n(13058).isInIframe)(window)
                        }
                    }, t
                }(n(42726).f);
                t.Testtag = i
            },
            75539: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, i.apply(this, arguments)
                    };
                t.oV = t.wH = void 0;
                var a;
                ! function(e) {
                    e["marker"] = "marker", e["isIframe"] = "isIframe", e["plugin"] = "plugin", e["isAllCookies"] = "isAllCookies", e["version"] = "version", e["lastBit"] = "lastBit", e["adfoxDomain"] = "adfoxDomain", e["adfoxDomainExpPlace"] = "adfoxDomainExpPlace", e["anYandexRuExp"] = "anYandexRuExp", e["comboLoaderExp"] = "comboLoaderExp", e["redirectToComboLoaderExp"] = "redirectToComboLoaderExp", e["smartSsrExpEnabled"] = "smartSsrExpEnabled", e["smartSsrExpRender"] = "smartSsrExpRender", e["methodCall"] = "methodCall", e["marginsForLazyInitExp"] = "marginsForLazyInitExp"
                }(a = t.wH || (t.wH = {}));
                var s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.getTemplate = function() {
                        return [
                            [4, a.marker],
                            [8, null],
                            [4, a.marginsForLazyInitExp],
                            [1, a.isIframe],
                            [3, a.methodCall],
                            [1, a.isAllCookies],
                            [4, null],
                            [1, a.smartSsrExpEnabled],
                            [1, a.smartSsrExpRender],
                            [12, null],
                            [10, a.version],
                            [1, a.plugin],
                            [2, null],
                            [1, a.lastBit]
                        ]
                    }, t.prototype.defaults = function() {
                        var e, t;
                        return i(((e = {})[a.marker] = n(27265).T.ADFOX, e[a.isIframe] = Number(window.top !== window.self), e[a.plugin] = !1, e[a.isAllCookies] = n(83097).C, e), (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : ((t = {})[a.version] = Number((0, n(98601).e)()), t))
                    }, t
                }(n(42726).f);
                t.oV = s
            },
            85081: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e(e, t, n) {
                        this.isDestroyed = !1, this.destroyHandlers = [], this.win = e, this.doc = e.document, this.params = this.processParams(t), this.callbacks = n
                    }
                    return e.prototype.renderTo = function(e) {
                        this.container = e, this.beforeRender(), this.render(), this.isDestroyed || this.afterRender()
                    }, e.prototype.destroy = function() {
                        this.isDestroyed || (this.isDestroyed = !0, this.removeEvents())
                    }, e.prototype.beforeRender = function() {}, e.prototype.render = function() {}, e.prototype.afterRender = function() {}, e.prototype.processParams = function(e) {
                        return e
                    }, e.prototype.removeEvents = function() {
                        for (var e = 0; e < this.destroyHandlers.length; e++) this.destroyHandlers[e]();
                        this.destroyHandlers = []
                    }, e.prototype.triggerCallback = function(e, t) {
                        !this.isDestroyed && this.callbacks && this.callbacks[e] && this.callbacks[e](t)
                    }, e
                }();
                t["default"] = n
            },
            3796: (e, t) => {
                "use strict";
                t.m = void 0, t.m = 30
            },
            73070: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, i.apply(this, arguments)
                    };
                t.C = void 0;
                var a = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.additional = n, r
                    }
                    return o(t, e), t
                }(Error);
                t.C = function(e, t, r) {
                    var o = i({}, e);
                    ! function(e) {
                        var t = null;
                        e ? e.ownerId || e.data ? e.params || e.data ? e.element || e.containerId || (t = 'Banner options required "element" or "containerId"') : t = 'Banner options required "params" or "data"' : t = 'Banner option "ownerId" is required' : t = "Banner options is required";
                        if (t) throw new Error("adfox#checkBannerOptions: " + t)
                    }(e),
                        function(e) {
                            for (var t, n = ["onDestroy", "onError", "onLoad", "onRender", "onStub", "onOpen", "onClose", "onRewarded", "onRewardedCount", "onAdStart", "onAdEnd", "onPreload"], r = 0; r < n.length; r++)
                                if ("undefined" !== (t = typeof e[n[r]]) && "function" !== t) throw new Error("adfox#checkBannerOptions: " + n[r] + " must be function")
                        }(e),
                        function(e, t) {
                            e.element && e.element instanceof Element ? t.container = e.element : e.containerId && (t.container = window.document.getElementById(e.containerId))
                        }(e, o);
                    var s = function(e, t) {
                        if (!t.container) {
                            var n = e.element ? void 0 : {
                                containerId: e.containerId
                            };
                            throw new a("adfox#checkContainer: Element not found or is not instance of Element", n)
                        }
                        if (!window.document.body.contains(t.container)) throw new Error("adfox#checkContainer: Element isn't inserted in dom");
                        return t
                    }(e, o);
                    return function(e) {
                        var t = e.bid;
                        if (t) {
                            if (!(0, n(85200).isArray)(t)) throw new Error("adfox#bid: Must be an Array");
                            e.bid = (0, n(15735).map)(t, (function(e) {
                                var t = e.campaign_id,
                                    n = e.bid,
                                    r = Number(t);
                                if (!isFinite(r)) throw new Error("adfox#bid.campaign_id: Can not be converted to number");
                                return {
                                    campaign_id: r,
                                    bid: n
                                }
                            }))
                        }
                    }(s), void 0 !== t && function(e) {
                        if (!(0, n(85200).isArray)(e)) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option must be Array");
                        if (e.length < 1) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option can not be empty")
                    }(t), void 0 !== r && function(e) {
                        if (e.tabletWidth && e.phoneWidth && e.tabletWidth < e.phoneWidth) throw new Error("adfox#checkAdaptiveOptions: phoneWidth must be less than tabletWidth")
                    }(r), s
                }
            },
            94024: (e, t) => {
                "use strict";
                var n;
                t.bU = t.hp = void 0,
                    function(e) {
                        e["ON_DESTROY"] = "onDestroy"
                    }(n = t.hp || (t.hp = {}));
                var r = function() {
                    function e() {
                        for (var e in this.cbManagers = {}, n) {
                            var t = n[e];
                            this.cbManagers[t] = new o
                        }
                    }
                    return e.prototype.addCallback = function(e, t) {
                        var n = this.cbManagers[e];
                        n && n.addCallback(t)
                    }, e.prototype.callCallbacksOnceByName = function(e) {
                        var t = this.cbManagers[e];
                        t && t.callCallbacksOnce()
                    }, e
                }();
                t.bU = r;
                var o = function() {
                    function e() {
                        this.callbacks = []
                    }
                    return e.prototype.addCallback = function(e) {
                        this.callbacks.push(e)
                    }, e.prototype.callCallbacksOnce = function() {
                        for (; this.callbacks.length > 0;) this.callbacks.shift()()
                    }, e
                }()
            },
            66470: (e, t, n) => {
                "use strict";
                var r = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                t.e = void 0;
                var o = 1e3 * n(3796).m,
                    i = 1,
                    a = function() {
                        function e(e, t, r) {
                            void 0 === r && (r = {});
                            var o = this;
                            this.win = e, this.bannerOptions = t, this.extOptions = r, this.initialized = !1, this.isHidden = !1, this.isBidRequested = !1, this.ad = null, this.reloadCounter = 0, this.cbManager = new(n(94024).bU), this.headerBidding = n(66038).ns.headerBidding, this.useHB = Boolean(this.headerBidding), this.headerBiddingTimeoutId = null, this.pbjs = (0, n(38973).lU)(), this.bannerId = t.uniqueId, this.slotNumber = i++, this.awaitAdInitialization = new(n(48777).B), Promise.resolve().then((function() {
                                void 0 === o.deferredInitialize && (o.deferredInitialize = !0)
                            }))
                        }
                        return e.prototype.getContainerId = function() {
                            var e = this.bannerOptions,
                                t = e.containerId,
                                n = e.element;
                            return t || n && n.id
                        }, e.prototype.getContainerElement = function() {
                            var e = this.bannerOptions,
                                t = e.element,
                                n = e.containerId;
                            return t || n && window.document.getElementById(n)
                        }, e.prototype.initialize = function() {
                            var e = this;
                            if (!this.initialized) {
                                var t = this.getContainerElement();
                                t && (0, n(74192).initAdSeenObserver)(this.bannerId, t), void 0 === this.deferredInitialize && (this.deferredInitialize = !1), this.useHB = this.useHB || Boolean(this.isIdRegisteredInHB(this.bannerOptions.containerId));
                                var r = this.useHB && !this.headerBidding;
                                if (this.isBidRequested || r) {
                                    var o = (0, n(73852).addAdfoxNamespace)(this.win);
                                    o.hbCallbacks = o.hbCallbacks || [], o.hbCallbacks.push((function() {
                                        e.initAd()
                                    }))
                                } else this.pbjs ? this.pbjs.que.push((function() {
                                    e.initAd()
                                })) : this.initAd()
                            }
                        }, e.prototype.destroyWithoutCallbackInvocation = function() {
                            this.destroy(!1)
                        }, e.prototype.destroy = function(e) {
                            void 0 === e && (e = !0), e && this.cbManager.callCallbacksOnceByName(n(94024).hp.ON_DESTROY), this.destroyAd()
                        }, e.prototype.reload = function(e) {
                            var t = this;
                            if (this.initialized) {
                                this.preparedLayoutConfig = (null == e ? void 0 : e.preparedLayoutConfig) || void 0;
                                var n = Date.now() - this.initializationTime,
                                    r = function() {
                                        t.reloadCall(e)
                                    };
                                clearTimeout(this.lastReloadTimeout), n < o ? this.lastReloadTimeout = window.setTimeout(r, o - n) : r()
                            }
                        }, e.prototype.reloadCall = function(e) {
                            var t = this.getContainerElement();
                            t && this.canReload(e) && (this.reloadCounter++, n(388).kN.continueLoggingTime(this.bannerId), e && e.bid && (this.bannerOptions.bid = e.bid), this.destroyAd({
                                isReload: !0
                            }), this.awaitAdInitialization = new(n(48777).B), (0, n(74192).initAdSeenObserver)(this.bannerId, t), this.initAd())
                        }, e.prototype.canReload = function(e) {
                            if (this.isHidden) return !1;
                            var t = (e || {}).onlyIfWasVisible,
                                r = void 0 === t || t,
                                o = (0, n(74192).getAdSeenObserver)(this.bannerId),
                                i = this.bannerOptions.type;
                            return !("floorAd" !== i && "topAd" !== i && r && o && !o.wasAdSeen)
                        }, e.prototype.hide = function() {
                            var e = this;
                            this.deferredCall((function() {
                                var t;
                                e.isHidden = !0, null === (t = e.ad) || void 0 === t || t.hide()
                            }))
                        }, e.prototype.show = function() {
                            var e = this;
                            this.deferredCall((function() {
                                var t;
                                e.isHidden = !1, null === (t = e.ad) || void 0 === t || t.show()
                            }))
                        }, e.prototype.initAd = function() {
                            var e, t, r;
                            (0, n(29916).isDebugMode)() && (0, n(29916).createSession)(this.bannerId, {}), n(388).kN.setBlockData(this.bannerId, {
                                slotNumber: this.slotNumber,
                                reloadCounter: this.reloadCounter,
                                deferredInitialize: this.deferredInitialize
                            }), n(388).kN.logRenderLabel(this.bannerId, n(388).nx.AdChosen);
                            var o = this.getContainerId();
                            this.headerBidding = n(66038).ns.headerBidding;
                            var i = null === (r = null === (t = null === (e = this.headerBidding) || void 0 === e ? void 0 : e.managerForAdfox) || void 0 === t ? void 0 : t.hasOneOfAdUnits) || void 0 === r ? void 0 : r.call(t, [o]);
                            return this.useHB = Boolean(i), this.useHB ? (n(388).kN.setBlockData(this.bannerId, {
                                isHB: !0
                            }), void this.createBidAd()) : this.pbjs && (this.pbAdUnit = (0, n(38973).H4)(this.pbjs, o), void 0 !== this.pbAdUnit) ? (n(388).kN.setBlockData(this.bannerId, {
                                isHB: !1
                            }), void this.requestPbBids()) : (n(388).kN.setBlockData(this.bannerId, {
                                isHB: !1
                            }), void this.createAd())
                        }, e.prototype.requestPbBids = function() {
                            var e = this,
                                t = this.pbjs,
                                o = this.pbAdUnit.code,
                                i = this.reloadCounter,
                                a = (0, n(38973).fj)(t),
                                s = function() {
                                    var i = (0, n(38973).bA)(t, o);
                                    if (i) {
                                        var a = (0, n(38973).ti)(i, o),
                                            s = r(r(r([], (0, n(15735).map)(a.bidsReceived, n(38973).Rf), !0), (0, n(15735).map)(a.noBids, n(38973).fu), !0), (0, n(15735).map)(a.errorBids, n(38973).MD), !0);
                                        e.createAd(s)
                                    } else e.createAd()
                                },
                                c = function() {
                                    (0, n(28274).errorStrict)("ADFOX_PB_TIMEOUT"), (0, n(18816).Kd)("PrebidJS auction timeout"), e.createAd()
                                };
                            0 === i ? (0, n(38973).Pv)() ? s() : this.cancelAuctionEndHandler = (0, n(38973).ow)(s, c, a) : t.requestBids({
                                adUnitCodes: [o],
                                bidsBackHandler: function(e, t) {
                                    t ? c() : s()
                                },
                                timeout: a
                            })
                        }, e.prototype.createBidAd = function() {
                            var e = this,
                                t = !1;
                            if (this.reloadCounter > 0) {
                                var n = this.getContainerId();
                                this.headerBidding.managerForAdfox.requestBidForContainer(n)
                            }
                            this.headerBiddingTimeoutId || (this.headerBiddingTimeoutId = window.setTimeout((function() {
                                t = !0, e.isBidRequested = !1, e.handleHeaderBiddingTimeout()
                            }), this.getHeaderBiddingTimeout())), this.isBidRequested = !0, this.getBids((function(n) {
                                e.isBidRequested = !1, t || (e.clearHeaderBiddingTimeout(), e.createAd(n))
                            }))
                        }, e.prototype.createAd = function(e, t) {
                            var r, o, i = this;
                            void 0 === e && (e = []), void 0 === t && (t = !0);
                            var a = (0, n(73070).C)(this.bannerOptions);
                            n(388).kN.setBlockData(this.bannerId, {
                                ownerId: this.bannerOptions.ownerId,
                                params: this.bannerOptions.params
                            }), t ? (a.bid = a.bid || [], (r = a.bid).push.apply(r, e)) : a.bid = [];
                            var s = a.onDestroy;
                            a.onDestroy = function() {
                                i.destroyWithoutCallbackInvocation(), s && s()
                            }, a.bannerId = this.bannerId, a.reloadCounter = this.reloadCounter, a.slotNumber = this.slotNumber, a.methodCall = this.extOptions.methodCall || n(75596).MethodCall.UNKNOWN, a.getTrustedOwners = function() {
                                return i.headerBidding && i.headerBidding.getTrustedOwners ? i.headerBidding.getTrustedOwners() : []
                            }, a.layoutConfig = this.preparedLayoutConfig, this.ad = new(n(33116).M)(this.win, a), this.initialized = !0, this.initializationTime = Date.now(), this.awaitAdInitialization.resolve(), null === (o = this.ad) || void 0 === o || o.render()
                        }, e.prototype.destroyAd = function(e) {
                            this.initialized = !1, this.awaitAdInitialization.reject(), this.clearHeaderBiddingTimeout(), this.ad && (this.ad.show(), this.ad.destroy(e), this.ad = null), (0, n(74192).destroyAdSeenObserver)(this.bannerId), this.isHidden = !1
                        }, e.prototype.getBids = function(e) {
                            var t = this.getContainerId();
                            this.headerBidding.managerForAdfox.getBidsForAdfoxByContainerId(t, e)
                        }, e.prototype.isIdRegisteredInHB = function(e) {
                            var t, r, o, i = this.win.YaHeaderBiddingSettings && this.win.YaHeaderBiddingSettings.adUnits || (null === (o = null === (r = null === (t = this.headerBidding) || void 0 === t ? void 0 : t.managerForAdfox) || void 0 === r ? void 0 : r.getAdunits) || void 0 === o ? void 0 : o.call(r));
                            return Boolean((0, n(41486).isString)(e) && i && (0, n(38179).some)(i, (function(t) {
                                return t.code === e
                            })))
                        }, e.prototype.getHeaderBiddingTimeout = function() {
                            var e;
                            try {
                                e = 2 * n(66038).ns.headerBidding.managerForAdfox.getRequestTimeout()
                            } catch (e) {}
                            return e && isFinite(e) || (e = n(97125).E), 2 * (e = Math.max(e, n(97125).E))
                        }, e.prototype.clearHeaderBiddingTimeout = function() {
                            this.cancelAuctionEndHandler ? this.cancelAuctionEndHandler() : this.headerBiddingTimeoutId && (clearTimeout(this.headerBiddingTimeoutId), this.headerBiddingTimeoutId = null)
                        }, e.prototype.handleHeaderBiddingTimeout = function() {
                            (0, n(28274).errorStrict)("ADFOX_HB_TIMEOUT"), (0, n(18816).Kd)("Adfox HeaderBidding failed"), this.createAd([], !1)
                        }, e.prototype.getErrorsLog = function() {
                            var e;
                            return (null === (e = this.ad) || void 0 === e ? void 0 : e.getErrorsLog()) || []
                        }, e.prototype.deferredCall = function(e) {
                            this.initialized ? e() : this.awaitAdInitialization.promise.then((function() {
                                return e()
                            }))
                        }, e
                    }();
                t.e = a
            },
            31144: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.destroy = function() {
                        this.isDestroyed || this.abortXhr(), e.prototype.destroy.call(this)
                    }, t.prototype.sendRequestWithUrl = function(e, t) {
                        var r = this,
                            o = {
                                method: t.method,
                                timeout: 3e4,
                                withCredentials: !0,
                                data: t.data,
                                headers: t.headers,
                                onerror: function(e) {
                                    var t = e.message;
                                    return r.triggerError(t)
                                },
                                onload: function(e) {
                                    return r.processResponse(e)
                                },
                                ontimeout: function() {
                                    return r.triggerError("Timeout")
                                }
                            };
                        this.abortXhr = (0, n(39701).WY)(e, o)
                    }, t.prototype.processResponse = function(e) {
                        this.isDestroyed || this.parseResponseData(e)
                    }, t.prototype.parseResponseData = function(e) {
                        try {
                            var t = n.lv["json"].parse(e);
                            this.triggerCallback("success", t)
                        } catch (e) {
                            this.triggerError("Can't parse backend response")
                        }
                    }, t.prototype.triggerError = function(e) {
                        void 0 === e && (e = "Can't load AdFox prepare code"), this.triggerCallback("error", {
                            type: "adfoxBackend",
                            message: e
                        })
                    }, t
                }(i(n(85081))["default"]);
                t["default"] = a
            },
            83097: (e, t, n) => {
                "use strict";
                t.C = void 0, t.C = (0, n(51245).isPercent)(25)
            },
            35235: (e, t) => {
                "use strict";
                t.i = void 0;
                t.i = function() {
                    return Math.floor(4294967295 * Math.random()) + 1
                }
            },
            17235: (e, t, n) => {
                "use strict";
                t.g = void 0, t.g = function() {
                    return n(73852).ns.pr || n(66038).ns.headerBidding && n(66038).ns.headerBidding.pr
                }
            },
            55008: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.GF = t.Rj = void 0;

                function o(e, t) {
                    void 0 === t && (t = (0, n(35235).i)());
                    var r = n(1689).isAMP ? e.context.sourceUrl : e.location,
                        o = n(1689).isAMP ? e.context.sourceUrl : e.document.referrer;
                    return {
                        pr: (0, n(17235).g)().toString(),
                        pr1: t.toString(),
                        dl: String(r),
                        prr: String(o),
                        extid_loader: (0, n(21625).encode)((0, n(67028).getCookie)(e.document, "_ym_uid") || ""),
                        extid_tag_loader: e.location.hostname
                    }
                }
                t.Rj = function(e) {
                    var t = e.win,
                        i = e.date,
                        a = void 0 === i ? new Date : i,
                        s = o(t, e.pr1);
                    return r(r({}, s), {
                        date: (0, n(7193).Y)(a),
                        pd: a.getDate().toString(),
                        pw: a.getDay().toString(),
                        pv: a.getHours().toString(),
                        pdw: t.screen.width.toString(),
                        pdh: t.screen.height.toString()
                    })
                }, t.GF = o
            },
            22501: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.yw = t.xb = void 0;
                var o = 0,
                    i = 0;
                t.xb = function() {
                    return i++
                };
                t.yw = function(e) {
                    var t, a = e.win,
                        s = e.date,
                        c = void 0 === s ? new Date : s,
                        u = e.pr1,
                        d = void 0 === u ? (0, n(35235).i)() : u,
                        l = e.testtag,
                        f = e.isTurbo,
                        p = void 0 === f ? (0, n(33586).q1)(a) : f,
                        h = e.containerId,
                        v = e.isFullscreen,
                        g = e.preparedLayoutConfig;
                    n(42288).h2 && (0, n(59936).c)((function(e) {
                        return (new e).logBlockSize(void 0, h, g)
                    })), g.set("req_no", o++), g.set("ad_no", (t = (0, n(37209).r)(), i + t)), v && (g.set("w", g.get("win_width")), g.set("width", g.get("win_width")), g.set("h", g.get("win_height")), g.set("height", g.get("win_height")));
                    var _ = r(r({}, (0, n(55008).Rj)({
                            win: a,
                            date: c,
                            pr1: d
                        })), {
                            ylv: "0." + n(1241).cQ,
                            ybv: "0." + (0, n(98601).e)(),
                            ytt: l.toString(),
                            "is-turbo": Number(p).toString(),
                            "skip-token": (0, n(45601).K)(),
                            "ad-session-id": (0, n(49131).getSessionId)(),
                            "layout-config": String(g),
                            "enable-flat-highlight": "1",
                            "pcode-version": "".concat(n(1241).cQ),
                            "aim-banner-id": n(30878).f2.next(),
                            "aim-design-id": n(30878).pv.next(),
                            "aim-subdesign-id": n(30878).Ng.next(),
                            "aim-design-name": n(30878).cF.next(),
                            "disabled-product-types": n(30878).vT.next(),
                            "enable-page-options": n(30878).Ww.next()
                        }),
                        m = (0, n(18677).i)();
                    return m && (_.shyid = m), n(70709).a1 && (_["yaru"] = "true"), _
                }
            },
            18677: (e, t, n) => {
                "use strict";
                t.i = void 0, t.i = function(e) {
                    var t;
                    void 0 === e && (e = window);
                    var r = null === (t = e.yandex) || void 0 === t ? void 0 : t.getSiteUid;
                    if ((0, n(26413).isFunction)(r)) return String(r())
                }
            },
            79931: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.L = void 0;
                var o = window;
                t.L = function(e) {
                    var t = e.ownerId,
                        i = e.params,
                        a = e.onSuccess,
                        s = e.onError,
                        c = function(e) {
                            var t = (0, n(7386).isHermione)() ? location.protocol : "https:",
                                r = (0, n(7386).isHermione)() ? "//".concat(window.location.host) : "".concat("//yandex.ru/ads", "/adfox");
                            return "".concat(t, "//").concat(r, "/").concat(e, "/tracePoint")
                        }(t),
                        u = r(r({}, i), (0, n(55008).GF)(o)),
                        d = (0, n(18677).i)();
                    d && (u.shyid = d);
                    var l = (0, n(91308).v)(u, (function(e) {
                            return void 0 !== e && "" !== e
                        })),
                        f = (0, n(28377).addParamsToUrl)(c, l);
                    (0, n(82649).sendPixel)(f, (function() {
                        (0, n(26413).isFunction)(a) && (0, n(87465).Y)(a)
                    }), (function() {
                        (0, n(26413).isFunction)(s) && (0, n(87465).Y)(s)
                    }))
                }
            },
            33116: (e, t, n) => {
                "use strict";
                var r = function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    },
                    i = Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e["default"] = t
                    },
                    a = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
                        return i(t, e), t
                    },
                    s = function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    },
                    c = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                t.M = void 0;
                var u = c(n(31144)),
                    d = a(n(29916)),
                    l = null,
                    f = null;

                function p() {
                    var e = (0, n(7386).isHermione)() && (null === window || void 0 === window ? void 0 : window.location) && !(0, n(7386).isReleaseTestSuite)() ? "//".concat(window.location.host) : n(70709).Pq;
                    return "".concat(e, "/adfox")
                }
                var h = ["slide", "visibleAfterInit", "insertAfter", "insertPosition", "stick", "stickTo", "stickyColorScheme", "replayMode", "preload"],
                    v = s([], h, !0),
                    g = function() {
                        return (new Date).getTime()
                    },
                    _ = 1;
                (0, n(73133).K)();
                var m = function() {
                    function e(e, t) {
                        var r;
                        if (this._isDestroyed = !1, this._isTurbo = (0, n(33586).q1)(window), this._turboPageUrl = t.turbo_original_url, this._useXhr = !0, this._win = e, this._params = t.params || {}, this._extParams = t.extParams, this._clickMacro = t.clickMacro, this._domain = t.customDomain || p(), this._ownerId = t.ownerId, this._data = t.data, this._darkTheme = Boolean(t.darkTheme), this._containerId = t.containerId, this._pr1 = (0, n(35235).i)(), this._dt = new Date, this._bid = t.bid, this._useProtectMode = !(0, n(62763).isInSafeframe)(this._win) && (t.useProtectMode || this._isTurbo), this._cspNonce = t.cspNonce, this._bannerId = t.bannerId, this._errorsLog = [], this._reloadCounter = t.reloadCounter || 0, this._slotNumber = t.slotNumber || -1, this._insertionCodeParams = t.insertionCodeParams || {}, this._headers = (0, n(10505).l)(t.headers), this._isPreload = t.isPreload, this._type = t.type, this._isFullscreen = "fullscreen" === t.type, this._isFloorAd = "floorAd" === t.type, this.isTopAd = "topAd" === t.type, this.isStickyAd = this._isFloorAd || this.isTopAd, this._platform = t.platform, this._container = t.container, this._fullscreenBannerBlacklist = t.fullscreenBannerBlacklist, this._offset = t.offset, this.zIndex = t.zIndex, this._layoutConfig = void 0, this._markBannerDomNode = t.markBannerDomNode, this.isStickyAd || (this._layoutConfig = t.layoutConfig), this.isStickyAd || this._isFullscreen) {
                            var o = {
                                type: this._type,
                                markBannerDomNode: this._markBannerDomNode,
                                offset: this._offset,
                                key: this._containerId,
                                zIndex: this.zIndex
                            };
                            if ((0, n(85384).isCustomBannerTypeAndExp)(this._type)) {
                                var i = (0, n(2868).initRenderDomNodeExp)(o);
                                this._container = null == i ? void 0 : i.node
                            } else {
                                var a = (0, n(73150).initRenderDomNode)(o) || "";
                                this._container = (0, n(5989).getElementById)(a)
                            }
                        }
                        this.shouldShowStickyAd = !1, this._fullscreenDuration = t.fullscreenDuration || 10, this._fullscreenSlot = null, this._floorAdSlot = null, this._disableFullscreenCloseButton = t.disableFullscreenCloseButton, this._getTrustedOwners = t.getTrustedOwners || function() {
                            return []
                        }, this.testtag = new(n(75539).oV)(((r = {})[n(75539).wH.methodCall] = Number(t.methodCall), r[n(75539).wH.marginsForLazyInitExp] = (0, n(88772).useExperimentFlag)("MARGINS_FOR_LAZY_INIT_EXP") || 0, r)), this._callbacks = {
                            onDestroy: (0, n(95456).K)(t.onDestroy),
                            onError: (0, n(95456).K)(t.onError),
                            onLoad: (0, n(95456).K)(t.onLoad),
                            onRender: (0, n(95456).K)(t.onRender),
                            onStub: (0, n(95456).K)(t.onStub),
                            onVideoEnd: (0, n(95456).K)(t.onVideoEnd),
                            onRewarded: (0, n(95456).K)(t.onRewarded),
                            onRewardedCount: (0, n(95456).K)(t.onRewardedCount),
                            onOpen: (0, n(95456).K)(t.onOpen),
                            onClose: (0, n(95456).K)(t.onClose),
                            onPreload: (0, n(95456).K)(t.onPreload),
                            onAdStart: t.videoCallbacks && (0, n(95456).K)(t.videoCallbacks.onAdStart),
                            onAdEnd: t.videoCallbacks && (0, n(95456).K)(t.videoCallbacks.onAdEnd)
                        }, n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdCreated), n(388).kN.setBlockData(this._bannerId, {
                            containerId: this._containerId
                        })
                    }
                    return e.prototype.render = function() {
                        if (n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdStartedRender), this._data) n(388).kN.stopLoggingTime(this._bannerId), this._processResponseData(this._data), this._data = null;
                        else {
                            if ((0, n(70585).q)({
                                window: this._win,
                                type: this._type,
                                platform: this._platform
                            })) return;
                            (0, n(16429).C)({
                                type: this._type,
                                platform: this._platform
                            }), this._initRequest()
                        }
                    }, e.prototype.destroy = function(e) {
                        if (!this._isDestroyed) {
                            this._isDestroyed = !0, this._transport && this._transport.destroy();
                            var t = this._fullscreenSlot;
                            if (t && t.close(), this._destroyBundle(), this._clean(), this._triggerCallback("onDestroy"), !(null == e ? void 0 : e.isReload)) {
                                var n = this._floorAdSlot;
                                n && n.hide()
                            }
                        }
                    }, e.prototype.hide = function() {
                        this._floorAdSlot ? this._floorAdSlot.hide() : this._bundle && this._bundle.hide()
                    }, e.prototype.show = function() {
                        this._floorAdSlot ? this._floorAdSlot.show() : this._bundle && this._bundle.show()
                    }, e.prototype._initRequest = function(e) {
                        var t = this._collectParams(),
                            r = e && e.prepareCodeUrl || this._getPrepareUrl(t);
                        d.isDebugMode() && (d.setCurrentSessionState(this._bannerId, "dataLoadingBS"), d.createRequest(this._bannerId, {
                            url: r,
                            payload: t,
                            bids: this._bid
                        })), this._initXHRequest(r, {
                            method: n(39701).fq.GET,
                            headers: this._headers,
                            className: null == e ? void 0 : e.className
                        })
                    }, e.prototype._initXHRequest = function(e, t) {
                        var o = this,
                            i = g();
                        this._transport = new u["default"](this._win, {}, {
                            error: function(e) {
                                d.isDebugMode() && d.error(o._bannerId, "ADFOX_LOAD_XHR_ERROR"), (0, n(28274).errorStrict)("ADFOX_LOAD_XHR_ERROR"), o._cleanAfterGoogle(), o._triggerCallback("onError", e)
                            },
                            success: function(e) {
                                d.isDebugMode() && d.setCurrentRequestParams(o._bannerId, {
                                    response: e
                                }), (0, n(28274).errorStrict)("ADFOX_LOAD_SUCCESS"), n(388).kN.logRenderLabel(o._bannerId, n(388).nx.AdfoxXhrRequestLoaded);
                                var a = g() - i;
                                o._transport = null, (null == t ? void 0 : t.className) && (null == e ? void 0 : e.data[0]) && (e.data[0].attributes = r(r({}, e.data[0].attributes), {
                                    className: t.className
                                })), o._processResponseData(e, a)
                            }
                        }), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdfoxXhrRequestPrepared), this._transport.sendRequestWithUrl(e, t)
                    }, e.prototype._initJSONPRequest = function(e) {
                        var t = this,
                            r = (0, n(67729).getRandomInt)(0, Number.MAX_SAFE_INTEGER),
                            o = this._win.Ya,
                            i = !1,
                            a = null,
                            s = function(e, i) {
                                void 0 === i && (i = null), t._cleanAfterGoogle(), o[r] && (o[r] = null), (0, n(28274).errorStrict)("ADFOX_LOAD_JSONP_ERROR", {
                                    reason: e,
                                    exception: i
                                }), t._triggerCallback("onError", {
                                    type: "JSONPRequest",
                                    reason: e,
                                    exception: i
                                })
                            },
                            c = setTimeout((function() {
                                return s("Script execution timeout")
                            }), 15e3);
                        o[r] = function(e) {
                            if (i = !0, t._win.clearTimeout(c), "string" == typeof e) try {
                                e = n.lv["json"].parse(e)
                            } catch (e) {
                                return void s("Parse error", e)
                            } else if ("object" != typeof e) return void s("Incorrect data type");
                            a && (0, n(91709).removeNodeFromParent)(a), t._processResponseData(e)
                        }, (0, n(49820).x)(e) && (e = (0, n(49820).Jx)(e)), e = (0, n(28377).addParamToUrl)(e, "callback", "Ya[".concat(r, "]")), e = (0, n(49820).cv)(e), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdfoxJsonpRequestPrepared), (a = document.createElement("script")).charset = "utf-8", a.src = e, a.onerror = function() {
                            return s("Script loading error")
                        }, a.onload = function() {
                            n(388).kN.logRenderLabel(t._bannerId, n(388).nx.AdfoxJsonpRequestLoaded), i || (t._win.clearTimeout(c), c = setTimeout((function() {
                                return s("Script loading timeout")
                            }), 1e3))
                        }, l(this._win).appendChild(a)
                    }, e.prototype._resetBanner = function(e, t) {
                        var r = this;
                        void 0 === t && (t = function() {
                            return r._initRequest(e)
                        }), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdReload), this._destroyBundle(), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdCreated), e.options && (this._pr1 = (0, n(35235).i)(), this._ownerId = e.options.ownerId || this._ownerId, this._params = e.options.params || this._params, this._domain = e.options.customDomain || p()), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdStartedRender), t()
                    }, e.prototype._destroyBundle = function() {
                        if (this._bundle) {
                            this._bundle.destroy(), this._bundle = null;
                            var e = this._getSlot();
                            e && e.close()
                        }
                    }, e.prototype._collectParams = function() {
                        var e;
                        this._layoutConfig = null !== (e = this._layoutConfig) && void 0 !== e ? e : new(n(43).K)(this._container), this._layoutConfig.set("darkTheme", this._darkTheme);
                        var t = r(r(r({}, this._getDefaultParams()), this._params), {
                            extParams: (0, n(71238).l)(this._extParams),
                            slotNumber: this._slotNumber.toString()
                        });
                        if ((0, n(15137).forEach)(v, (function(e) {
                            t[e] = void 0
                        })), t.pk) try {
                            t.pk = decodeURIComponent(t.pk)
                        } catch (e) {}
                        if (this._bid) {
                            this._bid.forEach((function(e) {
                                e.placement_id && (e.placement_id = String(e.placement_id))
                            })), this._bid.toJSON && (this._bid.toJSON = void 0);
                            var o = (0, n(71238).l)(this._bid) || "";
                            t.bids = (0, n(21625).encode)(o)
                        }
                        t.utf8 = "\u2713";
                        var i = (0, n(67028).getCookie)(document, "_ym_uid");
                        i && (t.duid = (0, n(21625).encode)(i)), this._reloadCounter && (t.adf_refresh = this._reloadCounter, t.refresh = "1"), (0, n(10439).t)(t, {
                            disableSsr: !1,
                            useSsr: !0
                        });
                        var a = (0, n(88772).useExperimentFlag)("ADFOX_FIRST_LOOK_EXP");
                        a && (t["fl"] = a), t["top-ancestor"] = n(22027).KQ, t["top-ancestor-undetermined"] = n(22027).BM ? "0" : "1";
                        var s = (0, n(79287).x2)(2048);
                        return t["grab-orig-len"] = s.length, t.grab = s, t["tga-with-creatives"] = "1", "exp" === (0, n(88772).useExperimentFlag)("USE_SMALL_VIDEO_REQUIREMENTS_FLAG") && (t["use-small-video-requirements"] = "1"), t
                    }, e.prototype._getDefaultParams = function() {
                        return (0, n(22501).yw)({
                            win: this._win,
                            date: this._dt,
                            pr1: this._pr1,
                            testtag: this.testtag,
                            isTurbo: this._isTurbo,
                            container: this._container,
                            containerId: this._containerId,
                            isFullscreen: this._isFullscreen,
                            preparedLayoutConfig: this._layoutConfig
                        })
                    }, e.prototype._getRawUrl = function() {
                        return "".concat("https:", "//").concat(this._domain, "/").concat(this._ownerId, "/").concat("getBulk/v2")
                    }, e.prototype._getShrunkenUrl = function(e) {
                        void 0 === e && (e = this._collectParams());
                        var t = this._getRawUrl(),
                            n = f(e, t);
                        return {
                            url: n.url,
                            headers: n.headers
                        }
                    }, e.prototype._getPrepareUrl = function(e) {
                        void 0 === e && (e = this._collectParams());
                        var t = this._getRawUrl();
                        return (0, n(28377).addParamsToUrl)(t, e)
                    }, e.prototype._processResponseData = function(e, t) {
                        e.data && e.data.length ? this._parseDataInResponse(e.data, t) : this._parseErrorsInResponse(e.errors)
                    }, e.prototype._parseDataInResponse = function(e, t) {
                        for (var n = this, r = 0; r < e.length; r++) this._loadBundle(e[r], t, {
                            onRender: function() {
                                var e = n._container.querySelector(".adfox_placeholder");
                                e && e.remove && e.remove()
                            }
                        })
                    }, e.prototype._parseErrorsInResponse = function(e) {
                        e && e.length && (0, n(38179).some)(e, (function(e) {
                            var t = e.status;
                            return "204" === "".concat(t)
                        })) ? this._onStub() : (this._cleanAfterGoogle(), this._triggerCallback("onError", {
                            message: e,
                            type: "adfoxBackend"
                        }))
                    }, e.prototype._processBundleName = function(e, t) {
                        return "banner.xml" === e && t.vastBase64 ? "banner.inpage" : e
                    }, e.prototype._loadBundle = function(e, t, r) {
                        var o, i = this,
                            a = e.attributes && e.attributes.blockId || "";
                        n(388).kN.setBlockData(this._bannerId, {
                            blockId: a
                        });
                        var s = this._processBundleName(e.type, e.attributes),
                            c = this._processBundleParams(e.attributes, s);
                        if (c.uniqId = this._bannerId, this._isBundleGoogle(s) || this._cleanAfterGoogle(), "banner.reset" === s) {
                            var u = e.attributes && e.attributes.options && e.attributes.options.ownerId || this._ownerId;
                            (0, n(80511).includes)(this._getTrustedOwners(), u) || (this._bid = void 0)
                        }
                        var d = "banner.direct" === s;
                        if (c.isTurbo = this._isTurbo, c.turboPageUrl = this._turboPageUrl, c.directBunnerType = this._type, c.platform = this._platform, c.disableFullscreenCloseButton = this._disableFullscreenCloseButton, c.markBannerDomNode = this._markBannerDomNode, d || (0, n(22501).xb)(), n(388).kN.logRenderLabel(this._bannerId, n(388).nx.AdTypeChosen), n(388).kN.setBlockData(this._bannerId, {
                            product: s
                        }), this._lastBannerName = s, !1 !== this._triggerCallback("onLoad", {
                            bundleName: s,
                            bundleParams: c
                        }, (function() {
                            return i._callOnRender()
                        }), (function() {
                            return i._callOnError()
                        }))) {
                            if ("bid" === s) {
                                if (!(null === (o = this._bid) || void 0 === o ? void 0 : o.length)) return;
                                c.code = this._containerId, c.bids = this._bid
                            } else d && (c.initTime = Number(new Date), c.refresh = this._reloadCounter > 0, c.adfoxContainerId = this._containerId);
                            this._runBundle(s, c, r)
                        }
                    }, e.prototype._callOnRender = function() {
                        this._bundle && this._bundle.callOnRender ? this._bundle.callOnRender() : this._triggerCallback("onRender")
                    }, e.prototype._callOnError = function() {
                        this._bundle && this._bundle.callOnError ? this._bundle.callOnError() : this._triggerCallback("onError", {
                            message: "Custom error",
                            type: "adfoxBackend"
                        })
                    }, e.prototype._runBundle = function(e, t, o) {
                        var i = this,
                            a = t.blockId;
                        a && "n" === a.charAt(0).toLowerCase() && "banner.native" !== e ? e = "banner.native" : "banner.old" === e && (t.pr1 || (t.pr1 = this._pr1), this._useProtectMode && (e = "banner.old.protected"));
                        var s = [(0, n(78322).loadBanner)(e)],
                            c = Array.isArray(this._fullscreenBannerBlacklist) ? this._fullscreenBannerBlacklist : [],
                            u = this._isFullscreen && (0, n(74351).V)({
                                platform: this._platform,
                                window: this._win
                            }) && !(0, n(80511).includes)(c.concat(["banner.direct", "banner.fullscreen", "banner.fullscreen.html", "banner.native"]), e);
                        this.shouldShowStickyAd = this.isStickyAd && (0, n(92870).ti)({
                            window: this._win,
                            platform: this._platform
                        }) && !(0, n(80511).includes)(["banner.fullscreen", "banner.fullscreen.html", "banner.native", "banner.background", "banner.interscroller", "banner.line"], e), u && s.push((0, n(57354).loadNewFullscreenController)()), this.shouldShowStickyAd && s.push(this._loadFloorAdControllerWithTimeout()), d.isDebugMode() && (d.setCurrentSessionState(this._bannerId, "depsLoading"), d.setCurrentSessionParams(this._bannerId, {
                            render: {
                                format: e,
                                bannerId: t.bannerId || null,
                                campaignId: t.campaignId || null,
                                campaignLevel: t.campaignLevel || null
                            }
                        })), Promise.all(s).then((function(a) {
                            var s = a[0],
                                c = a[1];
                            if (u && c && (i._fullscreenSlot = c({
                                options: {
                                    closeButtonTimeout: i._fullscreenDuration,
                                    theme: "black",
                                    centerContent: !0,
                                    hideProgress: !0,
                                    hideKebab: !0,
                                    withoutDomain: !0,
                                    disableFullscreenCloseButton: i._disableFullscreenCloseButton,
                                    markBannerDomNode: i._markBannerDomNode,
                                    type: "fullscreen"
                                },
                                key: i._containerId
                            })), i.shouldShowStickyAd && c) {
                                var l = "100%" === (null == t ? void 0 : t.width) || "100vw" === (null == t ? void 0 : t.width);
                                i._floorAdSlot = c.createSlot({
                                    darkTheme: i._darkTheme,
                                    isTopAd: i.isTopAd,
                                    useFullWidth: l
                                })
                            }
                            n(388).kN.logRenderLabel(i._bannerId, n(388).nx.BundleLoaded), d.isDebugMode() && d.setCurrentSessionState(i._bannerId, "rendering");
                            var f = i._fullscreenSlot || i._floorAdSlot;
                            f && (i._container = f.node);
                            var p = function() {
                                n(388).kN.logRenderLabel(i._bannerId, n(388).nx.BundleRendered), i._renderComplete(e, {
                                    isFullscreen: u,
                                    isFloorAd: i.shouldShowStickyAd && i._isFloorAd,
                                    isTopAd: i.shouldShowStickyAd && i.isTopAd
                                }), o && o.onRender && o.onRender();
                                var t = {};
                                i._floorAdSlot && (t.floorAdSize = i._floorAdSlot.getSize()), i._triggerCallback("onRender", t)
                            };
                            i._bundle = new s(i._win, t, r(r({}, i._callbacks), {
                                onPreload: function(e) {
                                    i._triggerCallback("onPreload", e)
                                },
                                onRender: function() {
                                    i._isPreload && i._isFullscreen && "banner.direct" !== e ? i._preload(p) : (p(), f && (f.onClose = function() {
                                        return i._triggerCallback("onClose")
                                    }, f.show()))
                                },
                                onError: function(t) {
                                    (0, n(28274).errorStrict)("ADFOX_UNKNOWN_ERROR", {
                                        bundleName: e
                                    }), i._triggerCallback("onError", t)
                                },
                                onReset: function(e) {
                                    i._triggerCallback("onReset"), i._resetBanner(e)
                                },
                                onAdfoxBid: function(e) {
                                    var t = e.bundle,
                                        n = e.callbacks;
                                    i._loadBundle(t, void 0, n)
                                },
                                onLoadAnotherBundle: function(e) {
                                    i._destroyBundle(), i._processResponseData(e)
                                },
                                onDestroy: function() {
                                    i.destroy()
                                },
                                onLogEvent: function(t) {
                                    var o = t.name,
                                        i = t.labels,
                                        a = void 0 === i ? {} : i;
                                    (0, n(28274).errorStrict)("ADFOX_LOG_EVENT", r({
                                        text: o,
                                        bundleName: e
                                    }, a))
                                },
                                onLogError: function(t) {
                                    var o = t.name,
                                        i = t.labels,
                                        a = void 0 === i ? {} : i;
                                    (0, n(28274).errorStrict)("ADFOX_LOG_ERROR", r({
                                        text: o,
                                        bundleName: e
                                    }, a))
                                },
                                onVideoEnd: function() {
                                    i._triggerCallback("onVideoEnd")
                                }
                            })), i._bundle.renderTo(i._container, i._layoutConfig)
                        }), (function(t) {
                            (0, n(28274).error)(t, "Chunk ".concat(e, " loading error")), i._triggerCallback("onError", t)
                        }))
                    }, e.prototype._preload = function(e) {
                        var t = this,
                            n = this._getSlot();
                        n && (n.onClose = function() {
                            return t._triggerCallback("onClose")
                        }, n.onShow = function() {
                            return e()
                        }, n.show({
                            isPreload: this._isPreload,
                            triggerOnPreload: function(e) {
                                return t._triggerCallback("onPreload", e)
                            }
                        }))
                    }, e.prototype._triggerCallback = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        if ("onError" === e && this._errorsLog.push({
                            time: new Date,
                            args: t
                        }), this._callbacks[e]) return this._callbacks[e].apply(this._win, t)
                    }, e.prototype._processBundleParams = function(e, t) {
                        var r = this;
                        return this._clickMacro && (e.clickMacro = this._clickMacro), this._useProtectMode && (e.useProtectMode = !0), this._cspNonce && (e.cspNonce = this._cspNonce), "banner.inpage" === t && (0, n(15137).forEach)(h, (function(t) {
                            e[t] = r._params[t]
                        })), e.testtag = this.testtag, e.useXhr = this._useXhr, e.ownerId = this._ownerId, e.insertionCodeParams = this._insertionCodeParams, e.isPreload = this._isPreload, e
                    }, e.prototype.getErrorsLog = function() {
                        return this._errorsLog
                    }, e.prototype._clean = function() {
                        this._container.innerHTML = ""
                    }, e.prototype._isBundleGoogle = function(e) {
                        return "banner.adx" === e || "banner.dfp" === e
                    }, e.prototype._cleanAfterGoogle = function() {
                        this._isBundleGoogle(this._lastBannerName) && this._clean()
                    }, e.prototype._onStub = function() {
                        this._cleanAfterGoogle(), this._triggerCallback("onStub")
                    }, e.prototype._renderComplete = function(e, t) {
                        (0, n(74192).renderingIsCompleted)(this._bannerId);
                        var o = _++,
                            i = r({
                                type: "adfox",
                                format: e,
                                isRefreshed: this._reloadCounter > 0,
                                slotIndex: this._slotNumber,
                                renderNumber: o,
                                reloadCounter: this._reloadCounter
                            }, t);
                        n(388).kN.setBlockData(this._bannerId, {
                            renderNumber: o
                        }), d.isDebugMode() && d.setCurrentSessionState(this._bannerId, "ready"), (0, n(4190).W)(this._bannerId, i)
                    }, e.prototype._getSlot = function() {
                        return this._fullscreenSlot || this._floorAdSlot
                    }, e.prototype._loadFloorAdControllerWithTimeout = function() {
                        var e = this;
                        return Promise.all([(0, n(12890).loadFloorAdController)(void 0, (function() {
                            return e.destroy()
                        })), (0, n(53684).S)()]).then((function(e) {
                            return e[0]
                        }))
                    }, e
                }();
                t.M = (0, n(11959).L)(m)
            },
            78322: (e, t, n) => {
                "use strict";
                t.loadBanner = t.initDeps = void 0, t.initDeps = n(17560).initDeps, t.loadBanner = n(17560).loadBanner
            },
            17560: (e, t, n) => {
                "use strict";

                function r(e) {
                    return new Promise((function(t, r) {
                        n(89663)((function(n) {
                            var r = n.bannerLoader;
                            t(r(e))
                        }), r)
                    }))
                }
                t.initDeps = t.loadBanner = void 0, t.loadBanner = r, t.initDeps = function() {
                    r("banner.direct"), (0, n(62763).loadSafeframe)(window)
                }
            },
            57486: (e, t) => {
                "use strict";
                var n, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Cost = t.Currency = t.Units = void 0,
                    function(e) {
                        e[e["100-TH"] = 0] = "100-TH", e[e["1-TH"] = 1] = "1-TH", e[e["1000-TH"] = 2] = "1000-TH"
                    }(n = t.Units || (t.Units = {})),
                    function(e) {
                        e["RUB"] = "RUB", e["USD"] = "USD"
                    }(r = t.Currency || (t.Currency = {}));
                var o = function() {
                    function e(t) {
                        var n = t.currency,
                            o = void 0 === n ? r.RUB : n;
                        this.currency = o;
                        var i = e.increaseUnit(t),
                            a = i.price,
                            s = i.unit;
                        this.unit = s, this.price = a, this.cpm = e.countCpmFromUnit(t).price
                    }
                    return e.increaseUnit = function(t) {
                        var r = t.price,
                            o = t.unit;
                        if (!e.isInt(r)) {
                            if (o === n["1-TH"]) return e.increaseUnit({
                                price: 100 * r,
                                unit: n["100-TH"]
                            });
                            if (o === n["100-TH"]) return e.increaseUnit({
                                price: 10 * r,
                                unit: n["1000-TH"]
                            })
                        }
                        return {
                            price: Math.floor(r),
                            unit: o
                        }
                    }, e.countCpmFromUnit = function(t) {
                        var r = t.price,
                            o = t.unit;
                        switch (o) {
                            case n["1000-TH"]:
                                return e.countCpmFromUnit({
                                    price: r / 10,
                                    unit: n["100-TH"]
                                });
                            case n["100-TH"]:
                                return e.countCpmFromUnit({
                                    price: r / 100,
                                    unit: n["1-TH"]
                                });
                            default:
                                return {
                                    price: r, unit: o
                                }
                        }
                    }, e.isInt = function(e) {
                        return Number(e.toFixed(3)) % 1 == 0
                    }, e
                }();
                t.Cost = o
            },
            66038: (e, t) => {
                "use strict";
                t.ns = t.p = void 0, t.p = window, t.ns = t.p.Ya || (t.p.Ya = {})
            },
            93100: (e, t) => {
                "use strict";
                t.O = void 0, t.O = {
                    PB_NO_RESPONSE: {
                        code: 101,
                        message: "No response from bidder"
                    },
                    PB_UNKNOWN_BID_REQUEST_STATUS: {
                        code: 111,
                        message: "Unknown status of the bid request at the end of auction"
                    }
                }
            },
            38973: (e, t, n) => {
                "use strict";
                var r = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                t.Bb = t.Pv = t.ow = t.v7 = t.fj = t.lU = t.MD = t.fu = t.Rf = t.ti = t.bA = t.H4 = void 0;
                var o = window;

                function i() {
                    var e;
                    return (null === (e = o.YaHeaderBiddingSettings) || void 0 === e ? void 0 : e.biddersMap) || {}
                }
                t.H4 = function(e, t) {
                    if ((0, n(85200).isArray)(e.adUnits)) return (0, n(94383).find)(e.adUnits, (function(e) {
                        return t === e.code
                    }))
                }, t.bA = function(e, t) {
                    var r = e.getEvents(),
                        o = (0, n(94320).filter)(r, (function(e) {
                            var n = e.eventType,
                                r = e.args;
                            return "auctionEnd" === n && -1 !== r.adUnitCodes.indexOf(t)
                        })),
                        i = o.length;
                    return i ? o[i - 1] : null
                }, t.ti = function(e, t) {
                    var o = e.args,
                        i = o.noBids,
                        a = o.bidsReceived,
                        s = o.bidderRequests,
                        c = (0, n(94320).filter)(a, (function(e) {
                            return e.adUnitCode === t
                        })),
                        u = (0, n(94320).filter)(i, (function(e) {
                            return e.adUnitCode === t
                        })),
                        d = r(r([], (0, n(15735).map)(c, (function(e) {
                            return e.requestId
                        })), !0), (0, n(15735).map)(u, (function(e) {
                            return e.bidId
                        })), !0),
                        l = [];
                    return (0, n(15137).forEach)(s, (function(e) {
                        var r = (0, n(94320).filter)(e.bids, (function(e) {
                            return e.adUnitCode === t
                        }));
                        l.push.apply(l, r)
                    })), {
                        bidsReceived: c,
                        noBids: u,
                        errorBids: (0, n(94320).filter)(l, (function(e) {
                            return -1 === d.indexOf(e.bidId)
                        })),
                        requestedBids: l
                    }
                }, t.Rf = function(e) {
                    var t = n(74699).Jn + e.bidder,
                        r = i()[t] || -1,
                        o = new(n(57486).Cost)({
                            price: e.cpm,
                            currency: e.currency,
                            unit: n(57486).Units["1-TH"]
                        });
                    return {
                        bidderName: t,
                        campaign_id: r,
                        placement_id: "".concat(e.adUnitCode, "_").concat(t),
                        response_time: e.timeToRespond,
                        adId: e.adId,
                        bid: o.price,
                        currency: e.currency,
                        unit: n(57486).Units["1-TH"]
                    }
                }, t.fu = function(e) {
                    var t = n(74699).Jn + e.bidder;
                    return {
                        bidderName: t,
                        campaign_id: i()[t] || -1,
                        placement_id: "".concat(e.adUnitCode, "_").concat(t),
                        response_time: 0,
                        error: {
                            code: n(93100).O.PB_NO_RESPONSE.code
                        }
                    }
                }, t.MD = function(e) {
                    var t = n(74699).Jn + e.bidder;
                    return {
                        bidderName: t,
                        campaign_id: i()[t] || -1,
                        placement_id: "".concat(e.adUnitCode, "_").concat(t),
                        response_time: 0,
                        error: {
                            code: n(93100).O.PB_UNKNOWN_BID_REQUEST_STATUS.code
                        }
                    }
                }, t.lU = function() {
                    var e;
                    return null === (e = o.YaHeaderBiddingSettings) || void 0 === e ? void 0 : e.pbjs
                }, t.fj = function(e) {
                    var t;
                    return (null === (t = o.YaHeaderBiddingSettings) || void 0 === t ? void 0 : t.timeout) || e.getConfig("bidderTimeout") || 3e3
                }, t.v7 = function(e, t) {
                    var r = e.getBidResponses();
                    for (var o in r) {
                        var i = (0, n(94383).find)(r[o].bids, (function(e) {
                            return e.adId === t
                        }));
                        if (i) return i
                    }
                };
                var a = [],
                    s = !1;
                t.ow = function(e, t, n) {
                    if (s) return e(),
                        function() {};
                    var r = !1,
                        o = window.setTimeout((function() {
                            r = !0, t()
                        }), n);
                    return a.push((function() {
                        window.clearTimeout(o), r || e()
                    })),
                        function() {
                            clearTimeout(o), r = !0
                        }
                }, t.Pv = function() {
                    return s
                }, t.Bb = function() {
                    s = !0, (0, n(85486).vD)(a), a.length = 0
                }
            },
            74699: (e, t) => {
                "use strict";
                t.HL = t.Jn = void 0, t.Jn = "pb_", t.HL = function(e) {
                    return 0 === e.indexOf(t.Jn)
                }
            },
            97125: (e, t) => {
                "use strict";
                t.E = void 0, t.E = 300
            },
            75596: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BannerStates = t.MethodCall = void 0,
                    function(e) {
                        e[e["UNKNOWN"] = 0] = "UNKNOWN", e[e["CREATE"] = 1] = "CREATE", e[e["CREATE_ADAPTIVE"] = 2] = "CREATE_ADAPTIVE", e[e["CREATE_SCROLL"] = 3] = "CREATE_SCROLL", e[e["PRELOAD"] = 4] = "PRELOAD"
                    }(t.MethodCall || (t.MethodCall = {})),
                    function(e) {
                        e["desktop"] = "desktop", e["tablet"] = "tablet", e["phone"] = "phone"
                    }(t.BannerStates || (t.BannerStates = {}))
            },
            4190: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.W = void 0;
                var o = (0, n(1966).m)(n(388).nx);
                t.W = function(e, t) {
                    var i = n(388).kN.getInfo(e),
                        a = (0, n(74192).getStatus)(e),
                        s = r(r({}, function(e) {
                            return null === e ? {} : (0, n(12773).reduce)((0, n(73087).getObjectEntries)(e.timing), (function(e, t) {
                                var n = t[0],
                                    r = t[1];
                                return e["adfox.".concat(n in o ? o[n] : n)] = r, e
                            }), {})
                        }(i)), a ? {
                            adSeenWaiting: a.total
                        } : {});
                    if (!(0, n(36484).x)(s)) {
                        var c = r(r({}, t), a ? {
                            isInViewport: a.wasAdSeen
                        } : {});
                        (0, n(4374).sendRumDeltas)(s, c)
                    }
                    n(388).kN.stopLoggingTime(e)
                }
            },
            388: (e, t, n) => {
                "use strict";
                var r, o, i, a, s = (r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.kN = t.nx = void 0;
                var c, u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s(t, e), t
                }(n(31913).x);
                ! function(e) {
                    e["AdChosen"] = "010", e["AdReload"] = "010", e["AdCreated"] = "020", e["AdStartedRender"] = "030", e["AdfoxXhrRequestPrepared"] = "040", e["AdfoxJsonpRequestPrepared"] = "040", e["AdfoxXhrRequestLoaded"] = "050", e["AdfoxJsonpRequestLoaded"] = "050", e["AdTypeChosen"] = "060", e["BundleLoaded"] = "070", e["BundleRendered"] = "080", e["OldRendered"] = "080", e["HBRendered"] = "080"
                }(c = t.nx || (t.nx = {})), t.kN = new u({
                    initSteps: (o = {}, o[c.AdChosen] = 1, o[c.AdReload] = 1, o[c.AdCreated] = 1, o[c.AdStartedRender] = 1, o[c.AdfoxXhrRequestPrepared] = 1, o[c.AdfoxJsonpRequestPrepared] = 1, o),
                    dataSteps: (i = {}, i[c.AdfoxXhrRequestLoaded] = 1, i[c.AdfoxJsonpRequestLoaded] = 1, i),
                    renderSteps: (a = {}, a[c.AdTypeChosen] = 1, a[c.BundleLoaded] = 1, a[c.BundleRendered] = 1, a[c.OldRendered] = 1, a[c.HBRendered] = 1, a)
                })
            },
            17503: (e, t) => {
                "use strict";
                t.R = void 0;
                var n = Math.random();
                t.R = function(e) {
                    for (var t = 0, r = {
                        percent: 0,
                        value: ""
                    }, o = 0; o < e.length && (t += e[o].percent, r = e[o], !(n <= t)); o++);
                    return r.value
                }
            },
            18816: (e, t) => {
                "use strict";
                t.N6 = t.Kd = void 0;
                var n = !1;
                t.Kd = function(e, t) {
                    return void 0 === t && (t = ""), n
                };
                t.N6 = function(e, t) {
                    return void 0 === t && (t = ""), n
                }
            },
            51245: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isPercent = void 0;

                function n(e) {
                    return Number((e / 100).toFixed(2))
                }
                t.isPercent = function(e) {
                    return Math.random() < n(e)
                }
            },
            98601: (e, t, n) => {
                "use strict";
                t.e = void 0;
                var r = n(86071).b.mcodever;
                t.e = function() {
                    return r || n(1241).J
                }
            },
            37209: (e, t) => {
                "use strict";
                t.r = void 0, t.r = function() {
                    var e = window,
                        t = 0;
                    return e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getCapturedCount && (t = e.Ya.Context.AdvManager.getCapturedCount()), t
                }
            },
            33994: (e, t, n) => {
                "use strict";
                t.Cy = t.h9 = void 0;
                var r, o = window;
                t.h9 = function(e) {
                    var t = e.prototype,
                        r = (0, n(94320).filter)((0, n(10407).getObjectKeys)(t), (function(e) {
                            try {
                                return "function" == typeof t[e]
                            } catch (e) {
                                return !1
                            }
                        }));
                    return (0, n(54136).every)(r, (function(e) {
                        return (0, n(61438).checkNativeCode)(t[e])
                    }))
                };
                t.Cy = function(e) {
                    var i = (void 0 === e ? {} : e).onWindowCreation,
                        a = o.XMLHttpRequest && (0, t.h9)(o.XMLHttpRequest),
                        s = Boolean(document.body);
                    return a || !s ? o.XMLHttpRequest : (r || (r = document.createElement("iframe"), (0, n(23185).setStyle)(r, {
                        overflow: "hidden",
                        display: "none",
                        position: "absolute",
                        left: "-9999px",
                        top: "-9999px",
                        width: "1px",
                        height: "1px"
                    })), r.contentWindow || (document.body.appendChild(r), (0, n(26413).isFunction)(i) && r.contentWindow && i(r.contentWindow)), r.contentWindow.XMLHttpRequest)
                }
            },
            95083: (e, t, n) => {
                "use strict";
                var r;
                t.s = void 0,
                    function(e) {
                        e["COMMON"] = "adfoxAsyncParams", e["SCROLL"] = "adfoxAsyncParamsScroll", e["ADAPTIVE"] = "adfoxAsyncParamsAdaptive"
                    }(r || (r = {}));

                function o(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }
                t.s = function(e, t) {
                    var i = t.create,
                        a = t.createScroll,
                        s = t.createAdaptive;
                    (0, n(55220).ji)("adfox");
                    var c = (0, n(12773).reduce)([{
                        key: r.COMMON,
                        cb: i
                    }, {
                        key: r.SCROLL,
                        cb: function(t) {
                            return a.apply(e, t)
                        }
                    }, {
                        key: r.ADAPTIVE,
                        cb: function(t) {
                            return s.apply(e, t)
                        }
                    }], (function(t, r) {
                        var o = r.key,
                            i = r.cb;
                        return t.concat(function(e, t, r) {
                            var o = e[t],
                                i = [];
                            return (0, n(85200).isArray)(o) && (o.length && (0, n(55220).X0)("adfox"), (0, n(15137).forEach)(o, (function(t) {
                                try {
                                    r.call(e, t)
                                } catch (e) {
                                    i.push(e)
                                }
                            }))), e[t] = {
                                push: function(e) {
                                    try {
                                        r(e)
                                    } catch (e) {}
                                }
                            }, i
                        }(e, o, i))
                    }), []);
                    (0, n(15137).forEach)(c, o)
                }
            },
            33586: (e, t, n) => {
                "use strict";
                var r;
                t.q1 = void 0;
                t.q1 = function(e, t) {
                    return void 0 === t && (t = (0, n(33200).$)(e)), void 0 === r ? r = t : r
                }
            },
            94286: (e, t, n) => {
                "use strict";
                t.i = void 0;
                var r = window;
                t.i = new(n(17622).a)(r)
            },
            31832: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.se = t.XW = t.Cp = t.$Z = t.ob = t.j2 = t.ss = t.oo = t.MA = t.Ue = void 0;
                var o = window;

                function i(e) {
                    return a(n(75596).MethodCall.CREATE, e, (function(e) {
                        e.initialize()
                    }))
                }

                function a(e, t, i) {
                    t = r({}, t);
                    var a = (0, n(66648).generateHexString)(10);
                    if (t.uniqueId = a, t.isPreload = e === n(75596).MethodCall.PRELOAD, (0, n(29916).isDebugMode)() && (0, n(29916).createRecord)(a, {
                        type: "adfox",
                        methodCall: e,
                        containerId: t.containerId,
                        config: t
                    }), (0, n(55220).X0)("adfox"), t.containerId) {
                        var s = document.getElementById(t.containerId);
                        if (s && s.children.length > 0) {
                            for (var c = !1, u = 0, d = s.children; u < d.length; u++) {
                                var l = d[u];
                                "SCRIPT" !== l.nodeName && (l.childNodes.length > 0 && (c = !0))
                            }
                            c && "exp" === (0, n(88772).useExperimentFlag)("ADFOX_CONTAINER_CONTENT") && n(49874).logger.traceLog({
                                containerId: t.containerId,
                                href: o.location.href,
                                ownerId: t.ownerId,
                                params: t.params
                            }, "ADFOX_CONTAINER_CONTENT", 100)
                        }
                    }
                    var f = (0, n(38680).L)() && (0, n(88772).useExperimentFlag)("LAZY_LOAD_ADFOX");
                    !1 !== t.lazyLoad && f && (t = r(r({}, t), {
                        lazyLoad: r(r({}, f), t.lazyLoad)
                    }));
                    var p = function(e, t, r) {
                            t.isTurbo = (0, n(33586).q1)(e, t.isTurbo), t.useXhr = (0, n(43303).a)(t);
                            var o = new(n(66470).e)(e, t, r);
                            return n(92647).cx.push(o), o
                        }(o, t, {
                            methodCall: e
                        }),
                        h = "fullscreen" === t.type,
                        v = (0, n(73070).C)(t).container;
                    if ((0, n(29916).isDebugMode)() && (0, n(29916).setPlaceParams)(a, {
                        containerNode: v
                    }), !h && t.lazyLoad) {
                        var g = (0, n(2540).w)({
                            project: "adfox",
                            sequentialLoading: t.sequentialLoading
                        }).addByLazyLoad(v, (function(e) {
                            i(p), e()
                        }), t.lazyLoad);
                        p.cbManager.addCallback(n(94024).hp.ON_DESTROY, g)
                    } else {
                        var _ = null == v ? void 0 : v.getAttribute("id");
                        if (!h && _) {
                            var m = (0, n(2540).w)({
                                project: "adfox",
                                sequentialLoading: t.sequentialLoading
                            }).addByDimensionObserver(v, (function(e) {
                                var r = (0, n(94532).once)(e),
                                    o = t.onRender,
                                    a = t.onError,
                                    s = t.onStub;
                                t.onRender = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    (0, n(26413).isFunction)(o) && o.apply(void 0, e), r()
                                }, t.onError = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    (0, n(26413).isFunction)(a) && a.apply(void 0, e), r()
                                }, t.onStub = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    (0, n(26413).isFunction)(s) && s.apply(void 0, e), r()
                                }, i(p)
                            }));
                            p.cbManager.addCallback(n(94024).hp.ON_DESTROY, m)
                        } else i(p)
                    }
                    return p
                }

                function s(e, t, o) {
                    (0, n(29916).isDebugMode)() && (0, n(29916).setPlaceParams)(e.bannerId, {
                        adaptiveOptions: r({
                            states: t
                        }, o)
                    });
                    var i = n(94286).i.addBanner(e, t, o);
                    e.cbManager.addCallback(n(94024).hp.ON_DESTROY, i)
                }
                t.Ue = i, t.MA = function(e) {
                    return a(n(75596).MethodCall.PRELOAD, e, (function(e) {
                        e.initialize()
                    }))
                }, t.oo = function(e, t, r) {
                    return a(n(75596).MethodCall.CREATE_ADAPTIVE, e, (function(e) {
                        s(e, t, r)
                    }))
                }, t.ss = function(e, t, o) {
                    var i = (0, n(88772).useExperimentFlag)("LAZY_LOAD_DEFAULT_VALUES");
                    return e = r(r({}, e), {
                        lazyLoad: r(r({
                            fetchMargin: 0,
                            mobileScaling: 2
                        }, i), e.lazyLoad)
                    }), a(n(75596).MethodCall.CREATE_SCROLL, e, (function(e) {
                        t ? s(e, t, o) : e.initialize()
                    }))
                }, t.j2 = function(e) {
                    (0, n(92647).uT)(e, (function(e) {
                        (0, n(77642).L)((function() {
                            return e.initialize()
                        }))
                    }))
                }, t.ob = function(e) {
                    (0, n(92647).uT)(e, (function(e) {
                        (0, n(77642).L)((function() {
                            return e.destroy()
                        }))
                    }))
                }, t.$Z = function(e) {
                    (0, n(92647).uT)(e, (function(e) {
                        (0, n(77642).L)((function() {
                            return e.show()
                        }))
                    }))
                }, t.Cp = function(e) {
                    (0, n(92647).uT)(e, (function(e) {
                        (0, n(77642).L)((function() {
                            return e.hide()
                        }))
                    }))
                }, t.XW = function(e) {
                    var t = [];
                    return (0, n(92647).uT)(e, (function(e) {
                        var n = e.getErrorsLog();
                        n.length > 0 && t.push({
                            containerId: e.getContainerId(),
                            errorsLog: n
                        })
                    })), t
                }, t.se = function(e, t, r) {
                    n(49874).logger.traceLog({
                        href: o.location.href,
                        attemptNumber: e,
                        pr1: t,
                        uri: r
                    }, "ADFOX_OLD_CODE", 100);
                    var a = (0, n(50913).$)(t, r);
                    a && i(a)
                }
            },
            77642: (e, t) => {
                "use strict";
                t.L = void 0;
                var n = window;
                t.L = function(e) {
                    try {
                        e()
                    } catch (e) {
                        n.console && n.console.error(e)
                    }
                }
            },
            18010: (e, t, n) => {
                "use strict";
                t.H = void 0;
                t.H = function(e, t) {
                    var r = null,
                        o = {};
                    e instanceof HTMLElement || (0, n(41486).isString)(e) ? (r = e, t && (o = t)) : e && (o = e), (0, n(92647).uT)(r, (function(e) {
                        var t = e.getContainerId(),
                            r = document.getElementById(t);
                        if (r) {
                            var i = new(n(43).K)(r),
                                a = i.get("w"),
                                s = i.get("h");
                            0 === a && 0 === s || (o.preparedLayoutConfig = i, (0, n(77642).L)((function() {
                                return e.reload(o)
                            })))
                        }
                    }))
                }
            },
            92647: (e, t, n) => {
                "use strict";
                t.uT = t.cx = void 0, t.cx = [], t.uT = function(e, r) {
                    void 0 === e && (e = null);
                    var o = function(e) {
                        if ((0, n(41486).isString)(e)) return (0, n(94320).filter)(t.cx, (function(t) {
                            return t.getContainerId() === e
                        }));
                        if (e) return (0, n(94320).filter)(t.cx, (function(t) {
                            return t.getContainerElement() === e
                        }));
                        return t.cx
                    }(e);
                    return (0, n(15137).forEach)(o, (function(e) {
                        r(e)
                    }))
                }
            },
            71422: (e, t, n) => {
                "use strict";
                t.R = void 0, t.R = function() {
                    var e = window,
                        t = e.YA_SSP_PAGE && e.YA_SSP_ERROR_LOGS;
                    (e.YA_MOB_SDK_PAGE && e.YA_SDK_ERROR_LOGS || t) && (0, n(41110).on)(window, "error", (function(e) {
                        var r = t ? "UNCAUGHT_SSP" : "UNCAUGHT_SDK";
                        n(49874).logger.error(e, r, {
                            code: r
                        }, 100)
                    }))
                }
            },
            26134: (e, t, n) => {
                "use strict";
                t.rG = void 0;

                function r(e) {
                    return void 0 === e && (e = window), String(e.location)
                }

                function o(e) {
                    return void 0 === e && (e = window), (0, n(21625).encode)((0, n(67028).getCookie)(e.document, "_ym_uid") || "")
                }

                function i(e) {
                    return void 0 === e && (e = window), e.location.hostname
                }

                function a(e) {
                    if (void 0 === e && (e = window), e.Ya) {
                        var t = e.Ya.adfoxCode && e.Ya.adfoxCode.pr,
                            n = e.Ya.headerBidding && e.Ya.headerBidding.pr;
                        return t || n
                    }
                }
                t.rG = function(e) {
                    return void 0 === e && (e = window), {
                        adSessionId: (0, n(49131).getSessionId)(),
                        location: r(e),
                        extid_loader: o(e),
                        extid_tag_loader: i(e),
                        pr: a(e)
                    }
                }
            },
            931: (e, t, n) => {
                "use strict";
                t.V = void 0;
                var r = window;

                function o() {
                    n(73852).ns.pr = r.pr = (0, n(35235).i)(), n(66038).ns.headerBidding && (n(66038).ns.headerBidding.pr = n(73852).ns.pr)
                }
                t.V = function() {
                    n(73852).ns.pr = function() {
                        "number" != typeof r.pr && (r.pr = n(66038).ns.headerBidding && n(66038).ns.headerBidding.pr || (0, n(35235).i)());
                        return r.pr
                    }(), n(73852).ns.create = n(31832).Ue, n(73852).ns.createScroll = n(31832).ss, n(73852).ns.createAdaptive = n(31832).oo, n(73852).ns.reload = n(18010).H, n(73852).ns.destroy = n(31832).ob, n(73852).ns.initialize = n(31832).j2, n(73852).ns.hide = n(31832).Cp, n(73852).ns.show = n(31832).$Z, n(73852).ns.preload = n(31832).MA, n(73852).ns.getErrorsLog = n(31832).XW, n(73852).ns.clearSession = o, n(73852).ns.getPageRequestParams = n(26134).rG, n(73852).ns.resolveAuction = n(38973).Bb, n(73852).ns.tracePoint = n(79931).L, n(66038).ns.openAdConsole = n(29916).openAdConsole, n(66038).ns.enableAdConsole = n(29916).enableAdConsole, (0, n(29916).isAdConsoleEnabled)() && (0, n(29916).openAdConsole)(!0), "function" != typeof r.AdFox_getCodeScript && (r.AdFox_getCodeScript = n(31832).se), (0, n(95083).s)(r, {
                        create: n(31832).Ue,
                        createScroll: n(31832).ss,
                        createAdaptive: n(31832).oo
                    })
                }
            },
            33356: (e, t, n) => {
                "use strict";
                t.H = void 0;
                var r = ["https://yastatic.net/", "https://avatars.mds.yandex.net/", "https://mc.yandex.ru/", "https://ads.adfox.ru"];
                t.H = function() {
                    for (var e = (0, n(50775).getHead)(window), t = 0; t < r.length; t++) {
                        var o = document.createElement("link");
                        o.rel = "preconnect", o.href = r[t], e.appendChild(o)
                    }
                }
            },
            54569: (e, t, n) => {
                "use strict";
                t.p = void 0, t.p = !(0, n(36191).testProperty)("display:flex") || !n(71232).H || !window.Promise
            },
            11959: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    };
                t.L = void 0, t.L = function(e) {
                    var t, r = function(e) {
                            return "number" == typeof e && isFinite(e) && !(e % 1)
                        },
                        a = function(e) {
                            (0, n(38559).report)(t.readyToShowEvent), e(t.content), t = void 0
                        };
                    return function(e) {
                        function n() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return o(n, e), n.prototype._loadBundle = function(n) {
                            for (var o = this, s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
                            if (n.attributes && n.attributes.lastBanner)
                                if (t) a((function(t) {
                                    return e.prototype._loadBundle.apply(o, i([t], s, !1))
                                }));
                                else {
                                    var u = n.attributes.lastBanner,
                                        d = u.content,
                                        l = u.readyToShowEvent,
                                        f = u.sheduleCount;
                                    r(f) && (t = {
                                        content: d,
                                        readyToShowEvent: l,
                                        sheduleCount: f
                                    }).sheduleCount--, e.prototype._loadBundle.apply(this, i([n], s, !1))
                                }
                            else t && "number" == typeof t.sheduleCount && t.sheduleCount--, e.prototype._loadBundle.apply(this, i([n], s, !1))
                        }, n.prototype._resetBanner = function(n) {
                            var r = this;
                            t && t.sheduleCount <= 0 ? e.prototype._resetBanner.call(this, n, (function() {
                                return a((function(t) {
                                    return e.prototype._loadBundle.call(r, t)
                                }))
                            })) : e.prototype._resetBanner.call(this, n)
                        }, n
                    }(e)
                }
            },
            73852: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getScriptStringForSettingGlobalVars = t.ns = t.addAdfoxNamespace = void 0;
                t.addAdfoxNamespace = function(e) {
                    return e.Ya || (e.Ya = {}), e.Ya.adfoxCode || (e.Ya.adfoxCode = {}), e.Ya.adfoxCode
                }, t.ns = (0, t.addAdfoxNamespace)(window);
                var n = function() {
                    var e = Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isXhr),
                        n = Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isControl);
                    return 'ns["xhrExperiment"] = {isXhr: '.concat(e, ", isControl: ").concat(n, "};")
                };
                t.getScriptStringForSettingGlobalVars = function(e) {
                    var r = e.isXhr;
                    return [";(function (w) {", "var ns = (".concat(t.addAdfoxNamespace.toString(), ")(w);"), 'ns["isXhr"] = '.concat(r, ";"), n(), "})(window);"].join("")
                }
            },
            86071: (e, t, n) => {
                "use strict";
                t.b = void 0;
                var r = (0, n(28377).parseUrlUsingCache)(window.location.href),
                    o = r.hash.substr(1) || r.search;
                t.b = (0, n(28377).parseQueryString)(o)
            },
            31582: (e, t) => {
                "use strict";
                t.n = void 0;
                t.n = function(e) {
                    return e.replace(/^http:/, "https:")
                }
            },
            38559: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clearCache = t.report = void 0;
                var r = {};
                t.report = function(e, t) {
                    "string" != typeof e || "" === e || t && r[e] || (r[e] = !0, (0, n(44327).d)(e))
                }, t.clearCache = function() {
                    0
                }
            },
            39701: (e, t, n) => {
                "use strict";
                var r, o, i = (r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.WY = t.fq = void 0,
                    function(e) {
                        e["GET"] = "GET", e["POST"] = "POST", e["HEAD"] = "HEAD"
                    }(o = t.fq || (t.fq = {}));
                var a = function() {
                        function e(e, t) {
                            this.url = e, this.params = t
                        }
                        return e.prototype.open = function() {
                            this.xr.open(this.params.method, this.url), this.setSettings()
                        }, e.prototype.setSettings = function() {
                            this.setCallbacks()
                        }, e.prototype.setTimeout = function() {
                            var e = this,
                                t = this.params.timeout;
                            t && t > 0 && (this.timer = window.setTimeout((function() {
                                e.onTimeout(), e.abort()
                            }), t))
                        }, e.prototype.clearTimeout = function() {
                            this.timer && clearTimeout(this.timer)
                        }, e.prototype.setCallbacks = function() {
                            var e = this,
                                t = function(t) {
                                    return e.onError(t && t.message || "Error!")
                                };
                            this.xr.onerror = t, this.xr.ontimeout = t
                        }, e.prototype.onLoad = function(e) {
                            this.clearTimeout(), this.params.onload && this.params.onload(e)
                        }, e.prototype.onTimeout = function() {
                            this.isTimeouted = !0, this.params.ontimeout && this.params.ontimeout()
                        }, e.prototype.onError = function(e, t) {
                            this.isTimeouted || (this.clearTimeout(), this.params.onerror && this.params.onerror({
                                message: e,
                                code: t,
                                xr: this.xr
                            }))
                        }, e.prototype.send = function() {
                            this.setTimeout(), this.xr.send(this.params.data)
                        }, e.prototype.abort = function() {
                            this.xr && this.xr.abort()
                        }, e
                    }(),
                    s = function(e) {
                        function t(t, r) {
                            var o = e.call(this, t, r) || this,
                                i = (0, n(33994).Cy)();
                            return o.xr = new i, o.open(), o
                        }
                        return i(t, e), t.prototype.setCallbacks = function() {
                            var t = this;
                            e.prototype.setCallbacks.call(this);
                            var n = this.xr;
                            n.onreadystatechange = function() {
                                4 === n.readyState && (200 === n.status || 304 === n.status ? t.onLoad(n.response) : t.onError(n.statusText, n.status))
                            }
                        }, t.prototype.setSettings = function() {
                            e.prototype.setSettings.call(this), this.addHeaders(), this.xr.withCredentials = this.params.withCredentials
                        }, t.prototype.abort = function() {
                            4 !== this.xr.readyState && e.prototype.abort.call(this)
                        }, t.prototype.addHeaders = function() {
                            var e = this,
                                t = this.params.headers;
                            t && (0, n(38715).forOwn)(t, (function(t, n) {
                                return e.xr.setRequestHeader(n, t)
                            }))
                        }, t
                    }(a),
                    c = function(e) {
                        function t(t, r) {
                            var o = e.call(this, (0, n(31582).n)(t), r) || this;
                            return o.xr = new window.XDomainRequest, o.open(), o
                        }
                        return i(t, e), t.prototype.setCallbacks = function() {
                            var t = this;
                            e.prototype.setCallbacks.call(this), this.xr.onload = function() {
                                return t.onLoad(t.xr.responseText)
                            }
                        }, t.prototype.send = function() {
                            var t = this;
                            setTimeout((function() {
                                return e.prototype.send.call(t)
                            }), 0)
                        }, t
                    }(a);
                t.WY = function(e, t) {
                    void 0 === t && (t = {});
                    var n = {
                            method: t.method || o.POST,
                            withCredentials: void 0 === t.withCredentials || t.withCredentials,
                            timeout: t.timeout,
                            data: t.data,
                            headers: t.headers,
                            onerror: t.onerror,
                            onload: t.onload,
                            ontimeout: t.ontimeout
                        },
                        r = window.XDomainRequest ? new c(e, n) : new s(e, n);
                    return r.send(),
                        function() {
                            return r.abort()
                        }
                }
            },
            45601: (e, t, n) => {
                "use strict";
                t.K = void 0, t.K = function() {
                    var e = window,
                        t = "";
                    return n(1689).isAMP && e.context.master.Ya && e.context.master.Ya.getSkipToken ? t = e.context.master.Ya.getSkipToken() : e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getSkipToken && (t = e.Ya.Context.AdvManager.getSkipToken()), t
                }
            },
            10505: (e, t, n) => {
                "use strict";
                t.l = void 0, t.l = function(e) {
                    if (!(0, n(7153).isObject)(e)) return {};
                    var t = {};
                    return (0, n(38715).forOwn)(e, (function(e, r) {
                        (0, n(41486).isString)(r) && "X" === r.charAt(0).toUpperCase() && (t[r] = String(e))
                    })), t
                }
            },
            1241: (e, t) => {
                "use strict";
                t.J = t.cQ = void 0, t.cQ = 751013, t.J = 751013
            },
            43303: (e, t, n) => {
                "use strict";
                t.a = void 0;
                var r = (0, n(33586).q1)(window);
                n(73852).ns.xhrExperiment || (n(73852).ns.xhrExperiment = function(e) {
                    var t = n(86071).b["xhr-experiment-winner"],
                        r = (0, n(94320).filter)(e, (function(e) {
                            return e.name === t
                        }))[0];
                    return r ? r.value : (0, n(17503).R)(e)
                }([{
                    name: "xhr",
                    percent: 1,
                    value: {
                        isXhr: !0,
                        isControl: !1
                    }
                }, {
                    name: "control",
                    percent: 0,
                    value: {
                        isXhr: !1,
                        isControl: !0
                    }
                }, {
                    name: "common",
                    percent: 0,
                    value: {
                        isXhr: !1,
                        isControl: !1
                    }
                }]));
                var o = [255389],
                    i = Boolean(n(73852).ns.isXhr) || Boolean(n(86071).b.xhr);
                t.a = function(e) {
                    var t = e.useXhr,
                        a = e.ownerId,
                        s = Boolean(n(73852).ns.xhrExperiment && n(73852).ns.xhrExperiment.isXhr);
                    return (!a || -1 === o.indexOf(a)) && (r || i || t || s)
                }
            },
            47175: (e, t) => {
                "use strict";
                t.L = void 0, t.L = function() {
                    var e = window.context,
                        t = (null == e ? void 0 : e.sourceUrl) || "";
                    return t && /^http:\/\/localhost:/i.test(t) ? "localhost" : t
                }
            },
            24931: (e, t) => {
                "use strict";
                t.i = void 0, t.i = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return (e.navigator || {}).userAgent || ""
                    } catch (e) {
                        return ""
                    }
                }
            },
            60571: (e, t, n) => {
                "use strict";
                t.B = void 0, t.B = function(e) {
                    return void 0 === e && (e = window), /Apple/.test(e.navigator.vendor) && (0, n(67576).b)(e)
                }
            },
            19399: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isFirefox = void 0, t.isFirefox = (0, n(97885).v)()
            },
            97885: (e, t) => {
                "use strict";
                t.v = void 0;
                t.v = function(e) {
                    return void 0 === e && (e = window), /firefox/.test(e.navigator.userAgent.toLowerCase())
                }
            },
            82377: (e, t, n) => {
                "use strict";
                t.P = void 0, t.P = function(e) {
                    void 0 === e && (e = window);
                    var t = e.navigator.userAgent.toLowerCase();
                    return /ipad|iphone|ipod/.test(t) && !e.MSStream && !(0, n(73673).f)(e)
                }
            },
            50880: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isMobile = void 0, t.isMobile = (0, n(63607).isMobile)()
            },
            63607: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isMobile = void 0;
                t.isMobile = function(e) {
                    void 0 === e && (e = window);
                    var t = e.navigator.userAgent;
                    return "string" == typeof t && t.includes("Mac") && "ontouchend" in document || /Mobi|Android|iPad/i.test(t)
                }
            },
            98667: (e, t, n) => {
                "use strict";
                t.B = void 0;
                t.B = function(e) {
                    void 0 === e && (e = window);
                    var t = (0, n(24931).i)(e).toLowerCase();
                    if (t.indexOf("android") > -1) return !1;
                    var r = t.replace(/\(.+?\)/gi, "").split(" ").map((function(e) {
                        return e.trim().split("/")[0]
                    })).filter((function(e) {
                        return e && "mobile" !== e
                    }));
                    return 4 === r.length && "mozilla" === r[0] && "applewebkit" === r[1] && "version" === r[2] && "safari" === r[3]
                }
            },
            13677: (e, t, n) => {
                "use strict";
                t.z = void 0, t.z = function(e) {
                    return void 0 === e && (e = window), (0, n(98667).B)(e) || (0, n(82377).P)(e) || (0, n(60571).B)(e)
                }
            },
            62141: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isSafariBasedBrowser = void 0, t.isSafariBasedBrowser = (0, n(13677).z)()
            },
            78383: (e, t) => {
                "use strict";
                t.H = void 0, t.H = function(e) {
                    return "ontouchstart" in e
                }
            },
            6780: (e, t) => {
                "use strict";
                t.H = void 0, t.H = function(e) {
                    return function(e) {
                        return Boolean(e.PointerEvent)
                    }(e) && function(e) {
                        return (e.navigator || {}).maxTouchPoints || 0
                    }(e) > 0
                }
            },
            64029: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isTouchDevice = void 0, t.isTouchDevice = (0, n(67576).b)()
            },
            64278: (e, t, n) => {
                "use strict";
                t.g = void 0;
                var r = (0, n(15735).map)(n(93199).pg, (function(e) {
                    return "(".concat(e, "any-pointer:coarse)")
                })).join(",");
                t.g = function(e) {
                    return (0, n(74392).V)(e, r)
                }
            },
            34820: (e, t, n) => {
                "use strict";
                t.nI = t.xA = void 0, t.xA = (0, n(15735).map)(n(93199).pg, (function(e) {
                    return "(".concat(e, "touch-enabled)")
                })).join(","), t.nI = function(e) {
                    return (0, n(74392).V)(e, t.xA)
                }
            },
            67576: (e, t, n) => {
                "use strict";
                t.b = void 0, t.b = function(e) {
                    return void 0 === e && (e = window), (0, n(6780).H)(e) || (0, n(64278).g)(e) || (0, n(34820).nI)(e) || (0, n(78383).H)(e)
                }
            },
            73673: (e, t) => {
                "use strict";
                t.f = void 0;
                t.f = function(e) {
                    return void 0 === e && (e = window), e.navigator.userAgent.indexOf("UCBrowser") > -1
                }
            },
            83946: (e, t) => {
                "use strict";
                t.m = void 0, t.m = function(e) {
                    return void 0 === e && (e = window), e.devicePixelRatio || e.screen.deviceXDPI && e.screen.deviceXDPI / e.screen.logicalXDPI || 1
                }
            },
            52452: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getPixelRatio = void 0, Object.defineProperty(t, "getPixelRatio", {
                    enumerable: !0,
                    get: function() {
                        return n(83946).m
                    }
                })
            },
            194: (e, t) => {
                "use strict";
                t.E = void 0, t.E = function() {
                    return Boolean(window.location.ancestorOrigins)
                }
            },
            52210: (e, t, n) => {
                "use strict";
                t.g = void 0, t.g = (0, n(194).E)()
            },
            36191: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.testProperty = void 0;
                t.testProperty = function(e, t) {
                    if (void 0 === t && (t = n(93199).pg), !e) return !1;
                    var r = e.split(":"),
                        o = r[0],
                        i = r[1];
                    if (i || (i = "none"), window.CSS && window.CSS.supports) {
                        for (var a = 0; a < t.length; a++)
                            if (window.CSS.supports(t[a] + o, i)) return !0;
                        return !1
                    }
                    var s = new Image;
                    for (a = 0; a < t.length; a++)
                        if (s.style.cssText = "".concat(t[a] + o, ":").concat(i), s.style.length) return !0;
                    return !1
                }
            },
            7506: (e, t) => {
                "use strict";
                t.i = void 0;
                t.i = function(e) {
                    void 0 === e && (e = window);
                    var t = e.Object;
                    try {
                        var n = {};
                        return t.defineProperty(n, "sentinel", {}), "sentinel" in n
                    } catch (e) {
                        return !1
                    }
                }
            },
            71232: (e, t, n) => {
                "use strict";
                t.H = void 0, t.H = (0, n(7506).i)()
            },
            18502: (e, t, n) => {
                "use strict";
                t.i = void 0, t.i = !(0, n(61438).checkNativeCode)(Math.random) || Math.random() == Math.random()
            },
            70321: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.random = void 0, t.random = n(18502).i ? n(67763).U : function() {
                    return Math.random()
                }
            },
            67763: (e, t, n) => {
                "use strict";
                t.U = void 0;
                var r = 2147483647,
                    o = Date.now() * (0, n(20354).no)() % r;
                t.U = function() {
                    return ((o = 16807 * o % r) - 1) / 2147483646
                }
            },
            61438: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.checkNativeCode = void 0, t.checkNativeCode = function(e) {
                    if (!e || !e.toString) return !1;
                    var t = e.toString();
                    return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
                }
            },
            24265: (e, t) => {
                "use strict";
                t.s = void 0;
                var n = null;
                t.s = function(e) {
                    var t;
                    if (!n) {
                        var r = document.createElement("iframe");
                        r.src = "about:blank", document.body.appendChild(r), r.contentWindow && (n = null === (t = r.contentWindow) || void 0 === t ? void 0 : t.window), document.body.removeChild(r)
                    }
                    return n ? n[e] : window[e]
                }
            },
            95121: (e, t, n) => {
                "use strict";
                var r;
                t.LA = t.YE = void 0;
                t.YE = function(e) {
                    void 0 === e && (e = document.body);
                    var t = (0, n(98318).$)(e);
                    return {
                        JSON: t.contentWindow.JSON,
                        clean: function() {
                            return (0, n(37267).Q)(t)
                        }
                    }
                }, t.LA = function(e) {
                    return void 0 === e && (e = window), void 0 === r && (r = i(e) ? e.JSON : {
                        stringify: o("stringify"),
                        parse: o("parse")
                    }), r
                };
                var o = function(e) {
                    return function(n) {
                        var r = (0, t.YE)(),
                            o = r.JSON,
                            i = r.clean;
                        try {
                            return o[e](n)
                        } finally {
                            i()
                        }
                    }
                };

                function i(e) {
                    return void 0 === e && (e = window), e.JSON && (0, n(61438).checkNativeCode)(e.JSON.stringify) && (0, n(61438).checkNativeCode)(e.JSON.parse)
                }
            },
            48742: (e, t, n) => {
                "use strict";
                t.C = void 0, t.C = function(e, t) {
                    var r = e[t];
                    if (!(0, n(61438).checkNativeCode)(r)) {
                        var o = r;
                        try {
                            delete e[t];
                            var i = e[t];
                            "function" == typeof i && (r = i), e[t] = o
                        } catch (e) {}
                    }
                    return r
                }
            },
            22511: (e, t) => {
                "use strict";
                var n, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getDownlink = void 0,
                    function(e) {
                        e[e["UNKNOWN"] = 0] = "UNKNOWN", e[e["ETHERNET"] = 1] = "ETHERNET", e[e["WIFI"] = 2] = "WIFI", e[e["CELL_2G"] = 3] = "CELL_2G", e[e["CELL_3G"] = 4] = "CELL_3G"
                    }(n || (n = {})),
                    function(e) {
                        e["BLUETOOTH"] = "bluetooth", e["CELLULAR"] = "cellular", e["ETHERNET"] = "ethernet", e["MIXED"] = "mixed", e["NONE"] = "none", e["OTHER"] = "other", e["UNKNOWN"] = "unknown", e["WIFI"] = "wifi", e["WIMAX"] = "wimax"
                    }(r || (r = {})), t.getDownlink = function(e) {
                    void 0 === e && (e = window);
                    var t = e.navigator.connection,
                        o = void 0 === t ? {} : t;
                    if ("number" == typeof o.downlink) return o.downlink;
                    if ("number" == typeof o.downlinkMax) return o.downlinkMax;
                    if ("string" == typeof o.type || "number" == typeof o.type) switch (o.type) {
                        case r.BLUETOOTH:
                            return 3;
                        case n.CELL_2G:
                            return .384;
                        case n.CELL_3G:
                        case r.CELLULAR:
                            return 2;
                        case r.WIMAX:
                            return 37;
                        case r.NONE:
                            return 0;
                        case n.ETHERNET:
                        case r.ETHERNET:
                        case n.WIFI:
                        case r.WIFI:
                        case r.MIXED:
                            return 10;
                        case n.UNKNOWN:
                        case r.UNKNOWN:
                        case r.OTHER:
                    }
                    return -1
                }
            },
            8627: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.assignProperties = void 0, t.assignProperties = function(e, t) {
                    for (var r in t)(0, n(98581).hasOwnProperty)(t, r) && (e[r] = t[r])
                }
            },
            91308: (e, t, n) => {
                "use strict";
                t.v = void 0, t.v = function(e, t) {
                    var r = {};
                    return (0, n(10407).getObjectKeys)(e).forEach((function(n) {
                        t(e[n], n) && (r[n] = e[n])
                    })), r
                }
            },
            38715: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.forOwn = void 0, t.forOwn = function(e, t, r) {
                    for (var o in e)(0, n(98581).hasOwnProperty)(e, o) && t.call(r, e[o], o, e)
                }
            },
            73087: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getObjectEntries = void 0, t.getObjectEntries = function(e) {
                    return "function" == typeof Object.entries ? Object.entries(e) : (0, n(10407).getObjectKeys)(e).map((function(t) {
                        return [t, e[t]]
                    }))
                }
            },
            10407: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getObjectKeys = void 0, t.getObjectKeys = function(e) {
                    if ("function" == typeof Object.keys) return Object.keys(e);
                    var t = [];
                    for (var r in e)(0, n(98581).hasOwnProperty)(e, r) && t.push(r);
                    return t
                }
            },
            98581: (e, t) => {
                "use strict";
                t.hasOwnProperty = void 0, t.hasOwnProperty = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
            },
            1966: (e, t, n) => {
                "use strict";
                t.m = void 0, t.m = function(e) {
                    var t = {};
                    return (0, n(38715).forOwn)(e, (function(e, n) {
                        t[e] = n
                    })), t
                }
            },
            36484: (e, t, n) => {
                "use strict";
                t.x = void 0, t.x = function(e) {
                    return !(0, n(10407).getObjectKeys)(e).length
                }
            },
            7153: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isObject = void 0, t.isObject = function(e) {
                    var t = typeof e;
                    return Boolean(e) && ("object" === t || "function" === t)
                }
            },
            80908: (e, t, n) => {
                "use strict";
                t.O = void 0, t.O = function(e, t) {
                    var r = {};
                    return (0, n(10407).getObjectKeys)(e).forEach((function(n) {
                        r[n] = t(e[n], n)
                    })), r
                }
            },
            95721: (e, t, n) => {
                "use strict";
                t.U = void 0;
                t.U = function(e, t) {
                    for (var r = 0, o = t.split("."); r < o.length; r++) {
                        var i = o[r];
                        if (!(0, n(7153).isObject)(e)) {
                            e = void 0;
                            break
                        }
                        e = e[i]
                    }
                    return e
                }
            },
            9562: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.set = void 0;
                t.set = function(e, t, r) {
                    if (!(0, n(7153).isObject)(e)) return e;
                    for (var o = e, i = t.split("."), a = i.pop(), s = 0, c = i; s < c.length; s++) {
                        var u = c[s],
                            d = e[u];
                        e = (0, n(7153).isObject)(d) ? d : e[u] = {}
                    }
                    return e[a] = r, o
                }
            },
            71238: (e, t, n) => {
                "use strict";
                t.l = void 0, t.l = function(e) {
                    var t;
                    try {
                        t = n.lv["json"].stringify(e)
                    } catch (e) {}
                    return t
                }
            },
            30224: (e, t, n) => {
                "use strict";
                t.p = void 0, t.p = function(e, t) {
                    (0, n(64459).$)(e) ? e.dispatch(t): e(t)
                }
            },
            9744: (e, t, n) => {
                "use strict";
                t.k = void 0, t.k = function(e, t) {
                    e.forEach((function(e) {
                        (0, n(30224).p)(e, t)
                    }))
                }
            },
            50773: (e, t, n) => {
                "use strict";
                t.M = void 0;
                var r = function() {
                    function e() {
                        this.on = [], this.once = []
                    }
                    return e.prototype.add = function() {
                        for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        return (e = this.on).push.apply(e, n),
                            function() {
                                return t.remove.apply(t, n)
                            }
                    }, e.prototype.addOne = function() {
                        for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        return (e = this.once).push.apply(e, n),
                            function() {
                                return t.remove.apply(t, n)
                            }
                    }, e.prototype.promise = function() {
                        var e = this;
                        return new Promise((function(t) {
                            return e.addOne(t)
                        }))
                    }, e.prototype.dispatch = function(e) {
                        var t = this.once;
                        this.once = [], (0, n(9744).k)(this.on, e), (0, n(9744).k)(t, e)
                    }, e.prototype.removeAll = function() {
                        this.on.length = 0, this.once.length = 0
                    }, e.prototype.remove = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.on = this.on.filter((function(t) {
                            return e.indexOf(t) < 0
                        })), this.once = this.once.filter((function(t) {
                            return e.indexOf(t) < 0
                        }))
                    }, e
                }();
                t.M = r
            },
            64459: (e, t) => {
                "use strict";
                t.$ = void 0, t.$ = function(e) {
                    return "function" == typeof e.dispatch
                }
            },
            57747: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ValueSignal = void 0;
                var i = function(e) {
                    function t(t, n) {
                        void 0 === n && (n = function(e, t) {
                            return e === t
                        });
                        var r = e.call(this) || this;
                        return r.checkToEqualFunction = n, r.value = t, r
                    }
                    return o(t, e), t.prototype.getValue = function() {
                        return this.value
                    }, t.prototype.subscribeValueCondition = function(e, t) {
                        return this.add((function(r) {
                            e(r) && (0, n(30224).p)(t, r)
                        }))
                    }, t.prototype.subscribeValueConditionOnce = function(e, t) {
                        var r = this.subscribeValueCondition(e, (function(e) {
                            r(), (0, n(30224).p)(t, e)
                        }));
                        return r
                    }, t.prototype.dispatch = function(t) {
                        this.checkToEqualFunction(this.value, t) || (this.value = t, e.prototype.dispatch.call(this, t))
                    }, t
                }(n(50773).M);
                t.ValueSignal = i
            },
            32691: (e, t) => {
                "use strict";
                t.M = void 0, t.M = "__ADB_CONFIG__"
            },
            27944: (e, t) => {
                "use strict";
                t.f = void 0,
                    function(e) {
                        e[e["doNotMatch"] = 0] = "doNotMatch", e[e["image"] = 1] = "image", e[e["refresh"] = 2] = "refresh", e[e["all"] = 3] = "all", e[e["scrumble"] = 4] = "scrumble"
                    }(t.f || (t.f = {}))
            },
            72218: (e, t, n) => {
                "use strict";
                t.v = void 0;
                var r = {
                    pid: "",
                    encode: {
                        key: ""
                    },
                    replaceClasses: [],
                    detect: {
                        links: [],
                        custom: [],
                        iframes: []
                    },
                    cookieMatching: {
                        publisherTag: "",
                        publisherKey: "",
                        types: [],
                        type: n(27944).f.doNotMatch,
                        redirectUrl: ["//an.yand", "ex.ru/map", "uid/"].join(""),
                        imageUrl: "/static/img/logo.gif/",
                        cryptedUidUrl: "https://http-check-headers.yandex.ru",
                        cryptedUidCookie: "crookie",
                        cryptedUidTTL: 336
                    },
                    additionalParams: {},
                    cookieTTL: 336,
                    extuidCookies: [],
                    debug: !1,
                    force: !1,
                    disableShadow: !1,
                    forcecry: {
                        enabled: !1,
                        expires: 0,
                        percent: 0
                    },
                    treeProtection: {
                        enabled: !1
                    },
                    countToXhr: !1,
                    blockToIframeSelectors: [],
                    pcodeDebug: !1
                };
                t.v = "string" == typeof n(32691).M ? r : n(32691).M
            },
            2681: (e, t, n) => {
                "use strict";
                t.F = void 0, t.F = function(e) {
                    return !!e && ((0, n(26413).isFunction)(e.encodeCSS) && (0, n(26413).isFunction)(e.encodeUrl) && (0, n(26413).isFunction)(e.decodeUrl) && (0, n(26413).isFunction)(e.isEncodedUrl))
                }
            },
            49820: (e, t, n) => {
                "use strict";
                t.cv = t.x = t.Jx = void 0, t.Jx = function(e) {
                    return (0, n(2681).F)(n(72218).v.fn) ? n(72218).v.fn.decodeUrl(e) : e
                }, t.x = function(e) {
                    return !!(0, n(2681).F)(n(72218).v.fn) && n(72218).v.fn.isEncodedUrl(e)
                }, t.cv = function(e) {
                    return (0, n(2681).F)(n(72218).v.fn) ? n(72218).v.fn.encodeUrl(e) : e
                }
            },
            73266: (e, t) => {
                "use strict";

                function n(e) {
                    return void 0 === e && (e = window), Boolean(e.ampSeen)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isAMP = t.isAmp = void 0, t.isAmp = n, t.isAMP = n()
            },
            1056: (e, t, n) => {
                "use strict";
                t.e = void 0, t.e = function(e, t) {
                    return (0, n(94320).filter)(e, (function(e) {
                        return !(0, n(38179).some)(t, (function(t) {
                            return e === t
                        }))
                    }))
                }
            },
            54136: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.every = void 0;
                t.every = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (!t(e[n], n, e)) return !1;
                    return !0
                }
            },
            94320: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.filter = void 0;
                t.filter = function(e, t, n) {
                    for (var r = [], o = 0; o < e.length; o++) {
                        var i = e[o];
                        t.call(n, i, o, e) && r.push(i)
                    }
                    return r
                }
            },
            94383: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.find = void 0;
                var r = [].find;
                t.find = (0, n(61438).checkNativeCode)(r) ? function(e, t) {
                    return r.call(e, t)
                } : function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (t(r, n, e)) return r
                    }
                }
            },
            15137: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.forEach = void 0;
                t.forEach = function(e, t, n) {
                    for (var r = 0; r < e.length; r++) t.call(n, e[r], r, e)
                }
            },
            80511: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.includes = void 0, t.includes = function(e, t) {
                    return -1 !== (0, n(22886).indexOf)(e, t)
                }
            },
            22886: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.indexOf = void 0;
                t.indexOf = function(e, t, r, o) {
                    void 0 === r && (r = 0), void 0 === o && (o = n);
                    for (var i = r; i < e.length; i++)
                        if (o(e[i], t)) return i;
                    return -1
                };
                var n = function(e, t) {
                    return e === t
                }
            },
            85200: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isArray = void 0;
                var r = (0, n(48742).C)(Array, "isArray");
                t.isArray = r ? function(e) {
                    return r.call(Array, e)
                } : function(e) {
                    return "Array" === (0, n(91130).M)(e)
                }
            },
            15735: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.map = void 0;
                t.map = function(e, t, n) {
                    for (var r = new Array(e.length), o = 0; o < e.length; o++) r[o] = t.call(n, e[o], o, e);
                    return r
                }
            },
            12773: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.reduce = void 0;
                t.reduce = function(e, t, n) {
                    var r = 0;
                    for (arguments.length < 3 && (r = 1, n = e[0]); r < e.length; r++) n = t(n, e[r], r, e);
                    return n
                }
            },
            38179: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.some = void 0;
                t.some = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }
            },
            94114: (e, t) => {
                "use strict";
                t.N = void 0;
                t.N = function(e, t) {
                    for (var n = e.slice(); n.length;) {
                        var r = t(n.shift());
                        if (!r) return;
                        n.push.apply(n, r)
                    }
                }
            },
            98370: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.unique = void 0, t.unique = function(e) {
                    for (var t = {}, r = 0; r < e.length; r++) {
                        var o = e[r];
                        o && (t[o] = r)
                    }
                    return (0, n(10407).getObjectKeys)(t)
                }
            },
            385: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.capitalizeFirst = void 0, t.capitalizeFirst = function(e) {
                    if (!e) return e;
                    var t = e.split("");
                    return t[0] = t[0].toUpperCase(), t.join("")
                }
            },
            55362: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clamp = void 0, t.clamp = function(e, t, n) {
                    return e > n ? n : e < t ? t : e
                }
            },
            67028: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.deleteCookie = t.getCookie = t.setCookie = void 0;
                t.setCookie = function(e, t, r, o) {
                    void 0 === o && (o = {}), (0, n(47634).J)(o.expires) && (o.expires = o.expires.toUTCString()), void 0 === o.path && (o.path = "/");
                    var i = "";
                    for (var a in o) o[a] && (i += "; " + a, !0 !== o[a] && (i += "=" + o[a]));
                    try {
                        var s = "".concat(encodeURIComponent(String(t)), "=").concat(encodeURIComponent(String(r)));
                        return e.cookie = s + i
                    } catch (e) {
                        return
                    }
                };
                t.getCookie = function(e, t) {
                    var n = [];
                    try {
                        n = e.cookie ? e.cookie.split("; ") : []
                    } catch (e) {}
                    for (var r, o = /(%[0-9A-Z]{2})+/g, i = 0; i < n.length; i++) {
                        var a = n[i].split("="),
                            s = a.slice(1).join("=");
                        try {
                            var c = a[0].replace(o, decodeURIComponent);
                            if (s.replace(o, decodeURIComponent), t === c) {
                                r = decodeURIComponent(s);
                                break
                            }
                        } catch (e) {
                            return
                        }
                    }
                    return r
                };
                t.deleteCookie = function(e, n, o) {
                    (0, t.setCookie)(e, n, "", r(r({}, o), {
                        expires: new Date(0)
                    }))
                }
            },
            98022: (e, t) => {
                "use strict";
                t.Q = void 0, t.Q = function(e, t) {
                    var n = void 0 === t ? {} : t,
                        r = n.content,
                        o = n.size,
                        i = e.ownerDocument.createElement("iframe");
                    i.scrolling = "no", i.setAttribute("allowfullscreen", ""), i.style.display = "block", o && (i.height = o.height, i.width = o.width), e.appendChild(i);
                    var a = i.contentDocument;
                    return a.open(), r && a.write(r), a.close(), a.body.style.margin = "0", i.style.borderWidth = "0", i
                }
            },
            53018: (e, t) => {
                "use strict";
                var n;
                t.K = void 0;
                t.K = function(e) {
                    return void 0 === e && (e = window), n || (n = e.document.createElement("div")), n
                }
            },
            14679: (e, t, n) => {
                "use strict";
                t.A = void 0;
                var r = (0, n(53018).K)(window);
                t.A = function(e, t) {
                    var o = void 0 !== r.style[e];
                    if (o && t && (0, n(41486).isString)(t)) try {
                        r.style.cssText = "".concat(e, ": ").concat(t, ";");
                        var i = Boolean(r.style.cssText);
                        return r.style.cssText = "", i
                    } catch (e) {
                        return !1
                    }
                    return o
                }
            },
            74392: (e, t, n) => {
                "use strict";
                t.V = void 0, t.V = function(e, t) {
                    if (!(0, n(26413).isFunction)(e.matchMedia)) return !1;
                    var r = e.matchMedia(t);
                    return (0, n(7153).isObject)(r) && Boolean(r.matches)
                }
            },
            26044: (e, t, n) => {
                "use strict";
                t.b = void 0;
                var r = {};
                t.b = function(e) {
                    return void 0 === e && (e = ""), r[e] || function(e) {
                        for (var t = "".concat(e[0].toUpperCase()).concat(e.slice(1)), o = 0; o < n(93199).q1.length; o++) {
                            var i = n(93199).q1[o],
                                a = i ? "".concat(i).concat(t) : e;
                            if ((0, n(14679).A)(a)) return r[e] = a
                        }
                        return r[e] = e
                    }(e)
                }
            },
            93199: (e, t) => {
                "use strict";
                t.pg = t.q1 = void 0, t.q1 = ["", "webkit", "moz", "o", "ms"], t.pg = ["", "-webkit-", "-ms-", "-moz-", "-o-"]
            },
            23185: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setStyle = void 0, t.setStyle = function(e, t) {
                    var r = e.style;
                    for (var o in t) {
                        if (t.hasOwnProperty(o)) r[(0, n(26044).b)(o)] = t[o]
                    }
                }
            },
            61672: (e, t, n) => {
                "use strict";
                t.m = void 0;
                var r = Date && (0, n(26413).isFunction)(Date.now);
                t.m = r ? function() {
                    return Date.now()
                } : function() {
                    return (new Date).getTime()
                }
            },
            7193: (e, t) => {
                "use strict";
                t.Y = void 0;
                var n = function(e, t) {
                    var n = e.toString();
                    return "0000".substr(0, t - n.length) + n
                };
                t.Y = function(e) {
                    var t = e.getFullYear(),
                        r = n(e.getMonth() + 1, 2),
                        o = n(e.getDate(), 2),
                        i = n(e.getHours(), 2),
                        a = n(e.getMinutes(), 2),
                        s = n(e.getSeconds(), 2),
                        c = n(e.getMilliseconds(), 3),
                        u = function(e) {
                            var t = -e.getTimezoneOffset(),
                                r = n(Math.floor(Math.abs(t) / 60), 2),
                                o = n(Math.abs(t) % 60, 2);
                            return "".concat(t >= 0 ? "+" : "-").concat(r, ":").concat(o)
                        }(e);
                    return "".concat(t, "-").concat(r, "-").concat(o, "T").concat(i, ":").concat(a, ":").concat(s, ".").concat(c).concat(u)
                }
            },
            52406: (e, t, n) => {
                "use strict";
                t.h = void 0;
                var r = n(63541).z.length;
                t.h = r > 0 ? n(63541).z[r - 1].ownerDocument.defaultView : window
            },
            54825: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = !1,
                        n = !1,
                        r = !1;
                    return !0 === e ? t = !0 : "object" == typeof e && (t = Boolean(e.capture), n = Boolean(e.passive), r = Boolean(e.once)), {
                        capture: t,
                        passive: n,
                        once: r
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addEventListener = t.createFullOptionsObject = void 0, t.createFullOptionsObject = r, t.addEventListener = function(e, t, o, i) {
                    var a = r(i),
                        s = n(60622).FF ? a : a.capture,
                        c = a.once && !n(60622).vE ? function(e) {
                            u(), o.call(this, e)
                        } : o,
                        u = function() {
                            (0, n(40428).fu)(e, t, c, s)
                        };
                    return (0, n(40428).hS)(e, t, c, s), u
                }
            },
            41110: (e, t, n) => {
                "use strict";

                function r(e) {
                    e && e.un()
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.un = t.on = void 0, t.on = function(e, t, o, i, a) {
                    if (!e || !o) return null;
                    var s, c = (0, n(12251).protect)("handler:" + t, o, i),
                        u = (0, n(84368).D)(c),
                        d = {
                            un: function() {
                                (0, n(40428).fu)(e, t, u)
                            }
                        };
                    return a && a.once && !n(60622).vE && (s = u, u = function(e) {
                        s.call(this, e), r(d)
                    }), n(60622).wI ? (0, n(40428).hS)(e, t, u, a) : (0, n(40428).hS)(e, t, u, a && a.capture), d
                }, t.un = r
            },
            84368: (e, t) => {
                "use strict";

                function n() {
                    this.returnValue = !1
                }

                function r() {
                    this.cancelBubble = !0
                }
                t.D = void 0, t.D = function(e) {
                    return function(t) {
                        var o = function(e) {
                            return e.stopPropagation || (e.stopPropagation = r), e.preventDefault || (e.preventDefault = n), e.target || (e.target = e.srcElement), e
                        }(t);
                        e.call(this, o)
                    }
                }
            },
            20697: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    var n = e.getPropertyValue(t) || "0";
                    return parseFloat(n)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getElementInnerSize = void 0, t.getElementInnerSize = function(e) {
                    var t = e,
                        o = (0, n(32688).getStyle)(t);
                    if ("inline" === o.getPropertyValue("display")) {
                        if (!t.offsetParent) return {
                            width: 0,
                            height: 0
                        };
                        t = t.offsetParent
                    }
                    var i = t.getBoundingClientRect(),
                        a = i.width,
                        s = i.height;
                    Math.abs(a - t.offsetWidth) >= 1 && (a = t.offsetWidth), Math.abs(s - t.offsetHeight) >= 1 && (s = t.offsetHeight);
                    var c = r(o, "padding-top") + r(o, "padding-bottom"),
                        u = r(o, "padding-left") + r(o, "padding-right"),
                        d = r(o, "border-top-width") + r(o, "border-bottom-width"),
                        l = r(o, "border-left-width") + r(o, "border-right-width"),
                        f = Math.max(0, a - u - l),
                        p = Math.max(0, s - c - d);
                    return {
                        width: f > 1 ? f : 0,
                        height: p > 1 ? p : 0
                    }
                }
            },
            85206: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.calculateSizeInfo = t.MAX_BLOCK_HEIGHT = void 0, t.MAX_BLOCK_HEIGHT = 9e3;
                t.calculateSizeInfo = function(e) {
                    var t = window.pageXOffset,
                        r = window.pageYOffset,
                        o = function() {
                            var e = document.createElement("div");
                            (0, n(12139).setStyle)(e, {
                                display: "table",
                                "table-layout": "fixed",
                                width: "100%",
                                height: "10000px",
                                visibility: "hidden"
                            });
                            var t = document.createElement("div");
                            t.style.display = "table-row";
                            var r = document.createElement("div");
                            return r.style.display = "table-cell", t.appendChild(r), e.appendChild(t), e
                        }(),
                        i = {
                            inner: (0, n(20697).getElementInnerSize)(e),
                            rect: (0, n(34403).getBoundingClientRect)(e)
                        };
                    e.appendChild(o);
                    var a = function(e) {
                        var t = function(e) {
                                var t = e.parentElement;
                                return t ? function(e) {
                                    return "inline" === window.getComputedStyle(e).display
                                }(t) ? t.parentElement : t : null
                            }(e),
                            r = {
                                inner: (0, n(20697).getElementInnerSize)(e),
                                rect: (0, n(34403).getBoundingClientRect)(e)
                            };
                        if (!t) return r;
                        var o = (0, n(20697).getElementInnerSize)(t);
                        if (o.width < r.inner.width || o.height < r.inner.height) return {
                            inner: {
                                width: Math.min(o.width, r.inner.width),
                                height: Math.min(o.height, r.inner.height)
                            },
                            rect: (0, n(34403).getBoundingClientRect)(t)
                        };
                        return r
                    }(e);
                    if (e.removeChild(o), n(19399).isFirefox) {
                        e.style.position;
                        var s = (0, n(24265).s)("scroll");
                        s.call(window, t, r - 1), s.call(window, t, r)
                    }
                    var c = !1;
                    return i.inner.height === a.inner.height && i.inner.width === a.inner.width && (c = !0), {
                        isFixed: c,
                        origin: i,
                        max: a
                    }
                }
            },
            32688: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getStyle = void 0, t.getStyle = function(e, t) {
                    return void 0 === t && (t = window), ("function" == typeof t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle) || {}
                }
            },
            53945: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hasShadowDomSupport = void 0, t.hasShadowDomSupport = function() {
                    try {
                        return Boolean(document.head.attachShadow)
                    } catch (e) {
                        return !1
                    }
                }
            },
            40428: (e, t, n) => {
                "use strict";
                t.fu = t.hS = void 0;
                t.hS = function(e, t, n) {
                    e.attachEvent("on" + t, n)
                };
                t.fu = function(e, t, n) {
                    e.detachEvent("on" + t, n)
                }, (0, n(48742).C)(document, "addEventListener") && (0, n(48742).C)(document, "removeEventListener") && (t.hS = function(e, t, r, o) {
                    var i = e && (0, n(48742).C)(e, "addEventListener");
                    i && i.call(e, t, r, o)
                }, t.fu = function(e, t, r, o) {
                    var i = e && (0, n(48742).C)(e, "removeEventListener");
                    i && i.call(e, t, r, o)
                })
            },
            53366: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadImage = void 0, t.loadImage = function(e) {
                    var t, r = new Image;
                    (0, n(26413).isFunction)(e.onLoad) && (0, n(41110).on)(r, "load", (function() {
                        return e.onLoad(r)
                    }), e.ctx), (0, n(26413).isFunction)(e.onError) && (0, n(41110).on)(r, "error", e.onError, e.ctx), r.crossOrigin = null !== (t = e.crossOrigin) && void 0 !== t ? t : null, r.src = e.src
                }
            },
            98489: (e, t) => {
                "use strict";
                t.NG = t.rE = void 0, t.rE = ["beforeunload", "pagehide", "unload"], t.NG = function(e, n) {
                    void 0 === n && (n = window);
                    var r = function() {
                            return t.rE.forEach((function(e) {
                                return n.removeEventListener(e, o)
                            }))
                        },
                        o = function(t) {
                            "pagehide" === t.type && t.persisted || (e(t), r())
                        };
                    return t.rE.forEach((function(e) {
                        return n.addEventListener(e, o)
                    })), r
                }
            },
            12139: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.styleToString = t.setStyle = void 0;
                var r = new RegExp(["box-flex", "box-flex-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-height", "opacity", "order", "z-index", "zoom"].join("|"), "i");

                function o(e, t, n, o) {
                    void 0 !== n && void 0 !== t && (n += !r.test(t) && n >>> 0 ? "px" : "", e.style.setProperty ? e.style.setProperty(t, n, o ? "important" : "") : e.style.cssText += ";".concat(t, ": ").concat(n).concat(o ? "!important" : ""))
                }
                t.setStyle = function(e, t, r, i) {
                    (0, n(7153).isObject)(t) ? (i = Boolean(r), (0, n(38715).forOwn)(t, (function(t, n) {
                        o(e, n, t, i)
                    }))) : o(e, t, r, i)
                }, t.styleToString = function(e, t) {
                    void 0 === t && (t = !1);
                    var o = t ? "!important" : "",
                        i = "";
                    return (0, n(38715).forOwn)(e, (function(e, t) {
                        if (void 0 !== e && void 0 !== t) {
                            var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                            e += !r.test(n) && e >>> 0 ? "px" : "", i += "".concat(n, ": ").concat(e).concat(o, ";")
                        }
                    })), i
                }
            },
            60622: (e, t, n) => {
                "use strict";
                t.FF = t.wI = t.vE = void 0, t.vE = !1, t.wI = !1, t.FF = !1;
                try {
                    if ((0, n(7506).i)()) {
                        var r = document.createElement("div"),
                            o = {};
                        Object.defineProperty(o, "once", {
                            get: function() {
                                return t.vE = !0
                            }
                        }), Object.defineProperty(o, "passive", {
                            get: function() {
                                return t.wI = !0
                            }
                        }), Object.defineProperty(o, "capture", {
                            get: function() {
                                return t.FF = !0
                            }
                        }), (0, n(40428).hS)(r, "click", n(85225).noop, o)
                    }
                } catch (e) {}
            },
            61832: (e, t) => {
                "use strict";
                t.r = void 0, t.r = function(e) {
                    for (var t = e, n = [e], r = e.top; t !== r;) t = t.parent, n.push(t);
                    return n
                }
            },
            70008: (e, t) => {
                "use strict";
                t.HP = void 0;
                var n = function() {
                    function e(e) {
                        this.cache = e
                    }
                    return e.prototype.get = function(e) {
                        return this.cache[e]
                    }, e.prototype.has = function(e) {
                        return e in this.cache
                    }, e.prototype.set = function(e, t) {
                        this.cache[e] = t
                    }, e
                }();
                t.HP = function(e, t, r) {
                    return void 0 === t && (t = function(e) {
                        return e
                    }), void 0 === r && (r = new n({})),
                        function() {
                            var n = t.apply(this, arguments);
                            if (r.has(n)) return r.get(n);
                            var o = e.apply(this, arguments);
                            return r.set(n, o), o
                        }
                }
            },
            94532: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.once = void 0, t.once = function(e) {
                    var t = function() {
                        var n;
                        return t = function() {
                            return n
                        }, n = e.apply(this, arguments)
                    };
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
            },
            22027: (e, t, n) => {
                "use strict";
                t.BM = t.KQ = void 0;
                var r = (0, n(72633).D)(),
                    o = r.topAncestor,
                    i = r.isTrusted;
                t.KQ = o, t.BM = i
            },
            72633: (e, t, n) => {
                "use strict";
                t.D = void 0, t.D = function(e) {
                    void 0 === e && (e = window);
                    var t = (0, n(42151).Y)(e);
                    if (t.length > 0) return {
                        topAncestor: t[t.length - 1],
                        isTrusted: !0
                    };
                    var r = (0, n(24479).w)(e.document),
                        o = r.location,
                        i = r.referrer,
                        a = n(601).g ? i : o,
                        s = !n(601).g || (0, n(61832).r)(n(52406).h).length < 2,
                        c = (0, n(28377).parseUrl)(a),
                        u = c.protocol,
                        d = c.hostname,
                        l = c.host,
                        f = c.port;
                    return {
                        topAncestor: (0, n(28377).urlFromUrlObject)({
                            protocol: u,
                            hostname: d,
                            host: l,
                            port: f,
                            originalPath: "",
                            href: "",
                            pathname: "",
                            search: "",
                            hash: ""
                        }),
                        isTrusted: s
                    }
                }
            },
            42151: (e, t, n) => {
                "use strict";
                t.Y = void 0, t.Y = function(e) {
                    return n(52210).g ? (0, n(66779).listToArray)(e.location.ancestorOrigins) : []
                }
            },
            72966: (e, t, n) => {
                "use strict";
                t.D = void 0;
                var r = (0, n(98850).P)();
                t.D = r ? r.src : ""
            },
            98850: (e, t) => {
                "use strict";
                t.P = void 0, t.P = function(e, t) {
                    void 0 === e && (e = document);
                    var n = e.currentScript;
                    if (n) return n;
                    for (var r = e.getElementsByTagName("script"), o = [], i = 0; i < r.length; i++) o.push(r[i]);
                    if ("function" == typeof t) {
                        var a = o.filter(t);
                        return a[a.length - 1]
                    }
                    return o[o.length - 1]
                }
            },
            59936: (e, t, n) => {
                "use strict";
                t.c = void 0, t.c = function(e) {
                    new Promise((function(e) {
                        n(63520)((function(t) {
                            e(t.Logger)
                        }), (function(e) {
                            return console.error(e, "External debug bundle loading error")
                        }))
                    })).then((function(t) {
                        return t && e(t)
                    }))
                }
            },
            50775: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getHead = void 0, t.getHead = function(e) {
                    var t = e.document,
                        n = t.getElementsByTagName("head")[0];
                    return n || (n = t.createElement("head"), t.documentElement.appendChild(n)), n
                }
            },
            91130: (e, t) => {
                "use strict";
                t.M = void 0;
                var n = {}.toString,
                    r = /\[object (\w+)\]/;
                t.M = function(e) {
                    var t = n.call(e);
                    if (!t) return null;
                    var o = t.match(r);
                    if (!o) return null;
                    var i = o[1];
                    return i || null
                }
            },
            30193: (e, t, n) => {
                "use strict";
                t.F = void 0, t.F = function(e) {
                    var t = (0, n(92271).A)(e.documentElement).map((function(e) {
                        return e.ownerDocument
                    }));
                    return t.unshift(e), t.map((function(e) {
                        return {
                            location: (0, n(81915).b)(e.defaultView),
                            referrer: e.referrer
                        }
                    }))
                }
            },
            24479: (e, t, n) => {
                "use strict";
                t.w = void 0, t.w = function(e) {
                    var t = "",
                        r = "";
                    return e && (0, n(30193).F)(e).reverse().forEach((function(e) {
                        var n = e.location,
                            o = e.referrer;
                        t = t || n, r = r || o
                    })), {
                        location: t,
                        referrer: r
                    }
                }
            },
            81915: (e, t) => {
                "use strict";
                t.b = void 0, t.b = function(e) {
                    if (e && e.location) {
                        var t = e.location;
                        return "function" == typeof t.toString ? t.toString() : t.href || ""
                    }
                    return ""
                }
            },
            32056: (e, t) => {
                "use strict";
                t.q = void 0, t.q = function(e) {
                    return e.location.host
                }
            },
            57034: (e, t) => {
                "use strict";
                t.J = void 0, t.J = function() {
                    return window
                }
            },
            18808: (e, t, n) => {
                "use strict";
                t.x2 = void 0;

                function r(e, t) {
                    var r = window,
                        i = r.document;
                    if (t) {
                        var a = function(e) {
                            return e.location.host
                        }(i);
                        if (" ".concat("yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr zen.yandex.ru zen.yandex.com", " ").indexOf(" ".concat(a, " ")) > -1) return t
                    }
                    var s = o(e, i);
                    if ("t\n" === s && r.top !== r.self) try {
                        s = o(e, r.parent.document)
                    } catch (e) {}
                    return (0, n(21625).encode)(s, e)
                }

                function o(e, t) {
                    var n = [],
                        r = 0;
                    n.push("t" + (t.title || "")), r += n[0].length;
                    for (var o = 1; o < 4 && r < e; o++)
                        for (var a = t.getElementsByTagName("h" + o), s = a.length, c = 0; c < s; c++) {
                            var u = i(a[c]);
                            r += u.length, n.push("".concat(o).concat(u))
                        }
                    return n.join("\n") + "\n"
                }

                function i(e) {
                    var t = [],
                        n = "";
                    if (!e) return n;
                    for (t.push(e); t.length > 0;) {
                        if (3 === (e = t.pop()).nodeType) n += e.nodeValue + " ";
                        else if (e.childNodes && e.childNodes.length > 0)
                            for (var r = e.childNodes, o = r.length - 1; o >= 0; o--) t.push(r[o])
                    }
                    return n.replace(/\s+/g, " ")
                }
                t.x2 = r
            },
            58263: (e, t, n) => {
                "use strict";

                function r(e) {
                    return '{"grab_version":2,"is_async":1,"old_grab_size":'.concat(e.length, "}")
                }
                t.cv = void 0, t.cv = function(e, t, o) {
                    var i = function(e, t) {
                        var r = (0, n(65637).n)((0, n(21625).utf8Encode)(t, 1 / 0), 9);
                        return (0, n(21625).encodeUInt8String)("".concat(e, "\n").concat(r))
                    }(r(t), t + e);
                    return i.length < o ? i : i.slice(0, o)
                }
            },
            11017: (e, t) => {
                "use strict";

                function n(e, t, n) {
                    e.hasAttribute(t) && n.push(" " + t + '="' + e.getAttribute(t) + '"')
                }
                t.c = void 0, t.c = function(e) {
                    var t = e.document.head,
                        r = e.document.title,
                        o = t.getElementsByTagName("meta"),
                        i = ["<head>"];
                    r && i.push("<title>".concat(r, "</title>"));
                    for (var a = 0; a < o.length; a++) {
                        var s = (o[a].getAttribute("name") || "").toLowerCase();
                        "description" !== s && "keywords" !== s || (i.push("<meta"), n(o[a], "name", i), n(o[a], "content", i), i.push("/>"))
                    }
                    return i.push("</head>"), i.join("")
                }
            },
            29769: (e, t) => {
                "use strict";
                t.E = void 0;
                var n = ["script", "style", "noscript", "yatag", "template", "iframe", "svg"];
                t.E = function(e, t, a, d) {
                    void 0 === d && (d = 100);
                    var l = e.document.getElementsByTagName(t)[0] || e.document.getElementsByClassName(t)[0],
                        f = [];
                    return l && function(e, t, a, d) {
                        var l = [e],
                            f = Number(new Date),
                            p = 0,
                            h = 0;
                        for (; l.length > 0 && p < 25e3 && Number(new Date) - f < d;) {
                            var v = l.pop();
                            if (v instanceof r) v.textContentLength === h ? (a.length = v.resultLength, p = v.htmlLength) : (a.push(v.name), p += v.name.length);
                            else if (c(v)) {
                                var g = v.textContent || "";
                                a.push(g), p += g.length, h += g.length
                            } else if (u(v) && o(v)) {
                                var _ = new r("</" + v.tagName.toLowerCase() + ">", p, h, a.length);
                                i(v, t, a), p += a[a.length - 1].length, l.push(_);
                                for (var m = v.lastChild; m; m = m.previousSibling)
                                    if (s(m))
                                        if (c(m)) l.push(m);
                                        else if (u(m)) {
                                            var y = m.nodeName.toLowerCase();
                                            if ("select" === y) {
                                                var b = m.childNodes.length,
                                                    E = m.selectedIndex;
                                                if (0 !== b && -1 !== E) {
                                                    var w = m.options[E],
                                                        O = (g = w.textContent || w.innerText, "<select><option>".concat(g, "</option></select>"));
                                                    a.push(O), h += O.length
                                                }
                                                break
                                            } - 1 === n.indexOf(y) && l.push(m)
                                        }
                            }
                        }
                    }(l, a, f, d), f.join("").replace(/[^\w\s\u0430-\u044f\u0451"<>/\\\-,;()?!.=:'[\]]/gi, "").replace(/\s{2,}/g, " ").replace(/>\s*</g, "><")
                };
                var r = function(e, t, n, r) {
                    this.name = e, this.htmlLength = t, this.textContentLength = n, this.resultLength = r
                };

                function o(e) {
                    var t = Boolean(e.offsetWidth || e.offsetHeight);
                    return e && e.getClientRects ? Boolean(t || e.getClientRects().length) : e && e.currentStyle ? t && "hidden" !== e.currentStyle.visibility : t
                }

                function i(e, t, n) {
                    var r = [],
                        o = e.tagName.toLowerCase();
                    if (r.push("<" + o), function(e) {
                        for (var t = e.lastChild; t; t = t.previousSibling)
                            if (c(t) && s(t)) return !0;
                        return !1
                    }(e))
                        for (var i = 0; i < t.length; i++) e.hasAttribute(t[i]) && r.push(" " + t[i] + '="' + e.getAttribute(t[i]) + '"');
                    r.push(">"), n.push(r.join(""))
                }
                var a = /[^\s\\]/;

                function s(e) {
                    if (!e.lastChild) return a.test(e.innerText);
                    for (var t = e.lastChild; t; t = t.previousSibling) {
                        if (!t.lastChild && a.test(t.innerText)) return !0;
                        for (var n = t.lastChild; n; n = n.previousSibling)
                            if (a.test(n.innerText)) return !0
                    }
                    return !1
                }

                function c(e) {
                    return e.nodeType === Node.TEXT_NODE
                }

                function u(e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }
            },
            79287: (e, t, n) => {
                "use strict";
                t.x2 = void 0;
                var r, o = "";
                t.x2 = function(e, t) {
                    var i, a, s = (0, n(57034).J)();
                    if (t && (0, n(96363).G)((0, n(32056).q)(s))) return t;
                    if (r && r + 5e3 > Number(new Date)) return o;
                    if ((0, n(13058).isInIframe)(s))
                        if (a = (0, n(11017).c)(s), "" !== (i = (0, n(29769).E)(s, "body", ["class"]))) a = (0, n(11017).c)(s), i = (0, n(29769).E)(s, "body", ["class"]);
                        else try {
                            a = (0, n(11017).c)(s.parent), i = (0, n(29769).E)(s.parent, "body", ["class"], 150)
                        } catch (e) {} else a = (0, n(11017).c)(s), i = (0, n(29769).E)(s, "body", ["class"]);
                    var c = ["<html>", a, i, "</html>"].join(""),
                        u = (0, n(18808).x2)(e, t);
                    return o = (0, n(58263).cv)(c, (0, n(21625).decode)(u), 5120), r = Number(new Date), o
                }
            },
            66648: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateHexString = void 0, t.generateHexString = function(e) {
                    for (var t = "", r = 0; r < e; r++) t += (16 * (0, n(70321).random)() | 0).toString(16);
                    return t
                }
            },
            98318: (e, t, n) => {
                "use strict";
                t.$ = void 0, t.$ = function(e) {
                    var t = (0, n(98022).Q)(e);
                    return t.width = "0", t.height = "0", t.style.position = "absolute", t
                }
            },
            37267: (e, t, n) => {
                "use strict";
                t.Q = void 0, t.Q = function(e) {
                    e.src = "", (0, n(91709).removeNodeFromParent)(e)
                }
            },
            47634: (e, t, n) => {
                "use strict";
                t.J = void 0;
                t.J = function(e) {
                    return e instanceof Date || "Date" === (0, n(91130).M)(e)
                }
            },
            26413: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isFunction = void 0, t.isFunction = function(e) {
                    return "function" == typeof e || "Function" === (0, n(91130).M)(e)
                }
            },
            13058: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isInIframe = void 0, t.isInIframe = function(e) {
                    return e.top !== e.self
                }
            },
            601: (e, t, n) => {
                "use strict";
                t.g = void 0, t.g = (0, n(18380).g)()
            },
            18380: (e, t, n) => {
                "use strict";
                t.g = void 0, t.g = function() {
                    var e = (0, n(15735).map)(n(63541).z, (function(e) {
                            return e.ownerDocument
                        })),
                        t = e.length,
                        r = (t ? e[t - 1] : document).defaultView;
                    return !!r && r.self !== r.parent
                }
            },
            35117: (e, t) => {
                "use strict";
                t.C = void 0, t.C = ["yandex.ru", "yandex.com", "yandex.net", "yandex.com.tr", "yandex.ua", "yandex.by", "yandex.kz", "yandex.st", "yandex-team.ru", "yandex-team.com", "yandex-team.com.ua", "yandex-team.net.ua", "yandex-team.com.tr", "ya.ru", "yandexsport.ru"]
            },
            96363: (e, t, n) => {
                "use strict";
                t.G = void 0, t.G = function(e) {
                    return !!e && (!(!e || 0 === e.length) && (0, n(38179).some)(n(35117).C, (function(t) {
                        return t === e || (0, n(22698).p)(e, ".".concat(t))
                    })))
                }
            },
            11056: (e, t, n) => {
                "use strict";

                function r(e) {
                    return Math.round(e)
                }
                t._ = void 0, t._ = function(e) {
                    var t = (0, n(62260).getWindowScroll)();
                    return {
                        left: r(e.left + t.left),
                        top: r(e.top + t.top)
                    }
                }
            },
            77192: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getElementSize = void 0, t.getElementSize = function(e) {
                    var t = (0, n(85206).calculateSizeInfo)(e),
                        o = r(r(r({}, t.max.rect), t.max.inner), {
                            isFixed: t.isFixed
                        });
                    return o.height >= n(85206).MAX_BLOCK_HEIGHT && (o.height = 0, o.top = o.bottom = t.origin.rect.top), o
                }
            },
            12682: (e, t) => {
                "use strict";
                t.U = void 0;
                t.U = function(e, t) {
                    var n = e.width,
                        r = e.height,
                        o = e.top,
                        i = e.left,
                        a = e.right,
                        s = e.bottom,
                        c = 1,
                        u = Math.max(Math.min(a, t.width) - Math.max(i, 0), 0),
                        d = Math.max(Math.min(s, t.height) - Math.max(o, 0), 0);
                    return n ? c *= u / n : (i < 0 || a > t.width) && (c = 0), r ? c *= d / r : (o < 0 || s > t.height) && (c = 0), c >= .5 ? 1 : 0
                }
            },
            40996: (e, t, n) => {
                "use strict";
                t.E = void 0;
                var r = function(e) {
                    return Math.max(0, Math.round(e))
                };
                t.E = function() {
                    var e = (0, n(52544).getWindowSize)();
                    return {
                        win_width: r(e.width),
                        win_height: r(e.height),
                        pixel_ratio: (0, n(52452).getPixelRatio)(),
                        bandwidth: (0, n(22511).getDownlink)()
                    }
                }
            },
            43: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.K = void 0;
                var o = function(e) {
                        return Math.max(0, Math.round(e))
                    },
                    i = function() {
                        function e(e) {
                            var t, i = (0, n(40996).E)(),
                                a = (0, n(52544).getWindowSize)();
                            if (n(73266).isAMP) {
                                var s = window.context,
                                    c = (null === (t = s.initialIntersection) || void 0 === t ? void 0 : t.intersectionRatio) > 0 ? 1 : 0,
                                    u = s.initialLayoutRect;
                                this.config = r(r({}, i), {
                                    isInIframe: (0, n(13058).isInIframe)(window),
                                    w: o(a.width),
                                    h: o(a.height),
                                    width: o(a.width),
                                    height: o(a.height),
                                    left: u.left || 0,
                                    top: u.top || 0,
                                    amp: 1,
                                    visible: c
                                })
                            } else {
                                var d = (0, n(77192).getElementSize)(e),
                                    l = r(r({}, (0, n(34403).getBoundingClientRect)(e)), (0, n(20697).getElementInnerSize)(e)),
                                    f = (0, n(11056)._)(l),
                                    p = d.height,
                                    h = o(l.height);
                                (0, n(13058).isInIframe)(window) && (0 === p || h > i.win_height || p > i.win_height) && (p = i.win_height, h = i.win_height), this.config = r(r(r({}, i), {
                                    isInIframe: (0, n(13058).isInIframe)(window),
                                    w: o(d.width),
                                    h: o(p),
                                    width: o(l.width),
                                    height: h,
                                    visible: (0, n(12682).U)(l, a),
                                    fullscreenHeaderHeight: (0, n(63607).isMobile)() ? n(505).NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE : n(505).NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP
                                }), f)
                            }
                        }
                        return e.prototype.set = function(e, t) {
                            this.config[e] = t
                        }, e.prototype.get = function(e) {
                            return this.config[e]
                        }, e.prototype.toString = function() {
                            return n.lv["json"].stringify(this.config)
                        }, e
                    }();
                t.K = i
            },
            34403: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getBoundingClientRect = void 0;
                t.getBoundingClientRect = function(e) {
                    try {
                        var t = e.getBoundingClientRect();
                        return {
                            left: t.left,
                            right: t.right,
                            top: t.top,
                            bottom: t.bottom,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        }
                    } catch (e) {
                        return {
                            left: 0,
                            width: 0,
                            top: 0,
                            height: 0,
                            right: 0,
                            bottom: 0
                        }
                    }
                }
            },
            62260: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getWindowScroll = void 0, t.getWindowScroll = function() {
                    return {
                        left: void 0 === window.pageXOffset ? document.documentElement.scrollLeft : window.pageXOffset,
                        top: void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
                    }
                }
            },
            52544: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getWindowSize = void 0, t.getWindowSize = function() {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
            },
            66779: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.listToArray = void 0, t.listToArray = function(e) {
                    if (!e) return [];
                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
                    return t
                }
            },
            54784: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadCustomScript = void 0, t.loadCustomScript = function(e) {
                    var t = e.win.document.createElement("script");
                    return t.async = !0, e.nonce && (t.nonce = e.nonce), (0, n(26413).isFunction)(e.onLoad) && (t.onload = function() {
                        t.onload = function() {}, (0, n(26413).isFunction)(e.onLoad) && e.onLoad()
                    }), e.hasCors = "boolean" != typeof e.hasCors || e.hasCors, e.hasCors && t.setAttribute("crossorigin", "anonymous"), t.src = e.src, e.container ? e.container.appendChild(t) : (0, n(50775).getHead)(e.win).appendChild(t), t
                }
            },
            78257: (e, t, n) => {
                "use strict";
                t.b = void 0;
                var r = "https://yastatic.net/s3/home/fonts/ys/3/text-variable-full.woff2";
                t.b = function() {
                    var e = document.getElementById("ysTextCssRule");
                    if (!e) {
                        var t = document.createElement("link");
                        t.rel = "preload", t.href = r, t.type = "font/woff2", t.as = "font", t.importance = "low", t.crossOrigin = "anonymous";
                        var o = (0, n(50775).getHead)(window);
                        o.appendChild(t), (e = document.createElement("style")).setAttribute("id", "ysTextCssRule"), e.innerHTML = '@font-face {\n        font-family: "YS Text Variable";\n        src: url("'.concat(r, '") format("woff2");\n        font-weight: 400 700;\n        font-display: optional;\n    }'), o.appendChild(e)
                    }
                }
            },
            35332: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.C = void 0;
                var o = "Ya._metrika.dataLayer";
                t.C = (0, n(12251).protect)("metrika::pushEvent", (function(e, t) {
                    var i = (0, n(95721).U)(e, o) || [];
                    (0, n(9562).set)(e, o, i), i.push({
                        ymetrikaEvent: {
                            type: "params",
                            parent: 1,
                            data: {
                                __ym: r({}, t)
                            }
                        }
                    })
                }))
            },
            17451: (e, t, n) => {
                "use strict";
                t.B7 = t.je = t.zB = void 0, t.zB = {
                    Metrika: "yandex_metrika_callbacks",
                    Metrika2: "yandex_metrika_callbacks2"
                };
                t.je = "https://mc.yandex.ru/metrika/watch.js";
                var r = function() {
                    function e(e, r, o) {
                        var i = this;
                        this.getYa = e, this.needLoadMetrika = r, this.loadMetrika = (0, n(94532).once)((function() {
                            i.needLoadMetrika && !i.win.YA_TURBO_METRIKA && (0, n(54784).loadCustomScript)({
                                src: t.je,
                                win: i.win
                            })
                        })), this.win = o || window, e().Metrika ? this.metrikaName = "Metrika" : e().Metrika2 ? this.metrikaName = "Metrika2" : this.metrikaName = "tag" === this.win.YA_TURBO_METRIKA ? "Metrika2" : "Metrika", this.metrikaCallbacksName = t.zB[this.metrikaName]
                    }
                    return e.getInstance = function(t, r) {
                        return void 0 === r && (r = !0), "exp" === (0, n(88772).useExperimentFlag)("DISABLE_METRIKA") && (r = !1), this.instance || (this.instance = new e(t, r)), this.instance
                    }, e.prototype.requestCounter = function(e, t) {
                        var n = this;
                        this.isLoaded() ? t(this.getCounter(e)) : (this.loadMetrika(), this.addCallback((function() {
                            t(n.getCounter(e))
                        })))
                    }, e.prototype.getCounter = function(e) {
                        var t = "yaCounter" + e.id;
                        return this.win[t] || (this.win[t] = this.createCounter(e)), this.win[t]
                    }, e.prototype.isLoaded = function() {
                        return Boolean(this.getYa()[this.metrikaName])
                    }, e.prototype.addCallback = function(e) {
                        this.win[this.metrikaCallbacksName] || (this.win[this.metrikaCallbacksName] = []), this.win[this.metrikaCallbacksName].push(e)
                    }, e.prototype.createCounter = function(e) {
                        var t = this.getYa()[this.metrikaName];
                        if (!t) throw new Error("metrika counter creation error: ".concat(this.metrikaName, " is not in context"));
                        try {
                            return new t({
                                id: e.id,
                                type: e.isYAN ? 1 : void 0,
                                defer: !0,
                                nck: !e.enableCookies
                            })
                        } catch (e) {
                            throw new Error("metrika counter creation error: " + e.message)
                        }
                    }, e
                }();
                t.B7 = r
            },
            44834: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.on = t.open = t.isVisible = t.isReady = t.isAvailable = t.getMraid = void 0;
                var r = window;

                function o(e) {
                    void 0 === e && (e = window);
                    try {
                        var t = "ownerDocument" in e && "defaultView" in e.ownerDocument ? e.ownerDocument.defaultView : e,
                            n = t.mraid || t.top.mraid;
                        return n && n.getState && n.addEventListener ? n : void 0
                    } catch (e) {
                        return
                    }
                }

                function i(e) {
                    return void 0 === e && (e = r), void 0 !== o(e)
                }
                t.getMraid = o, t.isAvailable = i, t.isReady = function(e) {
                    return void 0 === e && (e = r), i(e) && "loading" !== o(e).getState()
                }, t.isVisible = function(e) {
                    return void 0 === e && (e = r), i(e) && o(e).isViewable()
                }, t.open = function(e, t) {
                    void 0 === e && (e = r), i(e) && o(e).open(t)
                }, t.on = function(e, t, a) {
                    if (void 0 === a && (a = r), !i(a)) return n(85225).noop;
                    var s = o(a);
                    return s.addEventListener(e, t),
                        function() {
                            s.removeEventListener(e, t)
                        }
                }
            },
            42180: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.W = void 0;
                t.W = function e(t) {
                    var o = t.method,
                        i = t.url,
                        a = t.async,
                        s = void 0 === a || a,
                        c = t.data,
                        u = t.responseType,
                        d = void 0 === u ? "text" : u,
                        l = t.onBeforeSend,
                        f = void 0 === l ? n(85225).noop : l,
                        p = t.onRetry,
                        h = void 0 === p ? n(85225).noop : p,
                        v = t.checkStatus,
                        g = void 0 === v ? function(e) {
                            return 200 === e
                        } : v,
                        _ = t.headers,
                        m = void 0 === _ ? {} : _,
                        y = t.xhrConstructor,
                        b = void 0 === y ? XMLHttpRequest : y,
                        E = t.retries,
                        w = void 0 === E ? 0 : E,
                        O = t.timeout,
                        S = void 0 === O ? 0 : O,
                        I = t.withCredentials,
                        A = t.onAbort,
                        T = t.onSetup;
                    if (b) {
                        var R, C = t.onSuccess ? (0, n(94532).once)(t.onSuccess) : n(85225).noop,
                            N = t.onError ? (0, n(94532).once)(t.onError) : n(85225).noop,
                            D = !1,
                            x = 0,
                            P = function(e) {
                                D = !0, P = n(85225).noop, R = e, L(new Error("Abort request")), "function" == typeof A && A(e)
                            },
                            L = function(o) {
                                if (M.onerror = null, M.onreadystatechange = null, x && clearTimeout(x), x && 4 !== M.readyState || D) try {
                                    M.abort()
                                } catch (e) {}
                                if (!D)
                                    if (w > 0) {
                                        var i = h(o, M);
                                        if ("boolean" != typeof i || i || P(), D) return;
                                        e(r(r({}, t), {
                                            onSetup: function(e) {
                                                var t = e.abort;
                                                P = function(e) {
                                                    return t(e)
                                                }, D && t(R)
                                            },
                                            retries: w - 1
                                        }))
                                    } else P = n(85225).noop, N(o, M)
                            },
                            M = new b;
                        try {
                            M.open(o, i, s)
                        } catch (e) {
                            return void L(e)
                        }
                        if (M.responseType = d, M.withCredentials = Boolean(I), (0, n(38715).forOwn)(m, (function(e, t) {
                            try {
                                M.setRequestHeader(t, e)
                            } catch (e) {}
                        })), S > 0 && isFinite(S) && (x = window.setTimeout((function() {
                            L(new Error("Request timeout, ".concat(i)))
                        }), S)), M.onerror = L, M.onreadystatechange = function() {
                            if (4 === M.readyState) {
                                var e = M.status;
                                g(e) ? (P = n(85225).noop, clearTimeout(x), C(M)) : L(new Error("Invalid request status ".concat(e, ", ").concat(i)))
                            }
                        }, !("function" == typeof T && (T({
                            abort: function(e) {
                                return P(e)
                            }
                        }), D) || (f(M, t), D))) try {
                            M.send(c)
                        } catch (e) {
                            L(e)
                        }
                    }
                }
            },
            44327: (e, t, n) => {
                "use strict";
                t.d = void 0, t.d = function(e, t, r) {
                    (0, n(53366).loadImage)({
                        src: e,
                        onLoad: t,
                        ctx: r
                    })
                }
            },
            85225: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.noop = void 0, t.noop = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                }
            },
            67729: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getRandomInt = void 0, t.getRandomInt = function(e, t) {
                    var r = e + (0, n(70321).random)() * (t + 1 - e);
                    return r = Math.floor(r)
                }
            },
            50023: (e, t) => {
                "use strict";
                t.z = void 0, t.z = function(e) {
                    return "number" == typeof e && isFinite(e)
                }
            },
            25021: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isPositiveFiniteNumber = void 0, t.isPositiveFiniteNumber = function(e) {
                    return "number" == typeof e && isFinite(e) && e > 0
                }
            },
            67299: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.parseNumber = void 0, t.parseNumber = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = (0, n(41486).isString)(e) ? parseInt(e, 10) : e;
                    return t && (void 0 === r || isNaN(r)) ? NaN : r || 0
                }
            },
            92271: (e, t, n) => {
                "use strict";
                t.A = void 0, t.A = function(e, t) {
                    if (void 0 === t && (t = !0), n(62141).isSafariBasedBrowser && t) return [];
                    for (var r = [], o = e;;) try {
                        if (!(o = o.ownerDocument.defaultView.frameElement)) return r;
                        r.push(o)
                    } catch (e) {
                        return r
                    }
                }
            },
            63541: (e, t, n) => {
                "use strict";
                t.z = void 0, t.z = (0, n(92271).A)(document.documentElement)
            },
            31913: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.x = void 0;
                var o = function() {
                    function e(e) {
                        this.steps = e, this.storage = {}
                    }
                    return e.prototype.setBlockData = function(e, t) {
                        this.storage[e] || (this.storage[e] = {
                            timing: {},
                            data: {},
                            canLog: !0
                        }), this.storage[e].data = r(r({}, this.storage[e].data), t)
                    }, e.prototype.logRenderLabel = function(e, t, n) {
                        void 0 === n && (n = (new Date).getTime()), this.storage[e] || (this.storage[e] = {
                            timing: {},
                            data: {},
                            canLog: !0
                        }), this.storage[e].timing[t] = n
                    }, e.prototype.stopLoggingTime = function(e) {
                        this.storage[e] && (this.storage[e].canLog = !1)
                    }, e.prototype.continueLoggingTime = function(e) {
                        this.storage[e] && (this.storage[e].canLog = !0)
                    }, e.prototype.getInfo = function(e) {
                        return this.canSendData(this.storage[e]) && e in this.storage ? {
                            timing: this.prepareTimings(this.storage[e]),
                            data: this.storage[e].data
                        } : null
                    }, e.prototype.canSendData = function(e) {
                        return e && e.canLog
                    }, e.prototype.prepareTimings = function(e) {
                        for (var t, r = {
                            totalInit: 0,
                            totalData: 0,
                            totalRender: 0,
                            total: 0
                        }, o = (0, n(10407).getObjectKeys)(e.timing).sort((function(e, t) {
                            return e - t
                        })), i = 0; i < o.length; i++) {
                            var a = e.timing[o[i]] || 0;
                            if (t) {
                                var s = a - t;
                                t = a, r[o[i]] = s, o[i] in this.steps.initSteps ? r.totalInit += s : o[i] in this.steps.dataSteps ? r.totalData += s : o[i] in this.steps.renderSteps && (r.totalRender += s), r.total += s
                            } else t = a
                        }
                        return r
                    }, e
                }();
                t.x = o
            },
            20354: (e, t, n) => {
                "use strict";
                t.no = t.JT = t.vA = void 0;
                var r = "undefined" == typeof window ? void 0 : window.performance;
                t.vA = r && (0, n(26413).isFunction)(r.now);
                var o = r && r.timing && r.timing.navigationStart ? r.timing.navigationStart : (0, n(61672).m)(),
                    i = 0;
                t.JT = function() {
                    var e = (0, n(61672).m)() - o;
                    return i = Math.max(e, i)
                }, t.no = t.vA ? function() {
                    return r.now()
                } : function() {
                    return (0, t.JT)()
                }
            },
            48777: (e, t) => {
                "use strict";
                t.B = void 0;
                var n = function() {
                    var e = this;
                    this.promise = new Promise((function(t, n) {
                        e.resolve = t, e.reject = n
                    }))
                };
                t.B = n
            },
            12251: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ProtectedNames = t.rethrowAsync = t.protect = t.callSafe = void 0;

                function r() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return e.join("")
                }
                t.callSafe = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                }, t.protect = function(e, r, o, i) {
                    return function() {
                        try {
                            return r.apply(o || this, arguments)
                        } catch (r) {
                            if ((0, n(26413).isFunction)(i) && i(r), !0 === r.preventProtect) throw r;
                            t.protect.log(r, e)
                        }
                    }
                }, t.rethrowAsync = function(e, n) {
                    setTimeout((function() {
                        t.protect.log(e, n)
                    }))
                }, t.protect.log = function(e, t) {
                    console.log("LOG:" + t + ":" + e)
                }, t.protect.setTimeout = function(e, n, r, o) {
                    return window.setTimeout((0, t.protect)("timeout", e, r, o), n)
                };
                var o = function() {
                    function e() {}
                    return e.YaContextCallbacks = r("Ya.C", "ontext._callbacks"), e.YaContextCallbacksCalls = r("Ya.C", "ontext._callbacks_call"), e.AdvManager = r("A", "dvManager"), e.AdvBlock = r("A", "dvBlock"), e.RTB = r("R", "TB"), e.Rtb = r("R", "tb"), e.MetrikaAdtune = r("metrika_a", "dtune"), e
                }();
                t.ProtectedNames = o
            },
            39658: (e, t, n) => {
                "use strict";
                t.c = void 0;
                var r = function() {
                    function e() {}
                    return e.callProtected = function(t) {
                        (0, n(12251).protect)("queue", t, void 0, e.finish)()
                    }, e.finish = function() {
                        e.order.length ? e.callProtected((function() {
                            var t = e.order.shift();
                            t && t(e.finish)
                        })) : e.executed = !1
                    }, e.prototype.add = function(t) {
                        e.executed ? e.order.push(t) : (e.executed = !0, e.callProtected((function() {
                            t(e.finish)
                        })))
                    }, e.prototype.size = function() {
                        return e.order.length
                    }, e.order = [], e.executed = !1, e
                }();
                t.c = r
            },
            91709: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeNodeFromParent = void 0, t.removeNodeFromParent = function(e) {
                    if (e) {
                        var t = e.parentElement;
                        t && t.removeChild(e)
                    }
                }
            },
            34668: (e, t) => {
                "use strict";
                t.o = void 0, t.o = 1e3 / 60
            },
            39807: (e, t, n) => {
                "use strict";
                t.b = void 0, t.b = function(e) {
                    var t = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                            return e.setTimeout(t, n(34668).o)
                        },
                        r = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || e.msCancelAnimationFrame || function(t) {
                            return e.clearTimeout(t)
                        };
                    return {
                        requestAnimationFrame: t.__pbind(e),
                        cancelAnimationFrame: r.__pbind(e)
                    }
                }
            },
            96757: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cancelAnimationFrame = t.requestAnimationFrame = void 0;
                var r = (0, n(39807).b)(window);
                t.requestAnimationFrame = r.requestAnimationFrame, t.cancelAnimationFrame = r.cancelAnimationFrame
            },
            62763: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.updateSafeframeSize = t.isInSafeframe = t.nukeSafeframe = t.initSafeframe = t.loadSafeframe = t.getSafeframeLoaderURL = void 0;
                var o = "yaSafeFrameAsyncCallbacks",
                    i = window;
                i.yaSafeFrameCallbacksStorage = i.yaSafeFrameCallbacksStorage || {};
                var a = (0, n(49820).x)("https://yastatic.net/safeframe/1-1-0/");

                function s() {
                    var e = ["https://yastatic", ".net/safeframe-bundles/0.".concat((0, n(2979).HT)(), "/"), a ? "host_adb.js" : "host.js"].join("");
                    return a ? (0, n(49820).cv)(e) : e
                }

                function c(e) {
                    e.isLoadingSafeframeStarted || (e.isLoadingSafeframeStarted = !0, (0, n(54784).loadCustomScript)({
                        win: e,
                        src: s(),
                        hasCors: !a
                    }))
                }

                function u(e) {
                    var t = e[o] || [];
                    return e[o] = t, t
                }

                function d(e, t) {
                    delete e.yaSafeFrameCallbacksStorage[t]
                }

                function l(e) {
                    return Boolean(e.$sf && e.$sf.ext)
                }
                t.getSafeframeLoaderURL = s, t.loadSafeframe = c, t.initSafeframe = function(e, t, o, i, a, s, l) {
                    void 0 === i && (i = n(85225).noop), void 0 === a && (a = n(85225).noop), void 0 === s && (s = n(85225).noop), c(e);
                    var f = u(e),
                        p = o.id instanceof Element ? "" : o.id,
                        h = function(e, t) {
                            return t || e.id || "sf-".concat(Math.floor(4294967295 * Math.random()) + 1)
                        }(t, p);
                    f.push((0, n(12251).protect)("initSafeFrameQueue", (function() {
                        e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {}, e.yaSafeFrameCallbacksStorage[h] = {
                            onError: i,
                            onRender: a,
                            onAction: s
                        },
                            function(e, t) {
                                e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {};
                                var n = e.yaSafeFrameCallbacksStorage;
                                new e.$sf.host.Config(r({
                                    auto: !1,
                                    onFailure: function(e, t, r) {
                                        n[e] && n[e].onError(e, r)
                                    },
                                    onEndPosRender: function(e, t, r) {
                                        n[e] && n[e].onRender(e, r)
                                    },
                                    onPosMsg: function(t, r, o) {
                                        n[t] && n[t].onAction(r, o), "nuke" === r && d(e, t)
                                    }
                                }, t))
                            }(e, l ? {
                                query: l
                            } : void 0),
                            function(e, t, n, r) {
                                t.id = r;
                                var o = n.html,
                                    i = n.width,
                                    a = n.height,
                                    s = n.basePath,
                                    c = {
                                        id: r,
                                        html: o,
                                        conf: {
                                            nonce: n.nonce,
                                            w: i,
                                            h: a,
                                            dest: t,
                                            protected: n["protected"],
                                            sandbox: n.sandbox,
                                            basePath: s
                                        }
                                    };
                                n.supports && (c.conf.supports = n.supports), e.$sf.host.render(c)
                            }(e, t, o, h)
                    })))
                }, t.nukeSafeframe = function(e, t) {
                    c(e), u(e).push((function() {
                        d(e, t), e.$sf.host.nuke(t)
                    }))
                }, t.isInSafeframe = l, t.updateSafeframeSize = function(e, t) {
                    if (l(e)) {
                        var n = e.$sf.ext.geom(),
                            r = n.self.w + n.exp.r,
                            o = n.self.h + n.exp.b,
                            i = r > t.width ? t.width - n.self.w : n.exp.r,
                            a = o > t.height ? t.height - n.self.h : n.exp.b;
                        e.$sf.ext.expand({
                            t: 0,
                            l: 0,
                            r: i,
                            b: a
                        })
                    }
                }
            },
            2979: (e, t) => {
                "use strict";
                t.FN = t.HT = void 0;
                var n = 83;
                t.HT = function() {
                    return n
                }, t.FN = function(e) {
                    e && (n = e)
                }
            },
            42896: (e, t) => {
                "use strict";
                t.j = void 0, t.j = "utf-8"
            },
            84703: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.T = void 0;
                var o = function() {
                    return !0
                };

                function i(e) {
                    var t = e.src,
                        a = e.win,
                        s = void 0 === a ? window : a,
                        c = e.charset,
                        u = void 0 === c ? n(42896).j : c,
                        d = e.async,
                        l = void 0 === d || d,
                        f = e.retries,
                        p = void 0 === f ? 0 : f,
                        h = e.onRetry,
                        v = void 0 === h ? n(85225).noop : h,
                        g = e.retryDelay,
                        _ = void 0 === g ? 0 : g,
                        m = e.checkLoad,
                        y = void 0 === m ? o : m,
                        b = e.onBeforeLoad,
                        E = void 0 === b ? n(85225).noop : b,
                        w = e.onLoad,
                        O = void 0 === w ? n(85225).noop : w,
                        S = e.onError,
                        I = void 0 === S ? n(85225).noop : S,
                        A = s.document.createElement("script"),
                        T = function(o) {
                            p > 0 ? (v(o), i(r(r({}, e), {
                                src: t,
                                retries: p - 1
                            }))) : I(o), (0, n(91709).removeNodeFromParent)(A)
                        };
                    A.type = "text/javascript", A.async = l, A.onload = function() {
                        return y(A) ? O() : T(new Error("checkLoad for ".concat(t, " failed")))
                    }, A.onerror = function(e) {
                        try {
                            s.setTimeout((function() {
                                T(e)
                            }), _)
                        } catch (e) {}
                    }, A.src = t, A.charset = u, E(A), (0, n(50775).getHead)(s).appendChild(A)
                }
                t.T = function(e) {
                    var t = e.dropCacheOnRetry,
                        o = void 0 !== t && t,
                        a = e.onBeforeLoad,
                        s = void 0 === a ? n(85225).noop : a,
                        c = e.retries,
                        u = void 0 === c ? 0 : c;
                    if (!e.checkLoad || !e.checkLoad()) {
                        var d = s,
                            l = 0;
                        return o && u > 0 && (d = function(e) {
                            if (s(e), l > 0) {
                                var t = -1 === e.src.indexOf("?") ? "?" : "&",
                                    r = (0, n(44084).z)(4);
                                e.src += t + r
                            }
                            l++
                        }), i(r(r({}, e), {
                            onBeforeLoad: d
                        }))
                    }
                    e.onLoad && e.onLoad()
                }
            },
            88390: (e, t, n) => {
                "use strict";
                t.o$ = t.Ri = void 0, t.Ri = "adSessionID", t.o$ = (0, n(12251).protect)("sessionId::configureMetrika", (function(e, r) {
                    var o;
                    (0, n(35332).C)(e, ((o = {})[t.Ri] = r, o))
                }))
            },
            72367: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.generateSessionId = void 0;
                t.generateSessionId = function() {
                    return (1e6 * (0, n(70321).random)()).toFixed(0) + (new Date).valueOf().toString()
                }
            },
            44021: (e, t, n) => {
                "use strict";
                t.G = void 0;
                t.G = function(e, t, r, o) {
                    var i = t.getItem(n(93777).Y);
                    return i || (i = n(74987).safeSessionStorage.getItem(n(93777).Y) || e(), o(window, i)), t.setItem(n(93777).Y, i), n(74987).safeSessionStorage.setItem(n(93777).Y, i), i
                }
            },
            49131: (e, t, n) => {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setSessionId = t.getSessionId = void 0;
                t.getSessionId = function() {
                    return r || (r = (0, n(44021).G)(n(72367).generateSessionId, (0, n(24351).V)("common"), (0, n(60304).M)("common"), n(88390).o$)), r
                };
                t.setSessionId = function(e) {
                    r !== e && ((0, n(61674).K)(e, (0, n(24351).V)("common"), (0, n(60304).M)("common"), n(88390).o$), r = e)
                }
            },
            93777: (e, t) => {
                "use strict";
                t.Y = void 0, t.Y = "sessionId"
            },
            61674: (e, t, n) => {
                "use strict";
                t.K = void 0;
                t.K = function(e, t, r, o) {
                    o(window, e), t.setItem(n(93777).Y, e), n(74987).safeSessionStorage.setItem(n(93777).Y, e)
                }
            },
            68577: (e, t) => {
                "use strict";
                t.R = void 0;
                var n = function() {
                    function e(e) {
                        this.obj = e
                    }
                    return e.prototype.getItem = function(e) {
                        return this.obj[e]
                    }, e.prototype.setItem = function(e, t) {
                        this.obj[e] = t
                    }, e
                }();
                t.R = n
            },
            11978: (e, t) => {
                "use strict";
                t.W = void 0;
                t.W = function(e, t, n) {
                    var r = e.getItem(t);
                    return r || (r = n(t), e.setItem(t, r)), r
                }
            },
            17978: (e, t, n) => {
                "use strict";
                t.a = void 0;
                t.a = function(e, t, r) {
                    var o;
                    return (0, n(94114).N)([e.top], (function(e) {
                        if (!(o = (0, n(12251).callSafe)((function() {
                            return (0, n(95721).U)(e, t)
                        })))) return (0, n(12251).callSafe)((function() {
                            return (0, n(66779).listToArray)(e.frames)
                        })) || []
                    })), o || (o = r()), (0, n(9562).set)(e, t, o), o
                }
            },
            60304: (e, t, n) => {
                "use strict";
                t.M = void 0;
                var r = (0, n(94532).once)((function() {
                    return (0, n(17978).a)(self, "Ya.pcodeCrossFrameData", (function() {
                        return new(n(68577).R)({})
                    }))
                }));
                t.M = function(e) {
                    return (0, n(11978).W)(r(), e, (function() {
                        return new(n(68577).R)({})
                    }))
                }
            },
            80366: (e, t, n) => {
                "use strict";
                t.H = void 0;
                t.H = function(e, t, r) {
                    var o = (0, n(95721).U)(e, t);
                    return o || (o = r(), (0, n(9562).set)(e, t, o)), o
                }
            },
            24351: (e, t, n) => {
                "use strict";
                t.V = void 0;
                var r = (0, n(94532).once)((function() {
                    return (0, n(80366).H)(self, "Ya.pcodeWindowData", (function() {
                        return new(n(68577).R)({})
                    }))
                }));
                t.V = function(e) {
                    return (0, n(11978).W)(r(), e, (function() {
                        return new(n(68577).R)({})
                    }))
                }
            },
            22698: (e, t) => {
                "use strict";
                t.p = void 0, t.p = function(e, t) {
                    return t === e.substring(e.length - t.length)
                }
            },
            3591: (e, t, n) => {
                "use strict";
                t.N = void 0, t.N = function(e, t) {
                    void 0 === e && (e = "a"), void 0 === t && (t = "z");
                    var r = (0, n(67729).getRandomInt)(e.charCodeAt(0), t.charCodeAt(0));
                    return String.fromCharCode(r)
                }
            },
            44084: (e, t, n) => {
                "use strict";
                t.z = void 0, t.z = function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push((0, n(3591).N)());
                    return t.join("")
                }
            },
            607: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isNonEmptyString = void 0, t.isNonEmptyString = function(e) {
                    return (0, n(41486).isString)(e) && e.length > 0
                }
            },
            41486: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isString = void 0, t.isString = function(e) {
                    return "string" == typeof e
                }
            },
            84527: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.padLeft = void 0, t.padLeft = function(e, t, n) {
                    void 0 === n && (n = " ");
                    var r = t - e.length;
                    if (r > 0) {
                        for (var o = n; o.length < r;) o += o;
                        return (o.length > r ? o.substr(0, r) : o) + e
                    }
                    return e
                }
            },
            42726: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.f = void 0;
                var o = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.props = {}, this.setProps(r(r({}, this.defaults()), e))
                    }
                    return e.sliceBits = function(e, t, r) {
                        return (0, n(98236).tf)(e, t, r)
                    }, e.prototype.defaults = function() {
                        return {}
                    }, e.prototype.toString = function() {
                        return this.serialize().toString()
                    }, e.prototype.setProps = function(e) {
                        var t = this;
                        return (0, n(7153).isObject)(e) && (0, n(15137).forEach)(this.getTemplate(), (function(n) {
                            var r = n[1];
                            r && e.hasOwnProperty(r) && (t.props[r] = e[r])
                        }), this), this
                    }, e.prototype.getProps = function() {
                        return r({}, this.props)
                    }, e.prototype.clone = function() {
                        return new(0, this.constructor)(this.props)
                    }, e.prototype.serialize = function() {
                        var e, t, r = (e = this.getTemplate(), t = this.props, (0, n(15735).map)(e, (function(e) {
                            var n = e[0],
                                r = e[1];
                            return [n, r && t[r] || null]
                        })));
                        return (0, n(98236).OF)(r)
                    }, e.prototype.slice = function(t, n) {
                        return e.sliceBits(this.serialize(), t, n)
                    }, e
                }();
                t.f = o
            },
            27265: (e, t) => {
                "use strict";
                t.T = void 0, t.T = {
                    DIRECT: 1,
                    RTB: 2,
                    PERFORMANCE: 3,
                    DISTRIBUTION: 4,
                    ADFOX: 5,
                    WIDGET: 13,
                    OLD_BUILD: 14,
                    LONG_SESSION: 15
                }
            },
            98236: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    var n = function(e, t) {
                        return Number(e) & Math.pow(2, t) - 1
                    }(e, t).toString(2);
                    return o(n, t)
                }

                function o(e, t) {
                    return (0, n(84527).padLeft)(e, t, "0")
                }
                t.tf = t.OF = void 0, t.OF = function(e) {
                    for (var t = [], n = 0, o = e; n < o.length; n++) {
                        var i = o[n],
                            a = i[0],
                            s = r(i[1], a);
                        t.push(s)
                    }
                    return function(e) {
                        if (e.length > 53) throw new Error("bitString_overflow");
                        return parseInt(e, 2)
                    }(t.reverse().join(""))
                }, t.tf = function(e, t, n) {
                    var r = t + n,
                        i = o(e.toString(2), r).substr(-r, n);
                    return parseInt(i, 2)
                }
            },
            87465: (e, t) => {
                "use strict";
                t.Y = void 0, t.Y = function(e, t) {
                    try {
                        return e()
                    } catch (e) {
                        "function" == typeof t && t(e)
                    }
                }
            },
            33200: (e, t) => {
                "use strict";
                t.$ = void 0, t.$ = function(e) {
                    return Boolean(e.YA_TURBO_PAGES)
                }
            },
            28377: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getPostProtocolIndex = t.addParamsToUrl = t.addParamToUrl = t.formatQueryString = t.getParamsFromUrl = t.parseQueryString = t.urlFromUrlObject = t.parseUrl = t.parseUrlUsingCache = t.PARSE_LINK_ELEMENT = void 0, t.PARSE_LINK_ELEMENT = document.createElement("a");
                t.parseUrlUsingCache = (0, n(70008).HP)((function(e) {
                    var t = i(e);
                    return r({}, t)
                }));
                var o = /^(android-app:|chrome-extension:)/;

                function i(e) {
                    t.PARSE_LINK_ELEMENT.href = e;
                    var n = t.PARSE_LINK_ELEMENT.pathname || "";
                    "/" !== n.charAt(0) && (n = "/".concat(n));
                    var a = (t.PARSE_LINK_ELEMENT.search || "") + (t.PARSE_LINK_ELEMENT.hash || ""),
                        s = e.lastIndexOf(a),
                        c = -1 === s ? e : e.slice(0, s);
                    if (o.test(e)) {
                        var u = i(e.replace(o, "https:"));
                        return t.PARSE_LINK_ELEMENT.href = e, r(r({}, u), {
                            originalPath: c,
                            protocol: e.slice(0, e.indexOf(":") + 1),
                            href: t.PARSE_LINK_ELEMENT.href
                        })
                    }
                    var d = t.PARSE_LINK_ELEMENT.protocol && /^[a-z-]+:/i.test(t.PARSE_LINK_ELEMENT.protocol) ? t.PARSE_LINK_ELEMENT.protocol : "";
                    return {
                        originalPath: c,
                        href: t.PARSE_LINK_ELEMENT.href,
                        protocol: d,
                        host: t.PARSE_LINK_ELEMENT.host,
                        hostname: t.PARSE_LINK_ELEMENT.hostname,
                        port: t.PARSE_LINK_ELEMENT.port,
                        pathname: n,
                        search: t.PARSE_LINK_ELEMENT.search,
                        hash: t.PARSE_LINK_ELEMENT.hash
                    }
                }

                function a(e, t) {
                    if (void 0 === t && (t = !1), t) {
                        var n = e.originalPath,
                            r = "/" === e.pathname && "/" !== n[n.length - 1];
                        return "".concat(e.originalPath).concat(r ? "/" : "").concat(e.search).concat(e.hash)
                    }
                    var o = "443" === e.port || "80" === e.port ? e.hostname : e.host;
                    return "".concat(e.protocol, "//").concat(o).concat(e.pathname).concat(e.search).concat(e.hash)
                }
                t.parseUrl = i, t.urlFromUrlObject = a;
                var s = function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                };

                function c(e) {
                    for (var t = {}, n = e.replace(/^[?#]+/, "").replace(/#.*$/, "").split("&"), r = 0; r < n.length; r++) {
                        var o = n[r].indexOf("="),
                            i = void 0,
                            a = void 0;
                        if (-1 === o ? (i = s(n[r]), a = "") : (i = s(n[r].slice(0, o)), a = n[r].slice(o + 1)), i) {
                            var c = Boolean(/(\[\])$/.exec(i));
                            i = i.replace(/\[\]$/, ""), c ? void 0 === t[i] ? t[i] = [s(a)] : t[i] = [].concat(t[i], s(a)) : t[i] = s(a)
                        }
                    }
                    return t
                }
                t.parseQueryString = c, t.getParamsFromUrl = function(e) {
                    return c(i(e).search)
                };
                var u = function(e, t) {
                    return t.map((function(t) {
                        return "".concat(e, "[]=").concat(encodeURIComponent(t))
                    })).join("&")
                };

                function d(e) {
                    var t = [];
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var o = e[r];
                            (0, n(85200).isArray)(o) ? t.push(u(r, o)): void 0 !== o && t.push("".concat(r, "=").concat(encodeURIComponent(o)))
                        } return "?".concat(t.join("&"))
                }
                t.formatQueryString = d, t.addParamToUrl = function(e, t, n) {
                    if (void 0 === n) return e;
                    var o = i(e),
                        s = c(o.search);
                    return s[t] = n, a(r(r({}, o), {
                        search: d(s)
                    }))
                }, t.addParamsToUrl = function(e, t, o) {
                    var s = void 0 === o ? {} : o,
                        u = s.override,
                        l = void 0 === u || u,
                        f = s.saveOriginalPath,
                        p = void 0 !== f && f,
                        h = i(e),
                        v = c(h.search);
                    (0, n(38715).forOwn)(t, (function(e, t) {
                        (void 0 === v[t] || l) && (v[t] = e)
                    }));
                    var g = d(v);
                    return a(r(r({}, h), {
                        search: g
                    }), p)
                }, t.getPostProtocolIndex = function(e) {
                    var t = e.indexOf("//");
                    return -1 !== t ? t + 2 : 0
                }
            },
            21625: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addEquals = t.cropEquals = t.utf8Decode = t.decodeUInt8String = t.decode = t.utf8Encode = t.encodeUInt8String = t.encode = void 0;
                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

                function r(e) {
                    for (var t = "", r = 0; r < e.length;) {
                        var o = e.charCodeAt(r++),
                            i = e.charCodeAt(r++),
                            a = e.charCodeAt(r++),
                            s = o >> 2,
                            c = (3 & o) << 4 | i >> 4,
                            u = (15 & i) << 2 | a >> 6,
                            d = 63 & a;
                        isNaN(i) ? u = d = 64 : isNaN(a) && (d = 64), t = t + n.charAt(s) + n.charAt(c) + n.charAt(u) + n.charAt(d)
                    }
                    return t
                }

                function o(e, t) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var n = "", r = 0; r < e.length; r++) {
                        var o = e.charCodeAt(r),
                            i = void 0;
                        if (o < 128 ? i = String.fromCharCode(o) : o > 127 && o < 2048 ? (i = String.fromCharCode(o >> 6 | 192), i += String.fromCharCode(63 & o | 128)) : (i = String.fromCharCode(o >> 12 | 224), i += String.fromCharCode(o >> 6 & 63 | 128), i += String.fromCharCode(63 & o | 128)), n.length + i.length > t) break;
                        n += i
                    }
                    return n
                }

                function i(e) {
                    var t = [],
                        r = 0;
                    for (e = e.replace(/[^A-Za-z0-9\-_=]/g, ""); r < e.length;) {
                        var o = n.indexOf(e.charAt(r++)),
                            i = n.indexOf(e.charAt(r++)),
                            a = n.indexOf(e.charAt(r++)),
                            s = n.indexOf(e.charAt(r++)),
                            c = o << 2 | i >> 4,
                            u = (15 & i) << 4 | a >> 2,
                            d = (3 & a) << 6 | s;
                        t.push(String.fromCharCode(c)), 64 !== a && t.push(String.fromCharCode(u)), 64 !== s && t.push(String.fromCharCode(d))
                    }
                    return t.join("")
                }

                function a(e) {
                    for (var t = [], n = 0; n < e.length;) {
                        var r = e.charCodeAt(n);
                        if (r < 128) t.push(String.fromCharCode(r)), n++;
                        else if (r > 191 && r < 224) {
                            var o = e.charCodeAt(n + 1);
                            t.push(String.fromCharCode((31 & r) << 6 | 63 & o)), n += 2
                        } else {
                            o = e.charCodeAt(n + 1);
                            var i = e.charCodeAt(n + 2);
                            t.push(String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i)), n += 3
                        }
                    }
                    return t.join("")
                }
                t.encode = function(e, t) {
                    return void 0 === t && (t = 1e6), r(o(e, 3 * t / 4 | 0))
                }, t.encodeUInt8String = r, t.utf8Encode = o, t.decode = function(e) {
                    return a(i(e))
                }, t.decodeUInt8String = i, t.utf8Decode = a, t.cropEquals = function(e) {
                    return e.replace(/[=]+$/, "")
                }, t.addEquals = function(e) {
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }
            },
            37598: (e, t) => {
                "use strict";
                var n = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.throttle = void 0, t.throttle = function(e, t, r) {
                    var o, i = 0,
                        a = function() {
                            for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                            e.call.apply(e, n([r], t, !1))
                        };
                    return function() {
                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        var s = Date.now(),
                            c = s - i;
                        clearTimeout(o), c < t ? o = window.setTimeout.apply(window, n([a, t - c], e, !1)) : (i = s, a.apply(void 0, e))
                    }
                }
            },
            44989: (e, t) => {
                "use strict";
                t.R = void 0;
                var n = 0,
                    r = [];
                t.R = function(e) {
                    return 0 === r.length && (n = window.setInterval((function() {
                        r.forEach((function(e) {
                            return e()
                        }))
                    }), 250)), r.push(e),
                        function() {
                            var t = r.indexOf(e);
                            t > -1 && r.splice(t, 1), 0 === r.length && clearInterval(n)
                        }
                }
            },
            65637: (e, t) => {
                "use strict";
                t.n = void 0;
                var n = 32768,
                    r = 8192,
                    o = 258;
                var i, a, s, c, u, d, l, f, p, h, v, g, _, m, y, b, E, w, O, S, I, A, T, R, C, N, D, x, P, L, M, k, B, F, j, U, H, W, G, q, V, z, K, Y, X, Q, Z, J, $, ee, te, ne, re, oe, ie, ae = 8192,
                    se = 8191,
                    ce = 262,
                    ue = 32506,
                    de = 15,
                    le = 256,
                    fe = 286,
                    pe = 30,
                    he = 573,
                    ve = parseInt(5),
                    ge = null,
                    _e = function() {
                        this.fc = 0, this.dl = 0
                    },
                    me = function() {
                        this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, this.elems = 0, this.max_length = 0, this.max_code = 0
                    },
                    ye = function(e, t, n, r) {
                        this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r
                    },
                    be = function() {
                        this.next = null, this.len = 0, this.ptr = new Array(r), this.off = 0
                    },
                    Ee = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0),
                    we = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13),
                    Oe = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7),
                    Se = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15),
                    Ie = new Array(new ye(0, 0, 0, 0), new ye(4, 4, 8, 4), new ye(4, 5, 16, 8), new ye(4, 6, 32, 32), new ye(4, 4, 16, 16), new ye(8, 16, 32, 32), new ye(8, 16, 128, 128), new ye(8, 32, 128, 256), new ye(32, 128, 258, 1024), new ye(32, 258, 258, 4096)),
                    Ae = function(e) {
                        e.next = i, i = e
                    },
                    Te = function(e) {
                        return v[n + e]
                    },
                    Re = function(e, t) {
                        return v[n + e] = t
                    },
                    Ce = function(e) {
                        ge[d + u++] = e, d + u === r && et()
                    },
                    Ne = function(e) {
                        e &= 65535, d + u < 8190 ? (ge[d + u++] = 255 & e, ge[d + u++] = e >>> 8) : (Ce(255 & e), Ce(e >>> 8))
                    },
                    De = function() {
                        y = (y << ve ^ 255 & f[I + 3 - 1]) & se, b = Te(y), v[32767 & I] = b, Re(y, I)
                    },
                    xe = function(e, t) {
                        Ze(t[e].fc, t[e].dl)
                    },
                    Pe = function(e) {
                        return 255 & (e < 256 ? K[e] : K[256 + (e >> 7)])
                    },
                    Le = function(e, t, n) {
                        return e[t].fc < e[n].fc || e[t].fc === e[n].fc && V[t] <= V[n]
                    },
                    Me = function(e, t, n) {
                        var r;
                        for (r = 0; r < n && ie < oe.length; r++) e[t + r] = 255 & oe.charCodeAt(ie++);
                        return r
                    },
                    ke = function(e) {
                        var t, n, r = C,
                            i = I,
                            a = S,
                            s = I > ue ? I - ue : 0,
                            c = I + o,
                            u = f[i + a - 1],
                            d = f[i + a];
                        S >= x && (r >>= 2);
                        do {
                            if (f[(t = e) + a] == d && f[t + a - 1] == u && f[t] == f[i] && f[++t] == f[i + 1]) {
                                i += 2, t++;
                                do {} while (f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && i < c);
                                if (n = o - (c - i), i = c - o, n > a) {
                                    if (A = e, a = n, n >= o) break;
                                    u = f[i + a - 1], d = f[i + a]
                                }
                            }
                        } while ((e = v[32767 & e]) > s && 0 != --r);
                        return a
                    },
                    Be = function() {
                        var e, t, r = 65536 - R - I;
                        if (-1 === r) r--;
                        else if (I >= 65274) {
                            for (e = 0; e < n; e++) f[e] = f[e + n];
                            for (A -= n, I -= n, m -= n, e = 0; e < ae; e++) t = Te(e), Re(e, t >= n ? t - n : 0);
                            for (e = 0; e < n; e++) t = v[e], v[e] = t >= n ? t - n : 0;
                            r += n
                        }
                        T || ((e = Me(f, I + R, r)) <= 0 ? T = !0 : R += e)
                    },
                    Fe = function() {
                        T || (g = 0, _ = 0, He(), function() {
                            var e;
                            for (e = 0; e < ae; e++) v[n + e] = 0;
                            if (N = Ie[D].max_lazy, x = Ie[D].good_length, C = Ie[D].max_chain, I = 0, m = 0, (R = Me(f, 0, 65536)) <= 0) return T = !0, void(R = 0);
                            for (T = !1; R < ce && !T;) Be();
                            for (y = 0, e = 0; e < 2; e++) y = (y << ve ^ 255 & f[e]) & se
                        }(), a = null, u = 0, d = 0, w = 0, D <= 3 ? (S = 2, O = 0) : (O = 2, w = 0, w = 0), l = !1)
                    },
                    je = function(e, t, n) {
                        var r;
                        return c || (Fe(), c = !0, 0 !== R) ? (r = Ue(e, t, n)) === n ? n : l ? r : (D <= 3 ? function() {
                            for (; 0 != R && null === a;) {
                                var e;
                                if (De(), 0 != b && I - b <= ue && (O = ke(b)) > R && (O = R), O >= 3)
                                    if (e = Xe(I - A, O - 3), R -= O, O <= N) {
                                        O--;
                                        do {
                                            I++, De()
                                        } while (0 != --O);
                                        I++
                                    } else I += O, O = 0, y = ((y = 255 & f[I]) << ve ^ 255 & f[I + 1]) & se;
                                else e = Xe(0, 255 & f[I]), R--, I++;
                                for (e && (Ye(0), m = I); R < ce && !T;) Be()
                            }
                        }() : function() {
                            for (; 0 != R && null === a;) {
                                if (De(), S = O, E = A, O = 2, 0 != b && S < N && I - b <= ue && ((O = ke(b)) > R && (O = R), 3 === O && I - A > 4096 && O--), S >= 3 && O <= S) {
                                    var e;
                                    e = Xe(I - 1 - E, S - 3), R -= S - 1, S -= 2;
                                    do {
                                        I++, De()
                                    } while (0 != --S);
                                    w = 0, O = 2, I++, e && (Ye(0), m = I)
                                } else 0 != w ? (Xe(0, 255 & f[I - 1]) && (Ye(0), m = I), I++, R--) : (w = 1, I++, R--);
                                for (; R < ce && !T;) Be()
                            }
                        }(), 0 === R && (0 != w && Xe(0, 255 & f[I - 1]), Ye(1), l = !0), r + Ue(e, r + t, n - r)) : (l = !0, 0)
                    },
                    Ue = function(e, t, n) {
                        var r, o, i;
                        for (r = 0; null != a && r < n;) {
                            for ((o = n - r) > a.len && (o = a.len), i = 0; i < o; i++) e[t + r + i] = ~a.ptr[a.off + i];
                            var s;
                            if (a.off += o, a.len -= o, r += o, 0 === a.len) s = a, a = a.next, Ae(s)
                        }
                        if (r === n) return r;
                        if (d < u) {
                            for ((o = n - r) > u - d && (o = u - d), i = 0; i < o; i++) e[t + r + i] = ~ge[d + i];
                            r += o, u === (d += o) && (u = d = 0)
                        }
                        return r
                    },
                    He = function() {
                        var e, t, n, r, o;
                        if (0 == k[0].dl) {
                            for (F.dyn_tree = P, F.static_tree = M, F.extra_bits = Ee, F.extra_base = 257, F.elems = fe, F.max_length = de, F.max_code = 0, j.dyn_tree = L, j.static_tree = k, j.extra_bits = we, j.extra_base = 0, j.elems = pe, j.max_length = de, j.max_code = 0, U.dyn_tree = B, U.static_tree = null, U.extra_bits = Oe, U.extra_base = 0, U.elems = 19, U.max_length = 7, U.max_code = 0, n = 0, r = 0; r < 28; r++)
                                for (Y[r] = n, e = 0; e < 1 << Ee[r]; e++) z[n++] = r;
                            for (z[n - 1] = r, o = 0, r = 0; r < 16; r++)
                                for (X[r] = o, e = 0; e < 1 << we[r]; e++) K[o++] = r;
                            for (o >>= 7; r < pe; r++)
                                for (X[r] = o << 7, e = 0; e < 1 << we[r] - 7; e++) K[256 + o++] = r;
                            for (t = 0; t <= de; t++) H[t] = 0;
                            for (e = 0; e <= 143;) M[e++].dl = 8, H[8]++;
                            for (; e <= 255;) M[e++].dl = 9, H[9]++;
                            for (; e <= 279;) M[e++].dl = 7, H[7]++;
                            for (; e <= 287;) M[e++].dl = 8, H[8]++;
                            for (qe(M, 287), e = 0; e < pe; e++) k[e].dl = 5, k[e].fc = Je(e, 5);
                            We()
                        }
                    },
                    We = function() {
                        var e;
                        for (e = 0; e < fe; e++) P[e].fc = 0;
                        for (e = 0; e < pe; e++) L[e].fc = 0;
                        for (e = 0; e < 19; e++) B[e].fc = 0;
                        P[256].fc = 1, ne = re = 0, Z = J = $ = 0, ee = 0, te = 1
                    },
                    Ge = function(e, t) {
                        for (var n = W[t], r = t << 1; r <= G && (r < G && Le(e, W[r + 1], W[r]) && r++, !Le(e, n, W[r]));) W[t] = W[r], t = r, r <<= 1;
                        W[t] = n
                    },
                    qe = function(e, t) {
                        var n, r, o = new Array(16),
                            i = 0;
                        for (n = 1; n <= de; n++) i = i + H[n - 1] << 1, o[n] = i;
                        for (r = 0; r <= t; r++) {
                            var a = e[r].dl;
                            0 !== a && (e[r].fc = Je(o[a]++, a))
                        }
                    },
                    Ve = function(e) {
                        var t, n, r = e.dyn_tree,
                            o = e.static_tree,
                            i = e.elems,
                            a = -1,
                            s = i;
                        for (G = 0, q = he, t = 0; t < i; t++) 0 != r[t].fc ? (W[++G] = a = t, V[t] = 0) : r[t].dl = 0;
                        for (; G < 2;) {
                            var c = W[++G] = a < 2 ? ++a : 0;
                            r[c].fc = 1, V[c] = 0, ne--, null != o && (re -= o[c].dl)
                        }
                        for (e.max_code = a, t = G >> 1; t >= 1; t--) Ge(r, t);
                        do {
                            t = W[1], W[1] = W[G--], Ge(r, 1), n = W[1], W[--q] = t, W[--q] = n, r[s].fc = r[t].fc + r[n].fc, V[t] > V[n] + 1 ? V[s] = V[t] : V[s] = V[n] + 1, r[t].dl = r[n].dl = s, W[1] = s++, Ge(r, 1)
                        } while (G >= 2);
                        W[--q] = W[1],
                            function(e) {
                                var t, n, r, o, i, a, s = e.dyn_tree,
                                    c = e.extra_bits,
                                    u = e.extra_base,
                                    d = e.max_code,
                                    l = e.max_length,
                                    f = e.static_tree,
                                    p = 0;
                                for (o = 0; o <= de; o++) H[o] = 0;
                                for (s[W[q]].dl = 0, t = q + 1; t < he; t++)(o = s[s[n = W[t]].dl].dl + 1) > l && (o = l, p++), s[n].dl = o, n > d || (H[o]++, i = 0, n >= u && (i = c[n - u]), a = s[n].fc, ne += a * (o + i), null != f && (re += a * (f[n].dl + i)));
                                if (0 !== p) {
                                    do {
                                        for (o = l - 1; 0 === H[o];) o--;
                                        H[o]--, H[o + 1] += 2, H[l]--, p -= 2
                                    } while (p > 0);
                                    for (o = l; 0 != o; o--)
                                        for (n = H[o]; 0 != n;)(r = W[--t]) > d || (s[r].dl != o && (ne += (o - s[r].dl) * s[r].fc, s[r].fc = o), n--)
                                }
                            }(e), qe(r, a)
                    },
                    ze = function(e, t) {
                        var n, r, o = -1,
                            i = e[0].dl,
                            a = 0,
                            s = 7,
                            c = 4;
                        for (0 === i && (s = 138, c = 3), e[t + 1].dl = 65535, n = 0; n <= t; n++) r = i, i = e[n + 1].dl, ++a < s && r === i || (a < c ? B[r].fc += a : 0 != r ? (r != o && B[r].fc++, B[16].fc++) : a <= 10 ? B[17].fc++ : B[18].fc++, a = 0, o = r, 0 === i ? (s = 138, c = 3) : r === i ? (s = 6, c = 3) : (s = 7, c = 4))
                    },
                    Ke = function(e, t) {
                        var n, r, o = -1,
                            i = e[0].dl,
                            a = 0,
                            s = 7,
                            c = 4;
                        for (0 === i && (s = 138, c = 3), n = 0; n <= t; n++)
                            if (r = i, i = e[n + 1].dl, !(++a < s && r === i)) {
                                if (a < c)
                                    do {
                                        xe(r, B)
                                    } while (0 != --a);
                                else 0 != r ? (r != o && (xe(r, B), a--), xe(16, B), Ze(a - 3, 2)) : a <= 10 ? (xe(17, B), Ze(a - 3, 3)) : (xe(18, B), Ze(a - 11, 7));
                                a = 0, o = r, 0 === i ? (s = 138, c = 3) : r === i ? (s = 6, c = 3) : (s = 7, c = 4)
                            }
                    },
                    Ye = function(e) {
                        var t, n, r, o, i;
                        if (o = I - m, Q[$] = ee, Ve(F), Ve(j), r = function() {
                            var e;
                            for (ze(P, F.max_code), ze(L, j.max_code), Ve(U), e = 18; e >= 3 && 0 == B[Se[e]].dl; e--);
                            return ne += 3 * (e + 1) + 5 + 5 + 4, e
                        }(), (n = re + 3 + 7 >> 3) <= (t = ne + 3 + 7 >> 3) && (t = n), o + 4 <= t && m >= 0)
                            for (Ze(0 + e, 3), $e(), Ne(o), Ne(~o), i = 0; i < o; i++) Ce(f[m + i]);
                        else n === t ? (Ze(2 + e, 3), Qe(M, k)) : (Ze(4 + e, 3), function(e, t, n) {
                            var r;
                            for (Ze(e - 257, 5), Ze(t - 1, 5), Ze(n - 4, 4), r = 0; r < n; r++) Ze(B[Se[r]].dl, 3);
                            Ke(P, e - 1), Ke(L, t - 1)
                        }(F.max_code + 1, j.max_code + 1, r + 1), Qe(P, L));
                        We(), 0 != e && $e()
                    },
                    Xe = function(e, t) {
                        if (h[Z++] = t, 0 === e ? P[t].fc++ : (e--, P[z[t] + le + 1].fc++, L[Pe(e)].fc++, p[J++] = e, ee |= te), te <<= 1, 0 == (7 & Z) && (Q[$++] = ee, ee = 0, te = 1), D > 2 && 0 == (4095 & Z)) {
                            var n, r = 8 * Z,
                                o = I - m;
                            for (n = 0; n < pe; n++) r += L[n].fc * (5 + we[n]);
                            if (r >>= 3, J < parseInt(Z / 2) && r < parseInt(o / 2)) return !0
                        }
                        return 8191 === Z || 8192 === J
                    },
                    Qe = function(e, t) {
                        var n, r, o, i, a = 0,
                            s = 0,
                            c = 0,
                            u = 0;
                        if (0 != Z)
                            do {
                                0 == (7 & a) && (u = Q[c++]), r = 255 & h[a++], 0 == (1 & u) ? xe(r, e) : (o = z[r], xe(o + le + 1, e), 0 != (i = Ee[o]) && (r -= Y[o], Ze(r, i)), n = p[s++], o = Pe(n), xe(o, t), 0 != (i = we[o]) && (n -= X[o], Ze(n, i))), u >>= 1
                            } while (a < Z);
                        xe(256, e)
                    },
                    Ze = function(e, t) {
                        _ > 16 - t ? (Ne(g |= e << _), g = e >> 16 - _, _ += t - 16) : (g |= e << _, _ += t)
                    },
                    Je = function(e, t) {
                        var n = 0;
                        do {
                            n |= 1 & e, e >>= 1, n <<= 1
                        } while (--t > 0);
                        return n >> 1
                    },
                    $e = function() {
                        _ > 8 ? Ne(g) : _ > 0 && Ce(g), g = 0, _ = 0
                    },
                    et = function() {
                        if (0 != u) {
                            var e, t;
                            for (null != i ? (n = i, i = i.next) : n = new be, n.next = null, n.len = n.off = 0, e = n, null === a ? a = s = e : s = s.next = e, e.len = u - d, t = 0; t < e.len; t++) e.ptr[t] = ge[d + t];
                            u = d = 0
                        }
                        var n
                    };
                t.n = function(e, t) {
                    var n, o;
                    oe = e, ie = 0, void 0 === t && (t = 6),
                        function(e) {
                            var t;
                            if (e ? e < 1 ? e = 1 : e > 9 && (e = 9) : e = 6, D = e, c = !1, T = !1, null == ge) {
                                for (i = a = s = null, ge = new Array(r), f = new Array(65536), p = new Array(8192), h = new Array(32832), v = new Array(65536), P = new Array(he), t = 0; t < he; t++) P[t] = new _e;
                                for (L = new Array(61), t = 0; t < 61; t++) L[t] = new _e;
                                for (M = new Array(288), t = 0; t < 288; t++) M[t] = new _e;
                                for (k = new Array(pe), t = 0; t < pe; t++) k[t] = new _e;
                                for (B = new Array(39), t = 0; t < 39; t++) B[t] = new _e;
                                F = new me, j = new me, U = new me, H = new Array(16), W = new Array(573), V = new Array(573), z = new Array(256), K = new Array(512), Y = new Array(29), X = new Array(pe), Q = new Array(parseInt(1024))
                            }
                        }(t);
                    for (var u = new Array(1024), d = [];
                         (n = je(u, 0, u.length)) > 0;) {
                        var l = new Array(n);
                        for (o = 0; o < n; o++) l[o] = String.fromCharCode((256 + u[o]) % 256);
                        d[d.length] = l.join("")
                    }
                    return oe = null, d.join("")
                }
            },
            93420: (e, t) => {
                "use strict";
                t.d = void 0, t.d = 2147483647
            },
            49573: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BLOCK_TYPES = t.URLS = t.REFRESH_VIEWPORT_VISIBLE_PART = t.MAX_ADS_LIMIT = t.DEFAULT_RELOAD_TIMEOUT = void 0;
                var r = (0, n(7386).isHermione)() && (null === window || void 0 === window ? void 0 : window.location) && !(0, n(7386).isReleaseTestSuite)() ? "//".concat(window.location.host) : "//an.yandex.ru",
                    o = n(70709).a1 ? "//yandex.ru/ads" : r,
                    i = n(70709).wY ? "//yandex.ru/ads" : n(70709).a1 ? "//yandex.ru/an" : "//an.yandex.ru";
                t.DEFAULT_RELOAD_TIMEOUT = 30, t.MAX_ADS_LIMIT = 9, t.REFRESH_VIEWPORT_VISIBLE_PART = .5, t.URLS = {
                    direct: "".concat("https:").concat(i, "/page/"),
                    rtb: "".concat("https:").concat(o, "/meta/"),
                    render: "".concat("https:").concat(o, "/render/"),
                    favicon: (0, n(7386).isHermione)() ? "//pcode-ci.s3.mds.yandex.net/pcode-hermione/favicons/" : "https://favicon.yandex.net/favicon/"
                }, t.BLOCK_TYPES = {
                    VERTICAL: "vertical",
                    HORIZONTAL: "horizontal",
                    GRID: "grid",
                    SSR: "ssr"
                }
            },
            31629: (e, t, n) => {
                "use strict";
                t.H1 = t.iF = t.zh = void 0;
                var r, o = "__pcode_freq_storage__";

                function i() {
                    if (!r) {
                        var e = n(74987).safeLocalStorage.getItem(o) || "";
                        try {
                            r = n.lv["json"].parse(e)
                        } catch (e) {
                            r = {}
                        }
                    }
                }

                function a() {
                    try {
                        var e = n.lv["json"].stringify(r);
                        n(74987).safeLocalStorage.setItem(o, e)
                    } catch (e) {}
                }

                function s(e) {
                    return Boolean(e) && c(e.maxShowCount, 1, 100) && c(e.periodInSeconds, 1, 86400)
                }

                function c(e, t, r) {
                    return (0, n(50023).z)(e) && e >= t && e <= r
                }
                t.zh = function(e) {
                    i();
                    var t = r[e];
                    return s(t) && (0, n(85200).isArray)(t.lastRequests) ? t : void 0
                }, t.iF = function(e) {
                    var t;
                    if ((0, n(41486).isString)(e.blockId)) {
                        if (i(), s(e)) {
                            var o = (null === (t = r[e.blockId]) || void 0 === t ? void 0 : t.lastRequests) || [];
                            o.push(e.reqTime), r[e.blockId] = {
                                maxShowCount: e.maxShowCount,
                                periodInSeconds: e.periodInSeconds,
                                lastRequests: o
                            }
                        } else delete r[e.blockId];
                        a()
                    }
                }, t.H1 = function(e, t) {
                    i(), r[e].lastRequests = t, a()
                }
            },
            30289: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = (0, n(84492).ne)(e),
                        r = null == t ? void 0 : t.pathEnabled,
                        o = null == t ? void 0 : t.pathDisabled,
                        i = !0;
                    if ((0, n(41486).isString)(r) || (0, n(41486).isString)(o)) {
                        if ((0, n(41486).isString)(r)) {
                            var a = r.split(",").map((function(e) {
                                return e.trim()
                            }));
                            i = (0, n(38179).some)(a, (function(e) {
                                return location.pathname.startsWith(e)
                            }))
                        }
                        if ((0, n(41486).isString)(o)) {
                            a = o.split(",").map((function(e) {
                                return e.trim()
                            }));
                            i = !(0, n(38179).some)(a, (function(e) {
                                return location.pathname.startsWith(e)
                            }))
                        }(0, n(28274).traceLog)({
                            pathEnabled: r,
                            pathDisabled: o,
                            href: location.href,
                            canShow: i
                        }, "REQUEST_URL_MASK_RESULT")
                    }
                    return i
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getRequestTimeout = t.markRequest = t.canShowAd = t.canMakeRequest = void 0, t.canMakeRequest = function(e, t) {
                    return !!(0, n(14573).Q)(window, ["pi", "piHermione", "piPreview"]) || r(e) && function(e, t) {
                        var r = (0, n(31629).zh)(e);
                        if (!r) return !0;
                        var o = r.maxShowCount,
                            i = r.periodInSeconds,
                            a = r.lastRequests.filter((function(e) {
                                return e > t - i
                            }));
                        return (0, n(31629).H1)(e, a), a.length < o
                    }(e, t)
                }, t.canShowAd = r, t.markRequest = function(e, t, r) {
                    void 0 === r && (r = {}), (0, n(31629).iF)({
                        blockId: e,
                        maxShowCount: r.maxShowCount,
                        periodInSeconds: r.periodInSeconds,
                        reqTime: t
                    }), (0, n(84492).tA)({
                        blockId: e,
                        pathEnabled: r.pathEnabled,
                        pathDisabled: r.pathDisabled
                    })
                }, t.getRequestTimeout = function(e) {
                    var t = (0, n(31629).zh)(e);
                    if (t) {
                        var r = t.maxShowCount,
                            o = t.periodInSeconds;
                        return 1e3 * Math.max(o / r, n(49573).DEFAULT_RELOAD_TIMEOUT)
                    }
                }
            },
            84492: (e, t, n) => {
                "use strict";
                t.tA = t.ne = void 0;
                var r, o = "__pcode_path_storage__";

                function i() {
                    if (!r) {
                        var e = n(74987).safeSessionStorage.getItem(o) || "";
                        try {
                            r = n.lv["json"].parse(e)
                        } catch (e) {
                            r = {}
                        }
                    }
                }
                t.ne = function(e) {
                    return i(), r[e]
                }, t.tA = function(e) {
                    if ((0, n(41486).isString)(e.blockId)) {
                        if (i(), !e.pathDisabled && !e.pathEnabled) return void delete r[e.blockId];
                        r[e.blockId] = {}, e.pathEnabled && (r[e.blockId].pathEnabled = e.pathEnabled), e.pathDisabled && (r[e.blockId].pathDisabled = e.pathDisabled),
                            function() {
                                try {
                                    var e = n.lv["json"].stringify(r);
                                    n(74987).safeSessionStorage.setItem(o, e)
                                } catch (e) {}
                            }()
                    }
                }
            },
            98341: (e, t) => {
                "use strict";
                var n = function() {
                    return n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, n.apply(this, arguments)
                };
                t.Z = void 0;
                var r = function() {
                    function e() {
                        this.filterData = {
                            awaps: "",
                            yabs: []
                        }
                    }
                    return e.prototype.getAdFilterData = function() {
                        return this.filterData
                    }, e.prototype.setEmptyAdFilter = function() {
                        this.filterData = {
                            awaps: "",
                            yabs: []
                        }
                    }, e.prototype.setAdFilterData = function(e, t) {
                        var r;
                        this.filterData = n(n({}, this.filterData), ((r = {})[e] = t, r))
                    }, e.prototype.getEmptyAdFilter = function() {
                        return {
                            awaps: "",
                            yabs: []
                        }
                    }, e
                }();
                t.Z = r
            },
            17010: (e, t, n) => {
                "use strict";
                t.s = void 0;
                var r = function() {
                    function e() {
                        this.list = []
                    }
                    return e.prototype.add = function(e) {
                        e && (-1 === this.indexOf(e) && this.list.push(e))
                    }, e.prototype.remove = function(e) {
                        if (e) {
                            var t = this.indexOf(e); - 1 !== t && this.list.splice(t, 1)
                        }
                    }, e.prototype.items = function() {
                        return this.list
                    }, e.prototype.indexOf = function(e) {
                        return (0, n(22886).indexOf)(this.list, e, 0, (function(t) {
                            return (0, n(41486).isString)(t) || (0, n(41486).isString)(e) ? t === e : !(!t.adId || !e.adId) && (t.adId === e.adId && t.pageNumber === e.pageNumber && t.renderTo === e.renderTo)
                        }))
                    }, e
                }();
                t.s = r
            },
            72812: (e, t, n) => {
                "use strict";
                t.S = void 0, t.S = function() {
                    if (!(0, n(38710).getGlobalVariable)("adUsageStorageVars")) {
                        var e = {
                            ads: new(n(17010).s),
                            allAds: new(n(17010).s),
                            adFilterData: new(n(98341).Z)
                        };
                        (0, n(38710).setGlobalVariable)("adUsageStorageVars", e)
                    }
                    return (0, n(38710).getGlobalVariable)("adUsageStorageVars")
                }
            },
            63771: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    for (var n = [], r = {}, o = 0, i = e; o < i.length; o++) {
                        var a = i[o];
                        !r[a.adId] && t(a) && (n.push(a.adId), r[a.adId] = !0)
                    }
                    return n
                }
                t.R = void 0;
                var o = function(e) {
                    return 0 != (e.top | e.bottom | e.right | e.left)
                };
                t.R = function(e, t, i, a) {
                    void 0 === a && (a = function(e, t) {
                        return e === t
                    });
                    var s = (0, n(52544).getWindowSize)().height * t;
                    if (!i) return r(e, (function() {
                        return !0
                    }));
                    var c = (0, n(5989).getElementById)(i.renderTo),
                        u = c && (0, n(34403).getBoundingClientRect)(c);
                    if (!u || !o(u)) return r(e, (function(e) {
                        return a(i.pageNumber, e.pageNumber)
                    }));
                    var d = u.top - s,
                        l = u.bottom + s;
                    return r(e, (function(e) {
                        if (!a(i.pageNumber, e.pageNumber)) return !1;
                        var t = (0, n(5989).getElementById)(e.renderTo);
                        if (!t) return !1;
                        if (i.renderTo === e.renderTo) return !0;
                        if (e.hidden) return !1;
                        var r = (0, n(34403).getBoundingClientRect)(t);
                        return r.top < l && r.bottom > d || !o(r)
                    }))
                }
            },
            91411: (e, t, n) => {
                "use strict";
                var r, o = Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    },
                    i = Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e["default"] = t
                    },
                    a = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
                        return i(t, e), t
                    }(n(70749));
                if (n(73266).isAMP) {
                    var s = (0, n(60304).M)("__pcodeStorage__"),
                        c = "adUsageStorage";
                    (r = s.getItem(c)) || (s.setItem(c, a), r = a)
                } else r = a;
                e.exports = r
            },
            70749: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getAdUsageStorage = t.setAllowRepeatAds = void 0;
                var o = "yabs.",
                    i = "awaps.",
                    a = (0, n(72812).S)(),
                    s = a.ads,
                    c = a.allAds,
                    u = a.adFilterData,
                    d = (0, n(88521).getHref)();
                var l, f = function() {
                    function e(e) {
                        var t = e.maxSkipSize,
                            r = void 0 === t ? 9 : t,
                            o = e.screen,
                            i = e.custom;
                        this.id = i ? 1 : 0, this.hidden = Boolean(o && o < 0), this.getNearbyAds = o ? function(e, t) {
                            return (0, n(63771).R)(e, o, t, (function() {
                                return !0
                            }))
                        } : function(e) {
                            return (0, n(15735).map)(e.slice(-r), (function(e) {
                                return e.adId
                            }))
                        }
                    }
                    return e.limitYabs = function(e, t) {
                        var n = e.length - t;
                        return n > 0 ? e.slice(n) : e
                    }, e.prototype.capture = function(e) {
                        s.add(r(r({}, e), {
                            hidden: this.hidden
                        }))
                    }, e.prototype.release = function(e) {
                        s.remove(e)
                    }, e.prototype.getCapturedCount = function() {
                        return s.items().length
                    }, e.prototype.captureDirect = function(e) {
                        var t = c.items(),
                            r = (0, n(1056).e)(e, t);
                        (0, n(15137).forEach)(r, (function(e) {
                            return c.add(e)
                        }))
                    }, e.prototype.getUnusableAds = function(e, t) {
                        void 0 === t && (t = []);
                        var r = {};
                        (0, n(15137).forEach)(t, (function(e) {
                            return r[e] = !0
                        }));
                        var o = (0, n(94320).filter)(s.items(), (function(e) {
                            var t = e.adId;
                            return !r[t]
                        }));
                        return this.getNearbyAds(o, e)
                    }, e.prototype.saveAdFilter = function(e, t) {
                        var r = function(e) {
                            var t = e ? e.split(":") : [],
                                r = u.getEmptyAdFilter();
                            return (0, n(15137).forEach)(t, (function(e) {
                                if (-1 !== e.indexOf(i)) r.awaps = e.split(".")[1];
                                else if (-1 !== e.indexOf(o)) {
                                    var t = e.split(".")[1];
                                    t.length > 0 && (r.yabs = (0, n(21625).decode)(t).split("\n"))
                                }
                            })), r
                        }(e);
                        u.setAdFilterData("awaps", r.awaps), t && u.setAdFilterData("yabs", r.yabs)
                    }, e.prototype.getSkipToken = function(t, r) {
                        var a;
                        a = (0, n(88521).getHref)(), d !== a && (u.setEmptyAdFilter(), d = a);
                        var s, l, f = u.getAdFilterData(),
                            p = c.items(),
                            h = this.getUnusableAds(t, r),
                            v = (0, n(1056).e)(f.yabs, p),
                            g = e.limitYabs(v.concat(h), 50),
                            _ = {
                                awaps: f.awaps,
                                yabs: g
                            };
                        return l = [], (s = _).awaps && l.push(i + s.awaps), s.yabs.length && l.push(o + (0, n(21625).encode)(s.yabs.join("\n"))), l.join(":")
                    }, e
                }();
                t.setAllowRepeatAds = function(e) {
                    l = e
                };
                t.getAdUsageStorage = function(e) {
                    var t = l || e && e.allowRepeatAds || {};
                    return new f(t)
                }
            },
            85384: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isCustomBannerTypeAndExp = t.isCustomBannerType = t.BannerTypes = void 0, t.BannerTypes = ["floorAd", "topAd", "fullscreen"], t.isCustomBannerType = function(e) {
                    return void 0 === e && (e = ""), (0, n(80511).includes)(t.BannerTypes, e)
                }, t.isCustomBannerTypeAndExp = function(e) {
                    return void 0 === e && (e = ""), "fullscreen" === e ? "exp" === (0, n(88772).useExperimentFlag)("NEW_FULLSCREEN_IN_SHADOW_DOM") : ("floorAd" === e || "topAd" === e) && "exp" === (0, n(88772).useExperimentFlag)("STICKY_AD_IN_SHADOW_DOM")
                }
            },
            34680: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.T = void 0, t.T = function(e) {
                    var t;
                    if ("object" == typeof e) {
                        t = r({}, e);
                        var o = e.screen;
                        o && (t.screen = Number(o) || (n(50880).isMobile ? o.mobile : o.desktop))
                    } else t = {
                        maxSkipSize: 0
                    };
                    return t.custom = !0, t
                }
            },
            44751: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.parseBlockId = void 0, t.parseBlockId = function(e) {
                    var t = {
                        product: null,
                        pageId: null,
                        impId: null
                    };
                    if (!e) return t;
                    var n = e.lastIndexOf("-");
                    if (-1 === n) return t;
                    var r = e.lastIndexOf("-", n - 1),
                        o = e.slice(r + 1, n);
                    return parseInt(o, 10) ? (t.pageId = o, t.impId = e.slice(n + 1), -1 !== r && (t.product = e.slice(0, e.indexOf("-"))), t) : t
                }
            },
            21849: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.prepareRtbConfig = void 0, t.prepareRtbConfig = function(e) {
                    var t = (0, n(44751).parseBlockId)(e.blockId),
                        o = r({}, e);
                    if (o.prepared) return o;
                    var u = void 0 === e.statId ? (0, n(28722).brakePointsStatId)() : e.statId;
                    return o.onRewarded = (0, n(94532).once)((0, n(95456).K)(e.onRewarded)), o.onRewardedCount = (0, n(94532).once)((0, n(95456).K)(e.onRewardedCount)), o.onOpen = (0, n(95456).K)(e.onOpen), o.onClose = (0, n(95456).K)(e.onClose), o.onError = (0, n(95456).K)(e.onError), o.onRender = (0, n(95456).K)(e.onRender), o.onHide = (0, n(95456).K)(e.onHide), o.pageId = t.pageId, o.blockImpId = t.impId, o.statId = o.blockImpId, o.partnerStatId = u, o.geo = (0, n(60509).getValidGeo)(o.geo), o.disableHighlight = !0 === o.disableHighlight, o.cspNonce && (o.cspNonce = encodeURIComponent(o.cspNonce)), o.prepared = !0,
                        function(e) {
                            var t = e.allowRepeatAds;
                            t = t ? (0, n(34680).T)(t) : i(e.pageId, !1) ? {
                                maxSkipSize: 0,
                                custom: !0
                            } : a ? {
                                maxSkipSize: 9,
                                custom: !0
                            } : s ? {
                                maxSkipSize: 20,
                                custom: !0
                            } : c ? {
                                screen: 9,
                                custom: !0
                            } : {
                                screen: n(50880).isMobile ? 3 : 2
                            };
                            return e.allowRepeatAds = t, e
                        }(o)
                };
                var o = (0, n(38710).getYaContext)().isAllowedRepeatAds,
                    i = void 0 === o ? function(e, t) {
                        return t
                    } : o,
                    a = (0, n(14573).Q)(window, ["yandexTv"]),
                    s = (0, n(14573).Q)(window, ["avito", "avitoMobile"]),
                    c = (0, n(14573).Q)(window, ["yandexZen"]) || (0, n(14573).Q)(window, ["yandexWebntp"]) || (0, n(14573).Q)(window, ["yandexChromeNtp"]) || (0, n(14573).Q)(window, ["yandexMorda"])
            },
            31231: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                });
                t.K = void 0;
                var i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.toString = function() {
                        return n.lv["json"].stringify(this.config)
                    }, t.prototype.getConfig = function() {
                        return this.config
                    }, t
                }(n(43).K);
                t.K = i
            },
            94449: (e, t) => {
                "use strict";
                t.p = void 0, t.p = function(e) {
                    Promise.resolve().then(e)
                }
            },
            479: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.checkForEmptyAnswer = void 0, t.checkForEmptyAnswer = function(e) {
                    return function(e) {
                        return !Boolean(e.direct)
                    }(e) && function(e) {
                        return !Boolean(e.rtb)
                    }(e) && function(e) {
                        if (!Boolean(e.seatbid)) return !0;
                        var t = e.seatbid[0].bid;
                        return (0, n(85200).isArray)(t) && 0 === t.length
                    }(e) && function(e) {
                        return !(e.fullscreen || e.distribution || e.stripe || e.popup || e.microdistribution)
                    }(e)
                }
            },
            72876: (e, t, n) => {
                "use strict";
                t.t = void 0, t.t = function(e) {
                    var t = function(e) {
                        if (!(0, n(41486).isString)(e.response)) return;
                        if (e.response.indexOf("PageImp data not found") > -1) return {
                            code: "BLOCK_NOT_FOUND",
                            text: 'Block "'.concat(e.impId, '" does not exists')
                        };
                        if (e.response.indexOf("out of range") > -1) return {
                            code: "PAGE_NOT_FOUND",
                            text: 'Page "'.concat(e.pageId, '" does not exists')
                        };
                        if (e.response.indexOf("disabled") > -1) return {
                            code: "PAGE_DISABLED",
                            text: 'Page "'.concat(e.pageId, '" is disabled')
                        };
                        if (e.response.indexOf("Bad partner/domain") > -1) return {
                            code: "WRONG_DOMAIN",
                            text: 'Current domain is not allowed on the page "'.concat(e.pageId, '"')
                        };
                        return
                    }(e);
                    if (t && "-" !== e.uniqueId) {
                        n(49874).logger.errorStrict(t.code, {
                            text: t.text
                        });
                        var r = (0, n(74472).getPlacement)(e.uniqueId);
                        null == r || r.callbacks.triggerError(t.code, t.text)
                    }
                }
            },
            34289: (e, t) => {
                "use strict";
                t.G = void 0, t.G = function() {
                    return {
                        common: {}
                    }
                }
            },
            25379: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.J = void 0;
                var o = [200];
                var i = function() {
                    function e(e) {
                        var t = this;
                        this.load = function() {
                            var e, o;
                            if ((0, n(68905).oi)()) t.config.callback((0, n(34289).G)());
                            else {
                                t.url = t.config.url.clone(), t.callbackId = (0, n(67729).getRandomInt)(1e12, 1e13), (0, n(9809).logSSPEvent)("SSP_EXP_LOAD", t.config.renderData), t.url.appendParams({
                                    callback: "Ya[".concat(t.callbackId, "]")
                                }), t.xhrStatuses && t.xhrStatuses.length && (t.url.appendParams({
                                    "X-Yandex-Retry": t.xhrStatuses.length
                                }), t.url.appendParams({
                                    "X-Yandex-Balancer-Retry": t.xhrStatuses.length
                                }));
                                var i = t.config.renderData;
                                i && "object" == typeof i && (t.url.appendParams({
                                    hitlogid: null === (e = i.direct) || void 0 === e ? void 0 : e.ads[0].bs_data.hitLogId
                                }), i = n.lv["json"].stringify(i));
                                var a = r({
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }, t.config.headers);
                                if (document && document.location) {
                                    var s = new URL(document.location.toString());
                                    "true" === (null === (o = null == s ? void 0 : s.searchParams) || void 0 === o ? void 0 : o.get("hermione")) && (t.url.appendParams({
                                        hermione: !0
                                    }), a["Content-Type"] = "application/json")
                                }
                                var c = t.url.getUrl();
                                c = c.replace(/^http:\/\//, "https://"), t.startTime = Date.now(), (0, n(2052).W)({
                                    url: c,
                                    method: i ? "post" : "get",
                                    data: i || void 0,
                                    retries: 0,
                                    headers: a,
                                    withCredentials: !t.config.renderData,
                                    onSuccess: t.successHandler,
                                    onError: t.errorHandler
                                });
                                var u = (0, n(38710).getYaContext)();
                                u.Rum && u.Rum.then((function(e) {
                                    var t = i ? "render" : "meta";
                                    e && e.isRumInited() && e.sendResTiming(t, c)
                                }))
                            }
                        }, this.successHandler = function(e) {
                            var o, i, a = t.config.renderData;
                            if (t.startTime && a) {
                                var s = Date.now(),
                                    c = (0, n(88772).useExperimentFlag)("SSP_RENDER_REQUEST_PERCENT");
                                isFinite(c) || (c = 1), (0, n(9809).logSSPErrorEvent)("SSP_RENDER_REQUEST_TIME", {
                                    time: s - t.startTime,
                                    bidreqid: (null === (o = null == a ? void 0 : a.rtbAuctionInfo) || void 0 === o ? void 0 : o.bidReqIdStr) || "",
                                    productType: (null === (i = null == a ? void 0 : a.common) || void 0 === i ? void 0 : i.productType) || ""
                                }, c)
                            }
                            var u = e.response || e.responseText;
                            var d = (0, n(34289).G)();
                            if ((0, n(41486).isString)(u)) {
                                try {
                                    d = (0, n(61989).B)(u, t.callbackId, t.config.nonce)
                                } catch (e) {
                                    return t.sendError("AD_LOADER_BAD_ANSWER", (0, n(21625).encode)(u), e.message), (0, n(9809).logSSPErrorEvent)("SSP_EXP_SERVER_ANSWER_ERROR", t.config.renderData), void(0, n(12251).protect)("Bad response", (function() {
                                        t.config.callback((0, n(34289).G)())
                                    }))()
                                }
                                if (d.common && d.common.canRetry) return void t.retryLoading(200);
                                if (u.length < 200) return t.sendError("AD_LOADER_TOO_SHORT_ANSWER", u), void(0, n(12251).protect)("Short response", (function() {
                                    t.config.callback((0, n(34289).G)())
                                }))()
                            } else(0, n(7153).isObject)(u) && (d = r(r({}, d), u));
                            if ((0, n(68905).Nf)(d), (0, n(479).checkForEmptyAnswer)(d)) return t.sendError("AD_LOADER_NO_ADS_TO_RENDER", u), void(0, n(12251).protect)("Alt response", (function() {
                                t.config.callback((0, n(34289).G)())
                            }))();
                            t.sendSuccess(), (0, n(12251).protect)("JSONP callback", (function() {
                                t.config.callback(d)
                            }))()
                        }, this.errorHandler = function(e, r) {
                            var o = 204 === r.status ? "AD_LOADER_EMPTY_ANSWER" : "AD_LOADER_XHR_ERROR";
                            (0, n(72876).t)({
                                uniqueId: t.config.uniqueId,
                                pageId: t.config.pageId,
                                impId: t.config.impId,
                                response: r.response
                            }), t.xhrStatuses.push(r.status), t.sendError(o, r.response, e && e.message), (0, n(12251).protect)("Ajax error", (function() {
                                t.config.callback((0, n(34289).G)())
                            }))()
                        }, this.config = e, this.xhrStatuses = []
                    }
                    return e.prototype.retryLoading = function(e) {
                        var t = this;
                        this.xhrStatuses.push(e);
                        var r = this.xhrStatuses.length;
                        r <= o.length ? setTimeout(this.load, o[r - 1]) : (this.sendError("AD_LOADER_TOO_MANY_ATTEMPTS"), (0, n(12251).protect)("Too many attempts", (function() {
                            t.config.callback((0, n(34289).G)())
                        }))())
                    }, e.prototype.sendError = function(e, t, r) {
                        var o, i, a, s, c, u;
                        n(49874).logger.errorStrict(e, {
                            text: r || e,
                            url: this.url.getUrl(),
                            pageId: this.config.pageId,
                            refresh: Boolean(this.config.isRefresh),
                            response: t
                        }), this.config.renderData && this.config.renderData.rtb && (0, n(9809).logSSPErrorEvent)("SSP_EXP_HTML_ON_ERROR", {
                            html: document.documentElement.innerHTML,
                            bidreqid: (null === (o = this.config.renderData.rtb) || void 0 === o ? void 0 : o.bidreqid) || "",
                            productType: (null === (i = this.config.renderData.common) || void 0 === i ? void 0 : i.productType) || "",
                            adIds: null === (s = null === (a = this.config.renderData) || void 0 === a ? void 0 : a.settings) || void 0 === s ? void 0 : s.bannerIds,
                            hitLogId: null === (u = null === (c = this.config.renderData) || void 0 === c ? void 0 : c.eventConfirmationData) || void 0 === u ? void 0 : u.HitLogID
                        }, 1)
                    }, e.prototype.sendSuccess = function() {
                        n(49874).logger.errorStrict("AD_LOADER_SUCCESS", {
                            text: "ok",
                            url: this.url.getUrl(),
                            pageId: this.config.pageId,
                            refresh: Boolean(this.config.isRefresh)
                        }), (0, n(9809).logSSPEvent)("SSP_EXP_LOAD_SUCCESS", this.config.renderData)
                    }, e
                }();
                t.J = i
            },
            68905: (e, t) => {
                "use strict";
                t.Nf = t.oi = void 0;
                var n = !1;
                t.oi = function() {
                    return n
                }, t.Nf = function(e) {
                    e && e.obsolete && (n = !0)
                }
            },
            61989: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };

                function o(e) {
                    "SyntaxError" === e.error.name && e.preventDefault()
                }
                t.B = void 0, t.B = function(e, t, i) {
                    return "{" === e.charAt(0) && "}" === e.slice(-1).charAt(0) ? function(e) {
                        try {
                            var t = n.lv["json"].parse(e);
                            return r(r({}, (0, n(34289).G)()), t)
                        } catch (e) {
                            var o = new Error("Invalid JSON (".concat(e.message, ")"));
                            throw o.name = "NativeJSONParse_".concat(e.name), o
                        }
                    }(e) : function(e, t, i) {
                        var a = (0, n(34289).G)();
                        try {
                            return (0, n(66333).C)(window) || (0, n(17817).i)() || (0, n(7937).U)(window) ? function(e, t, i, a) {
                                var s = n(85225).noop;
                                try {
                                    var c = /Ya\[\d+]\('(.+)'\)$/.exec(t),
                                        u = c && c[1] || t,
                                        d = document.createElement("script");
                                    d.type = "text/javascript", d.text = "Ya[".concat(i, "] = function() { return ").concat(u, " }"), d.async = !1, a && d.setAttribute("nonce", a || "");
                                    var l = (0, n(41110).on)(window, "error", o, {
                                        options: !0
                                    });
                                    l && (s = l.un), (0, n(50775).getHead)(window).appendChild(d), e = r(r({}, e), Ya[i]())
                                } finally {
                                    delete Ya[i], s()
                                }
                                return e
                            }(a, e, t, i) : function(e, t, o) {
                                var i = (0, n(34289).G)();
                                try {
                                    Ya[o] = function(e) {
                                        delete Ya[o];
                                        var t = new Function("return " + e)();
                                        i = r(r({}, i), t)
                                    };
                                    var a = new Function("return " + t)();
                                    return a && (delete Ya[o], i = r(r({}, i), a)), i
                                } finally {
                                    delete Ya[o]
                                }
                            }(0, e, t)
                        } catch (e) {
                            delete Ya[t];
                            var s = new Error("Invalid JSONP (".concat(e.message, ")"));
                            throw s.name = "JSONPParse_".concat(e.name), s
                        }
                    }(e, t, i)
                }
            },
            18886: (e, t, n) => {
                "use strict";
                t.l = void 0;
                t.l = function(e) {
                    new(n(25379).J)(e).load()
                }
            },
            86188: (e, t, n) => {
                "use strict";
                t.w = void 0;
                var r, o, i = n(71674);
                t.w = function() {
                    return o || (o = new Promise((function(e, t) {
                        i((function(t) {
                            var o = t.AdvManager;
                            r = new o, (0, n(28722).brakeFor)(n(28722).POINT_NAME.ADV_MANAGER_INIT), e(r)
                        }), t)
                    })))["catch"]((function(e) {
                        n(49874).logger.error(e, "adv_manager_load_error")
                    })), o
                }
            },
            91491: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.u = void 0;
                t.u = function(e, t, o, i) {
                    var a = o.renderData ? void 0 : o.pageId,
                        s = {
                            gdpr: o.gdpr,
                            "tcf-consent": o["tcf-consent"],
                            "gdpr-consent-flag": o["gdpr-consent-flag"]
                        };

                    function c(c) {
                        var u = r(r(r(r(r(r({}, t), void 0), s), function(e) {
                                return (0, n(41486).isString)(e) ? (0, n(28377).parseQueryString)(decodeURIComponent(e)) : e
                            }(o.extParams || "")), (0, n(3776).q)(o)), {
                                "grab-orig-len": c.length,
                                grab: c
                            }),
                            d = r(r({}, o.headers), void 0);
                        i(new(n(98026).Url)({
                            host: e,
                            path: a,
                            params: u
                        }), d)
                    }
                    "exp" === (0, n(88772).useExperimentFlag)("PCODE_CONSENT") ? (0, n(55386).U)().then((function(e) {
                        s = r(r({}, s), e), n(1324)(2048, o.grab, c, {
                            pageId: o.pageId,
                            isDisableGrab: Boolean(o.renderData)
                        })
                    })): n(1324)(2048, o.grab, c, {
                        pageId: o.pageId,
                        isDisableGrab: Boolean(o.renderData)
                    })
                }
            },
            48568: (e, t, n) => {
                "use strict";
                t.K = void 0;
                t.K = function(e) {
                    var t = {
                        "target-ref": (n(73266).isAMP ? (0, n(47175).L)() : (0, n(88521).getTargetRef)()).substr(0, 512),
                        "page-ref": (0, n(88521).getPageRef)().substr(0, 512),
                        charset: "utf-8"
                    };
                    (0, n(10439).t)(t, {
                        disableSsr: (0, n(65661).o)(e.layoutConfig),
                        useSsr: n(73266).isAMP || e.useSsr
                    });
                    var r = (0, n(67028).getCookie)(document, "_ym_uid");
                    r && (t.duid = (0, n(21625).encode)(r));
                    var o = (0, n(79358).i)();
                    return o && (t.shyid = o), e.experimentId && (t["experiment-id"] = String(e.experimentId)), e.blockImpId && (t["imp-id"] = e.blockImpId), e.lang && (t.lang = e.lang), e.refresh && (t.refresh = "1"), e.geo && (t["partner-geo-lat"] = e.geo.lat, t["partner-geo-long"] = e.geo["long"]), e.partnerStatId && (t["partner-stat-id"] = String(e.partnerStatId)), e.disableHighlight || (t["enable-flat-highlight"] = "1"), e.aimBanner && (t["aim-banner-id"] = e.aimBanner), e.aimDesign && (t["aim-design-id"] = e.aimDesign), e.aimSubDesign && (t["aim-subdesign-id"] = e.aimSubDesign), e.aimDesignName && (t["aim-design-name"] = e.aimDesignName), e.disabledProductTypes && (t["disabled-product-types"] = e.disabledProductTypes), e.enablePageOptions && (t["enable-page-options"] = e.enablePageOptions), t["comboblock-unencoded-vast"] = "1", e.testtag && (t["test-tag"] = e.testtag), e.siteTheme && (0, n(41486).isString)(e.siteTheme) && (t["site-theme"] = e.siteTheme), e.isNewDesktopMorda && (t["is-new-desktop-morda"] = String(e.isNewDesktopMorda)), e.isNewWebNtp && (t["is-new-web-ntp"] = String(e.isNewWebNtp)), t["ad-session-id"] = (0, n(49131).getSessionId)(), t["target-id"] = String(-257 & (0, n(67729).getRandomInt)(1, 1e8)), t["tga-with-creatives"] = "1", n(42288).iR && (t["keep-csr-data"] = "1"), t["top-ancestor"] = n(22027).KQ, t["top-ancestor-undetermined"] = n(22027).BM ? "0" : "1", "exp" === (0, n(88772).useExperimentFlag)("USE_SMALL_VIDEO_REQUIREMENTS_FLAG") && (t["use-small-video-requirements"] = "1"), t
                }
            },
            65661: (e, t, n) => {
                "use strict";
                t.o = void 0;
                t.o = function(e, t) {
                    var r = {};
                    try {
                        r = n.lv["json"].parse((null == e ? void 0 : e.toString()) || "{}")
                    } catch (e) {}
                    return (0, n(8595).Y)(r, t)
                }
            },
            3776: (e, t) => {
                "use strict";
                t.q = void 0;
                var n = 0;
                t.q = function(e) {
                    if (e.layoutConfig) {
                        e.layoutConfig.set("req_no", n++), window.layoutConfig = e.layoutConfig;
                        var t = e.layoutConfig.toString();
                        if (t) return {
                            "layout-config": t
                        }
                    }
                    return {}
                }
            },
            79358: (e, t, n) => {
                "use strict";
                t.i = void 0, t.i = function(e) {
                    var t;
                    void 0 === e && (e = window);
                    var r = null === (t = e.yandex) || void 0 === t ? void 0 : t.getSiteUid;
                    if ((0, n(26413).isFunction)(r)) return String(r())
                }
            },
            67989: (e, t, n) => {
                "use strict";
                t.u = void 0, t.u = function(e, t) {
                    var r = (0, n(48568).K)(e);
                    ! function(e, t) {
                        e["pcode-version"] = (0, n(30107).getCodeVersion)().toString(), e.pcodever = (0, n(30107).getCodeVersion)().toString(), e["flash-ver"] = "0", t.skipToken && (e["skip-token"] = t.skipToken);
                        t.statId && (e["stat-id"] = t.statId);
                        t.cacheId && !t.refresh && (e["cache-id"] = t.cacheId);
                        "D" !== t.product && "Direct" !== t.product || t.blockImpId && (e["partner-stat-id"] = t.blockImpId)
                    }(r, e);
                    var o = function(e) {
                            var r, o, i;
                            (0, n(40817).Nb)(null === (r = null == e ? void 0 : e.common) || void 0 === r ? void 0 : r.isYandex, Boolean(null === (o = null == e ? void 0 : e.common) || void 0 === o ? void 0 : o.sticky)), (0, n(66445).Q)((null === (i = null == e ? void 0 : e.common) || void 0 === i ? void 0 : i.pcodever) || ""), t(e)
                        },
                        i = e.renderData ? n(49573).URLS.render : n(49573).URLS.rtb;
                    (0, n(91491).u)(i, r, e, (function(t, r) {
                        t.appendParams({
                            uniformat: !0
                        }), (0, n(18886).l)({
                            url: t,
                            headers: r,
                            uniqueId: e.uniqueId,
                            impId: e.blockImpId,
                            pageId: e.pageId,
                            isRefresh: e.refresh,
                            callback: o,
                            nonce: e.nonce,
                            renderData: e.renderData
                        })
                    }))
                }
            },
            66445: (e, t, n) => {
                "use strict";
                t.Q = void 0, t.Q = function(e) {
                    "" !== e && (0, n(40817).nH)("Ad version: ".concat(e), "ad-v-".concat(e))
                }
            },
            94390: (e, t, n) => {
                "use strict";
                t.I = void 0;
                var r = (0, n(60304).M)("__pcodeStorage__"),
                    o = function() {
                        function e() {
                            var e = "masterStorage";
                            this.queue = r.getItem(e), this.queue || (this.queue = new(n(39658).c), r.setItem(e, this.queue))
                        }
                        return e.prototype.add = function(e) {
                            this.queue.add(e)
                        }, e.prototype.size = function() {
                            return this.queue.size()
                        }, e
                    }();
                t.I = o
            },
            2540: (e, t, n) => {
                "use strict";
                t.w = void 0;
                var r, o = n(73266).isAMP ? new(n(94390).I) : new(n(34790).q);
                t.w = function(e) {
                    return "pcode" === e.project || e.sequentialLoading && !n(73266).isAMP ? o : (r || (r = new(n(34790).q)(20)), r)
                }
            },
            60091: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.b = void 0;
                var o = function() {
                    function e() {
                        this.dataRequestTime = void 0
                    }
                    return e.prototype.setConfig = function(e) {
                        if (this.config = (0, n(21849).prepareRtbConfig)(e), this.reloadTimeout = this.reloadTimeout || n(49573).DEFAULT_RELOAD_TIMEOUT, n(49874).logger.configure({
                            labels: {
                                pageId: (0, n(36087).getServiceName)()
                            },
                            data: {
                                blockId: e.blockId,
                                pageId: e.pageId
                            }
                        }), this.config.data) return this.config.data.common && this.config.data.common.reloadTimeout && (this.reloadTimeout = Number(this.config.data.common.reloadTimeout)), (0, n(64809).saveBundleType)(e.data, e.bundle), void(this.data = this.config.data)
                    }, e.prototype.loadData = function(t) {
                        var o, s, c, u = this,
                            d = (0, n(74472).getPlacement)(this.config.uniqueId);
                        if (this.config.data) {
                            (null === (o = this.config) || void 0 === o ? void 0 : o.layoutConfig) && (null == d || d.setLayoutConfig(this.config.layoutConfig));
                            var l = Number(null === (c = null === (s = this.config.data) || void 0 === s ? void 0 : s.direct) || void 0 === c ? void 0 : c.render_direct_sleep);
                            return l && isFinite(l) ? (this.config.containsData = !1, void setTimeout((function() {
                                u.config.containsData = !0, t(u.config)
                            }), l)) : (this.config.containsData = !0, void t(this.config))
                        }
                        if (this.config.containsData = !1, this.canReloadData() || this.config.refresh)
                            if (this.setDataRequestTime(), d) {
                                var f = null == d ? void 0 : d.renderTo,
                                    p = (0, n(64809).checkBundleIsSSP)(),
                                    h = (0, n(64809).checkBundleIsMobilSdk)(),
                                    v = null == d ? void 0 : d.renderToDomNode,
                                    g = (0, n(85384).isCustomBannerTypeAndExp)(this.config.type) ? (0, n(22230).go)({
                                        containerId: f,
                                        containerNode: v
                                    }) : (0, n(22230).Op)(f),
                                    _ = g.width,
                                    m = g.height,
                                    y = {
                                        product: d.blockId.product,
                                        uniqueId: this.config.uniqueId,
                                        testtag: i(d),
                                        pageId: encodeURIComponent(this.config.pageId),
                                        blockImpId: encodeURIComponent(this.config.blockImpId || ""),
                                        grab: this.config.grab,
                                        extParams: this.config.extParams,
                                        availableWidth: _,
                                        availableHeight: m,
                                        lang: this.config.lang,
                                        geo: this.config.geo,
                                        disableHighlight: this.config.disableHighlight,
                                        aimBanner: n(30878).f2.next(),
                                        aimDesign: n(30878).pv.next(),
                                        aimSubDesign: n(30878).Ng.next(),
                                        aimDesignName: n(30878).cF.next(),
                                        disabledProductTypes: n(30878).vT.next(),
                                        enablePageOptions: n(30878).Ww.next(),
                                        partnerStatId: this.config.partnerStatId,
                                        refresh: Boolean(this.config.refresh),
                                        nonce: this.config.cspNonce,
                                        cacheId: this.config.cacheId,
                                        useSsr: Boolean(this.config.useSsr || this.config.renderServerSide),
                                        siteTheme: encodeURIComponent(this.config.siteTheme || ""),
                                        headers: (0, n(48674).l)(this.config.headers),
                                        renderData: this.config.renderData,
                                        isNewDesktopMorda: Boolean(this.config.isNewDesktopMorda),
                                        isNewWebNtp: Boolean(this.config.isNewWebNtp),
                                        gdpr: this.config.gdpr,
                                        "tcf-consent": this.config["tcf-consent"],
                                        "gdpr-consent-flag": this.config["gdpr-consent-flag"]
                                    },
                                    b = function(e, o) {
                                        (0, n(85914).setMark)(u.config.uniqueId, n(85914).RenderMarks.ReadyToRequest);
                                        var i = d.getRenderToElement();
                                        if (!i) return a(f, d), void e();
                                        var s = u.getSkipToken(d);
                                        s && (y.skipToken = s);
                                        var c = o || new(n(31231).K)(i),
                                            l = (0, n(91411).getAdUsageStorage)(u.config);
                                        c.set("ad_no", l.getCapturedCount()), c.set("darkTheme", u.config.darkTheme), null == d || d.setLayoutConfig(c), y.layoutConfig = c, n(42288).h2 && (0, n(59936).c)((function(e) {
                                            return (new e).logBlockSize(u.config.blockId, u.config.renderTo, y.layoutConfig)
                                        })), (0, n(67989).u)(r({}, y), (function(n) {
                                            return u.parseServerDataFunction(n, (function(n) {
                                                t(n, e)
                                            }))
                                        }))
                                    },
                                    E = d.getRenderToElement();
                                if (E) {
                                    if (p) {
                                        var w = new(n(31231).K)(E);
                                        b(n(85225).noop, w)
                                    } else if (e.queue instanceof n(34790).q) {
                                        var O = !p && !h && (0, n(38680).L)() && (0, n(88772).useExperimentFlag)("LAZY_LOAD_PCODE");
                                        !1 !== this.config.lazyLoad && O && (this.config = r(r({}, this.config), {
                                            lazyLoad: r(r({}, O), this.config.lazyLoad)
                                        }));
                                        var S = e.queue;
                                        "floorAd" === this.config.type || "topAd" === this.config.type ? (0, n(53684).S)({
                                            isRefresh: Boolean(this.config.refresh),
                                            callback: function() {
                                                return S.add(b)
                                            }
                                        }) : "fullscreen" === this.config.type ? S.add(b) : this.config.lazyLoad ? ((0, n(85914).setMark)(this.config.uniqueId, n(85914).RenderMarks.StartLazyLoadObserver), S.addByLazyLoad(E, b, r(r({}, this.config.lazyLoad), {
                                            placement: d
                                        }))) : S.addByDimensionObserver(E, b, {
                                            onStartDimensionObserver: this.config.onRender,
                                            placement: d
                                        })
                                    } else e.queue.add(b);
                                    var I = e.queue.size();
                                    null == d || d.setAdditional({
                                        posInQueue: I
                                    })
                                } else a(f, d)
                            } else n(49874).logger.error("DATA_LOADER_NO_PLACEMENT");
                        else this.data && t(r(r({}, this.config), {
                            data: this.data
                        }))
                    }, e.prototype.parseServerDataFunction = function(e, t) {
                        e.common && e.common.reloadTimeout && (this.reloadTimeout = Number(e.common.reloadTimeout)), (0, n(64809).saveBundleType)(e, this.config.bundle), this.data = e, t(r(r({}, this.config), {
                            data: this.data
                        }))
                    }, e.prototype.setDataRequestTime = function() {
                        this.dataRequestTime = Number(new Date)
                    }, e.prototype.canReloadData = function() {
                        return !this.dataRequestTime || Number(new Date) - this.dataRequestTime > 1e3 * this.reloadTimeout
                    }, e.prototype.getSkipToken = function(e) {
                        var t, n, r, o;
                        if (!(null == e ? void 0 : e.skipTokenSettings.disable)) {
                            var i = null === (o = null === (r = null === (n = null === (t = window.Ya) || void 0 === t ? void 0 : t.Context) || void 0 === n ? void 0 : n.AdvManager) || void 0 === r ? void 0 : r.getSkipToken) || void 0 === o ? void 0 : o.call(r, this.config);
                            return i || void 0
                        }
                    }, e.queue = (0, n(2540).w)({
                        project: "pcode"
                    }), e
                }();

                function i(e) {
                    var t = e.blockId.product;
                    return ("D" === t ? new(n(62236).T) : "N" === t ? new(n(96054).Testtag) : new(n(98496).a)).toString()
                }

                function a(e, t) {
                    var r = 'Container with id "'.concat(e, '" is not found (load queue)');
                    null == t || t.callbacks.triggerError("CONTAINER_NOT_FOUND", r), n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {
                        text: r
                    })
                }
                t.b = o
            },
            8960: (e, t, n) => {
                "use strict";
                t.C = void 0;
                var r = 0,
                    o = function() {
                        return 1
                    },
                    i = function() {
                        function e(e) {
                            void 0 === e && (e = 1), this.queue = [], this.runningTasks = [], this.threads = e
                        }
                        return e.prototype.add = function(e, t) {
                            var n = this;
                            void 0 === t && (t = {});
                            var i = r++,
                                a = t.timeout,
                                s = t.priority,
                                c = void 0 === s ? o : s,
                                u = t.async,
                                d = void 0 !== u && u,
                                l = {
                                    id: i,
                                    taskFn: e,
                                    timeout: a,
                                    priority: c
                                };
                            return this.queue.push(l), d ? setTimeout((function() {
                                return n.next()
                            }), 0) : this.next(),
                                function() {
                                    n.remove(i)
                                }
                        }, e.prototype.remove = function(e) {
                            this.queue = this.queue.filter((function(t) {
                                return t.id !== e
                            })), this.doneTask(e)
                        }, e.prototype.size = function() {
                            return this.queue.length
                        }, e.prototype.countRunningTasks = function() {
                            return this.runningTasks.length
                        }, e.prototype.next = function() {
                            if (this.queue.length > 0 && this.runningTasks.length < this.threads) {
                                var e = this.getNextTask();
                                e && this.runTask(e)
                            }
                        }, e.prototype.getNextTask = function() {
                            return this.queue.sort((function(e, t) {
                                return t.priority() - e.priority()
                            })), this.queue.shift()
                        }, e.prototype.runTask = function(e) {
                            var t = this,
                                r = e.taskFn,
                                o = e.id,
                                i = e.timeout,
                                a = void 0 === i ? 5e3 : i,
                                s = null,
                                c = function() {
                                    null !== s && clearTimeout(s), t.doneTask(o)
                                };
                            this.runningTasks.push(o), s = window.setTimeout(c, a), (0, n(12251).protect)("SimpleQueue", (function() {
                                return r(c)
                            }), void 0, c)()
                        }, e.prototype.doneTask = function(e) {
                            var t = this.runningTasks.indexOf(e);
                            t > -1 && (this.runningTasks.splice(t, 1), this.next())
                        }, e
                    }();
                t.C = i
            },
            38680: (e, t, n) => {
                "use strict";
                t.L = void 0;
                var r = (0, n(88772).useExperimentFlag)("SMART_QUEUE_EXP_BLACK_LIST"),
                    o = (0, n(88772).useExperimentFlag)("SMART_QUEUE_EXP_WHITE_LIST");
                t.L = (0, n(94532).once)((function() {
                    if ((0, n(13058).isInIframe)(window)) return !1;
                    if (null == r ? void 0 : r.length) {
                        for (var e = (0, n(97332).l)(window.location), t = 0; t < r.length; t++)
                            if (e.indexOf(r[t]) > -1) return !1
                    } else if (null == o ? void 0 : o.length) {
                        for (e = (0, n(97332).l)(window.location), t = 0; t < o.length; t++)
                            if (e.indexOf(o[t]) > -1) return !0;
                        return !1
                    }
                    return !0
                }))
            },
            8842: (e, t, n) => {
                "use strict";
                t.C = void 0;
                var r = 0;
                t.C = function(e, t, o) {
                    void 0 === o && (o = {});
                    var i, a = "do_id_".concat(r++),
                        s = o.onTimeout,
                        c = o.timeout,
                        u = void 0 === c ? 1e3 : c,
                        d = function() {
                            i && clearTimeout(i), (0, n(13215).x9)(a)
                        };
                    return s && (i = window.setTimeout((function() {
                        return s()
                    }), u)), (0, n(13215).M8)(a, e, (function() {
                        d(), t()
                    })), d
                }
            },
            60794: (e, t, n) => {
                "use strict";
                t.n = void 0, t.n = function(e, t) {
                    void 0 === t && (t = 0);
                    var r = e.getBoundingClientRect(),
                        o = (0, n(52544).getWindowSize)(),
                        i = o.height * t,
                        a = -i,
                        s = o.height + i;
                    return r.bottom < a ? r.bottom - a : r.top > s ? -(r.top - s) : s - r.top
                }
            },
            34790: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.q = void 0;
                var o = function() {
                    function e(e) {
                        void 0 === e && (e = 1), this.queue = new(n(8960).C)(e)
                    }
                    return e.prototype.add = function(e, t) {
                        return this.queue.add(e, {
                            priority: t,
                            async: !1
                        })
                    }, e.prototype.addByLazyLoad = function(e, t, o) {
                        var a = this,
                            s = new(n(50773).M),
                            c = function() {
                                return (0, n(60794).n)(e, 0)
                            },
                            u = function() {
                                var e = a.add((function(e) {
                                    t(e)
                                }), c);
                                s.addOne(e)
                            },
                            d = this.add((function(a) {
                                var c = (0, n(60794).n)(e, 0),
                                    d = new(n(31231).K)(e);
                                if ((0, n(82308).H)(e, d, null == o ? void 0 : o.placement), i(d) && c > 0) t(a, d);
                                else {
                                    var l = (0, n(81465).p)(e, u, r({
                                        fetchMargin: 0,
                                        mobileScaling: 1
                                    }, o));
                                    s.addOne(l), a()
                                }
                            }), c);
                        return s.addOne(d),
                            function() {
                                return s.dispatch(void 0)
                            }
                    }, e.prototype.addByDimensionObserver = function(e, t, r) {
                        var o = this,
                            a = new(n(50773).M),
                            s = function() {
                                return (0, n(60794).n)(e, 0)
                            },
                            c = function() {
                                var e = o.add((function(e) {
                                    t(e)
                                }), s);
                                a.addOne(e)
                            },
                            u = this.add((function(o) {
                                var s = new(n(31231).K)(e);
                                if ((0, n(82308).H)(e, s, null == r ? void 0 : r.placement), i(s)) t(o, s);
                                else {
                                    r && (0, n(26413).isFunction)(r.onStartDimensionObserver) && r.onStartDimensionObserver({
                                        product: "unknown"
                                    });
                                    var u = (0, n(8842).C)(e, c, {
                                        onTimeout: null == r ? void 0 : r.onTimeout,
                                        timeout: null == r ? void 0 : r.timeout
                                    });
                                    a.addOne(u), o()
                                }
                            }), s);
                        return a.addOne(u),
                            function() {
                                return a.dispatch(void 0)
                            }
                    }, e.prototype.size = function() {
                        return this.queue.size()
                    }, e
                }();

                function i(e) {
                    var t = e.get("w"),
                        n = e.get("h");
                    return t > 0 || n > 0
                }
                t.q = o
            },
            82308: (e, t, n) => {
                "use strict";
                t.H = void 0;
                var r = (0, n(14573).Q)(window, ["yandexVideo"]);
                t.H = function(e, t, n) {
                    if (!r) {
                        var o = t.get("w"),
                            i = t.get("h"),
                            a = e.getAttribute("id");
                        if (0 === o && 0 === i) {
                            var s = "CONTAINER_IS_HIDDEN",
                                c = 'Container with id "'.concat(a, '" is hidden');
                            return n || console.info(s, c), void(null == n || n.callbacks.triggerWarning(s, c))
                        }
                        if (o > 0 && o < 320 && i > 0 && i < 50) {
                            c = "Too small container. Width ".concat(o, "px. Height ").concat(i, "px.");
                            null == n || n.callbacks.triggerError("TOO_SMALL_CONTAINER", c)
                        } else if (o < 160) {
                            c = "Too narrow container. Width ".concat(o, "px.");
                            null == n || n.callbacks.triggerError("TOO_SMALL_CONTAINER", c)
                        }
                    }
                }
            },
            22230: (e, t, n) => {
                "use strict";
                t.go = t.Op = void 0, t.Op = (0, n(70008).HP)((function(e) {
                    if (n(73266).isAMP) return (0, n(52544).getWindowSize)();
                    var t = (0, n(59020).R)("#" + e);
                    return t ? (0, n(20697).getElementInnerSize)(t) : {
                        width: 0,
                        height: 0
                    }
                }));
                t.go = function(e) {
                    var t = e.containerId,
                        r = e.containerNode;
                    return (0, n(70008).HP)((function(e) {
                        if (n(73266).isAMP) return (0, n(52544).getWindowSize)();
                        var t = (0, n(59020).R)("#" + e) || r;
                        return t ? (0, n(20697).getElementInnerSize)(t) : {
                            width: 0,
                            height: 0
                        }
                    }))(t)
                }
            },
            13215: (e, t, n) => {
                "use strict";
                t.x9 = t.M8 = void 0;
                var r = {};

                function o(e, t) {
                    var r, o = n(85225).noop,
                        a = function(e) {
                            var i = e.width,
                                a = e.height;
                            (i > 0 || a > 0) && (o(), r = (0, n(96757).requestAnimationFrame)(t))
                        };
                    if ("undefined" != typeof ResizeObserver && (0, n(61438).checkNativeCode)(ResizeObserver)) try {
                        o = function(e, t) {
                            var n = new ResizeObserver((function(e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n].contentRect,
                                        o = r.width,
                                        i = r.height;
                                    t({
                                        width: o,
                                        height: i
                                    })
                                }
                            }));
                            return n.observe(e),
                                function() {
                                    n.unobserve(e)
                                }
                        }(e, a)
                    } catch (t) {
                        o = i(e, a)
                    } else o = i(e, a);
                    return function() {
                        o(), r && (0, n(96757).cancelAnimationFrame)(r)
                    }
                }

                function i(e, t) {
                    var r = e.ownerDocument;
                    if (!r) return n(85225).noop;
                    var o = r.defaultView;
                    if (!o) return n(85225).noop;
                    var i = function() {
                            var r = (0, n(34403).getBoundingClientRect)(e),
                                o = r.width,
                                i = r.height;
                            t({
                                width: o,
                                height: i
                            })
                        },
                        a = (0, n(54825).addEventListener)(o, "resize", i, {
                            passive: !0
                        }),
                        s = (0, n(44989).R)(i);
                    return function() {
                        a(), s()
                    }
                }
                t.M8 = function(e, t, n) {
                    var i = o(t, n);
                    r[e] = {
                        cancel: i
                    }
                }, t.x9 = function(e) {
                    r[e] && (r[e].cancel(), delete r[e])
                }
            },
            60509: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getValidNumber = t.getValidGeo = void 0;
                t.getValidGeo = function(e) {
                    if (e) {
                        var t = {},
                            n = parseFloat(e.lat),
                            r = parseFloat(e["long"]);
                        return isNaN(n) || (t.lat = n.toFixed(6)), isNaN(r) || (t["long"] = r.toFixed(6)), t
                    }
                }, t.getValidNumber = function(e) {
                    var t = parseInt(e, 10);
                    if (!(isNaN(t) || !isFinite(t))) return t
                }
            },
            38710: (e, t, n) => {
                "use strict";

                function r() {
                    return window.Ya || (window.Ya = (0, t.initYa)())
                }

                function o() {
                    var e = r();
                    return e.Context || (e.Context = (0, t.initYaContext)())
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initYa = t.initYaDirect = t.initYaContext = t.getYaContext = t.getYa = t.getGlobalVariable = t.setGlobalVariable = void 0, t.setGlobalVariable = function(e, t) {
                    o()[e] = t
                }, t.getGlobalVariable = function(e) {
                    return o()[e]
                }, t.getYa = r, t.getYaContext = o;

                function i() {
                    return {}
                }
                t.initYaContext = function() {
                    return {
                        isAllowedRepeatAds: n(28458).T,
                        _load_callbacks: [],
                        _callbacks: [],
                        _asyncIdCounter: 0,
                        LOG_DIRECT: (0, n(14415).isPercent)(1),
                        _activeTestIds: []
                    }
                }, t.initYaDirect = i;
                t.initYa = function() {
                    return {
                        Direct: {},
                        Context: (0, t.initYaContext)()
                    }
                }
            },
            7654: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Deferred = void 0;
                var n = function() {
                    var e = this;
                    this.promise = new Promise((function(t, n) {
                        e.resolve = t, e.reject = n
                    }))
                };
                t.Deferred = n
            },
            92738: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addDelimiter = void 0, t.addDelimiter = function(e, t, n) {
                    return t && 0 !== e.indexOf(t) && (e = t + e), n && e.slice(-n.length) !== n && (e += n), e
                }
            },
            98026: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Url = void 0;
                var r = function() {
                    function e(e) {
                        this.host = e.host || "", this.path = e.path || "", this.params = "", e.params && this.appendParams(e.params)
                    }
                    return e.prototype.clone = function() {
                        return new e({
                            host: this.host,
                            path: this.path,
                            params: this.params
                        })
                    }, e.prototype.getCurrentLength = function() {
                        return this.getRawUrl().length
                    }, e.prototype.appendParams = function(e) {
                        return (0, n(7153).isObject)(e) && (0, n(36484).x)(e) || ("" !== this.params && (this.params = (0, n(92738).addDelimiter)(this.params, "", "&")), (0, n(41486).isString)(e) ? this.params += (0, n(44552).removeDelimiter)((0, n(44552).removeDelimiter)(e, "?", ""), "&", "") : (0, n(7153).isObject)(e) && (this.params += (0, n(49221).toQueryParams)(e))), this
                    }, e.prototype.getUrl = function() {
                        return this.getRawUrl()
                    }, e.prototype.getRawUrl = function() {
                        var e = this.host;
                        if (this.path && (e = (0, n(92738).addDelimiter)(e, "", "/"), e += (0, n(44552).removeDelimiter)(String(this.path), "/")), "" !== this.params) {
                            var t = -1 === e.indexOf("?") ? "?" : "&";
                            e += (0, n(92738).addDelimiter)(this.params, t, "")
                        }
                        return e
                    }, e
                }();
                t.Url = r
            },
            44552: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeDelimiter = void 0, t.removeDelimiter = function(e, t, n) {
                    return t && 0 === e.indexOf(t) && (e = e.replace(t, "")), n && e.slice(-n.length) === n && (e = e.slice(0, -n.length)), e
                }
            },
            49221: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toQueryParams = void 0, t.toQueryParams = function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && "" !== e[n] && void 0 !== e[n] && null !== e[n] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                }
            },
            74351: (e, t, n) => {
                "use strict";
                t.V = void 0, t.V = function(e) {
                    var t = e.platform,
                        r = e.window;
                    return !(!(0, n(64809).checkBundleIsSSP)() && !(0, n(14573).Q)(r, ["pi", "piPreview", "piHermione"])) || ((0, n(63607).isMobile)() ? !t || "touch" === t : "desktop" === t)
                }
            },
            92870: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = e.window,
                        r = e.platform;
                    return !!(0, n(14573).Q)(t, ["pi", "piPreview", "piHermione", "yandexDirect"]) || !!(0, n(63607).isMobile)() && (!r || "touch" === r)
                }

                function o(e) {
                    var t = e.window,
                        r = e.platform;
                    return !!(0, n(14573).Q)(t, ["pi", "piPreview", "piHermione", "yandexDirect"]) || ((0, n(63607).isMobile)() ? !r || "touch" === r : "desktop" === r)
                }
                t.Qg = t.dz = t.ti = void 0, t.ti = function(e) {
                    return r(e) || o(e)
                }, t.dz = r, t.Qg = o
            },
            81721: (e, t) => {
                "use strict";
                t.V = void 0, t.V = function(e) {
                    for (var t = [/(^|.*\.)ya\.[a-z]+$/gi, /(^|.*\.)ya\.com?\.\w{2,3}$/gi, /(^|.*\.)yandex\.[a-z]+$/gi, /(^|.*\.)yandex\.com?\.\w{2,3}$/gi, /(^|.*\.)turbopages.org$/gi, /(^|.*\.)edadeal\.[a-z]+$/gi, /(^|.*\.)a[uv]to\.[a-z]+$/gi, /(^|.*\.)dzen\.ru$/gi], n = 0; n < t.length; n++)
                        if (t[n].test(e)) return !0;
                    return !1
                }
            },
            68954: (e, t) => {
                "use strict";
                t.PY = t.vq = void 0, t.vq = ["159294", "419036"], t.PY = function(e) {
                    return !!e && t.vq.indexOf(e) >= 0
                }
            },
            84162: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.canUseGrab = void 0, t.canUseGrab = function(e, t) {
                    return !(0, n(14573).Q)(e, ["mailRuAll"]) && !(0, n(68954).PY)(t)
                }
            },
            90055: (e, t) => {
                "use strict";
                t.w = void 0, t.w = function(e) {
                    for (var t = [/(^|.*\.)ya\.[a-z]+$/gi, /(^|.*\.)ya\.com?\.\w{2,3}$/gi, /(^|.*\.)yandex\.[a-z]+$/gi, /(^|.*\.)yandex\.com?\.\w{2,3}$/gi], n = 0; n < t.length; n++)
                        if (t[n].test(e)) return !0;
                    return !1
                }
            },
            39699: (e, t) => {
                "use strict";
                t.N = void 0;
                t.N = function(e, t) {
                    void 0 === t && (t = {});
                    var n = t.allowLowerLevelDomains,
                        r = void 0 === n || n,
                        o = t.eol,
                        i = void 0 !== o && o,
                        a = ["(?:\\/|%2F|^)"];
                    return r && a.push("(?:[\\w-_\\.]+?\\.)?"), a.push("(?:".concat(e, ")")), a.push("(?:\\/|%2F|$)"), i && a.push("$"), new RegExp(a.join(""), "i")
                }
            },
            53002: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.info = t.net = t.com = t.rf = t.ru = t.piHermione = t.piPreview = t.pi = t.avitoMobile = t.avito = t.gismeteo = t.wifi = t.authwifi = t.mailRuAll = t.mailRu = t.wowSale = t.cyberSport = t.ok = t.vk = t.yandexDirect = t.yandexMorda = t.yandexChromeNtp = t.yandexWebntp = t.yandexRasp = t.yandexMail = t.yandexZen = t.yandexImages = t.yandexVideo = t.yandexMaps = t.yandexPogoda = t.yandexNews = t.yandexTv = void 0, t.yandexTv = (0, n(39699).N)("(?:tv\\.yandex(\\.\\w+))"), t.yandexNews = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/news)"), t.yandexPogoda = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/pogoda)"), t.yandexMaps = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/maps)"), t.yandexVideo = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/video)"), t.yandexImages = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/images)"), t.yandexZen = (0, n(39699).N)("(?:zen\\.yandex(\\.\\w+))"), t.yandexMail = (0, n(39699).N)("(?:mail\\.yandex(\\.\\w+))"), t.yandexRasp = (0, n(39699).N)("(?:rasp\\.yandex(\\.\\w+))"), t.yandexWebntp = (0, n(39699).N)("(?:webntp\\.yandex(\\.\\w))"), t.yandexChromeNtp = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/chrome\\/newtab)"), t.yandexMorda = (0, n(39699).N)("(?:yandex(\\.\\w+))", {
                    allowLowerLevelDomains: !1,
                    eol: !0
                }), t.yandexDirect = (0, n(39699).N)("(?:direct\\.yandex(\\.\\w+))"), t.vk = (0, n(39699).N)("vk\\.com"), t.ok = (0, n(39699).N)("ok\\.ru");
                var r = (0, n(39699).N)("sportmail\\.ru");
                t.cyberSport = (0, n(39699).N)("cybersport\\.(ru|com)"), t.wowSale = (0, n(39699).N)("wowsale\\.ru"), t.mailRu = (0, n(39699).N)("(?:(?:devmail\\.ru)|(?:mail\\.ru))"), t.mailRuAll = [t.vk, t.ok, r, t.mailRu, t.wowSale, t.cyberSport], t.authwifi = (0, n(39699).N)("(?:\\w+-)?auth\\.wi-fi\\.ru");
                var o = (0, n(39699).N)("wi-fi\\.ru");
                t.wifi = [].concat(t.authwifi, o), t.gismeteo = (0, n(39699).N)("gismeteo\\.ru"), t.avito = (0, n(39699).N)("^(([^m]|\\w\\w+)(\\.avito)|avito)\\.(dev|ru)"), t.avitoMobile = (0, n(39699).N)("m\\.avito\\.(dev|ru)"), t.pi = (0, n(39699).N)("(dev-)?partner(s|2)?(-(creator01(e|f)|preprod|test|local))?(\\.crowdtest)?\\.yandex\\.(com(\\.tr)?|ru|by|kz|ua)"), t.piPreview = (0, n(39699).N)("preview\\.adfox\\.net*"), t.piHermione = (0, n(39699).N)("\\w+\\.ldev\\.yandex\\.ru"), t.ru = (0, n(39699).N)(".*\\.ru"), t.rf = (0, n(39699).N)(".*\\.xn--p1ai"), t.com = (0, n(39699).N)(".*\\.com"), t.net = (0, n(39699).N)(".*\\.net"), t.info = (0, n(39699).N)(".*\\.info")
            },
            14573: (e, t, n) => {
                "use strict";
                var r = Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    },
                    o = Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e["default"] = t
                    },
                    i = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                        return o(t, e), t
                    };
                t.Q = void 0;
                var a = i(n(53002));
                t.Q = function(e, t) {
                    void 0 === e && (e = window);
                    var r = (0, n(88521).getHostWithPath)(e);
                    if ((0, n(29935).isTurboPage)(e) || n(73266).isAMP) return !1;
                    for (var o = [], i = 0; i < t.length; i++) {
                        var s = t[i],
                            c = a[s];
                        o = o.concat(c)
                    }
                    for (var u = 0; u < o.length; u++)
                        if (o[u].test(r)) return !0;
                    return !1
                }
            },
            55386: (e, t) => {
                "use strict";
                t.U = void 0;
                var n = window;
                t.U = function() {
                    var e = {};
                    return new Promise((function(t) {
                        "function" == typeof n.__tcfapi ? (n.__tcfapi("getTCData", 2, (function(n, r) {
                            r && (e.gdpr = n.gdprApplies ? "1" : "0", e["tcf-consent"] = n.tcString), t(e)
                        })), setTimeout((function() {
                            t(e)
                        }), 3e3)) : t(e)
                    }))
                }
            },
            22432: (e, t) => {
                "use strict";
                t.F = void 0, t.F = function(e, t) {
                    return t.getElementsByClassName(e)
                }
            },
            5989: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getElementById = void 0;
                t.getElementById = function(e, t) {
                    if (t) try {
                        var r = n(e, t);
                        if (r) return r
                    } catch (e) {}
                    return document.getElementById(e)
                };
                var n = function(e, t) {
                    var n = "#".concat(e);
                    return t.querySelector(n)
                }
            },
            20816: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadImage = void 0, t.loadImage = function(e) {
                    if (!e.src) return n(49874).logger.warn(new Error("Empty image src"), "loadImage"), void(e.onError && (0, n(12251).protect)("handler:error", e.onError, e.ctx)());
                    var t = new Image;
                    (0, n(26413).isFunction)(e.onLoad) && (0, n(41110).on)(t, "load", (0, n(94532).once)((function() {
                        return e.onLoad(t)
                    })), e.ctx), (0, n(26413).isFunction)(e.onError) && (0, n(41110).on)(t, "error", (0, n(94532).once)(e.onError), e.ctx), t.src = e.src
                }
            },
            59020: (e, t, n) => {
                "use strict";
                t.R = void 0;
                t.R = function(e, t) {
                    if (void 0 === t && (t = document), !(0, n(41486).isString)(e)) return e;
                    var r = e.slice(0, 1),
                        o = e.slice(1);
                    switch (r) {
                        case "#":
                            return (0, n(5989).getElementById)(o);
                        case ".":
                            return (0, n(66779).listToArray)((0, n(22432).F)(o, t));
                        default:
                            return (0, n(66779).listToArray)((t || document).getElementsByTagName(e))
                    }
                }
            },
            58233: (e, t) => {
                "use strict";
                var n = function() {
                    return n = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, n.apply(this, arguments)
                };
                t.sH = t.FH = void 0;
                var r = {
                        INVALID_BLOCK_ID: 1,
                        UNKNOWN_BLOCK_TYPE: 1,
                        CONTAINER_NOT_FOUND: 1
                    },
                    o = {
                        FEED_CONTAINER_IS_NARROW: 1,
                        FEED_CONTAINER_NOT_AT_THE_BOTTOM: 1
                    };
                t.FH = {
                    BLOCK_NOT_FOUND: 1,
                    PAGE_NOT_FOUND: 100,
                    PAGE_DISABLED: 1,
                    WRONG_DOMAIN: 1
                };
                var i = {
                    NO_FOUND_ROOT_CONTAINER: 1,
                    INIT_WITHOUT_DATASOURCE: 1,
                    SET_STATS_ROOT_FIELDS_ERROR: 1,
                    VIDEO_IN_COMBO_CLIENT_CODE_INIT_ERROR: 1,
                    VIDEO_IN_COMBO_FLOOR_AD_ERROR: 1
                };
                t.sH = n(n(n(n(n(n(n(n(n(n(n({}, {
                    AD_LOADER_SUCCESS: .1,
                    AD_LOADER_XHR_ERROR: 1,
                    AD_LOADER_EMPTY_ANSWER: 1,
                    AD_LOADER_TOO_SHORT_ANSWER: 1,
                    AD_LOADER_NO_ADS_TO_RENDER: 1,
                    AD_LOADER_BAD_ANSWER: 100,
                    AD_LOADER_TOO_MANY_ATTEMPTS: 100
                }), {
                    ADFOX_LOAD_SUCCESS: .1,
                    ADFOX_LOAD_XHR_ERROR: 1,
                    ADFOX_LOAD_JSONP_ERROR: 1,
                    ADFOX_UNKNOWN_ERROR: 1,
                    ADFOX_LOG_ERROR: 1,
                    ADFOX_LOG_EVENT: .1,
                    ADFOX_ADX_STUB: 1,
                    ADFOX_HB_TIMEOUT: .1,
                    ADFOX_PB_TIMEOUT: .1,
                    ADFOX_MATHID_SUCCESS: .1
                }), {
                    HB_CALLED: .1,
                    HB_ADAPTER_SEND: .01,
                    HB_RENDERED: .1,
                    HB_CONFIGURATION_ERROR: 1,
                    HB_FETCH_BIDS_REQUEST_ERROR: 1,
                    HB_FETCH_BIDS_REQUEST_TIMEOUT: 1,
                    HB_ADAPTER_REQUEST_TIMEOUT: .1,
                    HB_ADAPTER_REQUEST_ERROR: .1,
                    HB_ADAPTER_PARSE_ERROR: 1,
                    HB_PB_REQUEST_BIDS: .01,
                    HB_PB_REQUEST_BIDS_FAILED: .1,
                    HB_PB_REQUEST_BIDS_TIMEOUT: .1
                }), {
                    MEDIA_SEND_COMPLETE_MESSAGE_FAILED: .1
                }), {
                    WIDGET_PRELOAD_FAILED: .1,
                    WIDGET_INVALID_ID: .1,
                    WIDGET_INVALID_RENDER_FIELD: .1,
                    WIDGET_LOAD_META_FAILED: .1,
                    WIDGET_LOAD_SETTINGS_FAILED: .1,
                    WIDGET_LOAD_BUNDLE: .1,
                    WIDGET_DEFINE_PRODUCT_VARIABLE: .1,
                    WIDGET_MEDIA_ERROR: .1
                }), r), t.FH), {}), i), {
                    CLOSABLE_AD_CHUNK_LOAD_FAILED: 1,
                    UNCAUGHT_SSP: 10,
                    UNCAUGHT_SDK: 10,
                    DESKTOP_FULLSCREEN: 1,
                    RESPONSE_MISMATCH_BANNER_CFG: 1,
                    IMAGE_LOAD_ERROR: 1
                }), o);
                n(n(n(n(n(n({}, r), t.FH), i), {
                    TOUCH_MORDA_TZAR: 1,
                    TOUCH_PREMIUM_SERP: 1
                }), o), {
                    DESKTOP_FULLSCREEN: 1,
                    DESKTOP_FLOOR_AD: 1,
                    TOO_SMALL_CONTAINER: 1,
                    VIDEO_ERROR: 1,
                    CHUNK_LOAD: 1,
                    UNEXPECTED_DOM: 1,
                    RESPONSE_MISMATCH_BANNER_CFG: 1
                })
            },
            97332: (e, t) => {
                "use strict";
                var n = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                t.l = void 0, t.l = function(e) {
                    var t = e.hostname.replace(/^www./, ""),
                        r = e.pathname;
                    return /^yandex\./.test(t) ? function(e, t) {
                        void 0 === t && (t = 0);
                        var r = e.hostname,
                            o = e.pathname.replace(/\/$/g, "").split("/");
                        return n([r], o.slice(1, t + 1), !0).join("/")
                    }({
                        hostname: t,
                        pathname: r
                    }, 1) : t
                }
            },
            36087: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getServiceName = void 0;
                var r = [{
                    name: "Yandex News",
                    list: ["yandexNews"]
                }, {
                    name: "Yandex Pogoda",
                    list: ["yandexPogoda"]
                }, {
                    name: "Avito",
                    list: ["avito", "avitoMobile"]
                }, {
                    name: "Yandex Mail",
                    list: ["yandexMail"]
                }, {
                    name: "Yandex Zen",
                    list: ["yandexZen"]
                }, {
                    name: "Ok.Ru",
                    list: ["ok"]
                }, {
                    name: "Gismeteo",
                    list: ["gismeteo"]
                }, {
                    name: "Mail.Ru",
                    list: ["mailRuAll"]
                }, {
                    name: "Yandex Video",
                    list: ["yandexVideo"]
                }, {
                    name: "Yandex Images",
                    list: ["yandexImages"]
                }, {
                    name: "Yandex Maps",
                    list: ["yandexMaps"]
                }];
                t.getServiceName = function(e) {
                    void 0 === e && (e = window);
                    for (var t = "Other", o = 0; o < r.length; o++)
                        if ((0, n(14573).Q)(e, r[o].list)) {
                            t = r[o].name;
                            break
                        } return t
                }
            },
            64809: (e, t, n) => {
                "use strict";
                var r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.checkBundleIsWebView = t.checkBundleIsMobilSdk = t.checkBundleIsSSP = t.saveBundleType = void 0,
                    function(e) {
                        e["SSP"] = "ssp", e["mobileSdk"] = "msdk", e["webView"] = "webview"
                    }(r || (r = {}));
                var o = "bundleType";

                function i(e) {
                    return e === r.SSP ? (t = window, Boolean(t.YA_SSP_PAGE) || (0, n(38710).getGlobalVariable)(o) === e) : (0, n(38710).getGlobalVariable)(o) === e;
                    var t
                }
                t.saveBundleType = function(e, t) {
                    if (!(0, n(38710).getGlobalVariable)(o)) {
                        var i = t ? function(e) {
                            var t;
                            switch (e) {
                                case "ssp":
                                    t = r.SSP;
                                    break;
                                case "mobsdk":
                                    t = r.mobileSdk;
                                    break;
                                case "viber":
                                case "webview":
                                    t = r.webView;
                                    break;
                                default:
                                    t = void 0
                            }
                            return t
                        }(t) : function(e) {
                            if (e && e.common && 1 === Number(e.common.isMobileSdk)) return r.mobileSdk;
                            return
                        }(e);
                        i && (0, n(38710).setGlobalVariable)(o, i)
                    }
                }, t.checkBundleIsSSP = function() {
                    return i(r.SSP)
                }, t.checkBundleIsMobilSdk = function() {
                    return e = window, Boolean(e.YA_MOB_SDK_PAGE) || i(r.mobileSdk);
                    var e
                }, t.checkBundleIsWebView = function() {
                    return i(r.webView)
                }
            },
            30107: (e, t, n) => {
                "use strict";

                function r() {
                    return 751013
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getVasVersion = t.getRevisionNo = t.getCodeVersion = void 0, t.getCodeVersion = r, t.getRevisionNo = function() {
                    return 421
                }, t.getVasVersion = function(e) {
                    var t, r, o, i;
                    if (void 0 === e && (e = window), (0, n(26413).isFunction)(null === (r = null === (t = e.ya) || void 0 === t ? void 0 : t.videoAd) || void 0 === r ? void 0 : r.getModuleVersion)) return null === (i = null === (o = e.ya) || void 0 === o ? void 0 : o.videoAd) || void 0 === i ? void 0 : i.getModuleVersion()
                }
            },
            17970: (e, t) => {
                "use strict";
                t.d = void 0, t.d = function() {
                    return "production"
                }
            },
            17817: (e, t, n) => {
                "use strict";
                t.i = void 0, t.i = function() {
                    var e = (0, n(38710).getYa)();
                    return Boolean(e.Collections)
                }
            },
            66333: (e, t) => {
                "use strict";
                t.C = void 0, t.C = function(e) {
                    return -1 !== e.location.hostname.indexOf("yandex") && "object" == typeof e.home && Boolean(e.home["export"])
                }
            },
            29935: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isTurboPage = void 0, t.isTurboPage = function(e) {
                    return void 0 === e && (e = window), Boolean(e.YA_TURBO_PAGES)
                }
            },
            7937: (e, t) => {
                "use strict";
                t.U = void 0, t.U = function(e) {
                    return Boolean(e.Ya.Znatoki)
                }
            },
            79995: (e, t, n) => {
                "use strict";
                t.i = void 0;
                var r = function() {
                    function e(e) {
                        this.outer = (0, n(36739).F)(e), this.status = "ok"
                    }
                    return e.prototype.triggerError = function(e, t) {
                        "ok" === this.status && (this.outer.onError ? (this.status = "error", this.outer.onError({
                            type: "error",
                            code: e,
                            text: t
                        })) : console.error(e, t))
                    }, e.prototype.triggerWarning = function(e, t) {
                        "ok" === this.status && (this.outer.onError ? this.outer.onError({
                            type: "warning",
                            code: e,
                            text: t
                        }) : console.info(e, t))
                    }, e.prototype.triggerOnClick = function(e) {
                        this.outer.onClick && this.outer.onClick(e)
                    }, e.prototype.triggerAltCallback = function(e) {
                        "ok" === this.status && this.outer.altCallback && (this.status = "alt", this.outer.altCallback(e))
                    }, e.prototype.triggerOnRender = function(e) {
                        var t, n;
                        null === (n = (t = this.outer).onRender) || void 0 === n || n.call(t, e)
                    }, e.prototype.triggerPreClick = function() {
                        if (this.outer.preClick) return this.outer.preClick()
                    }, e.prototype.triggerOnPreload = function(e) {
                        return !!this.outer.onPreload && (this.outer.onPreload(e), !0)
                    }, e
                }();
                t.i = r
            },
            36739: (e, t, n) => {
                "use strict";

                function r(e) {
                    return (0, n(26413).isFunction)(e) ? (0, n(95456).K)(e) : void 0
                }
                t.F = void 0, t.F = function(e) {
                    return {
                        onError: r(e.onError),
                        onClick: r(e.onClick),
                        onRender: r(e.onRender),
                        onPreload: r(e.onPreload),
                        altCallback: r(e.altCallback),
                        preClick: (t = e.preClick, (0, n(26413).isFunction)(t) && (0, n(90055).w)(document.location.host) ? t : void 0)
                    };
                    var t
                }
            },
            75084: (e, t, n) => {
                "use strict";
                t.u = void 0;
                var r = function() {
                    function e() {
                        this.valid = !0, this.additionals = {}
                    }
                    return e.prototype.setSkipTokenSettings = function(e) {
                        this.skipTokenSettings = (0, n(98060).r)(e)
                    }, e.prototype.setCallbacks = function(e) {
                        this.callbacks = new(n(79995).i)(e)
                    }, e.prototype.setBlockId = function(e) {
                        var t = (0, n(44751).parseBlockId)(e);
                        if (null === t.product || null === t.pageId || null === t.impId) {
                            var r = 'Invalid block id: "'.concat(e, '"');
                            return this.callbacks.triggerError("INVALID_BLOCK_ID", r), n(49874).logger.errorStrict("INVALID_BLOCK_ID", {
                                text: r
                            }), void(this.valid = !1)
                        }
                        this.blockId = {
                            origin: e,
                            product: t.product,
                            pageId: t.pageId,
                            impId: t.impId
                        }
                    }, e.prototype.setContainer = function(e) {
                        this.renderTo = e
                    }, e.prototype.setAdfoxContainerId = function(e) {
                        this.adfoxContainerId = e
                    }, e.prototype.setContainerDomNode = function(e) {
                        this.renderToDomNode = e
                    }, e.prototype.setBannerType = function(e) {
                        this.bannerType = e
                    }, e.prototype.setLayoutConfig = function(e) {
                        this.layoutConfig = e
                    }, e.prototype.getLayoutConfig = function() {
                        return this.layoutConfig
                    }, e.prototype.getRenderToElement = function(e) {
                        return (0, n(85384).isCustomBannerTypeAndExp)(this.bannerType) ? this.renderToDomNode : (0, n(5989).getElementById)((null == e ? void 0 : e.renderTo) || this.renderTo)
                    }, e.prototype.isValid = function() {
                        return this.valid
                    }, e.prototype.destroy = function() {}, e.prototype.setAdditional = function(e) {
                        (0, n(8627).assignProperties)(this.additionals, e)
                    }, e
                }();
                t.u = r
            },
            98060: (e, t) => {
                "use strict";
                t.r = void 0, t.r = function(e) {
                    var t = {
                        disable: !1
                    };
                    return -1 === (null == e ? void 0 : e.screen) && (t.disable = !0), t
                }
            },
            74472: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getAllBlocksInfo = t.destroyPlacement = t.getPlacement = t.registerPlacement = void 0;
                var r = {};
                t.registerPlacement = function(e) {
                    return r[e] = new(n(75084).u), r[e]
                }, t.getPlacement = function(e) {
                    return r[e]
                }, t.destroyPlacement = function(e) {
                    var t = r[e];
                    t && (t.destroy(), delete r[e])
                }, t.getAllBlocksInfo = function() {
                    var e = [];
                    for (var t in r) e.push({
                        blockId: r[t].blockId.origin,
                        renderTo: r[t].renderTo
                    });
                    return e
                }
            },
            28458: (e, t, n) => {
                "use strict";
                t.T = void 0;
                var r = {
                    21753: 50,
                    27219: 50,
                    101833: 50,
                    122989: 50,
                    70350: 50,
                    250894: 10
                };
                t.T = function(e, t) {
                    if (e in r) {
                        var o = r[e];
                        return "boolean" == typeof o ? o : r[e] = (0, n(14415).isPercent)(o)
                    }
                    return t
                }
            },
            8595: (e, t) => {
                "use strict";
                t.Y = void 0;
                t.Y = function(e, t) {
                    var n = e && !e.width && !e.height && !e.w && !e.h;
                    return Boolean(n && !("fullscreen" === t))
                }
            },
            95456: (e, t, n) => {
                "use strict";
                t.K = void 0, n(12251).protect.log = n(49874).logger.warn, t.K = function(e) {
                    return (0, n(12251).protect)("isolate", e || n(85225).noop, this, (function(e) {
                        e.preventProtect = !0
                    }))
                }
            },
            81465: (e, t, n) => {
                "use strict";
                t.p = void 0, t.p = function(e, t, r) {
                    var o;
                    if (!n(35930).isIntersectionObserverSupported) return o = (0, n(96757).requestAnimationFrame)(t),
                        function() {
                            o && (0, n(96757).cancelAnimationFrame)(o)
                        };
                    var i = Math.max(0, r.fetchMargin),
                        a = Math.max(1, r.mobileScaling),
                        s = n(50880).isMobile ? i * a : i,
                        c = {
                            rootMargin: "".concat(s, "%"),
                            threshold: [0, .25, .5, .75, 1]
                        },
                        u = new IntersectionObserver((function(r) {
                            for (var i = 0; i < r.length; i++) {
                                r[i].intersectionRatio > 0 && (u.unobserve(e), o = (0, n(96757).requestAnimationFrame)(t))
                            }
                        }), c);
                    return u.observe(e),
                        function() {
                            u.unobserve(e), o && (0, n(96757).cancelAnimationFrame)(o)
                        }
                }
            },
            96483: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.requestCounter = void 0;
                var r = (0, n(64809).checkBundleIsSSP)(),
                    o = (0, n(64809).checkBundleIsMobilSdk)(),
                    i = !r && !o && !0,
                    a = n(17451).B7.getInstance((function() {
                        return (0, n(38710).getYa)()
                    }), i);
                t.requestCounter = function(e, t) {
                    a.requestCounter(e, t)
                }
            },
            48289: (e, t, n) => {
                "use strict";
                t.r = void 0;
                var r;
                t.r = function() {
                    return r || (r = new Promise((function(e) {
                        (0, n(96483).requestCounter)({
                            id: 42093449,
                            enableCookies: false
                        }, e)
                    }))).then((function(e) {
                        var t = (0, n(56240).getTestIds)();
                        e.params(t);
                        var r = (0, n(56240).getFlagsIdsMap)();
                        e.params(r)
                    })), r
                }
            },
            88536: (e, t, n) => {
                "use strict";
                t.R = void 0, t.R = (0, n(94532).once)((function() {
                    var e = (0, n(44834).getMraid)();
                    if (e) {
                        var t = e.getVersion();
                        n(49874).logger.traceLog({
                            msg: "MRAID_IS_ENABLED",
                            version: t
                        }, "MRAID_LOG")
                    }
                    return Boolean(e)
                }))
            },
            70585: (e, t, n) => {
                "use strict";
                t.q = void 0, t.q = function(e) {
                    var t = e.type,
                        r = e.platform,
                        o = e.window;
                    return !("fullscreen" !== t || (0, n(74351).V)({
                        platform: r,
                        window: o
                    })) || ("floorAd" === t && !(0, n(92870).Qg)({
                        platform: r,
                        window: o
                    }) || "topAd" === t && !(0, n(92870).dz)({
                        platform: r,
                        window: o
                    }))
                }
            },
            14415: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isPercent = t.fixPrecision = t.toFraction = void 0;

                function n(e) {
                    return r(e / 100)
                }

                function r(e) {
                    return Number(e.toFixed(3))
                }
                t.toFraction = n, t.fixPrecision = r, t.isPercent = function(e) {
                    return Math.random() < n(e)
                }
            },
            32868: (e, t, n) => {
                "use strict";
                t.G = void 0;
                var r = function() {
                    function e(e) {
                        this.renderToNode = e, this.wasRendered = !1, this.wasAdSeen = !1, this.isVisible = !1, this.seenTime = 0, this.waitingRenderTime = 0, this.missedSeenTime = 0, this.rendering = new(n(48777).B), this.whenAdWasRendered = this.rendering.promise, this.viewability = new(n(48777).B), this.whenAdWasSeen = this.viewability.promise
                    }
                    return e.prototype.startObserve = function() {
                        var e = this;
                        if (void 0 === this.unobserve) {
                            var t, r = (t = {
                                rootMargin: "0px",
                                threshold: [0, .25, .5, .75, 1]
                            }, new(n(43945).ViewportObserver)(t)).observe(this.renderToNode, (function(t) {
                                t !== e.isVisible && (e.isVisible = t, t ? (e.seenTime = performance.now(), e.whenAdWasRendered.then((function() {
                                    r(), e.wasAdSeen = !0, e.viewability.resolve()
                                }))) : e.seenTime && (e.missedSeenTime += performance.now() - e.seenTime, e.seenTime = 0))
                            }));
                            this.unobserve = r
                        }
                    }, e.prototype.destroy = function() {
                        var e;
                        null === (e = this.unobserve) || void 0 === e || e.call(this)
                    }, e.prototype.renderingIsCompleted = function() {
                        if (!this.wasRendered) {
                            if (this.wasRendered = !0, this.seenTime > 0) {
                                var e = performance.now();
                                this.waitingRenderTime = Math.max(0, e - this.seenTime), this.seenTime = 0, this.wasAdSeen = !0
                            }
                            this.rendering.resolve()
                        }
                    }, e.prototype.getSeenStatus = function() {
                        var e = this,
                            t = e.wasAdSeen,
                            n = e.wasRendered,
                            r = e.waitingRenderTime,
                            o = e.missedSeenTime;
                        return {
                            wasAdSeen: t,
                            wasRendered: n,
                            waiting: r,
                            missed: o,
                            total: o + r
                        }
                    }, e
                }();
                t.G = r
            },
            74192: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getStatus = t.renderingIsCompleted = t.destroyAdSeenObserver = t.initAdSeenObserver = t.getAdSeenObserver = void 0;
                var r = {};
                t.getAdSeenObserver = function(e) {
                    return r[e] || null
                }, t.initAdSeenObserver = function(e, t) {
                    if (void 0 === r[e]) {
                        var o = new(n(32868).G)(t);
                        r[e] = o, o.startObserve()
                    }
                }, t.destroyAdSeenObserver = function(e) {
                    var t = r[e];
                    void 0 !== t && (t.destroy(), delete r[e])
                }, t.renderingIsCompleted = function(e) {
                    var t = r[e];
                    void 0 !== t && t.renderingIsCompleted()
                }, t.getStatus = function(e) {
                    var t = r[e];
                    return void 0 === t ? null : t.getSeenStatus()
                }
            },
            28722: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.brakePointsStatId = t.brakeFor = t.brakePointsExp = t.POINT_NAME = void 0,
                    function(e) {
                        e["LOADER_INIT"] = "loaderInit", e["ADV_MANAGER_INIT"] = "advManagerInit", e["DOM_RENDERING"] = "domRendering"
                    }(t.POINT_NAME || (t.POINT_NAME = {}));
                var r = {};

                function o(e, t) {
                    var n = performance.now();
                    for (t && t(); performance.now() - e < n;);
                    return performance.now() - n
                }
                t.brakePointsExp = o;
                var i = (0, n(94532).once)((function() {
                    if ((0, n(88772).useExperimentFlag)("BRAKE_POINTS", !0)) {
                        var e = (0, n(88772).useExperimentFlag)("BRAKE_POINTS_DOMAINS");
                        if (e) {
                            var t = (0, n(97332).l)(window.location);
                            return (0, n(80511).includes)(e, t)
                        }
                        return !0
                    }
                    return !1
                }));
                t.brakeFor = function(e) {
                    if (i()) {
                        a();
                        var t = (0, n(88772).useExperimentFlag)("BRAKE_POINTS") || r,
                            s = null == t ? void 0 : t[e];
                        if (s) {
                            o(s);
                            0
                        }
                    }
                }, t.brakePointsStatId = function() {
                    if (i()) return (0, n(88772).useExperimentFlag)("BRAKE_POINTS_STAT_ID")
                };
                var a = (0, n(94532).once)((function() {
                    setTimeout((function() {
                        (0, n(48289).r)()
                    }), 0)
                }))
            },
            31427: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.I = void 0;
                var o = n(64029).isTouchDevice ? "touch" : "desktop",
                    i = "pcode",
                    a = (0, n(56240).getUaasConfig)(),
                    s = a.testIds ? a.testIds.split(";") : void 0;
                t.I = function(e) {
                    var t, a, c = null === (a = null === (t = null === window || void 0 === window ? void 0 : window.Ya) || void 0 === t ? void 0 : t.Context) || void 0 === a ? void 0 : a.Rum;
                    return c || (c = new Promise((function(e) {
                        n(24673)((function(t) {
                            var a = function(e) {
                                var t, a;
                                if ((0, n(85914).isPerfLogging)()) {
                                    var c = e.init({
                                        clck: "https://yandex.ru/clck/click",
                                        slots: s,
                                        reqid: "".concat(Date.now(), ":pcode:").concat(Math.random()),
                                        scrollMetric: !0,
                                        scrollLatencyMetric: !0,
                                        sendAutoElementTiming: !0,
                                        elementTimingEntryFilter: function(t) {
                                            return -1 !== t.identifier.indexOf("tgo-") && (n = t.intersectionRect, ["x", "y", "top", "bottom", "left", "right", "width", "height"].some((function(e) {
                                                return 0 !== n[e]
                                            }))) && e.isValidYaBroRender();
                                            var n
                                        },
                                        isDevMode: (0, n(85914).isLoggingQueryActive)()
                                    }, {
                                        rum_id: "ru.pcode.".concat(o),
                                        "-project": i,
                                        "-page": (0, n(97332).l)(window.location),
                                        "-version": String((0, n(30107).getCodeVersion)()),
                                        "-platform": o,
                                        "-env": (0, n(17970).d)(),
                                        "-url": window.location.href,
                                        "-domain": window.location.host,
                                        "-blocker": void 0
                                    });
                                    a = r(r({}, e), c), e.isRumInited() && e.sendResTiming("context.js", (null === (t = document.currentScript) || void 0 === t ? void 0 : t.src) || "https://yandex.ru/ads/system/context.js")
                                }
                                return a
                            }(t);
                            e(a)
                        }), (function(e) {
                            return n(49874).logger.error(e, "Rum bundle loading error")
                        }))
                    }))), e && c.then((function(t) {
                        e(t)
                    })), c
                }
            },
            91208: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isLightHouse = void 0;
                var n = -1 !== navigator.userAgent.indexOf("Chrome-Lighthouse");
                t.isLightHouse = function() {
                    return n
                }
            },
            85914: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getMarksByName = t.clearMarks = t.setMark = t.isPerfLogging = t.isLoggingQueryActive = t.RenderMarks = void 0,
                    function(e) {
                        e["AdvManagerLoader"] = "AdvManagerLoader", e["AdvManagerLoaded"] = "AdvManagerLoaded", e["StartLazyLoadObserver"] = "StartLazyLoadObserver", e["ReadyToRequest"] = "ReadyToRequest", e["DataLoaded"] = "DataLoaded", e["DepsLoadStart"] = "DepsLoadStart", e["AdvManagerRender"] = "AdvManagerRender", e["ReadyForRendering"] = "ReadyForRendering", e["StartDomRendering"] = "StartDomRendering", e["StopDomRendering"] = "StopDomRendering", e["StartDetector"] = "StartDetector", e["StartEffectRendering"] = "StartEffectRendering", e["StopEffectRendering"] = "StopEffectRendering", e["OnRenderCalled"] = "OnRenderCalled", e["ContentfulRender"] = "ContentfulRender", e["ContextJs"] = "ContextJs"
                    }(t.RenderMarks || (t.RenderMarks = {}));
                var r = window,
                    o = (0, n(28377).parseQueryString)(window.location.search);
                t.isLoggingQueryActive = function() {
                    return Boolean(o.yandex_context_perf_logging)
                };
                t.isPerfLogging = function() {
                    return void 0 === r.yandex_context_perf_logging && (r.yandex_context_perf_logging = (0, n(14415).isPercent)(3) && !(0, n(91208).isLightHouse)() || (0, t.isLoggingQueryActive)()), r.yandex_context_perf_logging
                }, t.setMark = function(e, n) {
                    if ((0, t.isPerfLogging)()) try {
                        var r = "".concat(e, "_").concat(n);
                        performance.mark(r)
                    } catch (e) {}
                }, t.clearMarks = function(e) {
                    if ((0, t.isPerfLogging)()) try {
                        var r = performance.getEntriesByType("mark");
                        (0, n(15137).forEach)(r, (function(t) {
                            0 === t.name.indexOf(e) && performance.clearMarks(t.name)
                        }))
                    } catch (e) {}
                }, t.getMarksByName = function(e) {
                    if (!(0, t.isPerfLogging)()) return [];
                    try {
                        return performance.getEntriesByName(e, "mark")
                    } catch (e) {
                        return []
                    }
                }
            },
            1164: (e, t, n) => {
                "use strict";
                var r, o, i, a;
                t.E7 = t.Ac = t.SS = void 0;
                var s = window;
                t.SS = function() {
                    if (s.performance && s.performance.getEntriesByType) {
                        i = performance.now();
                        var e = n(40755).xD.__preduce((function(e, t) {
                            return e.concat(s[t])
                        }), []).filter((function(e) {
                            return "function" == typeof e && e.toString().match(/AdvManager\.render/)
                        }));
                        a = e.length, s.performance.getEntriesByType("resource").forEach((function(e) {
                            e.name === n(70709).FO && (r = e.startTime, o = e.responseEnd)
                        }))
                    }
                };
                t.Ac = function() {
                    return a ? (a--, !0) : performance.now() - i < 100
                };
                t.E7 = function() {
                    return {
                        CONTEXT_JS_LOAD_START: r,
                        CONTEXT_JS_LOAD_END: o,
                        CONTEXT_JS_EXEC_START: i
                    }
                }
            },
            55220: (e, t, n) => {
                "use strict";
                t.X0 = t.ji = void 0;
                var r = {};

                function o(e) {
                    return function(t) {
                        var o = "queue_" + t + "_" + e;
                        if (!r[o])
                            if (window && window.performance) {
                                r[o] = !0;
                                var i = performance.now();
                                (0, n(31427).I)().then((0, n(12251).protect)("createQueueSignal:loadRum", (function(e) {
                                    e && e.isRumInited() && e.sendDelta(o, i)
                                })))
                            } else r[o] = !0
                    }
                }
                t.ji = o("ready"), t.X0 = o("start")
            },
            4374: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendRumDeltas = void 0, t.sendRumDeltas = function(e, t) {
                    (0, n(85914).isPerfLogging)() && (0, n(31427).I)().then((function(o) {
                        var i = !!t && (t.isInViewport && o && o.isValidYaBroRender()),
                            a = (0, n(88772).getAllActiveTestIds)(),
                            s = window;
                        t = r(r(r({}, t), s.yandex_context_rum_additionals), {
                            isValidRender: i,
                            activeTestIds: a
                        });
                        var c = {
                            "-additional": encodeURIComponent(n.lv["json"].stringify(t))
                        };
                        (0, n(38715).forOwn)(e, (function(e, t) {
                            o && o.sendDelta(t, e, c)
                        }))
                    }))
                }
            },
            48674: (e, t, n) => {
                "use strict";
                t.l = void 0, t.l = function(e) {
                    if (!(0, n(7153).isObject)(e)) return {};
                    var t = {};
                    return (0, n(38715).forOwn)(e, (function(e, r) {
                        (0, n(41486).isString)(r) && "X" === r.charAt(0).toUpperCase() && (t[r] = String(e))
                    })), t
                }
            },
            40817: (e, t, n) => {
                "use strict";
                t.Nb = t.nH = void 0;
                var r, o = [],
                    i = {},
                    a = "on" === (0, n(88772).useExperimentFlag)("PUBLIC_BOARD"),
                    s = !1;

                function c(e) {
                    o.push(e),
                        function() {
                            if (!s) return;
                            var e = o.join("<br>");
                            (function() {
                                if (r) return r;
                                r = document.createElement("div");
                                var e = ["border: 1px solid red", "font: 11px/1.3 sans-serif", "padding: 0 7px", "position: fixed", "background: white", "left: 0", "top: 0", "z-index: 1000000", "cursor: pointer"];
                                r.setAttribute("id", "debug_info"), r.setAttribute("style", e.join(";"));
                                var t = document.body || document.documentElement;
                                return r.onclick = function() {
                                    t.removeChild(r)
                                }, t.appendChild(r), r
                            }()).innerHTML = e
                        }()
                }
                t.nH = function(e, t) {
                    i[t] || (i[t] = !0, c(e))
                }, t.Nb = function(e, t) {
                    s = s || "1" === e && t && a
                }
            },
            2052: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.W = void 0;
                var o = {
                    url: "",
                    method: "get",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    retries: 3,
                    withCredentials: !0
                };
                t.W = function(e) {
                    return (0, n(42180).W)(r(r(r({}, o), e), {
                        headers: r(r({}, o.headers), e.headers)
                    }))
                }
            },
            88521: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getHostWithPath = t.getHref = t.getHost = t.getPageRef = t.getTargetRef = void 0, t.getTargetRef = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return e.top.location.href
                    } catch (e) {}
                    try {
                        return e.document.referrer || e.location.href
                    } catch (e) {}
                    return ""
                }, t.getPageRef = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return e.top.document.referrer
                    } catch (e) {}
                    return ""
                }, t.getHost = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return e.location.host
                    } catch (e) {}
                    return ""
                }, t.getHref = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return e.location.href
                    } catch (e) {}
                    return ""
                }, t.getHostWithPath = function(e) {
                    void 0 === e && (e = window);
                    try {
                        return "".concat(e.location.hostname).concat(e.location.pathname)
                    } catch (e) {}
                    return ""
                }
            },
            9403: (e, t, n) => {
                "use strict";
                t.Z = void 0, t.Z = function() {
                    var e = {};
                    return {
                        setItem: function(t, n) {
                            e[t] = n
                        },
                        getItem: function(t) {
                            return e[t]
                        },
                        removeItem: function(t) {
                            delete e[t]
                        },
                        clear: function() {
                            e = {}
                        },
                        key: function(t) {
                            var r = (0, n(10407).getObjectKeys)(e)[t];
                            return r || null
                        },
                        get length() {
                            return (0, n(10407).getObjectKeys)(e).length
                        }
                    }
                }
            },
            70283: (e, t) => {
                "use strict";
                t.V = void 0, t.V = function(e) {
                    return {
                        setItem: function(t, n) {
                            try {
                                e.setItem(t, n)
                            } catch (e) {}
                        },
                        getItem: function(t) {
                            try {
                                return e.getItem(t)
                            } catch (e) {
                                return null
                            }
                        },
                        removeItem: function(t) {
                            try {
                                return e.removeItem(t)
                            } catch (e) {}
                        },
                        clear: function() {
                            try {
                                e.clear()
                            } catch (e) {}
                        },
                        key: function(t) {
                            try {
                                return e.key(t)
                            } catch (e) {
                                return null
                            }
                        },
                        get length() {
                            try {
                                return e.length
                            } catch (e) {
                                return 1 / 0
                            }
                        }
                    }
                }
            },
            74987: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.safeSessionStorage = t.safeLocalStorage = void 0;
                var r = (0, n(64809).checkBundleIsSSP)();
                if (t.safeLocalStorage = (0, n(9403).Z)(), t.safeSessionStorage = (0, n(9403).Z)(), !r) {
                    try {
                        t.safeLocalStorage = (0, n(70283).V)(localStorage)
                    } catch (e) {}
                    try {
                        t.safeSessionStorage = (0, n(70283).V)(sessionStorage)
                    } catch (e) {}
                }
            },
            82649: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendPixel = void 0, t.sendPixel = function(e, t, r, o) {
                    (0, n(20816).loadImage)({
                        src: e,
                        onLoad: t,
                        onError: r,
                        ctx: o
                    })
                }
            },
            9809: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.logSSPErrorEvent = t.logSSPEvent = void 0;
                var o = (0, n(88772).useExperimentFlag)("SSP_LOG_PERCENT"),
                    i = (0, n(50023).z)(o) ? o : 15,
                    a = (0, n(14415).isPercent)(i),
                    s = (0, n(12251).protect)("SSP_EXP:getLogData", (function(e) {
                        var t, n, r, o, i, a, s, c, u, d, l;
                        return {
                            url: null === (t = e.rtb) || void 0 === t ? void 0 : t.url,
                            isCache: Boolean(null === (n = e.rtb) || void 0 === n ? void 0 : n.url),
                            needBase64Html: Boolean(null === (o = null === (r = e.rtb) || void 0 === r ? void 0 : r.data) || void 0 === o ? void 0 : o.needBase64Html),
                            productType: (null === (i = e.common) || void 0 === i ? void 0 : i.productType) || "",
                            sspId: (null === (a = e.common) || void 0 === a ? void 0 : a.sspId) || "",
                            pageId: (null === (s = e.common) || void 0 === s ? void 0 : s.pageId) || "",
                            bidReqIdStr: (null === (c = e.common) || void 0 === c ? void 0 : c.bidReqIdStr) || "",
                            bidreqid: (null === (u = e.rtb) || void 0 === u ? void 0 : u.bidreqid) || "",
                            adIds: null === (d = null == e ? void 0 : e.settings) || void 0 === d ? void 0 : d.bannerIds,
                            hitLogId: null === (l = null == e ? void 0 : e.eventConfirmationData) || void 0 === l ? void 0 : l.HitLogID
                        }
                    }));
                t.logSSPEvent = function(e, t, o) {
                    if (t && a) {
                        var i = r(r({}, o), s(t));
                        (0, n(28274).traceLog)(i, e, 100)
                    }
                };
                t.logSSPErrorEvent = function(e, t, r) {
                    if (void 0 === r && (r = 100), t) {
                        var o = (0, n(88772).useExperimentFlag)("SSP_LOG_PERCENT");
                        (0, n(50023).z)(o) && (r = o), (0, n(28274).traceLog)(t, e, r)
                    }
                }
            },
            70709: (e, t, n) => {
                "use strict";
                t.FO = t.Pq = t.wY = t.a1 = void 0, t.a1 = !1, t.wY = !1;
                var r = !1;
                (r = 0 === n(72966).D.indexOf("https://yandex.ru")) && "exp" !== (0, n(88772).useExperimentFlag)("YANDEX_RU_REVERSE") && (t.a1 = r), t.wY = "exp" === (0, n(88772).useExperimentFlag)("YARU_DISTRIB_ALWAYS") || r, t.a1, t.Pq = t.a1 ? "yandex.ru/ads" : "an.yandex.ru", t.FO = t.a1 ? "https://yandex.ru/ads/system/context.js" : "https://an.yandex.ru/system/context.js", t.a1
            },
            85486: (e, t, n) => {
                "use strict";

                function r(e) {
                    try {
                        e()
                    } catch (e) {
                        return (0, n(18816).N6)(e), !1
                    }
                    return !0
                }
                t.vD = void 0, t.vD = function(e) {
                    for (var t = 0; t < e.length; t++) r(e[t])
                }
            },
            10439: (e, t, n) => {
                "use strict";
                t.t = void 0, t.t = function(e, t) {
                    var r = (0, n(56240).getUaasConfig)(),
                        o = r.flagsMap,
                        i = r.flagsMapCompressed,
                        a = r.testIds;
                    a && (e["pcode-test-ids"] = a), i ? e["pcode-flags-map"] = i : o && (0, n(10407).getObjectKeys)(o).length > 0 && (e["pcode-flags-map"] = n.lv["json"].stringify(o)), t.disableSsr || t.useSsr && (e["use-server-side-rendering"] = "1");
                    var s = (0, n(28377).parseQueryString)(location.search || ""),
                        c = (0, n(88772).useExperimentFlag)("SRCRWR") || s["pcode-srcrwr"] || s.srcrwr;
                    return c && (e.srcrwr = c, e["ssr-dev"] = "1", e["use-server-side-rendering"] = "1"), r.iCookie && (e["pcode-icookie"] = r.iCookie), (0, n(88772).useExperimentFlag)("DISABLE_BASE64_SSR") && (e.disableSsrBase64Please = "true"), (0, n(88772).useExperimentFlag)("DISABLE_BASE64_MEDIA") && (e["disable-base64"] = "1"), e
                }
            },
            88772: (e, t, n) => {
                "use strict";
                var r = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addVasActiveTestId = t.getAllActiveTestIds = t.collectAllActiveTestIds = t.onActiveTestIdsChange = t.generateActiveTestIds = t.getActiveTestIds = t.useExperimentFlag = t.getUaasConfig = t.resetExperimentsData = t.initExperimentsData = void 0;
                var o = [];
                window.__activeTestIds = window.__activeTestIds || [], window.__vasActiveTestIds = window.__vasActiveTestIds || [], window.__pcodeAllActiveTestIds = [];
                t.initExperimentsData = function(e) {
                    var t = e.flags,
                        n = e.flagsMap,
                        r = e.testIds;
                    t, n, r
                };
                t.resetExperimentsData = function() {
                    void 0, void 0, void 0, o = []
                };
                t.getUaasConfig = function() {
                    return n(56240).getUaasConfig()
                };
                t.useExperimentFlag = function(e, r, o) {
                    var a, s;
                    void 0 === r && (r = !1);
                    var c = (0, t.getUaasConfig)();
                    a = c.flags, s = c.flagsMap;
                    var u = a && a[e];
                    return !r && s && s[e] && (0, n(15137).forEach)(s[e], (function(e) {
                        var t, r, a = e.value,
                            s = e.testId;
                        r = u, ((t = a) && r && "object" == typeof t && "object" == typeof r ? n.lv["json"].stringify(t) === n.lv["json"].stringify(r) : t === r) && i(s, o)
                    })), u
                };
                var i = function(e, r) {
                        var o = r;
                        o || (o = a()),
                            function(e, r) {
                                var o = (0, t.getUaasConfig)().testIds;
                                if (o) {
                                    var i = (0, n(94383).find)(o.split(";"), (function(t) {
                                        return 0 === t.indexOf(e)
                                    }));
                                    i && (r.push(i), (0, t.collectAllActiveTestIds)([i]))
                                }
                            }(e, o)
                    },
                    a = function() {
                        return window.__activeTestIds || []
                    };
                t.getActiveTestIds = function(e) {
                    var t;
                    return (0, n(98370).unique)(null !== (t = null == e ? void 0 : e.concat(o)) && void 0 !== t ? t : o)
                };
                t.generateActiveTestIds = function(e, t) {
                    var r;
                    void 0 === e && (e = []), void 0 === t && (t = []);
                    var o = null !== (r = n(56240).getUaasConfig().rrActiveTestIds) && void 0 !== r ? r : [],
                        i = [].concat(e, t, a(), window.__vasActiveTestIds || [], o);
                    if (i.length) return (0, n(98370).unique)(i).join(";")
                }, t.onActiveTestIdsChange = new(n(57747).ValueSignal)([]);
                t.collectAllActiveTestIds = function(e) {
                    e && e.length && window.__pcodeAllActiveTestIds && (window.__pcodeAllActiveTestIds = window.__pcodeAllActiveTestIds.concat(e), t.onActiveTestIdsChange.dispatch(window.__pcodeAllActiveTestIds))
                };
                t.getAllActiveTestIds = function() {
                    if (window.__pcodeAllActiveTestIds && window.__pcodeAllActiveTestIds.length) return (0, n(98370).unique)(r(r([], window.__pcodeAllActiveTestIds, !0), window.__vasActiveTestIds || [], !0)).join(";")
                };
                t.addVasActiveTestId = function(e) {
                    window.__vasActiveTestIds = (0, n(98370).unique)(r(r([], window.__vasActiveTestIds || [], !0), [e], !1))
                }, (0, n(2979).FN)((0, t.useExperimentFlag)("SAFEFRAME_VERSION"))
            },
            7386: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isHermione = t.isReleaseTestSuite = t.initHermioneData = void 0;
                t.initHermioneData = function(e) {
                    var t = e.isHermione;
                    n = t
                };
                var r = function() {
                    return window && window.document && window.document.location && new URL(window.document.location.toString()) && new URL(window.document.location.toString()).searchParams
                };
                t.isReleaseTestSuite = function() {
                    return r() && "true" === new URL(window.document.location.toString()).searchParams.get("releaseTestSuite")
                };
                t.isHermione = function() {
                    return Boolean(n) || r() && "true" === new URL(window.document.location.toString()).searchParams.get("hermione")
                }
            },
            56240: (e, t, n) => {
                "use strict";
                var r, o, i, a = function() {
                    return a = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, a.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getUaasIsInternalNetwork = t.getUaasFlags = t.getTestIds = t.getFlagsIdsMap = t.getUaasConfig = t.setMeta = t.parseConfig = void 0;
                t.parseConfig = function() {
                    var e = {
                        testIds: "",
                        flags: {},
                        flagsMap: {},
                        isInternalNetwork: !1
                    };
                    try {
                        e = n.lv["json"].parse('{"flags":{"VAS_SHOW_AD_LABEL_FOR_IN_BANNER":"TRUE","VAS_SHOW_PRODUCTS_ON_PAUSE":"TRUE","ENABLE_ECOM_PRODUCTS_LIST_IN_VIDEO_IN_COMBO_ARM":"exp","DISABLE_COUNT_REDIRECT_INAPP":"TRUE","VAS_USE_MULTIROLL_CONTROLLER_WATCHED_TIME_OFFSET":"TRUE","VAS_BUTTON_COLOR":"#37f","PCODE_BUTTON_COLOR_FOR_VIDEO_IN_COMBO":"#37f","VAS_SHOW_TITLE_AND_BODY_AD_PARAMETER_DEFAULT":"FALSE","VAS_STABLE_VERSION":"749305","UNILOADER_FOR_AMP":true,"USE_SSR_IN_AMP":"exp","AD_SEEN_OBSERVER":"enable","FIX_MIN_HEIGHT_NTP":"exp","YANDEX_RU_DOMAIN":"exp","FIX_BROKEN_NTP_GRID":"exp","YANDEX_RU_DOMAIN_DISTRIB":"exp","ZEN2_FULL_WIDTH_IMAGE":"exp","ZEN2_DISABLE_BORDER_RADIUS ":"exp","YARU_DISTRIB_ALWAYS":"exp","DFP_RESPONSE_TIMEOUT":"2000","PCODE_CONSENT":"exp","ADFOX_RELOAD_TIMEOUT_EXP":"exp","ADFOX_RELOAD_IF_AD_WAS_SEEN":"exp","ADFOX_RELOAD_TIMEOUT_VALUE":30,"LEARN_MORE_VARIANT":"2","PRIORITY_BY_VIEWPORT":"exp","DISABLE_DIRECT_CSR":"exp","ZEN2_IS_CARROT_ACCENTS":true,"ZEN2_IS_IMAGES_WITHOUT_PADDINGS":true,"COUNTER_TYPE_3":"exp","ADFOX_MRC_VISIBILITY":true,"ADFOX_MRC_VISIBILITY_ON_CLICK":"exp","MULTIBANNER_UNIFIED_INTERFACE":"exp","ADFOX_BANNER_VIDEO_TO_AD_PLAYBACK_CONTROLLER":"exp","ZEN2_IS_HEADER_REDESIGN":"exp","NEW_REFRESH_LOGIC":"exp","CONFIRM_BY_RENDER_FOR_PREBID":"exp","DISABLE_USERAGENT_CHECK_FULLSCREEN_SSP":"exp","ENABLE_VIDEO_IN_COMBO_DEFAULT_INFINITE_PACKSHOT":"exp","DISABLE_SMART_QUEUE_IN_SSP":"exp","VAS_THROW_VIDEO_IN_COMBO_ERROR_ON_INVALID_SLOT":"exp","CALL_ONRENDER_AFTER_IFRAME_LOADED":"exp","USE_FRIENDLY_FRAME_IN_APP":"exp","USE_BK_SIZE":"exp","USE_BK_SIZES_FOR_VIDEO_IN_COMBO":"exp","USE_LEAD_FORM":"exp","USE_BK_SIZE_MEDIA":"exp","FULLSCREEN_GRID_DESKTOP":"exp","CONSTRUCTOR_SSP_320_FULL_CLICKABLE_BANNER":"exp","USE_BK_SIZE_TGA":"exp","ENABLE_NEW_DESIGN_FOR_VIDEO_IN_COMBO_WITH_ARM":"exp","SMART_SKIP_TRACK_CLICK":"exp","VIDEO_IN_COMBO_FLOOR_AD_ENABLE":"exp","VIDEO_IN_COMBO_FLOOR_AD_SIZES":"fix_max_height","INAPP_KEBAB_FIX":"exp","CALL_ONERROR_WHEN_FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED":"exp","RR_NEW_RETURN_AFTER_CLICK_THROUGH":"TRUE","LAZY_LOAD_PCODE":{"fetchMargin":150,"mobileScaling":2},"SMART_QUEUE_EXP_BLACK_LIST":["mail.ru","yandex.ru/images","yandex.ru/games","dzen.ru","avito.ru","m.avito.ru","dni.ru","mail.yandex.ru","razlozhi.ru","zr.ru","ura.news","razlozhi.ru","jaomix.ru"],"USE_BK_SIZE_FULLSCREEN":"exp","USE_BK_SIZE_FLOORAD":"exp","NATIVE_MERGE_MEDIA_TAGS":"exp","USE_FEED_REACTIONS":"exp","ADFOX_BANNER_INPAGE_TO_PLAYBACK_CONTROLLER":"exp","ADFOX_BANNER_INPAGE_ENABLE_NEW_SKIN":"exp","SET_DEFAULT_PAGE_NUMBER":"exp","VAS_RETRY_ON_NETWORK_ERROR":"TRUE","VAS_ENABLE_SCALE_LIKE_SURVEY_NEW_DESIGN":"TRUE","VAS_ENABLE_SURVEY_NEW_DESIGN":"TRUE","ADSDKVER":"750967","CONSTRUCTOR_REVERSE_WARNING":"exp","CONSTRUCTOR_INCREASE_PRICE_WEIGHT":"ctl","SSP_SERVER_TEMPLATE":"exp","CONSTRUCTOR_IMAGE_SIZE_PRIORITY":"ctl","PCODEVER":"750986"},"flagsMap":{"VAS_SHOW_AD_LABEL_FOR_IN_BANNER":[{"value":"TRUE","testId":"663347"}],"VAS_SHOW_PRODUCTS_ON_PAUSE":[{"value":"TRUE","testId":"719437"}],"ENABLE_ECOM_PRODUCTS_LIST_IN_VIDEO_IN_COMBO_ARM":[{"value":"exp","testId":"719535"}],"DISABLE_COUNT_REDIRECT_INAPP":[{"value":"TRUE","testId":"720442"}],"VAS_USE_MULTIROLL_CONTROLLER_WATCHED_TIME_OFFSET":[{"value":"TRUE","testId":"732077"}],"VAS_BUTTON_COLOR":[{"value":"#37f","testId":"736956"}],"PCODE_BUTTON_COLOR_FOR_VIDEO_IN_COMBO":[{"value":"#37f","testId":"736956"}],"VAS_SHOW_TITLE_AND_BODY_AD_PARAMETER_DEFAULT":[{"value":"FALSE","testId":"747467"}],"VAS_STABLE_VERSION":[{"value":"749305","testId":"750684"}],"UNILOADER_FOR_AMP":[{"value":true,"testId":"428390"}],"USE_SSR_IN_AMP":[{"value":"exp","testId":"428390"}],"AD_SEEN_OBSERVER":[{"value":"enable","testId":"436297"}],"FIX_MIN_HEIGHT_NTP":[{"value":"exp","testId":"445391"}],"YANDEX_RU_DOMAIN":[{"value":"exp","testId":"507236"}],"FIX_BROKEN_NTP_GRID":[{"value":"exp","testId":"517586"}],"YANDEX_RU_DOMAIN_DISTRIB":[{"value":"exp","testId":"521064"}],"ZEN2_FULL_WIDTH_IMAGE":[{"value":"exp","testId":"541480"}],"ZEN2_DISABLE_BORDER_RADIUS ":[{"value":"exp","testId":"541480"}],"YARU_DISTRIB_ALWAYS":[{"value":"exp","testId":"543791"}],"DFP_RESPONSE_TIMEOUT":[{"value":"2000","testId":"544034"}],"PCODE_CONSENT":[{"value":"exp","testId":"545200"}],"ADFOX_RELOAD_TIMEOUT_EXP":[{"value":"exp","testId":"544772"}],"ADFOX_RELOAD_IF_AD_WAS_SEEN":[{"value":"exp","testId":"544772"}],"ADFOX_RELOAD_TIMEOUT_VALUE":[{"value":30,"testId":"544772"}],"LEARN_MORE_VARIANT":[{"value":"2","testId":"550091"}],"PRIORITY_BY_VIEWPORT":[{"value":"exp","testId":"567690"}],"DISABLE_DIRECT_CSR":[{"value":"exp","testId":"591784"}],"ZEN2_IS_CARROT_ACCENTS":[{"value":true,"testId":"593511"}],"ZEN2_IS_IMAGES_WITHOUT_PADDINGS":[{"value":true,"testId":"594540"}],"COUNTER_TYPE_3":[{"value":"exp","testId":"594875"}],"ADFOX_MRC_VISIBILITY":[{"value":true,"testId":"594976"}],"ADFOX_MRC_VISIBILITY_ON_CLICK":[{"value":"exp","testId":"594976"}],"MULTIBANNER_UNIFIED_INTERFACE":[{"value":"exp","testId":"598277"}],"ADFOX_BANNER_VIDEO_TO_AD_PLAYBACK_CONTROLLER":[{"value":"exp","testId":"602432"}],"ZEN2_IS_HEADER_REDESIGN":[{"value":"exp","testId":"615260"}],"NEW_REFRESH_LOGIC":[{"value":"exp","testId":"618364"}],"CONFIRM_BY_RENDER_FOR_PREBID":[{"value":"exp","testId":"621021"}],"DISABLE_USERAGENT_CHECK_FULLSCREEN_SSP":[{"value":"exp","testId":"619144"}],"ENABLE_VIDEO_IN_COMBO_DEFAULT_INFINITE_PACKSHOT":[{"value":"exp","testId":"645066"}],"DISABLE_SMART_QUEUE_IN_SSP":[{"value":"exp","testId":"656665"}],"VAS_THROW_VIDEO_IN_COMBO_ERROR_ON_INVALID_SLOT":[{"value":"exp","testId":"671732"}],"CALL_ONRENDER_AFTER_IFRAME_LOADED":[{"value":"exp","testId":"678969"}],"USE_FRIENDLY_FRAME_IN_APP":[{"value":"exp","testId":"678969"}],"USE_BK_SIZE":[{"value":"exp","testId":"669344"}],"USE_BK_SIZES_FOR_VIDEO_IN_COMBO":[{"value":"exp","testId":"679407"}],"USE_LEAD_FORM":[{"value":"exp","testId":"668461"}],"USE_BK_SIZE_MEDIA":[{"value":"exp","testId":"672202"}],"FULLSCREEN_GRID_DESKTOP":[{"value":"exp","testId":"686413"}],"CONSTRUCTOR_SSP_320_FULL_CLICKABLE_BANNER":[{"value":"exp","testId":"687831"}],"USE_BK_SIZE_TGA":[{"value":"exp","testId":"689681"}],"ENABLE_NEW_DESIGN_FOR_VIDEO_IN_COMBO_WITH_ARM":[{"value":"exp","testId":"692680"}],"SMART_SKIP_TRACK_CLICK":[{"value":"exp","testId":"699430"}],"VIDEO_IN_COMBO_FLOOR_AD_ENABLE":[{"value":"exp","testId":"699832"}],"VIDEO_IN_COMBO_FLOOR_AD_SIZES":[{"value":"fix_max_height","testId":"699832"}],"INAPP_KEBAB_FIX":[{"value":"exp","testId":"704872"}],"CALL_ONERROR_WHEN_FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED":[{"value":"exp","testId":"710475"}],"RR_NEW_RETURN_AFTER_CLICK_THROUGH":[{"value":"TRUE","testId":"711049"}],"LAZY_LOAD_PCODE":[{"value":{"fetchMargin":150,"mobileScaling":2},"testId":"715827"}],"SMART_QUEUE_EXP_BLACK_LIST":[{"value":["mail.ru","yandex.ru/images","yandex.ru/games","dzen.ru","avito.ru","m.avito.ru","dni.ru","mail.yandex.ru","razlozhi.ru","zr.ru","ura.news","razlozhi.ru","jaomix.ru"],"testId":"715827"}],"USE_BK_SIZE_FULLSCREEN":[{"value":"exp","testId":"716430"}],"USE_BK_SIZE_FLOORAD":[{"value":"exp","testId":"716431"}],"NATIVE_MERGE_MEDIA_TAGS":[{"value":"exp","testId":"732261"}],"USE_FEED_REACTIONS":[{"value":"exp","testId":"735302"}],"ADFOX_BANNER_INPAGE_TO_PLAYBACK_CONTROLLER":[{"value":"exp","testId":"736368"}],"ADFOX_BANNER_INPAGE_ENABLE_NEW_SKIN":[{"value":"exp","testId":"736368"}],"SET_DEFAULT_PAGE_NUMBER":[{"value":"exp","testId":"751370"}],"VAS_RETRY_ON_NETWORK_ERROR":[{"value":"TRUE","testId":"746436"}],"VAS_ENABLE_SCALE_LIKE_SURVEY_NEW_DESIGN":[{"value":"TRUE","testId":"741891"}],"VAS_ENABLE_SURVEY_NEW_DESIGN":[{"value":"TRUE","testId":"741891"}],"ADSDKVER":[{"value":"750967","testId":"750967"}],"CONSTRUCTOR_REVERSE_WARNING":[{"value":"exp","testId":"751703"}],"CONSTRUCTOR_INCREASE_PRICE_WEIGHT":[{"value":"ctl","testId":"749008"}],"SSP_SERVER_TEMPLATE":[{"value":"exp","testId":"734894"}],"CONSTRUCTOR_IMAGE_SIZE_PRIORITY":[{"value":"ctl","testId":"751303"}],"PCODEVER":[{"value":"750986","testId":"750986"}]},"flagsMapCompressed":"eJydWNty2zYQ/ZWO+ppJeQVJv4EkKGFEEiwAWlEyGYwSK7Y6vnQcO3Wdyb93QVASKdlQmifTtPdgsXt2zy6/T86xUGLGFgrnqsQpKVXBuKK1SnFdEz45+/B98m11/bienE0kb8nkzeRh/fWBXsDvCPl+EE1+fHyzh2k4y9tMCsVq1eBWECtC5CaBbxBIjdOSKJKxag9SUiG1M+c0J0w/wF9TpjCvRrDrp78PUEM/7FBzKjrYjLW1VJzklJNMQ+KmsXvmOUHg7e4GF1FVW0rKWVkCWi31A+FqgWU2I7mStCKKFYUg0o7re060j1naSsn0tUo2jvXvfvRlbIeSEHV2TcZyMrLscjaO0c+C7RInqYQ44TpXKcuXmg4N5rgiEi6ZkwLD5UeYBS7F+GZBFKABG2QX+HPCBWX1yDQKEt8JR7ahg+Kgs21rWjKcE3MpXI3S9HD/uB6YBV7sJ44xgwQJ0TH3wOaQHQMjuKQgpFYsFYSfH7B9fbv6dL0eWfrIS8wNC/pOVXDWjNDpTKpa2o8MQj9xO8MlRJi8U7xVOaswrW1moRN5Ptqdl3I2B2fhLDXlNLdaulEYoxcPVFASktPUau65DjLpeE9qTxUtkH5BczlTtMJTYrUN3CB29rbbCkwZ10nlOKet+O0nEZZY+20cVrhc4KWwW/pRH+e8aKDcRcNqIIYuTtaO+es5jjO2DRw/GBRYpk1raT8vBJieSgWDKBPN3e15iryz0gKOjCLv2JwWuvwWuoiAnb+CsHXgHJftKFu+87J1STCvVcU4VCzmFB/c2xsdGjpOH+WGU8apXKp0Cf2HLBrG7QFDEeprb8uLviNnglsNEzeKB4ykQmWYcyYVzjLIkrB0iTDxQ9cd2XYsFkBpOdNhanCe03pqBwnCwHjeaQlQWS4bony710EchYP0VDyDOAma0hKiZj8uidCrllpds5Jm8xOnbzE66TKKrqDBFhQUi+pLFDizV3MSe71cGT96ECM2knU6UeJlirP5QBZtkMjxAt8bpWNGuoYP8kwEnVoZj9zQQyYPNVmASQFVPlMlm9LMbhf7fUsDNwvKK81ZTuqt0jScpPamiqAreu6IvKA6HJgEowUMARAB3ShFxrWmCGGtfeQmbhAMJ5+DGafXXHhR0JpKAiTN5qDU1vpCAQgpGrkoKsyl+rMlLdHgp9wKEULhTsTljMNocOAZgbrjmoG0hv5CQUPLE15FbtRnPMOgJKzu444LXUe00HOG6lTfnoAoTlCyk/uCU4Apl8rYa+Vv7Jcb26dzJeh7K/0RSvw+SwMLcWreOjo3CZxohwK9NtcI1hkWwTyE3MOTVQUTLLaf5XmOifWAjHpeAEaJuWT2CMUocP1tlYDswhQOVwXSKJhbzRzQ9R0j6ccrwhFeFPvHt5BT+x0gTbE7rA1d6qY3vBD6ro2f2glQ4qF+qDAVIea0UZJ3fetUJ0UJrCnG+ODoomR6Ss2VcfQESNxXwWsgHblGGF82T+pm9aSu1pvLq4dX4LptRs1JilMFg6J1NXJAkUalaKp5MQOWDAhTg7J2fXLaQlfWywb0yozQc3uFRq4T9ILHuTINWrYwWZhK7wLdNZV2OjuxGAKSKdUSv192zUF1c9nQ7Pvky/rh81W1ur/c3E7O3BCmm5u7T5vrtfi8ut7cXk7OvB8j1BDkbEAC0xZhTFNpqZmg983hAR8mN6vN9dv7R/Dt39XtxfoJnv/Y3Kwu119Hry5XN92bi+f1rfn31bfNw515vHk7+OXidtO/1cg7BHhxv3q+vnu+6v/8fG9+Pt6v3t6u//l69A9/re5uNp3px5evOKy4fWrt6UNbno+MNT/xicSDpSnZGkugCXQqPu37lZJ4ap3bQR28QbMrCFCOE5xJ2BxPGIa+4x2PJ7RuQJb1fPI/hxPYjH0Uvwo4aEfQP+yx3CMJIndy3sHUbZWe8CN0/cjZ6TBUEe+GvprIBeNzo8H2CgogI/sdv/dcQNWDAtE5PLaw8i4HrfUEnBv3Q/8Q7lcxcC7y+eHGHYVOgqKD7wJJ/01hqEec6M8KBFYkXsPcfiKQkXOsaLSGYsAAARtMBkDdGj/C+fxwPfY9cZw+naCG5nuBkqQCgklr34/8IE6CYw/0CmLqa7tFWc8HQvT36NrgS7GDjf8gdt03gB//AdYn2LQ=","testIds":"657519,0,85;746436,0,35;741891,0,23;750967,0,37;751703,0,62;749008,0,0;734894,0,45;751303,0,38;750986,0,98","isDryRun":false,"pcodever":"750986","adsdkver":"750967","yawProduct":"ads","route":"context","uri":"/pcode?route=context","query":{"route":"context"},"device":"desktop","iCookie":"M9Zx/gYccW81vf24xs/HjhSNxTGeBSl2tUtGZLfXTxydhYnjsC/QPAJcUr8E/qyreYQVmDnCFoS+PagXYrluTEBYHjA=","isInternalNetwork":false,"isStickyVersion":false,"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.0.2246 Yowser/2.5 Safari/537.36","src_domain":"ya","rrActiveTestIds":[]}')
                    } catch (e) {} finally {
                        if (e.isInternalNetwork) {
                            var t = (0, n(42288).wD)();
                            (0, n(36484).x)(t) || (e.flags = a(a({}, e.flags), t))
                        }
                    }
                    return e
                };
                var s = (0, n(94532).once)(t.parseConfig);
                t.setMeta = function(e) {
                    e.flags && (r = e.flags), e.flagsMap && (i = e.flagsMap), e.testIds && (o = e.testIds)
                };
                t.getUaasConfig = function() {
                    var e = s();
                    return e.flags = r || e.flags, e.flagsMap = i || e.flagsMap, e.testIds = o || e.testIds, e
                }, t.getFlagsIdsMap = (0, n(94532).once)((function() {
                    var e = (0, t.getUaasConfig)().flagsMap,
                        r = {};
                    return (0, n(38715).forOwn)(e, (function(e, t) {
                        (0, n(15137).forEach)(e, (function(e) {
                            var n = e.testId;
                            r[t] = n
                        }))
                    })), r
                })), t.getTestIds = (0, n(94532).once)((function() {
                    var e = (0, t.getUaasConfig)().testIds.split(";");
                    return (0, n(15735).map)(e, (function(e) {
                        return e.split(",")[0]
                    }))
                }));
                t.getUaasFlags = function() {
                    var e = s();
                    return r || e.flags
                };
                t.getUaasIsInternalNetwork = function() {
                    return s().isInternalNetwork
                }
            },
            30878: (e, t) => {
                "use strict";
                t.Ww = t.vT = t.cF = t.Ng = t.pv = t.f2 = void 0;
                var n = function() {
                    function e(e, t) {
                        if (void 0 === t && (t = document.location.search), this.current = 0, "undefined" != typeof URLSearchParams) {
                            var n = new URLSearchParams(t);
                            this.aims = n.getAll(e)
                        } else this.aims = []
                    }
                    return e.prototype.all = function() {
                        return this.aims
                    }, e.prototype.next = function() {
                        var e = this.aims[this.current];
                        return this.current++, this.current === this.aims.length && (this.current = 0), e
                    }, e
                }();
                t.f2 = new n("aim-banner-id"), t.pv = new n("aim-design-id"), t.Ng = new n("aim-subdesign-id"), t.cF = new n("aim-design-name"), t.vT = new n("disabled-product-types"), t.Ww = new n("enable-page-options")
            },
            42288: (e, t, n) => {
                "use strict";
                var r;
                t.yf = t.h2 = t.iR = t.U$ = t.wD = void 0;
                var o = (0, n(70008).HP)((function(e) {
                        return {
                            search: (0, n(28377).parseQueryString)(e.search),
                            hash: (0, n(28377).parseQueryString)(e.hash)
                        }
                    })),
                    i = n(73266).isAMP && (null === (r = window.context) || void 0 === r ? void 0 : r.location) || window.location,
                    a = function(e) {
                        var t = e.paramName,
                            n = e.location,
                            r = void 0 === n ? window.location : n,
                            i = e.valueTransform,
                            a = void 0 === i ? function(e) {
                                return e
                            } : i,
                            s = o(r),
                            c = s.search,
                            u = s.hash;
                        return a(t in c ? c[t] : t in u ? u[t] : null)
                    };
                t.wD = function(e) {
                    void 0 === e && (e = i);
                    var t = {};
                    null !== a({
                        paramName: "pcode-test-flags",
                        location: e
                    }) && a({
                        paramName: "pcode-test-flags",
                        location: e
                    }).split(";").forEach((function(e) {
                        var r = e.split("=");
                        if (r[0]) {
                            var o = r[1];
                            try {
                                o = n.lv["json"].parse(o)
                            } catch (e) {}
                            t[r[0]] = o
                        }
                    }));
                    return t
                };
                t.U$ = function(e) {
                    void 0 === e && (e = i);
                    return a({
                        paramName: "pcodeDebug",
                        location: e,
                        valueTransform: Boolean
                    }) || !1
                }, t.iR = (0, t.U$)();
                t.h2 = function(e) {
                    return void 0 === e && (e = i), a({
                        paramName: "ya_ad_debug",
                        location: e,
                        valueTransform: Boolean
                    })
                }(), t.yf = a({
                    paramName: "yan_console",
                    location: i,
                    valueTransform: function(e) {
                        return null !== e
                    }
                })
            },
            29479: (e, t, n) => {
                "use strict";
                t.W = void 0;
                t.W = function() {
                    n.lv.json = (0, n(95121).LA)()
                }
            },
            99057: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.C = void 0;
                var o, i, a = {};
                var s = function() {
                    function e() {}
                    return e.prototype.render = function(e, t) {
                        d("render", e, t)
                    }, e.prototype.preload = function(e, t) {
                        d("preload", e, t)
                    }, e.prototype.renderWidget = function(e) {
                        var t = (0, n(10974).prepareWidgetConfig)(e);
                        d("renderWidget", r({}, t))
                    }, e.prototype.renderFeed = function(e) {
                        (0, n(43142).u)(e)
                    }, e.prototype.getSkipToken = function(e) {
                        return u((function(t) {
                            return t.getSkipToken(e)
                        })) || ""
                    }, e.prototype.getCapturedCount = function() {
                        return u((function(e) {
                            return e.getCapturedCount()
                        })) || 0
                    }, e.prototype.getAdSessionId = function() {
                        return (0, n(49131).getSessionId)()
                    }, e.prototype.getBlocks = function() {
                        return (0, n(74472).getAllBlocksInfo)()
                    }, e.prototype.destroy = function(e) {
                        return n(49874).logger.traceLog({
                            href: window.location.href,
                            filter: e
                        }, "PCODE_DESTROY_CALL", 100), u((function(t) {
                            return t.destroy(e)
                        }))
                    }, e
                }();

                function c(e) {
                    var t;
                    t = e, o ? t(o) : (i || (i = (0, n(86188).w)()).then((function(e) {
                        o = e
                    }), n(85225).noop), i.then((function() {
                        t(o)
                    }), n(85225).noop))
                }

                function u(e) {
                    if (o) return e(o)
                }

                function d(e, t, o) {
                    var i, s, u, d, l, f, p, h, v, g, _, m, y, b, E, w, O;
                    if (!(0, n(70585).q)({
                        window,
                        platform: t.platform,
                        type: t.type
                    })) {
                        t.pageNumber || "exp" !== (0, n(88772).useExperimentFlag)("SET_DEFAULT_PAGE_NUMBER") || (t.pageNumber = t.renderTo);
                        var S, I = (0, n(85384).isCustomBannerTypeAndExp)(t.type),
                            A = {
                                type: t.type,
                                markBannerDomNode: t.markBannerDomNode,
                                position: t.position,
                                offset: t.offset,
                                zIndex: t.zIndex,
                                key: t.adfoxContainerId ? t.adfoxContainerId : t.blockId
                            };
                        if (I) {
                            var T = (0, n(2868).initRenderDomNodeExp)(A);
                            T && (t.renderTo = T.id, t.renderToDomNode = T.node)
                        } else {
                            var R = (0, n(73150).initRenderDomNode)(A);
                            R && (t.renderTo = R)
                        }
                        t.uniqueId ? S = (0, n(74472).getPlacement)(t.uniqueId) : ((t = r({}, t)).uniqueId = (0, n(66648).generateHexString)(10), t.slotIndex = (0, n(28255).increaseCounter)(), (S = (0, n(74472).registerPlacement)(t.uniqueId)).setCallbacks({
                            onError: t.onError,
                            onClick: t.onClick,
                            onRender: t.onRender,
                            onPreload: t.onPreload,
                            altCallback: t.altCallback || o,
                            preClick: t.preClick
                        }), S.setSkipTokenSettings(t.allowRepeatAds), S.setBlockId(t.blockId || ""), S.setContainer(t.renderTo), S.setAdfoxContainerId(t.adfoxContainerId), S.setAdditional({
                            slotIndex: t.slotIndex,
                            posInQueue: 0,
                            isPreload: "preload" === e,
                            disableFullscreenCloseButton: t.disableFullscreenCloseButton
                        }), I && (S.setBannerType(t.type), t.renderToDomNode && S.setContainerDomNode(t.renderToDomNode)));
                        var C = (new Date).getTime() / 1e3;
                        if ((0, n(30289).canMakeRequest)(t.blockId || "", C)) {
                            (0, n(41486).isString)(t.renderData) && (t.renderData = n.lv["json"].parse(t.renderData)), t.extParams && !(0, n(81721).V)(document.location.host) && delete t.extParams;
                            var N = (0, n(44751).parseBlockId)(t.blockId || "");
                            if (N.pageId = N.pageId || t.pageId || null, N.impId = N.impId || t.blockImpId || null, t.renderData ? (0, n(9809).logSSPEvent)("SSP_EXP_RENDER", t.renderData) : "ssp" === t.bundle && t.data && ((0, n(9809).logSSPEvent)("SSP_CTRL_RENDER", t.data), (0, n(9809).logSSPErrorEvent)("SSP_RENDER_INFO", {
                                mode: document.compatMode,
                                html: document.documentElement.innerHTML,
                                href: document.location.href,
                                rawData: t.data,
                                bidreqid: (null === (u = null === (s = t.data) || void 0 === s ? void 0 : s.rtb) || void 0 === u ? void 0 : u.bidreqid) || "",
                                productType: (null === (l = null === (d = t.data) || void 0 === d ? void 0 : d.common) || void 0 === l ? void 0 : l.productType) || "",
                                adIds: null === (p = null === (f = t.data) || void 0 === f ? void 0 : f.settings) || void 0 === p ? void 0 : p.bannerIds,
                                hitLogId: null === (v = null === (h = t.data) || void 0 === h ? void 0 : h.eventConfirmationData) || void 0 === v ? void 0 : v.HitLogID
                            }, 1)), S.isValid()) {
                                var D = S.getRenderToElement();
                                if (!D) {
                                    var x = 'Container with id "'.concat(S.renderTo, '" is not found (init)');
                                    return S.callbacks.triggerError("CONTAINER_NOT_FOUND", x), void n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {
                                        text: x,
                                        pageId: S.blockId.pageId,
                                        blockId: S.blockId.origin,
                                        renderTo: S.renderTo
                                    })
                                }
                                if ((0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.AdvManagerLoader), (0, n(74192).initAdSeenObserver)(t.uniqueId, D), (0, n(16429).C)(t), (0, n(1164).Ac)() && (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.ContextJs), t.adSessionId && (0, n(49131).setSessionId)(t.adSessionId), (0, n(64809).saveBundleType)(t.data, t.bundle), (0, n(64809).checkBundleIsSSP)()) {
                                    var P = t.renderData || t.data;
                                    window.__sspbidreqid = null === (g = null == P ? void 0 : P.rtb) || void 0 === g ? void 0 : g.bidreqid, window.__ssphitlogid = null === (_ = null == P ? void 0 : P.eventConfirmationData) || void 0 === _ ? void 0 : _.HitLogID, (0, n(64491).h)(P), (0, n(3432).J)(P, t.type)
                                }(0, n(56240).setMeta)({
                                    flags: null === (y = null === (m = null == t ? void 0 : t.data) || void 0 === m ? void 0 : m.common) || void 0 === y ? void 0 : y.flags,
                                    flagsMap: null === (E = null === (b = null == t ? void 0 : t.data) || void 0 === b ? void 0 : b.common) || void 0 === E ? void 0 : E.flagsMap,
                                    testIds: null === (O = null === (w = null == t ? void 0 : t.data) || void 0 === w ? void 0 : w.common) || void 0 === O ? void 0 : O.testIds
                                });
                                var L = function(e, i) {
                                    void 0 === i && (i = n(85225).noop), (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.DataLoaded), c((function(a) {
                                        (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.AdvManagerLoaded), a.render(r({}, e), o), i()
                                    }))
                                };
                                n(49874).logger.configure({
                                    labels: {
                                        pageId: (0, n(36087).getServiceName)()
                                    },
                                    data: {
                                        blockId: t.blockId,
                                        pageId: S.blockId.pageId
                                    }
                                });
                                var M = S.blockId.product;
                                switch (M) {
                                    case "R":
                                    case "N":
                                    case "D":
                                        ! function(e, t) {
                                            var r = "".concat(e.blockId, "#").concat(e.pageNumber || "");
                                            r in a || (a[r] = new(n(60091).b)), a[r].setConfig(e), t(a[r])
                                        }(t, (function(e) {
                                            e.loadData((function(e, t) {
                                                var r = (0, n(45815).aH)(e);
                                                if (r) {
                                                    var o = (0, n(45815).jn)(r, e.blockId || "unknown");
                                                    if (n(49874).logger.errorStrict("RESPONSE_MISMATCH_BANNER_CFG", {
                                                        text: o,
                                                        pageId: S.blockId.pageId,
                                                        blockId: S.blockId.origin,
                                                        renderTo: S.renderTo
                                                    }), r === n(45815).K.FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED && !e.isAdfox && !(0, n(64809).checkBundleIsSSP)() && !(0, n(64809).checkBundleIsMobilSdk)() && "exp" === (0, n(88772).useExperimentFlag)("CALL_ONERROR_WHEN_FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED") || !(0, n(63607).isMobile)() || "exp" === (0, n(88772).useExperimentFlag)("USE_FS_MOBILE_BANNER_MISMATCH_CHECKING")) return void(null == S || S.callbacks.triggerError("RESPONSE_MISMATCH_BANNER_CFG", o))
                                                }
                                                S.additionals.isPreload ? ((0, n(26413).isFunction)(t) && t(), "fullscreen" === e.type ? L(e) : S.callbacks.triggerOnPreload((function() {
                                                    L(e)
                                                }))) : L(e, t)
                                            }))
                                        }));
                                        break;
                                    case "Y":
                                        L(t);
                                        break;
                                    default:
                                        x = 'Block type "'.concat(M, '" is not supported');
                                        S.callbacks.triggerError("UNKNOWN_BLOCK_TYPE", x), n(49874).logger.errorStrict("UNKNOWN_BLOCK_TYPE", {
                                            text: x,
                                            blockId: t.blockId
                                        })
                                }
                            } else(0, n(74472).destroyPlacement)(t.uniqueId)
                        } else null === (i = null == S ? void 0 : S.callbacks) || void 0 === i || i.triggerAltCallback()
                    }
                }
                t.C = s
            },
            76079: (e, t, n) => {
                "use strict";
                t.c = void 0, t.c = function() {
                    var e = (0, n(38710).getYa)();
                    void 0 === e.codeVer && (e.codeVer = 751013, (0, n(56240).getUaasConfig)(), (0, n(40817).nH)("Loader version: ".concat(751013), "codever"), (0, n(40817).nH)("Adb: ".concat(!1), "adb"))
                }
            },
            60572: (e, t, n) => {
                "use strict";
                t.A = void 0;
                var r, o = ["preload", "render", "renderWidget", "renderFeed", "getSkipToken", "getCapturedCount", "getAdSessionId", "getBlocks", "destroy"];
                t.A = function() {
                    if (!r) {
                        r = new(n(99057).C);
                        for (var e = {}, t = 0, i = function() {
                            var i = o[t++];
                            e[i] = (0, n(12251).protect)("".concat(n(12251).ProtectedNames.AdvManager, ".").concat(i), (function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return r[i].apply(r, e)
                            }))
                        }; t < o.length;) i();
                        (0, n(38710).getYaContext)()["AdvManager"] = e
                    }
                }
            },
            40755: (e, t, n) => {
                "use strict";
                t.jI = t.xD = void 0, t.xD = ["yandexContextSyncCallbacks", "yandex_context_callbacks", "yandexContextAsyncCallbacks", "yaContextCb"];
                var r = function() {
                    function e(e, t) {
                        this.queueId = t, (0, n(85200).isArray)(e) || (e = []), this.push.apply(this, e)
                    }
                    return e.prototype.push = function() {
                        for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        t.length && (0, n(55220).X0)(this.queueId);
                        var o = (0, n(38710).getYaContext)(),
                            i = o._load_callbacks || o._callbacks;
                        (0, n(15137).forEach)(t, (function(t) {
                            try {
                                t.queueName = e.queueId
                            } catch (e) {
                                (0, n(85225).noop)()
                            }
                            i.push(t)
                        })), setTimeout((function() {
                            o.processCallbacks()
                        }))
                    }, e
                }();
                t.jI = function(e) {
                    void 0 === e && (e = window);
                    for (var o = function(o) {
                        var i = t.xD[o],
                            a = e[i];
                        if ((0, n(55220).ji)(i), !(a instanceof r)) {
                            var s = new r(a, i);
                            Object.defineProperty(e, i, {
                                set: function(t) {
                                    s.push.apply(s, t), e[i] !== t && console.warn("\u041f\u0435\u0440\u0435\u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044c window.".concat(i, " \u043e\u043f\u0430\u0441\u043d\u043e"))
                                },
                                get: function() {
                                    return s
                                }
                            })
                        }
                    }, i = 0; i < t.xD.length; i++) o(i)
                }
            },
            25479: (e, t, n) => {
                "use strict";
                t.Q = void 0;
                t.Q = function() {
                    var e, t = (0, n(38710).getYaContext)(),
                        r = t._load_callbacks ? "_load_callbacks" : "_callbacks";
                    t.processCallbacks = (0, n(12251).protect)("Ya.context.".concat(r), (e = r, function() {
                        for (var t = (0, n(38710).getYaContext)(), r = 0; r < t[e].length; r++)(0, n(12251).protect)("Ya.context.".concat(e, "_call"), t[e][r])();
                        t[e] = []
                    }))
                }
            },
            43142: (e, t, n) => {
                "use strict";
                t.u = void 0, t.u = function(e) {
                    (0, n(18621).v)().then((function(t) {
                        var r = (0, n(5989).getElementById)(e.renderTo);
                        if (r) {
                            var o = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
                                i = (0, n(34403).getBoundingClientRect)(r),
                                a = i.bottom,
                                s = i.width;
                            if ((o - (a + window.scrollY)) / window.innerHeight > 2) {
                                c = "Feed should be located at the bottom of the site";
                                n(49874).logger.errorStrict("FEED_CONTAINER_NOT_AT_THE_BOTTOM", {
                                    text: c,
                                    renderTo: e.renderTo
                                })
                            } else t({
                                cfg: e,
                                columnCount: e.columnCount,
                                adCount: n(50880).isMobile ? n(9743).FEED_DEFAULT_COUNT_ADS_MOBILE : n(9743).FEED_DEFAULT_COUNT_ADS_DESKTOP,
                                limit: n(9743).FEED_LIMIT,
                                wrapperWidth: s
                            }, r)
                        } else {
                            var c = "Feed container is not found";
                            n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {
                                text: c,
                                renderTo: e.renderTo
                            })
                        }
                    }))
                }
            },
            73150: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initRenderDomNode = t.getRenderDomNodeForFullscreen = t.getCurrentNodeKey = void 0;
                var o = {},
                    i = {
                        fullscreen: n(93420).d - 2,
                        floorAd: n(93420).d - 4,
                        topAd: n(93420).d - 4
                    },
                    a = function(e) {
                        var t = e.type,
                            o = e.offset,
                            a = e.zIndex,
                            s = document.createElement("DIV"),
                            c = document.createElement("DIV");
                        c.id = "fa".concat((0, n(66648).generateHexString)(8));
                        var u, d = "fullscreen" === t,
                            l = "topAd" === t || "floorAd" === t,
                            f = (0, n(57003).normalizeOffset)(o),
                            p = (0, n(57003).normalizeZIndex)(a),
                            h = "topAd" === t,
                            v = d ? {
                                width: "100%",
                                height: "100%"
                            } : (0, n(50102).getFloorAdBannerStyles)({
                                isTopAd: h
                            });
                        switch ((0, n(12139).setStyle)(c, v, !0), t) {
                            case "topAd":
                            case "floorAd":
                                u = {
                                    height: "".concat((0, n(57003).getFloorAdOuterNodeHeight)({
                                        isTopAd: h
                                    }), "px"),
                                    width: n(9417).FLOOR_AD_OUTER_NODE_WIDTH
                                };
                                break;
                            case "fullscreen":
                                var g = (0, n(16714).PN)({
                                        screenHeight: window.innerHeight,
                                        screenWidth: window.innerWidth,
                                        isMobile: (0, n(63607).isMobile)()
                                    }),
                                    _ = g.width,
                                    m = g.height;
                                u = {
                                    width: "".concat(_, "px"),
                                    height: "".concat(m, "px")
                                }, (0, n(41110).on)(window, "resize", (0, n(37598).throttle)((function() {
                                    return function(e) {
                                        if (!e) return;
                                        var t = (0, n(32688).getStyle)(e),
                                            r = (0, n(52544).getWindowSize)();
                                        if ((0, n(67299).parseNumber)(t.width) < (0, n(67299).parseNumber)(t.height) != r.width < r.height) {
                                            var o = (0, n(16714).PN)({
                                                    screenHeight: r.height,
                                                    screenWidth: r.width,
                                                    isMobile: (0, n(63607).isMobile)()
                                                }),
                                                i = o.width,
                                                a = o.height;
                                            (0, n(12139).setStyle)(e, {
                                                width: i,
                                                height: a
                                            }, !0)
                                        }
                                    }(s)
                                }), 150))
                        }
                        return (0, n(12139).setStyle)(s, r(r({
                            position: "fixed",
                            left: 0,
                            right: 0,
                            bottom: "-".concat(u.height),
                            "z-index": i[t] || n(93420).d,
                            "line-height": "initial"
                        }, l ? (0, n(50102).getOuterContainerFloorAdStyles)({
                            zIndex: p,
                            offset: f,
                            isTopAd: h
                        }) : {}), u), !0), s.append(c), document.body.appendChild(s), {
                            outerNode: s,
                            renderNode: c
                        }
                    },
                    s = function(e) {
                        var t = e.type,
                            n = e.markBannerDomNode,
                            r = c(t, e.key),
                            i = o[r];
                        if (i) {
                            var s = i.outerNode,
                                u = i.renderNode;
                            if (s && s.parentElement) return u
                        }
                        var d = a(e);
                        o[r] = d;
                        var l = d.renderNode,
                            f = d.outerNode;
                        return n && f.setAttribute("data-banner-dom-node", n), l
                    };

                function c(e, t) {
                    return "floorAd" === e || "topAd" === e ? "stickyAd" : t || e
                }
                t.getCurrentNodeKey = c;
                t.getRenderDomNodeForFullscreen = function(e) {
                    return s(r({
                        type: "fullscreen"
                    }, e))
                };
                t.initRenderDomNode = function(e) {
                    var t = e.type;
                    return (0, n(85384).isCustomBannerType)(t) ? s(r(r({}, e), {
                        type: t
                    })).id : null
                }
            },
            2868: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initRenderDomNodeExp = t.getRenderDomNodeForFullscreenExp = t.getRenderDomNode = void 0;
                var o = {},
                    i = {
                        fullscreen: n(93420).d - 2,
                        floorAd: n(93420).d - 4,
                        topAd: n(93420).d - 4
                    },
                    a = function(e) {
                        var t, o = e.type,
                            a = e.offset,
                            s = e.zIndex,
                            c = document.createElement("DIV"),
                            u = document.createElement("DIV");
                        u.id = "fa".concat((0, n(66648).generateHexString)(8));
                        var d, l = "fullscreen" === o,
                            f = "topAd" === o || "floorAd" === o,
                            p = (0, n(57003).normalizeOffset)(a),
                            h = (0, n(57003).normalizeZIndex)(s),
                            v = "topAd" === o,
                            g = l ? {
                                width: "100%",
                                height: "100%"
                            } : (0, n(50102).getFloorAdBannerStyles)({
                                isTopAd: v
                            });
                        switch ((0, n(12139).setStyle)(u, g, !0), o) {
                            case "topAd":
                            case "floorAd":
                                d = {
                                    height: "".concat((0, n(57003).getFloorAdOuterNodeHeight)({
                                        isTopAd: v
                                    }), "px"),
                                    width: n(9417).FLOOR_AD_OUTER_NODE_WIDTH
                                };
                                break;
                            case "fullscreen":
                                var _ = (0, n(16714).PN)({
                                        screenHeight: window.innerHeight,
                                        screenWidth: window.innerWidth,
                                        isMobile: (0, n(63607).isMobile)()
                                    }),
                                    m = _.width,
                                    y = _.height;
                                d = {
                                    width: "".concat(m, "px"),
                                    height: "".concat(y, "px")
                                }, (0, n(41110).on)(window, "resize", (0, n(37598).throttle)((function() {
                                    return function(e) {
                                        if (!e) return;
                                        var t = (0, n(32688).getStyle)(e),
                                            r = (0, n(52544).getWindowSize)();
                                        if ((0, n(67299).parseNumber)(t.width) < (0, n(67299).parseNumber)(t.height) != r.width < r.height) {
                                            var o = (0, n(16714).PN)({
                                                    screenHeight: r.height,
                                                    screenWidth: r.width,
                                                    isMobile: (0, n(63607).isMobile)()
                                                }),
                                                i = o.width,
                                                a = o.height;
                                            (0, n(12139).setStyle)(e, {
                                                width: i,
                                                height: a
                                            }, !0)
                                        }
                                    }(c)
                                }), 150))
                        }
                        return (0, n(12139).setStyle)(c, r(r({
                            position: "fixed",
                            left: 0,
                            right: 0,
                            bottom: "-".concat(d.height),
                            "z-index": i[o] || n(93420).d,
                            "line-height": "initial"
                        }, f ? (0, n(50102).getOuterContainerFloorAdStyles)({
                            zIndex: h,
                            offset: p,
                            isTopAd: v
                        }) : {}), d), !0), (0, n(53945).hasShadowDomSupport)() ? (c.attachShadow({
                            mode: "open"
                        }), null === (t = c.shadowRoot) || void 0 === t || t.appendChild(u)) : c.appendChild(u), document.body.appendChild(c), {
                            renderNode: u,
                            shadowDomNode: c
                        }
                    };
                t.getRenderDomNode = function(e) {
                    var t = e.type,
                        r = e.markBannerDomNode,
                        i = e.key,
                        s = (0, n(73150).getCurrentNodeKey)(t, i),
                        c = o[s];
                    if (c) {
                        var u = c.renderNode,
                            d = c.shadowDomNode;
                        if (d && d.parentElement) return u
                    }
                    var l = a(e);
                    o[s] = l;
                    var f = l.renderNode,
                        p = l.shadowDomNode;
                    return r && p.setAttribute("data-banner-dom-node", r), p && (0, n(7386).isHermione)() && p.setAttribute("data-shadow-dom-root", "true"), f
                };
                t.getRenderDomNodeForFullscreenExp = function(e) {
                    return (0, t.getRenderDomNode)(r({
                        type: "fullscreen"
                    }, e))
                };
                t.initRenderDomNodeExp = function(e) {
                    var o = e.type;
                    if (!(0, n(85384).isCustomBannerTypeAndExp)(o)) return null;
                    var i = (0, t.getRenderDomNode)(r(r({}, e), {
                        type: o
                    }));
                    return {
                        id: i.id,
                        node: i
                    }
                }
            },
            3530: (e, t, n) => {
                "use strict";
                t.i = void 0, t.i = function(e) {
                    var t = e.getAttribute("id");
                    return t || (t = "id" + (0, n(66648).generateHexString)(8), e.setAttribute("id", t)), t
                }
            },
            23449: (e, t, n) => {
                "use strict";
                t.b = void 0, t.b = function(e) {
                    var t = (0, n(59020).R)(e);
                    if ((0, n(85200).isArray)(t) && (t = t[0]), !t) try {
                        t = document.querySelector(e)
                    } catch (e) {}
                    return t ? (0, n(3530).i)(t) : e
                }
            },
            13691: (e, t, n) => {
                "use strict";
                t.n = void 0, t.n = function() {
                    var e = window.yaads,
                        t = window.yaads && window.yaads.destroy;
                    if (!(0, n(85200).isArray)(window.yaads) && window.yaads || (window.yaads = {}, window.yaads.version = "v1", window.yaads.useExperimentFlag = n(88772).useExperimentFlag), window.yaads.push = function(e) {
                        e.method = "renderWidget", Ya.Context.AdvManager.renderWidget(e)
                    }, window.yaads.destroy = function(e) {
                        if ((0, n(41486).isString)(e)) {
                            var r = (0, n(23449).b)(e);
                            (0, n(26413).isFunction)(t) && t.call(window.yaads, e), Ya.Context.AdvManager.destroy({
                                renderTo: r
                            })
                        }
                    }, (0, n(85200).isArray)(e))
                        for (var r = 0; r < e.length; r++) window.yaads.push(e[r])
                }
            },
            10974: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = e.onError || e.reject;
                    return (0, n(26413).isFunction)(e.altCallback) ? e.altCallback : (0, n(26413).isFunction)(t) ? function() {
                        t({
                            message: "Meta has no items",
                            code: "noItemsForWidget",
                            details: {
                                clientError: !0
                            }
                        })
                    } : void 0
                }

                function o(e) {
                    return "".concat(e, "_1")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getPageNumber = t.prepareWidgetConfig = void 0, t.prepareWidgetConfig = function(e) {
                    var t = (0, n(23449).b)(e.renderTo || e.render || ""),
                        i = e.blockId || e.id || "";
                    return 2 === i.split("-").length && (i = "N-I-".concat(i)), "C" === i[0] && (i = i.replace("C", "N")), {
                        renderTo: t,
                        blockId: i,
                        pageNumber: e.pageNumber || o(t),
                        cspNonce: e.cspNonce || e.nonce,
                        onRender: e.onRender || e.success,
                        onError: e.onError || e.reject,
                        onHide: e.onHide || e.hide,
                        nativeAdditionalClasses: e.nativeAdditionalClasses || e.additionalClasses || e.classes,
                        darkTheme: e.darkTheme,
                        method: e.method || "",
                        statId: e.statId,
                        extParams: e.extParams,
                        data: e.data,
                        onClick: e.onClick,
                        clickMacro: e.clickMacro,
                        disableRefresh: e.disableRefresh || void 0,
                        altCallback: r(e)
                    }
                }, t.getPageNumber = o
            },
            21760: (e, t, n) => {
                "use strict";
                t.Z = void 0;
                t.Z = function() {
                    var e = (0, n(38710).getYa)();
                    e.Context || (e.Context = (0, n(38710).initYaContext)()), e.Direct || (e.Direct = (0, n(38710).initYaDirect)())
                }
            },
            37960: (e, t, n) => {
                "use strict";
                t.B = void 0;
                var r = {
                    yastaticAdfox: "yastatic.net/pcode/adfox/loader.js",
                    yastaticContext: "yastatic.net/pcode/context.js",
                    anYandexAdfox: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/adfox\.js/gi,
                    anYandexContext: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/context\.js/gi,
                    anYandexWidget: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/widget\.js/gi,
                    yandexAdfox: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/adfox\.js/gi,
                    yandexContext: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/context\.js/gi,
                    yandexWidget: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/widget\.js/gi,
                    adb: /yandex\.ru\/appcry\/.*/gi,
                    tst: /hamster.yandex.ru\/pcode/gi,
                    tst2: /yastatic.net\/partner-code-bundles\/pcode-beta\//
                };
                "exp" === (0, n(88772).useExperimentFlag)("CHECK_RELOAD_STAT") && (delete r["anYandexWidget"], delete r["yandexWidget"]), t.B = r
            },
            96125: (e, t, n) => {
                "use strict";
                t.f = void 0, t.f = function(e) {
                    for (var t in n(37960).B) {
                        var r = n(37960).B[t];
                        if ((0, n(41486).isString)(r) && e.indexOf(r) > -1) return !1;
                        if (null !== e.match(r)) return !1
                    }
                    return !0
                }
            },
            16429: (e, t, n) => {
                "use strict";
                t.C = void 0;
                t.C = function(e) {
                    var t = e.type,
                        r = e.platform;
                    if ("fullscreen" === t) return n(50880).isMobile && "desktop" !== r && (0, n(57354).loadNewFullscreenController)(), void(n(50880).isMobile || "desktop" !== r || (0, n(57354).loadNewFullscreenController)());
                    "topAd" === t && n(50880).isMobile ? (0, n(12890).loadFloorAdController)() : "floorAd" === t && (n(50880).isMobile && "desktop" !== r && (0, n(12890).loadFloorAdController)(), n(50880).isMobile || "desktop" !== r || (0, n(12890).loadFloorAdController)())
                }
            },
            73133: (e, t, n) => {
                "use strict";
                t.K = void 0, t.K = function() {
                    var e = function() {
                        var e = window;
                        return e.ya = e.ya || {}, e.ya.videoAd = e.ya.videoAd || {}, e.ya.videoAd.statsRootParams = e.ya.videoAd.statsRootParams || {}, e.ya.videoAd.statsRootParams.vsid = n(24440).VSID, e
                    }();
                    e.ya.videoAd.statsRootParams.pcodeVersion = String(751013), e.ya.videoAd.statsRootParams.adfoxVersion = String(751013)
                }
            },
            28255: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.increaseCounter = void 0;
                var r = "slotCounter";
                t.increaseCounter = function() {
                    var e = function() {
                        var e = (0, n(38710).getGlobalVariable)(r);
                        return void 0 === e ? ((0, n(38710).setGlobalVariable)(r, 0), 0) : e
                    }() + 1;
                    return (0, n(38710).setGlobalVariable)(r, e), e
                }
            },
            64491: (e, t, n) => {
                "use strict";
                t.h = void 0, t.h = function(e) {
                    var t = Math.max(0, Math.round(window.innerWidth)),
                        r = Math.max(0, Math.round(window.innerHeight)),
                        o = t > 0 && r > 0,
                        i = null == e ? void 0 : e.settings;
                    if (i) {
                        var a = (0, n(10407).getObjectKeys)(i),
                            s = e.settings[a[0]];
                        if (s) {
                            var c = parseInt(null == s ? void 0 : s.height, 10),
                                u = parseInt(null == s ? void 0 : s.width, 10);
                            o && (u !== t || c !== r) && (s.width = String(t), s.height = String(r))
                        }
                    }
                }
            },
            3432: (e, t, n) => {
                "use strict";
                t.J = void 0, t.J = function(e, t) {
                    var r, o, i, a = window.DISABLE_ADM_PREP || "miss";
                    if (Math.random() < .1 || "miss" !== a) {
                        var s = Math.max(0, Math.round(window.innerWidth)),
                            c = Math.max(0, Math.round(window.innerHeight)),
                            u = function(e) {
                                var t, r, o = null == e ? void 0 : e.settings;
                                if (o) {
                                    var i = (0, n(10407).getObjectKeys)(o);
                                    return {
                                        width: null === (t = o[i[0]]) || void 0 === t ? void 0 : t.width,
                                        height: null === (r = o[i[0]]) || void 0 === r ? void 0 : r.height
                                    }
                                }
                            }(e),
                            d = parseInt((null == u ? void 0 : u.height) || (null === (r = null == e ? void 0 : e.rtb) || void 0 === r ? void 0 : r.height), 10),
                            l = parseInt((null == u ? void 0 : u.width) || (null === (o = null == e ? void 0 : e.rtb) || void 0 === o ? void 0 : o.height), 10),
                            f = isNaN(d) ? -1e3 : d,
                            p = isNaN(l) ? -1e3 : l;
                        (0, n(9809).logSSPEvent)("SSP_WRONG_SIZE_SETTINGS", e, {
                            href: window.location.href,
                            hasSettings: Boolean(u),
                            answer: n.lv["json"].stringify(e),
                            winWidth: s,
                            winHeight: c,
                            pixelRatio: window.devicePixelRatio,
                            sspWidth: p,
                            sspHeight: f,
                            sspOrigWidth: (null == u ? void 0 : u.width) || "---",
                            sspOrigHeight: (null == u ? void 0 : u.height) || "---",
                            customType: t || "common",
                            sizeProblem: p !== s || f !== c ? "yes" : "no",
                            isVast: Boolean(null === (i = null == e ? void 0 : e.rtb) || void 0 === i ? void 0 : i.vast),
                            expValue: a,
                            logVersion: "v7",
                            ua: navigator.userAgent
                        })
                    }
                }
            },
            45815: (e, t, n) => {
                "use strict";
                var r;
                t.jn = t.aH = t.K = void 0,
                    function(e) {
                        e[e["FULLSCREEN_ADAPTIVE0418_ON_DESKTOP"] = 0] = "FULLSCREEN_ADAPTIVE0418_ON_DESKTOP", e[e["FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED"] = 1] = "FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED", e[e["FULLSCREEN_CONFIGURED_BUT_NOT_RECEIVED"] = 2] = "FULLSCREEN_CONFIGURED_BUT_NOT_RECEIVED", e[e["FULLSCREEN_NOT_ALLOWED_ON_DESKTOP"] = 3] = "FULLSCREEN_NOT_ALLOWED_ON_DESKTOP", e[e["FULLSCREEN_NOT_ALLOWED_ON_TOUCH"] = 4] = "FULLSCREEN_NOT_ALLOWED_ON_TOUCH"
                    }(r = t.K || (t.K = {})), t.aH = function(e) {
                    var t, o, i = e.type,
                        a = e.data,
                        s = e.platform;
                    if (a && !(0, n(14573).Q)(window, ["pi", "piHermione", "piPreview"])) {
                        var c = function(e) {
                            if (e.settings) {
                                var t = (0, n(10407).getObjectKeys)(e.settings)[0];
                                if (t) return e.settings[t]
                            }
                            return null
                        }(a);
                        if (c) {
                            var u = (0, n(57297).isFullscreen)(c),
                                d = "fullscreen" === i,
                                l = Boolean(null !== (o = null === (t = c.pcodeSettings) || void 0 === t ? void 0 : t.desktopFullscreen) && void 0 !== o ? o : c.allowDesktopFullscreen);
                            if (!u && d) return r.FULLSCREEN_CONFIGURED_BUT_NOT_RECEIVED;
                            if (u)
                                if ("adaptive0418" === c.name) {
                                    if (!n(50880).isMobile) return r.FULLSCREEN_ADAPTIVE0418_ON_DESKTOP
                                } else {
                                    if (!d) return r.FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED;
                                    if ("desktop" === s && !l) return r.FULLSCREEN_NOT_ALLOWED_ON_DESKTOP;
                                    if ("touch" === s && l) return r.FULLSCREEN_NOT_ALLOWED_ON_TOUCH
                                }
                        }
                    }
                }, t.jn = function(e, t) {
                    switch (e) {
                        case r.FULLSCREEN_CONFIGURED_BUT_NOT_RECEIVED:
                            return 'The received format doesn\'t match the expected type "fullscreen" for blockId: "'.concat(t, '"');
                        case r.FULLSCREEN_ADAPTIVE0418_ON_DESKTOP:
                            return 'Can\'t render "adaptive0418" format in fullscreen for desktops for blockId: "'.concat(t, '"');
                        case r.FULLSCREEN_NOT_CONFIGURED_BUT_RECEIVED:
                            return 'The received "fullscreen" format doesn\'t match the expected type for blockId: "'.concat(t, '"');
                        case r.FULLSCREEN_NOT_ALLOWED_ON_DESKTOP:
                            return 'The received "fullscreen" not allowed for desktops devices for blockId: "'.concat(t, '"');
                        case r.FULLSCREEN_NOT_ALLOWED_ON_TOUCH:
                            return 'The received "fullscreen" not allowed for touch devices for blockId: "'.concat(t, '"');
                        default:
                            return 'Unknown error code: "'.concat(t, '"')
                    }
                }
            },
            74297: (e, t, n) => {
                "use strict";
                var r, o = function() {
                    return o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, o.apply(this, arguments)
                };
                t.W = void 0, r = n(60551);
                var i = function() {
                    function e() {
                        this.initialized = !1, this.savedMsgs = []
                    }
                    return e.prototype.init = function() {
                        var e = this;
                        return this.initialized || (this.initialized = !0, this.initPromise = new Promise((function(t, o) {
                            r((function(r) {
                                var o = (0, n(56240).getUaasConfig)();
                                e.logger = new r["default"], e.logger.initErrors({
                                    project: "pcode",
                                    version: String((0, n(30107).getCodeVersion)()),
                                    env: (0, n(17970).d)(),
                                    reqid: (0, n(49131).getSessionId)(),
                                    platform: n(64029).isTouchDevice ? "touch" : "desktop",
                                    blocker: !1,
                                    additional: {
                                        bundle: "default",
                                        vasVersion: (0, n(30107).getVasVersion)()
                                    },
                                    slots: o.testIds ? o.testIds.split(";") : void 0,
                                    throttleSend: 0,
                                    uncaughtException: !1,
                                    unhandledRejection: !1,
                                    preventError: !1
                                }), e.savedCfg && e.config(e.savedCfg), e.savedMsgs.forEach((function(t) {
                                    return e.log(t)
                                })), delete e.savedCfg, e.savedMsgs = [], t(e)
                            }), (function(t) {
                                e.initialized = !1, o(t)
                            }))
                        }))), this.initPromise
                    }, e.prototype.config = function(e) {
                        this.logger ? this.logger.updateErrors({
                            page: e.labels.pageId || void 0,
                            additional: {
                                bundle: "default",
                                pageId: e.data && e.data.pageId
                            }
                        }) : this.savedCfg = e
                    }, e.prototype.log = function(e) {
                        if (!this.logger) return this.savedMsgs.push(e), void this.init()["catch"](n(85225).noop);
                        var t = {
                                type: e.namespace,
                                level: "WARNING" === e.type ? "warn" : "error"
                            },
                            r = e.additional,
                            i = (0, n(88772).getAllActiveTestIds)();
                        i && ((r = r || {}).activeTestIds = i), (window.__sspbidreqid || window.__ssphitlogid) && ((r = r || {}).sspbidreqid = window.__sspbidreqid, r.ssphitlogid = window.__ssphitlogid), "additional" in e.error && e.error.additional && (r = o(o({}, e.error.additional), r), delete e.error.additional), r && (t.additional = r), this.logger.logError(t, e.error)
                    }, e
                }();
                t.W = i
            },
            80135: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.GogolLogger = t.DEFAULT_GOGOL_EVENT_PROBABILITY = t.STATS_LOG_URL = void 0, t.STATS_LOG_URL = "https://log.strm.yandex.ru/log";
                t.DEFAULT_GOGOL_EVENT_PROBABILITY = .01;
                var r = function() {
                    function e(e) {
                        this.params = e
                    }
                    return e.prototype.config = function(e) {
                        this.loggerConfig = e
                    }, e.prototype.logGogolEvent = function(e) {
                        var r = e.name,
                            o = e.probability,
                            i = void 0 === o ? t.DEFAULT_GOGOL_EVENT_PROBABILITY : o,
                            a = this.params,
                            s = a.version,
                            c = a.vsid,
                            u = a.rnd;
                        if (u < i && !(0, n(91208).isLightHouse)()) {
                            var d = "".concat(t.STATS_LOG_URL, "?PCODE=").concat(s, "&event=").concat(r),
                                l = e,
                                f = l.data,
                                p = l.values,
                                h = l.sensors,
                                v = l.dailySensors,
                                g = h && (0, n(80908).O)(h, (function(e) {
                                    return "boolean" == typeof e ? String(e) : e
                                })),
                                _ = v && (0, n(80908).O)(v, (function(e) {
                                    return "boolean" == typeof e ? String(e) : e
                                })),
                                m = (0, n(56240).getUaasConfig)().testIds,
                                y = (0, n(607).isNonEmptyString)(m) ? m.split(";").map((function(e) {
                                    return Number(e.split(",")[0])
                                })).filter(n(25021).isPositiveFiniteNumber) : [];
                            (0, n(42180).W)({
                                method: "POST",
                                url: d,
                                data: n.lv["json"].stringify({
                                    eventType: "event",
                                    service: "VAS",
                                    version: s,
                                    vsid: c,
                                    data: f,
                                    timestamp: Number(new Date),
                                    referrer: document.referrer,
                                    location: (0, n(88521).getHref)(),
                                    vasVersion: (0, n(30107).getVasVersion)(),
                                    isVideoADB: !1,
                                    eventName: r,
                                    sensors: g,
                                    dailySensors: _,
                                    values: p,
                                    rnd: u,
                                    loggerConfig: this.loggerConfig,
                                    slots: m,
                                    testIds: y,
                                    isSsp: (0, n(64809).checkBundleIsSSP)()
                                })
                            })
                        }
                    }, e
                }();
                t.GogolLogger = r
            },
            88674: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            },
            98637: (e, t, n) => {
                "use strict";
                t.QC = t.uG = t.YQ = t.iN = t.bv = t.oD = void 0, t.oD = "x", t.bv = 44, t.iN = 4, t.YQ = 10, t.uG = "VAS";
                var r = function(e) {
                    return (0, n(84527).padLeft)(String(e % Math.pow(10, t.iN)), t.iN, "0")
                };
                t.QC = function(e) {
                    return void 0 === e && (e = (0, n(30107).getCodeVersion)()), [(0, n(66648).generateHexString)(t.bv), t.uG, r(e), (0, n(84527).padLeft)(Date.now().toString().slice(0, t.YQ), t.YQ, "0")].join(t.oD)
                }
            },
            24440: (e, t, n) => {
                "use strict";
                var r = Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var o = Object.getOwnPropertyDescriptor(t, n);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, o)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    },
                    o = function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), o(n(88674), t), o(n(80135), t), o(n(59835), t)
            },
            59835: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.VSID = void 0, t.VSID = (0, n(98637).QC)()
            },
            28871: (e, t, n) => {
                "use strict";

                function r() {
                    return n(42288).iR
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.logger = t.LOGGER_DEFAULT_PORTION = t.isDevelopBuild = void 0, t.isDevelopBuild = r;
                var o = Math.random();
                t.LOGGER_DEFAULT_PORTION = 1,
                    function(e) {
                        var t = new(n(24440).GogolLogger)({
                                version: "pcode_".concat((0, n(30107).getCodeVersion)()),
                                vsid: n(24440).VSID,
                                rnd: o
                            }),
                            i = new(n(94632).M),
                            a = new(n(74297).W),
                            s = new(n(98568).W),
                            c = !0;

                        function u(e, t, r, o) {
                            return "string" == typeof t && (t = new Error(t), r || (r = "remoteLogString")), {
                                namespace: r,
                                version: (0, n(30107).getCodeVersion)(),
                                type: e,
                                additional: o,
                                error: t
                            }
                        }

                        function d(t, n) {
                            e.debug("REMOTE_LOG: ".concat(n || "", " "), t)
                        }

                        function l(e) {
                            return function(t, o, s, l) {
                                if (c) {
                                    var f = u(e, t, o, s),
                                        p = l || 25;
                                    if (r()) return d(f), void console.error(f.error);
                                    (0, n(14415).isPercent)(p) && a.log(f), i.log(f)
                                }
                            }
                        }(0, n(98489).NG)((function() {
                            c = !1
                        })), e.errorStrict = function(e, t) {
                            if (c) {
                                var o = u("ERROR", e, "", t),
                                    s = (0, n(41486).isString)(e) && e in n(58233).sH ? n(58233).sH[e] : 25;
                                if (r()) return d(o), void console.error(o.error);
                                (0, n(14415).isPercent)(s) && a.log(o), i.log(o)
                            }
                        }, e.error = l("ERROR"), e.warn = l("WARNING"), e.logGogolEvent = function(o) {
                            if (r()) {
                                var i = o,
                                    a = i.data,
                                    s = i.sensors,
                                    c = i.values,
                                    u = i.dailySensors,
                                    d = o.probability || n(24440).DEFAULT_GOGOL_EVENT_PROBABILITY;
                                e.debug("logGogolEvent=[".concat(o.name, "] probability=[").concat(d, "]"), {
                                    data: a,
                                    sensors: s,
                                    values: c,
                                    dailySensors: u
                                })
                            } else t.logGogolEvent(o)
                        }, e.debug = r() ? function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return console.warn.apply(console, e)
                        } : n(85225).noop, e.traceLog = function(e, t, o) {
                            r() ? d(e, t) : ("string" == typeof e && (e = {
                                msg: e
                            }), (0, n(14415).isPercent)(o || 1) && s.sendCsrEvent({
                                data: e,
                                name: t,
                                version: String((0, n(30107).getCodeVersion)())
                            }))
                        }, e.configure = function(e) {
                            t.config(e), a.config(e)
                        }, e.pc = function() {
                            return (0, n(14415).isPercent)(0)
                        }
                    }(t.logger || (t.logger = {}))
            },
            94632: (e, t, n) => {
                "use strict";
                t.M = void 0;
                var r = function() {
                    function e() {}
                    return e.prototype.log = function(e) {
                        if ((0, n(14415).isPercent)(1)) {
                            var t = {};
                            t[e.version] = {}, t[e.version][e.namespace] = {}, t[e.version][e.namespace][e.error.name] = e.error, (0, n(48289).r)().then((function(e) {
                                e.hit(window.location.href, {
                                    params: t
                                })
                            }))
                        }
                    }, e
                }();
                t.M = r
            },
            98568: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                t.W = void 0;
                var o = function() {
                    function e(e) {
                        void 0 === e && (e = {}), this.defaultData = e
                    }
                    return e.prototype.clearDefaultSsrData = function() {
                        this.defaultData = {}
                    }, e.prototype.sendCsrEvent = function(e) {
                        if ((0, n(7153).isObject)(e)) {
                            var t = r(r(r({}, this.defaultData), e), {
                                is_ssr: !1,
                                unixtime: this.getUnixtime()
                            });
                            this.sendEvent(t)
                        }
                    }, e.prototype.sendEvent = function(e) {
                        var t = {
                            method: "POST",
                            url: "//yandex.ru/ads/trace",
                            data: this.prepareData(e)
                        };
                        (0, n(42180).W)(t)
                    }, e.prototype.getUnixtime = function() {
                        return Math.floor(Date.now() / 1e3)
                    }, e.prototype.undefinedToNull = function(e) {
                        return (0, n(38715).forOwn)(e, (function(t, n) {
                            void 0 === e[n] && (e[n] = null)
                        })), e
                    }, e.prototype.prepareData = function(e) {
                        var t = this.undefinedToNull(e);
                        return n.lv["json"].stringify(t).replace(/\\n/g, "\\$&") + "\n"
                    }, e
                }();
                t.W = o
            },
            28274: (e, t, n) => {
                "use strict";

                function r(e) {
                    n(6382)((function(t) {
                        e(t.logger)
                    }))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.traceLog = t.warn = t.error = t.errorStrict = void 0, t.errorStrict = function(e, t) {
                    r((function(n) {
                        n.errorStrict(e, t)
                    }))
                }, t.error = function(e, t, n, o) {
                    r((function(r) {
                        r.error(e, t, n, o)
                    }))
                }, t.warn = function(e, t, n, o) {
                    r((function(r) {
                        r.warn(e, t, n, o)
                    }))
                }, t.traceLog = function(e, t, n) {
                    r((function(r) {
                        r.traceLog(e, t, n)
                    }))
                }
            },
            49874: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.logger = void 0, t.logger = n(28871).logger
            },
            57297: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t, n;
                    return Boolean(null !== (n = null === (t = e.pcodeSettings) || void 0 === t ? void 0 : t.rewarded) && void 0 !== n ? n : e.rewarded)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isFullscreen = t.isRewarded = t.getFullscreenSettings = void 0, t.getFullscreenSettings = function(e) {
                    var t, n = e.fullscreenDuration,
                        r = void 0 === n ? 10 : n,
                        o = e.fullscreenCloseButtonVisibilityTimeout,
                        i = e.pcodeSettings,
                        a = o ? 1e3 * o : o;
                    return {
                        duration: null !== (t = null == i ? void 0 : i.fullscreenDuration) && void 0 !== t ? t : r,
                        closeButtonVisibilityTimeout: a
                    }
                }, t.isRewarded = r, t.isFullscreen = function(e) {
                    var t, o;
                    return !!(0, n(7153).isObject)(e) && (Boolean(null !== (o = null === (t = e.pcodeSettings) || void 0 === t ? void 0 : t.fullscreen) && void 0 !== o ? o : e.fullscreen) || r(e))
                }
            },
            82890: (e, t, n) => {
                "use strict";
                t.w = void 0;
                t.w = function() {
                    var e, t = window.DISABLE_ADM_PREP;
                    if (t) {
                        var r = (null === (e = (0, n(88772).getUaasConfig)()) || void 0 === e ? void 0 : e.flags["SSP_SERVER_TEMPLATE"]) || "";
                        if ("control" === t) return "ctl" === r && (0, n(88772).useExperimentFlag)("SSP_SERVER_TEMPLATE"), 1;
                        if ("experiment" === t) return "exp" === r && (0, n(88772).useExperimentFlag)("SSP_SERVER_TEMPLATE"), 2
                    }
                    return 0
                }
            },
            55991: (e, t, n) => {
                "use strict";
                t.G = void 0;
                t.G = function(e) {
                    return Number(new Date) > 1688314678118 ? n(27265).T.OLD_BUILD : e
                }
            },
            62236: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, i.apply(this, arguments)
                    };
                t.T = void 0;
                var a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.getTemplate = function() {
                        return [
                            [4, "marker"],
                            [4, "renderedBannersAmount"],
                            [1, "isTurbo"],
                            [1, "advancedFormat"],
                            [6, "format"],
                            [1, "isIframe"],
                            [1, "isHover"],
                            [1, "isRefreshed"],
                            [1, "isSSP"],
                            [2, "layout"],
                            [7, "userGroup"],
                            [1, "isApp"],
                            [1, "hasMraid"],
                            [1, "isFullscreen"],
                            [1, "isCarousel"],
                            [1, "isFloorAd"],
                            [2, "sspInSsr"],
                            [1, "honeypot"],
                            [1, "isTopAd"],
                            [1, "amp"],
                            [10, "codeVer"],
                            [1, "adblock"],
                            [1, "isAdaptiveAd"],
                            [1, "canBeAdaptiveAd"],
                            [1, null]
                        ]
                    }, t.prototype.defaults = function() {
                        return i({
                            marker: (0, n(55991).G)(n(27265).T.DIRECT),
                            adblock: !1,
                            amp: n(73266).isAMP,
                            isIframe: (0, n(13058).isInIframe)(window),
                            hasMraid: (0, n(88536).R)(),
                            isTurbo: (0, n(29935).isTurboPage)(),
                            isSSP: (0, n(64809).checkBundleIsSSP)(),
                            sspInSsr: (0, n(82890).w)()
                        }, (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : {
                            codeVer: (0, n(30107).getRevisionNo)()
                        })
                    }, t
                }(n(42726).f);
                t.T = a
            },
            98496: (e, t, n) => {
                "use strict";
                var r, o = (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    }),
                    i = function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, i.apply(this, arguments)
                    };
                t.a = void 0;
                var a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(t, e), t.prototype.getTemplate = function() {
                        return [
                            [4, "marker"],
                            [6, null],
                            [1, "isIframe"],
                            [1, "isApp"],
                            [1, "isSSP"],
                            [1, null],
                            [1, "isFullscreen"],
                            [1, "hasMraid"],
                            [1, "isFloorAd"],
                            [1, "isTopAd"],
                            [16, null],
                            [2, "sspInSsr"],
                            [1, "honeypot"],
                            [1, null],
                            [1, "amp"],
                            [10, "codeVer"],
                            [1, "adblock"],
                            [3, null]
                        ]
                    }, t.prototype.defaults = function() {
                        return i({
                            marker: (0, n(55991).G)(n(27265).T.RTB),
                            adblock: !1,
                            amp: n(73266).isAMP,
                            isIframe: (0, n(13058).isInIframe)(window),
                            hasMraid: (0, n(88536).R)(),
                            isSSP: (0, n(64809).checkBundleIsSSP)(),
                            sspInSsr: (0, n(82890).w)()
                        }, (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : {
                            codeVer: (0, n(30107).getRevisionNo)()
                        })
                    }, t
                }(n(42726).f);
                t.a = a
            },
            17622: (e, t, n) => {
                "use strict";
                t.a = c;
                var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = o(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                        } r["default"] = e, n && n.set(e, r);
                    return r
                }(n(65392));

                function o(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        n = new WeakMap;
                    return (o = function(e) {
                        return e ? n : t
                    })(e)
                }

                function i(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function a(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function(t) {
                            s(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function s(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function c(e) {
                    this._win = e, this._banners = [], this._stateDesktop = "desktop", this._stateTablet = "tablet", this._statePhone = "phone", this._initResizeEvents()
                }
                c.prototype = {
                    constructor: c,
                    addBanner: function(e, t, n) {
                        var r = this,
                            o = {
                                adaptiveOptions: a(a({}, this._getDefaultBannerAdaptiveOptions()), n || {}),
                                adInstance: e,
                                isVisible: !1,
                                state: null,
                                states: t
                            };
                        this._banners.push(o), this._checkBannerState(o);
                        return function() {
                            return r.removeBanner(o.adInstance.getContainerId())
                        }
                    },
                    removeBanner: function(e) {
                        for (var t = 0; t < this._banners.length; t++)
                            if (this._banners[t].adInstance.getContainerId() === e) {
                                this._banners.splice(t, 1);
                                break
                            }
                    },
                    _getDefaultBannerAdaptiveOptions: function() {
                        return {
                            tabletWidth: 830,
                            phoneWidth: 480,
                            isAutoReloads: !1
                        }
                    },
                    _checkState: function() {
                        for (var e = 0; e < this._banners.length; e++) this._checkBannerState(this._banners[e])
                    },
                    _checkBannerState: function(e) {
                        var t = this._win.document.documentElement.clientWidth,
                            n = e.adaptiveOptions,
                            r = null;
                        (r = t > n.tabletWidth ? this._stateDesktop : t <= n.tabletWidth && t > n.phoneWidth ? this._stateTablet : this._statePhone) !== e.state && (e.state = r, this._toggleBannerState(e))
                    },
                    _initResizeEvents: function() {
                        var e = this;
                        r.addEvent(this._win, "resize", (function() {
                            return e._checkState()
                        }))
                    },
                    _toggleBannerState: function(e) {
                        for (var t = !1, n = 0; n < e.states.length; n++)
                            if (e.states[n] === e.state) {
                                t = !0;
                                break
                            } t ? e.isVisible || this._showBanner(e) : e.isVisible && this._hideBanner(e)
                    },
                    _showBanner: function(e) {
                        e.isVisible = !0, e.adInstance.initialize(), e.adaptiveOptions.isAutoReloads || e.adInstance.show()
                    },
                    _hideBanner: function(e) {
                        e.isVisible = !1, e.adaptiveOptions.isAutoReloads ? e.adInstance.destroyWithoutCallbackInvocation() : e.adInstance.hide()
                    }
                }
            },
            50913: (e, t) => {
                "use strict";
                var n;

                function r() {
                    return n || (n = document.createElement("a")), n
                }
                t.$ = function(e, t) {
                    var n = {
                            containerId: "AdFox_banner_" + e,
                            params: {}
                        },
                        o = r();
                    o.href = t;
                    var i = o.pathname;
                    "/" !== i[0] && (i = "/" + i);
                    var a = /\/(\d+)\//.exec(i);
                    a && a[1] && (n.ownerId = a[1]);
                    for (var s = o.search.slice(1).replace(/&amp;/g, "&"), c = s.split("&"), u = 0; u < c.length; u++) {
                        var d = c[u],
                            l = d.indexOf("=");
                        l > 0 && (n.params[d.substr(0, l)] = decodeURIComponent(d.substr(l + 1)))
                    }
                    if (!s.length || !n.ownerId) return !1;
                    return n
                }
            },
            1689: (e, t) => {
                "use strict";
                t.__esModule = !0, t.isWebkit = t.isTouch = t.isSafeframe = t.isPassiveEventsSupported = t.isFirefox = t.isCanvasSupported = t.isAMP = void 0;
                var n = (navigator || {}).userAgent || "",
                    r = void 0 !== window.ontouchstart;
                t.isTouch = r;
                var o = Boolean(window.ampSeen);
                t.isAMP = o;
                var i = Boolean(window.$sf && window.$sf.ext);
                t.isSafeframe = i;
                var a = /Firefox/gi.test(n);
                t.isFirefox = a;
                var s, c = (s = document.createElement("canvas"), Boolean(s && s.getContext && s.getContext("2d")));
                t.isCanvasSupported = c;
                var u = function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }();
                t.isPassiveEventsSupported = u;
                var d = /WebKit/gi.test(n);
                t.isWebkit = d
            },
            65392: (e, t, n) => {
                "use strict";
                t.__esModule = !0, t.addEvent = i, t.on = function(e, t, n, r) {
                    return i(e, t, n, r),
                        function() {
                            a(e, t, n)
                        }
                }, t.removeEvent = a, t.stop = function(e) {
                    e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : (e.returnValue = !1, e.cancelBubble = !0)
                };
                var r = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = o(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                        } r["default"] = e, n && n.set(e, r);
                    return r
                }(n(1689));

                function o(e) {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap,
                        n = new WeakMap;
                    return (o = function(e) {
                        return e ? n : t
                    })(e)
                }

                function i(e, t, n, o) {
                    void 0 === o && (o = !1), e.addEventListener ? e.addEventListener(t, n, !!r.isPassiveEventsSupported && o) : e.attachEvent("on" + t, n)
                }

                function a(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
                }
            },
            37643: (e, t, n) => {
                "use strict";
                var r = n(12251),
                    o = n(54784),
                    i = n(67729),
                    a = n(91709),
                    s = n(49874),
                    c = n(85225);

                function u(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function d(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(n), !0).forEach((function(t) {
                            l(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function l(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                e.exports = function(e, t, n) {
                    var u, l, f = (0, i.getRandomInt)(1e12, 2e12),
                        p = (0, r.protect)("JSONP onLoadError", (function() {
                            Ya[f] && (Ya[f]("{}"), Ya[f] = c.noop)
                        })),
                        h = r.protect.setTimeout(p, 15e3);
                    Ya[f] = function(e) {
                        l = !0, window.clearTimeout(h);
                        var t = {
                                common: {}
                            },
                            o = null;
                        try {
                            delete Ya[f], o || (o = new Function("return " + e)()), t = d(d({}, t), o)
                        } catch (t) {
                            s.logger.error(t, "JSONPParseError", {
                                data: e
                            })
                        }(0, r.protect)("JSONP callback", (function() {
                            n(t), u && (0, a.removeNodeFromParent)(u)
                        }))()
                    }, e.appendParams("callback=Ya[" + f + "]");
                    var v = {
                        src: e.getUrl(),
                        hasCors: !1,
                        win: window
                    };
                    (u = (0, o.loadCustomScript)(v)) && (u.onerror = p, u.onload = function() {
                        l || (window.clearTimeout(h), h = r.protect.setTimeout(p, 1e3))
                    })
                }
            },
            1324: (e, t, n) => {
                "use strict";
                var r, o = n(84162),
                    i = n(73266);
                r = n(79287).x2, e.exports = function(e, t, n, a) {
                    void 0 === a && (a = {});
                    var s = a.pageId,
                        c = a.isDisableGrab;
                    !(0, o.canUseGrab)(window, s) || i.isAMP || c ? n("") : n(r(e, t) || "")
                }
            },
            61750: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_BANNER_OPTIONS = t.INDENT_FROM_KEBAB = t.FULLSCREEN_BLOCK_HORIZONTAL_INDENT = t.DEFAULT_BLOCK_HORIZONTAL_INDENT = t.HORIZONTAL_BANNER_DEFAULT_IMAGE_WIDTH_PORTION = t.HORIZONTAL_BANNER_IMAGE_WIDTH_PORTION_LIMITS = t.BORDER_WIDTH = t.CAROUSEL_ADV_SPACING = t.ADV_SPACING = t.DEFAULT_LIMIT = t.DEFAULT_VERTICAL_BANNER_RATIO = t.DEFAULT_HORIZONTAL_BANNER_RATIO = t.ConstructorContainersSkins = t.MARKETPLACES_SIZE_LIMITS = t.INTERSCROLLER_SIZE_LIMITS_LIST = t.BILLBOARD_IN_FS_SIZE_LIMITS = t.BILLBOARD_SIZE_LIMITS = t.VERTICAL_SIZE_LIMITS = t.HORIZONTAL_SIZE_LIMITS = t.POSTER_SIZE_LIMITS = t.ADAPTIVE_SIZE_LIMITS = void 0, t.ADAPTIVE_SIZE_LIMITS = {
                    width: {
                        min: 150,
                        max: 1 / 0
                    },
                    height: {
                        min: 50,
                        max: 1 / 0
                    }
                }, t.POSTER_SIZE_LIMITS = {
                    width: {
                        min: 155,
                        max: 1 / 0
                    },
                    height: {
                        min: 190,
                        max: 1 / 0
                    }
                }, t.HORIZONTAL_SIZE_LIMITS = {
                    width: {
                        min: 200,
                        max: 1 / 0
                    },
                    height: {
                        min: 50,
                        max: 1 / 0
                    }
                }, t.VERTICAL_SIZE_LIMITS = {
                    width: {
                        min: 150,
                        max: 1 / 0
                    },
                    height: {
                        min: 200,
                        max: 1 / 0
                    }
                }, t.BILLBOARD_SIZE_LIMITS = {
                    width: {
                        min: 700,
                        max: 1 / 0
                    },
                    height: {
                        min: 180,
                        max: 300
                    }
                }, t.BILLBOARD_IN_FS_SIZE_LIMITS = {
                    width: {
                        min: 700,
                        max: 1 / 0
                    },
                    height: {
                        min: 180,
                        max: 1 / 0
                    }
                }, t.INTERSCROLLER_SIZE_LIMITS_LIST = [t.POSTER_SIZE_LIMITS, t.HORIZONTAL_SIZE_LIMITS, t.VERTICAL_SIZE_LIMITS], t.MARKETPLACES_SIZE_LIMITS = {
                    width: {
                        min: 240,
                        max: 400
                    },
                    height: {
                        min: 350,
                        max: 600
                    }
                },
                    function(e) {
                        e["normal"] = "normal", e["carouselSmartTgo"] = "CarouselSmartTgo"
                    }(t.ConstructorContainersSkins || (t.ConstructorContainersSkins = {})), t.DEFAULT_HORIZONTAL_BANNER_RATIO = 1.7, t.DEFAULT_VERTICAL_BANNER_RATIO = .5, t.DEFAULT_LIMIT = 1, t.ADV_SPACING = 5, t.CAROUSEL_ADV_SPACING = 8, t.BORDER_WIDTH = 1, t.HORIZONTAL_BANNER_IMAGE_WIDTH_PORTION_LIMITS = {
                    min: .1,
                    max: .55
                }, t.HORIZONTAL_BANNER_DEFAULT_IMAGE_WIDTH_PORTION = .5, t.DEFAULT_BLOCK_HORIZONTAL_INDENT = 10, t.FULLSCREEN_BLOCK_HORIZONTAL_INDENT = 20, t.INDENT_FROM_KEBAB = 28, t.DEFAULT_BANNER_OPTIONS = {
                    wrapperOptions: {
                        paddingBottom: 10
                    },
                    props: {
                        drawKebab: !1
                    }
                }
            },
            18621: (e, t, n) => {
                "use strict";
                t.v = void 0;
                var r = n(50238);
                t.v = (0, r.getModuleLoader)("FeedController", (function() {
                    return n(73377)
                }), (function(e) {
                    return function(t) {
                        return e(t.render)
                    }
                }))
            },
            12890: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadFloorAdController = void 0;
                var r = n(50238);
                t.loadFloorAdController = (0, r.getModuleLoader)("FloorAdController", (function() {
                    return n(4465)
                }), (function(e) {
                    return function(t) {
                        var n = t.floorAdController;
                        return e(n)
                    }
                }))
            },
            57354: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadNewFullscreenController = void 0;
                var r = n(50238);
                t.loadNewFullscreenController = (0, r.getModuleLoader)("NewFullscreenController", (function() {
                    return n(86545)
                }), (function(e) {
                    return function(t) {
                        var n = t.getControllerInstance;
                        return e(n())
                    }
                }))
            },
            50238: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getModuleLoader = void 0;
                var r = n(49874);
                t.getModuleLoader = function(e, t, n) {
                    var o;
                    return function(i, a) {
                        return o || (o = new Promise((function(o) {
                            t()((function(e) {
                                n ? n(o)(e) : o(e)
                            }), (function(t) {
                                r.logger.error(t, "".concat(e, " bundle loading error")), null == a || a(t)
                            }))
                        }))), i && o.then(i), o
                    }
                }
            },
            9743: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FEED_CAROUSEL_RATIO = t.FEED_MOSAIC_RATIO = t.HEIGHT_MULTIPLY = t.FEED_DEFAULT_COUNT_COLUMNS_DESKTOP = t.FEED_MAX_COLUMN_COUNT_DESKTOP = t.FEED_MIN_COLUMN_WIDTH_DESKTOP = t.FEED_DEFAULT_COUNT_COLUMNS_TOUCH = t.FEED_MAX_COLUMN_COUNT_TOUCH = t.FEED_MIN_COLUMN_WIDTH_TOUCH = t.FEED_PLACEHOLDER_RATIO = t.FEED_BANNER_GAP = t.FEED_LIMIT = t.FEED_DEFAULT_COUNT_ADS_DESKTOP = t.FEED_DEFAULT_COUNT_ADS_MOBILE = void 0, t.FEED_DEFAULT_COUNT_ADS_MOBILE = 30, t.FEED_DEFAULT_COUNT_ADS_DESKTOP = 12, t.FEED_LIMIT = 3, t.FEED_BANNER_GAP = 20, t.FEED_PLACEHOLDER_RATIO = 3 / 4, t.FEED_MIN_COLUMN_WIDTH_TOUCH = 150, t.FEED_MAX_COLUMN_COUNT_TOUCH = 1, t.FEED_DEFAULT_COUNT_COLUMNS_TOUCH = 1, t.FEED_MIN_COLUMN_WIDTH_DESKTOP = 300, t.FEED_MAX_COLUMN_COUNT_DESKTOP = 4, t.FEED_DEFAULT_COUNT_COLUMNS_DESKTOP = 2, t.HEIGHT_MULTIPLY = 1.2, t.FEED_MOSAIC_RATIO = .6, t.FEED_CAROUSEL_RATIO = 19 / 24
            },
            9417: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FLOOR_AD_OUTER_NODE_WIDTH = t.FLOOR_AD_INNER_NODE_WIDTH = t.DESKTOP_FLOOR_AD_INNER_NODE_WIDTH = t.DESKTOP_FLOOR_AD_MAX_HEIGHT = t.DESKTOP_FLOOR_AD_SCREEN_PART = t.FLOOR_AD_SCREEN_PART = t.TOP_AD_HEIGHT = t.DIRECTIONS = t.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS = t.FLOOR_AD_CROSS_HEIGHT = t.FLOOR_AD_BORDER_WIDTH = t.FLOOR_AD_SHOW_TIMEOUT = t.MIN_FLOOR_AD_HEIGHT = t.FLOOR_AD_MAX_SCREEN_PART = t.FLOOR_AD_TGA_RATIO = t.FLOOR_AD_ANIMATION_DURATION_MS = void 0, t.FLOOR_AD_ANIMATION_DURATION_MS = 300, t.FLOOR_AD_TGA_RATIO = .15, t.FLOOR_AD_MAX_SCREEN_PART = .3, t.MIN_FLOOR_AD_HEIGHT = 50, t.FLOOR_AD_SHOW_TIMEOUT = 2e3, t.FLOOR_AD_BORDER_WIDTH = 2, t.FLOOR_AD_CROSS_HEIGHT = 24, t.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS = 324, t.DIRECTIONS = ["top", "left", "right", "bottom"], t.TOP_AD_HEIGHT = 100, t.FLOOR_AD_SCREEN_PART = .25, t.DESKTOP_FLOOR_AD_SCREEN_PART = .2, t.DESKTOP_FLOOR_AD_MAX_HEIGHT = 200, t.DESKTOP_FLOOR_AD_INNER_NODE_WIDTH = "40vw", t.FLOOR_AD_INNER_NODE_WIDTH = "100vmin", t.FLOOR_AD_OUTER_NODE_WIDTH = "100vw"
            },
            57003: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.normalizeZIndex = t.normalizeOffset = t.getShortWindowSide = t.getLongWindowSide = t.getWidthSideBorder = t.hasSideBorders = t.normalizeFloorAdHeight = t.getFloorAdBannerMaxHeight = t.getFloorAdSize = t.getFloorAdOuterNodeHeight = void 0;
                var r = n(9417),
                    o = n(34403),
                    i = n(50880);
                t.getFloorAdOuterNodeHeight = function(e) {
                    var t = e.isTopAd,
                        n = window.screen.height,
                        o = window.screen.width,
                        s = u(),
                        c = d(),
                        l = a(s * r.FLOOR_AD_SCREEN_PART, {
                            width: o,
                            height: n
                        });
                    return t ? l = r.TOP_AD_HEIGHT : i.isMobile || (l = Math.min(r.DESKTOP_FLOOR_AD_MAX_HEIGHT, c * r.DESKTOP_FLOOR_AD_SCREEN_PART)), l + r.FLOOR_AD_BORDER_WIDTH
                }, t.getFloorAdSize = function(e) {
                    var t = (0, o.getBoundingClientRect)(e),
                        n = t.height,
                        i = t.width;
                    return {
                        height: n + (r.FLOOR_AD_BORDER_WIDTH + r.FLOOR_AD_CROSS_HEIGHT),
                        width: i + 2 * c()
                    }
                };

                function a(e, n) {
                    var o = (0, t.getFloorAdBannerMaxHeight)(n);
                    return Math.round(Math.max(Math.min(e, o), r.MIN_FLOOR_AD_HEIGHT))
                }

                function s() {
                    return d() >= r.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS
                }

                function c() {
                    return s() ? r.FLOOR_AD_BORDER_WIDTH : 0
                }

                function u(e, t) {
                    return void 0 === e && (e = window.screen.height), void 0 === t && (t = window.screen.width), Math.max(e, t)
                }

                function d(e, t) {
                    return void 0 === e && (e = window.screen.height), void 0 === t && (t = window.screen.width), Math.min(e, t)
                }
                t.getFloorAdBannerMaxHeight = function(e) {
                    var t = e.height,
                        n = void 0 === t ? window.screen.height : t,
                        o = e.width,
                        i = u(n, void 0 === o ? window.screen.width : o);
                    return r.FLOOR_AD_MAX_SCREEN_PART * i
                }, t.normalizeFloorAdHeight = a, t.hasSideBorders = s, t.getWidthSideBorder = c, t.getLongWindowSide = u, t.getShortWindowSide = d, t.normalizeOffset = function(e) {
                    return "number" == typeof e ? e : 0
                }, t.normalizeZIndex = function(e) {
                    return "number" == typeof e ? e : void 0
                }
            },
            50102: (e, t, n) => {
                "use strict";
                var r = function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getTransitionFloorAdStateStyles = t.getClosedFloorAdStateStyles = t.getOpenedFloorAdStateStyles = t.getTransition = t.getFloorAdBorderStyles = t.getOuterContainerFloorAdStyles = t.getFloorAdBannerStyles = void 0;
                var o = n(9417),
                    i = n(7386),
                    a = n(57003),
                    s = n(80511),
                    c = n(12773),
                    u = n(94320),
                    d = n(385),
                    l = n(50880);

                function f(e, t) {
                    return void 0 === t && (t = o.FLOOR_AD_BORDER_WIDTH), (0, c.reduce)(e, (function(e, n) {
                        var r;
                        return e[(r = n, "border".concat((0, d.capitalizeFirst)(r), "Width"))] = "".concat(t, "px"), e
                    }), {})
                }

                function p() {
                    return (0, i.isHermione)() ? "none" : "transform ".concat(o.FLOOR_AD_ANIMATION_DURATION_MS, "ms ease-in")
                }

                function h(e) {
                    var t = e.isTopAd,
                        n = (0, a.getFloorAdBannerMaxHeight)({});
                    return t ? {
                        transition: p(),
                        transform: "translateY(-".concat(n + 30, "px)")
                    } : {
                        transition: p(),
                        transform: "translateY(".concat(n + 30, "px)")
                    }
                }
                t.getFloorAdBannerStyles = function(e) {
                    var t = h(e),
                        n = (0, a.getFloorAdOuterNodeHeight)(e),
                        i = (0, a.getWidthSideBorder)(),
                        s = l.isMobile ? o.FLOOR_AD_INNER_NODE_WIDTH : o.DESKTOP_FLOOR_AD_INNER_NODE_WIDTH;
                    return r(r({}, t), {
                        width: "calc(".concat(s, " - ").concat(2 * i, "px)"),
                        height: "".concat(n - o.FLOOR_AD_BORDER_WIDTH, "px"),
                        margin: "0 auto",
                        display: "flex",
                        "justify-content": "center"
                    })
                }, t.getOuterContainerFloorAdStyles = function(e) {
                    var t, n = e.isTopAd,
                        o = e.zIndex,
                        i = e.offset;
                    return r(((t = {})[n ? "top" : "bottom"] = "".concat(i, "px"), t["pointer-events"] = "none", t["align-items"] = n ? "flex-start" : "flex-end", t.display = "flex", t.margin = "0 auto", t.right = "unset", t), o ? {
                        "z-index": o
                    } : null)
                }, t.getFloorAdBorderStyles = function(e) {
                    var t = e.isTopAd,
                        n = [];
                    (0, a.hasSideBorders)() && (n.push("left"), n.push("right")), t ? n.push("bottom") : n.push("top");
                    var i = (0, u.filter)(o.DIRECTIONS, (function(e) {
                        return !(0, s.includes)(n, e)
                    }));
                    return r(r({}, f(n)), f(i, 0))
                }, t.getTransition = p, t.getOpenedFloorAdStateStyles = function() {
                    return {
                        transition: p(),
                        transform: "translateY(0)"
                    }
                }, t.getClosedFloorAdStateStyles = h, t.getTransitionFloorAdStateStyles = function(e) {
                    return h(e)
                }
            },
            53684: (e, t, n) => {
                "use strict";
                t.S = void 0;
                var r = n(7386),
                    o = n(9417);
                t.S = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.isRefresh,
                        i = t.callback,
                        a = n || (0, r.isHermione)();
                    return new Promise((function(e) {
                        return setTimeout((function() {
                            null == i || i(), e()
                        }), a ? 0 : o.FLOOR_AD_SHOW_TIMEOUT)
                    }))
                }
            },
            505: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP = t.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_GAP_SIZE_DESKTOP = t.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE = t.CLOSE_BUTTON_TIMEOUT_FOR_VIDEO_CREATIVE_REACH = t.VIDEO_CREATIVE_REACH_PRODUCT_TYPE = void 0, t.VIDEO_CREATIVE_REACH_PRODUCT_TYPE = "video-creative-reach", t.CLOSE_BUTTON_TIMEOUT_FOR_VIDEO_CREATIVE_REACH = 3, t.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE = 49, t.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP = 80, t.NEW_FULLSCREEN_GAP_SIZE_DESKTOP = 20, t.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP = 500, t.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP = 480, t.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP = 1080
            },
            16714: (e, t, n) => {
                "use strict";
                t.PN = void 0;
                var r = n(55362),
                    o = n(61750),
                    i = n(505),
                    a = function(e) {
                        return Math.ceil(e)
                    },
                    s = function(e) {
                        return Math.ceil(e - i.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE)
                    },
                    c = function(e, t) {
                        return Math.ceil(e - ((null == t ? void 0 : t.ignoreGap) ? 0 : i.NEW_FULLSCREEN_GAP_SIZE_DESKTOP))
                    },
                    u = function(e, t) {
                        return Math.ceil(e - i.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP - i.NEW_FULLSCREEN_GAP_SIZE_DESKTOP - (t ? .15 * e : 0))
                    },
                    d = function(e) {
                        return Math.ceil((0, r.clamp)(c(e), o.BILLBOARD_IN_FS_SIZE_LIMITS.width.min, i.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP))
                    },
                    l = function(e, t) {
                        return Math.ceil(Math.min(i.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP, u(e, t)))
                    },
                    f = function(e, t) {
                        return Math.ceil(Math.min(i.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP, c(e, t)))
                    },
                    p = function(e) {
                        return Math.ceil(Math.min(i.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP, u(e)))
                    };
                t.PN = function(e) {
                    var t = e.screenHeight,
                        n = e.screenWidth,
                        r = e.isMobile;
                    return {
                        height: r ? s(t) : u(t),
                        width: r ? a(n) : c(n)
                    }
                }
            },
            24617: (e, t, n) => {
                e.exports = function(e, t) {
                    n.e(8588).then(function() {
                        e(n(40611))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            71674: (e, t, n) => {
                e.exports = function(e, t) {
                    Promise.all([n.e(4115), n.e(8433), n.e(5051)]).then(function() {
                        e(n(2775))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            5945: (e, t, n) => {
                e.exports = function(e, t) {
                    n.e(9769).then(function() {
                        e(n(36696))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            60551: (e, t, n) => {
                e.exports = function(e, t) {
                    Promise.all([n.e(551), n.e(841)]).then(function() {
                        e(n(58040))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            6382: (e, t, n) => {
                e.exports = function(e, t) {
                    Promise.all([n.e(551), n.e(841)]).then(function() {
                        e(n(28871))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            63520: (e, t, n) => {
                e.exports = function(e, t) {
                    n.e(4864).then(function() {
                        e(n(23439))
                    }.__pbind(null, n))["catch"]((function() {
                        t && t.apply(this, arguments)
                    }))
                }
            },
            73377: (e, t, n) => {
                var r, o, i = !1;

                function a() {
                    r = [], n.e(1245).then(function() {
                        if (o = n(71766), r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                        i = !1, r = null
                    }.__pbind(null, n))["catch"]((function() {
                        if (r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                        i = !0, r = null
                    }))
                }
                e.exports = function(e, t) {
                    t = t || function() {}, o ? e(o) : (i && a(), r.push({
                        success: e,
                        error: t
                    }))
                }, a()
            },
            4465: (e, t, n) => {
                var r, o, i = !1;

                function a() {
                    r = [], n.e(8238).then(function() {
                        if (o = n(71191), r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                        i = !1, r = null
                    }.__pbind(null, n))["catch"]((function() {
                        if (r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                        i = !0, r = null
                    }))
                }
                e.exports = function(e, t) {
                    t = t || function() {}, o ? e(o) : (i && a(), r.push({
                        success: e,
                        error: t
                    }))
                }, a()
            },
            86545: (e, t, n) => {
                var r, o, i = !1;

                function a() {
                    r = [], Promise.all([n.e(4115), n.e(7635)]).then(function() {
                        if (o = n(16321), r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                        i = !1, r = null
                    }.__pbind(null, n))["catch"]((function() {
                        if (r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                        i = !0, r = null
                    }))
                }
                e.exports = function(e, t) {
                    t = t || function() {}, o ? e(o) : (i && a(), r.push({
                        success: e,
                        error: t
                    }))
                }, a()
            },
            24673: (e, t, n) => {
                var r, o, i = !1;

                function a() {
                    r = [], n.e(3634).then(function() {
                        if (o = n(69246), r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                        i = !1, r = null
                    }.__pbind(null, n))["catch"]((function() {
                        if (r && r.length)
                            for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                        i = !0, r = null
                    }))
                }
                e.exports = function(e, t) {
                    t = t || function() {}, o ? e(o) : (i && a(), r.push({
                        success: e,
                        error: t
                    }))
                }, a()
            },
            35930: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isIntersectionObserverSupported = void 0;
                var r = n(61438);
                t.isIntersectionObserverSupported = "function" == typeof IntersectionObserver && (0, r.checkNativeCode)(IntersectionObserver)
            },
            43945: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                    return r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, r.apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isInViewport = t.ViewportObserver = void 0;
                var o = n(22886),
                    i = n(50880),
                    a = n(35930),
                    s = n(94532),
                    c = n(52544),
                    u = n(12251),
                    d = n(7654),
                    l = i.isMobile ? 2 : .7,
                    f = "".concat(100 * l, "% 0px"),
                    p = [0, .25, .5, .75, 1],
                    h = function() {
                        function e(e) {
                            var t = this;
                            this.options = e, this.onVisibilityChange = (0, u.protect)("viewportObserver::onVisibilityChange", (function(e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n],
                                        o = r.intersectionRatio > 0;
                                    t.runTask(r.target, o)
                                }
                            }))
                        }
                        return e.prototype.observe = function(e, t) {
                            var n = this,
                                i = (0, u.protect)("viewportObserver::protectedTask", t);
                            if (!a.isIntersectionObserverSupported) {
                                var c = new d.Deferred;
                                return c.promise.then((function() {
                                    return i(!0)
                                })), c.resolve(), (0, s.once)((function() {
                                    c.reject()
                                }))
                            }
                            if (!this.intersectionObserver) {
                                var l = r({
                                    rootMargin: f,
                                    threshold: p
                                }, this.options);
                                this.tasks = new Map, this.intersectionObserver = new IntersectionObserver(this.onVisibilityChange, l)
                            }
                            this.tasks.has(e) || (this.intersectionObserver.observe(e), this.tasks.set(e, []));
                            var h = this.tasks.get(e);
                            return h.push(i), (0, s.once)((function() {
                                var t = (0, o.indexOf)(h, i);
                                h.splice(t, 1), 0 === h.length && (n.tasks.delete(e), n.intersectionObserver.unobserve(e))
                            }))
                        }, e.prototype.runTask = function(e, t) {
                            var n = this.tasks.get(e);
                            if (n)
                                for (var r = n.concat([]), o = 0; o < r.length; o++) {
                                    (0, r[o])(t)
                                }
                        }, e
                    }();
                t.ViewportObserver = h, t.isInViewport = function(e, t) {
                    if (void 0 === t && (t = .5), !a.isIntersectionObserverSupported) return !0;
                    var n = e.getBoundingClientRect();
                    if (0 === n.width && 0 === n.height) return !1;
                    var r = (0, c.getWindowSize)(),
                        o = r.height * t,
                        i = -o,
                        s = r.height + o;
                    return n.top > i && n.top < s || n.bottom > i && n.bottom < s
                }
            },
            89663: (e, t, n) => {
                e.exports = n(24617)
            }
        },
        r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            id: e,
            exports: {}
        };
        return n[e].call(i.exports, i, i.exports, o), i.exports
    }
    o.m = n, o.n = e => {
        var t = e && e.__esModule ? () => e["default"] : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).__preduce(((t, n) => (o.f[n](e, t), t)), [])), o.u = e => ({
        268: "a60d80d58c643fce3675",
        309: "1ba684b3438038ef37c3",
        419: "58debeef93a3152afc3e",
        551: "b887192c4a62fd372984",
        557: "993ee3544d7f816335d9",
        631: "0c7e1edd0ff3edf5c5d7",
        687: "28b03bb412495fe42ee4",
        720: "02cea12995d91bd47132",
        830: "327eaec401d8f8aeffe1",
        841: "7a43fcd461b7286793f9",
        1090: "49823c310c664f5a0278",
        1245: "47162529d5b6377e0971",
        1264: "40516cc4e17569b67560",
        1334: "a5395bece56421f99577",
        1391: "d44a8eb0fee688b94f49",
        1407: "c08ffb3c11804763ff8c",
        1417: "48016699268387d6e723",
        1493: "eea81f96c76685758f72",
        1584: "54bd51aa14ea01158180",
        1606: "8302df8bf736fc8a9c24",
        1676: "b7a79ac6feed5314a0c1",
        1802: "7bfe90a2b2fd27ac6f46",
        1962: "0329227c06b6cff11ff8",
        2020: "bababb9e77b97bcb96d7",
        2214: "cbd45c4d616f64738422",
        2346: "26e400216fd09d19c2e0",
        2370: "e4edbed0088cff57e7f8",
        2480: "551b00c1b6ab77d91c7b",
        2637: "c557ca5950ec424d611b",
        2846: "ca9cc1776e70b33accb9",
        2848: "161fcb6978d970dbe53a",
        2933: "552bf3f0a5087f791c23",
        2987: "a99fd0e8cc01e8fe22f8",
        2998: "5beb8ce75ee8d02ac2c0",
        3264: "2d3dbe967f1077660f2e",
        3352: "131d525d4bdcdf0d2907",
        3378: "5799b3c3b12934be43e8",
        3634: "1c0942547d39e10f5f56",
        3666: "b13bd0a2ea6662632b29",
        3843: "6c37c930b88c3fc6f606",
        3859: "4e6e1579283c90fa703b",
        4037: "1e993fad2d2ea77e4807",
        4115: "07cea2bf8567304efc16",
        4160: "afdba1028da3083c1d2f",
        4219: "d478fc3131bf6b3fc986",
        4250: "1a511ce6a4ba2cb934d4",
        4360: "8a37f048bd42fa2c1909",
        4474: "900d223b4e60695df8eb",
        4560: "30f0be9b963d05ce2e7e",
        4864: "d42f57d05b14aed971b8",
        5051: "168d5bed9f5cc66eed94",
        5065: "cc1bb23716ef6d5134b5",
        5072: "4da1ad4873a385a3e8c9",
        5078: "b27eb025ee9a63c02913",
        5263: "486b4f8599fa5d43bc58",
        5264: "db4ea8d2bc3425da4943",
        5356: "2cb05121c2dd150f9d92",
        5653: "7bf6434cda415a2e2632",
        6144: "138ac45f2e9a7ae1392c",
        6686: "ae11ce9948e25a2d4fd5",
        6701: "98a0dca96e65a8dc0d8d",
        6791: "cb5509661b78f31e716e",
        6947: "7fb8a919aec2c3572ae7",
        7034: "0c571c1f0597601aea4f",
        7094: "8d1a43fc1f1deb2d16bd",
        7219: "680d147e219dff41174f",
        7378: "011ed828d407c74ebe28",
        7631: "aaf1bca1b57dc8e22864",
        7635: "7227526b35ea042f20de",
        7640: "6280b56ef23e242256a0",
        7770: "59c402378146ce84dc5f",
        7799: "8f2ef7c38ae32d2eb164",
        8029: "2830c06ad2504663f7f2",
        8033: "62b67cc5e0597b8f83bf",
        8081: "91150c0aa1061bf534fd",
        8108: "97f68dcacdb083628996",
        8175: "b1aeffe79377505f33b7",
        8238: "b05647d6ca6b43f82592",
        8296: "c14e0938af3b3a38d083",
        8339: "497dfa28d99f3e74f4cf",
        8390: "bbb632379faa2df58296",
        8433: "2ec9a88e40a26b53acde",
        8588: "61dde8a4a6266d0efb20",
        8594: "0374784851653aa7ee94",
        8633: "eb587f382bdd1103e83f",
        8684: "8587c5e4debde3daa4f2",
        8831: "92e3d8588c0b8ce6eee1",
        8920: "e0d30dc93a43bb08be28",
        9062: "ffe9089fea9ff9fcfa8f",
        9203: "a43861a2d5505f0e2a09",
        9340: "fadec72bf0750b286546",
        9428: "ecb9688f4c0effafd5b3",
        9453: "8c9742617368497f07d7",
        9514: "5c3be957d4c12ce19785",
        9769: "85fd44ae02cfe1166d67",
        9792: "0e84056161da32714deb",
        9959: "045da0f7dba5610acbc1",
        9999: "627316dfc661f5a39aa0"
    } [e] + ".js"), o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "yandex-pcode:", o.l = (n, r, i, a) => {
        if (e[n]) e[n].push(r);
        else {
            var s, c;
            if (void 0 !== i)
                for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var l = u[d];
                    if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + i) {
                        s = l;
                        break
                    }
                }
            s || (c = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", t + i), s.src = n, 0 !== s.src.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous")), e[n] = [r];
            var f = (t, r) => {
                    s.onerror = s.onload = null, clearTimeout(p);
                    var o = e[n];
                    if (delete e[n], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(r))), t) return t(r)
                },
                p = setTimeout(f.__pbind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
            s.onerror = f.__pbind(null, s.onerror), s.onload = f.__pbind(null, s.onload), c && document.head.appendChild(s)
        }
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.p = "https://yastatic.net/partner-code-bundles/751013/", o.lv = o.lv || {}, o.lv["json"] = JSON, (() => {
        var e = {
            2352: 0,
            841: 0
        };
        o.f.j = (t, n) => {
            var r = o.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var i = new Promise(((n, o) => r = e[t] = [n, o]));
                    n.push(r[2] = i);
                    var a = o.p + o.u(t),
                        s = new Error;
                    o.l(a, (n => {
                        if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var i = n && ("load" === n.type ? "missing" : n.type),
                                a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, r[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, i, [a, s, c] = n,
                    u = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                    if (c) c(o)
                }
                for (t && t(n); u < a.length; u++) i = a[u], o.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            n = self["webpackChunkyandex_pcode"] = self["webpackChunkyandex_pcode"] || [];
        n.forEach(t.__pbind(null, 0)), n.push = t.__pbind(null, n.push.__pbind(n))
    })();
    (() => {
        "use strict";
        (function() {
            if (!o(54569).p) {
                var e = document.currentScript,
                    t = (null == e ? void 0 : e.src) || "";
                t && (0, o(96125).f)(t) ? (0, o(84703).T)({
                    src: "https://yandex.ru/ads/system/context.js"
                }) : o(73852).ns.pr || ((0, o(71422).R)(), (0, o(33356).H)(), (0, o(931).V)(), (0, o(78322).initDeps)(), (0, o(43699).a)())
            }
        })()
    })()
})();