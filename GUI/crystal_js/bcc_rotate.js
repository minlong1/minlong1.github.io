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
    "6";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
    "8";
    L = 1;
    "9";
    bond_ab = 2.77;
    "10";
    ra_int = 1.29;
    "11";
    rb_int = 1.67;
    "13";
    bond_default_text = str(bond_ab);
    "14";
    ra_default_text = str(ra_int);
    "15";
    rb_default_text = str(rb_int);
    "17";
    scale_factor = .5;
    "18";
    scale_default_text = str(scale_factor);
    "21";
    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "22";
    rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "26";
    scene5.autoscale = true;
    "36";
    ra_item = RS_list_decorate([]);
    "37";
    rb_item = RS_list_decorate([]);
    "38";
    cylinder_item = RS_list_decorate([]);
    "39";
    total_item = RS_list_decorate([]);
    "40";
    running = false;
    "44";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "45";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && RS_equals(cylinder.axis.x, 1))) {
            "47";
            axis_num = 0;
            "48";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && RS_equals(cylinder.axis.y, 1))) {
            "50";
            axis_num = 1;
            "51";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && RS_equals(cylinder.axis.z, 1))) {
            "53";
            axis_num = 2;
        }
        "54";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "56";
    async function gen_csv() {
        var RS_ls, file, i, axis_num;
        "57";
        file = (await open("nacl_v1.csv", "w+"));
        "58";
        (await file.write("#type,x,y,z,radius\n"));
        "60";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "62";
            (await file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "64";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "66";
            (await file.write(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"]("\n")));
        }
        "69";
        (await file.write("#type,x,y,z,axis\n"));
        "70";
        var RS_Iter3 = range(len(cylinder_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "71";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "73";
            (await file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n")));
        }
        "74";
        (await file.close());
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "76";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "77";
        "78";
        "79";
        "81";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || RS_not_equals(it8.text, "None")))) {
            "82";
            (await del_csv());
        }
        "98";
        string_list = RS_list_decorate([]);
        "99";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "100";
        string_list.append("#Type:AGCL");
        "103";
        string_list.append("#type,x,y,z,radius\n");
        "106";
        var RS_Iter4 = range(len(ra_item));
        RS_Iter4 = ((typeof RS_Iter4[Symbol.iterator] === "function") ? (RS_Iter4 instanceof Map ? RS_Iter4.keys() : RS_Iter4) : Object.keys(RS_Iter4));
        for (var RS_Index4 of RS_Iter4) {
            i = RS_Index4;
            "111";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",")["+"]("Nan")["+"]("\n"));
        }
        "114";
        var RS_Iter5 = range(len(rb_item));
        RS_Iter5 = ((typeof RS_Iter5[Symbol.iterator] === "function") ? (RS_Iter5 instanceof Map ? RS_Iter5.keys() : RS_Iter5) : Object.keys(RS_Iter5));
        for (var RS_Index5 of RS_Iter5) {
            i = RS_Index5;
            "119";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",")["+"]("Nan")["+"]("\n"));
        }
        "123";
        string_list.append("#type,x,y,z,axis,length\n");
        "124";
        var RS_Iter6 = range(len(cylinder_item));
        RS_Iter6 = ((typeof RS_Iter6[Symbol.iterator] === "function") ? (RS_Iter6 instanceof Map ? RS_Iter6.keys() : RS_Iter6) : Object.keys(RS_Iter6));
        for (var RS_Index6 of RS_Iter6) {
            i = RS_Index6;
            "125";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "128";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "131";
        string_list.append("<\/p>");
        "132";
        string = (await "".join(string_list));
        "133";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "137";
    async function del_csv() {
        "138";
        "140";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "142";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var RS_ls, L1, L2, b, k, j, i;
        "143";
        L1 = L["+"](1);
        "144";
        L2 = L1["-"](1);
        "146";
        for (var RS_Index7 = L2["-u"](); RS_Index7["<"](L2); RS_Index7++) {
            i = RS_Index7;
            "147";
            for (var RS_Index8 = L2["-u"](); RS_Index8["<"](L2); RS_Index8++) {
                j = RS_Index8;
                "148";
                for (var RS_Index9 = L2["-u"](); RS_Index9["<"](L2); RS_Index9++) {
                    k = RS_Index9;
                    "150";
                    if (RS_equals(L["-"](1)["%"](2), 0)) {
                        "151";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "152";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "153";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green})]);
                                "154";
                                ra_item.append(b);
                                "156";
                            }
                        }
                    } else {
                        "158";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "159";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "160";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), radius: ra, color: color.green})]);
                                "161";
                                ra_item.append(b);
                            }
                        }
                    }
                }
            }
        }
        "162";
        for (var RS_Index10 = L1["-u"](); RS_Index10["<"](L1); RS_Index10++) {
            i = RS_Index10;
            "163";
            for (var RS_Index11 = L1["-u"](); RS_Index11["<"](L1); RS_Index11++) {
                j = RS_Index11;
                "164";
                for (var RS_Index12 = L1["-u"](); RS_Index12["<"](L1); RS_Index12++) {
                    k = RS_Index12;
                    "166";
                    if (RS_equals(L["%"](2), 0)) {
                        "167";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "168";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                                "170";
                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.green})]);
                            }
                            "172";
                            ra_item.append(b);
                            "174";
                        }
                        if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
                            "176";
                            if (i["+"](1)["<="](L1["-"](1))) {
                                "177";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 0, 0), radius: .01, color: color.white})]);
                                "178";
                                cylinder_item.append(b);
                                "179";
                            }
                            if (j["+"](1)["<="](L1["-"](1))) {
                                "180";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 2, 0), radius: .01, color: color.white})]);
                                "181";
                                cylinder_item.append(b);
                                "182";
                            }
                            if (k["+"](1)["<="](L1["-"](1))) {
                                "183";
                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, 2), radius: .01, color: color.white})]);
                                "184";
                                cylinder_item.append(b);
                                "186";
                                if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                                    "187";
                                    if (i["<"](L1["-"](2)) && j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                        "188";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k), axis: vector(2, 2, 2), radius: .01, color: color.white})]);
                                        "189";
                                        cylinder_item.append(b);
                                        "190";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j["+"](2), k), axis: vector(2, 2["-u"](), 2), radius: .01, color: color.white})]);
                                        "191";
                                        cylinder_item.append(b);
                                        "192";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j["+"](2), k["+"](2)), axis: vector(2, 2["-u"](), 2["-u"]()), radius: .01, color: color.white})]);
                                        "193";
                                        cylinder_item.append(b);
                                        "194";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i, j, k["+"](2)), axis: vector(2, 2, 2["-u"]()), radius: .01, color: color.white})]);
                                        "195";
                                        cylinder_item.append(b);
                                        "197";
                                    }
                                }
                            }
                        }
                    } else {
                        "199";
                        if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                            "200";
                            if (RS_equals(i["%"](2), 0) && RS_equals(j["%"](2), 0) && RS_equals(k["%"](2), 0)) {
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
                                "215";
                                if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                                    "216";
                                    if (i["<"](L1["-"](2)) && j["<"](L1["-"](2)) && k["<"](L1["-"](2))) {
                                        "217";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](1)), axis: vector(2, 2, 2), radius: .01, color: color.white})]);
                                        "218";
                                        cylinder_item.append(b);
                                        "219";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](3), k["+"](1)), axis: vector(2, 2["-u"](), 2), radius: .01, color: color.white})]);
                                        "220";
                                        cylinder_item.append(b);
                                        "221";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](3), k["+"](3)), axis: vector(2, 2["-u"](), 2["-u"]()), radius: .01, color: color.white})]);
                                        "222";
                                        cylinder_item.append(b);
                                        "223";
                                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["+"](1), j["+"](1), k["+"](3)), axis: vector(2, 2, 2["-u"]()), radius: .01, color: color.white})]);
                                        "224";
                                        cylinder_item.append(b);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        "226";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "228";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "230";
    async function build_button(s) {
        "231";
        "232";
        "233";
        "234";
        "235";
        "236";
        running = !running;
        "237";
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

    "242";
    async function clear() {
        var RS_ls, i;
        "243";
        var RS_Iter13 = ra_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            i = RS_Index13;
            "244";
            i.visible = false;
            "245";
            i = undefined;
        }
        "247";
        var RS_Iter14 = rb_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            i = RS_Index14;
            "248";
            i.visible = false;
            "249";
            i = undefined;
        }
        "251";
        var RS_Iter15 = cylinder_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            i = RS_Index15;
            "252";
            i.visible = false;
            "253";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "257";
    async function reset() {
        var RS_ls, RS_unpack;
        "258";
        "259";
        "260";
        "261";
        "262";
        (await clear());
        "263";
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

    "267";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "268";
        "269";
        bond_ab = s.number;
        "270";
        bond_number = bond_ab;
        "271";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "272";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "273";
        var RS_Iter16 = ra_item;
        RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
        for (var RS_Index16 of RS_Iter16) {
            x = RS_Index16;
            "274";
            x.radius = ra;
        }
        "275";
        var RS_Iter17 = rb_item;
        RS_Iter17 = ((typeof RS_Iter17[Symbol.iterator] === "function") ? (RS_Iter17 instanceof Map ? RS_Iter17.keys() : RS_Iter17) : Object.keys(RS_Iter17));
        for (var RS_Index17 of RS_Iter17) {
            y = RS_Index17;
            "276";
            y.radius = rb;
        }
        "277";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "280";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "281";
        ra_int = s.number;
        "282";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "283";
        var RS_Iter18 = ra_item;
        RS_Iter18 = ((typeof RS_Iter18[Symbol.iterator] === "function") ? (RS_Iter18 instanceof Map ? RS_Iter18.keys() : RS_Iter18) : Object.keys(RS_Iter18));
        for (var RS_Index18 of RS_Iter18) {
            x = RS_Index18;
            "284";
            x.radius = ra;
        }
        "285";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "287";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "288";
        rb_int = s.number;
        "289";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "290";
        var RS_Iter19 = rb_item;
        RS_Iter19 = ((typeof RS_Iter19[Symbol.iterator] === "function") ? (RS_Iter19 instanceof Map ? RS_Iter19.keys() : RS_Iter19) : Object.keys(RS_Iter19));
        for (var RS_Index19 of RS_Iter19) {
            y = RS_Index19;
            "291";
            y.radius = rb;
        }
        "292";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "294";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "295";
        scale_factor = s.number;
        "296";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "297";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "298";
        var RS_Iter20 = ra_item;
        RS_Iter20 = ((typeof RS_Iter20[Symbol.iterator] === "function") ? (RS_Iter20 instanceof Map ? RS_Iter20.keys() : RS_Iter20) : Object.keys(RS_Iter20));
        for (var RS_Index20 of RS_Iter20) {
            x = RS_Index20;
            "299";
            x.radius = ra;
        }
        "300";
        var RS_Iter21 = rb_item;
        RS_Iter21 = ((typeof RS_Iter21[Symbol.iterator] === "function") ? (RS_Iter21 instanceof Map ? RS_Iter21.keys() : RS_Iter21) : Object.keys(RS_Iter21));
        for (var RS_Index21 of RS_Iter21) {
            y = RS_Index21;
            "301";
            y.radius = rb;
        }
        "302";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "304";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "305";
        "306";
        "307";
        "308";
        "309";
        "310";
        L = s.number;
        "311";
        L_number = L;
        "312";
        (await clear());
        "314";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "315";
        scene5.center = vector(0, 0, 0);
        "317";
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

    "323";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    cylinder_item = RS_unpack[2];
    total_item = RS_unpack[3];
    "329";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>BCC Lattice Example: BCC Crystal Structure (BCC)</h2><hr>", pos: scene5.title_anchor})]);
    "332";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "The Base Body Centered Cubic Structure \\(BCC \\) is a model commonly found within crystal structures. Each cell contains a\nadditional atom on each surface. Such a sytems is called the body centered cubic (BB) system. \n\n", pos: scene5.title_anchor})]);
    "341";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "348";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"green\">r_a<font color =\"black\"></b>: Ionic radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor})]);
    "351";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "353";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another BCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n"})]);
    "358";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "359";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "362";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "363";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "365";
    scene5.append_to_caption("\n");
    "367";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    (await sleep(.1));
    "368";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "370";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "371";
    scene5.append_to_caption("\n");
    "373";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "374";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "375";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "377";
    scene5.append_to_caption("\n");
    "386";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "387";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "388";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "390";
    scene5.append_to_caption("\n\n");
    "405";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<font color = \"red\">Notes: Generate CSV is currently not working<font color =\"black\">\n"})]);
    "408";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "409";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "410";
    scene5.append_to_caption("\n\n\n");
    "411";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "413";
    (await MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ])));
    "418";
    while (true) {
        "419";
        (await rate(100));
        "420";
        if (running) {
            "421";
            var RS_Iter22 = total_item;
            RS_Iter22 = ((typeof RS_Iter22[Symbol.iterator] === "function") ? (RS_Iter22 instanceof Map ? RS_Iter22.keys() : RS_Iter22) : Object.keys(RS_Iter22));
            for (var RS_Index22 of RS_Iter22) {
                b = RS_Index22;
                "422";
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

