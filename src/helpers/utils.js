const toCommaFormat = v => {
  let fmt_val = "";
  const formatter = new Intl.NumberFormat("en-US");
  try {
    fmt_val = formatter.format(v);
    if (fmt_val === "NaN") fmt_val = v;
  } catch (err) {
    console.log(err);
  }
  return fmt_val;
};

// convert a amount in number format to text format
const amountNumberToTextFrmt = val => {
  let fmt_val = val;
  if (val && /^[0-9]+$/.test(val)) {
    val = val.toString();
    let text_len = val.split(".")[0].length;
    // val to two decimal place
    const exactVal = (str_val, d) => {
      let v = "";
      try {
        v = (parseInt(str_val) / d).toFixed(2);
      } catch (err) {
        v = str_val;
      }
      return v;
    };

    switch (true) {
      case text_len <= 5:
        fmt_val = val;
        break;
      case text_len <= 7:
        fmt_val = `${exactVal(val, 100000)} Lac`;
        break;
      case text_len >= 8:
        fmt_val = `${exactVal(val, 10000000)} Cr`;
        break;
      default:
        fmt_val = val;
    }

    fmt_val = fmt_val.replace(".00", "");
  }
  // convert to comma format
  fmt_val = toCommaFormat(fmt_val);
  return fmt_val;
};

const isEmpty = data => {
  try {
    data = data.trim();
  } catch (err) {}
  return ["", undefined, "undefined", null, "Nan", "NaN", NaN].includes(data);
};

export { amountNumberToTextFrmt, isEmpty };
