import "reflect-metadata";

class Plane {
  color: string = "red";

  @markFunction("")
  fly(): void {
    console.log("vrrrrr");
  }
}

function markFunction(secret: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", 123, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    Reflect.getMetadata("secret", target.prototype, key);
  }
}
