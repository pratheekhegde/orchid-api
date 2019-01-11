export function errorFormatter(joiErrorObject) {
  return joiErrorObject.map(m => {
    return {
      [m.path]: m.message,
    };
  });
}
