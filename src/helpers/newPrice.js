export const newPrice = (nameStock, price) => {
  const name = nameStock?.toLowerCase();
  if (
    name.indexOf("jbl") !== -1 ||
    name.indexOf("marshall") !== -1 ||
    name.indexOf("nothing ear") !== -1 ||
    name.indexOf("nothing ear") !== -1 ||
    name.indexOf("nothing cmf") !== -1 ||
    name.indexOf("galaxy buds") !== -1 ||
    name.indexOf("buds") !== -1 ||
    name.indexOf("galaxy smart tag") !== -1 ||
    name.indexOf("pencil") !== -1 ||
    name.indexOf("homepod") !== -1 ||
    name.indexOf("redmi buds") !== -1 ||
    name.indexOf("a05s ") !== -1 ||
    name.indexOf("a05 ") !== -1 ||
    name.indexOf("a06") !== -1 ||
    name.indexOf("a15 ") !== -1 ||
    name.indexOf("a16 ") !== -1 ||
    name.indexOf("a25 ") !== -1 ||
    name.indexOf("a24 ") !== -1 ||
    name.indexOf("a54 ") !== -1 ||
    name.indexOf("a35 ") !== -1 ||
    name.indexOf("a34 ") !== -1 ||
    name.indexOf("m34 ") !== -1 ||
    name.indexOf("m54 ") !== -1 ||
    name.indexOf("f15 ") !== -1 ||
    name.indexOf("m55 ") !== -1 ||
    name.indexOf("m55s ") !== -1 ||
    name.indexOf("a55 ") !== -1 ||
    name.indexOf("a550 ") !== -1 ||
    name.indexOf("galaxy watch") !== -1 ||
    name.indexOf("poco") !== -1 ||
    name.indexOf("poco") !== -1 ||
    name.indexOf("camon ") !== -1 ||
    name.indexOf("spark ") !== -1 ||
    name.indexOf("magic keyboard") !== -1 ||
    name.indexOf("magic mouse") !== -1 ||
    name.indexOf("djl ") !== -1 ||
    name.indexOf("dji ") !== -1 ||
    name.indexOf("dji ") !== -1 ||
    name.indexOf("dji ") !== -1 ||
    name.indexOf("sony wireless") !== -1 ||
    name.indexOf("wireless wh") !== -1 ||
    name.indexOf("watch 6") !== -1 ||
    name.indexOf("tab a") !== -1 ||
    name.indexOf("redmi") !== -1 ||
    name.indexOf("watch") !== -1 ||
    name.indexOf("rayban") !== -1 ||
    name.indexOf("oppo") !== -1 ||
    name.indexOf("agm") !== -1 ||
    name.indexOf("blackview") !== -1 ||
    name.indexOf("insta ") !== -1 ||
    name.indexOf("huawei") !== -1 ||
    name.indexOf("huawei") !== -1 ||
    name.indexOf("fujifilm") !== -1 ||
    name.indexOf("beats") !== -1 ||
    name.indexOf("infinix") !== -1 ||
    name.indexOf("tecno") !== -1 ||
    name.indexOf("realme") !== -1 ||
    name.indexOf("polaroid") !== -1 ||
    name.indexOf("sonos") !== -1 ||
    name.indexOf("pad se") !== -1 ||
    name.indexOf("яндекс") !== -1 ||
    name.indexOf("станция") !== -1
  ) {
    return Number(price) + 500;
  } else if (
    name.indexOf("pixel") !== -1 ||
    name.indexOf("se (2022) gen") !== -1 ||
    name.indexOf("se (2023) gen") !== -1 ||
    name.indexOf("watch se") !== -1 ||
    name.indexOf("note") !== -1 ||
    name.indexOf("se (2022) 64") !== -1 ||
    name.indexOf("se (2022) 128") !== -1 ||
    name.indexOf("se (2022) 256") !== -1 ||
    name.indexOf("se 2") !== -1 ||
    name.indexOf("se2 4") !== -1 ||
    name.indexOf("se 3") !== -1 ||
    name.indexOf("se 64") !== -1 ||
    name.indexOf("se 128") !== -1 ||
    name.indexOf("se 256") !== -1 ||
    name.indexOf("asus") !== -1 ||
    name.indexOf("zenfone") !== -1 ||
    name.indexOf("zenfone") !== -1 ||
    name.indexOf("airpods max") !== -1 ||
    name.indexOf("air pods max") !== -1 ||
    name.indexOf("airpods max") !== -1 ||
    name.indexOf("asus") !== -1 ||
    name.indexOf("lenovo") !== -1 ||
    name.indexOf("motorola") !== -1 ||
    name.indexOf("oneplus") !== -1 ||
    name.indexOf("redmagic") !== -1 ||
    name.indexOf("nubia") !== -1 ||
    name.indexOf("nothing phone") !== -1 ||
    name.indexOf("honor") !== -1 ||
    name.indexOf("redmi note") !== -1 ||
    name.indexOf("gopro") !== -1 ||
    name.indexOf("hero") !== -1 ||
    name.indexOf("airpods pro") !== -1 ||
    name.indexOf("airpods pro") !== -1 ||
    name.indexOf("air pods pro") !== -1 ||
    name.indexOf("air pods 2") !== -1 ||
    name.indexOf("airpods 2") !== -1 ||
    name.indexOf("airpods 2") !== -1 ||
    name.indexOf("air pods 3") !== -1 ||
    name.indexOf("airpods 3") !== -1 ||
    name.indexOf("airpods 3") !== -1 ||
    name.indexOf("airpods 4") !== -1
  ) {
    return Number(price) + 500;
  } else if (
    name.indexOf("11 64") !== -1 ||
    name.indexOf("11 128") !== -1 ||
    name.indexOf("xr 64") !== -1 ||
    name.indexOf("12 64") !== -1 ||
    name.indexOf("12 128") !== -1 ||
    name.indexOf("12 256") !== -1 ||
    name.indexOf("12 mini") !== -1 ||
    name.indexOf("13 mini") !== -1 ||
    name.indexOf("12 pro max") !== -1 ||
    name.indexOf("aw series 8") !== -1 ||
    name.indexOf("aw 8") !== -1 ||
    name.indexOf("aw 8") !== -1 ||
    name.indexOf("s8 4") !== -1 ||
    name.indexOf("watch s8") !== -1 ||
    name.indexOf("microsoft") !== -1 ||
    name.indexOf("nintendo") !== -1 ||
    name.indexOf("oculus") !== -1 ||
    name.indexOf("playstation") !== -1 ||
    name.indexOf("playstation") !== -1 ||
    name.indexOf("xbox") !== -1 ||
    name.indexOf("ps5") !== -1 ||
    name.indexOf("pico") !== -1 ||
    name.indexOf("steam") !== -1 ||
    name.indexOf("google") !== -1 ||
    name.indexOf("xperia") !== -1
  ) {
    return Number(price) + 500;
  } else if (
    name.indexOf("ipad 9") !== -1 ||
    name.indexOf("rog") !== -1 ||
    name.indexOf("rog") !== -1 ||
    name.indexOf("acer") !== -1 ||
    name.indexOf("msi") !== -1 ||
    name.indexOf("ipad 10") !== -1 ||
    name.indexOf("ipad 9") !== -1 ||
    name.indexOf("ipad 9") !== -1 ||
    name.indexOf("ipad mini") !== -1 ||
    name.indexOf("ipad air") !== -1 ||
    name.indexOf("ipad pro") !== -1 ||
    name.indexOf("ipad pro 12.9") !== -1 ||
    name.indexOf("vision pro") !== -1 ||
    name.indexOf("ipad air 11") !== -1 ||
    name.indexOf("ipad air 11") !== -1 ||
    name.indexOf("watch s10") !== -1 ||
    name.indexOf("aw series 10") !== -1 ||
    name.indexOf("aw 10") !== -1 ||
    name.indexOf("aw 10") !== -1 ||
    name.indexOf("s10 4") !== -1 ||
    name.indexOf("airwrap ") !== -1 ||
    name.indexOf("v1") !== -1 ||
    name.indexOf("vented") !== -1 ||
    name.indexOf("hd0") !== -1 ||
    name.indexOf("hd1") !== -1 ||
    name.indexOf("gen5 detect") !== -1 ||
    name.indexOf("gen 5 detect") !== -1 ||
    name.indexOf("rb0") !== -1 ||
    name.indexOf("ht0") !== -1 ||
    name.indexOf("hs0") !== -1 ||
    name.indexOf("designed") !== -1 ||
    name.indexOf("heapdphone") !== -1 ||
    name.indexOf("aw series 9") !== -1 ||
    name.indexOf("s21") !== -1 ||
    name.indexOf("s22") !== -1 ||
    name.indexOf("s23") !== -1 ||
    name.indexOf("s24") !== -1 ||
    name.indexOf("ph04") !== -1 ||
    name.indexOf("vacuum cleaner micro") !== -1 ||
    name.indexOf("wash g1 ") !== -1 ||
    name.indexOf("paddle brush") !== -1 ||
    name.indexOf("supersonic hair") !== -1 ||
    name.indexOf("air purifier") !== -1 ||
    name.indexOf("13 128") !== -1 ||
    name.indexOf("13 256") !== -1 ||
    name.indexOf("13 512") !== -1 ||
    name.indexOf("14 128") !== -1 ||
    name.indexOf("14 256") !== -1 ||
    name.indexOf("14 512") !== -1 ||
    name.indexOf("14 plus") !== -1 ||
    name.indexOf("aw 9") !== -1 ||
    name.indexOf("s9 4") !== -1 ||
    name.indexOf("aw 9") !== -1
  ) {
    return Number(price) + 600;
  } else if (
    name.indexOf("z flip") !== -1 ||
    name.indexOf("z fold") !== -1 ||
    name.indexOf("tab s") !== -1 ||
    name.indexOf("mi ") !== -1 ||
    name.indexOf("mi ") !== -1 ||
    name.indexOf("15 pro 128") !== -1 ||
    name.indexOf("15 pro 256") !== -1 ||
    name.indexOf("15 pro 512") !== -1 ||
    name.indexOf("15 pro 1tb") !== -1 ||
    name.indexOf("15 promax 256") !== -1 ||
    name.indexOf("15 promax 512") !== -1 ||
    name.indexOf("15 promax 1tb") !== -1 ||
    name.indexOf("15 pro max 256") !== -1 ||
    name.indexOf("15 pro max 512") !== -1 ||
    name.indexOf("15 pro max 1tb") !== -1 ||
    name.indexOf("15 pro max 1tb") !== -1 ||
    name.indexOf("15 pro max 1tb") !== -1 ||
    name.indexOf("16 128") !== -1 ||
    name.indexOf("16 256") !== -1 ||
    name.indexOf("16 512") !== -1 ||
    name.indexOf("16e 128") !== -1 ||
    name.indexOf("16e 256") !== -1 ||
    name.indexOf("16e 512") !== -1 ||
    name.indexOf("16 plus 128") !== -1 ||
    name.indexOf("16 plus 256") !== -1 ||
    name.indexOf("16 plus 512") !== -1 ||
    name.indexOf("14 pro 128") !== -1 ||
    name.indexOf("14 pro 256") !== -1 ||
    name.indexOf("14 pro 512") !== -1 ||
    name.indexOf("14 pro 1tb") !== -1 ||
    name.indexOf("14 pro 1tb") !== -1 ||
    name.indexOf("14 promax") !== -1 ||
    name.indexOf("15 128") !== -1 ||
    name.indexOf("15 256") !== -1 ||
    name.indexOf("15 512") !== -1 ||
    name.indexOf("15 plus 128") !== -1 ||
    name.indexOf("15 plus 256") !== -1 ||
    name.indexOf("15 plus 512") !== -1 ||
    name.indexOf("garmin") !== -1 ||
    name.indexOf("s25") !== -1
  ) {
    return Number(price) + 800;
  } else if (
    name.indexOf("16 pro 128") !== -1 ||
    name.indexOf("16 pro 256") !== -1 ||
    name.indexOf("16 pro 512") !== -1 ||
    name.indexOf("16 pro 1tb") !== -1 ||
    name.indexOf("16 promax 256") !== -1 ||
    name.indexOf("16 promax 512") !== -1 ||
    name.indexOf("16 promax 1tb") !== -1 ||
    name.indexOf("16 pro max 256") !== -1 ||
    name.indexOf("16 pro max 512") !== -1 ||
    name.indexOf("16 pro max 1tb") !== -1 ||
    name.indexOf("16 pro max 1tb") !== -1 ||
    name.indexOf("16 pro max 1tb") !== -1 ||
    name.indexOf("ultra 2") !== -1
  ) {
    return Number(price) + 1200;
  } else if (
    name.indexOf("mac") !== -1 ||
    name.indexOf("macbook") !== -1 ||
    name.indexOf("book ") !== -1 ||
    name.indexOf("mb") !== -1 ||
    name.indexOf("13.6 m") !== -1 ||
    name.indexOf("15 m") !== -1 ||
    name.indexOf("mgn") !== -1 ||
    name.indexOf("pro") !== -1 ||
    name.indexOf("mgn") !== -1 ||
    name.indexOf("imac") !== -1 ||
    name.indexOf("mgnr3") !== -1 ||
    name.indexOf("mgnt3") !== -1 ||
    name.indexOf("mgpc3") !== -1 ||
    name.indexOf("mgpd3") !== -1 ||
    name.indexOf("mgph3") !== -1 ||
    name.indexOf("mgpj3") !== -1 ||
    name.indexOf("mgpk3") !== -1 ||
    name.indexOf("mgpl3") !== -1 ||
    name.indexOf("mgpm3") !== -1 ||
    name.indexOf("mgpn3") !== -1 ||
    name.indexOf("mgtf3") !== -1 ||
    name.indexOf("mjv83") !== -1 ||
    name.indexOf("mjv93") !== -1 ||
    name.indexOf("mjva3") !== -1 ||
    name.indexOf("mqr93") !== -1 ||
    name.indexOf("mqra3") !== -1 ||
    name.indexOf("mqrc3") !== -1 ||
    name.indexOf("mqrd3") !== -1 ||
    name.indexOf("mqrj3") !== -1 ||
    name.indexOf("mqrk3") !== -1 ||
    name.indexOf("mqrn3") !== -1 ||
    name.indexOf("mqrp3") !== -1 ||
    name.indexOf("mqrq3") !== -1 ||
    name.indexOf("mqrr3") !== -1 ||
    name.indexOf("mqrt3") !== -1 ||
    name.indexOf("mqru3") !== -1 ||
    name.indexOf("mxng2") !== -1 ||
    name.indexOf("z12simac01") !== -1 ||
    name.indexOf("z12timac01") !== -1 ||
    name.indexOf("z130imac01") !== -1 ||
    name.indexOf("z131imac01") !== -1 ||
    name.indexOf("z132imac01") !== -1 ||
    name.indexOf("z133imac01") !== -1 ||
    name.indexOf("mxnf2") !== -1 ||
    name.indexOf("macbook") != -1 ||
    name.indexOf("book ") != -1 ||
    name.indexOf("mb") != -1 ||
    name.indexOf("13.6 m") != -1 ||
    name.indexOf("15 m") != -1 ||
    name.indexOf("mgn") != -1 ||
    name.indexOf("mbpm2-03") != -1 ||
    name.indexOf("mbpm2-04") != -1 ||
    name.indexOf("mbpm2-05") != -1 ||
    name.indexOf("mbpm2-06") != -1 ||
    name.indexOf("mbpm2-07") != -1 ||
    name.indexOf("mbpm2-08") != -1 ||
    name.indexOf("mbpm2-09") != -1 ||
    name.indexOf("mbpm2-10") != -1 ||
    name.indexOf("mbpm2-11") != -1 ||
    name.indexOf("mbpm2-12") != -1 ||
    name.indexOf("mbpm2sl-03") != -1 ||
    name.indexOf("mbpm2sl-04") != -1 ||
    name.indexOf("mbpm2sl-05") != -1 ||
    name.indexOf("mbpm2sl-06") != -1 ||
    name.indexOf("mbpm2sl-07") != -1 ||
    name.indexOf("mbpm2sl-08") != -1 ||
    name.indexOf("mbpm2sl-09") != -1 ||
    name.indexOf("mbpm2sl-10") != -1 ||
    name.indexOf("mbpm2sl-11") != -1 ||
    name.indexOf("mbpm2sl-12") != -1 ||
    name.indexOf("mgn63") != -1 ||
    name.indexOf("mgn93") != -1 ||
    name.indexOf("mgnd3") != -1 ||
    name.indexOf("mlxw3") != -1 ||
    name.indexOf("mlxx3") != -1 ||
    name.indexOf("mlxy3") != -1 ||
    name.indexOf("mly03") != -1 ||
    name.indexOf("mly13") != -1 ||
    name.indexOf("mly23") != -1 ||
    name.indexOf("mly33") != -1 ||
    name.indexOf("mly43") != -1 ||
    name.indexOf("mneh3") != -1 ||
    name.indexOf("mnej3") != -1 ||
    name.indexOf("mnep3") != -1 ||
    name.indexOf("mneq3") != -1 ||
    name.indexOf("mphe3") != -1 ||
    name.indexOf("mphf3") != -1 ||
    name.indexOf("mphh3") != -1 ||
    name.indexOf("mphj3") != -1 ||
    name.indexOf("mqkp3") != -1 ||
    name.indexOf("mqkq3") != -1 ||
    name.indexOf("mqkr3") != -1 ||
    name.indexOf("mqkt3") != -1 ||
    name.indexOf("mqku3") != -1 ||
    name.indexOf("mqku3") != -1 ||
    name.indexOf("mqkv3") != -1 ||
    name.indexOf("mqkw3") != -1 ||
    name.indexOf("mqkx3") != -1 ||
    name.indexOf("mr7j3") != -1 ||
    name.indexOf("mr7k3") != -1 ||
    name.indexOf("mrw13") != -1 ||
    name.indexOf("mrw23") != -1 ||
    name.indexOf("mrw33") != -1 ||
    name.indexOf("mrw43") != -1 ||
    name.indexOf("mrw63") != -1 ||
    name.indexOf("mrw73") != -1 ||
    name.indexOf("mrx33") != -1 ||
    name.indexOf("mrx43") != -1 ||
    name.indexOf("mrx53") != -1 ||
    name.indexOf("mrx63") != -1 ||
    name.indexOf("mrx73") != -1 ||
    name.indexOf("mrx83") != -1 ||
    name.indexOf("mrxn3") != -1 ||
    name.indexOf("mrxp3") != -1 ||
    name.indexOf("mrxq3") != -1 ||
    name.indexOf("mrxr3") != -1 ||
    name.indexOf("mrxt3") != -1 ||
    name.indexOf("mrxu3") != -1 ||
    name.indexOf("mrxv3") != -1 ||
    name.indexOf("mrxw3") != -1 ||
    name.indexOf("mrym3") != -1 ||
    name.indexOf("mryn3") != -1 ||
    name.indexOf("mryp3") != -1 ||
    name.indexOf("mryq3") != -1 ||
    name.indexOf("mryr3") != -1 ||
    name.indexOf("mryt3") != -1 ||
    name.indexOf("mryu3") != -1 ||
    name.indexOf("mryv3") != -1 ||
    name.indexOf("mtl73") != -1 ||
    name.indexOf("mtl83") != -1 ||
    name.indexOf("muw63") != -1 ||
    name.indexOf("muw73") != -1 ||
    name.indexOf("mxcr3") != -1 ||
    name.indexOf("mxct3") != -1 ||
    name.indexOf("mxcu3") != -1 ||
    name.indexOf("mxcv3") != -1 ||
    name.indexOf("mxd13") != -1 ||
    name.indexOf("mxd23") != -1 ||
    name.indexOf("mxd33") != -1 ||
    name.indexOf("mxd43") != -1 ||
    name.indexOf("z1aw001fy") != -1 ||
    name.indexOf("z1aw001lv") != -1 ||
    name.indexOf("z1aw001ns") != -1 ||
    name.indexOf("mw123") != -1 ||
    name.indexOf("mw0w3") != -1 ||
    name.indexOf("mc6t4") != -1 ||
    name.indexOf("mw0y3") != -1 ||
    name.indexOf("mc6v4") != -1 ||
    name.indexOf("mw0x3") != -1 ||
    name.indexOf("mc6v4") != -1 ||
    name.indexOf("mw103") != -1 ||
    name.indexOf("mw1l3") != -1 ||
    name.indexOf("mw1g3") != -1 ||
    name.indexOf("mc7a4") != -1 ||
    name.indexOf("mw1j3") != -1 ||
    name.indexOf("mw1m3") != -1 ||
    name.indexOf("mw1h3") != -1 ||
    name.indexOf("mc7c4") != -1 ||
    name.indexOf("mw1k3") != -1
  ) {
    return Number(price) + 2000;
  } else {
    return `${price}🟥 Без наценки `;
  }
};
