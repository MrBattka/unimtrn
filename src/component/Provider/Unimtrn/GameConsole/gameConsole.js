export const returnGameConsole = (el) => {
  return (
    el.name.indexOf("Nintendo") != -1 ||
    el.name.indexOf("Oculus") != -1 ||
    el.name.indexOf("Playstation") != -1 ||
    el.name.indexOf("PlayStation") != -1 ||
    el.name.indexOf("Xbox") != -1 ||
    el.name.indexOf("PS5") != -1 ||
    el.name.indexOf("Pico") != -1 ||
    el.name.indexOf("Steam") != -1
  );
};
