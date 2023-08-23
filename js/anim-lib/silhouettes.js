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

  // dress -> drawer
  if (form_n == 1) {
    return (
      "M" +
      (x + 2) +
      "," +
      (y + 20) +
      "l0,1.156l2.738,0l0,-1.156l10.012,0l0,1.156l2.738,0l0,-1.156l0.743,0l0,-20.633l-17,0l0,20.633zm3.02,0.707l-1.817,0l0,-0.707l1.817,0zm12.777,0l-1.82,0l0,-0.707l1.82,0zm-15.313,-20.891l16.055,0l0,19.735l-16.054,0zm14.566,1.461l-13.082,0l0,4.598l13.082,0zm-0.484,4.145l-12.137,0l0,-3.696l12.137,0zm0.484,8.07l-13.082,0l0,4.598l13.082,0zm-0.484,4.148l-12.137,0l0,-3.695l12.137,0zm0.484,-10.383l-13.082,0l0,4.625l13.082,0zm-0.484,4.172l-12.137,0l0,-3.695l12.137,0zm-4.301,-2.188l-0.461,0.001l0,0.554l-2.433,0l0,-0.554l-0.485,0l0,1.007l3.379,0zm0,6.16l-0.461,0l0,0.527l-2.434,0l0,-0.527l-0.484,0l0,1.004l3.379,0zm0,-12.141l-0.461,0l0,0.555l-2.434,0l0,-0.555l-0.484,0l0,1.004l3.379,0zm0,0"
    );
  }

  // trousers -> curved-legs-table
  if (form_n == 2) {
    return (
      "M" +
      (x + 12) +
      "," +
      (y + 10) +
      "c-0.203,0,-0.356,-0.152,-0.356,-0.352c0,-0.964,0.785,-1.75,1.746,-1.75l4.887,0c0.961,0,1.746,0.786,1.746,1.75c0,0.176,-0.152,0.352,-0.328,0.352zm-7.293,-0.707l6.863,0c-0.152,-0.406,-0.531,-0.711,-0.988,-0.711l-4.887,0c-0.457,0,-0.836,0.305,-0.988,0.711zm3.445,-0.711c-0.203,0,-0.355,-0.152,-0.355,-0.351l0,-3.469c0,-0.203,0.152,-0.356,0.355,-0.356c0.203,0,0.352,0.153,0.352,0.356l0,3.492c0,0.176,-0.176,0.328,-0.352,0.328zm2.785,-3.492l-5.598,0c-0.125,0,-0.226,-0.051,-0.3,-0.153c-0.078,-0.101,-0.078,-0.226,-0.028,-0.328l0.102,-0.254c0.559,-1.773,0.559,-2.457,0.559,-4.507c0,-0.2,0.152,-0.352,0.351,-0.352l4.203,0c0.203,0,0.356,0.152,0.356,0.352c0,2.05,0,2.734,0.558,4.507l0.098,0.254c0.051,0.102,0.051,0.227,-0.024,0.328c-0.05,0.102,-0.152,0.153,-0.277,0.153zm-5.09,-0.684l4.582,0c-0.508,-1.644,-0.531,-2.429,-0.531,-4.203l-3.492,0c0,1.746,-0.051,2.559,-0.559,4.203zm4.051,10.48c-0.051,0,-0.102,-0.023,-0.153,-0.05c0,0,-2.355,-1.215,-4.707,-2.43c-1.191,-0.609,-2.355,-1.215,-3.242,-1.672c-1.672,-0.859,-1.672,-0.859,-1.672,-1.086c0,-0.203,0.153,-0.355,0.356,-0.355l17.797,0c0.152,0,0.304,0.101,0.328,0.254c0.051,0.148,-0.024,0.3,-0.149,0.402l-8.382,4.887c-0.051,0.027,-0.125,0.05,-0.176,0.05zm-8.027,-4.887c1.851,0.965,5.367,2.785,8.027,4.153l7.113,-4.153zm17.801,1.395l-3.699,0c-0.149,0,-0.301,-0.102,-0.329,-0.254c-0.05,-0.153,0.028,-0.305,0.153,-0.407l2.304,-1.39c0.051,-0.028,0.125,-0.051,0.176,-0.051l1.395,0c0.199,0,0.351,0.152,0.351,0.355l0,1.391c0,0.203,-0.152,0.356,-0.351,0.356zm-2.434,-0.711l2.102,0l0,-0.707l-0.961,0zm-14.098,0.711l-3.722,0c-0.203,0,-0.356,-0.152,-0.356,-0.356l0,-1.39c0,-0.203,0.153,-0.356,0.356,-0.356l1.039,0c0.074,0,0.125,0.024,0.199,0.051c0.051,0.024,0.484,0.254,2.633,1.367c0.152,0.075,0.23,0.227,0.179,0.403c-0.05,0.152,-0.179,0.281,-0.328,0.281zm-3.395,-0.711l1.95,0c-0.91,-0.48,-1.215,-0.633,-1.34,-0.707l-0.61,0zm19.926,9.797l-0.356,0c-0.406,0,-0.761,-0.176,-1.09,-0.504c-1.265,-1.316,-1.722,-4.887,-1.695,-5.797c0.051,-1.648,-0.609,-2.406,-1.012,-2.711c-0.101,-0.074,-0.152,-0.176,-0.152,-0.305c0,-0.125,0.074,-0.226,0.176,-0.277l0.254,-0.152c0.051,-0.024,0.125,-0.051,0.176,-0.051l1.597,0c0.074,0,0.153,0.027,0.203,0.078c0.582,0.43,1.086,1.719,0.832,3.469c-0.199,1.418,0.102,2.656,0.332,3.289c0,0,0,0.027,0.024,0.051l1.039,2.429c0.051,0.102,0.023,0.231,-0.027,0.329c-0.075,0.078,-0.176,0.152,-0.301,0.152zm-3.242,-9.086c0.43,0.531,0.836,1.391,0.785,2.809c-0.027,0.886,0.457,4.175,1.52,5.265c0.125,0.129,0.253,0.227,0.406,0.278l-0.836,-1.922c0,-0.028,-0.028,-0.028,-0.028,-0.051c-0.226,-0.711,-0.582,-2.078,-0.355,-3.621c0.203,-1.442,-0.148,-2.406,-0.48,-2.734zm-16.684,9.086l-0.355,0c-0.125,0,-0.227,-0.051,-0.301,-0.152c-0.078,-0.098,-0.078,-0.227,-0.027,-0.329l1.039,-2.429c0,-0.024,0,-0.024,0.023,-0.051c0.203,-0.633,0.532,-1.871,0.332,-3.289c-0.254,-1.774,0.25,-3.039,0.832,-3.469c0.051,-0.051,0.129,-0.078,0.204,-0.078l1.621,0c0.05,0,0.101,0.027,0.152,0.051l0.254,0.129c0.101,0.051,0.176,0.148,0.176,0.277c0,0.125,-0.051,0.227,-0.153,0.305c-0.328,0.226,-1.086,0.961,-1.039,2.707c0.028,0.91,-0.429,4.48,-1.695,5.797c-0.305,0.355,-0.656,0.531,-1.063,0.531zm1.063,-2.734c0,0.027,0,0.05,-0.024,0.078l-0.836,1.922c0.125,-0.051,0.254,-0.125,0.406,-0.278c1.063,-1.09,1.543,-4.379,1.516,-5.265c-0.047,-1.418,0.383,-2.305,0.813,-2.809l-1.012,0c-0.332,0.328,-0.711,1.289,-0.485,2.734c0.18,1.567,-0.148,2.934,-0.378,3.618zm7.016,-3.922c-0.051,0,-0.102,-0.027,-0.153,-0.051l-2.812,-1.445c-0.102,-0.047,-0.176,-0.176,-0.176,-0.277c0,-0.125,0.051,-0.254,0.152,-0.305l3.469,-2.379c0.051,-0.051,0.125,-0.051,0.199,-0.051l5.598,0c0.152,0,0.305,0.102,0.328,0.254c0.051,0.153,-0.023,0.305,-0.152,0.406l-6.254,3.821c-0.074,0,-0.125,0.027,-0.199,0.027zm-2.129,-1.848l2.102,1.086l5.039,-3.062l-4.254,0zm10.836,-1.977l-2.102,0c-0.203,0,-0.355,-0.152,-0.355,-0.351l0,-5.953c0,-0.199,0.152,-0.352,0.355,-0.352l2.102,0c0.203,0,0.355,0.153,0.355,0.352l0,5.953c0,0.176,-0.152,0.351,-0.355,0.351zm-1.746,-0.707l1.391,0l0,-5.242l-1.391,0zm3.848,0.707l-2.102,0c-0.203,0,-0.355,-0.152,-0.355,-0.355l0,-4.2c0,-0.203,0.152,-0.355,0.355,-0.355l2.102,0c0.203,0,0.355,0.152,0.355,0.355l0,4.2c0,0.179,-0.152,0.355,-0.355,0.355zm-1.746,-0.707l1.391,0l0,-3.496l-1.391,0zm0,0"
    );
  }

  // shorts -> medium-cupboard
  if (form_n == 3) {
    return (
      "M" +
      (x + 17.8) +
      "," +
      (y + 4) +
      "l-16.523,0c-0.145,0,-0.239,0.098,-0.239,0.242c0,0.149,0.094,0.246,0.239,0.246l0.238,0l0,12.856c0,0.148,0.094,0.246,0.238,0.246l0.36,0l0,0.98c0,0.145,0.093,0.242,0.238,0.242l2.383,0c0.144,0,0.238,-0.097,0.238,-0.242l0,-0.98l9.133,0l0,0.98c0,0.145,0.093,0.242,0.238,0.242l2.383,0c0.144,0,0.238,-0.097,0.238,-0.242l0,-0.98l0.359,0c0.145,0,0.239,-0.098,0.239,-0.246l0,-12.856l0.238,0c0.145,0,0.238,-0.097,0.238,-0.246c0,-0.144,-0.121,-0.242,-0.238,-0.242zm-8.512,0.488l0,3.258l-7.297,0l0,-3.258zm-7.297,3.746l7.297,0l0,8.863l-7.297,0zm2.48,10.09l-1.906,0l0,-0.735l1.906,0zm11.992,0l-1.906,0l0,-0.734l1.906,0zm0.238,-1.227l-6.937,0l0,-8.863l7.297,0l0,8.863zm0.359,-9.352l-7.296,0l-0.001,-3.257l7.297,0zm-5.984,3.477c-0.145,0,-0.239,0.097,-0.239,0.246l0,1.246c0,0.148,0.094,0.246,0.239,0.246c0.14,0,0.238,-0.098,0.238,-0.246l0,-1.246c0,-0.149,-0.098,-0.246,-0.238,-0.246zm-3.102,1.715c0.145,0,0.239,-0.098,0.239,-0.246l0,-1.25c0,-0.145,-0.094,-0.242,-0.239,-0.242c-0.14,0,-0.238,0.097,-0.238,0.242l0,1.25c0,0.148,0.098,0.246,0.238,0.246zm-2.336,-6.367c0.238,0,0.43,-0.196,0.43,-0.442c0,-0.246,-0.192,-0.441,-0.43,-0.441c-0.238,0,-0.43,0.195,-0.43,0.441c0,0.247,0.192,0.442,0.43,0.442zm0,-0.488c0.023,0,0.047,0.023,0.047,0.047c0,0.05,-0.094,0.05,-0.094,0c0,-0.024,0.024,-0.047,0.047,-0.047zm7.773,0.488c0.239,0,0.43,-0.195,0.43,-0.441c0,-0.246,-0.191,-0.442,-0.43,-0.442c-0.238,0,-0.429,0.196,-0.429,0.442c0,0.246,0.191,0.441,0.429,0.441zm0,-0.488c0.023,0,0.047,0.023,0.047,0.047c0,0.05,-0.094,0.05,-0.094,0c0,-0.024,0.024,-0.047,0.047,-0.047zm0,0"
    );
  }

  // skirt -> modern-chair
  if (form_n == 4) {
    return (
      "M" +
      (x + 5) +
      "," +
      (y + 13) +
      "c0.074,0,0.176,0.023,0.277,0.023c-0.379,0.293,-0.679,0.68,-0.804,1.067l0,0.027l-1.762,6.18c-0.074,0.219,0.074,0.461,0.301,0.535c0.05,0,0.078,0.023,0.129,0.023c0.199,0,0.375,-0.121,0.425,-0.316l1.762,-6.18c0.199,-0.582,0.953,-1.093,1.711,-1.164c-0.129,0.168,-0.227,0.364,-0.277,0.555l-0.957,4.488c-0.024,0.168,0.074,0.336,0.254,0.387c0.023,0,0.046,0,0.074,0c0.148,0,0.301,-0.098,0.328,-0.266l0.953,-4.461c0.078,-0.269,0.277,-0.535,0.504,-0.679c0.555,0.023,1.156,0.023,1.734,0.023c0.606,0,1.184,0,1.762,-0.023c0.227,0.144,0.426,0.41,0.504,0.679l0.953,4.485c0.027,0.144,0.18,0.265,0.328,0.265c0.028,0,0.051,0,0.074,0c0.18,-0.023,0.305,-0.195,0.254,-0.386l-0.957,-4.485c-0.05,-0.195,-0.148,-0.39,-0.25,-0.558c0.731,0.074,1.508,0.582,1.711,1.164l1.758,6.179c0.051,0.196,0.227,0.317,0.43,0.317c0.051,0,0.074,0,0.125,-0.024c0.226,-0.074,0.379,-0.293,0.301,-0.535l-1.758,-6.179l0,-0.024c-0.153,-0.414,-0.43,-0.777,-0.805,-1.07c0.098,0,0.176,-0.024,0.273,-0.024c1.586,-0.218,2.239,-0.507,2.317,-1.015c0.074,-0.61,-0.707,-0.899,-1.461,-1.117c-2.387,-0.653,-2.742,-1.09,-2.789,-1.262c-0.051,-0.215,0.449,-0.703,0.902,-1.113c0.555,-0.536,1.258,-1.164,1.688,-1.989c0.855,-1.648,0.504,-2.789,0.074,-3.465c-1.031,-1.601,-3.52,-2.183,-5.356,-2.183c-1.835,0,-4.328,0.558,-5.359,2.183c-0.426,0.676,-0.777,1.817,0.074,3.465c0.379,0.727,0.934,1.309,1.434,1.844c0.48,0.508,0.984,1.016,0.883,1.309c-0.051,0.218,-0.481,0.652,-2.543,1.211c-0.778,0.218,-1.559,0.507,-1.457,1.117c0,0.484,0.652,0.773,2.238,0.992zm-0.602,-1.309c1.985,-0.558,2.914,-1.089,3.141,-1.793c0.227,-0.753,-0.375,-1.382,-1.078,-2.109c-0.453,-0.484,-0.984,-1.019,-1.309,-1.648c-0.527,-1.043,-0.578,-1.918,-0.101,-2.645c0.781,-1.211,2.89,-1.769,4.601,-1.769c1.711,0,3.825,0.558,4.606,1.769c0.449,0.727,0.426,1.602,-0.102,2.645c-0.351,0.703,-0.957,1.257,-1.511,1.769c-0.704,0.652,-1.332,1.235,-1.129,1.938c0.175,0.726,1.129,1.238,3.394,1.867c0.277,0.074,0.477,0.144,0.606,0.195c-0.504,0.168,-1.637,0.363,-3.321,0.461c-0.027,0,-0.078,0,-0.101,0c-0.051,0,-0.074,0,-0.102,0.024c-0.679,0.023,-1.457,0.046,-2.312,0.046c-0.856,0,-1.637,-0.023,-2.317,-0.046c-0.023,0,-0.074,-0.024,-0.097,-0.024c-0.028,0,-0.079,0,-0.102,0c-1.687,-0.098,-2.816,-0.293,-3.32,-0.461c0.074,-0.074,0.25,-0.144,0.554,-0.219zm0,0"
    );
  }

  // sweater -> round-table-straight
  if (form_n == 5) {
    return (
      "M" +
      (x) +
      "," +
      (y + 11) +
      "l-0.25,9.938l1.074,0l0.824,-9.254c2.125,0.636,5.352,0.992,8.602,1.043l0.25,5.621l0.973,0l0.25,-5.594c3.351,-0.027,6.777,-0.383,8.976,-1.043l0.824,9.254l1.102,0l-0.25,-9.942c0.5,-0.304,0.773,-0.636,0.773,-1.015l0,-1.274c0,-1.804,-6.148,-2.769,-11.949,-2.769c-5.801,0,-11.949,0.965,-11.949,2.746l0,1.269c0,0.383,0.273,0.715,0.75,1.02zm0.375,9.43l-0.125,0l0.223,-9.176c0.203,0.101,0.425,0.176,0.675,0.277zm10.625,-2.594l-0.25,-5.082l0.473,0zm11.098,2.594l-0.125,0l-0.797,-8.899c0.25,-0.074,0.472,-0.175,0.672,-0.277zm0.527,-10.449c0,0.941,-4.351,2.265,-11.449,2.265c-7.101,0,-11.453,-1.324,-11.453,-2.265l0,-0.406l0.051,0.05l0.074,0.051l0.078,0.051l0.149,0.101l0.101,0.051l0.098,0.051l0.101,0.051l0.098,0.051l0.203,0.101l0.5,0.203l0.149,0.051l0.125,0.051l0.148,0.054l0.152,0.051l0.149,0.051l0.152,0.023l0.149,0.051l0.148,0.028l0.176,0.05l0.152,0.024l0.172,0.027l0.152,0.024l0.176,0.027l0.172,0.023l0.203,0.028l0.172,0.023l0.203,0.028l0.172,0.023l0.203,0.027l0.199,0.024l0.2,0.027l0.199,0.024l0.199,0.027l0.203,0.023l0.223,0.028l0.199,0.023l0.227,0.027l0.226,0.024l0.223,0.027l0.226,0.024l0.223,0.027l0.227,0.023l0.226,0.028l0.25,0.023l0.223,0.028l0.25,0.023l0.199,0l0.25,0.027l5.352,0l0.273,-0.027l0.203,0l0.274,-0.023l0.199,-0.028l0.25,-0.023l0.199,-0.028l0.25,-0.023l0.203,-0.027l0.25,-0.024l0.199,-0.027l0.25,-0.024l0.2,-0.027l0.226,-0.023l0.199,-0.028l0.223,-0.023l0.203,-0.027l0.223,-0.024l0.199,-0.027l0.203,-0.024l0.172,-0.027l0.203,-0.023l0.172,-0.028l0.203,-0.023l0.172,-0.028l0.203,-0.023l0.149,-0.027l0.175,-0.024l0.149,-0.027l0.176,-0.024l0.148,-0.027l0.176,-0.051l0.152,-0.05l0.297,-0.102l0.152,-0.051l0.149,-0.051l0.152,-0.05l0.75,-0.305l0.098,-0.051l0.101,-0.051l0.098,-0.05l0.203,-0.102l0.297,-0.203l0.051,-0.051zm-11.449,-3.531c7.097,0,11.449,1.32,11.449,2.261c-0.027,0.176,-0.125,0.333,-0.277,0.434c-1.274,1.066,-5.973,1.828,-11.149,1.828c-5.176,0,-9.875,-0.762,-11.148,-1.804c-0.153,-0.102,-0.25,-0.254,-0.278,-0.434c-0.023,-0.965,4.325,-2.285,11.403,-2.285zm0,0"
    );
  }

  // thin dress -> round-table
  if (form_n == 6) {
    return (
      "M" +
      (x + 21.7) +
      "," +
      (y + 11) +
      "c0.395,-0.277,0.59,-0.582,0.59,-0.91l0,-1.266c0,-1.801,-6.059,-2.761,-11.774,-2.761c-5.714,0,-11.773,0.96,-11.773,2.761l0,1.266c0,0.351,0.246,0.68,0.664,0.961l-0.172,0.277c-0.668,1.063,-0.812,2.356,-0.422,3.543l0.543,1.672c0.149,0.48,0.223,0.988,0.172,1.52l-0.269,2.96l1.082,0l0.468,-2.91c0.102,-0.582,0.075,-1.164,-0.097,-1.75l-0.344,-1.363c-0.297,-1.141,-0.051,-2.355,0.687,-3.242c2.094,0.66,5.348,1.012,8.598,1.062l0.246,5.594l0.961,0l0.246,-5.566c3.399,-0.051,6.875,-0.43,9.043,-1.114c0.738,0.911,1.008,2.125,0.711,3.266l-0.367,1.363c-0.148,0.559,-0.172,1.168,-0.098,1.75l0.465,2.91l1.086,0l-0.269,-2.988c-0.051,-0.504,0,-1.012,0.171,-1.492l0.539,-1.672c0.395,-1.187,0.223,-2.48,-0.417,-3.543zm-11.16,-4.43c6.996,0,11.281,1.317,11.281,2.254c-0.023,0.176,-0.121,0.328,-0.269,0.43c-1.258,1.035,-5.887,1.82,-10.989,1.82c-5.097,0,-9.726,-0.758,-10.984,-1.82c-0.149,-0.102,-0.246,-0.254,-0.27,-0.43c-0.05,-0.937,4.235,-2.254,11.231,-2.254zm-11.281,3.113l0.051,0.051l0.074,0.051l0.07,0.051l0.074,0.05l0.102,0.051l0.293,0.153l0.097,0.046l0.102,0.051l0.098,0.051l0.121,0.051l0.25,0.101l0.121,0.051l0.125,0.051l0.121,0.051l0.445,0.152l0.145,0.051l0.297,0.101l0.172,0.051l0.148,0.024l0.172,0.05l0.148,0.028l0.172,0.023l0.172,0.027l0.176,0.051l0.172,0.024l0.195,0.027l0.172,0.023l0.199,0.028l0.195,0.023l0.2,0.028l0.195,0.023l0.199,0.027l0.195,0.024l0.223,0.027l0.195,0.024l0.223,0.023l0.223,0.027l0.219,0.024l0.222,0.027l0.223,0.024l0.222,0.027l0.219,0.023l0.246,0.028l0.223,0.023l0.246,0.028l0.199,0l0.246,0.023l5.715,0l0.27,-0.023l0.199,-0.028l0.246,-0.023l0.195,-0.028l0.246,-0.023l0.2,-0.027l0.246,-0.024l0.195,-0.027l0.246,-0.024l0.199,-0.027l0.219,-0.023l0.199,-0.024l0.223,-0.027l0.195,-0.024l0.223,-0.027l0.195,-0.023l0.2,-0.028l0.171,-0.023l0.196,-0.028l0.172,-0.023l0.199,-0.027l0.172,-0.024l0.199,-0.027l0.172,-0.024l0.172,-0.05l0.148,-0.028l0.172,-0.023l0.148,-0.051l0.172,-0.051l0.149,-0.05l0.144,-0.051l0.297,-0.102l0.125,-0.051l0.145,-0.05l0.25,-0.102l0.121,-0.051l0.125,-0.05l0.121,-0.051l0.125,-0.051l0.195,-0.102l0.098,-0.046l0.101,-0.051l0.098,-0.051l0.223,-0.152l0.07,-0.051l0.051,-0.027l0,0.406c0,0.937,-4.285,2.254,-11.281,2.254c-6.997,0,-11.282,-1.293,-11.282,-2.231l0,-0.504zm0.59,5.441l0.371,1.368c0.121,0.504,0.148,1.011,0.074,1.519l-0.394,2.481l-0.125,0l0.222,-2.407c0.051,-0.582,0,-1.164,-0.195,-1.722l-0.543,-1.668c-0.344,-1.039,-0.195,-2.176,0.371,-3.114l0.195,-0.304c0.223,0.101,0.446,0.203,0.664,0.277c-0.714,1.039,-0.96,2.356,-0.64,3.57zm10.496,2.785l-0.246,-5.062l0.465,0zm11.527,-3.191l-0.543,1.671c-0.172,0.559,-0.246,1.141,-0.195,1.723l0.223,2.402l-0.125,0l-0.395,-2.48c-0.074,-0.504,-0.047,-1.012,0.074,-1.52l0.371,-1.367c0.321,-1.238,0.075,-2.554,-0.691,-3.566c0.223,-0.078,0.445,-0.18,0.664,-0.305l0.223,0.356c0.59,0.886,0.738,2.023,0.394,3.086zm-20.52,-5.313c1.11,0.657,4.805,1.086,9.165,1.086c4.359,0,8.054,-0.453,9.164,-1.113c0.269,-0.152,0.418,-0.355,0.418,-0.582c0,-1.644,-9.188,-1.672,-9.582,-1.672c-0.395,0,-9.582,0.028,-9.582,1.672c0,0.227,0.148,0.43,0.417,0.609zm9.188,-1.75c5.738,0,8.917,0.734,9.089,1.168c-0.047,0.047,-0.097,0.098,-0.172,0.148c-1.011,0.61,-4.777,1.039,-8.918,1.039c-4.136,0,-7.906,-0.429,-8.917,-1.039c-0.075,-0.023,-0.122,-0.074,-0.172,-0.125c0.125,-0.457,3.3,-1.191,9.089,-1.191zm0,0"
    );
  }

  // mens pants -> shave-mirror
  if (form_n == 7) {
    return (
      "M" +
      (x + 10) +
      "," +
      (y + 13.4) +
      "c-4.375,0,-7.914,-3.508,-7.914,-7.789l0.707,0c0,3.906,3.238,7.094,7.207,7.094c3.969,0,7.207,-3.188,7.207,-7.094l0.707,0c0.027,4.305,-3.539,7.789,-7.914,7.789zm0,-1.766c-3.363,0,-6.117,-2.714,-6.117,-6.023c0,-3.309,2.754,-6.024,6.117,-6.024c3.363,0,6.117,2.715,6.117,6.024c0,3.309,-2.73,6.023,-6.117,6.023zm0,-11.352c-2.984,0,-5.41,2.391,-5.41,5.329c0,2.937,2.426,5.328,5.41,5.328c2.984,0,5.41,-2.391,5.41,-5.328c0,-2.938,-2.426,-5.329,-5.41,-5.329zm-3.238,5.328l-0.707,0c0,-2.141,1.769,-3.906,3.968,-3.906l0,0.695c-1.793,0.024,-3.261,1.446,-3.261,3.211zm9.863,1.195c-0.683,0,-1.265,-0.547,-1.265,-1.246c0,-0.672,0.558,-1.242,1.265,-1.242c0.684,0,1.266,0.547,1.266,1.242c0,0.699,-0.559,1.246,-1.266,1.246zm0,-1.77c-0.305,0,-0.531,0.25,-0.531,0.524c0,0.301,0.254,0.523,0.531,0.523c0.305,0,0.531,-0.25,0.531,-0.523c0.024,-0.274,-0.226,-0.524,-0.531,-0.524zm-13.273,1.645c-0.684,0,-1.266,-0.547,-1.266,-1.247c0,-0.695,0.555,-1.242,1.266,-1.242c0.679,0,1.261,0.547,1.261,1.242c0,0.7,-0.582,1.247,-1.261,1.247zm0,-1.793c-0.305,0,-0.531,0.25,-0.531,0.523c0,0.274,0.25,0.524,0.531,0.524c0.277,0,0.531,-0.25,0.531,-0.524c0,-0.273,-0.23,-0.523,-0.531,-0.523zm8.875,11.699l-4.453,0l-0.402,-3.859l0.734,-0.074l0.328,3.238l3.16,0l0.328,-3.238l0.707,0.074zm1.742,-0.695l-7.914,0l0,0.695l7.914,0zm0,0"
    );
  }

  // mens shorts -> sofa-double
  if (form_n == 8) {
    return (
      "M" +
      (x + 22) +
      "," +
      (y + 9.7) +
      "l-1.332,0c-0.617,-2.262,-2.641,-3.887,-4.961,-3.887l-8.586,0c-2.32,0,-4.344,1.625,-4.961,3.887l-1.332,0c-0.195,0,-0.371,0.18,-0.371,0.383l0,9.347c0,0.204,0.176,0.383,0.371,0.383l21.172,0c0.195,0,0.371,-0.179,0.371,-0.383l0,-9.347c0,-0.203,-0.148,-0.383,-0.371,-0.383zm-2.074,0.102c-0.074,0.027,-0.121,0.05,-0.196,0.078c-0.027,0,-0.05,0.023,-0.074,0.023c-0.101,0.051,-0.199,0.102,-0.273,0.18c-0.024,0.023,-0.047,0.023,-0.047,0.051c-0.074,0.05,-0.125,0.101,-0.176,0.175c-0.023,0.028,-0.047,0.051,-0.074,0.102c-0.047,0.051,-0.098,0.102,-0.121,0.18c-0.024,0.023,-0.051,0.074,-0.074,0.101c-0.024,0.051,-0.075,0.125,-0.098,0.176c-0.027,0.051,-0.027,0.078,-0.051,0.129c-0.023,0.074,-0.051,0.152,-0.074,0.226c0,0.028,-0.023,0.079,-0.023,0.102c-0.028,0.105,-0.028,0.23,-0.028,0.359l0,3.481l-6.808,0l0,-8.563l3.898,0c1.926,-0.027,3.652,1.321,4.219,3.2zm-12.805,-3.227l3.899,0l0,8.563l-6.809,0l0,-3.481c0,-0.125,-0.027,-0.226,-0.027,-0.355c0,-0.051,-0.024,-0.078,-0.024,-0.102c-0.023,-0.078,-0.023,-0.152,-0.05,-0.203c-0.024,-0.05,-0.024,-0.078,-0.047,-0.129c-0.028,-0.05,-0.051,-0.101,-0.075,-0.175c-0.027,-0.051,-0.05,-0.102,-0.074,-0.129c-0.027,-0.051,-0.051,-0.074,-0.101,-0.125c-0.047,-0.051,-0.071,-0.102,-0.121,-0.153c-0.024,-0.027,-0.051,-0.05,-0.075,-0.078c-0.199,-0.176,-0.418,-0.328,-0.668,-0.406c-0.023,0,-0.023,0,-0.046,-0.023c0.566,-1.856,2.269,-3.204,4.218,-3.204zm-5.922,3.914l1.207,0c0.594,0.051,1.063,0.559,1.063,1.195l0,7.368l-2.27,0zm3.012,5.438l14.359,0l0,3.125l-14.387,0l0,-3.125zm17.418,3.125l-2.27,0l0,-7.367c0,-0.613,0.469,-1.145,1.063,-1.196l1.207,0zm0,0"
    );
  }

  // mens t-shirt -> sofa-lamp
  if (form_n == 9) {
    return (
      "M" +
      (x + 18) +
      "," +
      (y + 10.4) +
      "l-0.352,0l0,-3.559c0,-1.402,-1.101,-2.503,-2.503,-2.503l-4.989,0c-1.402,0,-2.504,1.101,-2.504,2.503l0,3.559l-0.351,0c-0.574,0,-1.078,0.477,-1.078,1.078l0,4.988c0,0.598,0.504,1.075,1.078,1.075l0.351,0c0,0.601,0.5,1.078,1.078,1.078l0.7,0c0.601,0,1.078,-0.477,1.078,-1.078l4.285,0c0,0.601,0.477,1.078,1.078,1.078l0.703,0c0.602,0,1.074,-0.477,1.074,-1.078l0.352,0c0.602,0,1.078,-0.477,1.078,-1.075l0,-4.988c-0.023,-0.625,-0.476,-1.078,-1.078,-1.078zm-9.645,-3.582c0,-1.004,0.774,-1.777,1.778,-1.777l4.988,0c1,0,1.777,0.773,1.777,1.777l0,3.559c-0.601,0,-1.078,0.476,-1.078,1.078l0,0.523c-0.226,-0.098,-0.476,-0.176,-0.699,-0.176l-4.988,0c-0.25,0,-0.5,0.078,-0.703,0.176l0,-0.523c0,-0.602,-0.5,-1.078,-1.075,-1.078zm7.492,6.414l0,1.43l-6.418,0l0,-1.43c0,-0.402,0.328,-0.703,0.703,-0.703l4.989,0c0.425,0,0.726,0.328,0.726,0.703zm-8.547,3.582c-0.176,0,-0.351,-0.176,-0.351,-0.348l0,-4.988c0,-0.176,0.175,-0.351,0.351,-0.351l1.078,0c0.176,0,0.352,0.175,0.352,0.351l0,4.988c0,0.172,-0.176,0.348,-0.352,0.348zm2.129,1.078l-0.699,0c-0.176,0,-0.352,-0.176,-0.352,-0.351c0.25,0,0.527,-0.098,0.703,-0.274c0.176,0.176,0.477,0.274,0.699,0.274c0,0.152,-0.175,0.351,-0.351,0.351zm0.352,-1.078c-0.176,0,-0.352,-0.176,-0.352,-0.348l0,-1.078l6.418,0l0,1.078c0,0.172,-0.176,0.348,-0.352,0.348zm6.793,1.078l-0.703,0c-0.176,0,-0.352,-0.176,-0.352,-0.351c0.25,0,0.528,-0.098,0.703,-0.274c0.176,0.176,0.477,0.274,0.7,0.274c0,0.152,-0.176,0.351,-0.348,0.351zm1.777,-1.426c0,0.172,-0.175,0.348,-0.351,0.348l-1.078,0c-0.176,0,-0.348,-0.176,-0.348,-0.348l0,-4.988c0,-0.176,0.172,-0.352,0.348,-0.352l1.078,0c0.176,0,0.351,0.176,0.351,0.352zm-8.645,-7.871c0.075,0,1.504,0.351,2.93,0.351c1.43,0,2.883,-0.351,2.934,-0.351c0.176,-0.024,0.324,-0.25,0.25,-0.426c-0.074,-0.176,-0.25,-0.324,-0.426,-0.25c0,0,-1.402,0.352,-2.781,0.352c-1.379,0,-2.758,-0.352,-2.782,-0.352c-0.175,-0.023,-0.402,0.074,-0.425,0.25c0,0.176,0.101,0.379,0.3,0.426zm-5.988,-2.828l1.429,0c1,-0.078,1.602,-0.652,1.426,-1.856l-0.699,-3.558c-0.152,-0.653,-0.352,-1.703,-1.43,-1.703l-3.207,0c-1.078,0,-1.277,1.078,-1.429,1.703l-0.7,3.558c-0.175,1.204,0.426,1.778,1.426,1.856l1.43,0l0,10.348c0,0.398,-0.324,0.699,-0.703,0.699l-0.348,0c-0.602,0,-1.078,0.476,-1.078,1.078l0,0.351c0,0.176,0.148,0.352,0.351,0.352l5.36,0c0.176,0,0.351,-0.176,0.351,-0.352l0,-0.351c0,-0.602,-0.5,-1.078,-1.078,-1.078l-0.375,0c-0.402,0,-0.703,-0.324,-0.703,-0.699l0,-10.348zm0.727,11.75l0.351,0c0.176,0,0.352,0.176,0.352,0.352l-4.637,0c0,-0.176,0.148,-0.352,0.352,-0.352l0.351,0c0.774,0,1.426,-0.652,1.426,-1.43l0.351,0c0.024,0.805,0.653,1.43,1.454,1.43zm-1.777,-2.129l0,-9.621l0.347,0l0,9.621zm-2.156,-10.348c-0.578,0,-0.828,-0.429,-0.703,-1.004l0.703,-3.558c0.176,-0.953,0.402,-1.153,0.703,-1.153l3.23,0c0.325,0,0.528,0.176,0.703,1.153l0.7,3.558c0.101,0.575,-0.149,1.004,-0.7,1.004zm0,0"
    );
  }

  // socks -> sofa-plain
  if (form_n == 10) {
    return (
      "M" +
      (x + 20.2) +
      "," +
      (y + 5.6) +
      "c-0.277,0,-0.555,0.051,-0.809,0.18l0,-3.125l-18.582,0l0,3.097c-1.007,-0.379,-2.14,0.153,-2.519,1.168c-0.352,0.993,0.101,2.086,1.035,2.516l0,4.98l1.055,0l0,1.168l2.898,0l0,-1.168l13.57,0l0,1.168l2.872,0l0,-1.168l1.257,0l0,-4.98c1.008,-0.43,1.461,-1.598,1.036,-2.59c-0.305,-0.762,-1.008,-1.246,-1.813,-1.246zm-18.887,-2.438l17.575,0.001l0,2.945c-0.375,0.355,-0.629,0.84,-0.653,1.371l0,2.262l-16.191,0l0,-2.286c-0.028,-0.558,-0.305,-1.066,-0.731,-1.421zm16.922,7.086l0,1.398l-16.192,0l0,-1.398zm-15.461,4.828l-1.863,0l0,-0.66l1.863,0zm16.418,0l-1.863,0l0,-0.66l1.863,0zm1.461,-6.07l-0.176,0.05l0,4.852l-20.625,0l0,-4.852l-0.176,-0.05c-0.781,-0.231,-1.211,-1.067,-0.984,-1.856c0.227,-0.789,1.059,-1.219,1.84,-0.992c0.578,0.18,0.98,0.711,1.031,1.32l0,4.676l17.199,0l0,-4.676c0.051,-0.812,0.731,-1.422,1.535,-1.371c0.809,0.051,1.411,0.739,1.36,1.551c-0.024,0.637,-0.453,1.168,-1.004,1.348zm0,0"
    );
  }

  // mens shoe -> sofa-single-plain
  if (form_n == 11) {
    return (
      "M" +
      (x + 0.5) +
      "," +
      (y + 10.2) +
      "l0,7.547c0,0.148,0.102,0.25,0.25,0.25l1.383,0l0,0.558c0,0.707,0.543,1.266,1.238,1.266l1.68,0c0.691,0,1.238,-0.559,1.238,-1.266l0,-0.558l7.293,0l0,0.558c0,0.707,0.547,1.266,1.238,1.266l1.684,0c0.691,0,1.234,-0.559,1.234,-1.266l0,-0.558l1.707,0c0.149,0,0.246,-0.102,0.246,-0.25l0,-7.547c1.508,-0.582,2.25,-2.305,1.684,-3.82c-0.57,-1.547,-2.25,-2.305,-3.734,-1.723c-0.125,0.051,-0.25,0.102,-0.371,0.176l0,-4.758c0,-0.152,-0.102,-0.254,-0.25,-0.254l-13.946,0c-0.148,0,-0.25,0.102,-0.25,0.254l0,4.707c-1.433,-0.758,-3.187,-0.176,-3.906,1.293c-0.742,1.469,-0.172,3.266,1.262,4c0.097,0.051,0.222,0.102,0.32,0.125zm5.316,8.355c0,0.43,-0.32,0.758,-0.738,0.758l-1.683,0c-0.422,0,-0.743,-0.328,-0.743,-0.758l0,-0.558l3.164,0zm11.453,0c0,0.43,-0.324,0.758,-0.742,0.758l-1.684,0c-0.418,0,-0.742,-0.328,-0.742,-0.758l0,-0.559l3.192,0zm-13.949,-18.254l13.476,0l0,4.859c-0.59,0.536,-0.961,1.293,-1.011,2.102l0,3.699l-11.352,0l0,-3.722c-0.051,-0.86,-0.469,-1.645,-1.113,-2.176zm12.465,11.164l0,2.508l-11.352,0l0,-2.508zm-14.246,-6.504c1.262,0,2.324,1.012,2.398,2.301l0,6.965c0,0.152,0.102,0.254,0.25,0.254l11.844,0c0.149,0,0.25,-0.102,0.25,-0.254l0,-6.965c0.074,-1.367,1.211,-2.402,2.547,-2.328c1.336,0.078,2.348,1.242,2.273,2.609c-0.05,1.035,-0.742,1.922,-1.707,2.203c-0.097,0.024,-0.171,0.125,-0.171,0.25l0,7.469l-18.227,0l0,-7.469c0,-0.125,-0.074,-0.226,-0.172,-0.25c-1.289,-0.406,-2.004,-1.773,-1.609,-3.09c0.32,-1.011,1.261,-1.722,2.324,-1.695zm0,0"
    );
  }

  // mens necktie -> table-lamp
  if (form_n == 12) {
    return (
      "M" +
      (x + 5) +
      "," +
      (y + 19.5) +
      "l0,-10.133l-0.648,0c-0.426,0,-0.426,-0.629,0,-0.629l2.625,0l0,-0.312c0,-1.012,0.722,-1.883,1.699,-2.145l-1.875,-2.367c-0.149,0.051,-0.301,0.074,-0.477,0.074c-0.898,0,-1.648,-0.699,-1.648,-1.593c0,-0.891,0.726,-1.59,1.648,-1.59c0.426,0,0.824,0.168,1.125,0.433l3.625,-1.976c0.149,-0.075,0.348,-0.028,0.449,0.117l0.973,1.594c1.051,-0.411,2.274,-0.024,2.848,0.941l0.324,0.555c0.102,0.144,0.027,0.336,-0.125,0.433l-3.395,1.907c-0.152,0.097,-0.351,0.023,-0.449,-0.122l-0.328,-0.554c-0.574,-0.965,-0.324,-2.172,0.551,-2.848l-0.824,-1.301l-3.297,1.786c0.074,0.191,0.125,0.41,0.125,0.625c0,0.171,-0.028,0.316,-0.074,0.484c-0.102,0.289,-0.278,0.555,-0.528,0.746l2.074,2.582c1.2,0.074,2.125,1.039,2.125,2.219l0,0.312l3.274,0c0.422,0,0.422,0.629,0,0.629l-0.652,0l0,10.133l4.597,0c0.426,0,0.426,0.625,0,0.625l-18.363,0c-0.426,0,-0.426,-0.625,0,-0.625zm1.301,-16.141c0.551,0,0.972,-0.433,0.972,-0.941c0,-0.527,-0.449,-0.938,-0.972,-0.938c-0.551,0,-0.973,0.434,-0.973,0.938c0,0.508,0.449,0.941,0.973,0.941zm8.469,-1.133c-0.449,-0.746,-1.449,-1.012,-2.246,-0.578c-0.778,0.434,-1.051,1.398,-0.602,2.172l0.176,0.266l2.848,-1.594zm-3.871,6.199c0,-0.867,-0.727,-1.59,-1.649,-1.59c-0.902,0,-1.648,0.7,-1.648,1.59l0,0.313l3.27,0l0,-0.313zm-5.246,11.074l7.867,0l0,-5.695l-7.867,0zm0,-6.348l7.867,0l0,-3.785l-7.867,0zm3.273,-1.566c-0.175,0,-0.328,-0.145,-0.328,-0.313c0,-0.168,0.153,-0.312,0.328,-0.312l1.297,0c0.176,0,0.325,0.144,0.325,0.312c0,0.168,-0.149,0.313,-0.325,0.313zm0,0"
    );
  }

  // womens shoes -> table-mirror
  if (form_n == 13) {
    return (
      "M" +
      (x + 10.8) +
      "," +
      (y + 4) +
      "c0.051,0,0.125,-0.023,0.176,-0.074l1.969,-1.969c0.101,-0.102,0.101,-0.227,0,-0.328c-0.102,-0.102,-0.227,-0.102,-0.329,0l-1.968,1.969c-0.098,0.101,-0.098,0.226,0,0.328c0.027,0.074,0.078,0.074,0.152,0.074zm1.793,1.59c-0.102,0.101,-0.102,0.226,0,0.328c0.051,0.051,0.125,0.078,0.176,0.078c0.051,0,0.125,-0.027,0.176,-0.078l1.968,-1.969c0.102,-0.097,0.102,-0.226,0,-0.328c-0.101,-0.098,-0.226,-0.098,-0.328,0zm-1.617,0c0.051,0.051,0.129,0.078,0.18,0.078c0.046,0,0.125,-0.027,0.175,-0.078l3.278,-3.277c0.101,-0.102,0.101,-0.231,0,-0.328c-0.098,-0.102,-0.227,-0.102,-0.329,0l-3.277,3.253c-0.129,0.102,-0.129,0.25,-0.027,0.352zm8.379,3.18l-1.617,0l0,-8.352c-0.024,-0.125,-0.125,-0.226,-0.25,-0.226l-14.813,0c-0.125,0,-0.226,0.101,-0.226,0.226l0,8.352l-1.641,0c-0.125,0,-0.227,0.101,-0.227,0.226l0,9.969c0,0.125,0.102,0.227,0.227,0.227l18.547,0c0.125,0,0.226,-0.102,0.226,-0.227l0,-9.969c0,-0.125,-0.074,-0.226,-0.226,-0.226zm-0.227,5.703l-8.808,0l0,-2.398l8.808,0zm-8.809,0.453l8.809,0l0,2.399l-8.809,0zm8.809,-3.305l-8.809,0l0,-2.398l8.809,0zm-16.227,-10.977l14.383,0l0,8.125l-14.383,0zm-1.867,8.605l8.832,0l0,8.075l-8.805,0l0,-8.075zm18.094,9.488l-18.094,0l0,-0.933l18.066,0l0,0.933zm-3.23,-9.035l-2.321,0c-0.129,0,-0.226,0.101,-0.226,0.226c0,0.129,0.097,0.231,0.226,0.231l2.321,0c0.125,0,0.226,-0.102,0.226,-0.231c0,-0.125,-0.101,-0.226,-0.226,-0.226zm-7.672,0.457c-0.125,0,-0.226,0.098,-0.226,0.227l0,3.707c0,0.125,0.101,0.226,0.226,0.226c0.129,0,0.227,-0.101,0.227,-0.226l0,-3.684c0.027,-0.152,-0.098,-0.25,-0.227,-0.25zm5.352,2.773l2.32,0c0.125,0,0.226,-0.101,0.226,-0.226c0,-0.125,-0.101,-0.227,-0.226,-0.227l-2.32,0c-0.129,0,-0.227,0.102,-0.227,0.227c0,0.125,0.074,0.226,0.227,0.226zm2.32,2.32l-2.32,0c-0.129,0,-0.227,0.102,-0.227,0.227c0,0.129,0.098,0.23,0.227,0.23l2.32,0c0.125,0,0.227,-0.101,0.227,-0.23c0,-0.125,-0.102,-0.227,-0.227,-0.227zm0,0"
    );
  }
}

function detailed_client_outline_g(client_n) {
  // return female client-vneck svg path -> female-top-vest
  if (client_n == 1) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/female-white/female-top-vest-white.svg" transform = "scale(0.3)" ></image >';
  }
  // return female client-tshirt svg path -> female-top-slant
  if (client_n == 2) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/female-white/female-top-slant-white.svg" transform = "scale(0.3)" ></image >';
  }
  // return female client-bun svg path -> female-v-neck
  if (client_n == 3) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/female-white/female-v-neck-white.svg" transform = "scale(0.3)" ></image >';
  }
  // return male client-tie svg path -> male-jacket
  if (client_n == 4) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/male-white/male-jacket-white.svg" transform = "scale(0.3)" ></image >';
  }
  // return male client-tshirt svg path -> male-collar
  if (client_n == 5) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/male-white/male-collar-white.svg" transform = "scale(0.3)" ></image >';
  }
  // return male client-tshirt2 svg path -> male-sleeveless -> factory
  if (client_n == 6) {
    return '<image overflow="visible" width="91" height="154" xlink:href="Trampoline-svg-crop/factory.svg" transform = "scale(0.5)" ></image >';
  }
}
