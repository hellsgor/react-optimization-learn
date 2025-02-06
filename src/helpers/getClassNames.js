export function getClassNames(root, someClasses) {
  return Array.isArray(someClasses)
    ? someClasses.push(root).join(' ')
    : `${someClasses} ${root}`;
}
