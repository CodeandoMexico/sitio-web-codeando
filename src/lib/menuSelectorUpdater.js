import { principalMenuStore } from "@/store";

export function updateMenuSelector({url = '/', color = 'text-white', background = 'bg-cmxnuanced'}) {
  principalMenuStore.update(data => {
    data.urlActive = url;
    data.color = color;
    data.background = background;
    return data;
  });

  return () => {
    principalMenuStore.update(data => {
      data.urlActive = '';
      data.color = '';
      data.background = '';
      return data;
    });
  };
}