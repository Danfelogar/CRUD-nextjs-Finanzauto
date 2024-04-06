import { Buffer } from "buffer";

function base64UrlEncode(value: string): string {
  let str = Buffer.from(value).toString("base64");
  str = str.replace("+", "-").replace("/", "_").replace(/=+$/, "");
  return str;
}

export function createJwtToken(payload: any, secret: string): string {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = base64UrlEncode(
    Buffer.from(
      require("crypto")
        .createHmac("sha256", secret)
        .update(encodedHeader + "." + encodedPayload)
        .digest("base64")
    ).toString("base64")
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}
