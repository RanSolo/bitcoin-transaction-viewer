import { NextRequest, NextResponse } from "next/server";
import mempoolJS from "@mempool/mempool.js";

interface Props {
    params: {
        address: string
    }
}

export async function GET(request: NextRequest, {params: { address }}: Props) {
    const { bitcoin: { addresses } } = mempoolJS({
        hostname: 'mempool.space'
    });

    const body = await addresses.getAddressTxs({ address });

    return NextResponse.json(body, { status: 200});
}
