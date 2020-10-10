//防抖函数生成器
export function debounce(func,delay,){
  let timer = null;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
      func.apply(null,args);
    },delay);
  }
}