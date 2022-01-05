import { NS } from "../lib/BitBurner";

export const main = async (ns: NS) => {
  while (true) {
    const hackableHosts = ns
      .scan("home")
      .filter(
        (h) =>
          ns.hasRootAccess(h) &&
          ns.getHackingLevel() > ns.getServerRequiredHackingLevel(h)
      );

    ns.toast(`Hackables: ${hackableHosts}`, "info");

    for (const h of hackableHosts) {
      ns.toast(`Hacking ${h}...`, "info");
      const reward = await ns.hack(h);
      if (reward === 0) {
        await ns.weaken(h);
        await ns.grow(h);
      }
      ns.toast(`Hacked ${h}!`, "success");
    }
  }
};
