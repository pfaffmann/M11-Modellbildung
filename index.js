function frameChange(ref) {
  const frameRef = eval(`parent.${ref.target}`);
  frameRef.location.href = ref.href;
  return false;
}
