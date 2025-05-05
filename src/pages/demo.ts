export async function GET() {
  const target = import.meta.env.PUBLIC_CALENDLY_URL;

  return new Response(null, {
    status: 302, // 307 si vous voulez préserver la méthode HTTP
    headers: { Location: target },
  });
}
