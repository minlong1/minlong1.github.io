// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var ra_item, rb_item, ro_item, cylinder_item, total_item, running;
ρσ_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = ρσ_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var ρσ_Iter0 = string_funcs;
        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
        for (var ρσ_Index0 of ρσ_Iter0) {
            name = ρσ_Index0;
            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    ρσ_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";
    var display = canvas;
    var scene = canvas();

    function input(arg) {
    	arg = arg || {}
    	if (arg.prompt !== undefined && arg.prompt != '') return prompt(arg.prompt)
    	else if (typeof arg === 'string') return prompt(arg)
    	else return prompt()
    }

    var version, print, arange, __name__, type, ρσ_ls, scene5, U, L, la_int, ra_int, rb_int, ro_int, la_default_text, ra_default_text, rb_default_text, ro_default_text, scale_factor, scale_default_text, opatom, opbar, opatom_default_text, la, unit, ra, rb, ro, ra_item, rb_item, ro_item, cylinder_item, total_item, running, ρσ_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, it6, ib6, it7, ib7, b;
    version = ρσ_list_decorate([ "3.2", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    var strings = ρσ_modules.pythonize.strings;

    strings();
    "23";
    scene5 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({background: color.black, width: 800, length: 800, center: vector(0, 0, 0)})]);
    "25";
    U = 1;
    "26";
    L = U;
    "29";
    la_int = 3.988;
    "30";
    ra_int = 1.32;
    "31";
    rb_int = .745;
    "32";
    ro_int = 1.26;
    "34";
    la_default_text = str(la_int);
    "35";
    ra_default_text = str(ra_int);
    "36";
    rb_default_text = str(rb_int);
    "37";
    ro_default_text = str(ro_int);
    "39";
    scale_factor = .5;
    "40";
    scale_default_text = str(scale_factor);
    "42";
    opatom = .85;
    "43";
    opbar = 1;
    "44";
    opatom_default_text = str(opatom);
    "47";
    la = 2;
    "48";
    unit = 1;
    "50";
    ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
    "52";
    rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
    "53";
    ro = ro_int["/"](la_int)["*"](la)["*"](scale_factor);
    "55";
    ra_item = ρσ_list_decorate([]);
    "56";
    rb_item = ρσ_list_decorate([]);
    "57";
    ro_item = ρσ_list_decorate([]);
    "58";
    cylinder_item = ρσ_list_decorate([]);
    "59";
    total_item = ρσ_list_decorate([]);
    "61";
    running = false;
    "72";
    async function build(L, ra, rb, ro, opatom, ra_item, rb_item, ro_item, cylinder_item, total_item) {
        var ρσ_ls, L1, b, v, x, m, k, j, i;
        "73";
        L1 = L["+"](1);
        "74";
        for (var ρσ_Index1 = L["-u"](); ρσ_Index1["<"](L1); ρσ_Index1++) {
            i = ρσ_Index1;
            "75";
            for (var ρσ_Index2 = L["-u"](); ρσ_Index2["<"](L1); ρσ_Index2++) {
                j = ρσ_Index2;
                "76";
                for (var ρσ_Index3 = L["-u"](); ρσ_Index3["<"](L1); ρσ_Index3++) {
                    k = ρσ_Index3;
                    "80";
                    if (ρσ_not_equals(L["%"](2), 0)) {
                        "82";
                        if (ρσ_not_equals(i["%"](2), 0) && ρσ_not_equals(j["%"](2), 0) && ρσ_not_equals(k["%"](2), 0)) {
                            "84";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green, opacity: opatom})]);
                            "85";
                            ra_item.append(b);
                            "87";
                            if (i["<="](L["-"](1))) {
                                "88";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(la, 0, 0), radius: .02, color: color.white, opacity: opbar})]);
                                "89";
                                cylinder_item.append(b);
                                "90";
                            }
                            if (j["<="](L["-"](1))) {
                                "91";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, la, 0), radius: .02, color: color.white, opacity: opbar})]);
                                "92";
                                cylinder_item.append(b);
                                "93";
                            }
                            if (k["<="](L["-"](1))) {
                                "94";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, la), radius: .02, color: color.white, opacity: opbar})]);
                                "95";
                                cylinder_item.append(b);
                                "98";
                            }
                        }
                        if (ρσ_equals(i["%"](2), 0) && ρσ_equals(j["%"](2), 0) && ρσ_equals(k["%"](2), 0)) {
                            "100";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom})]);
                            "101";
                            rb_item.append(b);
                            "104";
                            v = ρσ_list_decorate([ vector(i["-"](1), j, k), vector(i["+"](1), j, k), vector(i, j["-"](1), k), vector(i, j["+"](1), k), vector(i, j, k["-"](1)), vector(i, j, k["+"](1)) ]);
                            "105";
                            var ρσ_Iter4 = v;
                            ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
                            for (var ρσ_Index4 of ρσ_Iter4) {
                                x = ρσ_Index4;
                                "106";
                                b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: x, radius: ro, color: color.red, opacity: opatom})]);
                                "107";
                                ro_item.append(b);
                            }
                            "109";
                            for (var ρσ_Index5 = 2; ρσ_Index5["<"](6); ρσ_Index5++) {
                                m = ρσ_Index5;
                                "110";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[0], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[0]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "111";
                                cylinder_item.append(b);
                                "112";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[1], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[1]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "113";
                                cylinder_item.append(b);
                            }
                            "114";
                            for (var ρσ_Index6 = 4; ρσ_Index6["<"](6); ρσ_Index6++) {
                                m = ρσ_Index6;
                                "115";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[2], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[2]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "116";
                                cylinder_item.append(b);
                                "117";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[3], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[3]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "118";
                                cylinder_item.append(b);
                                "122";
                            }
                        }
                    } else {
                        "124";
                        if (ρσ_equals(i["%"](2), 0) && ρσ_equals(j["%"](2), 0) && ρσ_equals(k["%"](2), 0)) {
                            "126";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green, opacity: opatom})]);
                            "127";
                            ra_item.append(b);
                            "129";
                            if (i["<="](L["-"](1))) {
                                "130";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(la, 0, 0), radius: .02, color: color.white})]);
                                "131";
                                cylinder_item.append(b);
                                "132";
                            }
                            if (j["<="](L["-"](1))) {
                                "133";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, la, 0), radius: .02, color: color.white})]);
                                "134";
                                cylinder_item.append(b);
                                "135";
                            }
                            if (k["<="](L["-"](1))) {
                                "136";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, la), radius: .02, color: color.white})]);
                                "137";
                                cylinder_item.append(b);
                                "140";
                            }
                        }
                        if (ρσ_not_equals(i["%"](2), 0) && ρσ_not_equals(j["%"](2), 0) && ρσ_not_equals(k["%"](2), 0)) {
                            "142";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom})]);
                            "143";
                            rb_item.append(b);
                            "146";
                            v = ρσ_list_decorate([ vector(i["-"](1), j, k), vector(i["+"](1), j, k), vector(i, j["-"](1), k), vector(i, j["+"](1), k), vector(i, j, k["-"](1)), vector(i, j, k["+"](1)) ]);
                            "147";
                            var ρσ_Iter7 = v;
                            ρσ_Iter7 = ((typeof ρσ_Iter7[Symbol.iterator] === "function") ? (ρσ_Iter7 instanceof Map ? ρσ_Iter7.keys() : ρσ_Iter7) : Object.keys(ρσ_Iter7));
                            for (var ρσ_Index7 of ρσ_Iter7) {
                                x = ρσ_Index7;
                                "148";
                                b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: x, radius: ro, color: color.red, opacity: opatom})]);
                                "149";
                                ro_item.append(b);
                            }
                            "151";
                            for (var ρσ_Index8 = 2; ρσ_Index8["<"](6); ρσ_Index8++) {
                                m = ρσ_Index8;
                                "152";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[0], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[0]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "153";
                                cylinder_item.append(b);
                                "154";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[1], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[1]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "155";
                                cylinder_item.append(b);
                            }
                            "156";
                            for (var ρσ_Index9 = 4; ρσ_Index9["<"](6); ρσ_Index9++) {
                                m = ρσ_Index9;
                                "157";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[2], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[2]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "158";
                                cylinder_item.append(b);
                                "159";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: v[3], axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](v[3]), radius: .02, color: color.yellow, opacity: opbar})]);
                                "160";
                                cylinder_item.append(b);
                            }
                        }
                    }
                }
            }
        }
        "165";
        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
        "167";
        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ro", "opatom", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "169";
    async function build_button(s) {
        "170";
        "171";
        "172";
        "173";
        "174";
        "175";
        "176";
        running = !running;
        "177";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "181";
    async function clear() {
        var ρσ_ls, i;
        "182";
        var ρσ_Iter10 = ra_item;
        ρσ_Iter10 = ((typeof ρσ_Iter10[Symbol.iterator] === "function") ? (ρσ_Iter10 instanceof Map ? ρσ_Iter10.keys() : ρσ_Iter10) : Object.keys(ρσ_Iter10));
        for (var ρσ_Index10 of ρσ_Iter10) {
            i = ρσ_Index10;
            "183";
            i.visible = false;
            "184";
            i = undefined;
        }
        "185";
        var ρσ_Iter11 = rb_item;
        ρσ_Iter11 = ((typeof ρσ_Iter11[Symbol.iterator] === "function") ? (ρσ_Iter11 instanceof Map ? ρσ_Iter11.keys() : ρσ_Iter11) : Object.keys(ρσ_Iter11));
        for (var ρσ_Index11 of ρσ_Iter11) {
            i = ρσ_Index11;
            "186";
            i.visible = false;
            "187";
            i = undefined;
        }
        "188";
        var ρσ_Iter12 = ro_item;
        ρσ_Iter12 = ((typeof ρσ_Iter12[Symbol.iterator] === "function") ? (ρσ_Iter12 instanceof Map ? ρσ_Iter12.keys() : ρσ_Iter12) : Object.keys(ρσ_Iter12));
        for (var ρσ_Index12 of ρσ_Iter12) {
            i = ρσ_Index12;
            "189";
            i.visible = false;
            "190";
            i = undefined;
        }
        "191";
        var ρσ_Iter13 = cylinder_item;
        ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
        for (var ρσ_Index13 of ρσ_Iter13) {
            i = ρσ_Index13;
            "192";
            i.visible = false;
            "193";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "196";
    async function reset() {
        var ρσ_ls, ρσ_unpack;
        "197";
        "198";
        "199";
        "200";
        "201";
        "202";
        (await clear());
        "203";
        ρσ_unpack = (await build(L, ra, rb, ro, opatom, ra_item, rb_item, ro_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(5, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        rb_item = ρσ_unpack[1];
        ro_item = ρσ_unpack[2];
        cylinder_item = ρσ_unpack[3];
        total_item = ρσ_unpack[4];
    };
    if (!reset.__module__) Object.defineProperties(reset, {
        __module__ : {value: null}
    });

    "206";
    async function set_la(s) {
        var ρσ_ls, la_int, ra, rb, ro, x, y, z;
        "207";
        la_int = s.number;
        "208";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "209";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "210";
        ro = ro_int["/"](la_int)["*"](la)["*"](scale_factor);
        "211";
        var ρσ_Iter14 = ra_item;
        ρσ_Iter14 = ((typeof ρσ_Iter14[Symbol.iterator] === "function") ? (ρσ_Iter14 instanceof Map ? ρσ_Iter14.keys() : ρσ_Iter14) : Object.keys(ρσ_Iter14));
        for (var ρσ_Index14 of ρσ_Iter14) {
            x = ρσ_Index14;
            "212";
            x.radius = ra;
        }
        "213";
        var ρσ_Iter15 = rb_item;
        ρσ_Iter15 = ((typeof ρσ_Iter15[Symbol.iterator] === "function") ? (ρσ_Iter15 instanceof Map ? ρσ_Iter15.keys() : ρσ_Iter15) : Object.keys(ρσ_Iter15));
        for (var ρσ_Index15 of ρσ_Iter15) {
            y = ρσ_Index15;
            "214";
            y.radius = rb;
        }
        "215";
        var ρσ_Iter16 = ro_item;
        ρσ_Iter16 = ((typeof ρσ_Iter16[Symbol.iterator] === "function") ? (ρσ_Iter16 instanceof Map ? ρσ_Iter16.keys() : ρσ_Iter16) : Object.keys(ρσ_Iter16));
        for (var ρσ_Index16 of ρσ_Iter16) {
            z = ρσ_Index16;
            "216";
            z.radius = ro;
        }
        "217";
        return la;
    };
    if (!set_la.__argnames__) Object.defineProperties(set_la, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "220";
    async function set_ra(s) {
        var ρσ_ls, ra_int, ra, x;
        "221";
        ra_int = s.number;
        "222";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "223";
        var ρσ_Iter17 = ra_item;
        ρσ_Iter17 = ((typeof ρσ_Iter17[Symbol.iterator] === "function") ? (ρσ_Iter17 instanceof Map ? ρσ_Iter17.keys() : ρσ_Iter17) : Object.keys(ρσ_Iter17));
        for (var ρσ_Index17 of ρσ_Iter17) {
            x = ρσ_Index17;
            "224";
            x.radius = ra;
        }
        "225";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "227";
    async function set_rb(s) {
        var ρσ_ls, rb_int, rb, y;
        "228";
        rb_int = s.number;
        "229";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "230";
        var ρσ_Iter18 = rb_item;
        ρσ_Iter18 = ((typeof ρσ_Iter18[Symbol.iterator] === "function") ? (ρσ_Iter18 instanceof Map ? ρσ_Iter18.keys() : ρσ_Iter18) : Object.keys(ρσ_Iter18));
        for (var ρσ_Index18 of ρσ_Iter18) {
            y = ρσ_Index18;
            "231";
            y.radius = rb;
        }
        "232";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "235";
    async function set_ro(s) {
        var ρσ_ls, ro_int, ro, y;
        "236";
        ro_int = s.number;
        "237";
        ro = ro_int["/"](la_int)["*"](la)["*"](scale_factor);
        "238";
        var ρσ_Iter19 = ro_item;
        ρσ_Iter19 = ((typeof ρσ_Iter19[Symbol.iterator] === "function") ? (ρσ_Iter19 instanceof Map ? ρσ_Iter19.keys() : ρσ_Iter19) : Object.keys(ρσ_Iter19));
        for (var ρσ_Index19 of ρσ_Iter19) {
            y = ρσ_Index19;
            "239";
            y.radius = ro;
        }
        "240";
        return ro;
    };
    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "242";
    async function set_scale_factor(s) {
        var ρσ_ls, scale_factor, ra, rb, ro, x, y, z;
        "243";
        scale_factor = s.number;
        "244";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "245";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "246";
        ro = ro_int["/"](la_int)["*"](la)["*"](scale_factor);
        "247";
        var ρσ_Iter20 = ra_item;
        ρσ_Iter20 = ((typeof ρσ_Iter20[Symbol.iterator] === "function") ? (ρσ_Iter20 instanceof Map ? ρσ_Iter20.keys() : ρσ_Iter20) : Object.keys(ρσ_Iter20));
        for (var ρσ_Index20 of ρσ_Iter20) {
            x = ρσ_Index20;
            "248";
            x.radius = ra;
        }
        "249";
        var ρσ_Iter21 = rb_item;
        ρσ_Iter21 = ((typeof ρσ_Iter21[Symbol.iterator] === "function") ? (ρσ_Iter21 instanceof Map ? ρσ_Iter21.keys() : ρσ_Iter21) : Object.keys(ρσ_Iter21));
        for (var ρσ_Index21 of ρσ_Iter21) {
            y = ρσ_Index21;
            "250";
            y.radius = rb;
        }
        "251";
        var ρσ_Iter22 = ro_item;
        ρσ_Iter22 = ((typeof ρσ_Iter22[Symbol.iterator] === "function") ? (ρσ_Iter22 instanceof Map ? ρσ_Iter22.keys() : ρσ_Iter22) : Object.keys(ρσ_Iter22));
        for (var ρσ_Index22 of ρσ_Iter22) {
            z = ρσ_Index22;
            "252";
            z.radius = ro;
        }
        "253";
        return [scale_factor, ra, rb, ro];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "256";
    async function set_L(s) {
        var ρσ_ls, L, ρσ_unpack;
        "257";
        "258";
        "259";
        "260";
        "261";
        "262";
        L = s.number;
        "263";
        (await clear());
        "264";
        ra_item = ρσ_list_decorate([]);
        "265";
        rb_item = ρσ_list_decorate([]);
        "266";
        ro_item = ρσ_list_decorate([]);
        "267";
        cylinder_item = ρσ_list_decorate([]);
        "268";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "269";
        scene5.center = vector(0, 0, 0);
        "270";
        ρσ_unpack = (await build(L, ra, rb, ro, opatom, ra_item, rb_item, ro_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(5, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        rb_item = ρσ_unpack[1];
        ro_item = ρσ_unpack[2];
        cylinder_item = ρσ_unpack[3];
        total_item = ρσ_unpack[4];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "273";
    async function set_opatom(s) {
        var ρσ_ls, opatom, i, j, k;
        "274";
        "275";
        "276";
        "277";
        "278";
        "279";
        opatom = s.number;
        "280";
        var ρσ_Iter23 = ra_item;
        ρσ_Iter23 = ((typeof ρσ_Iter23[Symbol.iterator] === "function") ? (ρσ_Iter23 instanceof Map ? ρσ_Iter23.keys() : ρσ_Iter23) : Object.keys(ρσ_Iter23));
        for (var ρσ_Index23 of ρσ_Iter23) {
            i = ρσ_Index23;
            "281";
            i.opacity = opatom;
        }
        "282";
        var ρσ_Iter24 = rb_item;
        ρσ_Iter24 = ((typeof ρσ_Iter24[Symbol.iterator] === "function") ? (ρσ_Iter24 instanceof Map ? ρσ_Iter24.keys() : ρσ_Iter24) : Object.keys(ρσ_Iter24));
        for (var ρσ_Index24 of ρσ_Iter24) {
            j = ρσ_Index24;
            "283";
            j.opacity = opatom;
        }
        "284";
        var ρσ_Iter25 = ro_item;
        ρσ_Iter25 = ((typeof ρσ_Iter25[Symbol.iterator] === "function") ? (ρσ_Iter25 instanceof Map ? ρσ_Iter25.keys() : ρσ_Iter25) : Object.keys(ρσ_Iter25));
        for (var ρσ_Index25 of ρσ_Iter25) {
            k = ρσ_Index25;
            "285";
            k.opacity = opatom;
        }
    };
    if (!set_opatom.__argnames__) Object.defineProperties(set_opatom, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "290";
    ρσ_unpack = (await build(L, ra, rb, ro, opatom, ra_item, rb_item, ro_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(5, ρσ_unpack);
    ra_item = ρσ_unpack[0];
    rb_item = ρσ_unpack[1];
    ro_item = ρσ_unpack[2];
    cylinder_item = ρσ_unpack[3];
    total_item = ρσ_unpack[4];
    "295";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h2>Perovskite Example: Strontium Titanate (<b>SrTiO<sub>3<\/sub></b>)</h2><hr>", pos: scene5.title_anchor})]);
    "323";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\nA <b>Perovskite</b> was first referred to a colourless mineral of Calcium Titanate with the chemical \nformula <b> CaTiO<sub>3</sub> </b>. It is discovered by German mineralogist Gustave Rose who named it \nafter a Russian mineralogist Lev Alexeievitch Perovskite. Later, <b>perovskites are referred to a family \nof materials with the same crystal structure as CaTiO<sub>3</sub></b>. So the general chemical formula \nfor this category of perovskite compounds is <b>ABX<sub>3</sub></b>, where A is a metal cation (positively \ncharged ion), B is a cation and X is an anion (negatively charged ion).  If X is oxygen (O), the sub-category \ncan also be represented as <b> ABO<sub>3</sub> </b>.\n\n<b>CaTiO<sub>3</sub> </b> consists of three types of ions: positive Calcium ions (symbol: Ca+), Titanium ions (symbol:\nTi+) and negative Oxygen ions (symbol: O-) which alternate with each other in each of the three dimensions. In \na unit cell, Ca+ occupies the corners,  Ti+ occupies the center of the lattice and O- are at the center of faces. \n\nSimilarly, <b> SrTiO<sub>3</sub> </b> (Strontium Titanate) consists of three types of ions: positive Strontium \nions (symbol: Sr+), Titanium ions (symbol: Ti+) and negative Oxygen ions (symbol: O-) in the same way. It is \none of the few materials with <b>ideal perovskite structure</b> (no slight distortion). \n\nPerovskites are of great importance in material science and can be widely applied to photovoltaics, laser, \nsemiconductors and so on. \n\n<b>Perovskite solar cells</b>: Solar cells with perovskite structures have shown remarkable progress in \nimproving energy conversion efficiency, from reports of about 3% in 2006 to over 24% in 2019 and thus are \nthought to be a frontier energy solution. Department of Energy(DOE) is of great interest in research to increase \nthe efficiency and lifetime of hybrid organic-inorganic perovskite solar cells. Targeted materials include \nmethylammonium lead halide, i.e., <b> CH<sub>3</sub>NH<sub>3</sub>PbX<sub>3</sub> </b>, where X = I, Br or Cl.\n\nThis online tool is designed for demonstrate ideal Perovskite structure using Strontium Titanate (<b>SrTiO<sub>3</sub></b>).\n", pos: scene5.title_anchor})]);
    "326";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Structure Parameters</h3>", pos: scene5.title_anchor})]);
    "341";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n<ul><li><b>L</b>: An integer number showing the maximum coordinate where an atom/ion can be placed. \n<li><b>a</b>: A standard lattice parameter presenting the distance between 2 neighboring Sr+ ions.</li><li><b><font color =\"Green\">r_a<font color =\"black\"></b>: ionic radius of Sr+ [<font color = \"Green\">Green<font color =\"black\">] </li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: ionic radius of Ti+ [<font color =\"Blue\">Blue<font color =\"black\">] </li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: ionic radius of O- [<font color =\"Red\">Red<font color =\"black\">] </li><li><b>scale</b>: A parameter between 0 and 1 to control the representation styles of crystal structures. \nScale=1 generates a <b>hard-sphere model</b> for the atomic arrangement. Atoms/ions are thought of as \nbeing solid spheres having well-defined, realistic diameters.  \nScale<1 generates a <b>reduced sphere model</b> where atom/ions are represented by spheres with reduced \nsizes by the factor of “scale”.  </li><li><b>opacity</b>: A parameter controlling the opacity of atom/ion spheres.</li></ul>", pos: scene5.title_anchor})]);
    "348";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotation</b>: (1) Press the right button of the mouse and drag or (2) type Ctrl key and drag</li><li><b>Zoom</b>:  Use the scroll wheel of the mouse </li></ul>", pos: scene5.title_anchor})]);
    "352";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Parameters:</h3>Adjust the parameters below to build up another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "354";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "360";
    b1 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "361";
    b2 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "363";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n"})]);
    "367";
    it1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "368";
    ib1 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "369";
    scene5.append_to_caption("\n");
    "371";
    it2 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "a: "})]);
    (await sleep(.1));
    "372";
    ib2 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_la, text: la_default_text})]);
    "373";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "374";
    scene5.append_to_caption("\n");
    "376";
    it3 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "377";
    ib3 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "378";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "379";
    scene5.append_to_caption("\n");
    "381";
    it4 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "rb: "})]);
    (await sleep(.1));
    "382";
    ib4 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "383";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "384";
    scene5.append_to_caption("\n");
    "386";
    it5 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ro: "})]);
    (await sleep(.1));
    "387";
    ib5 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: ro_default_text})]);
    "388";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "389";
    scene5.append_to_caption("\n");
    "393";
    it6 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "394";
    ib6 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "395";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(Input a number between 0 and 1)"})]);
    "396";
    scene5.append_to_caption("\n");
    "400";
    it7 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "opacity: "})]);
    (await sleep(.1));
    "401";
    ib7 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_opatom, text: opatom_default_text})]);
    "402";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(Change opacity of atoms between 0 and 1)"})]);
    "408";
    scene5.append_to_caption("\n\n");
    "411";
    (await MathJax.Hub.Queue(ρσ_list_decorate([ "Typeset", MathJax.Hub ])));
    "414";
    while (true) {
        "415";
        (await rate(100));
        "416";
        if (running) {
            "417";
            var ρσ_Iter26 = total_item;
            ρσ_Iter26 = ((typeof ρσ_Iter26[Symbol.iterator] === "function") ? (ρσ_Iter26 instanceof Map ? ρσ_Iter26.keys() : ρσ_Iter26) : Object.keys(ρσ_Iter26));
            for (var ρσ_Index26 of ρσ_Iter26) {
                b = ρσ_Index26;
                "418";
                ρσ_interpolate_kwargs.call(b, b.rotate, [ρσ_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
