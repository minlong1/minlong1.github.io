// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var string, it8, L_number, ra_item, rb_item, cylinder_item, total_item, running, scene5;
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

    var version, print, arange, __name__, type, ρσ_ls, scene5, U, L, la_int, ra_int, rb_int, la_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, la, unit, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, opatom, opbar, opatom_default_text, colorlightblue, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it5, ib5, it6, ib6, b;
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
    "13";
    scene5 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({background: color.black, width: 800, length: 800, center: vector(0, 0, 0)})]);
    "15";
    U = 1;
    "16";
    L = U;
    "18";
    la_int = 2.856;
    "20";
    ra_int = 1.26;
    "21";
    rb_int = 1.26;
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
    unit = 2;
    "34";
    ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
    "36";
    rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
    "39";
    scene5.autoscale = true;
    "48";
    ra_item = ρσ_list_decorate([]);
    "49";
    rb_item = ρσ_list_decorate([]);
    "50";
    cylinder_item = ρσ_list_decorate([]);
    "51";
    total_item = ρσ_list_decorate([]);
    "52";
    running = false;
    "54";
    opatom = .85;
    "55";
    opbar = 1;
    "56";
    opatom_default_text = str(opatom);
    "65";
    async function axis_number(cylinder) {
        var ρσ_ls, axis_num;
        "66";
        if ((cylinder.axis.x !== 0 && (typeof cylinder.axis.x !== "object" || ρσ_not_equals(cylinder.axis.x, 0)))) {
            "68";
            axis_num = 0;
            "69";
        } else if ((cylinder.axis.y !== 0 && (typeof cylinder.axis.y !== "object" || ρσ_not_equals(cylinder.axis.y, 0)))) {
            "71";
            axis_num = 1;
            "72";
        } else if ((cylinder.axis.z !== 0 && (typeof cylinder.axis.z !== "object" || ρσ_not_equals(cylinder.axis.z, 0)))) {
            "74";
            axis_num = 2;
        }
        "75";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "77";
    async function gen_csv() {
        var ρσ_ls, file, i, axis_num;
        "78";
        file = (await open("nacl_v1.csv", "w+"));
        "79";
        (await file.write("#type,x,y,z,radius\n"));
        "81";
        var ρσ_Iter1 = range(len(ra_item));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "83";
            (await file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "90";
        (await file.write("#type,x,y,z,axis\n"));
        "91";
        var ρσ_Iter2 = range(len(cylinder_item));
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            i = ρσ_Index2;
            "92";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "94";
            (await file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n")));
        }
        "95";
        (await file.close());
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "97";
    async function print_csv() {
        var ρσ_ls, string_list, i, axis_num;
        "98";
        "99";
        "100";
        "101";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || ρσ_not_equals(it8.text, "None")))) {
            "102";
            (await del_csv());
        }
        "113";
        string_list = ρσ_list_decorate([]);
        "114";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "115";
        string_list.append("#type,x,y,z,radius\n");
        "118";
        var ρσ_Iter3 = range(len(ra_item));
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            i = ρσ_Index3;
            "123";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",")["+"]("na\n"));
        }
        "129";
        string_list.append("#type,x,y,z,axis,length\n");
        "130";
        var ρσ_Iter4 = range(len(cylinder_item));
        ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
        for (var ρσ_Index4 of ρσ_Iter4) {
            i = ρσ_Index4;
            "131";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "137";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "139";
        string_list.append("<\/p>");
        "140";
        string = (await "".join(string_list));
        "141";
        it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "143";
    async function del_csv() {
        "144";
        "146";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "148";
    colorlightblue = vector(0, .7, 1);
    "150";
    async function build(L, ra) {
        var ρσ_ls, L1, b, v, x, m, k, j, i;
        "151";
        "152";
        "153";
        "154";
        "155";
        L1 = L["+"](1);
        "156";
        for (var ρσ_Index5 = L["-u"](); ρσ_Index5["<"](L1); ρσ_Index5++) {
            i = ρσ_Index5;
            "157";
            for (var ρσ_Index6 = L["-u"](); ρσ_Index6["<"](L1); ρσ_Index6++) {
                j = ρσ_Index6;
                "158";
                for (var ρσ_Index7 = L["-u"](); ρσ_Index7["<"](L1); ρσ_Index7++) {
                    k = ρσ_Index7;
                    "162";
                    if (ρσ_not_equals(L["%"](2), 0)) {
                        "163";
                        if (ρσ_equals(i["%"](2), 0) && ρσ_equals(j["%"](2), 0) && ρσ_equals(k["%"](2), 0)) {
                            "165";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: colorlightblue, opacity: opatom})]);
                            "166";
                            rb_item.append(b);
                            "169";
                            v = ρσ_list_decorate([ vector(i["-"](1), j["-"](1), k["-"](1)), vector(i["-"](1), j["-"](1), k["+"](1)), vector(i["-"](1), j["+"](1), k["-"](1)), vector(i["-"](1), j["+"](1), k["+"](1)), vector(i["+"](1), j["-"](1), k["-"](1)), vector(i["+"](1), j["-"](1), k["+"](1)), vector(i["+"](1), j["+"](1), k["-"](1)), vector(i["+"](1), j["+"](1), k["+"](1)) ]);
                            "170";
                            var ρσ_Iter8 = v;
                            ρσ_Iter8 = ((typeof ρσ_Iter8[Symbol.iterator] === "function") ? (ρσ_Iter8 instanceof Map ? ρσ_Iter8.keys() : ρσ_Iter8) : Object.keys(ρσ_Iter8));
                            for (var ρσ_Index8 of ρσ_Iter8) {
                                x = ρσ_Index8;
                                "171";
                                b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: x, radius: ra, color: colorlightblue, opacity: opatom})]);
                                "172";
                                ra_item.append(b);
                            }
                            "174";
                            for (var ρσ_Index9 = 0; ρσ_Index9["<"](8); ρσ_Index9++) {
                                m = ρσ_Index9;
                                "175";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](vector(i, j, k)), radius: .02, color: color.yellow, opacity: opbar})]);
                                "176";
                                cylinder_item.append(b);
                                "178";
                            }
                        } else if (ρσ_not_equals(i["%"](2), 0) && ρσ_not_equals(j["%"](2), 0) && ρσ_not_equals(k["%"](2), 0)) {
                            "179";
                            if (i["<"](L["-"](1))) {
                                "180";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(la, 0, 0), radius: .02, color: color.white})]);
                                "181";
                                cylinder_item.append(b);
                                "182";
                            }
                            if (j["<"](L["-"](1))) {
                                "183";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, la, 0), radius: .02, color: color.white})]);
                                "184";
                                cylinder_item.append(b);
                                "185";
                            }
                            if (k["<"](L["-"](1))) {
                                "186";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, la), radius: .02, color: color.white})]);
                                "187";
                                cylinder_item.append(b);
                                "191";
                            }
                        }
                    } else {
                        "192";
                        if (ρσ_equals(i["%"](2), 0) && ρσ_equals(j["%"](2), 0) && ρσ_equals(k["%"](2), 0)) {
                            "195";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: colorlightblue, opacity: opatom})]);
                            "196";
                            ra_item.append(b);
                            "198";
                            if (i["<="](L["-"](1))) {
                                "199";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white, opacity: opbar})]);
                                "200";
                                cylinder_item.append(b);
                                "201";
                            }
                            if (j["<="](L["-"](1))) {
                                "202";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white, opacity: opbar})]);
                                "203";
                                cylinder_item.append(b);
                                "204";
                            }
                            if (k["<="](L["-"](1))) {
                                "205";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white, opacity: opbar})]);
                                "206";
                                cylinder_item.append(b);
                                "208";
                            }
                        }
                        if (ρσ_not_equals(i["%"](2), 0) && ρσ_not_equals(j["%"](2), 0) && ρσ_not_equals(k["%"](2), 0)) {
                            "210";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: colorlightblue, opacity: opatom})]);
                            "211";
                            rb_item.append(b);
                            "213";
                            v = ρσ_list_decorate([ vector(i["-"](1), j["-"](1), k["-"](1)), vector(i["-"](1), j["-"](1), k["+"](1)), vector(i["-"](1), j["+"](1), k["-"](1)), vector(i["-"](1), j["+"](1), k["+"](1)), vector(i["+"](1), j["-"](1), k["-"](1)), vector(i["+"](1), j["-"](1), k["+"](1)), vector(i["+"](1), j["+"](1), k["-"](1)), vector(i["+"](1), j["+"](1), k["+"](1)) ]);
                            "215";
                            for (var ρσ_Index10 = 0; ρσ_Index10["<"](8); ρσ_Index10++) {
                                m = ρσ_Index10;
                                "216";
                                b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: v[(typeof m === "number" && m["<"](0)) ? v.length["+"](m) : m]["-"](vector(i, j, k)), radius: .02, color: color.yellow, opacity: opbar})]);
                                "217";
                                cylinder_item.append(b);
                            }
                        }
                    }
                }
            }
        }
        "220";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra"]},
        __module__ : {value: null}
    });

    "225";
    async function build_button(s) {
        "226";
        "227";
        "228";
        "229";
        "230";
        "231";
        running = !running;
        "232";
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

    "237";
    async function clear() {
        var ρσ_ls, i;
        "238";
        "239";
        "240";
        "241";
        "242";
        var ρσ_Iter11 = ra_item;
        ρσ_Iter11 = ((typeof ρσ_Iter11[Symbol.iterator] === "function") ? (ρσ_Iter11 instanceof Map ? ρσ_Iter11.keys() : ρσ_Iter11) : Object.keys(ρσ_Iter11));
        for (var ρσ_Index11 of ρσ_Iter11) {
            i = ρσ_Index11;
            "243";
            i.visible = false;
            "244";
            i = undefined;
        }
        "245";
        var ρσ_Iter12 = rb_item;
        ρσ_Iter12 = ((typeof ρσ_Iter12[Symbol.iterator] === "function") ? (ρσ_Iter12 instanceof Map ? ρσ_Iter12.keys() : ρσ_Iter12) : Object.keys(ρσ_Iter12));
        for (var ρσ_Index12 of ρσ_Iter12) {
            i = ρσ_Index12;
            "246";
            i.visible = false;
            "247";
            i = undefined;
        }
        "248";
        var ρσ_Iter13 = cylinder_item;
        ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
        for (var ρσ_Index13 of ρσ_Iter13) {
            i = ρσ_Index13;
            "249";
            i.visible = false;
            "250";
            i = undefined;
        }
        "251";
        var ρσ_Iter14 = total_item;
        ρσ_Iter14 = ((typeof ρσ_Iter14[Symbol.iterator] === "function") ? (ρσ_Iter14 instanceof Map ? ρσ_Iter14.keys() : ρσ_Iter14) : Object.keys(ρσ_Iter14));
        for (var ρσ_Index14 of ρσ_Iter14) {
            i = ρσ_Index14;
            "252";
            i.visible = false;
            "253";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "256";
    async function reset() {
        "257";
        "258";
        "259";
        "260";
        "261";
        "262";
        (await clear());
        "264";
        (await build(L, ra));
    };
    if (!reset.__module__) Object.defineProperties(reset, {
        __module__ : {value: null}
    });

    "268";
    async function set_la(s) {
        var ρσ_ls, la_int, ra, rb, x, y;
        "269";
        la_int = s.number;
        "270";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "271";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "272";
        var ρσ_Iter15 = ra_item;
        ρσ_Iter15 = ((typeof ρσ_Iter15[Symbol.iterator] === "function") ? (ρσ_Iter15 instanceof Map ? ρσ_Iter15.keys() : ρσ_Iter15) : Object.keys(ρσ_Iter15));
        for (var ρσ_Index15 of ρσ_Iter15) {
            x = ρσ_Index15;
            "273";
            x.radius = ra;
        }
        "274";
        var ρσ_Iter16 = rb_item;
        ρσ_Iter16 = ((typeof ρσ_Iter16[Symbol.iterator] === "function") ? (ρσ_Iter16 instanceof Map ? ρσ_Iter16.keys() : ρσ_Iter16) : Object.keys(ρσ_Iter16));
        for (var ρσ_Index16 of ρσ_Iter16) {
            y = ρσ_Index16;
            "275";
            y.radius = rb;
        }
        "276";
        return la;
    };
    if (!set_la.__argnames__) Object.defineProperties(set_la, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "279";
    async function set_ra(s) {
        var ρσ_ls, ra_int, ra, x;
        "280";
        ra_int = s.number;
        "281";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "282";
        var ρσ_Iter17 = ra_item;
        ρσ_Iter17 = ((typeof ρσ_Iter17[Symbol.iterator] === "function") ? (ρσ_Iter17 instanceof Map ? ρσ_Iter17.keys() : ρσ_Iter17) : Object.keys(ρσ_Iter17));
        for (var ρσ_Index17 of ρσ_Iter17) {
            x = ρσ_Index17;
            "283";
            x.radius = ra;
        }
        "284";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "286";
    async function set_rb(s) {
        var ρσ_ls, rb_int, rb, y;
        "287";
        rb_int = s.number;
        "288";
        rb = rb_int["/"](la_int)["*"](2)["*"](scale_factor);
        "289";
        var ρσ_Iter18 = rb_item;
        ρσ_Iter18 = ((typeof ρσ_Iter18[Symbol.iterator] === "function") ? (ρσ_Iter18 instanceof Map ? ρσ_Iter18.keys() : ρσ_Iter18) : Object.keys(ρσ_Iter18));
        for (var ρσ_Index18 of ρσ_Iter18) {
            y = ρσ_Index18;
            "290";
            y.radius = rb;
        }
        "291";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "293";
    async function set_scale_factor(s) {
        var ρσ_ls, scale_factor, ra, rb, x, y;
        "294";
        scale_factor = s.number;
        "295";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "296";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "297";
        var ρσ_Iter19 = ra_item;
        ρσ_Iter19 = ((typeof ρσ_Iter19[Symbol.iterator] === "function") ? (ρσ_Iter19 instanceof Map ? ρσ_Iter19.keys() : ρσ_Iter19) : Object.keys(ρσ_Iter19));
        for (var ρσ_Index19 of ρσ_Iter19) {
            x = ρσ_Index19;
            "298";
            x.radius = ra;
        }
        "299";
        var ρσ_Iter20 = rb_item;
        ρσ_Iter20 = ((typeof ρσ_Iter20[Symbol.iterator] === "function") ? (ρσ_Iter20 instanceof Map ? ρσ_Iter20.keys() : ρσ_Iter20) : Object.keys(ρσ_Iter20));
        for (var ρσ_Index20 of ρσ_Iter20) {
            y = ρσ_Index20;
            "300";
            y.radius = rb;
        }
        "301";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "304";
    async function set_L(s) {
        var ρσ_ls, L;
        "305";
        "306";
        "307";
        "308";
        "309";
        "310";
        L = s.number;
        "311";
        (await clear());
        "312";
        ra_item = ρσ_list_decorate([]);
        "313";
        rb_item = ρσ_list_decorate([]);
        "314";
        cylinder_item = ρσ_list_decorate([]);
        "315";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "316";
        scene5.center = vector(0, 0, 0);
        "318";
        (await build(L, ra));
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "321";
    async function set_opatom(s) {
        var ρσ_ls, opatom, i, j;
        "322";
        "323";
        "324";
        "325";
        "326";
        opatom = s.number;
        "327";
        var ρσ_Iter21 = ra_item;
        ρσ_Iter21 = ((typeof ρσ_Iter21[Symbol.iterator] === "function") ? (ρσ_Iter21 instanceof Map ? ρσ_Iter21.keys() : ρσ_Iter21) : Object.keys(ρσ_Iter21));
        for (var ρσ_Index21 of ρσ_Iter21) {
            i = ρσ_Index21;
            "328";
            i.opacity = opatom;
        }
        "329";
        var ρσ_Iter22 = rb_item;
        ρσ_Iter22 = ((typeof ρσ_Iter22[Symbol.iterator] === "function") ? (ρσ_Iter22 instanceof Map ? ρσ_Iter22.keys() : ρσ_Iter22) : Object.keys(ρσ_Iter22));
        for (var ρσ_Index22 of ρσ_Iter22) {
            j = ρσ_Index22;
            "330";
            j.opacity = opatom;
        }
    };
    if (!set_opatom.__argnames__) Object.defineProperties(set_opatom, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "333";
    (await build(L, ra));
    "337";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h2>Primitive Cubic Crystal System: metal Iron (α-Fe) </h2><hr>", pos: scene5.title_anchor})]);
    "341";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<b>Iron</b> is known as α-iron or ferrite below 912 °C (1,674 °F). It has a body-centered cubic (bcc) crystal\nstructure.  This structure consists of the smallest repeating pattern of the cube with one lattice point on each \ncorner of the cube and one at the center of the cube (body).", pos: scene5.title_anchor})]);
    "347";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Structure Parameters</h3>", pos: scene5.title_anchor})]);
    "361";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n<ul><li><b>L</b>: An integer number showing the maximum coordinate where an atom/ion can be placed. \n<li><b>a</b>: The distance between 2 neighboring atoms/ions.</li><li><b><font color = \"blue\">r_a<font color =\"black\"></b>: Atomic/ionic radius[<font color = \"Blue\">Blue<font color =\"black\">] </li><li><b>scale</b>: A parameter between 0 and 1 to control the representation styles of crystal structures. \nScale=1 generates a <b>hard-sphere model</b> for the atomic arrangement. Atoms/ions are thought of as \nbeing solid spheres having well-defined, realistic diameters.  \nScale<1 generates a <b>reduced sphere model</b> where atom/ions are represented by spheres with reduced \nsizes by the factor of “scale”.  </li></ul>", pos: scene5.title_anchor})]);
    "368";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotation</b>: (1) Press the right button of the mouse and drag or (2) type Ctrl key and drag</li><li><b>Zoom</b>:  Use the scroll wheel of the mouse </li></ul>", pos: scene5.title_anchor})]);
    "372";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Parameters:</h3>Adjust the parameters below to build up another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "374";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "379";
    b1 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "380";
    b2 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "382";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n"})]);
    "385";
    it1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "386";
    ib1 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "388";
    scene5.append_to_caption("\n");
    "390";
    it2 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "a: "})]);
    (await sleep(.1));
    "391";
    ib2 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_la, text: la_default_text})]);
    "393";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "394";
    scene5.append_to_caption("\n");
    "396";
    it3 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "397";
    ib3 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "398";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "399";
    scene5.append_to_caption("\n");
    "402";
    it5 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "403";
    ib5 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "404";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "( Input a number between 0 and 1 )"})]);
    "405";
    scene5.append_to_caption("\n");
    "408";
    it6 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "opacity: "})]);
    (await sleep(.1));
    "409";
    ib6 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_opatom, text: opatom_default_text})]);
    "410";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "(Change opacity of atoms between 0 and 1)"})]);
    "411";
    scene5.append_to_caption("\n\n");
    "421";
    (await MathJax.Hub.Queue(ρσ_list_decorate([ "Typeset", MathJax.Hub ])));
    "424";
    while (true) {
        "425";
        (await rate(100));
        "426";
        if (running) {
            "427";
            var ρσ_Iter23 = total_item;
            ρσ_Iter23 = ((typeof ρσ_Iter23[Symbol.iterator] === "function") ? (ρσ_Iter23 instanceof Map ? ρσ_Iter23.keys() : ρσ_Iter23) : Object.keys(ρσ_Iter23));
            for (var ρσ_Index23 of ρσ_Iter23) {
                b = ρσ_Index23;
                "428";
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
