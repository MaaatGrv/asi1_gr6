!function(e,n,t,i){"use strict";n=void 0!==n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(o){var a,c=e(this),r=c.selector||"",l=(new Date).getTime(),d=[],s=arguments[0],u="string"==typeof s,b=[].slice.call(arguments,1);return c.each(function(){var c,h,g=e.extend(!0,{},e.fn.checkbox.settings,o),f=g.className,p=g.namespace,k=g.selector,m=g.error,v="."+p,y="module-"+p,C=e(this),x=e(this).children(k.label),w=e(this).children(k.input),I=w[0],D=!1,S=!1,E=C.data(y),O=this;h={initialize:function(){h.verbose("Initializing checkbox",g),h.create.label(),h.bind.events(),h.set.tabbable(),h.hide.input(),h.observeChanges(),h.instantiate(),h.setup()},instantiate:function(){h.verbose("Storing instance of module",h),E=h,C.data(y,h)},destroy:function(){h.verbose("Destroying module"),h.unbind.events(),h.show.input(),C.removeData(y)},fix:{reference:function(){C.is(k.input)&&(h.debug("Behavior called on <input> adjusting invoked element"),C=C.closest(k.checkbox),h.refresh())}},setup:function(){h.set.initialLoad(),h.is.indeterminate()?(h.debug("Initial value is indeterminate"),h.indeterminate()):h.is.checked()?(h.debug("Initial value is checked"),h.check()):(h.debug("Initial value is unchecked"),h.uncheck()),h.remove.initialLoad()},refresh:function(){x=C.children(k.label),w=C.children(k.input),I=w[0]},hide:{input:function(){h.verbose("Modifying <input> z-index to be unselectable"),w.addClass(f.hidden)}},show:{input:function(){h.verbose("Modifying <input> z-index to be selectable"),w.removeClass(f.hidden)}},observeChanges:function(){"MutationObserver"in n&&((c=new MutationObserver(function(e){h.debug("DOM tree modified, updating selector cache"),h.refresh()})).observe(O,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",c))},attachEvents:function(n,t){var i=e(n);t=e.isFunction(h[t])?h[t]:h.toggle,i.length>0?(h.debug("Attaching checkbox events to element",n,t),i.on("click"+v,t)):h.error(m.notFound)},event:{click:function(n){var t=e(n.target);t.is(k.input)?h.verbose("Using default check action on initialized checkbox"):t.is(k.link)?h.debug("Clicking link inside checkbox, skipping toggle"):(h.toggle(),w.focus(),n.preventDefault())},keydown:function(e){var n=e.which,t=13,i=32;n==27?(h.verbose("Escape key pressed blurring field"),w.blur(),S=!0):e.ctrlKey||n!=i&&n!=t?S=!1:(h.verbose("Enter/space key pressed, toggling checkbox"),h.toggle(),S=!0)},keyup:function(e){S&&e.preventDefault()}},check:function(){h.should.allowCheck()&&(h.debug("Checking checkbox",w),h.set.checked(),h.should.ignoreCallbacks()||(g.onChecked.call(I),g.onChange.call(I)))},uncheck:function(){h.should.allowUncheck()&&(h.debug("Unchecking checkbox"),h.set.unchecked(),h.should.ignoreCallbacks()||(g.onUnchecked.call(I),g.onChange.call(I)))},indeterminate:function(){h.should.allowIndeterminate()?h.debug("Checkbox is already indeterminate"):(h.debug("Making checkbox indeterminate"),h.set.indeterminate(),h.should.ignoreCallbacks()||(g.onIndeterminate.call(I),g.onChange.call(I)))},determinate:function(){h.should.allowDeterminate()?h.debug("Checkbox is already determinate"):(h.debug("Making checkbox determinate"),h.set.determinate(),h.should.ignoreCallbacks()||(g.onDeterminate.call(I),g.onChange.call(I)))},enable:function(){h.is.enabled()?h.debug("Checkbox is already enabled"):(h.debug("Enabling checkbox"),h.set.enabled(),g.onEnable.call(I),g.onEnabled.call(I))},disable:function(){h.is.disabled()?h.debug("Checkbox is already disabled"):(h.debug("Disabling checkbox"),h.set.disabled(),g.onDisable.call(I),g.onDisabled.call(I))},get:{radios:function(){var n=h.get.name();return e('input[name="'+n+'"]').closest(k.checkbox)},otherRadios:function(){return h.get.radios().not(C)},name:function(){return w.attr("name")}},is:{initialLoad:function(){return D},radio:function(){return w.hasClass(f.radio)||"radio"==w.attr("type")},indeterminate:function(){return w.prop("indeterminate")!==i&&w.prop("indeterminate")},checked:function(){return w.prop("checked")!==i&&w.prop("checked")},disabled:function(){return w.prop("disabled")!==i&&w.prop("disabled")},enabled:function(){return!h.is.disabled()},determinate:function(){return!h.is.indeterminate()},unchecked:function(){return!h.is.checked()}},should:{allowCheck:function(){return h.is.determinate()&&h.is.checked()&&!h.should.forceCallbacks()?(h.debug("Should not allow check, checkbox is already checked"),!1):!1!==g.beforeChecked.apply(I)||(h.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return h.is.determinate()&&h.is.unchecked()&&!h.should.forceCallbacks()?(h.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!1!==g.beforeUnchecked.apply(I)||(h.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return h.is.indeterminate()&&!h.should.forceCallbacks()?(h.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!1!==g.beforeIndeterminate.apply(I)||(h.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return h.is.determinate()&&!h.should.forceCallbacks()?(h.debug("Should not allow determinate, checkbox is already determinate"),!1):!1!==g.beforeDeterminate.apply(I)||(h.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){return h.is.initialLoad()&&g.fireOnInit},ignoreCallbacks:function(){return D&&!g.fireOnInit}},can:{change:function(){return!(C.hasClass(f.disabled)||C.hasClass(f.readOnly)||w.prop("disabled")||w.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!h.is.radio()}},set:{initialLoad:function(){D=!0},checked:function(){h.verbose("Setting class to checked"),C.removeClass(f.indeterminate).addClass(f.checked),h.is.radio()&&h.uncheckOthers(),h.is.indeterminate()||!h.is.checked()?(h.verbose("Setting state to checked",I),w.prop("indeterminate",!1).prop("checked",!0),h.trigger.change()):h.debug("Input is already checked, skipping input property change")},unchecked:function(){h.verbose("Removing checked class"),C.removeClass(f.indeterminate).removeClass(f.checked),h.is.indeterminate()||!h.is.unchecked()?(h.debug("Setting state to unchecked"),w.prop("indeterminate",!1).prop("checked",!1),h.trigger.change()):h.debug("Input is already unchecked")},indeterminate:function(){h.verbose("Setting class to indeterminate"),C.addClass(f.indeterminate),h.is.indeterminate()?h.debug("Input is already indeterminate, skipping input property change"):(h.debug("Setting state to indeterminate"),w.prop("indeterminate",!0),h.trigger.change())},determinate:function(){h.verbose("Removing indeterminate class"),C.removeClass(f.indeterminate),h.is.determinate()?h.debug("Input is already determinate, skipping input property change"):(h.debug("Setting state to determinate"),w.prop("indeterminate",!1))},disabled:function(){h.verbose("Setting class to disabled"),C.addClass(f.disabled),h.is.disabled()?h.debug("Input is already disabled, skipping input property change"):(h.debug("Setting state to disabled"),w.prop("disabled","disabled"),h.trigger.change())},enabled:function(){h.verbose("Removing disabled class"),C.removeClass(f.disabled),h.is.enabled()?h.debug("Input is already enabled, skipping input property change"):(h.debug("Setting state to enabled"),w.prop("disabled",!1),h.trigger.change())},tabbable:function(){h.verbose("Adding tabindex to checkbox"),w.attr("tabindex")===i&&w.attr("tabindex",0)}},remove:{initialLoad:function(){D=!1}},trigger:{change:function(){var e=t.createEvent("HTMLEvents"),n=w[0];n&&(h.verbose("Triggering native change event"),e.initEvent("change",!0,!1),n.dispatchEvent(e))}},create:{label:function(){w.prevAll(k.label).length>0?(w.prev(k.label).detach().insertAfter(w),h.debug("Moving existing label",x)):h.has.label()||(x=e("<label>").insertAfter(w),h.debug("Creating label",x))}},has:{label:function(){return x.length>0}},bind:{events:function(){h.verbose("Attaching checkbox events"),C.on("click"+v,h.event.click).on("keydown"+v,k.input,h.event.keydown).on("keyup"+v,k.input,h.event.keyup)}},unbind:{events:function(){h.debug("Removing events"),C.off(v)}},uncheckOthers:function(){var e=h.get.otherRadios();h.debug("Unchecking other radios",e),e.removeClass(f.checked)},toggle:function(){h.can.change()?h.is.indeterminate()||h.is.unchecked()?(h.debug("Currently unchecked"),h.check()):h.is.checked()&&h.can.uncheck()&&(h.debug("Currently checked"),h.uncheck()):h.is.radio()||h.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(n,t){if(h.debug("Changing setting",n,t),e.isPlainObject(n))e.extend(!0,g,n);else{if(t===i)return g[n];e.isPlainObject(g[n])?e.extend(!0,g[n],t):g[n]=t}},internal:function(n,t){if(e.isPlainObject(n))e.extend(!0,h,n);else{if(t===i)return h[n];h[n]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,g.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),h.verbose.apply(console,arguments)))},error:function(){g.silent||(h.error=Function.prototype.bind.call(console.error,console,g.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var n,t;g.performance&&(t=(n=(new Date).getTime())-(l||n),l=n,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":t})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var n=g.name+":",t=0;l=!1,clearTimeout(h.performance.timer),e.each(d,function(e,n){t+=n["Execution Time"]}),n+=" "+t+"ms",r&&(n+=" '"+r+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(n),console.table?console.table(d):e.each(d,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(n,t,o){var c,r,l,d=E;return t=t||b,o=O||o,"string"==typeof n&&d!==i&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(t,o){var a=t!=c?o+n[t+1].charAt(0).toUpperCase()+n[t+1].slice(1):n;if(e.isPlainObject(d[a])&&t!=c)d=d[a];else{if(d[a]!==i)return r=d[a],!1;if(!e.isPlainObject(d[o])||t==c)return d[o]!==i?(r=d[o],!1):(h.error(m.method,n),!1);d=d[o]}})),e.isFunction(r)?l=r.apply(o,t):r!==i&&(l=r),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),r}},u?(E===i&&h.initialize(),h.invoke(s)):(E!==i&&E.invoke("destroy"),h.initialize())}),a!==i?a:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document);