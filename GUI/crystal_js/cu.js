// START JAVASCRIPT
;(function() {;
var ρσ_modules = {};
var string, it8, ra_item, cylinder_item, total_item, running;
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

    var version, print, arange, __name__, type, ρσ_ls, scene5, U, L, la_int, ra_int, la_default_text, ra_default_text, scale_factor, scale_default_text, la, unit, ra, ra_item, cylinder_item, total_item, running, ρσ_unpack, it0, it1, ib1, it2, ib2, it3, ib3, it5, ib5, ib6, ib7, it8, b;
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
    "8";
    scene5 = ρσ_interpolate_kwargs.call(this, canvas, [ρσ_desugar_kwargs({background: color.black, width: 800, length: 800, center: vector(0, 0, 0)})]);
    "10";
    U = 1;
    "11";
    L = U;
    "12";
    la_int = 3.597;
    "13";
    ra_int = 1.35;
    "15";
    la_default_text = str(la_int);
    "16";
    ra_default_text = str(ra_int);
    "18";
    scale_factor = .5;
    "19";
    scale_default_text = str(scale_factor);
    "22";
    la = 2;
    "23";
    unit = 1;
    "24";
    ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
    "29";
    scene5.autoscale = true;
    "39";
    ra_item = ρσ_list_decorate([]);
    "40";
    cylinder_item = ρσ_list_decorate([]);
    "41";
    total_item = ρσ_list_decorate([]);
    "42";
    running = false;
    "45";
    async function axis_number(cylinder) {
        var ρσ_ls, axis_num;
        "46";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && ρσ_equals(cylinder.axis.x, 1))) {
            "48";
            axis_num = 0;
            "49";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && ρσ_equals(cylinder.axis.y, 1))) {
            "51";
            axis_num = 1;
            "52";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && ρσ_equals(cylinder.axis.z, 1))) {
            "54";
            axis_num = 2;
        }
        "55";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]},
        __module__ : {value: null}
    });

    "57";
    async function gen_csv() {
        var ρσ_ls, file, i, axis_num;
        "58";
        file = (await open("nacl_v1.csv", "w+"));
        "59";
        file.write("#type,x,y,z,radius\n");
        "61";
        var ρσ_Iter1 = range(len(ra_item));
        ρσ_Iter1 = ((typeof ρσ_Iter1[Symbol.iterator] === "function") ? (ρσ_Iter1 instanceof Map ? ρσ_Iter1.keys() : ρσ_Iter1) : Object.keys(ρσ_Iter1));
        for (var ρσ_Index1 of ρσ_Iter1) {
            i = ρσ_Index1;
            "63";
            file.write(str(0)["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(ra_item, i).radius))["+"]("\n"));
        }
        "66";
        file.write("#type,x,y,z,axis\n");
        "67";
        var ρσ_Iter2 = range(len(cylinder_item));
        ρσ_Iter2 = ((typeof ρσ_Iter2[Symbol.iterator] === "function") ? (ρσ_Iter2 instanceof Map ? ρσ_Iter2.keys() : ρσ_Iter2) : Object.keys(ρσ_Iter2));
        for (var ρσ_Index2 of ρσ_Iter2) {
            i = ρσ_Index2;
            "68";
            axis_num = (await axis_number(ρσ_getitem(cylinder_item, i)));
            "70";
            file.write(str(1)["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
        }
        "71";
        file.close();
    };
    if (!gen_csv.__module__) Object.defineProperties(gen_csv, {
        __module__ : {value: null}
    });

    "73";
    async function print_csv() {
        var ρσ_ls, string_list, i, axis_num;
        "74";
        "75";
        "77";
        if ((it8.text !== "None" && (typeof it8.text !== "object" || ρσ_not_equals(it8.text, "None")))) {
            "78";
            (await del_csv());
        }
        "91";
        string_list = ρσ_list_decorate([]);
        "92";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "93";
        string_list.append("#type,x,y,z,radius\n");
        "96";
        var ρσ_Iter3 = range(len(ra_item));
        ρσ_Iter3 = ((typeof ρσ_Iter3[Symbol.iterator] === "function") ? (ρσ_Iter3 instanceof Map ? ρσ_Iter3.keys() : ρσ_Iter3) : Object.keys(ρσ_Iter3));
        for (var ρσ_Index3 of ρσ_Iter3) {
            i = ρσ_Index3;
            "100";
            string_list.append(str(0)["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(ra_item, i).pos.z))["+"](",")["+"](str(ρσ_getitem(ra_item, i).radius))["+"](",")["+"]("na\n"));
        }
        "105";
        string_list.append("#type,x,y,z,axis,length\n");
        "106";
        var ρσ_Iter4 = range(len(cylinder_item));
        ρσ_Iter4 = ((typeof ρσ_Iter4[Symbol.iterator] === "function") ? (ρσ_Iter4 instanceof Map ? ρσ_Iter4.keys() : ρσ_Iter4) : Object.keys(ρσ_Iter4));
        for (var ρσ_Index4 of ρσ_Iter4) {
            i = ρσ_Index4;
            "107";
            axis_num = (await axis_number(ρσ_getitem(cylinder_item, i)));
            "115";
            string_list.append(str(1)["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.x))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.y))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(ρσ_getitem(cylinder_item, i).length))["+"]("\n"));
        }
        "118";
        string_list.append("<\/p>");
        "119";
        string = "".join(string_list);
        "120";
        it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: string})]);
    };
    if (!print_csv.__module__) Object.defineProperties(print_csv, {
        __module__ : {value: null}
    });

    "124";
    async function del_csv() {
        "125";
        "127";
        it8.text = "";
    };
    if (!del_csv.__module__) Object.defineProperties(del_csv, {
        __module__ : {value: null}
    });

    "129";
    async function build(L, ra, ra_item, cylinder_item, total_item) {
        var ρσ_ls, b, k, j, i;
        "130";
        for (var ρσ_Index5 = L["-u"](); ρσ_Index5["<"](L["+"](1)); ρσ_Index5++) {
            i = ρσ_Index5;
            "131";
            for (var ρσ_Index6 = L["-u"](); ρσ_Index6["<"](L["+"](1)); ρσ_Index6++) {
                j = ρσ_Index6;
                "132";
                for (var ρσ_Index7 = L["-u"](); ρσ_Index7["<"](L["+"](1)); ρσ_Index7++) {
                    k = ρσ_Index7;
                    "134";
                    if (ρσ_equals(L["%"](2), 1)) {
                        "135";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 1)) {
                            "136";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: vec(1, .7, .2)})]);
                            "137";
                            ra_item.append(b);
                            "139";
                        }
                        if (i["<="](L["-"](1))) {
                            "140";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "141";
                            cylinder_item.append(b);
                            "142";
                        }
                        if (j["<="](L["-"](1))) {
                            "143";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "144";
                            cylinder_item.append(b);
                            "145";
                        }
                        if (k["<="](L["-"](1))) {
                            "146";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "147";
                            cylinder_item.append(b);
                            "149";
                        }
                    } else {
                        "150";
                        if (ρσ_equals(abs(i["+"](j)["+"](k))["%"](2), 0)) {
                            "151";
                            b = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({pos: vector(i, j, k), radius: ra, color: vec(1, .7, .2)})]);
                            "152";
                            ra_item.append(b);
                            "154";
                        }
                        if (i["<"](L)) {
                            "155";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(unit, 0, 0), radius: .02, color: color.white})]);
                            "156";
                            cylinder_item.append(b);
                            "157";
                        }
                        if (j["<"](L)) {
                            "158";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, unit, 0), radius: .02, color: color.white})]);
                            "159";
                            cylinder_item.append(b);
                            "160";
                        }
                        if (k["<"](L)) {
                            "161";
                            b = ρσ_interpolate_kwargs.call(this, cylinder, [ρσ_desugar_kwargs({pos: vector(i, j, k), axis: vector(0, 0, unit), radius: .02, color: color.white})]);
                            "162";
                            cylinder_item.append(b);
                        }
                    }
                }
            }
        }
        "164";
        total_item = ra_item["+"](cylinder_item);
        "166";
        return [ra_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "ra_item", "cylinder_item", "total_item"]},
        __module__ : {value: null}
    });

    "168";
    async function build_button(s) {
        "169";
        "170";
        "171";
        "172";
        "173";
        running = !running;
        "174";
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

    "179";
    async function clear() {
        var ρσ_ls, i;
        "180";
        var ρσ_Iter8 = ra_item;
        ρσ_Iter8 = ((typeof ρσ_Iter8[Symbol.iterator] === "function") ? (ρσ_Iter8 instanceof Map ? ρσ_Iter8.keys() : ρσ_Iter8) : Object.keys(ρσ_Iter8));
        for (var ρσ_Index8 of ρσ_Iter8) {
            i = ρσ_Index8;
            "181";
            i.visible = false;
            "182";
            i = undefined;
        }
        "185";
        var ρσ_Iter9 = cylinder_item;
        ρσ_Iter9 = ((typeof ρσ_Iter9[Symbol.iterator] === "function") ? (ρσ_Iter9 instanceof Map ? ρσ_Iter9.keys() : ρσ_Iter9) : Object.keys(ρσ_Iter9));
        for (var ρσ_Index9 of ρσ_Iter9) {
            i = ρσ_Index9;
            "186";
            i.visible = false;
            "187";
            i = undefined;
        }
    };
    if (!clear.__module__) Object.defineProperties(clear, {
        __module__ : {value: null}
    });

    "191";
    async function reset() {
        var ρσ_ls, ρσ_unpack;
        "192";
        "193";
        "194";
        "195";
        clear();
        "196";
        ρσ_unpack = (await build(L, ra, ra_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        cylinder_item = ρσ_unpack[1];
        total_item = ρσ_unpack[2];
    };
    if (!reset.__module__) Object.defineProperties(reset, {
        __module__ : {value: null}
    });

    "200";
    async function set_la(s) {
        var ρσ_ls, la_int, ra, x;
        "201";
        la_int = s.number;
        "202";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "203";
        var ρσ_Iter10 = ra_item;
        ρσ_Iter10 = ((typeof ρσ_Iter10[Symbol.iterator] === "function") ? (ρσ_Iter10 instanceof Map ? ρσ_Iter10.keys() : ρσ_Iter10) : Object.keys(ρσ_Iter10));
        for (var ρσ_Index10 of ρσ_Iter10) {
            x = ρσ_Index10;
            "204";
            x.radius = ra;
        }
        "205";
        return la;
    };
    if (!set_la.__argnames__) Object.defineProperties(set_la, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "209";
    async function set_ra(s) {
        var ρσ_ls, ra_int, ra, x;
        "210";
        ra_int = s.number;
        "211";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "212";
        var ρσ_Iter11 = ra_item;
        ρσ_Iter11 = ((typeof ρσ_Iter11[Symbol.iterator] === "function") ? (ρσ_Iter11 instanceof Map ? ρσ_Iter11.keys() : ρσ_Iter11) : Object.keys(ρσ_Iter11));
        for (var ρσ_Index11 of ρσ_Iter11) {
            x = ρσ_Index11;
            "213";
            x.radius = ra;
        }
        "214";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "218";
    async function set_scale_factor(s) {
        var ρσ_ls, scale_factor, ra, x;
        "219";
        scale_factor = s.number;
        "220";
        ra = ra_int["/"](la_int)["*"](la)["*"](scale_factor);
        "221";
        var ρσ_Iter12 = ra_item;
        ρσ_Iter12 = ((typeof ρσ_Iter12[Symbol.iterator] === "function") ? (ρσ_Iter12 instanceof Map ? ρσ_Iter12.keys() : ρσ_Iter12) : Object.keys(ρσ_Iter12));
        for (var ρσ_Index12 of ρσ_Iter12) {
            x = ρσ_Index12;
            "222";
            x.radius = ra;
        }
        "223";
        return [scale_factor, ra];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "226";
    async function set_L(s) {
        var ρσ_ls, L, rb_item, ρσ_unpack;
        "227";
        "228";
        "229";
        "230";
        L = s.number;
        "231";
        clear();
        "232";
        ra_item = ρσ_list_decorate([]);
        "233";
        rb_item = ρσ_list_decorate([]);
        "234";
        cylinder_item = ρσ_list_decorate([]);
        "235";
        scene5.camera.pos = vector(0, 0, 2["*"](L));
        "236";
        scene5.center = vector(0, 0, 0);
        "238";
        ρσ_unpack = (await build(L, ra, ra_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        ra_item = ρσ_unpack[0];
        cylinder_item = ρσ_unpack[1];
        total_item = ρσ_unpack[2];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]},
        __module__ : {value: null}
    });

    "244";
    ρσ_unpack = (await build(L, ra, ra_item, cylinder_item, total_item));
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
    ra_item = ρσ_unpack[0];
    cylinder_item = ρσ_unpack[1];
    total_item = ρσ_unpack[2];
    "249";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h2>fcc Lattice Example: Solid Copper (Cu)</h2><hr>", pos: scene5.title_anchor})]);
    "252";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<b>Solid Copper</b> are widely used for wiring in daily life. It arranges copper atoms in a face-centered-cubic (fcc) configuration.\nA copper atom is placed at each corner and in the center of each face of a cube.  This cube is called the unit cell which is repeated in \nthree dimensional space to make up the crystal structure of the metal. Other fcc materials have the similar structure but different parameters.  \n", pos: scene5.title_anchor})]);
    "258";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Structure Parameters</h3>", pos: scene5.title_anchor})]);
    "273";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n<ul><li><b>L</b>: An integer number showing the maximum coordinate where an atom/ion can be placed. \nFor example, L=1 means atoms/ions will be arranged in a box at x=-1, 0, 1, y=-1,0,1, and z=-1, 0, 1. </li><li><b>a</b>: A standard lattice constant showing the distance between 2 neighboring Cu atoms.</li><li><b><font color = \"Brown\">r_a<font color = \"Black\"></b>: Atomic radius of Copper [<font color =\"Brown\">Brown<font color =\"black\">] </li><li><b>scale</b>: A parameter between 0 and 1 to control the representation styles of crystal structures. \nScale=1 generates a <b>hard-sphere model</b> for the atomic arrangement. Atoms/ions are thought of as \nbeing solid spheres having well-defined, realistic diameters.  \nScale<1 generates a <b>reduced sphere model</b> where atom/ions are represented by spheres with reduced \nsizes by the factor of “scale”.  </li></ul>", pos: scene5.title_anchor})]);
    "280";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotation</b>: (1) Press the right button of the mouse and drag or (2) type Ctrl key and drag</li><li><b>Zoom</b>:  Use the scroll wheel of the mouse </li></ul>", pos: scene5.title_anchor})]);
    "284";
    it0 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<h3>Parameters:</h3>Adjust the parameters below to build up another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "286";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "295";
    it1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "L: "})]);
    (await sleep(.1));
    "296";
    ib1 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "298";
    scene5.append_to_caption("\n");
    "300";
    it2 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "a: "})]);
    (await sleep(.1));
    "301";
    ib2 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_la, text: la_default_text})]);
    "303";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "304";
    scene5.append_to_caption("\n");
    "307";
    it3 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "ra: "})]);
    (await sleep(.1));
    "308";
    ib3 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "309";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "311";
    scene5.append_to_caption("\n");
    "315";
    it5 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "scale: "})]);
    (await sleep(.1));
    "316";
    ib5 = ρσ_interpolate_kwargs.call(this, winput, [ρσ_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "317";
    ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "( Input a number between 0 and 1 )"})]);
    "322";
    scene5.append_to_caption("\n\n");
    "336";
    ib6 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "337";
    ib7 = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "339";
    scene5.append_to_caption("\n\n\n");
    "340";
    it8 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: ""})]);
    "344";
    MathJax.Hub.Queue(ρσ_list_decorate([ "Typeset", MathJax.Hub ]));
    "348";
    while (true) {
        "349";
        (await rate(100));
        "350";
        if (running) {
            "351";
            var ρσ_Iter13 = total_item;
            ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
            for (var ρσ_Index13 of ρσ_Iter13) {
                b = ρσ_Index13;
                "352";
                ρσ_interpolate_kwargs.call(b, b.rotate, [ρσ_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
