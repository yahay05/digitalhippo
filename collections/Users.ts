import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
    slug: "users",
    auth: {
        verify:{
            generateEmailHTML: ({token}) => {
                return `<h3>Please verify your email by clicking the link down below</h3><a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Click to verify</a>`
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            type: "select",
            options: [
                {label: "Admin", value: "admin"},
                {label: "User", value: "user" }
            ],
        },
    ]
}

export default Users