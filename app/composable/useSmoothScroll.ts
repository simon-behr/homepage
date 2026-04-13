export function useSmoothScroll() {
  function scrollTo(selector: string) {
    document.querySelector(selector)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return { scrollTo }
}
