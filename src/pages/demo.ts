export const prerender = false;

export function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: import.meta.env.PUBLIC_CALENDLY_URL,
    },
  });
}
