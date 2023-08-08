var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat's color is ".concat(this.color);
        },
        enumerable: false,
        configurable: true
    });
    Boat.prototype.pilot = function (speed) {
        if (speed === 'fast') {
            console.log('Swish!');
        }
        else {
            console.log('Nothing happened!');
        }
        throw new Error();
    };
    __decorate([
        testDecorator
    ], Boat.prototype, "color");
    __decorate([
        testDecorator
    ], Boat.prototype, "formattedColor");
    __decorate([
        logError('Something bad happened while boating!'),
        __param(0, parameterDecorator)
    ], Boat.prototype, "pilot");
    Boat = __decorate([
        classDecorator
    ], Boat);
    return Boat;
}());
function classDecorator(constructor) {
    console.log(constructor);
}
function parameterDecorator(target, key, index) {
    console.log(key, index);
}
function testDecorator(target, key) {
    console.log(target);
    console.log(key);
}
function logError(errorMessage) {
    return function (target, key, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
