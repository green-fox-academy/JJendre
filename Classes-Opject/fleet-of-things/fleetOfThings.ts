import { Thing } from './thing';
import { Fleet } from './fleet';

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

class FleetOfThings {
  main() {
    let fleet = new Fleet();
    let milk = new Thing('Get milk');
    let obstacles = new Thing('Remove the obstacles');
    let standup = new Thing('Stand up');
    let lunch = new Thing('Eat lunch');

    standup.complete();
    lunch.complete();

    fleet.add(milk);
    fleet.add(obstacles);
    fleet.add(standup);
    fleet.add(lunch);

    console.log(fleet.toString());
  }
}
let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
