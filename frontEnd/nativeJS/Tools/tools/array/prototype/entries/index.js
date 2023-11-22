Array.prototype.myEntries = function* () {
  const keyAndValues = Object.entries(this);

  for (const [key, value] of keyAndValues) {
    yield [+key, value];
  }
};
