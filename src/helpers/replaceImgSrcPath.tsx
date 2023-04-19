export const replaceImgSrcPath = (path: string | undefined, url: string | undefined)  => {
  if (path === undefined || url === undefined) return '';

  return path.replace(url, '');
}