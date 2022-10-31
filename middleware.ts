import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { MiddlewareRequest, NextDataTransform } from '@netlify/next';

export async function middleware(req: NextRequest) {
	const request = new MiddlewareRequest(req);

	// Unlike NextResponse.next(), this actually sends the request to the origin
	const response = await request.next();

	response.transformData((data) => {
		data.pageProps.prices = [
			{ id: 1, price: 20 },
			{ id: 2, price: 30 },
			{ id: 3, price: 78 },
		];

		response.replaceText('li:first-of-type', data.pageProps.prices[0].price);

		return data;
	});

	return response;
}

export const config = {
	matcher: ['/:all*'],
};
