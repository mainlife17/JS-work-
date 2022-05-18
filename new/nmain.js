let mon = +prompt("Какого вы месяца ?");
if ((mon >= 1 && mon < 3) || mon === 12) {
  alert("Zima");
} else if (mon >= 3 && mon < 6) {
  alert("VEsna");
} else if (mon >= 6 && mon < 9) {
  alert("Leto");
} else if (mon >= 9 && mon < 12) {
  alert("Osen");
}
