import { SLA } from "../src/sla";

test("Should greet with message", () => {
  const sla = new SLA();
  expect(sla.count(99.9)).toBe(525074.4);
});
