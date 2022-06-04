// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var string, it8, L_number, ra_item, rb_item, cylinder_item, total_item, running;
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

    var version, print, arange, __name__, type, ρσ_ls, scene5, U, L, la_int, ra_int, rb_int, la_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, la, unit, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, ρσ_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, ib7, it8, b;
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
    "15";
    scene5 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({background: color.black, width: 800, length: 800, center: vector(0, 0, 0)})]);
    "17";
    U = 1;
    "18";
    L = U;
    "19";
    la_int = 5.55;
    "20";
    ra_int = 1.29;
    "21";
    rb_int = 1.67;
    "23";
    la_default_text = str(la_int);
    "24";
    ra_default_text = str(ra_int);
    "25";
    rb_default_text = str(rb_int);
    "27";
    scale_factor = .5;
    "28";
    scale_default_text = str(scale_factor);
    "31";
    la = 2;
    "32";
    unit = 1;
    "33";
    ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
    "35";
    rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
    "39";
    scene5.autoscale = true;
    "49";
    ra_item = ρσ_list_decorate([]);
    "50";
    rb_item = ρσ_list_decorate([]);
    "51";
    cylinder_item = ρσ_list_decorate([]);
    "52";
    total_item = ρσ_list_decorate([]);
    "53";
    running = false;
    "57";
    async function axis_number(cylinder) {
        var ρσ_ls, axis_num;
        "58";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && ρσ_equals(cylinder.axis.x, 1))) {
            "60";
            axis_num = 0;
            "61";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && ρσ_equals(cylinder.axis.y, 1))) {
            "63";
            axis_num = 1;
            "64";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && ρσ_equals(cylinder.axis.z, 1))) {
            "66";
            axis_num = 2;
        }
        "67";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "69";
    async function gen_csv() {
        var ρσ_ls, file, i, axis_num;
        "70";
        file = (await open("nacl_v1.csv", "w+"));
        "71";
        (await file.write("#type,x,y,z,radius\n"));
        "73";
        var ρσ_Iter1 = range(len(ra_item));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "75";
            (await file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "77";
        var ρσ_Iter2 = range(len(rb_item));
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            i = ρσ_Index2;
            "79";
            (await file.write(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "82";
        (await file.write("#type,x,y,z,axis\n"));
        "83";
        var ρσ_Iter3 = range(len(cylinder_item));
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            i = ρσ_Index3;
            "84";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "86";
            (await file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n")));
        }
        "87";
        (await file.close());
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "89";
    async function print_csv() {
        var ρσ_ls, string_list, i, axis_num;
        "90";
        "91";
        "92";
        "94";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || ρσ_not_equals(it8.text, "None")))) {
            "95";
            (await del_csv());
        }
        "98";
        string_list = ρσ_list_decorate([]);
        "99";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "100";
        string_list.append("#type,x,y,z,radius\n");
        "104";
        var ρσ_Iter4 = range(len(ra_item));
        ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
        for (var ρσ_Index4 of ρσ_Iter4) {
            i = ρσ_Index4;
            "108";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",")["+"]("na\n"));
        }
        "112";
        var ρσ_Iter5 = range(len(rb_item));
        ρσ_Iter5 = ((typeof ρσ_Iter5[Symbol.iterator] === "function") ? (ρσ_Iter5 instanceof Map ? ρσ_Iter5.keys() : ρσ_Iter5) : Object.keys(ρσ_Iter5));
        for (var ρσ_Index5 of ρσ_Iter5) {
            i = ρσ_Index5;
            "116";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",")["+"]("na\n"));
        }
        "120";
        string_list.append("#type,x,y,z,axis,length\n");
        "121";
        var ρσ_Iter6 = range(len(cylinder_item));
        ρσ_Iter6 = ((typeof ρσ_Iter6[Symbol.iterator] === "function") ? (ρσ_Iter6 instanceof Map ? ρσ_Iter6.keys() : ρσ_Iter6) : Object.keys(ρσ_Iter6));
        for (var ρσ_Index6 of ρσ_Iter6) {
            i = ρσ_Index6;
            "122";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "129";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "132";
        string_list.append("<\/p>");
        "133";
        string = (await "".join(string_list));
        "134";
        it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "138";
    async function del_csv() {
        "139";
        "141";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "144";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var ρσ_ls, b, k, j, i;
        "145";
        for (var ρσ_Index7 = L["-u"](); ρσ_Index7["<"](L["+"](1)); ρσ_Index7++) {
            i = ρσ_Index7;
            "146";
            for (var ρσ_Index8 = L["-u"](); ρσ_Index8["<"](L["+"](1)); ρσ_Index8++) {
                j = ρσ_Index8;
                "147";
                for (var ρσ_Index9 = L["-u"](); ρσ_Index9["<"](L["+"](1)); ρσ_Index9++) {
                    k = ρσ_Index9;
                    "149";
                    if (ρσ_equals(L["%"](2), 1)) {
                        "150";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 0)) {
                            "152";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: (await color.gray(.9))})]);
                            "153";
                            ra_item.append(b);
                            "154";
                        } else {
                            "155";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "156";
                            rb_item.append(b);
                            "158";
                        }
                        if (i["+"](1)["<="](L)) {
                            "159";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "160";
                            cylinder_item.append(b);
                            "161";
                        }
                        if (j["+"](1)["<="](L)) {
                            "162";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "163";
                            cylinder_item.append(b);
                            "164";
                        }
                        if (k["+"](1)["<="](L)) {
                            "165";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "166";
                            cylinder_item.append(b);
                            "168";
                        }
                    } else {
                        "169";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 1)) {
                            "171";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: (await color.gray(.9))})]);
                            "172";
                            ra_item.append(b);
                            "173";
                        } else {
                            "174";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "175";
                            rb_item.append(b);
                            "176";
                        }
                        if (i["<"](L)) {
                            "177";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "178";
                            cylinder_item.append(b);
                            "179";
                        }
                        if (j["<"](L)) {
                            "180";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "181";
                            cylinder_item.append(b);
                            "182";
                        }
                        if (k["<"](L)) {
                            "183";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "184";
                            cylinder_item.append(b);
                        }
                    }
                }
            }
        }
        "186";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "188";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "190";
    async function build_button(s) {
        "191";
        "192";
        "193";
        "194";
        "195";
        "196";
        running = !running;
        "197";
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

    "202";
    async function clear() {
        var ρσ_ls, i;
        "203";
        var ρσ_Iter10 = ra_item;
        ρσ_Iter10 = ((typeof ρσ_Iter10[Symbol.iterator] === "function") ? (ρσ_Iter10 instanceof Map ? ρσ_Iter10.keys() : ρσ_Iter10) : Object.keys(ρσ_Iter10));
        for (var ρσ_Index10 of ρσ_Iter10) {
            i = ρσ_Index10;
            "204";
            i.visible = false;
            "205";
            i = undefined;
        }
        "207";
        var ρσ_Iter11 = rb_item;
        ρσ_Iter11 = ((typeof ρσ_Iter11[Symbol.iterator] === "function") ? (ρσ_Iter11 instanceof Map ? ρσ_Iter11.keys() : ρσ_Iter11) : Object.keys(ρσ_Iter11));
        for (var ρσ_Index11 of ρσ_Iter11) {
            i = ρσ_Index11;
            "208";
            i.visible = false;
            "209";
            i = undefined;
        }
        "211";
        var ρσ_Iter12 = cylinder_item;
        ρσ_Iter12 = ((typeof ρσ_Iter12[Symbol.iterator] === "function") ? (ρσ_Iter12 instanceof Map ? ρσ_Iter12.keys() : ρσ_Iter12) : Object.keys(ρσ_Iter12));
        for (var ρσ_Index12 of ρσ_Iter12) {
            i = ρσ_Index12;
            "212";
            i.visible = false;
            "213";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "217";
    async function reset() {
        var ρσ_ls, ρσ_unpack;
        "218";
        "219";
        "220";
        "221";
        "222";
        (await clear());
        "223";
        ρσ_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(4, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        rb_item = ρσ_unpack[1];
        cylinder_item = ρσ_unpack[2];
        total_item = ρσ_unpack[3];
    };
    if (!reset.__module__) Object.defineProperties(reset, {
        __module__ : {value: null}
    });

    "227";
    async function set_la(s) {
        var ρσ_ls, la_int, ra, rb, x, y;
        "228";
        la_int = s.number;
        "229";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "230";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "231";
        var ρσ_Iter13 = ra_item;
        ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
        for (var ρσ_Index13 of ρσ_Iter13) {
            x = ρσ_Index13;
            "232";
            x.radius = ra;
        }
        "233";
        var ρσ_Iter14 = rb_item;
        ρσ_Iter14 = ((typeof ρσ_Iter14[Symbol.iterator] === "function") ? (ρσ_Iter14 instanceof Map ? ρσ_Iter14.keys() : ρσ_Iter14) : Object.keys(ρσ_Iter14));
        for (var ρσ_Index14 of ρσ_Iter14) {
            y = ρσ_Index14;
            "234";
            y.radius = rb;
        }
        "235";
        return la;
    };
    if (!set_la.__argnames__) Object.defineProperties(set_la, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "239";
    async function set_ra(s) {
        var ρσ_ls, ra_int, ra, x;
        "240";
        ra_int = s.number;
        "241";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "242";
        var ρσ_Iter15 = ra_item;
        ρσ_Iter15 = ((typeof ρσ_Iter15[Symbol.iterator] === "function") ? (ρσ_Iter15 instanceof Map ? ρσ_Iter15.keys() : ρσ_Iter15) : Object.keys(ρσ_Iter15));
        for (var ρσ_Index15 of ρσ_Iter15) {
            x = ρσ_Index15;
            "243";
            x.radius = ra;
        }
        "244";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "246";
    async function set_rb(s) {
        var ρσ_ls, rb_int, rb, y;
        "247";
        rb_int = s.number;
        "248";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "249";
        var ρσ_Iter16 = rb_item;
        ρσ_Iter16 = ((typeof ρσ_Iter16[Symbol.iterator] === "function") ? (ρσ_Iter16 instanceof Map ? ρσ_Iter16.keys() : ρσ_Iter16) : Object.keys(ρσ_Iter16));
        for (var ρσ_Index16 of ρσ_Iter16) {
            y = ρσ_Index16;
            "250";
            y.radius = rb;
        }
        "251";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "253";
    async function set_scale_factor(s) {
        var ρσ_ls, scale_factor, ra, rb, x, y;
        "254";
        scale_factor = s.number;
        "255";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "256";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "257";
        var ρσ_Iter17 = ra_item;
        ρσ_Iter17 = ((typeof ρσ_Iter17[Symbol.iterator] === "function") ? (ρσ_Iter17 instanceof Map ? ρσ_Iter17.keys() : ρσ_Iter17) : Object.keys(ρσ_Iter17));
        for (var ρσ_Index17 of ρσ_Iter17) {
            x = ρσ_Index17;
            "258";
            x.radius = ra;
        }
        "259";
        var ρσ_Iter18 = rb_item;
        ρσ_Iter18 = ((typeof ρσ_Iter18[Symbol.iterator] === "function") ? (ρσ_Iter18 instanceof Map ? ρσ_Iter18.keys() : ρσ_Iter18) : Object.keys(ρσ_Iter18));
        for (var ρσ_Index18 of ρσ_Iter18) {
            y = ρσ_Index18;
            "260";
            y.radius = rb;
        }
        "261";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "263";
    async function set_L(s) {
        var ρσ_ls, L, ρσ_unpack;
        "264";
        "265";
        "266";
        "267";
        "268";
        "269";
        L = s.number;
        "270";
        L_number = L;
        "271";
        (await clear());
        "272";
        ra_item = ρσ_list_decorate([]);
        "273";
        rb_item = ρσ_list_decorate([]);
        "274";
        cylinder_item = ρσ_list_decorate([]);
        "275";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "276";
        scene5.center = vector(0, 0, 0);
        "278";
        ρσ_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(4, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        rb_item = ρσ_unpack[1];
        cylinder_item = ρσ_unpack[2];
        total_item = ρσ_unpack[3];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "284";
    ρσ_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(4, ρσ_unpack);
    ra_item = ρσ_unpack[0];
    rb_item = ρσ_unpack[1];
    cylinder_item = ρσ_unpack[2];
    total_item = ρσ_unpack[3];
    "290";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h2>fcc Lattice Example: Silver Chloride (AgCl)</h2><hr>", pos: scene5.title_anchor})]);
    "295";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<b>Silver Chloride</b> with the chemical symbol \\(AgCl \\) is an ionic compound similar to Sodium Chloride.\nIt consists of two types of ions: silver ions and chloride ions which alternate with each other in each of \nthe three dimensions. The repeating pattern is in a shape of of cube, and there are lattice points on the \nfaces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor})]);
    "301";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Structure Parameters</h3>", pos: scene5.title_anchor})]);
    "317";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n<ul><li><b>L</b>: An integer number showing the maximum coordinate where an atom/ion can be placed. \nFor example, L=1 means atoms/ions will be arranged at x=-1, 0, 1, y=-1,0,1, and z=-1, 0, 1. </li><li><b>a</b>: A standard lattice constant showing the distance between 2 neighboring Na+ ions.</li><li><b><font color = \"silver\">r_a<font color =\"black\"></b>: Ionic radius of Silver [<font color = \"Silver\">Silver<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Ionic radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b>scale</b>: A parameter between 0 and 1 to control the representation styles of crystal structures. \nScale=1 generates a <b>hard-sphere model</b> for the atomic arrangement. Atoms/ions are thought of as \nbeing solid spheres having well-defined, realistic diameters.  \nScale<1 generates a <b>reduced sphere model</b> where atom/ions are represented by spheres with reduced \nsizes by the factor of “scale”.  </li></ul>", pos: scene5.title_anchor})]);
    "324";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotation</b>: (1) Press the right button of the mouse and drag or (2) type Ctrl key and drag</li><li><b>Zoom</b>:  Use the scroll wheel of the mouse </li></ul>", pos: scene5.title_anchor})]);
    "328";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Parameters:</h3>Adjust the parameters below to build up another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "330";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "336";
    b1 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "337";
    b2 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "340";
    it1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "341";
    ib1 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "343";
    scene5.append_to_caption("\n");
    "345";
    it2 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "a: "})]);
    (await sleep(.1));
    "346";
    ib2 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_la, text: la_default_text})]);
    "348";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "349";
    scene5.append_to_caption("\n");
    "351";
    it3 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "352";
    ib3 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "353";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "355";
    scene5.append_to_caption("\n");
    "357";
    it4 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "rb: "})]);
    (await sleep(.1));
    "358";
    ib4 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "359";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "361";
    scene5.append_to_caption("\n");
    "364";
    it5 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "365";
    ib5 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "366";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "( Input a number between 0 and 1 )"})]);
    "368";
    scene5.append_to_caption("\n\n");
    "384";
    ib6 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "385";
    ib7 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "386";
    scene5.append_to_caption("\n\n\n");
    "387";
    it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: ""})]);
    "389";
    (await MathJax.Hub.Queue(ρσ_list_decorate([ "Typeset", MathJax.Hub ])));
    "394";
    while (true) {
        "395";
        (await rate(100));
        "396";
        if (running) {
            "397";
            var ρσ_Iter19 = total_item;
            ρσ_Iter19 = ((typeof ρσ_Iter19[Symbol.iterator] === "function") ? (ρσ_Iter19 instanceof Map ? ρσ_Iter19.keys() : ρσ_Iter19) : Object.keys(ρσ_Iter19));
            for (var ρσ_Index19 of ρσ_Iter19) {
                b = ρσ_Index19;
                "398";
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
