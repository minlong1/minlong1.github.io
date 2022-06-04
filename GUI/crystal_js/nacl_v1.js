// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running;
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

    var version, print, arange, __name__, type, ρσ_ls, scene5, U, L, la_int, ra_int, rb_int, la_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, la, unit, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, ρσ_unpack, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, ib7, it8, b;
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
    "10";
    scene5 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({background: color.black, width: 800, length: 800, center: vector(0, 0, 0)})]);
    "12";
    U = 1;
    "13";
    L = U;
    "14";
    la_int = 5.64;
    "15";
    ra_int = 1.16;
    "16";
    rb_int = 1.67;
    "18";
    la_default_text = str(la_int);
    "19";
    ra_default_text = str(ra_int);
    "20";
    rb_default_text = str(rb_int);
    "22";
    scale_factor = .5;
    "23";
    scale_default_text = str(scale_factor);
    "26";
    la = 2;
    "27";
    unit = 1;
    "28";
    ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
    "30";
    rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
    "34";
    scene5.autoscale = true;
    "44";
    ra_item = ρσ_list_decorate([]);
    "45";
    rb_item = ρσ_list_decorate([]);
    "46";
    cylinder_item = ρσ_list_decorate([]);
    "47";
    total_item = ρσ_list_decorate([]);
    "48";
    running = false;
    "51";
    async function axis_number(cylinder) {
        var ρσ_ls, axis_num;
        "52";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && ρσ_equals(cylinder.axis.x, 1))) {
            "54";
            axis_num = 0;
            "55";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && ρσ_equals(cylinder.axis.y, 1))) {
            "57";
            axis_num = 1;
            "58";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && ρσ_equals(cylinder.axis.z, 1))) {
            "60";
            axis_num = 2;
        }
        "61";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "63";
    async function gen_csv() {
        var ρσ_ls, file, i, axis_num;
        "64";
        file = (await open("nacl_v1.csv", "w+"));
        "65";
        file.write("#type,x,y,z,radius\n");
        "67";
        var ρσ_Iter1 = range(len(ra_item));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "69";
            file.write(str(0)["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(ra_item, i).radius))["+"]("\n"));
        }
        "71";
        var ρσ_Iter2 = range(len(rb_item));
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            i = ρσ_Index2;
            "73";
            file.write(str(0)["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(rb_item, i).radius))["+"]("\n"));
        }
        "76";
        file.write("#type,x,y,z,axis\n");
        "77";
        var ρσ_Iter3 = range(len(cylinder_item));
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            i = ρσ_Index3;
            "78";
            axis_num = (await axis_number(ρσ_getitem(cylinder_item, i)));
            "80";
            file.write(str(1)["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
        }
        "81";
        file.close();
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "83";
    async function print_csv() {
        var ρσ_ls, string_list, i, axis_num;
        "84";
        "85";
        "87";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || ρσ_not_equals(it8.text, "None")))) {
            "88";
            (await del_csv());
        }
        "101";
        string_list = ρσ_list_decorate([]);
        "102";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "103";
        string_list.append("#type,x,y,z,radius\n");
        "106";
        var ρσ_Iter4 = range(len(ra_item));
        ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
        for (var ρσ_Index4 of ρσ_Iter4) {
            i = ρσ_Index4;
            "110";
            string_list.append(str(0)["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(ra_item, i).radius))["+"](",")["+"]("na\n"));
        }
        "113";
        var ρσ_Iter5 = range(len(rb_item));
        ρσ_Iter5 = ((typeof ρσ_Iter5[Symbol.iterator] === "function") ? (ρσ_Iter5 instanceof Map ? ρσ_Iter5.keys() : ρσ_Iter5) : Object.keys(ρσ_Iter5));
        for (var ρσ_Index5 of ρσ_Iter5) {
            i = ρσ_Index5;
            "117";
            string_list.append(str(0)["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(rb_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(rb_item, i).radius))["+"](",")["+"]("na\n"));
        }
        "121";
        string_list.append("#type,x,y,z,axis,length\n");
        "122";
        var ρσ_Iter6 = range(len(cylinder_item));
        ρσ_Iter6 = ((typeof ρσ_Iter6[Symbol.iterator] === "function") ? (ρσ_Iter6 instanceof Map ? ρσ_Iter6.keys() : ρσ_Iter6) : Object.keys(ρσ_Iter6));
        for (var ρσ_Index6 of ρσ_Iter6) {
            i = ρσ_Index6;
            "123";
            axis_num = (await axis_number(ρσ_getitem(cylinder_item, i)));
            "131";
            string_list.append(str(1)["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).length))["+"]("\n"));
        }
        "134";
        string_list.append("<\/p>");
        "135";
        string = "".join(string_list);
        "136";
        it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "140";
    async function del_csv() {
        "141";
        "143";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "145";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var ρσ_ls, b, k, j, i;
        "146";
        for (var ρσ_Index7 = L["-u"](); ρσ_Index7["<"](L["+"](1)); ρσ_Index7++) {
            i = ρσ_Index7;
            "147";
            for (var ρσ_Index8 = L["-u"](); ρσ_Index8["<"](L["+"](1)); ρσ_Index8++) {
                j = ρσ_Index8;
                "148";
                for (var ρσ_Index9 = L["-u"](); ρσ_Index9["<"](L["+"](1)); ρσ_Index9++) {
                    k = ρσ_Index9;
                    "150";
                    if (ρσ_equals(L["%"](2), 1)) {
                        "151";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 0)) {
                            "153";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.magenta})]);
                            "154";
                            ra_item.append(b);
                            "155";
                        } else {
                            "157";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "158";
                            rb_item.append(b);
                            "160";
                        }
                        if (i["<="](L["-"](1))) {
                            "161";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "162";
                            cylinder_item.append(b);
                            "163";
                        }
                        if (j["<="](L["-"](1))) {
                            "164";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "165";
                            cylinder_item.append(b);
                            "166";
                        }
                        if (k["<="](L["-"](1))) {
                            "167";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "168";
                            cylinder_item.append(b);
                            "170";
                        }
                    } else {
                        "171";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 1)) {
                            "173";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: color.magenta})]);
                            "174";
                            ra_item.append(b);
                            "175";
                        } else {
                            "177";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: rb, color: color.green})]);
                            "178";
                            rb_item.append(b);
                            "180";
                        }
                        if (i["<"](L)) {
                            "181";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "182";
                            cylinder_item.append(b);
                            "183";
                        }
                        if (j["<"](L)) {
                            "184";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "185";
                            cylinder_item.append(b);
                            "186";
                        }
                        if (k["<"](L)) {
                            "187";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "188";
                            cylinder_item.append(b);
                        }
                    }
                }
            }
        }
        "190";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "192";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "194";
    async function build_button(s) {
        "195";
        "196";
        "197";
        "198";
        "199";
        "200";
        running = !running;
        "201";
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

    "206";
    async function clear() {
        var ρσ_ls, i;
        "207";
        var ρσ_Iter10 = ra_item;
        ρσ_Iter10 = ((typeof ρσ_Iter10[Symbol.iterator] === "function") ? (ρσ_Iter10 instanceof Map ? ρσ_Iter10.keys() : ρσ_Iter10) : Object.keys(ρσ_Iter10));
        for (var ρσ_Index10 of ρσ_Iter10) {
            i = ρσ_Index10;
            "208";
            i.visible = false;
            "209";
            i = undefined;
        }
        "211";
        var ρσ_Iter11 = rb_item;
        ρσ_Iter11 = ((typeof ρσ_Iter11[Symbol.iterator] === "function") ? (ρσ_Iter11 instanceof Map ? ρσ_Iter11.keys() : ρσ_Iter11) : Object.keys(ρσ_Iter11));
        for (var ρσ_Index11 of ρσ_Iter11) {
            i = ρσ_Index11;
            "212";
            i.visible = false;
            "213";
            i = undefined;
        }
        "215";
        var ρσ_Iter12 = cylinder_item;
        ρσ_Iter12 = ((typeof ρσ_Iter12[Symbol.iterator] === "function") ? (ρσ_Iter12 instanceof Map ? ρσ_Iter12.keys() : ρσ_Iter12) : Object.keys(ρσ_Iter12));
        for (var ρσ_Index12 of ρσ_Iter12) {
            i = ρσ_Index12;
            "216";
            i.visible = false;
            "217";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "221";
    async function reset() {
        var ρσ_ls, ρσ_unpack;
        "222";
        "223";
        "224";
        "225";
        "226";
        clear();
        "227";
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

    "231";
    async function set_la(s) {
        var ρσ_ls, la_int, ra, rb, x, y;
        "232";
        la_int = s.number;
        "233";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "234";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "235";
        var ρσ_Iter13 = ra_item;
        ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
        for (var ρσ_Index13 of ρσ_Iter13) {
            x = ρσ_Index13;
            "236";
            x.radius = ra;
        }
        "237";
        var ρσ_Iter14 = rb_item;
        ρσ_Iter14 = ((typeof ρσ_Iter14[Symbol.iterator] === "function") ? (ρσ_Iter14 instanceof Map ? ρσ_Iter14.keys() : ρσ_Iter14) : Object.keys(ρσ_Iter14));
        for (var ρσ_Index14 of ρσ_Iter14) {
            y = ρσ_Index14;
            "238";
            y.radius = rb;
        }
        "239";
        return la;
    };
    if (!set_la.__argnames__) Object.defineProperties(set_la, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "243";
    async function set_ra(s) {
        var ρσ_ls, ra_int, ra, x;
        "244";
        ra_int = s.number;
        "245";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "246";
        var ρσ_Iter15 = ra_item;
        ρσ_Iter15 = ((typeof ρσ_Iter15[Symbol.iterator] === "function") ? (ρσ_Iter15 instanceof Map ? ρσ_Iter15.keys() : ρσ_Iter15) : Object.keys(ρσ_Iter15));
        for (var ρσ_Index15 of ρσ_Iter15) {
            x = ρσ_Index15;
            "247";
            x.radius = ra;
        }
        "248";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "250";
    async function set_rb(s) {
        var ρσ_ls, rb_int, rb, y;
        "251";
        rb_int = s.number;
        "252";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "253";
        var ρσ_Iter16 = rb_item;
        ρσ_Iter16 = ((typeof ρσ_Iter16[Symbol.iterator] === "function") ? (ρσ_Iter16 instanceof Map ? ρσ_Iter16.keys() : ρσ_Iter16) : Object.keys(ρσ_Iter16));
        for (var ρσ_Index16 of ρσ_Iter16) {
            y = ρσ_Index16;
            "254";
            y.radius = rb;
        }
        "255";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "258";
    async function set_scale_factor(s) {
        var ρσ_ls, scale_factor, ra, rb, x, y;
        "259";
        scale_factor = s.number;
        "260";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "261";
        rb = rb_int["/"](la_int)["*"](la)["*"](scale_factor);
        "262";
        var ρσ_Iter17 = ra_item;
        ρσ_Iter17 = ((typeof ρσ_Iter17[Symbol.iterator] === "function") ? (ρσ_Iter17 instanceof Map ? ρσ_Iter17.keys() : ρσ_Iter17) : Object.keys(ρσ_Iter17));
        for (var ρσ_Index17 of ρσ_Iter17) {
            x = ρσ_Index17;
            "263";
            x.radius = ra;
        }
        "264";
        var ρσ_Iter18 = rb_item;
        ρσ_Iter18 = ((typeof ρσ_Iter18[Symbol.iterator] === "function") ? (ρσ_Iter18 instanceof Map ? ρσ_Iter18.keys() : ρσ_Iter18) : Object.keys(ρσ_Iter18));
        for (var ρσ_Index18 of ρσ_Iter18) {
            y = ρσ_Index18;
            "265";
            y.radius = rb;
        }
        "266";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "269";
    async function set_L(s) {
        var ρσ_ls, L, ρσ_unpack;
        "270";
        "271";
        "272";
        "273";
        "274";
        L = s.number;
        "275";
        clear();
        "276";
        ra_item = ρσ_list_decorate([]);
        "277";
        rb_item = ρσ_list_decorate([]);
        "278";
        cylinder_item = ρσ_list_decorate([]);
        "279";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "280";
        scene5.center = vector(0, 0, 0);
        "282";
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

    "288";
    ρσ_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(4, ρσ_unpack);
    ra_item = ρσ_unpack[0];
    rb_item = ρσ_unpack[1];
    cylinder_item = ρσ_unpack[2];
    total_item = ρσ_unpack[3];
    "293";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h2>fcc Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor})]);
    "297";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<b>Sodium Chloride</b>, occurs natually as white crystals of salt, is an ionic compound with the chemical\nsymbol \\(NaCl \\). It consists of two types of ions: sodium ions and chloride ions which alternate with each \nother in each of the three dimensions. The repeating pattern is in a shape of of cube, and there are lattice \npoints on the faces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n", pos: scene5.title_anchor})]);
    "303";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Structure Parameters</h3>", pos: scene5.title_anchor})]);
    "319";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n<ul><li><b>L</b>: An integer number showing the maximum coordinate where an atom/ion can be placed. \nFor example, L=1 means atoms/ions will be arranged in a box at x=-1, 0, 1, y=-1,0,1, and z=-1, 0, 1. </li><li><b>a</b>: A standard lattice constant showing the distance between 2 neighboring Na+ ions.</li><li><b><font color = \"Magenta\">r_a<font color = \"Black\"></b>: Ironic radius of Sodium [<font color =\"Magenta\">Magenta<font color =\"black\">] </li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Ironic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] </li><li><b>scale</b>: A parameter between 0 and 1 to control the representation styles of crystal structures. \nScale=1 generates a <b>hard-sphere model</b> for the atomic arrangement. Atoms/ions are thought of as \nbeing solid spheres having well-defined, realistic diameters.  \nScale<1 generates a <b>reduced sphere model</b> where atom/ions are represented by spheres with reduced \nsizes by the factor of “scale”.  </li></ul>", pos: scene5.title_anchor})]);
    "326";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotation</b>: (1) Press the right button of the mouse and drag or (2) type Ctrl key and drag</li><li><b>Zoom</b>:  Use the scroll wheel of the mouse </li></ul>", pos: scene5.title_anchor})]);
    "330";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Parameters:</h3>Adjust the parameters below to build up another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "332";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "341";
    it1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "342";
    ib1 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "344";
    scene5.append_to_caption("\n");
    "346";
    it2 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "a: "})]);
    (await sleep(.1));
    "347";
    ib2 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_la, text: la_default_text})]);
    "349";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "350";
    scene5.append_to_caption("\n");
    "353";
    it3 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "354";
    ib3 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "355";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "357";
    scene5.append_to_caption("\n");
    "360";
    it4 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "rb: "})]);
    (await sleep(.1));
    "361";
    ib4 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "362";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "363";
    scene5.append_to_caption("\n");
    "367";
    it5 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "368";
    ib5 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "369";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "( Input a number between 0 and 1 )"})]);
    "374";
    scene5.append_to_caption("\n\n");
    "388";
    ib6 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "389";
    ib7 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "391";
    scene5.append_to_caption("\n\n\n");
    "392";
    it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: ""})]);
    "396";
    MathJax.Hub.Queue(ρσ_list_decorate([ "Typeset", MathJax.Hub ]));
    "400";
    while (true) {
        "401";
        (await rate(100));
        "402";
        if (running) {
            "403";
            var ρσ_Iter19 = total_item;
            ρσ_Iter19 = ((typeof ρσ_Iter19[Symbol.iterator] === "function") ? (ρσ_Iter19 instanceof Map ? ρσ_Iter19.keys() : ρσ_Iter19) : Object.keys(ρσ_Iter19));
            for (var ρσ_Index19 of ρσ_Iter19) {
                b = ρσ_Index19;
                "404";
                ρσ_interpolate_kwargs.call(b, b.rotate, [ρσ_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()