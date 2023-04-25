export default function MyDate() {
  if (!(this instanceof MyDate)) {
    const now = new Date();
    return now.toString();
  }

  const args = arguments;
  if (args.length === 0) {
    this.date = new Date();
  } else if (args.length === 1 && typeof args[0] === "string") {
    this.date = new Date(args[0]);
  } else {
    this.date = new Date(
      args[0],
      args[1],
      args[2],
      args[3],
      args[4],
      args[5],
      args[6]
    );
  }
}

MyDate.prototype.toString = function () {
  return this.date.toString();
};
