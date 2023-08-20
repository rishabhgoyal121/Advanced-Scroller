function client_outline_d(x, y) {
  return (
    "M" +
    (x - 4.9) +
    "," +
    (y + 0) +
    "a4.9,4.9 0 1,0 9.8,0a4.9,4.9 0 1,0 -9.8,0 " +
    "M" +
    (x + 7.7) +
    "," +
    (y + 15.3) +
    " v12.3 c-1.1,0.5 -2.2,0.9 -3.3,1.2 c-1.4,0.4 -2.9,0.5 -4.4,0.5 c-1.5,0 -3,-0.2 -4.4,-0.5 c-1.2,-0.3 -2.3,-0.7 -3.3,-1.2 v-12.3 c0,-4.3 3.5,-7.7 7.7,-7.7 c4.2,0 7.7,3.5 7.7,7.70001 z"
  );
}

var outline_locs = [
  {
    dx: 30,
    dy: 0,
  },
  {
    dx: 60,
    dy: 0,
  },
  {
    dx: 0,
    dy: 30,
  },
  {
    dx: 30,
    dy: 30,
  },
  {
    dx: 60,
    dy: 30,
  },
];

function silhouette_outline_d(form_n, x, y) {
  // t-shirt -> chair
  if (form_n == 0) {
    return (
      "M" +
      (x + 3) +
      "," +
      (y + 10) +
      "c0,0.152,0.102,0.254,0.258,0.254l0.258,0l0,9.492c0,0.5,0.414,0.902,0.933,0.902c0.516,0,0.93,-0.402,0.93,-0.902l0,-9.492l8.242,0l0,9.492c0,0.5,0.414,0.902,0.93,0.902c0.519,0,0.933,-0.402,0.933,-0.902l0,-9.492l0.258,0c0.156,0,0.258,-0.102,0.258,-0.254l0,-2.609c0,-0.153,-0.102,-0.254,-0.258,-0.254l-1.113,0l0,-10.145c0,-0.148,-0.102,-0.25,-0.258,-0.25l-0.93,0c-0.156,0,-0.257,0.102,-0.257,0.25l0,0.504l-7.133,0l0,-0.504c0,-0.148,-0.106,-0.25,-0.258,-0.25l-0.934,0c-0.152,0,-0.257,0.102,-0.257,0.25l0,10.145l-1.293,0c-0.153,0,-0.258,0.101,-0.258,0.254l0,2.609zm1.836,9.746c0,0.227,-0.184,0.402,-0.414,0.402c-0.235,0,-0.414,-0.175,-0.414,-0.402l0,-9.492l0.801,0zm10.078,0c0,0.227,-0.18,0.402,-0.414,0.402c-0.23,0,-0.414,-0.175,-0.414,-0.402l0,-9.492l0.801,0zm-1.266,-22.477l0.414,0l0,9.895l-0.414,0zm-7.652,9.895l0,-6.305l7.136,0l0,6.305zm7.137,-9.141l0,2.309l-7.137,0l0,-2.309zm-8.066,-0.754l0.414,0l0,9.895l-0.414,0zm-1.551,10.395l11.914,0l0,2.109l-11.914,0zm0,0"
    );
  }

  // dress
  if (form_n == 1) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 20) +
      "c-1.9,0,-2.6,-0.5,-2.6,-0.5c0.2,-0.9,0.3,-1.5,-0.1,-3.3h0c-0.4,-1.8,-0.7,-3,-0.5,-4.5c0.1,-1,0.7,-2.7,0.8,-3.3c0.4,-1.1,0.4,-1.7,0.2,-2.3 C" +
      (x + 7.5) +
      "," +
      (y + 5.6) +
      "," +
      (x + 7) +
      "," +
      (y + 4.5) +
      "," +
      (x + 7.1) +
      "," +
      (y + 3.5) +
      "L" +
      (x + 6.5) +
      "," +
      (y + 5.5) +
      "C" +
      (x + 5.4) +
      "," +
      (y + 5.6) +
      "," +
      (x + 5) +
      "," +
      (y + 5) +
      "," +
      (x + 5) +
      "," +
      (y + 5) +
      "c0.3,-1.1,0.7,-2.6,0.8,-3c0.1,-0.5,0.6,-1.1,1.4,-1.4l0,0L" +
      (x + 8.6) +
      "," +
      (y + 0) +
      "C" +
      (x + 8.4) +
      "," +
      (y + 0.9) +
      "," +
      (x + 9) +
      "," +
      (y + 1.5) +
      "," +
      (x + 10) +
      "," +
      (y + 1.5) +
      "c1,0,1.6,-0.6,1.4,-1.5l1.4,0.5l0,0c0.8,0.3,1.3,0.9,1.4,1.4c0.1,0.4,0.5,1.9,0.8,3c0,0,-0.4,0.6,-1.5,0.6l-0.6,-2.1 c0.1,1.1,-0.4,2.2,-0.5,2.7c-0.2,0.5,-0.2,1.2,0.2,2.3c0.2,0.6,0.7,2.3,0.8,3.3c0.1,1.5,-0.1,2.8,-0.5,4.5h0c-0.4,1.8,-0.4,2.4,-0.1,3.3 C" +
      (x + 12.6) +
      "," +
      (y + 19.5) +
      "," +
      (x + 11.9) +
      "," +
      (y + 20) +
      "," +
      (x + 10) +
      "," +
      (y + 20) +
      "z"
    );
  }

  // trousers
  if (form_n == 2) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 0.8) +
      "c-1.2,0,-2.6,-0.2,-3.1,-0.3l0,0l0,0l0,0c0,0.1,-0.1,0.2,-0.1,0.3C" +
      (x + 6.7) +
      "," +
      (y + 0.9) +
      "," +
      (x + 6.6) +
      "," +
      (y + 1.1) +
      "," +
      (x + 6.6) +
      "," +
      (y + 1.3) +
      "C" +
      (x + 6.3) +
      "," +
      (y + 2) +
      "," +
      (x + 6.1) +
      "," +
      (y + 2.6) +
      "," +
      (x + 6) +
      "," +
      (y + 3.4) +
      "c0,0.1,0,0.2,0,0.3  C" +
      (x + 5.8) +
      "," +
      (y + 4.9) +
      "," +
      (x + 6) +
      "," +
      (y + 6.1) +
      "," +
      (x + 6.2) +
      "," +
      (y + 7.3) +
      "c0.2,1.3,0.3,2.5,0.4,3.8c0.1,1.8,0.1,3.7,0.2,5.5v3.2c0,0,1,0.2,1.4,0.2c0,0,1,0,1.3,-0.2c0,-2.2,0,-4.5,0,-6.7  c0,-1,0,-2,0,-3.1c0,-1.2,0.1,-2.5,0.2,-3.6l0,0c0,0,0,-0.3,0.1,-0.5c0,-0.2,0.2,-0.4,0.4,-0.4c0.2,0,0.3,0.2,0.4,0.4c0,0.2,0.1,0.5,0.1,0.5 l0,0c0.1,1.2,0.2,2.5,0.2,3.6c0,1,0,2,0,3.1c0,2.2,0,4.5,0,6.7c0.3,0.2,1.3,0.2,1.3,0.2c0.4,0,1.4,-0.2,1.4,-0.2v-3.2 c0.1,-1.8,0,-3.7,0.2,-5.5c0.1,-1.3,0.2,-2.5,0.4,-3.8C" +
      (x + 14) +
      "," +
      (y + 6.1) +
      "," +
      (x + 14.2) +
      "," +
      (y + 4.9) +
      "," +
      (x + 14) +
      "," +
      (y + 3.7) +
      "c0,-0.1,0,-0.2,0,-0.3c-0.1,-0.8,-0.3,-1.4,-0.6,-2.1  c-0.1,-0.2,-0.1,-0.4,-0.2,-0.6c0,-0.1,-0.1,-0.2,-0.1,-0.3l0,0l0,0l0,0C" +
      (x + 12.6) +
      "," +
      (y + 0.6) +
      "," +
      (x + 11.2) +
      "," +
      (y + 0.8) +
      "," +
      (x + 10) +
      "," +
      (y + 0.8) +
      ""
    );
  }

  // shorts
  if (form_n == 3) {
    return (
      "M" +
      (x + 14.8) +
      "," +
      (y + 4) +
      "c1.4,0.9,2.6,10,2.6,10s-1.5,0.8,-3.4,0.8s-2.2,0.1,-2.9,0.4l-1.2,-3l-1.2,3c-0.7,-0.4,-1.1,-0.4,-2.9,-0.4S" +
      (x + 2.6) +
      "," +
      (y + 14) +
      "," +
      (x + 2.6) +
      "," +
      (y + 14) +
      "S" +
      (x + 3.8) +
      "," +
      (y + 4.9) +
      "," +
      (x + 5.2) +
      "," +
      (y + 4) +
      "C" +
      (x + 5.2) +
      "," +
      (y + 4) +
      "," +
      (x + 9.5) +
      "," +
      (y + 6.1) +
      "," +
      (x + 14.8) +
      "," +
      (y + 4) +
      "z"
    );
  }

  // skirt
  if (form_n == 4) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 18.6) +
      "c0,0,-1.6,0.1,-2.7,-0.4s-2.3,-0.5,-4,-0.5s-2.4,-0.9,-2.4,-0.9c0.6,-0.4,2.4,-8.9,2.5,-10s2.2,-5.4,2.2,-5.4C" +
      (x + 7) +
      "," +
      (y + 1.9) +
      "," +
      (x + 8.6) +
      "," +
      (y + 2.1) +
      "," +
      (x + 10) +
      "," +
      (y + 2.1) +
      "c1.4,0,3,-0.2,4.5,-0.7c0,0,2,4.4,2.2,5.4c0.1,1.1,1.9,9.6,2.5,10c0,0,-0.7,0.9,-2.4,0.9s-2.8,0,-4,0.5S" +
      (x + 10) +
      "," +
      (y + 18.6) +
      "," +
      (x + 10) +
      "," +
      (y + 18.6) +
      "z"
    );
  }

  // sweater
  if (form_n == 5) {
    return (
      "M" +
      (x + 14.1) +
      "," +
      (y + 13.3) +
      "c0,0,0,0.1,0.1,0.3l-0.9,2.3c0.5,0.9,1.2,1,1.7,0.9c0.2,0.8,0.3,1.5,0.3,2.1c0,0,-1.1,0.9,-5.3,0.9s-5.3,-0.9,-5.3,-0.9 c0,-0.6,0.1,-1.3,0.3,-2.1l0,0c0.5,0.1,1.3,0,1.7,-0.9l-0.9,-2.3c0.1,-0.2,0.1,-0.3,0.1,-0.3M" +
      (x + 5.7) +
      "," +
      (y + 13.6) +
      "c0.1,-0.2,0.1,-0.3,0.1,-0.3 c0.4,-1.7,0.2,-5.8,-0.3,-7L" +
      (x + 4.4) +
      "," +
      (y + 10) +
      "c0,0.1,0,0.2,0,0.2l2.3,5.6c-0.7,1.4,-2.3,0.8,-2.3,0.8l-2.5,-6.1c-0.1,-0.3,-0.2,-0.6,-0.1,-0.9 c0.3,-1.4,1.3,-5.3,1.5,-6.1c0.2,-0.8,1,-1.9,2.1,-2.2l0,0l2.3,-0.9c0,0,0.1,3.9,2.3,5h0c2.3,-1.1,2.3,-5,2.3,-5l2.3,0.9l0,0 c1.1,0.3,1.9,1.4,2.1,2.2c0.2,0.8,1.2,4.7,1.5,6.1c0.1,0.3,0,0.6,-0.1,0.9l-2.5,6.1c0,0,-1.5,0.6,-2.3,-0.8l2.3,-5.6c0,-0.1,0,-0.2,0,-0.2 l-1.2,-3.7c-0.5,1.2,-0.7,5.3,-0.3,7c0,0,0,0.1,0.1,0.3"
    );
  }

  // thin dress
  if (form_n == 6) {
    return (
      "M" +
      (x + 10.7) +
      "," +
      (y + 20) +
      "c0.3,-0.1,0.7,-0.1,1.5,0s1.4,-0.2,1.4,-0.2c0,-0.5,-0.9,-8.2,-0.9,-9.3S" +
      (x + 12.4) +
      "," +
      (y + 8) +
      "," +
      (x + 12) +
      "," +
      (y + 7) +
      "s-0.2,-2.2,-0.2,-2.2c0.2,-0.4,0.8,-0.9,0.4,-1.9 C" +
      (x + 12) +
      "," +
      (y + 2.2) +
      "," +
      (x + 12) +
      "," +
      (y + 0.4) +
      "," +
      (x + 12) +
      "," +
      (y + 0.4) +
      "L" +
      (x + 10.9) +
      "," +
      (y + 0) +
      "c0,0.3,-0.4,0.6,-0.9,0.6l0,0l0,0C" +
      (x + 9.5) +
      "," +
      (y + 0.6) +
      "," +
      (x + 9.2) +
      "," +
      (y + 0.3) +
      "," +
      (x + 9.1) +
      "," +
      (y + 0) +
      "L" +
      (x + 8) +
      "," +
      (y + 0.4) +
      "c0,0,0,1.8,-0.2,2.4 C" +
      (x + 7.4) +
      "," +
      (y + 3.9) +
      "," +
      (x + 8) +
      "," +
      (y + 4.4) +
      "," +
      (x + 8.2) +
      "," +
      (y + 4.8) +
      "C" +
      (x + 8.2) +
      "," +
      (y + 4.8) +
      "," +
      (x + 8.5) +
      "," +
      (y + 6) +
      "," +
      (x + 8) +
      "," +
      (y + 7) +
      "c-0.4,1,-0.5,2.5,-0.6,3.5s-1,8.7,-0.9,9.3c0,0,0.6,0.3,1.4,0.2c0.7,-0.1,1.2,-0.1,1.5,0 C" +
      (x + 9.3) +
      "," +
      (y + 20) +
      "," +
      (x + 9.9) +
      "," +
      (y + 20.3) +
      "," +
      (x + 10.7) +
      "," +
      (y + 20) +
      "z"
    );
  }

  // mens pants
  if (form_n == 7) {
    return (
      "M" +
      (x + 14) +
      "," +
      (y + 0.4) +
      "c0,-0.2,-0.2,-0.4,-0.4,-0.4H" +
      (x + 10) +
      "H" +
      (x + 6.5) +
      "C" +
      (x + 6.2) +
      "," +
      (y + 0) +
      "," +
      (x + 6.1) +
      "," +
      (y + 0.2) +
      "," +
      (x + 6) +
      "," +
      (y + 0.4) +
      "C" +
      (x + 6) +
      "," +
      (y + 2.2) +
      "," +
      (x + 5.6) +
      "," +
      (y + 10) +
      "," +
      (x + 5.8) +
      "," +
      (y + 19.6) +
      "C" +
      (x + 5.8) +
      "," +
      (y + 19.8) +
      "," +
      (x + 6) +
      "," +
      (y + 20) +
      "," +
      (x + 6.2) +
      "," +
      (y + 20) +
      "h2.5c0.2,0,0.4,-0.2,0.4,-0.4  C" +
      (x + 9.3) +
      "," +
      (y + 17) +
      "," +
      (x + 9.7) +
      "," +
      (y + 8.8) +
      "," +
      (x + 9.9) +
      "," +
      (y + 6.1) +
      "c0,-0.1,0.1,-0.1,0.1,0c0.2,2.7,0.7,11,0.9,13.5c0,0.2,0.2,0.4,0.4,0.4h2.5c0.2,0,0.4,-0.2,0.4,-0.4 C" +
      (x + 14.4) +
      "," +
      (y + 10) +
      "," +
      (x + 14) +
      "," +
      (y + 2.2) +
      "," +
      (x + 14) +
      "," +
      (y + 0.4) +
      "z"
    );
  }

  // mens shorts
  if (form_n == 8) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 9.7) +
      "l-0.7,4.9l-3.6,-0.5c-0.3,-3.2,0.9,-8.6,0.9,-8.6l3.4,0l3.4,0c0,0,1.2,5.4,0.9,8.6l-3.6,0.5L" +
      (x + 10) +
      "," +
      (y + 9.7) +
      "z"
    );
  }

  // mens t-shirt
  if (form_n == 9) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 16.4) +
      "l3.7,0c0.2,0,0.4,-0.2,0.4,-0.5c-0.3,-3.3,-0.6,-8,-0.6,-8l0.7,1.3c0.1,0.2,0.3,0.3,0.5,0.1l1.7,-1.2c0.2,-0.2,0.2,-0.4,0.1,-0.7  c-0.2,-0.4,-0.4,-0.8,-0.4,-0.9c-0.4,-0.8,-0.9,-1.6,-1.5,-2.2c-0.7,-0.8,-1.5,-1.1,-2.7,-1.5c-0.1,0,-0.3,0,-0.3,0.1c-0.1,0.8,-0.8,1.4,-1.6,1.4  S" +
      (x + 8.6) +
      "," +
      (y + 3.8) +
      "," +
      (x + 8.4) +
      "," +
      (y + 3) +
      "c0,-0.1,-0.2,-0.2,-0.3,-0.1c-1.3,0.3,-2,0.7,-2.7,1.5C" +
      (x + 4.8) +
      "," +
      (y + 4.9) +
      "," +
      (x + 4.3) +
      "," +
      (y + 5.7) +
      "," +
      (x + 3.9) +
      "," +
      (y + 6.5) +
      "c0,0.1,-0.2,0.5,-0.4,0.9 c-0.1,0.2,0,0.5,0.1,0.7l1.7,1.2c0.2,0.1,0.4,0.1,0.5,-0.1l0.7,-1.3c0,0,-0.3,4.7,-0.6,8c0,0.3,0.2,0.5,0.4,0.5L" +
      (x + 10) +
      "," +
      (y + 16.4) +
      "z"
    );
  }

  // socks
  if (form_n == 10) {
    return (
      "M" +
      (x + 4.2) +
      "," +
      (y + 9.6) +
      "c0,-0.1,2.5,-5.4,2.9,-6.5C" +
      (x + 7.1) +
      "," +
      (y + 3) +
      "," +
      (x + 7.3) +
      "," +
      (y + 2.9) +
      "," +
      (x + 7.4) +
      "," +
      (y + 3) +
      "l2.8,1.2c0.1,0,0.2,0.2,0.1,0.3L" +
      (x + 8.2) +
      "," +
      (y + 9.3) +
      "C" +
      (x + 8) +
      "," +
      (y + 9.8) +
      "," +
      (x + 8.1) +
      "," +
      (y + 10.1) +
      "," +
      (x + 8.3) +
      "," +
      (y + 10.4) +
      "c0.4,1,0.9,2.1,1.3,3.1c0.3,0.8,0.4,1.8,-0.6,2.2c-0.8,0.3,-1.8,0.4,-2.3,-0.4c-0.2,-0.3,-0.3,-0.6,-0.4,-0.8c-0.4,-0.9,-0.8,-1.7,-1.2,-2.5 C" +
      (x + 4.5) +
      "," +
      (y + 11.3) +
      "," +
      (x + 3.9) +
      "," +
      (y + 10.5) +
      "," +
      (x + 4.2) +
      "," +
      (y + 9.6) +
      "zM" +
      (x + 10.5) +
      "," +
      (y + 12.3) +
      "c0.4,0.8,0.8,1.7,1.2,2.5c0.1,0.3,0.3,0.6,0.4,0.8c0.6,0.7,1.5,0.7,2.3,0.4 c1,-0.4,1,-1.4,0.6,-2.2c-0.4,-1,-0.9,-2.1,-1.3,-3.1c-0.1,-0.3,-0.2,-0.7,-0.1,-1.1l2.1,-4.9c0,-0.1,0,-0.2,-0.1,-0.3L" +
      (x + 13) +
      "," +
      (y + 3.2) +
      "c-0.1,0,-0.2,0,-0.3,0.1 c-0.4,1.2,-2.9,6.5,-2.9,6.5C" +
      (x + 9.5) +
      "," +
      (y + 10.8) +
      "," +
      (x + 10.1) +
      "," +
      (y + 11.6) +
      "," +
      (x + 10.5) +
      "," +
      (y + 12.3) +
      "z"
    );
  }

  // mens shoe
  if (form_n == 11) {
    return (
      "M" +
      (x + 18.4) +
      "," +
      (y + 12.2) +
      "c-0.1,0,-0.5,0.2,-0.5,0.2c-0.1,0,-0.2,0.1,-0.3,0.1c-0.2,0.1,-0.4,0.1,-0.6,0.2c-0.4,0.1,-0.8,0.2,-1.2,0.3 c-0.1,0,-0.3,0.1,-0.4,0.1c-0.3,0.1,-0.6,0.1,-0.9,0.2c-1.6,0.2,-3.2,0.1,-4.7,-0.2c-0.6,-0.1,-1.2,-0.4,-1.7,-0.4c-0.2,0,-0.7,-0.1,-0.8,0v0.7 c0,0.1,-0.1,0.2,-0.2,0.2H" +
      (x + 6.9) +
      "c-0.2,0,-0.4,0,-0.6,0c-0.5,0,-1,0,-1.5,0c-0.5,0,-1,0,-1.5,0c-0.3,0,-0.5,0,-0.8,0c-0.4,-0.1,-0.4,-0.2,-0.4,-1 c0,-0.8,0.3,-0.8,0.3,-0.8c-0.3,-0.7,-0.2,-1.5,0,-2.2c0.1,-0.5,0.4,-1,0.6,-1.5c0.1,-0.3,0.2,-0.2,0.2,-0.2c0.6,0,1.3,0.1,1.9,0.2 c1.1,0.1,2.1,-0.3,3,-1c0.1,-0.1,0.3,-0.3,0.4,-0.4C" +
      (x + 8.8) +
      "," +
      (y + 6.3) +
      "," +
      (x + 9.3) +
      "," +
      (y + 6.8) +
      "," +
      (x + 9.5) +
      "," +
      (y + 7) +
      "c0.4,0.3,0.7,0.5,1.1,0.8c0.5,0.4,1,0.9,1.6,1.3 c0,0,0.1,0.1,0.1,0.1c1.2,0.9,2.6,1.2,4,1.2c0.6,0,1.1,0.3,1.1,0.3c0.5,0.3,0.6,1,0.6,1c0.1,0,0.2,0,0.3,0.1 C" +
      (x + 18.4) +
      "," +
      (y + 11.8) +
      "," +
      (x + 18.5) +
      "," +
      (y + 12.1) +
      "," +
      (x + 18.4) +
      "," +
      (y + 12.2) +
      "z"
    );
  }

  // mens necktie
  if (form_n == 12) {
    return (
      "M" +
      (x + 11.9) +
      "," +
      (y + 0.5) +
      "c-0.3,-0.2,-0.8,-0.2,-1.1,-0.2c-0.3,0,-0.7,0,-1,0c-0.3,0,-0.7,0,-1,0c-0.3,0,-0.8,0,-1.1,0.2C" +
      (x + 7.1) +
      "," +
      (y + 0.7) +
      "," +
      (x + 7.3) +
      "," +
      (y + 1.8) +
      "," +
      (x + 7.4) +
      "," +
      (y + 2.3) +
      "c0.3,0.7,0.8,1.1,1.3,1.5C" +
      (x + 8.7) +
      "," +
      (y + 3.9) +
      "," +
      (x + 8.7) +
      "," +
      (y + 4) +
      "," +
      (x + 8.8) +
      "," +
      (y + 4.1) +
      "L" +
      (x + 9.1) +
      "," +
      (y + 5) +
      "c0,0.1,0.1,0.2,0.2,0.2L" +
      (x + 8.2) +
      "," +
      (y + 17.6) +
      "c0,0.2,0,0.4,0.2,0.6l1,1.2 c0.2,0.3,0.7,0.3,0.9,0l1,-1.2c0.2,-0.2,0.2,-0.4,0.2,-0.6L" +
      (x + 10.3) +
      "," +
      (y + 5.2) +
      "c0.1,0,0.2,-0.1,0.2,-0.2l0.4,-0.8C" +
      (x + 11) +
      "," +
      (y + 4) +
      "," +
      (x + 11) +
      "," +
      (y + 3.9) +
      "," +
      (x + 10.9) +
      "," +
      (y + 3.8) +
      "c0.5,-0.4,1.1,-0.8,1.3,-1.5C" +
      (x + 12.4) +
      "," +
      (y + 1.8) +
      "," +
      (x + 12.6) +
      "," +
      (y + 0.7) +
      "," +
      (x + 11.9) +
      "," +
      (y + 0.5) +
      "zM" +
      (x + 11.8) +
      "," +
      (y + 1.5) +
      "c-0.2,0.2,-0.6,0.7,-0.7,0.9c-0.2,0.2,-0.6,0.8,-0.8,1.1H" +
      (x + 9.4) +
      "C" +
      (x + 9.2) +
      "," +
      (y + 3.2) +
      "," +
      (x + 8.8) +
      "," +
      (y + 2.6) +
      "," +
      (x + 8.6) +
      "," +
      (y + 2.3) +
      "C" +
      (x + 8.4) +
      "," +
      (y + 2.2) +
      "," +
      (x + 8.1) +
      "," +
      (y + 1.7) +
      "," +
      (x + 7.9) +
      "," +
      (y + 1.5) +
      "c-0.1,-0.1,0,-0.2,0.1,-0.2c0.3,-0.1,0.9,-0.4,1.9,-0.4h0c1,0,1.6,0.2,1.9,0.4 C" +
      (x + 11.8) +
      "," +
      (y + 1.3) +
      "," +
      (x + 11.9) +
      "," +
      (y + 1.4) +
      "," +
      (x + 11.8) +
      "," +
      (y + 1.5) +
      "z"
    );
  }

  // womens shoes
  if (form_n == 13) {
    return (
      "M" +
      (x + 2.8) +
      "," +
      (y + 7.6) +
      "c-0.2,0,-0.3,0.2,-0.5,0.3C" +
      (x + 2.2) +
      "," +
      (y + 8.1) +
      "," +
      (x + 2) +
      "," +
      (y + 8.4) +
      "," +
      (x + 2) +
      "," +
      (y + 8.6) +
      "c-0.1,0.6,-0.1,1.3,-0.1,1.9c0,0.5,0,0.9,0,1.4c0,0.3,0.1,0.9,0.3,1.1 c0.2,0.2,0.5,0.2,0.7,0.2c1.8,0,3.5,0,5.3,0c0.9,0,1.8,0.1,2.8,0.2c0.9,0.1,1.8,0,2.7,0c0.6,0,1.3,-0.2,1.9,-0.3 c0.6,-0.1,1.2,-0.3,1.7,-0.6c0.5,-0.3,0.7,-0.8,0.7,-1.3c0,-0.4,-0.2,-0.8,-0.4,-1.1c-0.2,-0.2,-0.4,-0.4,-0.7,-0.5c-0.2,-0.1,-0.5,-0.2,-0.8,-0.2 c-0.9,-0.1,-1.7,-0.3,-2.4,-0.8c-1.2,-0.7,-4,-2.3,-4.4,-2.6C" +
      (x + 8.8) +
      "," +
      (y + 5.6) +
      "," +
      (x + 7.9) +
      "," +
      (y + 5.3) +
      "," +
      (x + 7.5) +
      "," +
      (y + 5.4) +
      "C" +
      (x + 7.3) +
      "," +
      (y + 5.5) +
      "," +
      (x + 7) +
      "," +
      (y + 5.6) +
      "," +
      (x + 6.9) +
      "," +
      (y + 5.9) +
      "C" +
      (x + 6.8) +
      "," +
      (y + 6.1) +
      "," +
      (x + 6.9) +
      "," +
      (y + 6.3) +
      "," +
      (x + 7) +
      "," +
      (y + 6.5) +
      "c0.1,0.4,0.3,1,0,1.4C" +
      (x + 6.8) +
      "," +
      (y + 8.1) +
      "," +
      (x + 6.6) +
      "," +
      (y + 8.2) +
      "," +
      (x + 6.3) +
      "," +
      (y + 8.3) +
      "C" +
      (x + 5.9) +
      "," +
      (y + 8.4) +
      "," +
      (x + 5.4) +
      "," +
      (y + 8.4) +
      "," +
      (x + 5) +
      "," +
      (y + 8.4) +
      "c-0.4,0,-0.9,-0.1,-1.3,-0.3C" +
      (x + 3.6) +
      "," +
      (y + 8.1) +
      "," +
      (x + 3.4) +
      "," +
      (y + 8) +
      "," +
      (x + 3.3) +
      "," +
      (y + 7.9) +
      "C" +
      (x + 3.2) +
      "," +
      (y + 7.9) +
      "," +
      (x + 3.2) +
      "," +
      (y + 7.8) +
      "," +
      (x + 3.1) +
      "," +
      (y + 7.7) +
      "C" +
      (x + 3) +
      "," +
      (y + 7.6) +
      "," +
      (x + 2.9) +
      "," +
      (y + 7.6) +
      "," +
      (x + 2.8) +
      "," +
      (y + 7.6) +
      "z"
    );
  }
}

function detailed_client_outline_g(client_n) {
  if (client_n == 1) {
    return '<path fill="#FFFFFF" d="M30.6,43.6c-0.2-4.4,0.3-8.9-0.5-13.3c-0.3-1.6-0.8-4.4-2.3-5.4c-0.6-0.4-1.7-0.7-2.4-0.8  c-0.5-0.1-1.2-0.2-1.7-0.3c-0.4-0.1-0.7-0.1-1.1-0.2c-0.2,0-0.4-0.1-0.5-0.1c-0.8-0.1-1.5-0.3-2.1-0.4c-0.1,0-0.2,0-0.3-0.1  c-0.6-0.3-1-1.3-1.2-2.1l0.6-5.4l-7.5-0.2l0.8,5.5c-0.2,0.8-0.6,1.8-1.2,2.1c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.1-1.3,0.2-2.1,0.4  c-0.2,0-0.4,0.1-0.5,0.1c-0.4,0.1-0.7,0.1-1.1,0.2C6.6,23.9,6,24,5.4,24.1c-0.7,0.1-1.8,0.4-2.4,0.8c-1.5,0.9-2,3.8-2.3,5.4  C0,34.7,0.4,39.1,0.2,43.5"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M18.5,20.9c0.2,0.8,0.6,1.8,1.2,2.1c0.1,0,0.2,0.1,0.3,0.1c0.6,0.1,1.3,0.2,2.1,0.4c0.2,0,0.4,0.1,0.5,0.1c0.4,0.1,0.7,0.1,1.1,0.2  c0.5,0.1,1.2,0.2,1.7,0.3c0.7,0.1,1.8,0.4,2.4,0.8c1.5,0.9,2,3.8,2.3,5.4c0.8,4.4,0.3,8.9,0.5,13.3"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M25.4,35.6c0.1,2.9,0.9,6.4,1.2,9.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M23.7,43.5c0.2-1.3,0.5-2.5,0.9-3.6c0.3-0.9,0.5-1.8,0.6-2.6c0.1-0.6,0.1-1.2,0.1-1.7"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M11.1,23c0,1,4.3,10.2,4.3,10.2h0c0,0,4.3-9.2,4.3-10.2"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M12.3,20.9c-0.2,0.8-0.6,1.8-1.2,2.1c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.1-1.3,0.2-2.1,0.4c-0.2,0-0.4,0.1-0.5,0.1  c-0.4,0.1-0.7,0.1-1.1,0.2C6.6,23.9,6,24,5.4,24.1c-0.7,0.1-1.8,0.4-2.4,0.8c-1.5,0.9-2,3.8-2.3,5.4C0,34.7,0.4,39.1,0.2,43.5"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M7.1,43.5c-0.2-1.3-0.5-2.5-0.9-3.6c-0.3-0.9-0.5-1.8-0.6-2.6c-0.1-0.6-0.1-1.2-0.1-1.7c0,0,0-0.1,0-0.1c0,0,0,0.1,0,0.1  c-0.1,2.8-0.9,6.3-1.2,9.3"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M21.5,9.8L21.5,9.8c0,1.5-0.5,3.3-1.3,5l0,0c-0.5,1.1-1.2,2.1-2,2.9c0,0,0,0,0,0c-0.9,0.9-1.8,1.4-2.9,1.4c-0.8,0-1.5-0.3-2.2-0.8  c-0.2-0.2-0.5-0.4-0.7-0.6c0,0,0,0,0,0c-0.8-0.8-1.4-1.8-2-2.9c0,0,0-0.1-0.1-0.1c-0.8-1.6-1.2-3.4-1.2-4.8v0c0-2.5,1.5-4.7,3.7-5.7  c0,0,0.1,0,0.1,0c0.5-0.2,1-0.3,1.5-0.4c0.6,1.4,1.8,2.8,3.5,3.8c1,0.6,2.1,1,3.2,1.1C21.4,9.1,21.5,9.5,21.5,9.8z"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M22.5,18.4c-1.4,1.3-2.7,2.1-3.9,2.6c-0.1-0.4-0.2-0.8-0.2-1.2v0c0-0.2,0-0.4,0-0.6c0-0.6,0-1.1,0-1.3c0,0,0,0,0,0  c0.8-0.8,1.4-1.8,2-2.9l0,0c0.8-1.7,1.3-3.5,1.3-4.9V9.8c0-0.4-0.1-0.7-0.2-1.1c-1-0.1-2.1-0.5-3.2-1.1c-1.7-1-2.9-2.4-3.5-3.8  c-0.5,0.1-1,0.2-1.5,0.4c0,0-0.1,0-0.1,0c-2.2,0.9-3.7,3.1-3.7,5.7v0c0,1.4,0.4,3.1,1.2,4.8c0,0,0,0.1,0.1,0.1  c0.5,1.1,1.2,2.1,2,2.9c0,0,0,0,0,0c0,0.5,0.1,2-0.2,3.2c-1.3-0.5-2.6-1.3-3.9-2.6c-2.3-2.2-1.6-6.7-1-10.3c0.8-4.4,4-9.2,8.1-7.5  c4-1.7,7.3,3.1,8,7.5C24.1,11.6,24.8,16.2,22.5,18.4z"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M7.1,23.8c0,0-0.1,3-0.4,4.9c-0.2,1.4-0.5,2.7-0.9,4.1c-0.2,0.9-0.4,1.7-0.4,2.6"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M23.7,23.8c0,0,0.1,3.1,0.4,5c0.2,1.4,0.5,2.7,0.9,4.1c0.2,0.9,0.4,1.7,0.4,2.6"/>';
  }

  if (client_n == 2) {
    return '<path fill="#FFFFFF" d="M31.6,43.5c-0.2-4.4,0.3-8.9-0.5-13.3c-0.3-1.6-0.8-4.4-2.3-5.4c-0.6-0.4-1.7-0.7-2.4-0.8 c-0.5-0.1-1.2-0.2-1.7-0.3c-0.4-0.1-0.7-0.1-1.1-0.2c-0.2,0-0.4-0.1-0.5-0.1c-0.8-0.1-1.5-0.3-2.1-0.4c-0.1,0-0.2,0-0.3-0.1 c-0.6-0.3-1-1.3-1.2-2.1l0.6-5.4l-7.5-0.2l0.8,5.5c-0.2,0.8-0.6,1.8-1.2,2.1c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.1-1.3,0.2-2.1,0.4 c-0.2,0-0.4,0.1-0.5,0.1c-0.4,0.1-0.7,0.1-1.1,0.2C7.6,23.8,7,23.9,6.5,24c-0.7,0.1-1.8,0.4-2.4,0.8c-1.5,0.9-2,3.8-2.3,5.4 C1,34.5,1.5,39,1.3,43.4"/><g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M20.9,22.6c0,1-2,2-4.4,2s-4.4-1-4.4-2"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M6.7,36.8c0.1,0.8,0.3,1.7,0.6,2.6c0.4,1,0.7,2.3,0.9,3.6"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M26.4,36.8C26.4,36.9,26.4,36.9,26.4,36.8L26.4,36.8c-0.1,0.8-0.3,1.7-0.6,2.6c-0.4,1-0.7,2.2-0.9,3.6"/> <g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M14.2,18.1C14.1,18.1,14,18,14,18c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M8,23.4c-1.2,0.2-2.5,0.4-3.6,1c-0.8,0.5-1.1,1.3-1.4,2.1c-0.4,1-0.7,1.9-1,2.9c-0.6,1.9-1,3.9-1.3,5.8c-0.1,0.5-0.2,1-0.2,1.5 c0,0.2-0.2,1.3-0.1,1.4c0,0,0.6,0.2,1.5,0.5C3.1,39,5,39.5,6.5,39.2h0"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M26.5,39.2c1.4,0.3,3.4-0.1,4.7-0.5c0.9-0.2,1.5-0.5,1.5-0.5c0.1-0.1-0.1-1.3-0.2-1.4c-0.1-0.5-0.1-1-0.2-1.5 c-0.3-1.9-0.8-3.9-1.3-5.8c-0.3-1-0.6-1.9-1-2.9c-0.3-0.9-0.6-1.6-1.4-2.1c-1.1-0.6-2.3-0.8-3.5-1"/> <g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M26.2,33.2c0,0,0.4,1.6,0.1,3.6c0,0,0,0,0,0v0c0,0.8,0.1,1.5,0.2,2.3h0c0.1,1,0.2,1.9,0.3,2.9"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M31.4,43c0-0.3,0-0.6,0-0.9c-0.1-1.1-0.1-2.2-0.1-3.4v0"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M1.8,38.7L1.8,38.7c-0.1,1.6-0.1,2.9-0.2,4.3"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M6.2,42.1c0.1-1,0.2-1.9,0.3-2.9c0.1-0.8,0.1-1.5,0.1-2.3c-0.3-2.1,0.1-3.6,0.1-3.6"/> </g> </g></g><g> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M25.1,23.4c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.7-0.2-1.1-0.2c-0.2,0-0.4-0.1-0.6-0.1c-0.8-0.1-1.5-0.3-2.1-0.4 c-0.8-0.1-1.2-0.9-1.4-1.8c-0.3-1.2-0.3-2.7-0.2-3.2c0,0,0,0,0,0c0.8-0.8,1.4-1.8,2-2.9l0,0c0.8-1.7,1.3-3.5,1.3-4.9V9.8 c0-0.4-0.1-0.7-0.2-1.1c-1-0.1-2.1-0.5-3.2-1.1c-1.7-1-2.9-2.4-3.5-3.8c-0.5,0.1-1,0.2-1.5,0.4c0,0-0.1,0-0.1,0 c-2.2,0.9-3.7,3.1-3.7,5.7v0c0,1.4,0.5,3.1,1.2,4.8c0,0,0,0.1,0.1,0.1c0.5,1.1,1.2,2.1,1.9,2.9c0,0,0,0,0,0h0l0,0 c0,0.5,0.1,2-0.2,3.2c-0.2,0.9-0.6,1.7-1.4,1.8c-0.6,0.1-1.3,0.2-2.1,0.4c-0.2,0-0.4,0.1-0.5,0.1c-0.4,0.1-0.7,0.1-1.1,0.2 c-0.1,0-0.2,0-0.3,0.1c1.1-1.5,1.5-4.2,1.3-6c-0.4-3.3-1.7-6.4-1-9.8c0.8-4.1,4.2-8.7,8.3-7.1c4.1-1.6,7.5,3,8.3,7.1 c0.6,3.4-0.7,6.4-1.1,9.7C23.6,19.2,24,21.9,25.1,23.4z"/> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M8,23.4C7.9,23.4,7.9,23.4,8,23.4"/> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M22.6,9.8L22.6,9.8c0,1.5-0.5,3.3-1.3,5l0,0c-0.5,1.1-1.2,2.1-2,2.9c0,0,0,0,0,0c-0.9,0.9-1.8,1.4-2.9,1.4c-0.8,0-1.6-0.3-2.3-0.9 c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3h0c0,0,0,0,0,0c-0.8-0.8-1.4-1.8-1.9-2.9 c0,0-0.1-0.1-0.1-0.1c-0.8-1.6-1.2-3.4-1.2-4.8v0c0-2.5,1.5-4.7,3.7-5.7c0,0,0.1,0,0.1,0c0.5-0.2,1-0.3,1.5-0.4 c0.6,1.4,1.8,2.8,3.5,3.8c1,0.6,2.1,1,3.2,1.1C22.5,9,22.6,9.4,22.6,9.8z"/> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M13.9,17.9c-0.1-0.1-0.2-0.2-0.3-0.3l0,0C13.7,17.7,13.8,17.8,13.9,17.9z"/> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M14.2,18.1C14.1,18.1,14,18,14,18c0,0,0,0,0,0C14,18,14.1,18.1,14.2,18.1z"/></g>';
  }

  if (client_n == 3) {
    return '<path fill="#FFFFFF" d="M30.4,45.7c-0.2-4.4,0.3-8.9-0.5-13.3c-0.3-1.6-0.8-4.4-2.3-5.4c-0.6-0.4-1.7-0.7-2.4-0.8 c-0.5-0.1-1.2-0.2-1.7-0.3c-0.4-0.1-0.7-0.1-1.1-0.2c-0.2,0-0.4-0.1-0.5-0.1c-0.8-0.1-1.5-0.3-2.1-0.4c-0.1,0-0.2-0.1-0.3-0.1 c-0.6-0.3-1-1.3-1.2-2.1L18,17.6h-5.2L12.1,23c-0.2,0.8-0.6,1.8-1.2,2.1c-0.1,0-0.2,0.1-0.3,0.1c-0.6,0.1-1.3,0.2-2.1,0.4 c-0.2,0-0.4,0.1-0.5,0.1c-0.4,0.1-0.7,0.1-1.1,0.2c-0.5,0.1-1.2,0.2-1.7,0.3c-0.7,0.1-1.8,0.4-2.4,0.8c-1.5,0.9-2,3.8-2.3,5.4 c-0.8,4.3-0.3,8.8-0.5,13.2"/><g> <g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M19.8,25c0,1-2,2-4.4,2S11,26,11,25"/> </g></g><g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M25.4,37.5c0.1,2.9,0.9,6.4,1.2,9.5"/> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M23.7,45.4c0.2-1.3,0.5-2.5,0.9-3.6c0.3-0.9,0.5-1.8,0.6-2.6c0.1-0.6,0.1-1.2,0.1-1.7"/></g><g> <path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M7.1,45.4c-0.2-1.3-0.5-2.5-0.9-3.6c-0.3-0.9-0.5-1.8-0.6-2.6c-0.1-0.6-0.1-1.2-0.1-1.7c0,0,0-0.1,0-0.1c0,0,0,0.1,0,0.1 c-0.1,2.8-0.9,6.3-1.2,9.3"/></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M18.3,19.6c0,0.3,0,0.8,0,1.3c0,0.2,0,0.4,0,0.6v0c0.1,0.7,0.2,1.4,0.4,2c0.2,0.5,0.4,1.1,0.9,1.3c0.1,0,0.2,0.1,0.3,0.1 c0.6,0.1,1.3,0.2,2.1,0.4c0.2,0,0.4,0.1,0.5,0.1c0.4,0.1,0.7,0.1,1.1,0.2c0.5,0.1,1.2,0.2,1.7,0.3c0.7,0.1,1.8,0.4,2.4,0.8 c1.5,0.9,2,3.8,2.3,5.4c0.8,4.4,0.3,8.9,0.5,13.3"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M12.5,19.6c0.1,1,0,2.1-0.2,3.1c-0.2,0.8-0.5,1.8-1.2,2.3C11.1,25,11,25,10.9,25c-0.6,0.1-1.3,0.2-2.1,0.4c-0.2,0-0.4,0.1-0.5,0.1 c-0.4,0.1-0.7,0.1-1.1,0.2C6.6,25.8,6,25.9,5.4,26c-0.7,0.1-1.8,0.4-2.4,0.8c-1.5,0.9-2,3.8-2.3,5.4C0,36.6,0.4,41,0.2,45.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M8.8,25.4c-0.6,2-0.9,4.1-1.6,6.1c-0.7,1.9-1.6,3.8-1.7,5.9"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M22.1,25.4c0.6,2,0.9,4.1,1.6,6.1c0.7,1.9,1.6,3.9,1.7,6"/><g> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M22.4,10.3c0,1-0.2,2.3-0.6,3.5c-0.6,2-1.7,4-3,5.3c-1,1-2.1,1.6-3.3,1.6c-1.2,0-2.3-0.6-3.3-1.7C9.9,17,8.4,13,8.4,10.3 c0-2.7,1.6-5.1,3.9-6.3c0.9-0.5,2-0.7,3.1-0.7C19.3,3.3,22.4,6.5,22.4,10.3z"/> <g> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M12.3,4.1C12.1,3.8,12,3.4,12,3c0-1.5,1.5-2.8,3.4-2.8s3.4,1.2,3.4,2.8c0,0.4-0.1,0.7-0.2,1"/> <path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M21.8,13.9c-2.3-0.5-3.6-2.8-4.7-4.9c-1.1,2.2-4.2,4.4-8.1,4.8"/> </g></g>';
  }

  if (client_n == 4) {
    return '<path fill="#FFFFFF" d="M0.2,42.3c0.1-1.8,0.2-4,0.4-5.8c0.4-2.9,0.6-6.6,2.8-8.8c1.8-1.7,4.4-2.3,6.6-2.8c1.3-0.3,2.6-0.5,3.7-0.8c0.3,0,0.5-0.1,0.7-0.1c2.1-0.4,1.8-4.4,1.8-5.6l7.2,0.1c-0.1,1.2-0.3,5.2,1.8,5.6c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0.2,1.8,0.4,4.1,0.4,5.8"/><g><polyline fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="14.1,24.1 17,29.7 19.9,26.2 15.5,23.5 "/><polyline fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="25.7,24.1 22.7,29.7 19.9,26.2 24.3,23.5 "/></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.7,44.3l0.4-9.6c0.1,2.9,1,6.3,1.3,9.3"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.4,44c0.3-3,1.2-6.5,1.3-9.3l0.4,9.6"/><g><polyline fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="21.7,28.4 20.8,30.2 20.8,30.2 18.9,30.2 17.9,28.6 "/><line fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="18.9" y1="30.2" x2="17.8" y2="44"/><line fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="20.8" y1="30.2" x2="22" y2="44"/></g><g><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M27.1,11.9C27.1,11.9,27.1,11.9,27.1,11.9c-0.7,2.4-2,4.8-3.6,6.5c-1.1,1.1-2.4,1.8-3.7,1.8c-1.3,0-2.6-0.7-3.7-1.9c-1.7-1.8-3.1-4.5-3.7-7c0.7-0.1,1.5-0.4,2.4-1.2c1.4-1.2,2.8-2.4,4.6-3c1.5-0.5,3.7,0.1,5-0.9C24.5,6.2,27.1,9,27.1,11.9z"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M27.2,11.6c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0-2.9-2.7-5.7-2.7-5.7c-1.3,1.1-3.5,0.4-5,0.9c-1.8,0.6-3.2,1.8-4.6,3c-0.9,0.8-1.7,1.1-2.4,1.2c-1.7,0.2-2.6-1.2-2.6-1.2c0-0.1,0.8-1,0.9-1.2c0.7-1,1-2,1.2-3.2c0.4-1.9,1.9-3.6,3.6-4.6c1.8-1,3.8-1.1,5.8-0.8c1.7,0.2,3.5,1.2,4.4,2.8c0,0,1.2,0.3,2,1.8C28.6,6.3,27.6,10.4,27.2,11.6z"/></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.3,18.4c0.1,1.2,0.3,5.2-1.8,5.6c-0.2,0-0.5,0.1-0.7,0.1c-1.1,0.2-2.4,0.5-3.7,0.8c-2.3,0.5-4.9,1.1-6.6,2.8c-2.2,2.2-2.4,5.8-2.8,8.8c-0.2,1.8-0.4,4.1-0.4,5.8"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.5,18.5c-0.1,1.2-0.3,5.2,1.8,5.6c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0.2,1.8,0.4,4.1,0.4,5.8"/>';
  }

  if (client_n == 5) {
    return '<path fill="#FFFFFF" d="M0,41.8c0.1-1.8,0.2-4,0.4-5.8c0.4-2.9,0.6-6.6,2.8-8.8c1.8-1.7,4.4-2.3,6.6-2.8c1.3-0.3,2.6-0.5,3.7-0.8c0.3,0,0.5-0.1,0.7-0.1c2.1-0.4,1.8-4.4,1.8-5.6l7.2,0.1c-0.1,1.2-0.3,5.2,1.8,5.6c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0.2,1.8,0.4,4.1,0.4,5.8"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7,43.6c0.1-1.1,0.3-3.2,0.5-4.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.9,36.5c-0.2,1.8-0.3,3.7-0.4,5.5"/><g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M25.2,23.7c0,1.3-2.4,2.6-5.5,2.6s-5.5-1.3-5.5-2.6"/></g></g><g><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.8,10.9c-0.5,2.5-1.8,5.3-3.5,7.1c-1.1,1.1-2.3,1.9-3.6,1.9c-1.3,0-2.5-0.7-3.6-1.9c-1.7-1.8-3-4.6-3.5-7.1c2.1-1.9,2-5.2,2-5.2c1.4,0.5,3.2,0.9,5,0.9c1.9,0,3.6-0.3,5-0.9C24.7,5.7,24.7,9,26.8,10.9z"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M27,8.8c0,0.6-0.1,1.3-0.2,2.1c-2.1-1.9-2-5.2-2-5.2c-1.4,0.5-3.2,0.9-5,0.9c-1.9,0-3.6-0.3-5-0.9c0,0,0.1,3.3-2,5.2c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.4-0.1-1-0.2-1.4c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.3,0-4.3,0-4.3c0-2.3,1.9-4.2,4.2-4.2h6.2c2.3,0,4.2,1.9,4.2,4.2C27,4.5,27,8.7,27,8.8z"/></g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.1,18c0.1,1.2,0.3,5.3-1.8,5.7c-0.2,0-0.5,0.1-0.7,0.1c-1.1,0.2-2.4,0.5-3.7,0.8c-2.3,0.5-4.9,1.1-6.6,2.8c-2.2,2.2-2.4,5.8-2.8,8.8c0,0,4.5,3,7.3,3c0,0,0.4-3.1,0.7-4.9l0.4,9.6"/><g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.9,39.2c0.2,1.1,0.3,3.3,0.5,4.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M38.4,36.5c0.2,1.8,0.3,3.7,0.4,5.5"/></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.3,18c-0.1,1.2-0.3,5.3,1.8,5.7c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0,0-4.5,3-7.3,3c0,0-0.4-3.1-0.7-4.9l-0.4,9.6"/></g></g>';
  }

  if (client_n == 6) {
    return '<path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.3,13.6c-0.2-0.5-0.9-2.5-1.1-3.1c-0.6-2-0.8-4.4,0.3-6.2c1.6-2.5,3.4-3.9,6.5-4.1c1.3-0.1,4.4,0.2,5,1.4c0,0,0.6,0.1,0.6,0.1c0.5,0.1,1,0.3,1.4,0.6c1,0.8,1.3,2.3,1.3,3.5c0.1,1.6-0.2,3.3-0.5,4.9c0,0.1-0.2,0.9-0.4,1.5l-0.2,0.9c0,0,0,0-0.1-0.1"/><path fill="#FFFFFF" d="M0,43.1c0.1-1.8,0.2-4,0.4-5.8c0.4-2.9,0.6-6.6,2.8-8.8c1.8-1.7,4.4-2.3,6.6-2.8c1.3-0.3,2.6-0.5,3.7-0.8c0.3,0,0.5-0.1,0.7-0.1c2.1-0.4,1.8-4.4,1.8-5.6l7.2,0.1c-0.1,1.2-0.3,5.2,1.8,5.6c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0.2,1.8,0.4,4.1,0.4,5.8"/><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.1,44.7c0.1-1.1,0.3-3.2,0.5-4.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1,37.6c-0.2,1.8-0.3,3.7-0.4,5.5"/><g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M25.2,24.8c0,0.9-2.7,6.1-4.3,7.8c-0.6,0.7-1.7,0.7-2.4,0c-1.6-1.7-4.3-6.9-4.3-7.8"/></g></g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M16.2,19.1c0.1,1.2,0.3,5.3-1.8,5.7c-0.2,0-0.5,0.1-0.7,0.1c-1.1,0.2-2.4,0.5-3.7,0.8c-2.3,0.5-4.9,1.1-6.6,2.8c-2.2,2.2-2.4,5.8-2.8,8.8c0,0,4.5,3,7.3,3c0,0,0.4-3.1,0.7-4.9L9,45"/><g><g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M32,40.3c0.2,1.1,0.3,3.3,0.5,4.4"/><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M38.5,37.6c0.2,1.8,0.3,3.7,0.4,5.5"/></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.3,19.1c-0.1,1.2-0.3,5.2,1.8,5.6c0.2,0,0.5,0.1,0.7,0.1c1.1,0.2,2.4,0.5,3.7,0.8c2.3,0.5,4.9,1.1,6.6,2.8c2.2,2.2,2.4,5.8,2.8,8.8c0,0-4.5,3-7.3,3c0,0-0.4-3.1-0.7-4.9L30.5,45"/></g></g></g><path fill="none" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M24.3,6.5c0,0-2,1.1-3.1,1.1c-1.1,0-4.4,0.6-5.3,2.1c-0.7,1.3-2.3,3.4-2.6,3.9"/><path fill="#FFFFFF" stroke="#221F1F" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.2,13.2c-0.3-0.2-0.9-0.7-1-1.4c-0.1-1,0-1.9-0.2-2.9c-0.1-0.8-0.5-1.6-0.7-2.4c0,0-2,1.1-3.1,1.1c-1.1,0-4.4,0.6-5.3,2.1c-0.7,1.3-2.3,3.4-2.6,3.9c0.2,0.8,0.5,1.7,0.9,2.5c0,0,0,0.1,0.1,0.1c0.6,1.2,1.3,2.4,2.2,3.3l0.6,0.6c0.8,0.7,1.7,1,2.6,1c0.9,0,1.8-0.4,2.6-1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.4-0.4c0.9-0.9,1.6-2,2.2-3.3c0,0,0-0.1,0.1-0.1c0.4-0.9,0.8-1.9,1-2.9"/>';
  }
}
