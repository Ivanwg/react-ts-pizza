export function getActiveClassName(index: number, activeIndex: number) {
  const activeClassName = 'active';

  return index === activeIndex ? activeClassName : undefined;
}