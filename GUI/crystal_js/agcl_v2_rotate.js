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
    var version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, arange, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, bond_default_text, ra_default_text, rb_default_text, scale_factor, scale_default_text, ra, rb, ra_item, rb_item, cylinder_item, total_item, running, RS_unpack, it0, b1, b2, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, ib6, it8, b;
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
    "6";
    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({background: color.black, width: 600, length: 600, center: vector(0, 0, 0)})]);
    "8";
    L = 1;
    "9";
    bond_ab = 2.77;
    "10";
    ra_int = 1.15;
    "11";
    rb_int = 1.81;
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
    "25";
    scene5.autoscale = true;
    "27";
    ra_item = RS_list_decorate([]);
    "28";
    rb_item = RS_list_decorate([]);
    "29";
    cylinder_item = RS_list_decorate([]);
    "30";
    total_item = RS_list_decorate([]);
    "31";
    running = false;
    "34";
    async function axis_number(cylinder) {
        var RS_ls, axis_num;
        "35";
        if ((cylinder.axis.x === 1 || typeof cylinder.axis.x === "object" && RS_equals(cylinder.axis.x, 1))) {
            "37";
            axis_num = 0;
            "38";
        } else if ((cylinder.axis.y === 1 || typeof cylinder.axis.y === "object" && RS_equals(cylinder.axis.y, 1))) {
            "40";
            axis_num = 1;
            "41";
        } else if ((cylinder.axis.z === 1 || typeof cylinder.axis.z === "object" && RS_equals(cylinder.axis.z, 1))) {
            "43";
            axis_num = 2;
        }
        "44";
        return axis_num;
    };
    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
        __argnames__ : {value: ["cylinder"]}
    });

    "46";
    async function gen_csv() {
        var RS_ls, file, i, axis_num;
        "47";
        file = open("nacl_v1.csv", "w+");
        "48";
        file.write("#type,x,y,z,radius\n");
        "50";
        var RS_Iter1 = range(len(ra_item));
        RS_Iter1 = ((typeof RS_Iter1[Symbol.iterator] === "function") ? (RS_Iter1 instanceof Map ? RS_Iter1.keys() : RS_Iter1) : Object.keys(RS_Iter1));
        for (var RS_Index1 of RS_Iter1) {
            i = RS_Index1;
            "52";
            file.write(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"]("\n"));
        }
        "54";
        var RS_Iter2 = range(len(rb_item));
        RS_Iter2 = ((typeof RS_Iter2[Symbol.iterator] === "function") ? (RS_Iter2 instanceof Map ? RS_Iter2.keys() : RS_Iter2) : Object.keys(RS_Iter2));
        for (var RS_Index2 of RS_Iter2) {
            i = RS_Index2;
            "56";
            file.write(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"]("\n"));
        }
        "59";
        file.write("#type,x,y,z,axis\n");
        "60";
        var RS_Iter3 = range(len(cylinder_item));
        RS_Iter3 = ((typeof RS_Iter3[Symbol.iterator] === "function") ? (RS_Iter3 instanceof Map ? RS_Iter3.keys() : RS_Iter3) : Object.keys(RS_Iter3));
        for (var RS_Index3 of RS_Iter3) {
            i = RS_Index3;
            "61";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "63";
            file.write(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"]("\n"));
        }
        "64";
        file.close();
    };

    "67";
    async function print_csv() {
        var RS_ls, string_list, i, axis_num;
        "68";
        "69";
        "71";
        if (RS_not_equals(len(it8.text), 0)) {
            "72";
            it8 = (await del_csv());
        }
        "83";
        string_list = RS_list_decorate([]);
        "84";
        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
        "85";
        string_list.append("#type,x,y,z,radius\n");
        "88";
        var RS_Iter4 = range(len(ra_item));
        RS_Iter4 = ((typeof RS_Iter4[Symbol.iterator] === "function") ? (RS_Iter4 instanceof Map ? RS_Iter4.keys() : RS_Iter4) : Object.keys(RS_Iter4));
        for (var RS_Index4 of RS_Iter4) {
            i = RS_Index4;
            "89";
            string_list.append(str(0)["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[(typeof i === "number" && i["<"](0)) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "91";
        var RS_Iter5 = range(len(rb_item));
        RS_Iter5 = ((typeof RS_Iter5[Symbol.iterator] === "function") ? (RS_Iter5 instanceof Map ? RS_Iter5.keys() : RS_Iter5) : Object.keys(RS_Iter5));
        for (var RS_Index5 of RS_Iter5) {
            i = RS_Index5;
            "92";
            string_list.append(str(0)["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[(typeof i === "number" && i["<"](0)) ? rb_item.length["+"](i) : i].radius))["+"](",nan\n"));
        }
        "95";
        string_list.append("#type,x,y,z,axis,length\n");
        "96";
        var RS_Iter6 = range(len(cylinder_item));
        RS_Iter6 = ((typeof RS_Iter6[Symbol.iterator] === "function") ? (RS_Iter6 instanceof Map ? RS_Iter6.keys() : RS_Iter6) : Object.keys(RS_Iter6));
        for (var RS_Index6 of RS_Iter6) {
            i = RS_Index6;
            "97";
            axis_num = (await axis_number(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i]));
            "98";
            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[(typeof i === "number" && i["<"](0)) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
        }
        "100";
        string_list.append("<\/p>");
        "101";
        string = "".join(string_list);
        "102";
        it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: string})]);
    };

    "104";
    async function del_csv() {
        "105";
        "107";
        it8.text = "";
        "108";
        return it8;
    };

    "111";
    async function build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item) {
        var RS_ls, b, k, j, i;
        "113";
        for (var RS_Index7 = L["-u"]()["+"](1); RS_Index7["<"](L["+"](1)); RS_Index7++) {
            i = RS_Index7;
            "114";
            for (var RS_Index8 = L["-u"]()["+"](1); RS_Index8["<"](L["+"](1)); RS_Index8++) {
                j = RS_Index8;
                "115";
                for (var RS_Index9 = L["-u"]()["+"](1); RS_Index9["<"](L["+"](1)); RS_Index9++) {
                    k = RS_Index9;
                    "116";
                    if (RS_equals(i["+"](j)["+"](k)["%"](2), 0)) {
                        "117";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: ra, color: color.gray(.9)})]);
                        "118";
                        ra_item.append(b);
                        "119";
                    } else {
                        "120";
                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), radius: rb, color: color.green})]);
                        "121";
                        rb_item.append(b);
                        "122";
                    }
                    if (i["+"](1)["<="](L)) {
                        "123";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(1, 0, 0), radius: .01, color: color.white})]);
                        "124";
                        cylinder_item.append(b);
                        "125";
                    }
                    if (j["+"](1)["<="](L)) {
                        "126";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 1, 0), radius: .01, color: color.white})]);
                        "127";
                        cylinder_item.append(b);
                        "128";
                    }
                    if (k["+"](1)["<="](L)) {
                        "129";
                        b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({pos: vector(i["-"](.5), j["-"](.5), k["-"](.5)), axis: vector(0, 0, 1), radius: .01, color: color.white})]);
                        "130";
                        cylinder_item.append(b);
                    }
                }
            }
        }
        "131";
        total_item = ra_item["+"](rb_item)["+"](cylinder_item);
        "133";
        return [ra_item, rb_item, cylinder_item, total_item];
    };
    if (!build.__argnames__) Object.defineProperties(build, {
        __argnames__ : {value: ["L", "ra", "rb", "ra_item", "rb_item", "cylinder_item", "total_item"]}
    });

    "135";
    async function build_button(s) {
        "136";
        "137";
        "138";
        "139";
        "140";
        "141";
        running = !running;
        "142";
        if (running) {
            s.text = "Pause";
        } else {
            s.text = "Run";
        }
    };
    if (!build_button.__argnames__) Object.defineProperties(build_button, {
        __argnames__ : {value: ["s"]}
    });

    "147";
    async function clear() {
        var RS_ls, i;
        "148";
        var RS_Iter10 = ra_item;
        RS_Iter10 = ((typeof RS_Iter10[Symbol.iterator] === "function") ? (RS_Iter10 instanceof Map ? RS_Iter10.keys() : RS_Iter10) : Object.keys(RS_Iter10));
        for (var RS_Index10 of RS_Iter10) {
            i = RS_Index10;
            "149";
            i.visible = false;
            "150";
            i = undefined;
        }
        "151";
        var RS_Iter11 = rb_item;
        RS_Iter11 = ((typeof RS_Iter11[Symbol.iterator] === "function") ? (RS_Iter11 instanceof Map ? RS_Iter11.keys() : RS_Iter11) : Object.keys(RS_Iter11));
        for (var RS_Index11 of RS_Iter11) {
            i = RS_Index11;
            "152";
            i.visible = false;
            "153";
            i = undefined;
        }
        "154";
        var RS_Iter12 = cylinder_item;
        RS_Iter12 = ((typeof RS_Iter12[Symbol.iterator] === "function") ? (RS_Iter12 instanceof Map ? RS_Iter12.keys() : RS_Iter12) : Object.keys(RS_Iter12));
        for (var RS_Index12 of RS_Iter12) {
            i = RS_Index12;
            "155";
            i.visible = false;
            "156";
            i = undefined;
        }
    };

    "159";
    async function reset() {
        var RS_ls, i, RS_unpack;
        "160";
        "161";
        "162";
        "163";
        "164";
        var RS_Iter13 = ra_item;
        RS_Iter13 = ((typeof RS_Iter13[Symbol.iterator] === "function") ? (RS_Iter13 instanceof Map ? RS_Iter13.keys() : RS_Iter13) : Object.keys(RS_Iter13));
        for (var RS_Index13 of RS_Iter13) {
            i = RS_Index13;
            "165";
            i.visible = false;
            "166";
            i = undefined;
        }
        "167";
        var RS_Iter14 = rb_item;
        RS_Iter14 = ((typeof RS_Iter14[Symbol.iterator] === "function") ? (RS_Iter14 instanceof Map ? RS_Iter14.keys() : RS_Iter14) : Object.keys(RS_Iter14));
        for (var RS_Index14 of RS_Iter14) {
            i = RS_Index14;
            "168";
            i.visible = false;
            "169";
            i = undefined;
        }
        "170";
        var RS_Iter15 = cylinder_item;
        RS_Iter15 = ((typeof RS_Iter15[Symbol.iterator] === "function") ? (RS_Iter15 instanceof Map ? RS_Iter15.keys() : RS_Iter15) : Object.keys(RS_Iter15));
        for (var RS_Index15 of RS_Iter15) {
            i = RS_Index15;
            "171";
            i.visible = false;
            "172";
            i = undefined;
        }
        "173";
        RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
        ra_item = RS_unpack[0];
        rb_item = RS_unpack[1];
        cylinder_item = RS_unpack[2];
        total_item = RS_unpack[3];
    };

    "176";
    async function set_bondab(s) {
        var RS_ls, bond_ab, ra, rb, x, y;
        "177";
        bond_ab = s.number;
        "178";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "179";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "180";
        var RS_Iter16 = ra_item;
        RS_Iter16 = ((typeof RS_Iter16[Symbol.iterator] === "function") ? (RS_Iter16 instanceof Map ? RS_Iter16.keys() : RS_Iter16) : Object.keys(RS_Iter16));
        for (var RS_Index16 of RS_Iter16) {
            x = RS_Index16;
            "181";
            x.radius = ra;
        }
        "182";
        var RS_Iter17 = rb_item;
        RS_Iter17 = ((typeof RS_Iter17[Symbol.iterator] === "function") ? (RS_Iter17 instanceof Map ? RS_Iter17.keys() : RS_Iter17) : Object.keys(RS_Iter17));
        for (var RS_Index17 of RS_Iter17) {
            y = RS_Index17;
            "183";
            y.radius = rb;
        }
        "184";
        return bond_ab;
    };
    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
        __argnames__ : {value: ["s"]}
    });

    "187";
    async function set_ra(s) {
        var RS_ls, ra_int, ra, x;
        "188";
        ra_int = s.number;
        "189";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "190";
        var RS_Iter18 = ra_item;
        RS_Iter18 = ((typeof RS_Iter18[Symbol.iterator] === "function") ? (RS_Iter18 instanceof Map ? RS_Iter18.keys() : RS_Iter18) : Object.keys(RS_Iter18));
        for (var RS_Index18 of RS_Iter18) {
            x = RS_Index18;
            "191";
            x.radius = ra;
        }
        "192";
        return ra;
    };
    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
        __argnames__ : {value: ["s"]}
    });

    "194";
    async function set_rb(s) {
        var RS_ls, rb_int, rb, y;
        "195";
        rb_int = s.number;
        "196";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "197";
        var RS_Iter19 = rb_item;
        RS_Iter19 = ((typeof RS_Iter19[Symbol.iterator] === "function") ? (RS_Iter19 instanceof Map ? RS_Iter19.keys() : RS_Iter19) : Object.keys(RS_Iter19));
        for (var RS_Index19 of RS_Iter19) {
            y = RS_Index19;
            "198";
            y.radius = rb;
        }
        "199";
        return rb;
    };
    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
        __argnames__ : {value: ["s"]}
    });

    "201";
    async function set_scale_factor(s) {
        var RS_ls, scale_factor, ra, rb, x, y;
        "202";
        scale_factor = s.number;
        "203";
        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "204";
        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
        "205";
        var RS_Iter20 = ra_item;
        RS_Iter20 = ((typeof RS_Iter20[Symbol.iterator] === "function") ? (RS_Iter20 instanceof Map ? RS_Iter20.keys() : RS_Iter20) : Object.keys(RS_Iter20));
        for (var RS_Index20 of RS_Iter20) {
            x = RS_Index20;
            "206";
            x.radius = ra;
        }
        "207";
        var RS_Iter21 = rb_item;
        RS_Iter21 = ((typeof RS_Iter21[Symbol.iterator] === "function") ? (RS_Iter21 instanceof Map ? RS_Iter21.keys() : RS_Iter21) : Object.keys(RS_Iter21));
        for (var RS_Index21 of RS_Iter21) {
            y = RS_Index21;
            "208";
            y.radius = rb;
        }
        "209";
        return [scale_factor, ra, rb];
    };
    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
        __argnames__ : {value: ["s"]}
    });

    "212";
    async function set_L(s) {
        var RS_ls, L, RS_unpack;
        "213";
        "214";
        "215";
        "216";
        "217";
        L = s.number;
        "218";
        ;(await clear());
        "219";
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

    "224";
    RS_unpack = (await build(L, ra, rb, ra_item, rb_item, cylinder_item, total_item));
RS_unpack = RS_unpack_asarray(4, RS_unpack);
    ra_item = RS_unpack[0];
    rb_item = RS_unpack[1];
    cylinder_item = RS_unpack[2];
    total_item = RS_unpack[3];
    "230";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h2>fcc Lattice Example: Silver Chloride (AgCl)</h2><hr>", pos: scene5.title_anchor})]);
    "235";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "Silver Chloride with the chemical symbol \\(AgCl \\) is an ionic compound similar to Sodium Chloride.\nIt consists of two types of ions: sodium ions and chloride ions which alternate with each other in each of \nthe three dimensions. The repeating pattern is in a shape of of cude, and there are lattice points on the \nfaces of the cube. Such a sytems is called the face-centered cubic (fcc) system. \n\n", pos: scene5.title_anchor})]);
    "238";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<b> This version of animation doesn't present the smallest repeating pattern, i.e. unit cell.\n</b>", pos: scene5.title_anchor})]);
    "245";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor})]);
    "253";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h3>Structure Parameters</h3><ul><li><b>L</b>: Number of cells (Integer Only)</li><li><b>bond</b>: bond length </li><li><b><font color = \"grey\">r_a<font color =\"black\"></b>: Ionic radius of Silver [<font color = \"Grey\">Grey<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li><li><b><font color = \"green\">r_b<font color =\"black\"></b>: Ionic radius of Chloride [<font color = \"Green\">Green<font color =\"black\">] (\\(   \\unicode{x212B}   \\))</li></ul>", pos: scene5.title_anchor})]);
    "255";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<hr>", pos: scene5.title_anchor})]);
    "257";
    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "<h5>Parameters:</h5>Adjust the lattice constants below to construct another FCC material.\nPress <b>Enter key</b> after <b>every</b> changes to take effect.\n"})]);
    "261";
    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Run", pos: scene5.title_anchor, bind: build_button})]);
    "262";
    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({text: "Reset", pos: scene5.title_anchor, bind: reset})]);
    "265";
    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "L: "})]);
    ;(await sleep(.2));
    "266";
    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1})]);
    "268";
    scene5.append_to_caption("\n");
    "270";
    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "bond: "})]);
    ;(await sleep(.2));
    "271";
    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: 2.386})]);
    "273";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "274";
    scene5.append_to_caption("\n");
    "276";
    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "ra: "})]);
    ;(await sleep(.2));
    "277";
    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: 1.41})]);
    "278";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "280";
    scene5.append_to_caption("\n");
    "282";
    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "rb: "})]);
    ;(await sleep(.2));
    "283";
    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: .79})]);
    "284";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "(\\(   \\unicode{x212B}   \\))"})]);
    "286";
    scene5.append_to_caption("\n");
    "289";
    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "scale: "})]);
    ;(await sleep(.2));
    "290";
    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text})]);
    "291";
    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )"})]);
    "292";
    scene5.append_to_caption("\n\n");
    "308";
    ib5 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: print_csv, text: "Generate CSV for STL conversion"})]);
    "309";
    ib6 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({bind: del_csv, text: "Remove CSV Box"})]);
    "310";
    scene5.append_to_caption("\n\n\n");
    "311";
    it8 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({text: ""})]);
    "313";
    MathJax.Hub.Queue(RS_list_decorate([ "Typeset", MathJax.Hub ]));
    "316";
    while (true) {
        "317";
        ;(await rate(100));
        "318";
        if (running) {
            "319";
            var RS_Iter22 = total_item;
            RS_Iter22 = ((typeof RS_Iter22[Symbol.iterator] === "function") ? (RS_Iter22 instanceof Map ? RS_Iter22.keys() : RS_Iter22) : Object.keys(RS_Iter22));
            for (var RS_Index22 of RS_Iter22) {
                b = RS_Index22;
                "320";
                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({angle: .01, axis: vector(0, 1, 0), origin: vector(0, 0, 0)})]);
            }
        }
    }
};

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
// END JAVASCRIPT
