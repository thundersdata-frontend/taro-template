"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function warning(message) {
    if (process.env.NODE_ENV !== 'production') {
        console.error(message);
    }
}
exports.default = warning;
//# sourceMappingURL=warning.js.map