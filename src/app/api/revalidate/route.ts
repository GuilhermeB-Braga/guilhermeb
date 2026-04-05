import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    if(secret !== process.env.SANITY_REVALIDATE_SECRET){
        return NextResponse.json({ message: 'Invalid Token'}, {status: 401})
    }

    try{
        const body = await request.json()
        const type = body._type

        if (type === 'project') {
            revalidateTag('projects','default')
            return NextResponse.json({ revalidated: true, now: Date.now() })
        }

        return NextResponse.json({ revalidated: false })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch(err) {
        return NextResponse.json({message: 'Error revalidating'}, { status: 500 })
    }
    
}