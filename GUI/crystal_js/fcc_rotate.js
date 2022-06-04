// START JAVASCRIPT
;(function() {;
var RS_modules = {};
var string, it8, L_number, ra_item, rb_item, cylinder_item, total_item, running, bond_number;
RS_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = RS_set();
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
        var RS_Iter0 = string_funcs;
        RS_Iter0 = ((typeof RS_Iter0[Symbol.iterator] === "function") ? (RS_Iter0 instanceof Map ? RS_Iter0.keys() : RS_Iter0) : Object.keys(RS_Iter0));
        for (var RS_Index0 of RS_Iter0) {
            name = RS_Index0;
            (RS_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? RS_expr_temp.length + name : name] = (RS_expr_temp = RS_str.prototype)[(typeof name === "number" && name < 0) ? RS_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    RS_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";

    var version, display, vector, print, arange, __name__, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it5, ib5, ib6, ib7, it8, b;
    version = RS_list_decorate([ "3.0", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    display = canvas;
    vector = vec;
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    scene = canvas();
    var strings = RS_modules.pythonize.strings;

    strings();
    "5";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
    "7";
    L = 1;
    "8";
    bond_ab = 2.77;
    "9";
    ra_int = 1.29;
    "10";
    rb_int = 1.67;
    "12";
    bond_default_text = str(bond_ab);
    "13";
    ra_default_text = str(ra_int);
    "14";
    rb_default_text = str(rb_int);
    "16";
    scale_factor = .5;
    "17";
    scale_default_text = str(scale_factor);
    "20";
    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "21";
    rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "25";
    scene5.autoscale = true;
    "35";
    ra_item = RS_list_decorate([]);
    "36";
    rb_item = RS_list_decorate([]);
    "37";
    cylinder_item = RS_list_decorate([]);
    "38";
    total_item = RS_list_decorate([]);
    "39";
    running = false;
    "43";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "44";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && RS_equals(cylinder.axis.x, 1))) {
            "46";
            axis_num = 0;
            "47";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && RS_equals(cylinder.axis.y, 1))) {
            "49";
            axis_num = 1;
            "50";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && RS_equals(cylinder.axis.z, 1))) {
            "52";
            axis_num = 2;
        }
        "53";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "55";
    async function gen_csv() {
        var RS_ls, file, i, axis_num;
        "56";
        file = (await open("nacl_v1.csv", "w+"));
        "57";
        (await file.write("#type,x,y,z,radius\n"));
        "59";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "61";
            (await file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "63";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "65";
            (await file.write(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "68";
        (await file.write("#type,x,y,z,axis\n"));
        "69";
        var RS_Iter3 = range(len(cylinder_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "70";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "72";
            (await file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n")));
        }
        "73";
        (await file.close());
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "75";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "76";
        "77";
        "78";
        "80";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || RS_not_equals(it8.text, "None")))) {
            "81";
            (await del_csv());
        }
        "97";
        string_list = RS_list_decorate([]);
        "98";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "99";
        string_list.append("#Type:AGCL");
        "102";
        string_list.append("#type,x,y,z,radius\n");
        "105";
        var RS_Iter4 = range(len(ra_item));
        RS_Iter4 = ((typeof RS_Iter4[Symbol.iterator] === "function") ? (RS_Iter4 instanceof Map ? RS_Iter4.keys() : RS_Iter4) : Object.keys(RS_Iter4));
        for (var RS_Index4 of RS_Iter4) {
            i = RS_Index4;
            "110";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",")["+"]("Nan")["+"]("\n"));
        }
        "113";
        var RS_Iter5 = range(len(rb_item));
        RS_Iter5 = ((typeof RS_Iter5[Symbol.iterator] === "function") ? (RS_Iter5 instanceof Map ? RS_Iter5.keys() : RS_Iter5) : Object.keys(RS_Iter5));
        for (var RS_Index5 of RS_Iter5) {
            i = RS_Index5;
            "118";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",")["+"]("Nan")["+"]("\n"));
        }
        "122";
        string_list.append("#type,x,y,z,axis,length\n");
        "123";
        var RS_Iter6 = range(len(cylinder_item));
        RS_Iter6 = ((typeof RS_Iter6[Symbol.iterator] === "function") ? (RS_Iter6 instanceof Map ? RS_Iter6.keys() : RS_Iter6) : Object.keys(RS_Iter6));
        for (var RS_Index6 of RS_Iter6) {
            i = RS_Index6;
            "124";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "127";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "130";
        string_list.append("<\/p>");
        "131";
        string = (await "".join(string_list));
        "132";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "136";
    async function del_csv() {
        "137";
        "139";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "141";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var RS_ls, L1, L2, b, k, j, i;
        "142";
        L1 = L["+"](1);
        "143";
        L2 = L1["-"](1);
        "145";
        for (var RS_Index7 = L1["-u"](); RS_Index7["<"](L1); RS_Index7++) {
            i = RS_Index7;
            "146";
            for (var RS_Index8 = L1["-u"](); RS_Index8["<"](L1); RS_Index8++) {
                j = RS_Index8;
                "147";
                for (var RS_Index9 = L1["-u"](); RS_Index9["<"](L1); RS_Index9++) {
                    k = RS_Index9;
                    "149";
                    if (RS_equals(L["%"](2), 0)) {
                        "150";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "151";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "153";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green})]);
                                "155";
                                ra_item.append(b);
                                "156";
                                if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                    "158";
                                    if (i["<"](L1["-"](2))) {
                                        "159";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white})]);
                                        "160";
                                        cylinder_item.append(b);
                                        "161";
                                    }
                                    if (j["<"](L1["-"](2))) {
                                        "162";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white})]);
                                        "163";
                                        cylinder_item.append(b);
                                        "164";
                                    }
                                    if (k["<"](L1["-"](2))) {
                                        "165";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white})]);
                                        "166";
                                        cylinder_item.append(b);
                                        "169";
                                    }
                                }
                                if (i["<"](L1["-"](2)) && j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                    "170";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 2, 0), radius: .01, color: color.white})]);
                                    "171";
                                    cylinder_item.append(b);
                                    "172";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j["+"](2), k), axis: vector(2, 2["-u"](), 0), radius: .01, color: color.white})]);
                                    "173";
                                    cylinder_item.append(b);
                                    "174";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k["+"](2)), axis: vector(2, 2, 0), radius: .01, color: color.white})]);
                                    "175";
                                    cylinder_item.append(b);
                                    "176";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j["+"](2), k["+"](2)), axis: vector(2, 2["-u"](), 0), radius: .01, color: color.white})]);
                                    "177";
                                    cylinder_item.append(b);
                                    "179";
                                }
                                if (i["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                    "180";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 0, 2), radius: .01, color: color.white})]);
                                    "181";
                                    cylinder_item.append(b);
                                    "182";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k["+"](2)), axis: vector(2, 0, 2["-u"]()), radius: .01, color: color.white})]);
                                    "183";
                                    cylinder_item.append(b);
                                    "185";
                                }
                                if (j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                    "186";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 2, 2), radius: .01, color: color.white})]);
                                    "187";
                                    cylinder_item.append(b);
                                    "188";
                                    b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j["+"](2), k), axis: vector(0, 2["-u"](), 2), radius: .01, color: color.white})]);
                                    "189";
                                    cylinder_item.append(b);
                                    "190";
                                }
                            }
                            if (i["<"](L1["-"](1)) && j["<"](L1["-"](1)) && k["<"](L1["-"](2))) {
                                "191";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](2)), radius: ra, color: color.green})]);
                                "192";
                                ra_item.append(b);
                                "194";
                            }
                        }
                    } else {
                        "196";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "197";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "198";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green})]);
                                "199";
                                ra_item.append(b);
                                "200";
                            }
                            if (i["<"](L1["-"](1)) && j["<"](L1["-"](1)) && k["<"](L1["-"](1))) {
                                "201";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green})]);
                                "202";
                                ra_item.append(b);
                                "203";
                            }
                        }
                        if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                            "205";
                            if (i["<"](L1["-"](2))) {
                                "206";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 0), radius: .01, color: color.white})]);
                                "207";
                                cylinder_item.append(b);
                                "208";
                            }
                            if (j["<"](L1["-"](2))) {
                                "209";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 0), radius: .01, color: color.white})]);
                                "210";
                                cylinder_item.append(b);
                                "211";
                            }
                            if (k["<"](L1["-"](2))) {
                                "212";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 0, 2), radius: .01, color: color.white})]);
                                "213";
                                cylinder_item.append(b);
                                "216";
                            }
                            if (i["<"](L1["-"](2)) && j["<"](L1["-"](2))) {
                                "217";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 2, 0), radius: .01, color: color.white})]);
                                "218";
                                cylinder_item.append(b);
                                "220";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](3), k["+"](1)), axis: vector(2, 2["-u"](), 0), radius: .01, color: color.white})]);
                                "221";
                                cylinder_item.append(b);
                                "223";
                            }
                            if (i["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                "224";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 0, 2), radius: .01, color: color.white})]);
                                "225";
                                cylinder_item.append(b);
                                "226";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](3)), axis: vector(2, 0, 2["-u"]()), radius: .01, color: color.white})]);
                                "227";
                                cylinder_item.append(b);
                                "229";
                            }
                            if (j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                "230";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(0, 2, 2), radius: .01, color: color.white})]);
                                "231";
                                cylinder_item.append(b);
                                "232";
                            }
                            if (j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                "233";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](3), k["+"](1)), axis: vector(0, 2["-u"](), 2), radius: .01, color: color.white})]);
                                "234";
                                cylinder_item.append(b);
                            }
                        }
                    }
                }
            }
        }
        "236";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "238";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "240";
    async function build_button(s) {
        "241";
        "242";
        "243";
        "244";
        "245";
        "246";
        running = !running;
        "247";
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

    "252";
    async function clear() {
        var RS_ls, i;
        "253";
        var RS_Iter10 = ra_item;
        RS_Iter10 = ((typeof RS_Iter10[Symbol.iterator] === "function") ? (RS_Iter10 instanceof Map ? RS_Iter10.keys() : RS_Iter10) : Object.keys(RS_Iter10));
        for (var RS_Index10 of RS_Iter10) {
            i = RS_Index10;
            "254";
            i.visible = false;
            "255";
            i = undefined;
        }
        "257";
        var RS_Iter11 = rb_item;
        RS_Iter11 = ((typeof RS_Iter11[Symbol.iterator] === "function") ? (RS_Iter11 instanceof Map ? RS_Iter11.keys() : RS_Iter11) : Object.keys(RS_Iter11));
        for (var RS_Index11 of RS_Iter11) {
            i = RS_Index11;
            "258";
            i.visible = false;
            "259";
            i = undefined;
        }
        "261";
        var RS_Iter12 = cylinder_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            i = RS_Index12;
            "262";
            i.visible = false;
            "263";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "267";
    async function reset() {
        var RS_ls, RS_unpack;
        "268";
        "269";
        "270";
        "271";
        "272";
        (await clear());
        "273";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };
    if (!reset.__module__) Object.defineProperties(reset, {
        __module__ : {value: null}
    });

    "277";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "278";
        "279";
        bond_ab = s.number;
        "280";
        bond_number = bond_ab;
        "281";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "282";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "283";
        var RS_Iter13 = ra_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            x = RS_Index13;
            "284";
            x.radius = ra;
        }
        "285";
        var RS_Iter14 = rb_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            y = RS_Index14;
            "286";
            y.radius = rb;
        }
        "287";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "290";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "291";
        ra_int = s.number;
        "292";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "293";
        var RS_Iter15 = ra_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            x = RS_Index15;
            "294";
            x.radius = ra;
        }
        "295";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "297";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "298";
        rb_int = s.number;
        "299";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "300";
        var RS_Iter16 = rb_item;
        RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
        for (var RS_Index16 of RS_Iter16) {
            y = RS_Index16;
            "301";
            y.radius = rb;
        }
        "302";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "304";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "305";
        scale_factor = s.number;
        "306";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "307";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "308";
        var RS_Iter17 = ra_item;
        RS_Iter17 = ((typeof RS_Iter17[Symbol.iterator] === "function") ? (RS_Iter17 instanceof Map ? RS_Iter17.keys() : RS_Iter17) : Object.keys(RS_Iter17));
        for (var RS_Index17 of RS_Iter17) {
            x = RS_Index17;
            "309";
            x.radius = ra;
        }
        "310";
        var RS_Iter18 = rb_item;
        RS_Iter18 = ((typeof RS_Iter18[Symbol.iterator] === "function") ? (RS_Iter18 instanceof Map ? RS_Iter18.keys() : RS_Iter18) : Object.keys(RS_Iter18));
        for (var RS_Index18 of RS_Iter18) {
            y = RS_Index18;
            "311";
            y.radius = rb;
        }
        "312";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "314";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "315";
        "316";
        "317";
        "318";
        "319";
        "320";
        L = s.number;
        "321";
        L_number = L;
        "322";
        (await clear());
        "324";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "325";
        scene5.center = vector(0, 0, 0);
        "327";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "333";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    cylinder_item = RS_unpack[2];
    total_item = RS_unpack[3];
    "339";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>fcc Lattice Example: FCC Crystal Structure (FCC)</h2><hr>", pos: scene5.title_anchor})]);
    "344";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "The Face Centered Cubic Structure \\(FCC \\) is a model commonly found within crystal structures.\nIt consists of two types of ions: sodium ions and chloride ions which alternate with each other in each of \nthe three dimensions. The repeating pattern is in a shape of of cube, and there are lattice points on the \nfaces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor})]);
    "353";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "360";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Ionic radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor})]);
    "363";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "365";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n"})]);
    "370";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "371";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "374";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "375";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "377";
    scene5.append_to_caption("\n");
    "379";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    (await sleep(.1));
    "380";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "382";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "383";
    scene5.append_to_caption("\n");
    "385";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "386";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "387";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "389";
    scene5.append_to_caption("\n");
    "398";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "399";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "400";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "402";
    scene5.append_to_caption("\n\n");
    "415";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<font color = \"red\">Notes: Generate CSV is currently not working<font color =\"black\">\n"})]);
    "419";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "420";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "421";
    scene5.append_to_caption("\n\n\n");
    "422";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "424";
    (await MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ])));
    "429";
    while (true) {
        "430";
        (await rate(100));
        "431";
        if (running) {
            "432";
            var RS_Iter19 = total_item;
            RS_Iter19 = ((typeof RS_Iter19[Symbol.iterator] === "function") ? (RS_Iter19 instanceof Map ? RS_Iter19.keys() : RS_Iter19) : Object.keys(RS_Iter19));
            for (var RS_Index19 of RS_Iter19) {
                b = RS_Index19;
                "433";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
