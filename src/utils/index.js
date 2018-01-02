import Vue from 'vue'
import './rem.js'
import './normalize.css'
import Plugins from './plugins.js'
import md5js from './jquery.md5.js'

Vue.use(Plugins)

export const saveLocal=(name,value)=>{
  localStorage.setItem(name,JSON.stringify(value))
}

export const getLocal=(name)=>{
  return JSON.parse(localStorage.getItem(name))
}

export const md5=md5js

export const XTEA = (function () {
  var exports = {};
  exports.encrypt = encrypt;
  exports.decrypt = decrypt;
  return exports;

  // use (16 chars of) 'password' to encrypt 'plaintext'
  function encrypt(plaintext, password) {
    var v = new Array(2), k = new Array(4), s = "", i;
    // build key directly from 1st 16 chars of password
    for (var i = 0; i < 4; i++) {
      k[i] = Str4ToLong(password.slice(i * 4, (i + 1) * 4));
    }

    for (i = 0; i < plaintext.length; i += 8) {  // encode plaintext into s in 64-bit (8 char) blocks
      v[0] = Str4ToLong(plaintext.slice(i, i + 4));
      v[1] = Str4ToLong(plaintext.slice(i + 4, i + 8));
      code(v, k);
      s += LongToStr4(v[0]) + LongToStr4(v[1]);
    }
    return encodeHexStr(s);
  }

  // use (16 chars of) 'password' to decrypt 'ciphertext' with xTEA
  function decrypt(ciphertext, password) {
    var v = new Array(2), k = new Array(4), s = "", i;

    for (var i = 0; i < 4; i++) {
      k[i] = Str4ToLong(password.slice(i * 4, (i + 1) * 4));
    }

    ciphertext = decodeHexStr(ciphertext);
    for (i = 0; i < ciphertext.length; i += 8) {  // decode ciphertext into s in 64-bit (8 char) blocks
      v[0] = Str4ToLong(ciphertext.slice(i, i + 4));
      v[1] = Str4ToLong(ciphertext.slice(i + 4, i + 8));
      decode(v, k);
      s += LongToStr4(v[0]) + LongToStr4(v[1]);
    }

    // strip trailing null chars resulting from filling 4-char blocks:
    s = s.replace(/\0+$/, '');

    //return unescape(s);
    return s;
  }


  function code(v, k) {
    // Extended TEA: this is the 1997 revised valuersion of Needham & Wheeler's algorithm
    // params: v[2] 64-bit value block; k[4] 128-bit key
    var y = v[0], z = v[1];
    var delta = 0x9E3779B9, limit = delta * 32, sum = 0;

    while (sum != limit) {
      y += (z << 4 ^ z >>> 5) + z ^ sum + k[sum & 3];
      sum += delta;
      z += (y << 4 ^ y >>> 5) + y ^ sum + k[sum >>> 11 & 3];
    }
    v[0] = y;
    v[1] = z;
  }

  function decode(v, k) {
    var y = v[0], z = v[1];
    var delta = 0x9E3779B9, sum = delta * 32;

    while (sum != 0) {
      z -= (y << 4 ^ y >>> 5) + y ^ sum + k[sum >>> 11 & 3];
      sum -= delta;
      y -= (z << 4 ^ z >>> 5) + z ^ sum + k[sum & 3];
    }
    v[0] = y;
    v[1] = z;
  }


  function Str4ToLong(s) {  // convert 4 chars of s to a numeric long
    var v = 0;
    for (var i = 0; i < 4; i++) v |= s.charCodeAt(i) << i * 8;
    return isNaN(v) ? 0 : v;
  }

  function LongToStr4(v) {  // convert a numeric long to 4 char string
    var s = String.fromCharCode(v & 0xFF, v >> 8 & 0xFF, v >> 16 & 0xFF, v >> 24 & 0xFF);
    return s;
  }

  function encodeHexStr(asciiStr) {
    var s = '';
    for (var i = 0; i < asciiStr.length; i++) {
      var hex = asciiStr.charCodeAt(i).toString(16);
      if (hex.length == 1) {
        hex = '0' + hex;
      }
      s += hex;
    }
    return s;
  }

  function decodeHexStr(hexStr) {
    var s = '';
    for (var i = 0; i < hexStr.length; i += 2) {
      var hex = hexStr.substring(i, i + 2);
      if (hex.indexOf('0') == 0) {
        hex = hexStr.substring(i + 1, i + 2);
      }
      s += String.fromCharCode(parseInt(hex, 16));
    }
    return s;
  }

})()

export const getEncrytedPwd=(username,pwd,randomKey)=>{
  const pwdMd5 = md5(pwd)
  const S2 = md5(username + pwdMd5)
  const timestamp = Math.floor(Date.now() / 1000)
  return XTEA.encrypt(username + "," + pwdMd5 + "," + timestamp + "," + randomKey, S2);
}






