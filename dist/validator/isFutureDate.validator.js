"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsFutureDate = void 0;
const class_validator_1 = require("class-validator");
function IsFutureDate(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsFutureDate',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const dateValue = new Date(value);
                    const now = new Date();
                    const istNow = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() + 5, now.getUTCMinutes() + 30, now.getUTCSeconds(), now.getUTCMilliseconds());
                    return (dateValue instanceof Date &&
                        !isNaN(dateValue.getTime()) &&
                        dateValue.getTime() > istNow);
                },
            },
        });
    };
}
exports.IsFutureDate = IsFutureDate;
//# sourceMappingURL=isFutureDate.validator.js.map