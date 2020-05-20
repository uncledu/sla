import { SLA } from './sla';

const sla = new SLA();
if (process.argv) {
  const percentage = Number(process.argv[2]);
  if (isNaN(percentage)) {
    // tslint-disable-next-line
    process.stderr.write('invalid input');
  } else {
    // tslint-disable-next-line
    process.stdout.write(sla.print(percentage).toString());
  }
}
