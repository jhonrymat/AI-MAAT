import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Configurar los encabezados CORS
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');  // Permitir todos los orígenes. En producción, deberías restringir esto a tu dominio.
    headers.set('Access-Control-Allow-Methods', 'GET');  // Permitir solo el método GET
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return NextResponse.json({ baseUrl }, { headers });
}