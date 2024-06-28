import {NextResponse} from "next/server"
import {libquery} from "../../lib/db"

// loopsider get images
export async function GET() {
	try {
		const result = await libquery(
			"SELECT created_time, storage_thumbnail, account_profile_picture_url, account_name, caption FROM fb_instagram_media_content WHERE account_id = 2 AND storage_thumbnail IS NOT NULL LIMIT 10;"
		)
		return NextResponse.json({data: result.rows}, {status: 200})
	} catch (error) {
		return NextResponse.json({message: "Failed"}, {status: 500})
	}
}
