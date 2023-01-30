import { createResponse } from "../response";
import { HandlerRequest } from "../api/types";
import { fetchPageRoute } from "../api";

export async function pageRoute({ params, notionToken }: HandlerRequest) {
  return createResponse(fetchPageRoute(params.pageId, notionToken!));
}
