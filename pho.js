if (freq < threshold) {
  showHint("Increase frequency, not intensity");
}

if (freq >= threshold && electrons.length === 0) {
  highlightMetalSurface();
}

if (userRepeatsMistake) {
  slowDownSimulation();
}
