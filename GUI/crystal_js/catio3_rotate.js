// START JAVASCRIPT
;(function() {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var regeneratorRuntime = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/regenerator") : Streamline.srequire("streamline-runtime/lib/callbacks/regenerator");

var _streamline = typeof srequire === 'function' ? srequire("streamline-runtime/lib/callbacks/runtime") : Streamline.srequire("streamline-runtime/lib/callbacks/runtime");

var _filename = "unknown";

var main = _streamline.async(regeneratorRuntime.mark(function _$$main$$(_2) {
    var axis_number, print_csv, del_csv, build, build_button, clear, reset, set_bondab, set_ra, set_rb, set_ro, set_scale_factor, set_L, version, box, sphere, simple_sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, compound, display, vector, print, type, scene, RS_ls, scene5, L, bond_ab, ra_int, rb_int, ro_int, bond_default_text, ra_default_text, rb_default_text, ro_default_text, scale_factor, scale_default_text, ra, rb, ro, ra_item, rb_item, ro_item, cylinder_item, total_item, running, opatom, opbar, RS_unpack, b1, b2, it0, it1, ib1, it2, ib2, it3, ib3, it4, ib4, it5, ib5, it6, ib6, ib7, ib8, it9, b, __name__, strings, RS_Iter25, RS_Index25;

    return regeneratorRuntime.wrap(function _$$main$$$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    axis_number = function axis_number(cylinder) {
                        var RS_ls, axis_num;
                        "48";
                        if (cylinder.axis.x !== 0 && (_typeof(cylinder.axis.x) !== "object" || RS_not_equals(cylinder.axis.x, 0))) {
                                "50";
                                axis_num = 0;
                                "51";
                            } else if (cylinder.axis.y !== 0 && (_typeof(cylinder.axis.y) !== "object" || RS_not_equals(cylinder.axis.y, 0))) {
                                "53";
                                axis_num = 1;
                                "54";
                            } else if (cylinder.axis.z !== 0 && (_typeof(cylinder.axis.z) !== "object" || RS_not_equals(cylinder.axis.z, 0))) {
                                "56";
                                axis_num = 2;
                            }
                        "57";
                        return axis_num;
                    };

                    print_csv = function print_csv() {
                        var RS_ls, string_list, i, axis_num;
                        "60";
                        "61";
                        "63";
                        if (RS_not_equals(len(it9.text), 0)) {
                                "64";
                                it9 = del_csv();
                            }
                        "75";
                        string_list = RS_list_decorate([]);
                        "76";
                        string_list.append("<p style=\"border:3px; border-style:solid; border-color:#000000; padding: 1em; background-color:grey; font-family:Courier New\">");
                        "77";
                        string_list.append("#type,x,y,z,radius\n");
                        "80";
                        var RS_Iter1 = RS_Iterable(range(len(ra_item)));
                        for (var RS_Index1 = 0; RS_Index1["<"](RS_Iter1.length); RS_Index1++) {
                            i = RS_Iter1[RS_Index1];
                            "81";
                            string_list.append(str(0)["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ra_item[typeof i === "number" && i["<"](0) ? ra_item.length["+"](i) : i].radius))["+"](",nan\n"));
                        }
                        "83";
                        var RS_Iter2 = RS_Iterable(range(len(rb_item)));
                        for (var RS_Index2 = 0; RS_Index2["<"](RS_Iter2.length); RS_Index2++) {
                            i = RS_Iter2[RS_Index2];
                            "84";
                            string_list.append(str(0)["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(rb_item[typeof i === "number" && i["<"](0) ? rb_item.length["+"](i) : i].radius))["+"](",nan\n"));
                        }
                        "86";
                        var RS_Iter3 = RS_Iterable(range(len(ro_item)));
                        for (var RS_Index3 = 0; RS_Index3["<"](RS_Iter3.length); RS_Index3++) {
                            i = RS_Iter3[RS_Index3];
                            "87";
                            string_list.append(str(0)["+"](",")["+"](str(ro_item[typeof i === "number" && i["<"](0) ? ro_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(ro_item[typeof i === "number" && i["<"](0) ? ro_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(ro_item[typeof i === "number" && i["<"](0) ? ro_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(ro_item[typeof i === "number" && i["<"](0) ? ro_item.length["+"](i) : i].radius))["+"](",nan\n"));
                        }
                        "90";
                        string_list.append("#type,x,y,z,axis,length\n");
                        "91";
                        var RS_Iter4 = RS_Iterable(range(len(cylinder_item)));
                        for (var RS_Index4 = 0; RS_Index4["<"](RS_Iter4.length); RS_Index4++) {
                            i = RS_Iter4[RS_Index4];
                            "92";
                            axis_num = axis_number(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i]);
                            "93";
                            string_list.append(str(1)["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.x))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.y))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].pos.z))["+"](",")["+"](str(axis_num))["+"](",")["+"](str(cylinder_item[typeof i === "number" && i["<"](0) ? cylinder_item.length["+"](i) : i].length))["+"]("\n"));
                        }
                        "95";
                        string_list.append("<\/p>");
                        "96";
                        string = "".join(string_list);
                        "97";
                        it9 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: string })]);
                    };

                    del_csv = function del_csv() {
                        var RS_ls;
                        "100";
                        "102";
                        it9.text = "";
                        "103";
                        return it9;
                    };

                    build = function build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item) {
                        var RS_ls, L1, LB, LN1, v0, b, na, v, x, m, k, j, i;
                        "107";
                        L1 = L;
                        "108";
                        LB = L["-"](1);
                        "109";
                        LN1 = L["-"](1);
                        "111";
                        for (var RS_Index5 = L["-u"](); RS_Index5["<"](L1); RS_Index5++) {
                            i = RS_Index5;
                            "112";
                            for (var RS_Index6 = L["-u"](); RS_Index6["<"](L1); RS_Index6++) {
                                j = RS_Index6;
                                "113";
                                for (var RS_Index7 = L["-u"](); RS_Index7["<"](L1); RS_Index7++) {
                                    k = RS_Index7;
                                    "115";
                                    for (var RS_Index8 = 1["-u"](); RS_Index8["<"](0); RS_Index8++) {
                                        na = RS_Index8;
                                        "116";
                                        v0 = vector(i["+"](1["/"](2)["*"](na)), j["+"](1["/"](2)["*"](na)), k["+"](1["/"](2)["*"](na)));
                                        "117";
                                        b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: v0, radius: ra, color: color.green, opacity: opatom })]);
                                        "118";
                                        ra_item.append(b);
                                        "119";
                                        if (i["<"](LN1)) {
                                                "120";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(1, 0, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "121";
                                                cylinder_item.append(b);
                                            }
                                        "122";
                                        if (j["<"](LN1)) {
                                                "123";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 1, 0), radius: .01, color: color.white, opacity: opbar })]);
                                                "124";
                                                cylinder_item.append(b);
                                            }
                                        "125";
                                        if (k["<"](LN1)) {
                                                "126";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v0, axis: vector(0, 0, 1), radius: .01, color: color.white, opacity: opbar })]);
                                                "127";
                                                cylinder_item.append(b);
                                            }
                                    }
                                    "129";
                                    if (i["<"](LB) && j["<"](LB) && k["<"](LB)) {
                                            "130";
                                            b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: vector(i, j, k), radius: rb, color: vector(0, .7, 1), opacity: opatom })]);
                                            "131";
                                            rb_item.append(b);
                                            "133";
                                            v = RS_list_decorate([vector(i["-"](1["/"](2)), j, k), vector(i["+"](1["/"](2)), j, k), vector(i, j["-"](1["/"](2)), k), vector(i, j["+"](1["/"](2)), k), vector(i, j, k["-"](1["/"](2))), vector(i, j, k["+"](1["/"](2)))]);
                                            "135";
                                            var RS_Iter9 = RS_Iterable(v);
                                            for (var RS_Index9 = 0; RS_Index9["<"](RS_Iter9.length); RS_Index9++) {
                                                x = RS_Iter9[RS_Index9];
                                                "136";
                                                b = RS_interpolate_kwargs.call(this, sphere, [RS_desugar_kwargs({ pos: x, radius: ro, color: color.red, opacity: opatom })]);
                                                "137";
                                                ro_item.append(b);
                                            }
                                            "138";
                                            for (var RS_Index10 = 2; RS_Index10["<"](6); RS_Index10++) {
                                                m = RS_Index10;
                                                "139";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[0], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[0]), radius: .01, color: color.white, opacity: opbar })]);
                                                "140";
                                                cylinder_item.append(b);
                                                "141";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[1], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[1]), radius: .01, color: color.white, opacity: opbar })]);
                                                "142";
                                                cylinder_item.append(b);
                                            }
                                            "143";
                                            for (var RS_Index11 = 4; RS_Index11["<"](6); RS_Index11++) {
                                                m = RS_Index11;
                                                "144";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[2], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[2]), radius: .01, color: color.white, opacity: opbar })]);
                                                "145";
                                                cylinder_item.append(b);
                                                "146";
                                                b = RS_interpolate_kwargs.call(this, cylinder, [RS_desugar_kwargs({ pos: v[3], axis: v[typeof m === "number" && m["<"](0) ? v.length["+"](m) : m]["-"](v[3]), radius: .01, color: color.white, opacity: opbar })]);
                                                "147";
                                                cylinder_item.append(b);
                                            }
                                        }
                                }
                            }
                        }
                        "149";
                        total_item = ra_item["+"](rb_item)["+"](ro_item)["+"](cylinder_item);
                        "151";
                        return [ra_item, rb_item, ro_item, cylinder_item, total_item];
                    };

                    build_button = function build_button(s) {
                        var RS_ls;
                        "154";
                        "155";
                        "156";
                        "157";
                        "158";
                        "159";
                        "160";
                        running = !running;
                        "161";
                        if (running) {
                                s.text = "Pause";
                            } else {
                                s.text = "Run";
                            }
                    };

                    clear = function clear() {
                        var RS_ls, i;
                        "167";
                        var RS_Iter12 = RS_Iterable(ra_item);
                        for (var RS_Index12 = 0; RS_Index12["<"](RS_Iter12.length); RS_Index12++) {
                            i = RS_Iter12[RS_Index12];
                            "168";
                            i.visible = false;
                            "169";
                            i = undefined;
                        }
                        "170";
                        var RS_Iter13 = RS_Iterable(rb_item);
                        for (var RS_Index13 = 0; RS_Index13["<"](RS_Iter13.length); RS_Index13++) {
                            i = RS_Iter13[RS_Index13];
                            "171";
                            i.visible = false;
                            "172";
                            i = undefined;
                        }
                        "173";
                        var RS_Iter14 = RS_Iterable(ro_item);
                        for (var RS_Index14 = 0; RS_Index14["<"](RS_Iter14.length); RS_Index14++) {
                            i = RS_Iter14[RS_Index14];
                            "174";
                            i.visible = false;
                            "175";
                            i = undefined;
                        }
                        "176";
                        var RS_Iter15 = RS_Iterable(cylinder_item);
                        for (var RS_Index15 = 0; RS_Index15["<"](RS_Iter15.length); RS_Index15++) {
                            i = RS_Iter15[RS_Index15];
                            "177";
                            i.visible = false;
                            "178";
                            i = undefined;
                        }
                    };

                    reset = function reset() {
                        var RS_ls, RS_unpack;
                        "182";
                        "183";
                        "184";
                        "185";
                        "186";
                        "187";
                        clear();
                        "188";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(5, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        ro_item = RS_unpack[2];
                        cylinder_item = RS_unpack[3];
                        total_item = RS_unpack[4];
                    };

                    set_bondab = function set_bondab(s) {
                        var RS_ls, bond_ab, ra, rb, ro, x, y, z;
                        "192";
                        bond_ab = s.number;
                        "193";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "194";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "195";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "196";
                        var RS_Iter16 = RS_Iterable(ra_item);
                        for (var RS_Index16 = 0; RS_Index16["<"](RS_Iter16.length); RS_Index16++) {
                            x = RS_Iter16[RS_Index16];
                            "197";
                            x.radius = ra;
                        }
                        "198";
                        var RS_Iter17 = RS_Iterable(rb_item);
                        for (var RS_Index17 = 0; RS_Index17["<"](RS_Iter17.length); RS_Index17++) {
                            y = RS_Iter17[RS_Index17];
                            "199";
                            y.radius = rb;
                        }
                        "200";
                        var RS_Iter18 = RS_Iterable(ro_item);
                        for (var RS_Index18 = 0; RS_Index18["<"](RS_Iter18.length); RS_Index18++) {
                            z = RS_Iter18[RS_Index18];
                            "201";
                            z.radius = ro;
                        }
                        "202";
                        return bond_ab;
                    };

                    set_ra = function set_ra(s) {
                        var RS_ls, ra_int, ra, x;
                        "206";
                        ra_int = s.number;
                        "207";
                        ra = ra_int["/"](bond_ab)["*"](scale_factor);
                        "208";
                        var RS_Iter19 = RS_Iterable(ra_item);
                        for (var RS_Index19 = 0; RS_Index19["<"](RS_Iter19.length); RS_Index19++) {
                            x = RS_Iter19[RS_Index19];
                            "209";
                            x.radius = ra;
                        }
                        "210";
                        return ra;
                    };

                    set_rb = function set_rb(s) {
                        var RS_ls, rb_int, rb, y;
                        "213";
                        rb_int = s.number;
                        "214";
                        rb = rb_int["/"](bond_ab)["*"](scale_factor);
                        "215";
                        var RS_Iter20 = RS_Iterable(rb_item);
                        for (var RS_Index20 = 0; RS_Index20["<"](RS_Iter20.length); RS_Index20++) {
                            y = RS_Iter20[RS_Index20];
                            "216";
                            y.radius = rb;
                        }
                        "217";
                        return rb;
                    };

                    set_ro = function set_ro(s) {
                        var RS_ls, ro_int, ro, y;
                        "221";
                        ro_int = s.number;
                        "222";
                        ro = ro_int["/"](bond_ab)["*"](scale_factor);
                        "223";
                        var RS_Iter21 = RS_Iterable(ro_item);
                        for (var RS_Index21 = 0; RS_Index21["<"](RS_Iter21.length); RS_Index21++) {
                            y = RS_Iter21[RS_Index21];
                            "224";
                            y.radius = ro;
                        }
                        "225";
                        return ro;
                    };

                    set_scale_factor = function set_scale_factor(s) {
                        var RS_ls, scale_factor, ra, rb, ro, x, y, z;
                        "228";
                        scale_factor = s.number;
                        "229";
                        ra = ra_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "230";
                        rb = rb_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "231";
                        ro = ro_int["/"](bond_ab)["*"](1)["*"](scale_factor);
                        "232";
                        var RS_Iter22 = RS_Iterable(ra_item);
                        for (var RS_Index22 = 0; RS_Index22["<"](RS_Iter22.length); RS_Index22++) {
                            x = RS_Iter22[RS_Index22];
                            "233";
                            x.radius = ra;
                        }
                        "234";
                        var RS_Iter23 = RS_Iterable(rb_item);
                        for (var RS_Index23 = 0; RS_Index23["<"](RS_Iter23.length); RS_Index23++) {
                            y = RS_Iter23[RS_Index23];
                            "235";
                            y.radius = rb;
                        }
                        "236";
                        var RS_Iter24 = RS_Iterable(ro_item);
                        for (var RS_Index24 = 0; RS_Index24["<"](RS_Iter24.length); RS_Index24++) {
                            z = RS_Iter24[RS_Index24];
                            "237";
                            z.radius = ro;
                        }
                        "238";
                        return [scale_factor, ra, rb, ro];
                    };

                    set_L = function set_L(s) {
                        var RS_ls, L, RS_unpack;
                        "242";
                        "243";
                        "244";
                        "245";
                        "246";
                        "247";
                        L = s.number;
                        "248";
                        clear();
                        "249";
                        RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                        RS_unpack = RS_unpack_asarray(5, RS_unpack);
                        ra_item = RS_unpack[0];
                        rb_item = RS_unpack[1];
                        ro_item = RS_unpack[2];
                        cylinder_item = RS_unpack[3];
                        total_item = RS_unpack[4];
                    };

                    version = RS_list_decorate(["2.8", "glowscript"]);
                    Array.prototype['+'] = function (r) {
                        return this.concat(r);
                    };
                    Array.prototype['*'] = function (r) {
                        return __array_times_number(this, r);
                    };
                    __name__ = '__main__';

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
                    type = pytype;
                    scene = canvas();
                    strings = RS_modules.pythonize.strings;


                    strings();
                    "6";
                    scene5 = RS_interpolate_kwargs.call(this, canvas, [RS_desugar_kwargs({ background: color.black, width: 600, length: 600, center: vector(1["-u"](), 1["-u"](), 1["-u"]()) })]);
                    "16";
                    L = 1;
                    "17";
                    bond_ab = 3.79;
                    "18";
                    ra_int = 1.14;
                    "19";
                    rb_int = .75;
                    "20";
                    ro_int = 1.21;
                    "22";
                    bond_default_text = str(bond_ab);
                    "23";
                    ra_default_text = str(ra_int);
                    "24";
                    rb_default_text = str(rb_int);
                    "25";
                    ro_default_text = str(ro_int);
                    "28";
                    scale_factor = .5;
                    "29";
                    scale_default_text = str(scale_factor);
                    "31";
                    ra = ra_int["/"](bond_ab)["*"](scale_factor);
                    "32";
                    rb = rb_int["/"](bond_ab)["*"](scale_factor);
                    "33";
                    ro = ro_int["/"](bond_ab)["*"](scale_factor);
                    "35";
                    ra_item = RS_list_decorate([]);
                    "36";
                    rb_item = RS_list_decorate([]);
                    "37";
                    ro_item = RS_list_decorate([]);
                    "38";
                    cylinder_item = RS_list_decorate([]);
                    "39";
                    total_item = RS_list_decorate([]);
                    "41";
                    running = false;
                    "43";
                    opatom = 1;
                    "44";
                    opbar = 1;
                    "47";
                    ;
                    if (!axis_number.__argnames__) Object.defineProperties(axis_number, {
                        __argnames__: { value: ["cylinder"] }
                    });

                    "59";
                    ;

                    "99";
                    ;

                    "106";
                    ;
                    if (!build.__argnames__) Object.defineProperties(build, {
                        __argnames__: { value: ["L", "ra", "rb", "ra_item", "rb_item", "ro_item", "cylinder_item", "total_item"] }
                    });

                    "153";
                    ;
                    if (!build_button.__argnames__) Object.defineProperties(build_button, {
                        __argnames__: { value: ["s"] }
                    });

                    "166";
                    ;

                    "181";
                    ;

                    "191";
                    ;
                    if (!set_bondab.__argnames__) Object.defineProperties(set_bondab, {
                        __argnames__: { value: ["s"] }
                    });

                    "205";
                    ;
                    if (!set_ra.__argnames__) Object.defineProperties(set_ra, {
                        __argnames__: { value: ["s"] }
                    });

                    "212";
                    ;
                    if (!set_rb.__argnames__) Object.defineProperties(set_rb, {
                        __argnames__: { value: ["s"] }
                    });

                    "220";
                    ;
                    if (!set_ro.__argnames__) Object.defineProperties(set_ro, {
                        __argnames__: { value: ["s"] }
                    });

                    "227";
                    ;
                    if (!set_scale_factor.__argnames__) Object.defineProperties(set_scale_factor, {
                        __argnames__: { value: ["s"] }
                    });

                    "241";
                    ;
                    if (!set_L.__argnames__) Object.defineProperties(set_L, {
                        __argnames__: { value: ["s"] }
                    });

                    "254";
                    RS_unpack = build(L, ra, rb, ra_item, rb_item, ro_item, cylinder_item, total_item);
                    RS_unpack = RS_unpack_asarray(5, RS_unpack);
                    ra_item = RS_unpack[0];
                    rb_item = RS_unpack[1];
                    ro_item = RS_unpack[2];
                    cylinder_item = RS_unpack[3];
                    total_item = RS_unpack[4];
                    "259";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h2>Perovskite Example: Calcium Titanate (<b> CaTiO<sub>3</sub> </b>)</h2><hr>", pos: scene5.title_anchor })]);
                    "290";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\nA <b>Perovskite</b> is a colourless mineral of Calcium Titanate with the chemical formula <b> CaTiO<sub>3</sub> </b>. \nIt is discovered by German mineralogist Gustave Rose who named it after a Russian mineralogist\nLev Alexeievitch Perovskite. Later, perovskites are referred to a family of materials with the \nsame crystal structure as <b> CaTiO<sub>3</sub> </b>. So the general chemical formula for this category \nof perovskite compounds is <b> ABX<sub>3</sub> </b>, where A is a metal cation (positively charged ion), \nB is a cation and X is an anion (negatively charged ion).  If X is oxygen, the sub-category can also be \nrepresented as <b> ABO<sub>3</sub> </b>.\n\n<b> CaTiO<sub>3</sub> </b> consists of three types of ions: positive Calcium ions (symbol: Ca+), Titanium \nions (symbol: Ti+) and negative Oxygen ions (symbol: O-) which alternate with each other in each of the \nthree dimensions. In a unit cell, Ca+ occupies the corners,  Ti+ occupies the center of the lattice and \nO- are at the center of faces. \n\nSimilarly, <b> SrTiO<sub>3</sub> </b> (Strontium Titanate) consists of three types of ions: positive \nStrontium ions (symbol: Sr+), Titanium ions (symbol: Ti+) and negative Oxygen ions (symbol: O-) in the \nsame way. It is one of the few materials with ideal perovskite structure (no slight distortion). \n\nPerovskites are of great importance in material science and can be widely applied to photovoltaics, laser, \nsemiconductors and so on. \n\n<b>Perovskite solar cells</b>: Solar cells with perovskite structures have shown remarkable progress in \nimproving energy conversion efficiency, from reports of about 3% in 2006 to over 24% in 2019 and thus are \nthought to be a frontier energy solution.  Department of Energy is of great interest in research to increase \nthe efficiency and lifetime of hybrid organic-inorganic perovskite solar cells. Targeted materials include \nmethylammonium lead halide, i.e., <b> CH<sub>3</sub>NH<sub>3</sub>PbX<sub>3</sub> </b>, where X = I, Br or Cl.\n\nThere are two GUI files for Ideal Perovskite Structure solids. One for Calcium Titanate (<b> CaTiO<sub>3</sub> </b>), and \none for Strontium Titanate (<b> SrTiO<sub>3</sub> </b>)\n\n", pos: scene5.title_anchor })]);
                    "296";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Control</h3><ul><li><b>Rotate</b>: Right Button drag or Ctrl-drag</li><li><b>Zoom</b>: Drag with middle button or use scroll wheel</li></ul>", pos: scene5.title_anchor })]);
                    "305";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h3>Modifying Structure</h3><ul><li><b>L</b>: Number of Unit Cells(Integar Only)</li><li><b>bond</b>: distance between two closest Ca+ ions </li><li><b><font color =\"Green\">r_a<font color =\"black\"></b>: ionic radius of Ca+ [<font color = \"Green\">Green<font color =\"black\">] </li><li><b><font color =\"Blue\">r_b<font color =\"black\"></b>: ionic radius of Ti+ [<font color =\"Blue\">Blue<font color =\"black\">] </li><li><b><font color =\"Red\">r_o<font color =\"black\"></b>: ionic radius of O- [<font color =\"Red\">Red<font color =\"black\">] </li></ul>", pos: scene5.title_anchor })]);
                    "307";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<hr>", pos: scene5.title_anchor })]);
                    "310";
                    b1 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Run", pos: scene5.title_anchor, bind: build_button })]);
                    "311";
                    b2 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ text: "Reset", pos: scene5.title_anchor, bind: reset })]);
                    "313";
                    it0 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "<h5>Parameters:</h5>Adjust the parameters using the input box(press Enter key after modifying parameters every time)\n" })]);
                    "317";
                    it1 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "L: " })]);
                    "318";
                    ib1 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_L, text: 1 })]);
                    "319";
                    scene5.append_to_caption("\n");
                    "321";
                    it2 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "bond: " })]);
                    "322";
                    ib2 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_bondab, text: bond_default_text })]);
                    "323";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "324";
                    scene5.append_to_caption("\n");
                    "326";
                    it3 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ra: " })]);
                    "327";
                    ib3 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ra, text: ra_default_text })]);
                    "328";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "329";
                    scene5.append_to_caption("\n");
                    "331";
                    it4 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "rb: " })]);
                    "332";
                    ib4 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_rb, text: rb_default_text })]);
                    "333";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "334";
                    scene5.append_to_caption("\n");
                    "336";
                    it5 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "ro: " })]);
                    "337";
                    ib5 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_ro, text: ro_default_text })]);
                    "338";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "\\(   \\unicode{x212B}   \\)" })]);
                    "339";
                    scene5.append_to_caption("\n");
                    "343";
                    it6 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "scale: " })]);
                    "344";
                    ib6 = RS_interpolate_kwargs.call(this, winput, [RS_desugar_kwargs({ type: "numeric", pos: scene5.caption_anchor, bind: set_scale_factor, text: scale_default_text })]);
                    "345";
                    RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "( Must be less than or equal to 1. A value less than 1 is used for an exploded view. )" })]);
                    "347";
                    scene5.append_to_caption("\n\n");
                    "351";
                    ib7 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: print_csv, text: "Generate CSV for STL conversion" })]);
                    "352";
                    ib8 = RS_interpolate_kwargs.call(this, button, [RS_desugar_kwargs({ bind: del_csv, text: "Remove CSV Box" })]);
                    "353";
                    scene5.append_to_caption("\n\n\n");
                    "354";
                    it9 = RS_interpolate_kwargs.call(this, wtext, [RS_desugar_kwargs({ text: "" })]);
                    "356";
                    scene5.append_to_caption("\n\n");
                    "361";
                    MathJax.Hub.Queue(RS_list_decorate(["Typeset", MathJax.Hub]));
                    "364";

                case 200:
                    if (!true) {
                            _context.next = 208;
                            break;
                        }

                    "365";
                    _context.next = 204;
                    return _streamline.await(_filename, 631, null, rate, 1, null, false, [100, true]);

                case 204:
                    "366";
                    if (running) {
                            "367";
                            RS_Iter25 = RS_Iterable(total_item);

                            for (RS_Index25 = 0; RS_Index25["<"](RS_Iter25.length); RS_Index25++) {
                                b = RS_Iter25[RS_Index25];
                                "368";
                                RS_interpolate_kwargs.call(b, b.rotate, [RS_desugar_kwargs({ angle: .01, axis: vector(0, 1, 0), origin: vector(1["-u"](), 1["-u"](), 1["-u"]()) })]);
                            }
                        }
                    _context.next = 200;
                    break;

                case 208:
                case "end":
                    return _context.stop();
            }
        }
    }, _$$main$$, this);
}), 0, 1);

var RS_modules = {};
var string, it9, ra_item, rb_item, ro_item, cylinder_item, total_item, running;
RS_modules.pythonize = {};

(function () {
    var strings = function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
                exclude = function () {
                    var s = RS_set();
                    s.jsset.add("split");
                    s.jsset.add("replace");
                    return s;
                }();
            } else if (arguments[0]) {
                exclude = Array.prototype.slice.call(arguments);
            } else {
                exclude = null;
            }
        if (exclude) {
                string_funcs = string_funcs.difference(set(exclude));
            }
        var RS_Iter0 = RS_Iterable(string_funcs);
        for (var RS_Index0 = 0; RS_Index0["<"](RS_Iter0.length); RS_Index0++) {
            name = RS_Iter0[RS_Index0];
            (RS_expr_temp = String.prototype)[typeof name === "number" && name["<"](0) ? RS_expr_temp.length["+"](name) : name] = (RS_expr_temp = RS_str.prototype)[typeof name === "number" && name["<"](0) ? RS_expr_temp.length["+"](name) : name];
        }
    };

    ;

    RS_modules.pythonize.strings = strings;
})();
;
if (!main.__argnames__) Object.defineProperties(main, {
    __argnames__: { value: ["_"] }
});
;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; main(function(err) {;}) })})()
// END JAVASCRIPT
