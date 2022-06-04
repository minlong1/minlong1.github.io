// START JAVASCRIPT
;(function() {;
var RS_modules = {};
var string, it8, ra_item, rb_item, cylinder_item, total_item, running;
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

    RS_modules.pythonize.strings = strings;
})();
async function __main__() {
    var version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, arange, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, ib7, it8, b;
    version = RS_list_decorate([ "2.9", "glowscript" ]);
    Array.prototype['+']=function(r) {return this.concat(r)}
    Array.prototype['*']=function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    box = vp_box;
    sphere = vp_sphere;
    simple_sphere = vp_simple_sphere;
    cylinder = vp_cylinder;
    pyramid = vp_pyramid;
    cone = vp_cone;
    helix = vp_helix;
    ellipsoid = vp_ellipsoid;
    ring = vp_ring;
    arrow = vp_arrow;
    compound = vp_compound;
    display = canvas;
    vector = vec;
    print = GSprint;
    arange = range;
    type = pytype;
    scene = canvas();
    var strings = RS_modules.pythonize.strings;

    strings();
    "7";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
    "9";
    L = 1;
    "10";
    bond_ab = 2.83;
    "11";
    ra_int = 1.16;
    "12";
    rb_int = 1.67;
    "14";
    bond_default_text = str(bond_ab);
    "15";
    ra_default_text = str(ra_int);
    "16";
    rb_default_text = str(rb_int);
    "18";
    scale_factor = .5;
    "19";
    scale_default_text = str(scale_factor);
    "22";
    ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "23";
    rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
    "26";
    ra_item = RS_list_decorate([]);
    "27";
    rb_item = RS_list_decorate([]);
    "28";
    cylinder_item = RS_list_decorate([]);
    "29";
    total_item = RS_list_decorate([]);
    "30";
    running = false;
    "32";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "33";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && RS_equals(cylinder.axis.x, 1))) {
            "35";
            axis_num = 0;
            "36";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && RS_equals(cylinder.axis.y, 1))) {
            "38";
            axis_num = 1;
            "39";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && RS_equals(cylinder.axis.z, 1))) {
            "41";
            axis_num = 2;
        }
        "42";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]}
    });

    "44";
    async function gen_csv() {
        var RS_ls, file, i, axis_num;
        "45";
        file = open("nacl_v1.csv", "w+");
        "46";
        file.write("#type,x,y,z,radius\n");
        "48";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "50";
            file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
        }
        "52";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "54";
            file.write(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
        }
        "57";
        file.write("#type,x,y,z,axis\n");
        "58";
        var RS_Iter3 = range(len(cylinder_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "59";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "61";
            file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
        }
        "62";
        file.close();
    };

    "64";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "65";
        "66";
        "68";
        if (RS_not_equals(len(it8.text), 0)) {
            "69";
            it8 = (await del_csv());
        }
        "80";
        string_list = RS_list_decorate([]);
        "81";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "82";
        string_list.append("#type,x,y,z,radius\n");
        "85";
        var RS_Iter4 = range(len(ra_item));
        RS_Iter4 = ((typeof RS_Iter4[Symbol.iterator] === "function") ? (RS_Iter4 instanceof Map ? RS_Iter4.keys() : RS_Iter4) : Object.keys(RS_Iter4));
        for (var RS_Index4 of RS_Iter4) {
            i = RS_Index4;
            "86";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "88";
        var RS_Iter5 = range(len(rb_item));
        RS_Iter5 = ((typeof RS_Iter5[Symbol.iterator] === "function") ? (RS_Iter5 instanceof Map ? RS_Iter5.keys() : RS_Iter5) : Object.keys(RS_Iter5));
        for (var RS_Index5 of RS_Iter5) {
            i = RS_Index5;
            "89";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "92";
        string_list.append("#type,x,y,z,axis,length\n");
        "93";
        var RS_Iter6 = range(len(cylinder_item));
        RS_Iter6 = ((typeof RS_Iter6[Symbol.iterator] === "function") ? (RS_Iter6 instanceof Map ? RS_Iter6.keys() : RS_Iter6) : Object.keys(RS_Iter6));
        for (var RS_Index6 of RS_Iter6) {
            i = RS_Index6;
            "94";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "95";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "97";
        string_list.append("<\/p>");
        "98";
        string = "".join(string_list);
        "99";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };

    "101";
    async function del_csv() {
        "102";
        "104";
        it8.text = "";
        "105";
        return it8;
    };

    "108";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var RS_ls, b, k, j, i;
        "110";
        for (var RS_Index7 = L["-u"]()["+"](1); RS_Index7["<"](L["+"](1)); RS_Index7++) {
            i = RS_Index7;
            "111";
            for (var RS_Index8 = L["-u"]()["+"](1); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                j = RS_Index8;
                "112";
                for (var RS_Index9 = L["-u"]()["+"](1); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                    k = RS_Index9;
                    "113";
                    if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                        "114";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.magenta})]);
                        "115";
                        ra_item.append(b);
                        "116";
                    } else {
                        "117";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green})]);
                        "118";
                        rb_item.append(b);
                        "119";
                    }
                    if (i["+"](1)["<="](L)) {
                        "120";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white})]);
                        "121";
                        cylinder_item.append(b);
                        "122";
                    }
                    if (j["+"](1)["<="](L)) {
                        "123";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white})]);
                        "124";
                        cylinder_item.append(b);
                        "125";
                    }
                    if (k["+"](1)["<="](L)) {
                        "126";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white})]);
                        "127";
                        cylinder_item.append(b);
                    }
                }
            }
        }
        "128";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "130";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]}
    });

    "132";
    async function build_button(s) {
        "133";
        "134";
        "135";
        "136";
        "137";
        "138";
        running = !running;
        "139";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]}
    });

    "144";
    async function clear() {
        var RS_ls, i;
        "145";
        var RS_Iter10 = ra_item;
        RS_Iter10 = ((typeof RS_Iter10[Symbol.iterator] === "function") ? (RS_Iter10 instanceof Map ? RS_Iter10.keys() : RS_Iter10) : Object.keys(RS_Iter10));
        for (var RS_Index10 of RS_Iter10) {
            i = RS_Index10;
            "146";
            i.visible = false;
            "147";
            i = undefined;
        }
        "148";
        var RS_Iter11 = rb_item;
        RS_Iter11 = ((typeof RS_Iter11[Symbol.iterator] === "function") ? (RS_Iter11 instanceof Map ? RS_Iter11.keys() : RS_Iter11) : Object.keys(RS_Iter11));
        for (var RS_Index11 of RS_Iter11) {
            i = RS_Index11;
            "149";
            i.visible = false;
            "150";
            i = undefined;
        }
        "151";
        var RS_Iter12 = cylinder_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            i = RS_Index12;
            "152";
            i.visible = false;
            "153";
            i = undefined;
        }
    };

    "156";
    async function reset() {
        var RS_ls, i, RS_unpack;
        "157";
        "158";
        "159";
        "160";
        "161";
        var RS_Iter13 = ra_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            i = RS_Index13;
            "162";
            i.visible = false;
            "163";
            i = undefined;
        }
        "164";
        var RS_Iter14 = rb_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            i = RS_Index14;
            "165";
            i.visible = false;
            "166";
            i = undefined;
        }
        "167";
        var RS_Iter15 = cylinder_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            i = RS_Index15;
            "168";
            i.visible = false;
            "169";
            i = undefined;
        }
        "170";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };

    "173";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "174";
        bond_ab = s.number;
        "175";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "176";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "177";
        var RS_Iter16 = ra_item;
        RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
        for (var RS_Index16 of RS_Iter16) {
            x = RS_Index16;
            "178";
            x.radius = ra;
        }
        "179";
        var RS_Iter17 = rb_item;
        RS_Iter17 = ((typeof RS_Iter17[Symbol.iterator] === "function") ? (RS_Iter17 instanceof Map ? RS_Iter17.keys() : RS_Iter17) : Object.keys(RS_Iter17));
        for (var RS_Index17 of RS_Iter17) {
            y = RS_Index17;
            "180";
            y.radius = rb;
        }
        "181";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]}
    });

    "184";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "185";
        ra_int = s.number;
        "186";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "187";
        var RS_Iter18 = ra_item;
        RS_Iter18 = ((typeof RS_Iter18[Symbol.iterator] === "function") ? (RS_Iter18 instanceof Map ? RS_Iter18.keys() : RS_Iter18) : Object.keys(RS_Iter18));
        for (var RS_Index18 of RS_Iter18) {
            x = RS_Index18;
            "188";
            x.radius = ra;
        }
        "189";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]}
    });

    "191";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "192";
        rb_int = s.number;
        "193";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "194";
        var RS_Iter19 = rb_item;
        RS_Iter19 = ((typeof RS_Iter19[Symbol.iterator] === "function") ? (RS_Iter19 instanceof Map ? RS_Iter19.keys() : RS_Iter19) : Object.keys(RS_Iter19));
        for (var RS_Index19 of RS_Iter19) {
            y = RS_Index19;
            "195";
            y.radius = rb;
        }
        "196";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]}
    });

    "199";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "200";
        scale_factor = s.number;
        "201";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "202";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "203";
        var RS_Iter20 = ra_item;
        RS_Iter20 = ((typeof RS_Iter20[Symbol.iterator] === "function") ? (RS_Iter20 instanceof Map ? RS_Iter20.keys() : RS_Iter20) : Object.keys(RS_Iter20));
        for (var RS_Index20 of RS_Iter20) {
            x = RS_Index20;
            "204";
            x.radius = ra;
        }
        "205";
        var RS_Iter21 = rb_item;
        RS_Iter21 = ((typeof RS_Iter21[Symbol.iterator] === "function") ? (RS_Iter21 instanceof Map ? RS_Iter21.keys() : RS_Iter21) : Object.keys(RS_Iter21));
        for (var RS_Index21 of RS_Iter21) {
            y = RS_Index21;
            "206";
            y.radius = rb;
        }
        "207";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]}
    });

    "210";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "211";
        "212";
        "213";
        "214";
        "215";
        L = s.number;
        "216";
        ;(await clear());
        "217";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };
    if (!set_L.__argnames__) Object.defineProperties(set_L, {
        __argnames__ : {value: ["s"]}
    });

    "222";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    cylinder_item = RS_unpack[2];
    total_item = RS_unpack[3];
    "227";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>fcc Lattice Example: Sodium Chloride (NaCl)</h2><hr>", pos: scene5.title_anchor})]);
    "232";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "Sodium Chloride, occurs natually as white crystals of salt, is an ionic compound with the\nchemical symbol \\(NaCl \\). It consists of two types of ions: sodium ions and chloride ions which \nalternate with each other in each of the three dimensions. The repeating pattern is in a shape of of cube,\nand there are lattice points on the faces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor})]);
    "235";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<b> This version of animation doesn't present the smallest repeating pattern, i.e. unit cell.\n</b>", pos: scene5.title_anchor})]);
    "241";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "249";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"Purple\">r_a<font color = \"Black\"></b>: Ironic radius of Sodium [<font color =\"Purple\">Purple<font color =\"black\">] </li><li><b><font color = \"Green\">r_b<font color = \"Black\"></b>: Ironic Radius of Chloride [<font color =\"Green\">Green<font color =\"black\">] </li></ul>", pos: scene5.title_anchor})]);
    "251";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "253";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another fcc material.\nPress <b>Enter key</b> after <b>every</b> change to take effect.\n"})]);
    "259";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "260";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "264";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    ;(await sleep(.2));
    "265";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "267";
    scene5.append_to_caption("\n");
    "269";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    ;(await sleep(.2));
    "270";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text})]);
    "272";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "273";
    scene5.append_to_caption("\n");
    "276";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    ;(await sleep(.2));
    "277";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text})]);
    "278";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "280";
    scene5.append_to_caption("\n");
    "283";
    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "rb: "})]);
    ;(await sleep(.2));
    "284";
    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text})]);
    "285";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "\\(   \\unicode{x212B}   \\)"})]);
    "286";
    scene5.append_to_caption("\n");
    "290";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    ;(await sleep(.2));
    "291";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "292";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "297";
    scene5.append_to_caption("\n\n");
    "311";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "312";
    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "314";
    scene5.append_to_caption("\n\n\n");
    "315";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "319";
    MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ]));
    "322";
    while (true) {
        "323";
        ;(await rate(100));
        "324";
        if (running) {
            "325";
            var RS_Iter22 = total_item;
            RS_Iter22 = ((typeof RS_Iter22[Symbol.iterator] === "function") ? (RS_Iter22 instanceof Map ? RS_Iter22.keys() : RS_Iter22) : Object.keys(RS_Iter22));
            for (var RS_Index22 of RS_Iter22) {
                b = RS_Index22;
                "326";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
