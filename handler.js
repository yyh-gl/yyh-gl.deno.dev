function handleRequest(request) {
  const html = `<html>
<h1>Welcome to yyh-gl's denoland</h1>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
