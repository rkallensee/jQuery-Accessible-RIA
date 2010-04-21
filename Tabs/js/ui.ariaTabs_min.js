/*
 * jQuery UI AriaTabs (12.04.10)
 * http://github.com/fnagel/jQuery-Accessible-RIA
 *
 * Copyright (c) 2009 Felix Nagel for Namics (Deustchland) GmbH
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Depends: ui.core.js 1.8
 *   		ui.tabs.js
 */
(function(a){a.fn.extend(a.ui.tabs.prototype,{_create:function(){var c=this,d=this.options;c._tabify(true);c.element.attr("role","application");c.list.attr("role","tablist");for(var b=0;b<c.anchors.length;b++){c._ariaInit(b);}c.element.keydown(function(e){switch(e.keyCode){case a.ui.keyCode.RIGHT:e.preventDefault();c.select(d.selected+1);break;case a.ui.keyCode.DOWN:e.preventDefault();c.select(d.selected+1);break;case a.ui.keyCode.UP:e.preventDefault();c.select(d.selected-1);break;case a.ui.keyCode.LEFT:e.preventDefault();c.select(d.selected-1);break;case a.ui.keyCode.END:e.preventDefault();c.select(c.anchors.length-1);break;case a.ui.keyCode.HOME:e.preventDefault();c.select(0);break;}});},_original_load:a.ui.tabs.prototype.load,load:function(c){for(var b=0;b<this.anchors.length;b++){this._ariaSet(b,false);if(a.data(this.anchors[b],"href.tabs")){a(this.panels[b]).removeAttr("aria-live").removeAttr("aria-busy");}}if(a.data(this.anchors[c],"href.tabs")){a(this.panels[c]).attr("aria-live","polite").attr("aria-busy","true");}this._original_load(c);if(a.data(this.anchors[c],"href.tabs")){a(this.panels[c]).attr("aria-busy","false");}this._ariaSet(c,true);},_ariaSet:function(b,d){var c=(d)?0:-1;a(this.anchors[b]).attr("tabindex",c).attr("aria-selected",d);a(this.panels[b]).attr("aria-hidden",!d).attr("aria-expanded",d);},_ariaInit:function(c){var b=this;var d=a(this.panels[c]).attr("id");a(this.anchors[c]).attr("role","tab").attr("aria-controls",d).attr("id",d+"-tab").parent().attr("role","presentation");a(this.panels[c]).attr("role","tabpanel").attr("aria-labelledby",d+"-tab");if(this.options.collapsible){a(this.anchors[c]).bind(this.options.event,function(e){b._ariaSet(c,!a(b.panels[c]).hasClass("ui-tabs-hide"));});}},_original_add:a.ui.tabs.prototype.add,add:function(d,c,b){this._original_add(d,c,b);this.element.attr("aria-live","polite").attr("aria-relevant","additions");if(b){this._ariaInit(b);this._ariaSet(b,false);}else{this._ariaInit(this.anchors.length-1);this._ariaSet(this.anchors.length-1,false);}},_original_remove:a.ui.tabs.prototype.remove,remove:function(b){this._original_remove(b);this.element.attr("aria-live","polite").attr("aria-relevant","removals");},_original_destroy:a.ui.tabs.prototype.destroy,destroy:function(){var c=this,d=this.options;c.element.removeAttr("role").removeAttr("aria-live").removeAttr("aria-relevant");c.list.removeAttr("role");for(var b=0;b<c.anchors.length;b++){a(c.anchors[b]).removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("role").removeAttr("id").removeAttr("tabindex").parent().removeAttr("role");a(c.panels[b]).removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("aria-labelledby").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-relevant").removeAttr("role");}this._original_destroy();}});})(jQuery);