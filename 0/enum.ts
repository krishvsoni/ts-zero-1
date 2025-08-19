enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move);
console.log(Direction[2]);


enum Status{
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
function showStatus(status: Status): void {
    console.log(`Current status: ${status}`);
}

showStatus(Status.Active);
