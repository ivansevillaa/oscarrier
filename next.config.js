// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

// set LD_LIBRARY_PATH properly for all instances of the Vercel processes that are spawned,
// not just the initial buildscript.
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

module.exports = {
  ...nextTranslate()
};
