export type Infos = { name: string; address: string };

export const callApi = async (value: string): Promise<Infos> => {
    const url = new URL("/api/infos");
    url.search = new URLSearchParams({ value }).toString();
    return await (await fetch(url.toString())).json();
  };