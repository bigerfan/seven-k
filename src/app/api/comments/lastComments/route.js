import { NextResponse } from "next/server";
import { ProdSchema } from "@/lib/models";

export async function GET(req) {
    try {
        const latestComments = await ProdSchema.aggregate([
            { $unwind: "$comments" },
            { $sort: { "comments.createdAt": -1 }  },
            { $limit: 5 },
            {
                $lookup: {
                    from: "users",
                    localField: "comments.user",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            { $unwind: "$userDetails" },
            {
                $project: {
                    "productTitle":"$title",
                    "comment": "$comments",
                    "user": { username: "$userDetails.username", avatar: "$userDetails.avatar" },
                    "productId": "$_id",
                    "createdAt": "$comments.createdAt"
                }
            }
        ]);

        return NextResponse.json(latestComments, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'خطایی رخ داده' }, { status: 500 })
    }
}