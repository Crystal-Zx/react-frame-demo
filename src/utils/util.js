// NOTE: 判断 str 是不是 json
export const isJson = str => {
  // if(typeof str) return false;
  try {
    const object = JSON.parse(str)
    if (object && typeof object === "object") {
      return true
    } else {
      return false
    }
  } catch (e) {}
}
