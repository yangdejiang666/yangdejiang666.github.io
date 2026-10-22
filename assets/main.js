import "./chunk-5BEVYMCJ.js";
function e(r) {
  let o = new URLSearchParams(r);
  return (
    ["globe", "map", "depth"].includes((o.get("view") || "").toLowerCase()) ||
    o.get("intro") === "0" ||
    o.get("from") === "solar" ||
    ["sel", "lesson", "mode"].some((n) => o.has(n))
  );
}
function t(r) {
  return "/solar/" + (r || "");
}
e(location.search) ? import("./earth-entry-CW4EB6E3.js") : location.replace(t(location.search));
