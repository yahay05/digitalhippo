"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "<h3>Please verify your email by clicking the link down below</h3><a href='".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, "'>Click to verify</a>");
            }
        }
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" }
            ],
        },
    ]
};
exports.default = Users;
