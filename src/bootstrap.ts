import type { BitBurner } from "BitBurner";
import { UPSTREAM_RELEASE_URL } from "./config";
import { request } from "./util";

export const main = async (ns: BitBurner) => {
  const { assets } = await request(UPSTREAM_RELEASE_URL);

  for (const asset of assets) {
    const succeeded = await ns.wget(asset.browser_download_url, asset.name);

    ns.tprint(`${succeeded ? "Fetched" : "Failed to fetch"} ${asset.name}`);
  }
};
